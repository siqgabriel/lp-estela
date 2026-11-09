"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, registerGsap, ScrollTrigger } from "@/lib/motion";
import { registerLenis } from "@/lib/scroll";

/** O skip link fica com o comportamento nativo, que também move o foco. */
const SKIP_LINK = "#conteudo";

/**
 * Lenis como driver único de scroll, alimentando o ScrollTrigger.
 * - Sempre ligado, inclusive com movimento reduzido (regra do cliente, ver CLAUDE.md).
 *   lerp 0.07: sensação próxima do ScrollSmoother "smooth: 2" do Davies.
 * - O callback do ticker é removido no cleanup e o lagSmoothing é restaurado.
 * - Âncoras passam pelo Lenis; o offset do header fixo vem de scroll-padding-top (--header-h).
 * - ScrollTrigger.refresh após fontes, load e abertura/fechamento de <details>.
 */
export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    registerGsap();
    const setup = () => {
      const lenis = new Lenis({ lerp: 0.07, smoothWheel: true, respectReducedMotion: false });
      lenis.on("scroll", ScrollTrigger.update);

      const tick = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      registerLenis(lenis);

      // Âncoras: a opção `anchors` do Lenis não cancela o salto nativo e os dois
      // scrolls disputam. Aqui o salto nativo é cancelado e o Lenis anima até o alvo;
      // o offset do header vem do scroll-padding-top do <html>, que o Lenis já desconta.
      const coarsePointer = window.matchMedia("(pointer: coarse)");
      const onAnchorClick = (event: MouseEvent) => {
        if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey) return;
        const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
        const hash = link?.getAttribute("href");
        if (!link || !hash || hash.length < 2 || hash === SKIP_LINK) return;
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (!target) return;
        event.preventDefault();
        // Em toque, o próprio toque interrompe a animação do Lenis (que não suaviza
        // touch); ali o scroll suave nativo faz o trabalho e respeita o scroll-padding-top.
        if (coarsePointer.matches) target.scrollIntoView({ behavior: "smooth", block: "start" });
        else lenis.scrollTo(target);
        history.pushState(null, "", hash);
      };
      document.addEventListener("click", onAnchorClick);

      return () => {
        document.removeEventListener("click", onAnchorClick);
        gsap.ticker.remove(tick);
        gsap.ticker.lagSmoothing(500, 33);
        registerLenis(null);
        lenis.destroy();
      };
    };
    const teardown = setup();

    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    if (document.readyState !== "complete") window.addEventListener("load", refresh, { once: true });
    // "toggle" não borbulha: captura no documento cobre todos os <details>.
    document.addEventListener("toggle", refresh, true);
    // A saída do preloader libera o scroll (o Lenis tira o overflow: clip no quadro seguinte);
    // recalcula as posições depois disso.
    let lateRefresh = 0;
    const refreshAfterUnlock = () => {
      window.clearTimeout(lateRefresh);
      lateRefresh = window.setTimeout(refresh, 150);
    };
    window.addEventListener("gc:preloader-done", refreshAfterUnlock);

    return () => {
      document.removeEventListener("toggle", refresh, true);
      window.removeEventListener("gc:preloader-done", refreshAfterUnlock);
      window.clearTimeout(lateRefresh);
      window.removeEventListener("load", refresh);
      teardown();
    };
  }, []);

  return <>{children}</>;
}

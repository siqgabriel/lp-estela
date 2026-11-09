"use client";

import { useEffect } from "react";
import { createMotion, DESKTOP, gsap, ScrollTrigger } from "@/lib/motion";

/**
 * Passagem do preloader para o hero: o bloco ink nasce cobrindo o campo e recua
 * até o eixo (64% no desktop; 74% da palavra no celular) quando o preloader sai.
 * A palavra troca de cor junto, porque usa a mesma variável do bloco. A grade do hero usa
 * 64% fixo: animar --cut não pode mudar a altura da página (os pins dependem dela).
 * Sem JS: estado final direto. Não é efeito de rolagem: segue ativo com movimento reduzido.
 */
export function HeroMotion() {
  useEffect(() => {
    const section = document.getElementById("hero");
    if (!section) return;
    const mm = createMotion();

    mm.add({ desktop: DESKTOP }, (context) => {
      const { desktop } = context.conditions as { desktop: boolean };
      // No celular a palavra é sólida (sem troca de cor); só o desktop faz a passagem.
      if (!desktop) return;
      const prop = "--cut";
      const final = "64%";

      gsap.set(section, { [prop]: "0%" });
      const run = () =>
        gsap.to(section, { [prop]: final, duration: 1.1, ease: "power3.inOut", onComplete: () => ScrollTrigger.refresh() });

      if ((window as unknown as { __gcPreloaderDone?: boolean }).__gcPreloaderDone) run();
      else window.addEventListener("gc:preloader-done", run, { once: true });
      return () => window.removeEventListener("gc:preloader-done", run);
    });

    return () => mm.revert();
  }, []);

  return null;
}

"use client";

import { useEffect } from "react";
import { createMotion, DESKTOP, gsap, MOTION_OK } from "@/lib/motion";

/**
 * Passagem do preloader para o hero: o bloco ink nasce cobrindo o campo e recua
 * até o eixo (64% no desktop; 74% da palavra no celular) quando o preloader sai.
 * A palavra troca de cor junto, porque usa a mesma variável do bloco.
 * Movimento reduzido ou sem JS: estado final direto.
 */
export function HeroMotion() {
  useEffect(() => {
    const section = document.getElementById("hero");
    if (!section) return;
    const mm = createMotion();

    mm.add({ ok: MOTION_OK, desktop: DESKTOP }, (context) => {
      const { ok, desktop } = context.conditions as { ok: boolean; desktop: boolean };
      if (!ok) return;
      const prop = desktop ? "--cut" : "--cut-y";
      const final = desktop ? "64%" : "62%";

      gsap.set(section, { [prop]: "0%" });
      const run = () => gsap.to(section, { [prop]: final, duration: 1.1, ease: "power3.inOut" });

      if ((window as unknown as { __gcPreloaderDone?: boolean }).__gcPreloaderDone) run();
      else window.addEventListener("gc:preloader-done", run, { once: true });
      return () => window.removeEventListener("gc:preloader-done", run);
    });

    return () => mm.revert();
  }, []);

  return null;
}

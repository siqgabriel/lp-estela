"use client";

import { useEffect } from "react";
import { createMotion, DESKTOP, gsap, SCROLL_FX } from "@/lib/motion";

/**
 * Pin da seção 7 (um dos dois autorizados, só no desktop).
 * Enquanto a seção fica presa, o eixo avança de 54% para 46% — o bloco "decidindo"
 * ganha espaço sobre "reagindo" — e os pares entram em sequência. Os textos têm
 * margem interna maior que o curso do eixo, então nunca ficam sob o bloco.
 * Sem pin se a seção não couber na tela. Movimento reduzido: estado final.
 */
export function ComparisonMotion() {
  useEffect(() => {
    const section = document.getElementById("duas-formas");
    const pin = section?.querySelector<HTMLElement>(".comparison-pin");
    if (!section || !pin) return;
    const mm = createMotion();

    mm.add(`${SCROLL_FX} and ${DESKTOP}`, () => {
      const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 72;
      if (pin.offsetHeight > window.innerHeight - header) return;

      const rows = section.querySelectorAll(".comparison-row");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: `top top+=${header}`,
          end: "+=80%",
          pin: true,
          scrub: 0.6,
          // Recalcula antes do pin da seção 8, que depende do espaço criado por este.
          refreshPriority: 2,
        },
      });
      tl.fromTo(section, { "--cut": "54%" }, { "--cut": "46%", ease: "none", duration: 1 }, 0)
        .from(rows, { opacity: 0.15, stagger: 0.12, duration: 0.3, ease: "none" }, 0)
        .from(section.querySelector(".comparison-impact"), { opacity: 0, duration: 0.25, ease: "none" }, 0.75);
    });

    return () => mm.revert();
  }, []);
  return null;
}

"use client";

import { useEffect } from "react";
import { createMotion, DESKTOP, gsap, SCROLL_FX, ScrollTrigger } from "@/lib/motion";

/**
 * Segundo pin autorizado (seção 8, só desktop, só com efeitos de rolagem).
 * Os cartões ficam sobrepostos numa pilha do tamanho do maior; enquanto a seção está
 * presa, cada cartão sobe de baixo (y 100% → 0) e cobre o anterior, que recua e escurece
 * (sem transparência, para não aparecer através do cartão de cima).
 * Sem pin se a seção não couber na tela.
 */
export function MethodStack() {
  useEffect(() => {
    const section = document.getElementById("metodo");
    const pin = section?.querySelector<HTMLElement>(".method-pin");
    const stack = section?.querySelector<HTMLElement>(".stack");
    if (!section || !pin || !stack) return;
    const mm = createMotion();

    mm.add(`${SCROLL_FX} and ${DESKTOP}`, () => {
      const cards = Array.from(stack.querySelectorAll<HTMLElement>(":scope > .stack-card"));
      if (cards.length < 2) return;
      const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 72;
      const tallest = Math.max(...cards.map((c) => c.offsetHeight));

      stack.classList.add("is-stacked");
      stack.style.height = `${tallest}px`;
      cards.forEach((c, i) => {
        c.style.height = `${tallest}px`;
        c.style.zIndex = String(i + 1);
      });

      if (pin.offsetHeight > window.innerHeight - header - 32) {
        // Não cabe: desfaz e mantém a lista.
        stack.classList.remove("is-stacked");
        stack.style.height = "";
        cards.forEach((c) => {
          c.style.height = "";
          c.style.zIndex = "";
        });
        return;
      }

      gsap.set(cards.slice(1), { yPercent: 105 });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pin,
          start: `top top+=${header + 32}`,
          end: `+=${(cards.length - 1) * tallest * 0.9}`,
          pin: true,
          scrub: 0.6,
          invalidateOnRefresh: true,
          refreshPriority: 1,
        },
      });
      // Os pins são criados em ordem de montagem; ordenar pela posição evita início atrasado.
      ScrollTrigger.sort();
      ScrollTrigger.refresh();

      cards.forEach((card, i) => {
        if (i === 0) return;
        tl.to(card, { yPercent: 0, ease: "none", duration: 1 }, i - 1).to(
          cards[i - 1],
          { scale: 0.95, filter: "brightness(0.55)", ease: "none", duration: 1 },
          i - 1,
        );
      });

      return () => {
        stack.classList.remove("is-stacked");
        stack.style.height = "";
        cards.forEach((c) => {
          c.style.height = "";
          c.style.zIndex = "";
        });
      };
    });

    return () => mm.revert();
  }, []);
  return null;
}

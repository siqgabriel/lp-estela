"use client";

import { useEffect, useRef } from "react";
import { createMotion, gsap, SCROLL_FX } from "@/lib/motion";

/**
 * Revela o conteúdo por máscara (clip-path de baixo para cima) quando entra na tela
 * e aplica paralaxe leve no elemento interno (.reveal-inner).
 * Efeito de rolagem: desligado com movimento reduzido (estado final direto).
 */
export function MaskReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const inner = el.querySelector<HTMLElement>(".reveal-inner");
    const mm = createMotion();
    mm.add(SCROLL_FX, () => {
      gsap.fromTo(
        el,
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        },
      );
      if (inner) {
        gsap.fromTo(
          inner,
          { yPercent: -5, scale: 1.08 },
          {
            yPercent: 5,
            scale: 1.08,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      }
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

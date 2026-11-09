"use client";

import { useEffect, useRef } from "react";
import { createMotion, gsap, MOTION_OK } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

/**
 * Fade + slide-up ao entrar no viewport (comportamento da primeira versão,
 * mantido até a reformulação das seções). Só existe com movimento permitido;
 * sem JS ou com movimento reduzido o conteúdo fica no estado final.
 */
export function Reveal({ children, className, delay = 0, y = 28 }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const mm = createMotion();
    mm.add(MOTION_OK, () => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        },
      );
    });
    return () => mm.revert();
  }, [delay, y]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

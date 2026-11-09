"use client";

import { useEffect, useRef } from "react";
import { createMotion, gsap, SCROLL_FX } from "@/lib/motion";

/**
 * Parágrafo-manifesto que se acende na rolagem (referência: text-color-change do Davies,
 * implementação própria por palavra). Texto real e completo; sem JS ou com movimento
 * reduzido aparece aceso desde o início.
 */
export function ScrollWords({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const words = el.querySelectorAll(".sw-word");
    const mm = createMotion();
    mm.add(SCROLL_FX, () => {
      gsap.fromTo(
        words,
        { opacity: 0.18 },
        {
          opacity: 1,
          stagger: { each: 0.04, from: "start" },
          ease: "none",
          scrollTrigger: { trigger: el, start: "top 78%", end: "bottom 38%", scrub: true },
        },
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <p ref={ref} className={className}>
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} className="sw-word">
          {word}{" "}
        </span>
      ))}
    </p>
  );
}

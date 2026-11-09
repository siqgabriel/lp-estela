"use client";

import { useEffect } from "react";
import { createMotion, gsap, MOTION_OK } from "@/lib/motion";

/** A foto desliza devagar dentro das letras enquanto a seção passa. Só com movimento permitido. */
export function MarketClarityMotion() {
  useEffect(() => {
    const section = document.getElementById("clareza");
    const word = section?.querySelector<HTMLElement>(".clareza-word");
    if (!section || !word) return;
    const mm = createMotion();
    mm.add(MOTION_OK, () => {
      gsap.fromTo(
        word,
        { backgroundPosition: "50% 38%" },
        {
          backgroundPosition: "50% 62%",
          ease: "none",
          scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: true },
        },
      );
    });
    return () => mm.revert();
  }, []);
  return null;
}

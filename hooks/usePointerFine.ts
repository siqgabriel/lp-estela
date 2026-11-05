"use client";

import { useEffect, useState } from "react";

/**
 * true só quando o dispositivo tem ponteiro fino (mouse/trackpad).
 * Usado para decidir se o cursor trail e micro-interações magnéticas montam.
 * Nunca ativar em touch — ver .claude/skills/estela-landing/SKILL.md.
 */
export function usePointerFine() {
  const [isFine, setIsFine] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(pointer: fine)");
    setIsFine(query.matches);

    const handler = (event: MediaQueryListEvent) => setIsFine(event.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  return isFine;
}

"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Ponto único de movimento do site.
 *
 * - Registra os plugins do GSAP uma vez.
 * - Define as media queries de movimento. Componentes não leem
 *   `prefers-reduced-motion` por conta própria: usam `createMotion()`
 *   (GSAP) ou `prefersReducedMotion()` (código sem GSAP, como o canvas).
 * - A página é desenhada completa no estado final; o movimento é camada extra.
 */

export const MOTION_OK = "(prefers-reduced-motion: no-preference)";
export const MOTION_REDUCED = "(prefers-reduced-motion: reduce)";
export const DESKTOP = "(min-width: 1024px)";

let registered = false;

export function registerGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

/**
 * Cria um gsap.matchMedia já com os plugins registrados.
 * Uso: const mm = createMotion(); mm.add({ ok: MOTION_OK, reduced: MOTION_REDUCED }, (ctx) => {...});
 * No cleanup do efeito: mm.revert().
 */
export function createMotion(scope?: Element | string | object) {
  registerGsap();
  return gsap.matchMedia(scope as Element | undefined);
}

/** Leitura síncrona, para código fora do GSAP (canvas, decisões de montagem). */
export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia(MOTION_REDUCED).matches;
}

export function onReducedMotionChange(callback: (reduced: boolean) => void): () => void {
  const query = window.matchMedia(MOTION_REDUCED);
  const handler = (event: MediaQueryListEvent) => callback(event.matches);
  query.addEventListener("change", handler);
  return () => query.removeEventListener("change", handler);
}

export { gsap, ScrollTrigger };

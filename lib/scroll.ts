"use client";

import type Lenis from "lenis";

/**
 * Estado compartilhado do scroll suave.
 * O preloader trava o scroll antes de o Lenis existir; quando o Lenis é
 * registrado, ele respeita a trava.
 */

let lenis: Lenis | null = null;
let locked = false;

export function registerLenis(instance: Lenis | null) {
  lenis = instance;
  if (lenis && locked) lenis.stop();
}

export function getLenis() {
  return lenis;
}

export function setScrollLocked(value: boolean) {
  locked = value;
  document.documentElement.classList.toggle("is-scroll-locked", value);
  if (!lenis) return;
  if (value) lenis.stop();
  else lenis.start();
}

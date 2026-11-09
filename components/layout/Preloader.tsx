"use client";

import { useEffect, useRef, useState } from "react";
import { createMotion, gsap } from "@/lib/motion";
import { setScrollLocked } from "@/lib/scroll";

/** Teto de espera: a entrada nunca fica presa além disso. */
const MAX_WAIT_MS = 3000;
const DRAW_S = 1.3;

/**
 * Visual mantido da primeira versão (estrela desenhada sobre fundo escuro).
 * Comportamento:
 * - aparece em todo carregamento e refresh (nada em storage);
 * - sai quando as fontes estão prontas, o `load` aconteceu e o traço terminou,
 *   com teto de MAX_WAIT_MS;
 * - movimento reduzido não altera o preloader (só efeitos de rolagem são desligados);
 * - sem JS: a animação CSS `.preloader` (globals.css) remove o overlay sozinha.
 */
export function Preloader() {
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const starRef = useRef<SVGPathElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const star = starRef.current;
    if (!root || !star) return;

    // O JS assume o controle: desliga a remoção automática por CSS.
    root.classList.add("is-controlled");
    setScrollLocked(true);

    let finished = false;
    const done = () => {
      setScrollLocked(false);
      setVisible(false);
      (window as unknown as { __gcPreloaderDone?: boolean }).__gcPreloaderDone = true;
      window.dispatchEvent(new Event("gc:preloader-done"));
    };

    const loaded = new Promise<void>((resolve) => {
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", () => resolve(), { once: true });
    });
    const fontsReady = document.fonts?.ready.then(() => undefined) ?? Promise.resolve();

    const mm = createMotion();
    mm.add("all", () => {
      const length = star.getTotalLength();

      const drawn = new Promise<void>((resolve) => {
        gsap.fromTo(
          star,
          { strokeDasharray: length, strokeDashoffset: length },
          { strokeDashoffset: 0, duration: DRAW_S, ease: "power1.inOut", onComplete: resolve },
        );
      });

      const exit = () => {
        if (finished) return;
        finished = true;
        gsap.to(root, {
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: done,
        });
      };

      const timeout = window.setTimeout(exit, MAX_WAIT_MS);
      Promise.all([loaded, fontsReady, drawn]).then(() => {
        window.clearTimeout(timeout);
        exit();
      });

      return () => window.clearTimeout(timeout);
    });

    return () => {
      mm.revert();
      setScrollLocked(false);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      role="status"
      aria-label="Carregando"
      className="preloader fixed inset-0 z-100 flex items-center justify-center bg-bastidor-bg-deep"
    >
      <svg width="72" height="72" viewBox="0 0 100 100" fill="none" aria-hidden="true">
        <path
          ref={starRef}
          d="M50 6 L61 38 L95 38 L67 58 L78 92 L50 71 L22 92 L33 58 L5 38 L39 38 Z"
          stroke="var(--bastidor-text)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

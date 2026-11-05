"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const MAX_WAIT_MS = 2200;

/**
 * Dispara em todo load/refresh (não só na primeira visita — por isso nenhum
 * estado é persistido em storage). Duração atrelada ao evento `load` da
 * janela, com teto máximo para nunca travar a entrada.
 */
export function Preloader() {
  const [visible, setVisible] = useState(true);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const starRef = useRef<SVGPathElement | null>(null);
  const reducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    let settled = false;
    const finish = () => {
      if (settled) return;
      settled = true;

      const root = rootRef.current;
      if (!root) {
        setVisible(false);
        document.body.style.overflow = "";
        return;
      }

      if (reducedMotion) {
        root.style.opacity = "0";
        document.body.style.overflow = "";
        window.setTimeout(() => setVisible(false), 200);
        return;
      }

      gsap.to(root, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          document.body.style.overflow = "";
          setVisible(false);
        },
      });
    };

    if (!reducedMotion && starRef.current) {
      const length = starRef.current.getTotalLength();
      gsap.set(starRef.current, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(starRef.current, {
        strokeDashoffset: 0,
        duration: 1.3,
        ease: "power1.inOut",
      });
    }

    const timeout = window.setTimeout(finish, MAX_WAIT_MS);

    if (document.readyState === "complete") {
      window.setTimeout(finish, 600);
    } else {
      window.addEventListener("load", finish, { once: true });
    }

    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener("load", finish);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      role="status"
      aria-label="Carregando"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bastidor-bg-deep"
    >
      <svg
        width="72"
        height="72"
        viewBox="0 0 100 100"
        fill="none"
        aria-hidden="true"
      >
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

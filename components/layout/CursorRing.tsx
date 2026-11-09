"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Anel do cursor (referência: cursor do Uniiq, implementação própria).
 * Invisível no resto da página; cresce sobre fotos ([data-cursor="photo"]) e sobre
 * o vídeo ([data-cursor="video"], com o rótulo "ASSISTIR"). Só com ponteiro fino.
 * Não esconde o cursor nativo.
 */
export function CursorRing() {
  const [enabled, setEnabled] = useState(false);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(any-pointer: fine)");
    const evaluate = () => setEnabled(fine.matches);
    evaluate();
    fine.addEventListener("change", evaluate);
    return () => fine.removeEventListener("change", evaluate);
  }, []);

  useEffect(() => {
    const ring = ringRef.current;
    if (!enabled || !ring) return;
    const target = { x: -200, y: -200 };
    const pos = { x: -200, y: -200 };
    let raf = 0;
    let mode: "" | "photo" | "video" = "";

    const loop = () => {
      pos.x += (target.x - pos.x) * 0.2;
      pos.y += (target.y - pos.y) * 0.2;
      ring.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0) translate(-50%, -50%)`;
      if (Math.abs(target.x - pos.x) > 0.3 || Math.abs(target.y - pos.y) > 0.3) raf = requestAnimationFrame(loop);
      else raf = 0;
    };
    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      target.x = e.clientX;
      target.y = e.clientY;
      const hit = (e.target as Element | null)?.closest<HTMLElement>("[data-cursor]");
      const next = (hit?.dataset.cursor as typeof mode) ?? "";
      if (next !== mode) {
        mode = next;
        ring.dataset.mode = mode;
      }
      if (!raf) raf = requestAnimationFrame(loop);
    };
    const onLeave = () => {
      mode = "";
      ring.dataset.mode = "";
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <div ref={ringRef} aria-hidden="true" data-mode="" className="cursor-ring">
      <span className="cursor-ring-label">ASSISTIR</span>
    </div>
  );
}

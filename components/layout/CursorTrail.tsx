"use client";

import { useEffect, useRef } from "react";

type Point = { x: number; y: number };

const TRAIL_LENGTH = 36;
const EASE = 0.22;

/**
 * Canvas fixo, pointer-events: none, trilha orgânica que segue o cursor com
 * suavização (lerp) e dissipação progressiva. mix-blend-mode: difference faz
 * o traço se inverter contra o fundo — permanece visível tanto no modo
 * Bastidor (escuro) quanto no Palco (claro) sem precisar rastrear seção.
 *
 * Desativado por completo em touch e em prefers-reduced-motion — nunca
 * apenas escondido via CSS, o canvas nem monta.
 */
export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const target: Point = { x: width / 2, y: height / 2 };
    const current: Point = { ...target };
    const trail: Point[] = [];
    let hasPointer = false;

    const handlePointerMove = (event: PointerEvent) => {
      target.x = event.clientX;
      target.y = event.clientY;
      hasPointer = true;
    };
    window.addEventListener("pointermove", handlePointerMove);

    let rafId = 0;
    let running = true;

    const draw = () => {
      if (!running) return;
      rafId = requestAnimationFrame(draw);

      if (!hasPointer) {
        ctx.clearRect(0, 0, width, height);
        return;
      }

      current.x += (target.x - current.x) * EASE;
      current.y += (target.y - current.y) * EASE;

      trail.push({ x: current.x, y: current.y });
      if (trail.length > TRAIL_LENGTH) trail.shift();

      ctx.clearRect(0, 0, width, height);
      if (trail.length < 2) return;

      for (let i = 1; i < trail.length; i++) {
        const prev = trail[i - 1];
        const point = trail[i];
        const progress = i / trail.length;

        ctx.beginPath();
        ctx.moveTo(prev.x, prev.y);
        ctx.lineTo(point.x, point.y);
        ctx.strokeStyle = `rgba(255,255,255,${progress * 0.9})`;
        ctx.lineWidth = Math.max(0.6, progress * 2.2);
        ctx.lineCap = "round";
        ctx.stroke();
      }
    };

    rafId = requestAnimationFrame(draw);

    const handleVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(rafId);
      } else if (!running) {
        running = true;
        rafId = requestAnimationFrame(draw);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-40 mix-blend-difference"
    />
  );
}

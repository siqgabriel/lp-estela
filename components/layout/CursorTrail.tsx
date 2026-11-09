"use client";

import { useEffect, useRef, useState } from "react";
import { onReducedMotionChange, prefersReducedMotion } from "@/lib/motion";

type TrailPoint = { x: number; y: number; t: number };

/** Constante de tempo da suavização (s): menor segue mais colado ao ponteiro. */
const SMOOTH_TAU = 0.05;
/** Vida de cada ponto do rastro (s). */
const LIFE = 0.5;
const MAX_WIDTH = 1.8;
const INK = "31, 21, 57";
const WHITE = "255, 255, 255";

/** Lê a cor de fundo efetiva sob o ponteiro, subindo pelos ancestrais. */
function zoneIsDark(x: number, y: number): boolean {
  let el = document.elementFromPoint(x, y) as HTMLElement | null;
  while (el) {
    const bg = getComputedStyle(el).backgroundColor;
    const m = bg.match(/[\d.]+/g);
    if (m && (m.length < 4 || Number(m[3]) > 0.5)) {
      const [r, g, b] = m.map(Number);
      return 0.2126 * r + 0.7152 * g + 0.0722 * b < 128;
    }
    el = el.parentElement;
  }
  return false;
}

/**
 * Linha fina e orgânica que segue o cursor (implementação própria).
 * - Spline por pontos médios, suavização exponencial por tempo (independe de FPS)
 *   e dissipação pela idade de cada ponto.
 * - Cor pela zona sob o ponteiro: ink sobre claro, branco sobre escuro. Sem blend.
 * - O loop para quando o rastro some e quando a aba fica oculta.
 * - Não monta em ponteiro grosso (touch) nem com movimento reduzido.
 */
export function CursorTrail() {
  const [enabled, setEnabled] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const evaluate = () => setEnabled(fine.matches && !prefersReducedMotion());
    evaluate();
    fine.addEventListener("change", evaluate);
    const offReduced = onReducedMotionChange(evaluate);
    return () => {
      fine.removeEventListener("change", evaluate);
      offReduced();
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    let width = 0;
    let height = 0;
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    const points: TrailPoint[] = [];
    let hasPointer = false;
    let rafId = 0;
    let running = false;
    let last = 0;
    let dark = false;
    let lastZoneCheck = 0;

    const frame = (now: number) => {
      const t = now / 1000;
      const dt = last ? Math.min(t - last, 0.05) : 1 / 60;
      last = t;

      const k = 1 - Math.exp(-dt / SMOOTH_TAU);
      const dx = target.x - current.x;
      const dy = target.y - current.y;
      current.x += dx * k;
      current.y += dy * k;
      const prev = points[points.length - 1];
      if (!prev || Math.hypot(current.x - prev.x, current.y - prev.y) > 0.6) {
        points.push({ x: current.x, y: current.y, t });
      }
      while (points.length && t - points[0].t > LIFE) points.shift();

      if (now - lastZoneCheck > 90) {
        dark = zoneIsDark(current.x, current.y);
        lastZoneCheck = now;
      }

      ctx.clearRect(0, 0, width, height);
      const rgb = dark ? WHITE : INK;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      for (let i = 1; i < points.length - 1; i++) {
        const a = points[i - 1];
        const b = points[i];
        const c = points[i + 1];
        const life = 1 - (t - b.t) / LIFE;
        if (life <= 0) continue;
        ctx.beginPath();
        ctx.moveTo((a.x + b.x) / 2, (a.y + b.y) / 2);
        ctx.quadraticCurveTo(b.x, b.y, (b.x + c.x) / 2, (b.y + c.y) / 2);
        ctx.strokeStyle = `rgba(${rgb}, ${(life * 0.9).toFixed(3)})`;
        ctx.lineWidth = Math.max(0.5, life * MAX_WIDTH);
        ctx.stroke();
      }

      const settled = Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1;
      if (points.length < 2 && settled) {
        running = false;
        last = 0;
        ctx.clearRect(0, 0, width, height);
        return;
      }
      rafId = requestAnimationFrame(frame);
    };

    const start = () => {
      if (running || document.hidden) return;
      running = true;
      rafId = requestAnimationFrame(frame);
    };

    const onMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" && event.pointerType !== "pen") return;
      target.x = event.clientX;
      target.y = event.clientY;
      if (!hasPointer) {
        current.x = target.x;
        current.y = target.y;
        hasPointer = true;
      }
      start();
    };

    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId);
        running = false;
        last = 0;
        points.length = 0;
        ctx.clearRect(0, 0, width, height);
      }
    };

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-60 h-screen w-screen"
    />
  );
}

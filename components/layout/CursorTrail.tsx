"use client";

import { useEffect, useRef, useState } from "react";

type TrailPoint = { x: number; y: number; t: number };
type Ripple = { x: number; y: number; r: number; a: number; dark: boolean };

/** Vida de cada ponto do rastro (s): rastro curto, como no Davies. */
const LIFE = 0.22;
const MAX_POINTS = 14;
const WIDTH = 2.4;
const INK = "31, 21, 57";
const WHITE = "255, 255, 255";

/** Lê a cor de fundo efetiva sob o ponteiro, subindo pelos ancestrais. */
function zoneIsDark(x: number, y: number): boolean {
  let el = document.elementFromPoint(x, y) as HTMLElement | null;
  while (el) {
    const m = getComputedStyle(el).backgroundColor.match(/[\d.]+/g);
    if (m && (m.length < 4 || Number(m[3]) > 0.5)) {
      const [r, g, b] = m.map(Number);
      return 0.2126 * r + 0.7152 * g + 0.0722 * b < 128;
    }
    el = el.parentElement;
  }
  return false;
}

/**
 * Trilha do cursor no estilo Davies (implementação própria): rastro curto com
 * gradiente (transparente → cor da zona) e anel que se expande no clique.
 * Cor pela zona sob o ponteiro: ink sobre claro, branco sobre escuro.
 * Sempre ligada com ponteiro fino (inclusive com movimento reduzido — regra do
 * cliente). Não monta em touch. O loop para quando não há nada para desenhar.
 */
export function CursorTrail() {
  const [enabled, setEnabled] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const fine = window.matchMedia("(any-pointer: fine)");
    const evaluate = () => setEnabled(fine.matches);
    evaluate();
    fine.addEventListener("change", evaluate);
    return () => fine.removeEventListener("change", evaluate);
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

    const points: TrailPoint[] = [];
    let ripples: Ripple[] = [];
    let dark = false;
    let lastZone = 0;
    let rafId = 0;
    let running = false;

    const frame = (now: number) => {
      const t = now / 1000;
      while (points.length && t - points[0].t > LIFE) points.shift();
      ctx.clearRect(0, 0, width, height);

      if (points.length > 1) {
        const first = points[0];
        const last = points[points.length - 1];
        const rgb = dark ? WHITE : INK;
        const grad = ctx.createLinearGradient(first.x, first.y, last.x, last.y);
        grad.addColorStop(0, `rgba(${rgb}, 0)`);
        grad.addColorStop(1, `rgba(${rgb}, 0.95)`);
        ctx.beginPath();
        ctx.moveTo(first.x, first.y);
        for (let i = 1; i < points.length - 1; i++) {
          const mx = (points[i].x + points[i + 1].x) / 2;
          const my = (points[i].y + points[i + 1].y) / 2;
          ctx.quadraticCurveTo(points[i].x, points[i].y, mx, my);
        }
        ctx.lineTo(last.x, last.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = WIDTH;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();
      }

      for (const r of ripples) {
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${r.dark ? WHITE : INK}, ${r.a.toFixed(3)})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        r.r += 1.6;
        r.a -= 0.025;
      }
      ripples = ripples.filter((r) => r.a > 0);

      if (points.length < 2 && ripples.length === 0) {
        running = false;
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
      if (event.pointerType === "touch") return;
      const now = performance.now();
      if (now - lastZone > 90) {
        dark = zoneIsDark(event.clientX, event.clientY);
        lastZone = now;
      }
      points.push({ x: event.clientX, y: event.clientY, t: now / 1000 });
      if (points.length > MAX_POINTS) points.shift();
      start();
    };

    const onDown = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      ripples.push({ x: event.clientX, y: event.clientY, r: 2, a: 0.9, dark: zoneIsDark(event.clientX, event.clientY) });
      start();
    };

    const onVisibility = () => {
      if (!document.hidden) return;
      cancelAnimationFrame(rafId);
      running = false;
      points.length = 0;
      ripples = [];
      ctx.clearRect(0, 0, width, height);
    };

    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [enabled]);

  if (!enabled) return null;
  return (
    <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-60 h-screen w-screen" />
  );
}

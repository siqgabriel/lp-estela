"use client";

import { useEffect, useState } from "react";

/**
 * Cadência de CTA (ver CLAUDE.md § Comportamentos aprovados).
 * O CTA persistente (fixo no celular, no header no desktop) aparece depois do hero
 * e some enquanto houver um CTA do PDF na tela ([data-cta-inline]) ou enquanto
 * a oferta (#oferta) estiver visível — nunca dois CTAs disputando a mesma tela.
 */
export function usePersistentCta() {
  // null = ainda não medido (SSR/sem JS): o componente decide o padrão.
  const [visible, setVisible] = useState<boolean | null>(null);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const offer = document.getElementById("oferta");
    const inline = Array.from(document.querySelectorAll("[data-cta-inline]"));
    const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 72;

    let heroOut = false;
    let offerIn = false;
    const inlineIn = new Set<Element>();
    const update = () => {
      setPastHero(heroOut);
      setVisible(heroOut && !offerIn && inlineIn.size === 0);
    };

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        heroOut = !entry.isIntersecting && entry.boundingClientRect.top < 0;
        update();
      },
      { rootMargin: `-${header}px 0px 0px 0px` },
    );
    const watch = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === offer) offerIn = entry.isIntersecting;
        else if (entry.isIntersecting) inlineIn.add(entry.target);
        else inlineIn.delete(entry.target);
      }
      update();
    });

    if (hero) heroObserver.observe(hero);
    if (offer) watch.observe(offer);
    inline.forEach((el) => watch.observe(el));
    return () => {
      heroObserver.disconnect();
      watch.disconnect();
    };
  }, []);

  return { visible, pastHero };
}

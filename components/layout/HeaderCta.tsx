"use client";

import { ctas } from "@/lib/content";
import { usePersistentCta } from "@/lib/cta";

/**
 * CTA do header (desktop). Leva à oferta com o texto do CTA da oferta (seção 15),
 * para a mesma ação ter o mesmo nome. Some no hero e enquanto outro CTA estiver na tela.
 * Sem JS fica sempre visível.
 */
export function HeaderCta() {
  const { visible } = usePersistentCta();
  const shown = visible ?? true;
  return (
    <a
      href="#oferta"
      data-cta-persistent="header"
      aria-hidden={!shown}
      tabIndex={shown ? undefined : -1}
      className={`hidden bg-paper-ink px-5 py-3 font-ui text-xs font-semibold tracking-wider text-paper uppercase transition-opacity duration-200 hover:opacity-90 lg:inline-block ${
        shown ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      {ctas.s15}
    </a>
  );
}

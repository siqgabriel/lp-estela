"use client";

import { ctas } from "@/lib/content";
import { usePersistentCta } from "@/lib/cta";
import { whatsappLink } from "@/lib/site-config";

/**
 * Dock inferior:
 * - CTA fixo (só celular, < lg): aparece depois do hero, some quando outro CTA ou a oferta está na tela.
 * - Botão de WhatsApp (seção 18 cita "o botão do WhatsApp aqui do lado"): aparece depois do hero.
 *   O CTA fixo termina antes do botão e nunca o cobre. Número pendente = placeholder explícito.
 * Superfícies fixas em ink com contorno claro, legíveis sobre campo branco ou ink.
 */
export function CtaDock() {
  const { visible, pastHero } = usePersistentCta();
  const showBar = visible === true;
  const wa = whatsappLink();

  return (
    <>
      <a
        href="#oferta"
        data-cta-persistent="mobile"
        aria-hidden={!showBar}
        tabIndex={showBar ? undefined : -1}
        className={`fixed bottom-[max(12px,env(safe-area-inset-bottom))] left-3 right-[calc(12px+56px+12px)] z-40 flex h-14 items-center justify-center bg-paper-ink px-3 text-center font-ui text-[12px] font-semibold tracking-wide text-paper uppercase ring-1 ring-paper/40 transition-[opacity,transform] duration-200 lg:hidden ${
          showBar ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
        }`}
      >
        {ctas.s15}
      </a>

      <a
        href={wa ?? "#duvidas"}
        {...(wa ? { target: "_blank", rel: "noreferrer" } : { "data-pending": "whatsapp-flutuante" })}
        aria-label={wa ? "Conversar no WhatsApp" : "WhatsApp (número pendente)"}
        aria-hidden={!pastHero}
        tabIndex={pastHero ? undefined : -1}
        className={`fixed right-3 bottom-[max(12px,env(safe-area-inset-bottom))] z-40 flex h-14 w-14 items-center justify-center bg-paper-ink text-paper ring-1 ring-paper/40 transition-opacity duration-200 lg:right-6 lg:bottom-6 ${
          wa ? "" : "outline-2 outline-offset-2 outline-dashed outline-paper-ink/60"
        } ${pastHero ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 3.2a8.7 8.7 0 0 0-7.5 13.1L3.3 20.8l4.6-1.2A8.7 8.7 0 1 0 12 3.2Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M9 8.3c.2-.4.5-.4.8-.4h.5c.2 0 .4 0 .5.4l.7 1.7c.1.2 0 .4-.1.6l-.5.6c-.1.1-.2.3 0 .5.6 1 1.4 1.8 2.4 2.4.2.1.4.1.5 0l.6-.6c.2-.2.4-.2.6-.1l1.7.8c.3.1.3.3.3.5v.4c0 .4-.2.8-.6 1-.6.3-1.4.4-2.3.1a9.4 9.4 0 0 1-5.6-5.6c-.3-.9-.2-1.7.1-2.3Z"
            fill="currentColor"
          />
        </svg>
      </a>
    </>
  );
}

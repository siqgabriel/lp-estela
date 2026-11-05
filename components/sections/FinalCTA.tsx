import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/layout/Reveal";
import { whatsappLink } from "@/lib/content";

export function FinalCTA() {
  return (
    <Panel mode="bastidor" className="border-t border-bastidor-line">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">O PRÓXIMO PASSO É SEU.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-6 space-y-3 font-sans text-lg leading-relaxed text-bastidor-text-soft">
            <p>Dá pra continuar esperando convites.</p>
            <p>Ou dá pra começar, agora, a construir o que faz esses convites te encontrarem.</p>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <a
            href="#oferta"
            className="mt-9 inline-block rounded-full bg-white px-8 py-4 font-ui text-sm font-semibold uppercase tracking-wider text-ink transition-transform hover:scale-[1.02]"
          >
            Quero começar agora
          </a>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-16 border-t border-bastidor-line pt-10">
            <h3 className="font-sans text-lg font-semibold">Alguma dúvida?</h3>
            <p className="mt-2 font-sans text-base text-bastidor-text-soft">
              Estamos prontos para responder qualquer pergunta.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 font-ui text-sm font-semibold uppercase tracking-wider text-bastidor-text underline underline-offset-4"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </Panel>
  );
}

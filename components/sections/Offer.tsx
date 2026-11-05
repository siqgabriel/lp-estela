import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/layout/Reveal";
import { pricing } from "@/lib/content";

export function Offer() {
  return (
    <Panel mode="palco" id="oferta" className="border-t border-palco-line">
      <Reveal>
        <p className="eyebrow text-violet">Oferta</p>
        <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">GARANTA SEU ACESSO.</h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 max-w-xl rounded-sm border border-palco-line bg-palco-bg-warm p-8 sm:p-10">
          <p className="font-display text-2xl tracking-wide text-ink">GESTÃO DE CARREIRA</p>
          <p className="mt-4 font-display text-5xl text-ink sm:text-6xl">{pricing.cash}</p>
          <p className="mt-1 font-sans text-lg text-palco-text-soft">{pricing.installments}</p>
          <p className="mt-6 font-sans text-base leading-relaxed text-palco-text-soft">
            Os 12 módulos, mais de 150 aulas, 1 ano de acesso, suporte e os 2 bônus que você acabou
            de conhecer — tudo incluso.
          </p>
          <a
            href="#"
            className="mt-8 inline-block w-full rounded-full bg-ink px-8 py-4 text-center font-ui text-sm font-semibold uppercase tracking-wider text-white transition-transform hover:scale-[1.01]"
          >
            Quero entrar no Gestão de Carreira
          </a>
        </div>
      </Reveal>
    </Panel>
  );
}

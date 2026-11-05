import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/layout/Reveal";

export function Hero() {
  return (
    <Panel mode="bastidor" id="hero" className="pt-32 sm:pt-40">
      <Reveal>
        <p className="eyebrow mb-5 text-bastidor-text-soft">Gestão de Carreira · Estela Albani</p>
      </Reveal>
      <Reveal delay={0.05}>
        <h1 className="font-display text-[13vw] leading-[0.94] tracking-[0.005em] sm:text-[88px] lg:text-[112px]">
          TRANSFORME SEU PREPARO ARTÍSTICO EM VISIBILIDADE NO MERCADO.
        </h1>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-8 max-w-2xl font-sans text-lg text-bastidor-text-soft sm:text-xl">
          O caminho para o seu trabalho chegar até quem importa, sem depender de sorte.
        </p>
        <p className="mt-3 max-w-2xl font-sans text-lg text-bastidor-text-soft sm:text-xl">
          Nesta aula você vai descobrir 3 coisas que fazem um ator ser lembrado.
        </p>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="mt-12 flex aspect-video w-full items-center justify-center border border-bastidor-line bg-black/20 font-ui text-xs uppercase tracking-widest text-bastidor-text-soft">
          [ Vídeo de vendas — pendência 10.5 ]
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <a
          href="#oferta"
          className="mt-10 inline-block rounded-full bg-white px-8 py-4 font-ui text-sm font-semibold uppercase tracking-wider text-ink transition-transform hover:scale-[1.02]"
        >
          Quero ganhar visibilidade
        </a>
      </Reveal>
    </Panel>
  );
}

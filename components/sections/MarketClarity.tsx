import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/layout/Reveal";

export function MarketClarity() {
  return (
    <Panel mode="bastidor" className="border-t border-bastidor-line">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">
            O MERCADO PRECISA CONSEGUIR LER VOCÊ COM CLAREZA.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-xl font-sans text-lg leading-relaxed text-bastidor-text-soft">
            E é exatamente isso que o curso faz: as aulas ajudam você a traduzir o que você é
            artisticamente para uma linguagem que o mercado reconhece.
          </p>
          <p className="mx-auto mt-5 max-w-xl font-sans text-lg leading-relaxed text-bastidor-text-soft">
            Não é sobre mudar quem você é. É sobre deixar de esconder quem você é por trás de um
            material que não comunica, de uma presença que não chega, de um posicionamento que não
            existe.
          </p>
        </Reveal>
      </div>
    </Panel>
  );
}

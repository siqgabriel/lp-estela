import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/layout/Reveal";
import { culturalFormats } from "@/lib/content";

export function CulturalProjects() {
  return (
    <Panel mode="palco" className="border-t border-palco-line">
      <div className="grid gap-10 sm:grid-cols-[1.1fr_1fr] sm:items-start">
        <Reveal>
          <h2 className="font-display text-4xl text-strong sm:text-5xl">
            CRIATIVIDADE TAMBÉM É ESTRATÉGIA.
          </h2>
          <div className="mt-6 space-y-5 font-sans text-lg leading-relaxed text-palco-text-soft">
            <p>Você é o artista que faz acontecer?</p>
            <p>O mercado não está devendo oportunidades pra você.</p>
            <p>O mercado está esperando projetos.</p>
            <p>
              Todo artista acumula ideias. Mas poucos sabem transformar uma ideia em projeto viável
              — sem esperar aprovação, edital ou lei.
            </p>
            <p>
              Será que alguém precisa esperar a aprovação de um edital pra começar? Ou já pode criar
              motivos pro mercado olhar na sua direção?
            </p>
            <p>
              Enquanto uma aprovação não chega, também dá pra criar as próprias oportunidades —
              movimentar ideias, formar parcerias, fazer o mercado reparar no seu trabalho.
            </p>
            <p>
              Muitos artistas não esperam mais testes, editais ou convites. Eles escrevem, produzem,
              filmam, dirigem, se associam, inventam caminhos — e fazem projetos acontecerem.
            </p>
            <p className="font-semibold text-strong">
              É esse tipo de movimento que o módulo de Projetos Culturais ajuda você a criar.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="font-ui text-xs font-semibold uppercase tracking-widest text-accent">
            Um bom projeto pode virar
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {culturalFormats.map((format) => (
              <span
                key={format}
                className="rounded-full border border-palco-line px-4 py-1.5 font-sans text-sm text-strong"
              >
                {format}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </Panel>
  );
}

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/layout/Reveal";

export function ManyDoors() {
  return (
    <Panel mode="palco-warm" className="border-t border-palco-line">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="font-display text-4xl text-strong sm:text-5xl">VÁRIAS PORTAS, NÃO UMA SÓ.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 space-y-5 font-sans text-lg leading-relaxed text-palco-text-soft">
            <p>
              Repara: dentro do próprio método já existem caminhos diferentes — mercado tradicional
              de elenco, teatro musical, projetos culturais, redes sociais como uma emissora de
              valor.
            </p>
            <p>
              Cada módulo que você atravessa não é só conhecimento a mais. É mais um caminho pelo
              qual sua carreira pode acontecer.
            </p>
            <p>Quando você depende de uma porta só, cada &ldquo;não&rdquo; tem o peso da carreira inteira.</p>
            <p>Quando você constrói várias, nenhum &ldquo;não&rdquo; isolado consegue te parar.</p>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 font-sans text-xl font-semibold text-strong">
            É isso que os módulos multiplicam, um a um.
          </p>
        </Reveal>
      </div>
    </Panel>
  );
}

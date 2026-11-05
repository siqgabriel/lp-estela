import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/layout/Reveal";

export function CommandOrReact() {
  return (
    <Panel mode="palco-warm">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display text-4xl text-ink sm:text-5xl lg:text-6xl">
            COMANDAR A CARREIRA OU SÓ REAGIR A ELA.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mx-auto mt-8 max-w-xl space-y-5 font-sans text-lg leading-relaxed text-palco-text-soft">
            <p>
              Existe uma diferença entre esperar ser escolhido e decidir, você mesmo, o próximo
              passo.
            </p>
            <p>
              Quando um ator assume a posição de quem conduz — e não só de quem reage — ele para de
              depender inteiramente da validação de quem está do outro lado da mesa. E começa a
              criar um percurso para o próprio mercado.
            </p>
            <p>Isso muda o tipo de trabalho que aparece.</p>
            <p>E muda também o espaço que a sua voz ocupa nele.</p>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl font-sans text-xl font-semibold text-ink">
            É exatamente essa mudança de postura — de reativa pra ativa — que o curso treina, passo
            a passo.
          </p>
        </Reveal>
      </div>
    </Panel>
  );
}

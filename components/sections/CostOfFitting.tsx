import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/layout/Reveal";

export function CostOfFitting() {
  return (
    <Panel mode="bastidor" className="border-t border-bastidor-line">
      <div className="grid gap-10 sm:grid-cols-[1fr_1.1fr] sm:items-center">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl">O CUSTO DE SE MOLDAR PRA CABER.</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-5 font-sans text-lg leading-relaxed text-bastidor-text-soft">
            <p>
              Tem gente com anos de teatro e audiovisual nas costas que, mesmo assim, sente que não
              faz parte do meio de verdade.
            </p>
            <p>
              Na tentativa de agradar quem contrata, vai moldando o próprio trabalho. Aceita rótulos
              que não escolheu. Tenta virar &ldquo;o tipo&rdquo; que alguém está procurando naquele
              momento.
            </p>
            <p>
              E, sem perceber, isso deixa o trabalho parecido com o de qualquer outro nome na lista —
              mais fácil de esquecer.
            </p>
            <p>
              As escolhas de carreira acabam virando apostas no escuro — qual projeto topar, por que
              topar, com quem topar. Decididas na pressa, sem critério nenhum por trás.
            </p>
          </div>
        </Reveal>
      </div>
    </Panel>
  );
}

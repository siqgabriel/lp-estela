import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/layout/Reveal";

export function LivingUncertainty() {
  return (
    <Panel mode="bastidor" className="border-t border-bastidor-line">
      <div className="grid gap-10 sm:grid-cols-[1fr_1.1fr] sm:items-start">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl">
            VIVER DE ATUAÇÃO TAMBÉM É VIVER DE INCERTEZA.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="space-y-5 font-sans text-lg leading-relaxed text-bastidor-text-soft">
            <p>
              Viver de interpretação, no Brasil, costuma ser viver de intervalo: um contrato aqui,
              um silêncio ali, a incerteza de quando vem o próximo.
            </p>
            <p>
              Isso pesa. E pesa mais ainda quando a carreira inteira depende de alguém, em algum
              lugar, lembrar do seu nome na hora certa.
            </p>
            <p>Não existe fórmula que resolva isso da noite pro dia — desconfie de quem promete.</p>
            <p>
              A instabilidade faz parte da carreira de um ator. Mas isso não significa ficar à
              espera: quanto mais presente, visível e lembrado você se mantém no mercado, maiores
              são as possibilidades de ampliar e diversificar o trabalho que chega até você.
            </p>
            <p>E isso, sim, dá pra construir.</p>
            <p className="font-semibold text-bastidor-text">
              O método foca no que está sob seu controle: mais frentes de trabalho, pra depender
              menos de uma única fonte.
            </p>
          </div>
        </Reveal>
      </div>
    </Panel>
  );
}

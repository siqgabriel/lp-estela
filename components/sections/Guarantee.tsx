import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/layout/Reveal";

export function Guarantee() {
  return (
    <Panel mode="palco-warm" className="border-t border-palco-line">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <h2 className="font-display text-4xl text-ink sm:text-5xl">
            7 DIAS DE GARANTIA. 100% DE REEMBOLSO.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-6 space-y-4 font-sans text-lg leading-relaxed text-palco-text-soft">
            <p>
              Faz sentido restar uma dúvida antes de decidir — principalmente quando a decisão é
              sobre a própria carreira.
            </p>
            <p>
              Por isso, você tem 7 dias de garantia incondicional. Se, nesse prazo, sentir que não é
              pra você, é só avisar. Devolvemos 100% do valor, sem perguntas.
            </p>
          </div>
          <p className="mt-6 font-sans text-xl font-semibold text-ink">O risco é nosso.</p>
        </Reveal>
      </div>
    </Panel>
  );
}

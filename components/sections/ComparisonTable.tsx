import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/layout/Reveal";
import { comparisonRows } from "@/lib/content";

export function ComparisonTable() {
  return (
    <Panel mode="palco">
      <Reveal>
        <h2 className="max-w-2xl font-display text-4xl text-strong sm:text-5xl">
          DUAS FORMAS DE TRATAR A CARREIRA.
        </h2>
      </Reveal>

      <div className="mt-12 grid overflow-hidden rounded-sm border border-palco-line sm:grid-cols-2">
        <Reveal delay={0.05} className="bg-bastidor-bg p-7 text-bastidor-text sm:p-9">
          <p className="font-ui text-xs font-semibold uppercase tracking-widest text-bastidor-text-soft">
            Reagindo às oportunidades
          </p>
          <ul className="mt-6 space-y-5 font-sans text-base leading-snug">
            {comparisonRows.map((row) => (
              <li key={row.reacting} className="border-t border-bastidor-line pt-5 first:border-t-0 first:pt-0">
                {row.reacting}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.15} className="bg-violet p-7 text-white sm:p-9">
          <p className="font-ui text-xs font-semibold uppercase tracking-widest text-white/70">
            Decidindo a própria carreira
          </p>
          <ul className="mt-6 space-y-5 font-sans text-base leading-snug">
            {comparisonRows.map((row) => (
              <li key={row.deciding} className="border-t border-white/15 pt-5 first:border-t-0 first:pt-0">
                {row.deciding}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal delay={0.25}>
        <div className="mx-auto mt-10 max-w-2xl text-center font-sans text-lg text-palco-text-soft">
          <p>As duas colunas descrevem a mesma profissão.</p>
          <p>A diferença é quem está no comando dela.</p>
          <p className="mt-3 text-xl font-semibold text-strong">
            O Gestão de Carreira é o que coloca você no comando.
          </p>
        </div>
      </Reveal>
    </Panel>
  );
}

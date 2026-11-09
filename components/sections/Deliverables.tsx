import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/layout/Reveal";
import { deliverables, bonuses } from "@/lib/content";

export function Deliverables() {
  return (
    <Panel mode="palco-warm" className="border-t border-palco-line">
      <Reveal>
        <h2 className="font-display text-4xl text-strong sm:text-5xl">TUDO QUE VAI ESTAR NAS SUAS MÃOS.</h2>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {deliverables.map((d) => (
            <div key={d.label} className="border-t-2 border-strong pt-4">
              <p className="font-display text-2xl text-strong">{d.label}</p>
              <p className="mt-1 font-sans text-sm text-palco-text-soft">{d.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {bonuses.map((bonus, i) => (
          <Reveal key={bonus.title} delay={0.1 + i * 0.08}>
            <div className="h-full rounded-sm bg-violet p-7 text-white sm:p-8">
              <p className="font-ui text-xs font-semibold uppercase tracking-widest text-white/70">
                Bônus {i + 1}
              </p>
              <h3 className="mt-2 font-sans text-xl font-bold">
                {bonus.title.replace(/^Bônus \d — /, "")}
              </h3>
              <p className="mt-3 font-sans text-base leading-relaxed text-white/85">{bonus.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Panel>
  );
}

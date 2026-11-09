import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/layout/Reveal";
import { moduleGroups } from "@/lib/content";

export function Method() {
  let counter = 0;

  return (
    <Panel mode="palco" className="border-t border-palco-line">
      <Reveal>
        <h2 className="max-w-3xl font-display text-4xl text-strong sm:text-5xl">
          O CAMINHO DE QUEM DEIXA DE ESPERAR E COMEÇA A CONDUZIR.
        </h2>
        <p className="mt-5 max-w-xl font-sans text-lg text-palco-text-soft">
          O Gestão de Carreira reúne 12 módulos — não como uma lista de aulas soltas, mas como um
          percurso.
        </p>
      </Reveal>

      <div className="mt-14 space-y-12">
        {moduleGroups.map((group, groupIndex) => (
          <Reveal key={group.group} delay={groupIndex * 0.04}>
            <h3 className="font-ui text-xs font-semibold uppercase tracking-widest text-accent">
              {group.group}
            </h3>
            <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((item) => {
                counter += 1;
                const n = String(counter).padStart(2, "0");
                return (
                  <div key={item.title} className="border-t border-palco-line pt-4">
                    <span className="font-display text-2xl text-accent">{n}</span>
                    <h4 className="mt-1 font-sans text-lg font-semibold text-strong">{item.title}</h4>
                    <p className="mt-1 font-sans text-sm leading-snug text-palco-text-soft">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <a
          href="#oferta"
            data-cta-inline
          className="mt-14 inline-block rounded-full btn-on-field px-8 py-4 font-ui text-sm font-semibold uppercase tracking-wider  transition-transform hover:scale-[1.02]"
        >
          Quero conhecer o método
        </a>
      </Reveal>
    </Panel>
  );
}

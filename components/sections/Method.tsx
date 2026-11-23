import { moduleGroups, s8, ctas } from "@/lib/content";
import { FrameLabel } from "@/components/system/refine";
import { Cta, GUTTER, LEAD, NUMERAL, Prose, Title } from "@/components/system/type";
import { MethodStack } from "./MethodStack";

/**
 * Seção 8 — página cheia ink. À esquerda: título, introdução e CTA. À direita:
 * os 5 grupos do PDF como cartões. No desktop (com efeitos de rolagem) os cartões
 * deslizam e se sobrepõem enquanto a seção fica presa — segundo pin autorizado
 * (referência: stack-element-2 do Davies). No celular e com movimento reduzido: lista.
 */
export function Method() {
  let n = 0;
  return (
    <section id="metodo" data-section="8" className="relative bg-ink-band text-paper">
      <FrameLabel className="top-7 right-5 left-5 text-lilac sm:right-8 sm:left-8 lg:right-[4vw] lg:left-auto">
        12 MÓDULOS · +150 AULAS GRAVADAS · MATERIAL DE APOIO EM PDF
      </FrameLabel>
      <div className="pad-section">
      <div className={`method-pin ${GUTTER} grid gap-14 lg:grid-cols-12 lg:gap-[3vw]`}>
        <div className="lg:col-span-5">
          <Title lead={s8.lead} impact={s8.impact} leadClass="text-lilac" />
          <Prose paragraphs={[s8.intro]} className="mt-8 max-w-[44ch]" />
          <Cta href="#oferta" tone="dark" className="mt-10 w-full sm:w-auto">
            {ctas.s8}
          </Cta>
        </div>

        <div className="lg:col-span-7">
          <Title lead={s8.contentLead} impact={s8.contentImpact} as="h3" className="mb-8 lg:mb-[2vw]" leadClass="text-lilac" impactClass="text-[clamp(40px,4.4vw,72px)]" />
        <ol className="stack grid gap-4">
          {moduleGroups.map((group, gi) => {
            const light = gi % 2 === 0;
            return (
              <li
                key={group.group}
                className={`stack-card p-6 lg:p-[2.4vw] ${light ? "bg-paper text-paper-ink" : "bg-ink-band-deep text-paper ring-1 ring-paper/20"}`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className={`${LEAD} ${light ? "text-paper-accent" : "text-lilac"}`}>{group.group}</h3>
                  <span aria-hidden="true" className="frame-label shrink-0">
                    {String(gi + 1).padStart(2, "0")} / {String(moduleGroups.length).padStart(2, "0")}
                  </span>
                </div>
                <ol className="mt-4">
                  {group.items.map((item) => {
                    n += 1;
                    return (
                      <li
                        key={item.title}
                        className={`grid grid-cols-[4rem_1fr] gap-x-4 border-t py-4 lg:grid-cols-[5.4vw_1fr] ${light ? "border-paper-rule" : "border-paper/20"}`}
                      >
                        <span aria-hidden="true" className={`${NUMERAL} ${light ? "text-numeral-light" : "text-numeral-dark"}`}>
                          {n}.
                        </span>
                        <div>
                          <h4 className="font-sans text-xl leading-tight font-bold lg:text-[21px]">{item.title}</h4>
                          <p className="mt-1 font-sans text-[17px] leading-relaxed lg:text-[18px]">{item.desc}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </li>
            );
          })}
        </ol>
        </div>
      </div>
      </div>
      <MethodStack />
    </section>
  );
}

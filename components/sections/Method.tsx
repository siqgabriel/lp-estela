import { moduleGroups, s8, ctas } from "@/lib/content";
import { photos } from "@/lib/photos";
import { Photo } from "@/components/media/Photo";
import { Cta, GUTTER, LEAD, NUMERAL, Prose, Title } from "@/components/system/type";

/**
 * Seção 8 — página cheia ink. À esquerda (fixa no desktop): título, introdução, foto e CTA.
 * À direita: os 5 grupos do PDF como capítulos, módulos numerados 1.–12. em numerais grandes
 * (a sequência é real). Sem cards.
 */
export function Method() {
  let n = 0;
  return (
    <section data-section="8" className="bg-ink-band text-paper">
      <div className={`${GUTTER} grid gap-14 py-20 lg:grid-cols-12 lg:gap-[3vw] lg:py-[8vw]`}>
        <div className="lg:sticky lg:top-[calc(var(--header-h)+3vw)] lg:col-span-5 lg:self-start">
          <Title lead={s8.lead} impact={s8.impact} leadClass="text-lilac" />
          <Prose paragraphs={[s8.intro]} className="mt-8 max-w-[44ch]" />
          <div className="relative mt-10 hidden aspect-[3/4] w-[60%] lg:block">
            <Photo photo={photos.ft3} fill sizes="20vw" className="object-cover" />
          </div>
          <Cta href="#oferta" tone="dark" className="mt-10 w-full sm:w-auto">
            {ctas.s8}
          </Cta>
        </div>

        <ol className="lg:col-span-7">
          {moduleGroups.map((group) => (
            <li key={group.group} className="mb-12 last:mb-0">
              <h3 className={`${LEAD} text-lilac`}>{group.group}</h3>
              <ol className="mt-4">
                {group.items.map((item) => {
                  n += 1;
                  return (
                    <li key={item.title} className="grid grid-cols-[4.2rem_1fr] gap-x-4 border-t border-paper/20 py-5 lg:grid-cols-[6vw_1fr]">
                      <span aria-hidden="true" className={`${NUMERAL} text-numeral-dark`}>
                        {n}.
                      </span>
                      <div>
                        <h4 className="font-sans text-xl leading-tight font-bold tracking-normal normal-case lg:text-[21px]">
                          {item.title}
                        </h4>
                        <p className="mt-1 font-sans text-[17px] leading-relaxed lg:text-[18px]">{item.desc}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

import { s17 } from "@/lib/content";
import { photos } from "@/lib/photos";
import { PhotoWord } from "@/components/system/PhotoWord";
import { Cta, GUTTER, LEAD_PAIR, MONUMENTAL, Prose } from "@/components/system/type";

/**
 * Seção 17 — foto em letra nº 3 (SEU., ft2). Eixo horizontal: papel branco com a palavra
 * (igual nos dois temas) e a base encostando na faixa ink com o texto e o CTA.
 */
export function FinalCTA() {
  return (
    <section data-section="17" className="bg-paper text-paper-ink">
      <h2 className={`${GUTTER} pt-[var(--space-section)] lg:flex lg:items-baseline lg:gap-[2vw]`}>
        <span className={`${LEAD_PAIR} mb-3 text-paper-accent lg:mb-0`}>{s17.lead}</span>
        <PhotoWord
          word={s17.word}
          photo={photos.ft2}
          position="50% 42%"
          overlay="linear-gradient(90deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.5) 62%, rgba(0,0,0,0.62) 100%)"
          className={`${MONUMENTAL} text-[38vw]! lg:text-[14vw]!`}
        />
      </h2>
      <div className={`${GUTTER} grid gap-8 bg-ink-band pt-12 pb-[max(var(--space-block),96px)] text-paper lg:grid-cols-12 lg:items-center lg:gap-[3vw] lg:py-[var(--space-block)]`}>
        <Prose paragraphs={s17.paragraphs} className="lg:col-span-6" />
        <div className="lg:col-span-5 lg:col-start-8">
          <Cta href="#oferta" tone="dark" className="w-full">
            {s17.cta}
          </Cta>
        </div>
      </div>
    </section>
  );
}

import { s2 } from "@/lib/content";
import { GUTTER, Prose, Title } from "@/components/system/type";

/** Seção 2 — página cheia branca. Respiro depois do hero: título à esquerda, texto deslocado à direita. */
export function PainIntro() {
  return (
    <section data-section="2" className="bg-field text-strong">
      <div className={`${GUTTER} grid gap-10 py-20 lg:grid-cols-12 lg:gap-[3vw] lg:py-[9vw]`}>
        <Title lead={s2.lead} impact={s2.impact} className="lg:col-span-6" leadClass="text-accent" />
        <Prose paragraphs={s2.paragraphs} className="max-w-[60ch] lg:col-span-5 lg:col-start-8 lg:pt-[9vw]" />
      </div>
    </section>
  );
}

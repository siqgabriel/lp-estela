import { s16 } from "@/lib/content";
import { GUTTER, Prose, Title } from "@/components/system/type";

/** Seção 16 — faixa estreita em ink, sem selo. Título à esquerda, texto apontado para ele à direita. */
export function Guarantee() {
  return (
    <section data-section="16" className="bg-ink-band-deep text-paper">
      <div className={`${GUTTER} grid gap-10 py-16 lg:grid-cols-12 lg:items-end lg:gap-[3vw] lg:py-[5vw]`}>
        <Title lead={s16.lead} impact={s16.impact} className="lg:col-span-6" leadClass="text-lilac" />
        <Prose paragraphs={[...s16.paragraphs, s16.closing]} className="max-w-[56ch] lg:col-span-5 lg:col-start-8" />
      </div>
    </section>
  );
}

import { s16 } from "@/lib/content";
import { GUTTER, Prose, Title } from "@/components/system/type";

/** Seção 16 — faixa estreita em ink, sem selo. Título à esquerda, texto apontado para ele à direita. */
export function Guarantee() {
  return (
    <section data-section="16" className="bg-ink-band-deep text-paper">
      <div className={`${GUTTER} grid gap-10 py-[var(--space-block)] pb-[max(var(--space-block),96px)] lg:grid-cols-12 lg:items-end lg:gap-[3vw] lg:py-[calc(var(--space-section)*0.7)]`}>
        <Title lead={s16.lead} impact={s16.impact} className="lg:col-span-6" leadClass="text-lilac" />
        <Prose paragraphs={[...s16.paragraphs, s16.closing]} className="max-w-[56ch] lg:col-span-5 lg:col-start-8" />
      </div>
    </section>
  );
}

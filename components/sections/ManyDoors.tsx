import { s9 } from "@/lib/content";
import { photos } from "@/lib/photos";
import { PhotoWord } from "@/components/system/PhotoWord";
import { GUTTER, IMPACT, LEAD_PAIR, MONUMENTAL, Prose } from "@/components/system/type";

/**
 * Seção 9 — foto em letra nº 2 (PORTAS, uma única foto). Papel branco nos dois temas, sem pin.
 * Título empilhado à esquerda; texto à direita, começando na altura da palavra.
 */
export function ManyDoors() {
  return (
    <section data-section="9" className="bg-paper text-paper-ink">
      <div className={`${GUTTER} grid gap-12 pad-section lg:grid-cols-12 lg:gap-[3vw]`}>
        <h2 className="lg:col-span-6">
          <span className={`${LEAD_PAIR} mb-2 text-paper-accent`}>{s9.lead}</span>
          <PhotoWord word={s9.word} photo={photos.ft1} position="50% 40%" overlay="linear-gradient(rgba(0,0,0,0.38), rgba(0,0,0,0.38))" className={`${MONUMENTAL} text-[30vw]! lg:text-[14vw]!`} />
          <span className={IMPACT}>{s9.impact}</span>
        </h2>
        <Prose paragraphs={s9.paragraphs} className="max-w-[56ch] lg:col-span-5 lg:col-start-8 lg:self-end" />
      </div>
    </section>
  );
}

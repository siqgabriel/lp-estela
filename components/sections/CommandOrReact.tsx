import { s6 } from "@/lib/content";
import { photos } from "@/lib/photos";
import { Photo } from "@/components/media/Photo";
import { GUTTER, LEAD, MONUMENTAL, Prose } from "@/components/system/type";

/**
 * Seção 6 — página cheia branca, palavra monumental COMANDAR (Bold) seguida da
 * linha de entrada (Regular). A foto é uma faixa vertical que sangra à direita.
 */
export function CommandOrReact() {
  return (
    <section data-section="6" className="relative grid bg-field text-strong lg:grid-cols-12">
      <div className={`${GUTTER} py-20 lg:col-span-8 lg:py-[8vw]`}>
        <h2>
          <span className={MONUMENTAL}>{s6.word}</span>
          <span className={`${LEAD} mt-2 text-accent`}>{s6.lead}</span>
        </h2>
        <Prose paragraphs={s6.paragraphs} className="mt-12 max-w-[58ch] lg:ml-[18vw]" />
      </div>
      <div className="relative aspect-[4/5] lg:col-span-4 lg:aspect-auto">
        <Photo photo={photos.ft9} fill sizes="(min-width: 1024px) 34vw, 100vw" className="object-cover object-[40%_50%]" />
      </div>
    </section>
  );
}

import { s3 } from "@/lib/content";
import { photos } from "@/lib/photos";
import { Photo } from "@/components/media/Photo";
import { GUTTER, IMPACT, LEAD, Prose } from "@/components/system/type";

/**
 * Seção 3 — página cheia ink. A foto sangra até a borda esquerda e encosta no eixo;
 * "PRA CABER." fica presa numa caixa branca do tamanho exato da palavra.
 */
export function CostOfFitting() {
  return (
    <section data-section="3" className="relative grid bg-ink-band text-paper lg:grid-cols-12">
      <div className="relative aspect-[4/3] lg:col-span-5 lg:aspect-auto">
        <Photo photo={photos.ft6} fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover object-[50%_30%]" />
      </div>
      <div className={`${GUTTER} py-16 lg:col-span-7 lg:py-[7vw] lg:pl-[4vw]`}>
        <h2>
          <span className={`${LEAD} text-lilac`}>{s3.lead}</span>
          <span className={`${IMPACT} mt-3 inline-block bg-paper px-[0.12em] pt-[0.06em] text-paper-ink`}>{s3.impact}</span>
        </h2>
        <Prose paragraphs={s3.paragraphs} className="mt-10 max-w-[56ch]" />
      </div>
    </section>
  );
}

import { s5 } from "@/lib/content";
import { photos } from "@/lib/photos";
import { Photo } from "@/components/media/Photo";
import { GUTTER, IMPACT, Prose, Title } from "@/components/system/type";

/**
 * Seção 5 — página cheia ink, continuação da faixa da seção 4. Trecho de leitura:
 * texto em coluna à esquerda; a foto sangra até a borda direita, encostada no topo da seção.
 */
export function LivingUncertainty() {
  return (
    <section data-section="5" className="relative grid bg-ink-band text-paper lg:grid-cols-12">
      <div className={`${GUTTER} order-2 py-16 lg:order-1 lg:col-span-7 lg:py-[7vw]`}>
        <Title lead={s5.lead} impact={s5.impact} leadClass="text-lilac" />
        <Prose paragraphs={s5.paragraphs} boldLast={false} className="mt-10 max-w-[58ch]" />
        <p className={`${IMPACT} mt-12 text-[clamp(40px,4.6vw,72px)]`}>{s5.pull}</p>
        <p className="mt-6 max-w-[52ch] font-sans text-[17px] leading-relaxed font-bold lg:text-[18px]">{s5.closing}</p>
      </div>
      <div className="relative order-1 aspect-[16/10] lg:order-2 lg:col-span-5 lg:aspect-auto lg:min-h-[70vh] lg:self-start">
        <Photo photo={photos.ft5} fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover" />
      </div>
    </section>
  );
}

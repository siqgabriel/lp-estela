import { s3 } from "@/lib/content";
import { photos } from "@/lib/photos";
import { Gallery } from "@/components/system/refine";
import { GUTTER, IMPACT, LEAD, Prose } from "@/components/system/type";

/**
 * Seção 3 — página cheia ink. Galeria assimétrica com legendas (referência Uniiq, cantos
 * secos) à esquerda; à direita, o título com "PRA CABER." preso numa caixa branca do tamanho
 * exato da palavra e o texto alinhado ao eixo.
 */
export function CostOfFitting() {
  return (
    <section data-section="3" className="bg-ink-band text-paper">
      <div className={`${GUTTER} pad-section grid gap-14 lg:grid-cols-12 lg:gap-[3vw]`}>
        <Gallery photos={[photos.ft6, photos.ft11, photos.ft1]} positions={["50% 22%", "50% 30%", "50% 35%"]} tone="dark" className="lg:col-span-6" />
        <div className="lg:col-span-5 lg:col-start-8 lg:pt-[6vw]">
          <h2>
            <span className={`${LEAD} text-lilac`}>{s3.lead}</span>
            <span className={`${IMPACT} mt-3 inline-block bg-paper px-[0.12em] pt-[0.06em] text-paper-ink`}>{s3.impact}</span>
          </h2>
          <Prose paragraphs={s3.paragraphs} className="mt-10 max-w-[52ch]" />
        </div>
      </div>
    </section>
  );
}

import { marketClarity } from "@/lib/content";
import { photos } from "@/lib/photos";
import { PhotoWord } from "@/components/system/PhotoWord";
import { GUTTER, IMPACT, LEAD, MONUMENTAL, Prose } from "@/components/system/type";
import { MarketClarityMotion } from "./MarketClarityMotion";

/**
 * Seção 4 — foto em letra nº 1 (CLAREZA, ft8). Papel branco nos dois temas.
 * Eixo horizontal: a base da palavra encosta na faixa ink que carrega o texto.
 * Desktop: palavra à esquerda, título apontado para ela à direita (alinhado ao topo da palavra).
 */
export function MarketClarity() {
  return (
    <section id="clareza" data-section="4" className="relative isolate overflow-hidden bg-paper text-paper-ink">
      <h2 className={`${GUTTER} flex flex-col gap-4 pt-[var(--space-section)] lg:flex-row-reverse lg:items-end lg:justify-between lg:gap-[3vw]`}>
        <span className="block text-right lg:pb-[1.6vw]">
          <span className={`${LEAD} text-paper-accent`}>{marketClarity.lead}</span>
          <span className={`${IMPACT} mt-[0.12em]`}>{marketClarity.impact}</span>
        </span>
        <PhotoWord
          word={marketClarity.word}
          photo={photos.ft8}
          position="50% 50%"
          className={`clareza-word ${MONUMENTAL} text-[30vw] lg:text-[14vw]`}
        />
      </h2>

      <div className={`${GUTTER} grid gap-6 bg-paper-ink pt-12 pb-[max(var(--space-block),96px)] text-paper lg:grid-cols-12 lg:gap-[3vw] lg:py-[var(--space-block)]`}>
        <p className="font-sans text-[17px] leading-relaxed font-medium lg:col-span-5 lg:text-[18px]">
          {marketClarity.paragraphs[0]}
        </p>
        <Prose paragraphs={[marketClarity.paragraphs[1]]} className="lg:col-span-6 lg:col-start-7" />
      </div>

      <MarketClarityMotion />
    </section>
  );
}

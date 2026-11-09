import { marketClarity } from "@/lib/content";
import { photos } from "@/lib/photos";
import { PhotoWord } from "@/components/system/PhotoWord";
import { MarketClarityMotion } from "./MarketClarityMotion";

/**
 * Seção 4 — foto em letra nº 1 (CLAREZA, ft8). Bloco de papel branco nos dois
 * temas (um único tratamento de foto). Eixo horizontal: a base da palavra
 * encosta na faixa ink que carrega o texto.
 */
export function MarketClarity() {
  return (
    <section id="clareza" data-section="4" className="relative isolate overflow-hidden bg-paper text-paper-ink">
      <h2 className="px-5 pt-16 text-right font-display uppercase sm:px-8 lg:px-[4vw] lg:pt-[6vw]">
        <span className="block text-[8vw] leading-[0.95] font-normal text-paper-accent lg:text-[5.2vw]">
          {marketClarity.lead}
        </span>
        <span className="mt-[0.15em] block text-[14vw] leading-[1.02] font-bold lg:text-[8vw]">{marketClarity.impact}</span>
        <PhotoWord
          word={marketClarity.word}
          photo={photos.ft8}
          position="50% 50%"
          className="clareza-word -mx-5 mt-[1vw] text-center text-[34.4vw] leading-[0.9] font-bold sm:-mx-8 lg:-mx-[4vw]"
        />
      </h2>

      <div className="mt-[0.4vw] grid gap-5 bg-paper-ink px-5 py-10 text-paper sm:px-8 lg:grid-cols-[44vw_1fr] lg:gap-[3vw] lg:px-[4vw] lg:py-[3vw]">
        <p className="max-w-[46ch] font-sans text-lg leading-relaxed font-semibold lg:ml-auto lg:text-right lg:text-[1.35vw]">
          {marketClarity.paragraphs[0]}
        </p>
        <p className="max-w-[52ch] font-sans text-lg leading-relaxed lg:text-[1.35vw]">{marketClarity.paragraphs[1]}</p>
      </div>

      <MarketClarityMotion />
    </section>
  );
}

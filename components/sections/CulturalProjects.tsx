import { s10 } from "@/lib/content";
import { photos } from "@/lib/photos";
import { Gallery } from "@/components/system/refine";
import { GUTTER, Prose, Title } from "@/components/system/type";

/**
 * Seção 10 — eixo vertical em 38% com o bloco à ESQUERDA (inverte a direção do eixo).
 * Bloco: título e as três frases de abertura. Campo: galeria assimétrica com legendas
 * encostada no eixo, o resto do texto e os formatos de projeto em lista tipográfica.
 * Celular: eixo horizontal (bloco em cima, campo embaixo).
 */
export function CulturalProjects() {
  return (
    <section data-section="10" className="relative isolate grid bg-field text-strong lg:grid-cols-[38%_1fr]">
      <div className={`${GUTTER} pad-section bg-block text-on-block lg:pr-[3vw]`}>
        <div className="lg:sticky lg:top-[calc(var(--header-h)+3vw)]">
          <Title lead={s10.lead} impact={s10.impact} leadClass="text-accent-on-block" />
          <div className="mt-10 space-y-3 font-sans text-xl leading-snug font-medium lg:text-[22px]">
            {s10.opening.map((line, i) => (
              <p key={line} className={i === s10.opening.length - 1 ? "font-bold" : ""}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className={`${GUTTER} pad-section lg:pl-[4vw]`}>
        <Gallery photos={[photos.ft4, photos.ft7, photos.ft3]} />
        <div className="mt-[var(--space-block)] max-w-[60ch]">
          <p className="font-sans text-[17px] leading-relaxed lg:text-[18px]">{s10.ideas}</p>
          <p className="mt-8 font-sans text-[17px] leading-relaxed lg:text-[18px]">{s10.formatsLead}</p>
          <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1 font-display text-[clamp(30px,3vw,46px)] leading-[1.05] font-bold uppercase">
            {s10.formats.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <Prose paragraphs={s10.paragraphs} className="mt-10" />
        </div>
      </div>
    </section>
  );
}

import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { s14 } from "@/lib/content";
import { PhotoPlaceholder, photoToneClass } from "@/components/media/Photo";
import { estelaPhotos } from "@/lib/photos";
import { FrameLabel } from "@/components/system/refine";
import { GUTTER, IMPACT, LEAD_PAIR, MONUMENTAL, NUMERAL } from "@/components/system/type";

/**
 * Foto da Estela: arquivo local em public/img/photo/estela/ (fora do git até a aprovação dela).
 * Enquanto não aprovada, só aparece onde o arquivo existe localmente; no deploy vira placeholder.
 */
const estela = estelaPhotos.sentada;
const estelaAvailable = fs.existsSync(path.join(process.cwd(), "public", estela.src));

/**
 * Seção 14 — Estela entre as letras do próprio nome (técnica do hero da version-2 do Davies):
 * ESTELA ALBANI cheio atrás do retrato e o mesmo nome vazado por cima, de modo que as letras
 * continuam legíveis sobre a foto. Eixo horizontal: ink em cima, faixa branca na base,
 * que o retrato atravessa. No celular: nome em duas linhas, sem sobreposição.
 */
export function AboutEstela() {
  const fullName = `${s14.name[0]} ${s14.name[1]}`;
  return (
    <section data-section="14" className="relative isolate flex flex-col overflow-hidden bg-ink-band text-paper lg:block">
      <FrameLabel className="top-7 right-5 left-5 z-30 text-lilac sm:right-8 sm:left-8 lg:right-auto lg:left-[4vw]">
        25 ANOS · DIREÇÃO DE ELENCO · PRODUÇÃO CULTURAL · MENTORIA DE CARREIRA ARTÍSTICA
      </FrameLabel>

      <div className={`${GUTTER} relative order-1 pt-[var(--space-section)]`}>
        <h2>
          <span className={`${LEAD_PAIR} relative z-30 mb-2 text-lilac`}>{s14.lead}</span>
          {/* Celular: nome em duas linhas */}
          <span className={`${IMPACT} lg:hidden`}>
            {s14.name[0]}
            <br />
            {s14.name[1]}
          </span>
          {/* Desktop: nome cheio (atrás do retrato) */}
          <span className={`${MONUMENTAL} relative z-0 hidden lg:block lg:text-[13vw]`}>{fullName}</span>
        </h2>
        {/* Desktop: o mesmo nome vazado, por cima do retrato (decorativo) */}
        <span
          aria-hidden="true"
          className={`${MONUMENTAL} word-outline pointer-events-none absolute right-0 bottom-0 left-0 z-20 hidden px-[4vw] tracking-[0.01em] [clip-path:inset(0_17vw_0_49vw)] lg:block lg:text-[13vw]`}
        >
          {fullName}
        </span>
      </div>

      <div className={`${GUTTER} relative z-30 order-1 pt-10 pb-10 lg:w-[47%] lg:pt-[var(--space-block)] lg:pb-[var(--space-block)]`}>
        <div className="space-y-5 font-sans text-[17px] leading-relaxed lg:text-[18px]">
          {s14.paragraphs.map((p) => {
            const year = p.match(/^Em (\d{4})/)?.[1];
            return (
              <div key={p} className="lg:grid lg:grid-cols-[6.4vw_1fr] lg:gap-x-4">
                <span aria-hidden="true" className={`${NUMERAL} hidden text-[clamp(30px,2.8vw,44px)] text-numeral-dark lg:block`}>
                  {year ?? ""}
                </span>
                <p className="max-w-[56ch]">{p}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="relative z-30 order-3 bg-paper text-paper-ink">
        <p className={`${GUTTER} py-10 font-sans text-xl leading-snug font-bold lg:w-[47%] lg:py-[3vw] lg:text-[22px]`}>
          {s14.closing}
        </p>
      </div>

      {/* Retrato: entre o nome cheio (z-0) e o nome vazado (z-20); atravessa a faixa branca. */}
      <div
        data-cursor="photo"
        className="relative z-20 order-2 mx-auto w-[78%] max-w-[420px] lg:absolute lg:top-[calc(var(--space-section)+1.2vw)] lg:right-[17vw] lg:z-10 lg:mt-0 lg:w-[34vw] lg:max-w-none"
      >
        {estelaAvailable ? (
          <Image
            src={estela.src}
            alt={estela.alt}
            width={estela.width}
            height={estela.height}
            sizes="(min-width: 1024px) 34vw, 78vw"
            className={`h-auto w-full ${photoToneClass(estela)}`}
          />
        ) : (
          <PhotoPlaceholder label="Foto da Estela aguardando aprovação" className="aspect-[1100/1888] w-full" />
        )}
      </div>
    </section>
  );
}

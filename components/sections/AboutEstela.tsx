import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { s14 } from "@/lib/content";
import { PhotoPlaceholder, photoToneClass } from "@/components/media/Photo";
import { estelaPhotos } from "@/lib/photos";
import { GUTTER, IMPACT, LEAD, NUMERAL } from "@/components/system/type";

/**
 * Foto da Estela: arquivo local em public/img/photo/estela/ (fora do git até a aprovação dela).
 * Enquanto não aprovada, só aparece onde o arquivo existe localmente; no deploy vira placeholder.
 */
const estela = estelaPhotos.sentada;
const estelaAvailable = fs.existsSync(path.join(process.cwd(), "public", estela.src));

/**
 * Seção 14 — eixo horizontal: ink em cima, faixa branca na base. Estela recortada
 * encosta na borda direita e atravessa a faixa, como nos fechamentos dos carrosséis.
 * Os anos (2002, 2012) aparecem como numerais ao lado dos parágrafos (decorativos; o texto
 * do PDF segue integral).
 */
export function AboutEstela() {
  return (
    <section data-section="14" className="relative isolate flex flex-col overflow-hidden bg-ink-band text-paper lg:block">
      <div className={`${GUTTER} relative z-10 order-1 pt-20 pb-10 lg:w-[62%] lg:pt-[7vw] lg:pb-[4vw]`}>
        <h2>
          <span className={`${LEAD} text-lilac`}>{s14.lead}</span>
          <span className={IMPACT}>
            {s14.name[0]}
            <br />
            {s14.name[1]}
          </span>
        </h2>

        <div className="mt-10 space-y-5 font-sans text-[17px] leading-relaxed lg:text-[18px]">
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

      <div className="relative z-10 order-3 bg-paper text-paper-ink">
        <p className={`${GUTTER} py-10 font-sans text-xl leading-snug font-bold lg:w-[62%] lg:py-[3vw] lg:text-[22px]`}>
          {s14.closing}
        </p>
      </div>

      <div className="relative z-20 order-2 mx-auto w-[78%] max-w-[420px] lg:absolute lg:right-[3vw] lg:bottom-0 lg:z-20 lg:mt-0 lg:w-[30vw] lg:max-w-none">
        {estelaAvailable ? (
          <Image
            src={estela.src}
            alt={estela.alt}
            width={estela.width}
            height={estela.height}
            sizes="(min-width: 1024px) 30vw, 78vw"
            className={`h-auto w-full ${photoToneClass(estela)}`}
          />
        ) : (
          <PhotoPlaceholder label="Foto da Estela aguardando aprovação" className="aspect-[1100/1888] w-full" />
        )}
      </div>
    </section>
  );
}

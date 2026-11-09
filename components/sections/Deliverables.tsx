import Image from "next/image";
import { bonuses, deliverables, s13 } from "@/lib/content";
import { GUTTER, LEAD, Title } from "@/components/system/type";

/**
 * Seção 13 — sem eixo. Entregas como linhas tipográficas (sem cards); "+150" em escala de
 * impacto (a palavra monumental fica para a seção 14). Bônus em dois blocos ink soltos; a capa do e-book
 * (provisória, renderizada do PDF da Estela) encosta no bloco do bônus 1.
 */
export function Deliverables() {
  return (
    <section data-section="13" className="bg-field text-strong">
      <div className={`${GUTTER} pad-section`}>
        <Title lead={s13.lead} impact={s13.impact} leadClass="text-accent" />

        <dl className="mt-12 lg:mt-[4vw]">
          {deliverables.map((d) => {
            const monumental = d.label.startsWith("+150");
            return (
              <div key={d.label} className="grid gap-2 border-t border-rule py-5 lg:grid-cols-12 lg:items-baseline lg:gap-[3vw]">
                <dt className="lg:col-span-7">
                  {monumental ? (
                    <>
                      <span className="inline font-display text-[clamp(56px,7vw,110px)] leading-none font-bold">+150</span>{" "}
                      <span className={`${LEAD} inline text-accent`}>{d.label.replace("+150 ", "")}</span>
                    </>
                  ) : (
                    <span className="font-display text-[clamp(36px,4vw,60px)] leading-none font-bold uppercase">{d.label}</span>
                  )}
                </dt>
                <dd className="font-sans text-[17px] leading-relaxed lg:col-span-5 lg:text-[18px]">{d.desc}</dd>
              </div>
            );
          })}
        </dl>

        <p className="mt-14 font-sans text-xl font-bold lg:mt-[5vw] lg:text-[22px]">{s13.bonusIntro}</p>
        <div className="mt-6 grid gap-4 lg:grid-cols-12 lg:gap-[1.5vw]">
          {bonuses.map((b, i) => {
            const [label, title] = b.title.split(" — ");
            return (
              <div key={b.title} className={`relative bg-ink-band p-7 text-paper lg:p-[2.6vw] ${i === 0 ? "lg:col-span-7 lg:pr-[16vw]" : "lg:col-span-5"}`}>
                <h3>
                  <span className={`${LEAD} text-lilac`}>{label}</span>
                  <span className="mt-2 block font-display text-[clamp(30px,2.8vw,44px)] leading-[0.95] font-bold uppercase">{title}</span>
                </h3>
                <p className="mt-4 max-w-[46ch] font-sans text-[17px] leading-relaxed lg:text-[18px]">{b.desc}</p>
                {i === 0 && (
                  <Image
                    src="/img/brand/ebook-passo-a-passo.jpg"
                    alt="Capa do e-book Passo a Passo para a Carreira de Ator"
                    width={896}
                    height={1400}
                    sizes="(min-width: 1024px) 13vw, 40vw"
                    className="mt-6 w-[40%] shadow-none lg:absolute lg:-top-[3vw] lg:right-[2vw] lg:mt-0 lg:w-[12vw]"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

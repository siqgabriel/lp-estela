import { s18 } from "@/lib/content";
import { whatsappLink } from "@/lib/site-config";
import { GUTTER, IMPACT, Prose } from "@/components/system/type";

/** Seção 18 — faixa curta, sem eixo. O PDF aponta para o botão flutuante de WhatsApp ("aqui do lado"). */
export function Questions() {
  const wa = whatsappLink();
  return (
    <section id="duvidas" data-section="18" className="border-t border-rule bg-field text-strong">
      <div className={`${GUTTER} grid gap-8 py-14 lg:grid-cols-12 lg:items-center lg:gap-[3vw] lg:py-[4vw]`}>
        <h2 className={`${IMPACT} lg:col-span-6`}>{s18.impact}</h2>
        <div className="lg:col-span-5 lg:col-start-8">
          <Prose paragraphs={s18.paragraphs} />
          {wa ? (
            <a href={wa} target="_blank" rel="noreferrer" className="mt-5 inline-block font-ui text-sm font-semibold tracking-wider uppercase underline underline-offset-4">
              WhatsApp
            </a>
          ) : (
            <p className="mt-4 font-ui text-xs" data-pending="whatsapp">
              [Pendente: número do WhatsApp — lib/site-config.ts]
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

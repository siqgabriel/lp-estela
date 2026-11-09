import { s15 } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";
import { Cta, GUTTER, IMPACT, LEAD, MONUMENTAL } from "@/components/system/type";

/**
 * Seção 15 — eixo vertical (58%). Campo: nome do produto e o preço monumental, inteiro do
 * lado do campo (o eixo nunca corta dígitos). Bloco: parcelamento, o que está incluso e o CTA.
 * Sem caixa de oferta. Celular: página cheia branca, CTA em ink.
 */
export function Offer() {
  const checkout = siteConfig.checkoutUrl;
  return (
    <section id="oferta" data-section="15" className="relative isolate grid bg-field text-strong lg:grid-cols-[58%_1fr]">
      <div className={`${GUTTER} pt-20 pb-10 lg:py-[7vw]`}>
        <h2>
          <span className={`${LEAD} text-accent`}>{s15.lead}</span>
          <span className={`${IMPACT} mt-1`}>{s15.product}</span>
        </h2>
        <p className="mt-8 flex flex-wrap items-baseline gap-x-5">
          <span className={`${MONUMENTAL} text-[30vw] lg:text-[14vw]`}>{s15.price}</span>
          <span className={`${LEAD} text-accent`}>{s15.cashLabel}</span>
        </p>
      </div>

      <div className={`${GUTTER} pb-20 lg:flex lg:flex-col lg:justify-end lg:bg-block lg:py-[7vw] lg:text-on-block`}>
        <p className={`${LEAD} lg:text-[clamp(30px,2.6vw,42px)]`}>{s15.installments}</p>
        <p className="mt-6 max-w-[44ch] font-sans text-[17px] leading-relaxed font-bold lg:text-[18px]">{s15.included}</p>
        <Cta href={checkout ?? "#oferta"} tone="field" className="mt-8 w-full lg:bg-field lg:text-strong">
          {s15.cta}
        </Cta>
        {!checkout && (
          <p className="mt-3 font-ui text-xs" data-pending="checkout">
            [Pendente: link de checkout — lib/site-config.ts]
          </p>
        )}
      </div>
    </section>
  );
}

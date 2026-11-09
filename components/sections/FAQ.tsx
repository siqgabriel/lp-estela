import { faqItems, s19 } from "@/lib/content";
import { GUTTER, Title } from "@/components/system/type";

/**
 * Seção 19 — página cheia branca. Título fixo à esquerda no desktop; perguntas com
 * details/summary nativos (todas as respostas no HTML, funciona sem JS).
 */
export function FAQ() {
  return (
    <section data-section="19" className="bg-field text-strong">
      <div className={`${GUTTER} grid gap-10 py-20 lg:grid-cols-12 lg:gap-[3vw] lg:py-[8vw]`}>
        <Title
          lead={s19.lead}
          impact={s19.impact}
          className="lg:sticky lg:top-[calc(var(--header-h)+3vw)] lg:col-span-4 lg:self-start"
          leadClass="text-accent"
        />
        <div className="faq border-b border-rule lg:col-span-7 lg:col-start-6">
          {faqItems.map((item, index) => (
            <details key={item.q} open={index === 0} className="border-t border-rule">
              <summary className="flex w-full items-center justify-between gap-6 py-5 text-left font-sans text-lg font-semibold lg:text-[20px]">
                {item.q}
                <span aria-hidden="true" className="faq-icon font-display text-3xl leading-none text-accent" />
              </summary>
              <p className="max-w-[60ch] pb-6 font-sans text-[17px] leading-relaxed lg:text-[18px]">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/layout/Reveal";
import { faqItems } from "@/lib/content";

/**
 * FAQ com details/summary nativos: todas as respostas ficam no HTML (busca,
 * leitores de tela, Ctrl+F) e funcionam sem JS. O SmoothScrollProvider
 * atualiza o ScrollTrigger quando um item abre ou fecha.
 */
export function FAQ() {
  return (
    <Panel mode="palco" className="border-t border-palco-line">
      <Reveal>
        <p className="eyebrow text-accent">FAQ</p>
        <h2 className="mt-3 font-display text-4xl text-strong sm:text-5xl">PERGUNTAS FREQUENTES</h2>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="faq mt-10 divide-y divide-palco-line border-y border-palco-line">
          {faqItems.map((item, index) => (
            <details key={item.q} open={index === 0}>
              <summary className="flex w-full items-center justify-between gap-6 py-5 text-left font-ui text-base font-medium text-strong">
                {item.q}
                <span aria-hidden="true" className="faq-icon text-xl text-accent" />
              </summary>
              <p className="pb-5 font-sans text-base leading-relaxed text-palco-text-soft">{item.a}</p>
            </details>
          ))}
        </div>
      </Reveal>
    </Panel>
  );
}

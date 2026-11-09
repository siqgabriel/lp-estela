import { s2 } from "@/lib/content";
import { GUTTER, Prose, Title } from "@/components/system/type";
import { ScrollWords } from "@/components/system/ScrollWords";

/**
 * Seção 2 — página cheia branca. Título à esquerda com as duas primeiras frases à direita;
 * no meio, o parágrafo-manifesto em escala maior que se acende na rolagem; depois o fecho.
 * Ordem de leitura do PDF preservada.
 */
export function PainIntro() {
  const [p1, p2, manifesto, ...rest] = s2.paragraphs;
  return (
    <section data-section="2" className="bg-field text-strong">
      <div className={`${GUTTER} pad-section`}>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-[3vw]">
          <Title lead={s2.lead} impact={s2.impact} className="lg:col-span-6" leadClass="text-accent" />
          <Prose paragraphs={[p1, p2]} boldLast={false} className="max-w-[56ch] lg:col-span-5 lg:col-start-8 lg:self-end" />
        </div>

        <ScrollWords
          text={manifesto}
          className="mt-[var(--space-block)] max-w-[30ch] font-sans text-[clamp(26px,2.7vw,42px)] leading-[1.25] font-medium sm:max-w-[34ch] lg:ml-[8.33%]"
        />

        <Prose paragraphs={rest} className="mt-[var(--space-block)] max-w-[56ch] lg:ml-[58.33%]" />
      </div>
    </section>
  );
}

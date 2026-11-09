import { audienceQualifiers, s12 } from "@/lib/content";
import { GUTTER, IMPACT } from "@/components/system/type";
import { FrameLabel } from "@/components/system/refine";

/**
 * Seção 12 — página cheia branca, respiro. Título e introdução à esquerda; os itens à
 * direita, cada um com a seta fina dos carrosséis apontando para o título.
 */
export function Audience() {
  return (
    <section data-section="12" className="relative bg-field text-strong">
      <FrameLabel className="top-7 right-5 text-accent sm:right-8 lg:right-[4vw]">MAIORES DE 18 ANOS · TEATRO E/OU AUDIOVISUAL</FrameLabel>
      <div className={`${GUTTER} grid gap-12 pad-section lg:grid-cols-12 lg:gap-[3vw]`}>
        <div className="lg:col-span-5">
          <h2 className={IMPACT}>{s12.impact}</h2>
          <p className="mt-8 max-w-[44ch] font-sans text-lg leading-relaxed font-medium lg:text-[19px]">{s12.intro}</p>
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <ul>
            {audienceQualifiers.map((item) => (
              <li key={item} className="grid grid-cols-[2.5rem_1fr] items-baseline gap-3 border-t border-rule py-4 first:border-t-0">
                <svg aria-hidden="true" viewBox="0 0 40 12" className="h-3 w-9 -translate-y-0.5 text-accent" fill="none">
                  <path d="M39 6H2M7 1 2 6l5 5" stroke="currentColor" strokeWidth="1.4" />
                </svg>
                <span className="font-sans text-[17px] leading-snug font-medium lg:text-[18px]">{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-8 font-sans text-xl leading-snug font-bold lg:text-[22px]">{s12.closing}</p>
        </div>
      </div>
    </section>
  );
}

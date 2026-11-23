/**
 * Escala tipográfica do Eixo de Corte (teto em 1440 px):
 * - entrada (Bebas Regular): 32–48 px
 * - impacto (Bebas Bold): 64–110 px
 * - monumental (Bebas Bold): até ~200 px (≈14vw), no máximo uma a cada 2–3 seções
 * - texto corrido: Barlow 400/500, 17–19 px, cor forte, última frase em Bold
 */

export const LEAD = "block font-display font-normal uppercase leading-[0.95] text-[clamp(26px,3vw,46px)]";
export const IMPACT = "block font-display font-bold uppercase leading-[0.92] text-[clamp(44px,6.6vw,104px)]";
/** Linha de entrada que forma título único com uma palavra monumental (seções 6, 9, 14, 17). */
export const LEAD_PAIR = "block font-display font-normal uppercase leading-[0.95] text-[clamp(34px,9.6vw,48px)] lg:text-[clamp(44px,5.2vw,86px)]";
export const MONUMENTAL = "block font-display font-bold uppercase leading-[0.86] text-[clamp(76px,14vw,206px)]";
export const NUMERAL = "font-display font-bold leading-[0.85] text-[clamp(44px,4.6vw,72px)]";

type Tag = "h2" | "h3" | "p";

/** Título em dois pesos: linha de entrada (Regular) + linha de impacto (Bold). */
export function Title({
  lead,
  impact,
  as: As = "h2",
  className = "",
  leadClass = "",
  impactClass = "",
  leadFirst = true,
}: {
  lead?: string;
  impact: string;
  as?: Tag;
  className?: string;
  leadClass?: string;
  impactClass?: string;
  leadFirst?: boolean;
}) {
  const l = lead ? <span className={`${LEAD} ${leadClass}`}>{lead}</span> : null;
  const i = <span className={`${IMPACT} ${impactClass}`}>{impact}</span>;
  return (
    <As className={className}>
      {leadFirst ? l : i}
      {leadFirst ? i : l}
    </As>
  );
}

/** Texto corrido: Barlow 17–19 px, alinhado ao eixo; a última frase do bloco vai em Bold. */
export function Prose({
  paragraphs,
  className = "",
  boldLast = true,
}: {
  paragraphs: readonly string[];
  className?: string;
  boldLast?: boolean;
}) {
  return (
    <div className={`space-y-4 font-sans text-[17px] leading-relaxed lg:text-[18px] ${className}`}>
      {paragraphs.map((p, i) => (
        <p key={p} className={boldLast && i === paragraphs.length - 1 ? "font-bold" : ""}>
          {p}
        </p>
      ))}
    </div>
  );
}

/** Botão retangular. `tone="dark"`: sobre superfície escura; `tone="field"`: sobre o campo do tema. */
export function Cta({
  href,
  children,
  tone = "field",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  tone?: "field" | "dark" | "block";
  className?: string;
}) {
  const colors =
    // Utilitários (não a classe .btn-on-field) para que variantes lg: possam sobrescrever.
    tone === "dark" ? "bg-paper text-paper-ink" : tone === "block" ? "bg-field text-strong" : "bg-strong text-field";
  return (
    <a
      href={href}
      data-cta-inline
      className={`inline-block px-7 py-4 text-center font-ui text-sm font-semibold tracking-wider uppercase transition-opacity hover:opacity-90 ${colors} ${className}`}
    >
      {children}
    </a>
  );
}

/** Margens laterais padrão das seções (alinhadas ao header). */
export const GUTTER = "px-5 sm:px-8 lg:px-[4vw]";

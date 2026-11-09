import { comparison, comparisonRows } from "@/lib/content";
import { ComparisonMotion } from "./ComparisonMotion";

/**
 * Seção 7 — Duas formas. Tabela real (pares lidos juntos por leitores de tela).
 * - Celular: eixo horizontal; cada par vira duas faixas (campo e bloco).
 * - Desktop: eixo vertical em 50%; o título cruza o eixo; textos apontam para o eixo.
 *   Único pin da página (ComparisonMotion): o eixo avança sobre a coluna "reagindo".
 */
export function ComparisonTable() {
  return (
    <section
      id="duas-formas"
      data-section="7"
      className="comparison relative isolate overflow-hidden bg-field text-strong"
      style={{ "--cut": "54%" } as React.CSSProperties}
    >
      <div aria-hidden="true" className="comparison-block absolute inset-y-0 right-0 -z-10 hidden bg-block lg:block" />

      <div className="comparison-pin lg:pt-[3vw] lg:pb-[3.5vw]">
        <h2 className="split-x-lg px-5 pt-16 pb-8 font-display text-[15vw] leading-[0.9] font-bold uppercase [--split-a:var(--type-strong)] [--split-b:var(--type-on-block)] sm:px-8 lg:px-0 lg:pt-0 lg:pb-[2vw] lg:text-center lg:text-[6vw]">
          {comparison.title}
        </h2>

        <table className="comparison-table w-full border-collapse font-sans">
          <caption className="sr-only">
            {comparison.reactingHeader} e {comparison.decidingHeader}
          </caption>
          <thead>
            <tr>
              <th scope="col" className="cmp-a font-display text-2xl font-bold lg:text-[2.2vw]">
                {comparison.reactingHeader}
              </th>
              <th scope="col" className="cmp-b font-display text-2xl font-bold lg:text-[2.2vw]">
                {comparison.decidingHeader}
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonRows.map((row) => (
              <tr key={row.reacting} className="comparison-row">
                <td className="cmp-a text-[17px] leading-snug lg:text-[18px]">{row.reacting}</td>
                <td className="cmp-b text-[17px] leading-snug font-medium lg:text-[18px]">{row.deciding}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="comparison-closing grid lg:grid-cols-2 lg:pt-[2vw]">
          <p className="px-5 py-8 font-sans text-[17px] leading-relaxed sm:px-8 lg:py-0 lg:pr-[6vw] lg:text-right lg:text-[18px]">
            {comparison.closing[0]}
            <br />
            {comparison.closing[1]}
          </p>
          <p className="comparison-impact bg-block px-5 py-8 font-display text-[11vw] leading-[0.92] font-bold text-on-block uppercase sm:px-8 lg:bg-transparent lg:py-0 lg:pl-[6vw] lg:text-[3vw]">
            {comparison.closingImpact}
          </p>
        </div>
      </div>

      <ComparisonMotion />
    </section>
  );
}

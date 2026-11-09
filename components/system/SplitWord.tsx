type SplitWordProps = {
  /** Palavra completa, lida por leitores de tela. */
  text: string;
  /** Linhas da versão partida no celular (ex.: ["VISIBI", "LIDADE"]). */
  mobileLines?: readonly string[];
  /** Classe da versão de desktop (palavra inteira). */
  desktopClassName?: string;
  /** Classe da versão de celular (palavra partida). */
  mobileClassName?: string;
  /** A partir de qual largura a palavra inteira aparece. */
  breakpoint?: "sm" | "lg";
};

/**
 * Palavra partida acessível: a palavra inteira fica em texto visualmente oculto
 * e as versões visuais (inteira no desktop, partida no celular) ficam com
 * aria-hidden. Nunca usar role="text".
 */
export function SplitWord({
  text,
  mobileLines,
  desktopClassName = "",
  mobileClassName = "",
  breakpoint = "lg",
}: SplitWordProps) {
  const show = breakpoint === "lg" ? "hidden lg:block" : "hidden sm:block";
  const hide = breakpoint === "lg" ? "block lg:hidden" : "block sm:hidden";
  return (
    <>
      <span className="sr-only">{text}</span>
      {mobileLines ? (
        <>
          <span aria-hidden="true" className={`${hide} ${mobileClassName}`}>
            {mobileLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </span>
          <span aria-hidden="true" className={`${show} ${desktopClassName}`}>
            {text}
          </span>
        </>
      ) : (
        <span aria-hidden="true" className={`block ${desktopClassName}`}>
          {text}
        </span>
      )}
    </>
  );
}

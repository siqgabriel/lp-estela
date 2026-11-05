type PanelProps = {
  mode: "bastidor" | "palco" | "palco-warm";
  id?: string;
  className?: string;
  children: React.ReactNode;
};

const modeClasses: Record<PanelProps["mode"], string> = {
  bastidor: "bg-bastidor-bg text-bastidor-text",
  palco: "bg-palco-bg text-palco-text",
  "palco-warm": "bg-palco-bg-warm text-palco-text",
};

/**
 * Wrapper de seção que aplica o modo Bastidor (escuro, fixo) ou Palco
 * (claro, respeita o tema do visitante) — ver CLAUDE.md § Identidade visual.
 */
export function Panel({ mode, id, className = "", children }: PanelProps) {
  return (
    <section id={id} className={`${modeClasses[mode]} ${className}`}>
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">{children}</div>
    </section>
  );
}

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/layout/Reveal";
import { testimonials, testimonialVideoNames } from "@/lib/content";

export function SocialProof() {
  return (
    <Panel mode="bastidor" className="border-t border-bastidor-line">
      <Reveal>
        <p className="eyebrow text-bastidor-text-soft">Prova social</p>
        <h2 className="mt-3 font-display text-4xl sm:text-5xl">QUEM JÁ PASSOU POR AQUI.</h2>
      </Reveal>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <blockquote className="font-sans text-lg leading-relaxed text-bastidor-text-soft">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <p className="mt-4 font-ui text-sm font-semibold uppercase tracking-wider text-bastidor-text">
              — {t.name}, {t.role}
            </p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2}>
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {testimonialVideoNames.map((name) => (
            <div
              key={name}
              className="flex aspect-[9/16] flex-col items-center justify-end border border-bastidor-line bg-black/20 p-4 text-center"
            >
              <p className="font-ui text-xs uppercase tracking-wider text-bastidor-text-soft">
                [ vídeo pendente ]
              </p>
              <p className="mt-2 font-sans text-sm font-semibold">{name}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </Panel>
  );
}

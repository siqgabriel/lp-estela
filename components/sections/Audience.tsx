import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/layout/Reveal";
import { audienceQualifiers } from "@/lib/content";

export function Audience() {
  return (
    <Panel mode="palco" className="border-t border-palco-line">
      <div className="grid gap-10 sm:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <h2 className="font-display text-4xl text-ink sm:text-5xl">PRA QUEM É.</h2>
          <p className="mt-5 max-w-sm font-sans text-base text-palco-text-soft">
            Para atores e atrizes, maiores de 18 anos, estudantes ou profissionais de artes
            dramáticas com experiência em teatro e/ou audiovisual, que:
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="space-y-4">
            {audienceQualifiers.map((item) => (
              <li
                key={item}
                className="border-t border-palco-line pt-4 font-sans text-base leading-snug text-ink first:border-t-0 first:pt-0"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 font-sans text-xl font-semibold text-ink">
            Se isso te descreve, o Método Gestão foi construído pra você.
          </p>
        </Reveal>
      </div>
    </Panel>
  );
}

import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/layout/Reveal";

const timeline = [
  {
    year: "2002",
    text: "Criou o primeiro curso de orientação de imagem e carreira para atores no Rio de Janeiro — numa época em que ninguém tratava isso como parte da formação de um artista.",
  },
  {
    year: "2012",
    text: "Desenvolveu uma metodologia própria para ajudar atores a reconhecerem sua linha de atuação mais autêntica.",
  },
  {
    year: "Hoje",
    text: "Há 25 anos transita entre três lugares da profissão: direção de elenco, produção cultural e mentoria de carreira artística.",
  },
];

export function AboutEstela() {
  return (
    <Panel mode="bastidor" className="border-t border-bastidor-line">
      <div className="grid gap-12 sm:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <p className="eyebrow text-bastidor-text-soft">Quem é</p>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl">ESTELA ALBANI</h2>
          <div className="mt-8 flex aspect-[3/4] max-w-xs items-center justify-center border border-bastidor-line bg-black/20 font-ui text-xs uppercase tracking-widest text-bastidor-text-soft">
            [ foto em alta resolução — pendência 10.4 ]
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ol className="space-y-8">
            {timeline.map((item) => (
              <li key={item.year} className="border-t border-bastidor-line pt-5">
                <span className="font-display text-3xl text-white/90">{item.year}</span>
                <p className="mt-2 max-w-xl font-sans text-base leading-relaxed text-bastidor-text-soft">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-bastidor-text-soft">
            Ao longo desse caminho, teve acesso não só às dúvidas dos atores sobre autonomia e
            trajetória, mas também às resistências mais difíceis de nomear — muitas vezes
            enraizadas em como cada um foi ensinado a enxergar o próprio valor.
          </p>
          <p className="mt-4 max-w-xl font-sans text-lg font-semibold text-bastidor-text">
            É esse cruzamento entre técnica de mercado e compreensão humana que sustenta o Gestão de
            Carreira.
          </p>
        </Reveal>
      </div>
    </Panel>
  );
}

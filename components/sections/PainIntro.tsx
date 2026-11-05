import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/layout/Reveal";

export function PainIntro() {
  return (
    <Panel mode="bastidor">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl">
            VOCÊ SABE ATUAR. MAS O MERCADO SABE QUEM VOCÊ É?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-8 space-y-5 text-left font-sans text-lg leading-relaxed text-bastidor-text-soft sm:text-center">
            <p>
              A maioria da classe foi preparada pra entrar em cena. Pouquíssimos foram preparados
              pra tudo que acontece fora dela.
            </p>
            <p>
              Como se apresentar. Como ser lembrado. Como fazer um diretor de elenco entender, em
              poucos segundos de material, o que você levou anos pra construir.
            </p>
            <p>
              Antes de tudo, é preciso reconhecer o próprio valor. Cada ator carrega uma combinação
              única de perfil, singularidade e linguagem — um espaço legítimo que só ele pode
              ocupar no mercado. Essa singularidade é o primeiro ativo de uma carreira.
            </p>
            <p>
              Com essa clareza, vem a parte que sustenta tudo: planejamento, posicionamento,
              autonomia. Uma autonomia que nasce quando você constrói o próprio mercado —
              desenvolvendo projetos, reconhecendo seu público, ampliando oportunidades, ficando
              visível numa continuidade que cresce e que não depende de um único momento.
            </p>
            <p>
              Essa parte da profissão também se aprende. Só nunca esteve no caminho que você já
              percorreu.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-8 font-sans text-xl font-semibold text-bastidor-text">
            O Gestão de Carreira foi criado exatamente pra preencher essa lacuna.
          </p>
        </Reveal>
      </div>
    </Panel>
  );
}

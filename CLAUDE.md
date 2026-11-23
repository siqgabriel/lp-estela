# Gestão de Carreira — Estela Albani

Landing page de vendas (perpétua) do curso **Gestão de Carreira**, de Estela Albani (direção de elenco, produção cultural e mentoria de carreira artística há 25 anos). Público: atores e atrizes maiores de 18 anos, com experiência em teatro e/ou audiovisual.

Diretrizes operacionais de implementação (motion, preloader, cursor trail, acessibilidade, testes): `.claude/skills/estela-landing/SKILL.md`.

## Estado do projeto

A primeira versão em Next.js existe e está publicada em https://lp-estela.vercel.app/. Ela foi auditada em 2026-11-06 e a nova direção de arte (Eixo de Corte) foi aprovada em 2026-11-09. A reformulação reaproveita o projeto atual: não recriar o app nem reinstalar dependências.

**Dependências: nunca rodar `npm ci` nem `npm install` sem antes perguntar ao cliente se o `npm run dev` está rodando.** Com o servidor ativo, o npm não consegue apagar binários travados (lightningcss, oxide) e deixa o `node_modules` incompleto. Build e testes rodam em `.next-test` (`NEXT_DIST_DIR`), para não disputar a `.next` do servidor.

**Stack (versões do `package-lock.json`)**: Next 15.5.29 (App Router) · React 19.3.1 · TypeScript 5.9.3 · Tailwind CSS 4.3.4 (`@tailwindcss/postcss`) · GSAP 3.15.1 (ScrollTrigger e SplitText inclusos) · Lenis 1.3.27 · ESLint 9.39.5 + eslint-config-next 15.5.29. Dependência nova autorizada: apenas `@playwright/test` (dev). Qualquer outra precisa de aprovação.

**Fluxo de trabalho aprovado** — cada etapa só começa depois da aprovação da anterior:
1. Atualizar `CLAUDE.md` e a skill `estela-landing` (mostrar diff).
2. Mapa de ritmo das 19 seções (HTML estático com miniaturas: tipo de campo, palavra monumental, foto/foto em letra, CTA). Parar e aguardar aprovação.
3. Correções de base que não mudam a aparência (tokens e contraste do escuro, sem-JS, movimento reduzido, Lenis, cursor trail, FAQ com `details`, SEO, ícone, logo sem filtro, toggle com 44 px, `@playwright/test`).
4. Seções-piloto 1, 7 e 4 (CLAREZA) — aprovar primeiro em 390 px, depois em 1440 px — com a proposta de cadência de CTA da página inteira. A seção 14 só entra depois que as fotos da Estela forem aprovadas por ela.
5. Demais seções em blocos, movimento fino, tema escuro completo e testes.

Em cada entrega, informar brevemente o que as skills `frontend-design`, `ui-ux-pro-max`, `brand`, `design-system` e `ui-styling` alteraram.

## Fonte oficial de conteúdo

`content/PAGINA DE VENDAS_PERPETUO GESTAO_21-08-26.pdf` é a **única fonte de copy** (10 páginas, 19 seções). Regras:

- Nunca inventar, resumir, reordenar ou alterar textos, preços, módulos, bônus, condições, depoimentos ou a estratégia de persuasão. Tratamento visual (caixa alta da Bebas, quebras de linha, palavra partida) é permitido; mudar palavras ou pontuação não.
- Sem rótulos ou sobretítulos inventados ("Prova social", "Oferta", "Quem é", "Quero entrar" etc.). CTAs usam exatamente os textos do PDF: QUERO GANHAR VISIBILIDADE · QUERO CONHECER O MÉTODO · QUERO ENTRAR NO GESTÃO DE CARREIRA · QUERO COMEÇAR AGORA.
- Desvios da primeira versão a corrigir: incluir a frase de abertura dos bônus (seção 13; ver exceções abaixo) e "É só chamar a gente no botão do WhatsApp aqui do lado." (seção 18); restaurar a seção 14 com o texto integral do PDF (sem linha do tempo, sem o rótulo "Hoje"); usar "bem por que" na tabela da seção 7, como no PDF.
- Termo oficial: "Diretores de Elenco" (não "diretores de casting").
- Oferta: **R$ 442 à vista (ou R$ 497 em 12x)** — 12 módulos, +150 aulas gravadas com PDFs de apoio, 1 ano de acesso, suporte via chat da plataforma, 1 bônus (e-book "Passo a Passo para a Carreira de Ator"), garantia incondicional de 7 dias com reembolso integral. Não prometer testes, convites ou trabalhos.
- Depoimentos (Kécia Prado, Lira) e vídeos (Julia Marques, Samuel Giacomelli, Ilca Angela, Carolina Vilela) são pessoas reais: citação literal, sem paráfrase.
- **Exceções aprovadas pela Estela (2026-11-23)**, que prevalecem sobre o PDF:
  - Título novo na seção 8, entre o CTA e a lista de módulos: "CONHEÇA O CONTEÚDO" (em dois pesos).
  - Bônus "Contato dos principais Diretores de Elenco" removido. Textos ajustados para o singular: "E ainda tem um bônus:" (seção 13); "…suporte e o bônus que você acabou de conhecer — tudo incluso." (seção 15); FAQ "Como recebo o bônus?" / "Ele já faz parte da oferta: o e-book Passo a Passo para a Carreira de Ator."; rótulo do bônus sem número ("Bônus — E-book…").
- Se uma seção precisar de texto de venda que não está no PDF, sinalizar em vez de criar. Microcopy funcional (alt, rótulos acessíveis, mensagens de erro) pode ser criada.

## Direção de arte aprovada: Eixo de Corte

Uma linha onde o branco encontra o ink organiza a página: o texto se alinha a ela, as fotos encostam nela e as palavras a atravessam. Origem: os carrosséis da Estela são panorâmicas contínuas (7 slides) em que os elementos ignoram a divisa entre slides. O eixo muda de posição e de orientação ao longo da página (variável `--cut`).

Regras extraídas dos materiais (`brand-assets/identity/`):
- **Branco é o campo dominante**; o ink (`#1f1539`) é bloco. Abertura em branco, sem hero escuro.
- **Duas linhas, dois pesos**: linha de entrada curta em Bebas Regular, menor, seguida da linha de impacto em Bebas Bold.
- **Texto aponta para o eixo**: blocos à esquerda de uma foto ou bloco alinham à direita, e vice-versa.
- **Corte seco**: retângulos sem raio, sombra, borda ou gradiente. Botões são retângulos (nada de `rounded-full`).
- **Palavra pode partir** (SIGNIFI/CÂNCIA) quando ganha escala.
- **Numerais grandes com ponto** ("1.") em tom apagado, só onde há sequência real (os 12 módulos).
- **Violeta (`#331e69`) é tinta de texto**, nunca bloco: ink e violeta juntos têm só 1,25:1.
- **Corpo em Barlow** com a frase final do parágrafo em 700.
- **Sem sobretítulos tracejados em caixa alta**; o único texto com tracking largo é a assinatura "ESTELA ALBANI".
- **Densidade alterna** (título isolado → bloco denso → respiro). O eixo vertical não deve se repetir em sequência: alternar com eixo horizontal, página cheia branca, página cheia ink e seções sem eixo.

Proibido: quarta cor de destaque, duotone ou filtro roxo em fotos, `mix-blend-mode` para trocar cor de texto, cards arredondados, sombras genéricas, carrossel automático.

## Tipografia

| Família | Pesos | Carregamento | Papel |
|---|---|---|---|
| Bebas Neue (família 2014 da Fontfabric: Regular e Bold) | Regular (400), Bold (700) | `next/font/local`, arquivos em `app/fonts/bebas-neue/` | Títulos: Regular na linha de entrada, Bold no impacto e nas palavras monumentais |
| Barlow | 300–800 | `next/font/google` | Corpo (400/500, fecho em 700), subtítulos e chamadas raras (300/800) |
| Inter | 500–600 | `next/font/google` | Botões, FAQ, legal, nome em citações |

- A Bebas Neue do Google tem um único peso, que equivale ao Bold dos materiais. As duas Bebas vêm de arquivo local, e o traço medido bate com os materiais: Regular 0,078 em, Bold 0,110 em.
- **Licença verificada em 2026-11-09**: SIL Open Font License 1.1, declarada nos metadados (tabela `name`, ID 13) de cada peso, Regular e Bold inclusive. Arquivos v1.003 baixados de fontfabric.com (distribuidora oficial da família de 2014, segundo o README da Dharma Type); texto da OFL copiado do repositório oficial `dharmatype/Bebas-Neue`. Procedência, hashes e fontes em `app/fonts/bebas-neue/SOURCE.md`. O zip oficial da Fontfabric exige e-mail e não foi baixado.
- Escala: Regular de entrada 4–8 vw; Bold de impacto 8–12 vw; uma palavra monumental por seção de destaque, quase de borda a borda; corpo 17–19 px, até 68 caracteres por linha.

## Cores e tokens

Três camadas (primitivo → semântico → componente). **Componentes nunca usam cor crua nem tokens primitivos** como `text-ink`: usam os semânticos, que mudam com o tema. Era essa a causa do tema escuro ilegível na primeira versão.

Primitivos: `ink #1f1539` · `violet #331e69` · `white #ffffff` · `ink-deep #140d24` · `lilac #cdbdf2` · `numeral-on-light #625b74` · `numeral-on-dark #bdbac4`.

| Semântico | Claro | Escuro |
|---|---|---|
| `field` (campo) | white | ink |
| `block` (bloco de corte) | ink | white, só em momentos-chave |
| `block-soft` | — | ink-deep |
| `type-strong` | ink | white |
| `type-accent` (linha de entrada) | violet | lilac |
| `numeral` | numeral-on-light | numeral-on-dark |

- Tema claro é o padrão. O escuro tem tokens próprios, sem inversão automática.
- **Seções com foto em letra permanecem como blocos brancos também no tema escuro**, para manter um único tratamento de foto.
- Contraste mínimo AA (4,5:1 para texto normal, 3:1 para texto grande), verificado nos dois temas.

## Fotografia

Estrutura (servida pelo site, tudo em `public/` vai para o ar):
- `public/img/photo/conceptual/` — atores e imagens conceituais, já em P&B. **Direitos liberados para uso no site.**
- `public/img/photo/estela/` — fotos da Estela. Vazia até a aprovação dela.

- **Regra de commit das fotos da Estela**: só podem ser commitadas (e portanto publicadas) depois da aprovação da própria Estela. Até lá, `public/img/photo/estela/*` fica no `.gitignore` (exceto `.gitkeep`); a regra sai do `.gitignore` foto a foto, quando cada uma for aprovada. Enquanto não houver foto aprovada, a seção 14 usa placeholder explícito.
- Onde faltar foto, placeholder explícito e visível, nunca substituição em silêncio. Fotos extraídas dos PDFs de `brand-assets/identity/` não são acervo liberado.
- **Manifesto `lib/photos.ts`**: cada foto tem `src`, dimensões, `alt`, `tone: "bw" | "color"`, `rights` (`"liberada"` ou `"aguardando-aprovacao"`), `approval` (quem aprovou e quando, ou pendente) e créditos quando houver. Nenhum arquivo é convertido para P&B: o P&B é aplicado por CSS (`filter: grayscale()`) em um único componente, a partir do `tone`. **Padrão provisório: `tone: "bw"` para todas as fotos, inclusive as da Estela.** A decisão final de cor é do cliente e só acontece depois do layout pronto; trocar deve exigir só editar o manifesto.
- **Foto dentro da letra**: no máximo 3 palavras na página inteira. Nunca em títulos longos, listas ou botões. A foto precisa manter pelo menos 3:1 sobre o branco. Fallback em `type-strong` sólido (`@supports`, `forced-colors`).
- **PORTAS (seção 9)**: uma única foto preenchendo a palavra inteira, sem pin.
- **Fotos em letra escolhidas** (medição com a Bebas Bold real, 2026-11-09): CLAREZA = `ft8` (3,9% da letra abaixo de 3:1 em tela 2x); SEU = `ft2` (7%); PORTAS = `ft11` **provisória** (7,6%, mas mostra só tecido) — falta uma foto adequada. Em PORTAS e SEU, priorizar fotos que não aparecem nos carrosséis da Estela (aparecem: ft1, ft3, ft6, ft7, ft8, ft9). Nas demais seções a repetição é aceita.

## Pin de scroll

A página tem **dois pins autorizados**, ambos só no desktop: **seção 7** (Duas formas de tratar a carreira) e **seção 8** (os 5 grupos de módulos como cartões empilhados que deslizam e se sobrepõem). Qualquer pin novo precisa de aprovação do cliente antes de ser implementado.

## Movimento reduzido (regra aprovada em 2026-11-09)

O smooth scroll (Lenis) e a trilha do cursor ficam **sempre ligados**, como na referência Davies, inclusive com `prefers-reduced-motion: reduce`. A preferência desliga **apenas** pin, paralaxe e animações atreladas à rolagem (revelações ao entrar na tela, texto que se acende com o scroll, cartões empilhados). Preloader, passagem do preloader para o hero, faixas infinitas e o anel do cursor seguem ativos. Trilha e anel continuam desligados em touch.
- **Depoimentos (seção 11)**: só tipográficos até chegarem fotos reais das alunas. Nenhuma foto de banco perto deles.
- Fotos encostam no eixo e podem atravessar faixas no desktop; no celular ficam contidas.

## Logos

Servidos de `public/img/brand/`; originais em `brand-assets/logo/`. Atenção: `public/img/brand/logo-gc.png` é o arquivo **transparente** (igual a `brand-assets/logo/logo-gc-sem-fundo.png`); `brand-assets/logo/logo-gc.png` é a versão com fundo branco opaco, que não vai para a web.

- `logo-gc.png` (public) — lockup "Gestão de Carreira" (estrela de contorno + wordmark) em ink, transparente. Uso sobre branco.
- `logo-estela.png` — quadrado branco com estrela ink vazada + "ESTELA ALBANI", em branco: só sobre fundo escuro.
- `favicon-dark.png` — estrela branca sólida sobre ink (2063 px; gerar versões otimizadas de 32 e 180 px). `favicon-light.png` está quase invisível e precisa ser refeito.
- **Nunca aplicar filtro CSS em logo** (o `brightness-0 invert` atual preenche a estrela, que é de contorno). Usar os PNGs atuais sem filtro até chegarem os SVGs, inclusive a versão clara do lockup GC.

## Refino (camada de acabamento, referências Davies e Uniiq em `_ref/`, fora do git)

- Foto atravessando a palavra (técnica do hero da version-2 do Davies): texto cheio atrás do retrato e o mesmo texto vazado por cima. Usada na seção 14 (Estela entre as letras de ESTELA ALBANI).
- Microtipografia de moldura: rótulos em Inter 11–12 px, caixa alta, espaçamento largo, nos cantos das seções, sempre com informação real do PDF.
- Faixas infinitas de texto entre seções, com a estrela do logo como separador.
- Texto que se acende na rolagem em um parágrafo-manifesto (seção 2).
- Revelação de fotos por máscara com paralaxe leve; galerias assimétricas com legendas nas seções 3 e 10 (cantos secos).
- Cursor com anel que cresce sobre fotos e vídeo ("ASSISTIR" no vídeo), só em ponteiro fino.
- Espaçamento: escala baseada no `.flat-spacing` do Davies (120 px em 1440, 80 px, 60 px) — token `--space-section`.

## Comportamentos aprovados

- **Preloader**: manter o visual atual (estrela desenhada sobre fundo escuro). Corrigir só o comportamento: respeitar `prefers-reduced-motion`, funcionar sem JS (o CSS remove o overlay sozinho), aguardar `document.fonts.ready`, completar o traço antes do fade, teto máximo de espera e sem porcentagem falsa. Aparece em todo carregamento e refresh.
- **CTA fixo no celular**: aparece depois do hero e não pode cobrir o botão flutuante de WhatsApp.
- **Palavra partida**: palavra inteira em texto visualmente oculto (`sr-only`) e a versão partida com `aria-hidden="true"`. Não usar `role="text"`.
- **FAQ**: `details`/`summary` nativos, com todas as respostas no HTML.
- **Davies** (`wpriverthemes.com/HTML/davies`) é referência secundária só de movimento, scroll e cursor trail. Não copiar layout nem código.

## Pendências externas

Centralizadas em `lib/site-config.ts`, com placeholders explícitos. O build emite aviso enquanto algum item estiver pendente:

- link de checkout (seção 15)
- número do WhatsApp (seção 18 e botão flutuante)
- vídeo de vendas (seção 1) e os 4 vídeos de depoimento (seção 11)
- dados legais do rodapé (CNPJ, termos, privacidade)

Provisório aceito: **header branco também no tema escuro**, até chegar o SVG claro do logo GC; quando chegar, o header passa a seguir o tema.

Também a receber: foto para PORTAS (seção 9), aprovação das fotos da Estela, logos em SVG (inclusive a versão clara do GC), capa do e-book "Passo a Passo" (seção 13), fotos de bastidores (seção 10) e fotos de Kécia Prado e Lira. Onde faltar material, sinalizar na página em desenvolvimento e no relatório da etapa.

## Estrutura de pastas

```
app/                 # App Router (layout, page, globals.css, icon)
components/layout/   # header, footer, preloader, smooth scroll, cursor trail, toggle de tema
components/sections/ # uma seção do PDF por componente
hooks/               # hooks client (movimento reduzido, ponteiro fino)
lib/                 # content.ts (copy do PDF), photos.ts, site-config.ts, motion.ts, scroll.ts
public/img/brand/    # logos servidos
public/img/photo/    # conceptual/ (liberadas) e estela/ (só após aprovação dela)
brand-assets/        # logos originais e identity (carrosséis e PDFs de referência)
tests/               # Playwright
content/             # PDF oficial de copy
references/          # capturas do Davies
.claude/skills/      # skills do projeto (não reinstalar sem checar antes)
```

# BRIEFING GERAL — EVOLUÇÃO DA LANDING PAGE GESTÃO DE CARREIRA
## Cliente: Estela Albani

## 1. CONTEXTO DO PROJETO

Estou desenvolvendo uma landing page de vendas para o produto **Gestão de Carreira**, da Estela Albani.

O objetivo é criar uma página de vendas com uma identidade visual marcante, uma experiência de navegação diferenciada, animações sofisticadas e boa performance.

O projeto já possui uma primeira implementação em Next.js, publicada na Vercel:

https://lp-estela.vercel.app/

Entretanto, a primeira versão ficou visualmente simplória, pouco atraente e distante da identidade gráfica que já utilizamos nos materiais de comunicação da Estela.

Alguns aspectos técnicos e de movimento ficaram muito bons, especialmente:
- Smooth scroll.
- Animações.
- Preloader.

Esses elementos devem ser preservados e refinados, não descartados sem necessidade.

O principal objetivo agora é elevar significativamente a qualidade visual da landing page.

Quero que você atue como especialista em:
- Direção de arte digital.
- Frontend Design.
- UI/UX Design.
- Design editorial.
- Tipografia expressiva.
- Motion Design.
- Next.js, React e TypeScript.
- Performance e acessibilidade.

Não quero uma landing page com aparência de template ou de site genérico produzido por IA.

Quero uma experiência que pareça ter sido desenvolvida por um estúdio especializado em design digital.

---

## 2. ESTADO ATUAL DO PROJETO

O projeto está na pasta `lp-estela/`.

O Next.js já foi inicializado e o Claude já criou:
- `CLAUDE.md`.
- Configurações e arquivos de dependências.
- Estrutura inicial do site.
- Primeira implementação da landing page.

A primeira versão está publicada:

https://lp-estela.vercel.app/

**Importante:** não comece criando outro projeto e não substitua a implementação atual sem antes auditá-la.

Primeiro precisamos entender:
1. Como o projeto está organizado.
2. Quais dependências foram instaladas.
3. Como os componentes foram estruturados.
4. Como as animações foram implementadas.
5. Como o preloader funciona.
6. Como o smooth scroll foi implementado.
7. Quais partes da implementação podem ser preservadas.
8. Quais partes precisam ser reformuladas.

O desenvolvimento está sendo feito com Claude Code dentro do VS Code, mas também utilizarei Claude Web para auxiliar no planejamento e na análise.

A conversa anterior que tive com o Claude no notebook não foi sincronizada com a máquina principal. Portanto, não considere que você conhece decisões tomadas naquela conversa que não estejam documentadas nos arquivos atuais.

Sempre que possível, utilize os arquivos reais do projeto como fonte de verdade.

---

## 3. ESTRUTURA DE ARQUIVOS E MATERIAIS

A estrutura inicial de materiais era:

```text
lp-estela/
│
├── .claude/
│   └── skills/
│       ├── banner-design/
│       ├── brand/
│       ├── design/
│       ├── design-system/
│       ├── frontend-design/
│       ├── slides/
│       ├── ui-styling/
│       └── ui-ux-pro-max/
│
├── brand-assets/
│   ├── logo/
│   └── identity/
│
├── content/
│
└── references/
```

A estrutura técnica já foi ampliada com a inicialização do Next.js.

Não presuma que essa estrutura inicial representa toda a estrutura atual. Faça uma auditoria antes de propor alterações.

### Skills existentes

Já foram instaladas oito skills:

- banner-design
- brand
- design
- design-system
- frontend-design
- slides
- ui-styling
- ui-ux-pro-max

Não reinstale essas skills sem verificar se estão completas e funcionais.

As mais relevantes são:
1. frontend-design.
2. ui-ux-pro-max.
3. brand.
4. design-system.
5. ui-styling.

Quero que elas sejam efetivamente utilizadas no processo, e não apenas mencionadas nos arquivos de configuração.

Ao apresentar a nova proposta, indique quais skills foram consultadas e como contribuíram para as decisões.

---

## 4. IDENTIDADE VISUAL DA ESTELA

A identidade visual dos materiais já produzidos para Estela Albani deve ser considerada a principal referência estética do projeto.

Não queremos inventar uma identidade visual nova e simplesmente aplicar as cores roxas da marca.

Precisamos identificar, compreender e reproduzir a linguagem visual que já construímos.

### Tipografia

As fontes utilizadas são:

- Bebas Neue: títulos.
- Barlow: subtítulos e textos principais.
- Inter: elementos terciários.

A tipografia deve ser tratada como um elemento gráfico da composição, não apenas como um recurso para organizar informações.

Precisamos trabalhar com:
- Variações de peso: regular, medium, semibold, bold e extra bold, quando disponíveis.
- Variações expressivas de tamanho.
- Títulos gigantescos.
- Palavras isoladas em escala monumental.
- Contrastes entre fontes condensadas e fontes mais leves.
- Sobreposições tipográficas.
- Frases com palavras específicas recebendo destaque visual.
- Quebras de linha intencionais.
- Diferentes alinhamentos e proporções.

Não quero que todos os títulos tenham o mesmo tamanho ou a mesma estrutura.

Algumas palavras e frases devem assumir protagonismo na página.

### Paleta de cores

- Cor primária: `#1f1539`.
- Branco: `#ffffff`.
- Cor secundária: `#331e69`.

Essas cores devem ser organizadas em um sistema visual coerente, com contrastes e variações para os temas claro e escuro.

### Logos

Localizadas em `brand-assets/logo/`:

- `favicon-dark.png`
- `favicon-light.png`
- `logo-gc-sem-fundo.png`
- `logo-estela.png`
- `logo-gc.png`

Analise cada logo para identificar a melhor aplicação.

### Materiais gráficos

Localizados em `brand-assets/identity/`:

- `carrossel (1).png`
- `carrossel (2).png`
- `carrossel (3).png`
- `carrossel (4).png`
- `20_qualidades_ESTELA_ALBANI`
- `passo_a_passo_ESTELA_ALBANI`
- `manual_de_testes_ESTELA_ALBANI`
- `6-necessidades-estela`

Esses materiais devem ser analisados para identificar padrões de:
- Composição.
- Hierarquia tipográfica.
- Variação de pesos.
- Uso de cores.
- Fotografia.
- Sobreposição de elementos.
- Faixas e blocos de cores.
- Tratamento de imagens.
- Personalidade gráfica.

Não temos um manual formal de identidade visual. Por isso, esses materiais são nossa principal fonte para construir o sistema visual da landing.

---

## 5. DIREÇÃO DE ARTE: O QUE REALMENTE QUEREMOS

Esta é a parte mais importante do briefing.

A primeira versão da landing page ficou muito simples visualmente. Não queremos apenas melhorar espaçamentos, adicionar mais cards ou colocar animações em elementos convencionais.

Queremos uma composição muito mais expressiva, editorial e gráfica.

A página precisa incorporar os recursos que já utilizamos nos materiais de Estela.

### 5.1. Tipografia como protagonista

A tipografia precisa ser parte central da experiência.

Exemplos de recursos desejados:
- Palavras muito grandes ocupando áreas significativas da tela.
- Títulos que atravessam diferentes áreas da composição.
- Combinação de pesos tipográficos.
- Frases divididas em linhas com tamanhos diferentes.
- Palavras destacadas com bold ou extra bold.
- Textos com proporções e alinhamentos assimétricos.
- Tipografia condensada combinada com fontes de leitura.
- Sobreposição de títulos e fotografias.

Não utilize a mesma hierarquia tipográfica em todas as seções.

Cada seção deve ter uma composição própria, mas mantendo unidade visual.

### 5.2. Faixas e blocos de cores

Um recurso muito utilizado nos materiais da Estela são as faixas de cores.

Podemos trabalhar com:
- Faixas horizontais brancas.
- Faixas horizontais roxas.
- Blocos verticais.
- Alternância de áreas claras e escuras.
- Elementos que atravessam os limites entre duas faixas.

Um recurso particularmente importante é a tipografia que atravessa duas áreas de cores diferentes.

Por exemplo: uma palavra pode começar sobre uma faixa branca, com letras roxas, e continuar sobre uma faixa roxa, com letras brancas.

A intenção é criar composições em que o texto se integra aos blocos de cores, em vez de simplesmente ficar dentro de uma seção convencional.

Explore máscaras, recortes, sobreposições e divisões de fundo.

### 5.3. Fotografias em preto e branco

Outro recurso recorrente da identidade visual é a fotografia em preto e branco.

Quero que a landing utilize fotografias de maneira expressiva.

Teremos imagens de:
- Estela Albani.
- Atores e atrizes.
- Pessoas em situações relacionadas à interpretação.
- Bastidores.
- Palcos.
- Expressões artísticas.
- Situações conceituais que representem os temas da página.

As imagens não devem ser usadas apenas como ilustração ou preenchimento.

Elas precisam participar da composição gráfica.

Explore:
- Fotografias em grandes proporções.
- Recortes assimétricos.
- Imagens sobrepostas.
- Fotografias que atravessam seções.
- Máscaras.
- Recortes com formas geométricas.
- Fotografias em preto e branco combinadas com blocos roxos e brancos.

Priorize os arquivos reais fornecidos para o projeto.

Não substitua fotografias disponíveis por imagens genéricas de bancos de imagem.

### 5.4. Fotografias dentro das letras

Esse é um dos efeitos gráficos mais característicos que queremos explorar.

A ideia é preencher as letras de determinadas palavras com fotografias.

Por exemplo, em um fundo branco, uma palavra que normalmente seria roxa pode ter uma fotografia em preto e branco preenchendo o interior das letras.

A palavra continua perfeitamente legível, mas sua textura interna é formada por uma imagem.

Possíveis técnicas:
- `background-clip: text`.
- Máscaras CSS.
- SVG com preenchimento por imagem.
- Recortes tipográficos.

Utilize esse recurso em palavras estratégicas, não em todos os títulos.

O resultado deve ter acabamento refinado e boa legibilidade.

### 5.5. Composições assimétricas

Não quero uma página em que todas as seções tenham:
- Título centralizado.
- Texto abaixo.
- Três cards.
- Botão no final.

Precisamos variar a composição.

Explore:
- Elementos alinhados à esquerda e à direita.
- Títulos deslocados.
- Fotografias grandes.
- Blocos sobrepostos.
- Textos em diferentes escalas.
- Áreas de respiro.
- Composições horizontais e verticais.
- Divisões de tela.
- Seções com assimetria intencional.

A página deve ter ritmo visual e não parecer uma sequência de blocos repetidos.

### 5.6. Referência visual apresentada

Foi fornecida uma imagem de um carrossel da Estela sobre as seis necessidades humanas.

Essa referência apresenta:
- Tipografia condensada e expressiva.
- Títulos de grandes dimensões.
- Combinação de branco e roxo.
- Fotografias em preto e branco.
- Distribuição assimétrica de texto e imagem.
- Numeração em grande escala.
- Variação de pesos e tamanhos.
- Composição editorial.

Esse material deve ser considerado uma referência central para compreender a linguagem visual.

Também será disponibilizado um PDF e outros materiais gráficos para aprofundar a análise.

---

## 6. FOTOGRAFIAS E NOVOS MATERIAIS

Vou disponibilizar uma quantidade maior de fotografias para a landing page.

Teremos:
- Fotos da própria Estela.
- Fotografias representativas.
- Imagens de atores e atrizes.
- Fotografias de diferentes proporções e tamanhos.

A intenção é que o Claude possa selecionar as imagens mais adequadas para cada seção.

Sugestão de organização:

```text
brand-assets/
├── logo/
├── identity/
└── photography/
    ├── estela/
    ├── actors/
    └── conceptual/
```

Essa organização é uma proposta. Antes de criar ou mover arquivos, verifique a estrutura existente.

**Regra importante:** utilize prioritariamente as imagens fornecidas. Não deixe a página sem fotografias e não recorra automaticamente a imagens genéricas.

Se uma seção precisar de uma fotografia específica que não esteja disponível, indique a necessidade em vez de inventar uma imagem como se fosse parte do acervo da Estela.

---

## 7. REFERÊNCIAS EXTERNAS: DAVIES

As referências de site continuam sendo:

Versão 1:
https://wpriverthemes.com/HTML/davies/index.html

Versão 2:
https://wpriverthemes.com/HTML/davies/version-2.html

Entretanto, é fundamental compreender a função de cada referência.

**Davies é uma referência secundária para o movimento e a interação, não para definir a identidade visual da Estela.**

Utilize Davies como inspiração para:
- Smooth scroll.
- Transições.
- Animações.
- Interações com o cursor.
- Movimento de elementos.
- Ritmo de navegação.
- Efeitos visuais.
- Experiência de rolagem.

Não reproduza seu layout nem transforme a página da Estela em um portfólio de designer.

A linguagem visual dos materiais da Estela tem prioridade.

---

## 8. CURSOR TRAIL — LINHA QUE ACOMPANHA O MOUSE

Um dos efeitos do Davies que queremos preservar é a linha orgânica que acompanha o cursor.

O HTML identificado na referência:

```html
<canvas class="cursor-trail d-none d-xl-block" id="trail"></canvas>
```

SCSS:

```scss
.cursor-trail {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 9999;
}
```

Esses trechos configuram a camada Canvas, mas não contêm a lógica de desenho.

A implementação deverá ser própria.

Características desejadas:
- Linha fina.
- Movimento orgânico.
- Suavização.
- Rastro progressivo.
- Curvaturas naturais.
- Dissipação.
- Boa performance.
- Não bloquear interações.
- Desativação em dispositivos touch.
- Respeitar `prefers-reduced-motion`.

Implemente como componente independente, integrado corretamente ao React/Next.js.

---

## 9. ANIMAÇÕES E EXPERIÊNCIA DE NAVEGAÇÃO

A primeira versão já apresentou bons resultados em alguns aspectos de movimento.

Quero preservar especialmente:
- Smooth scroll.
- Animações existentes que estejam funcionando bem.
- Preloader.

### Smooth scroll

Manter uma navegação fluida, utilizando Lenis se a implementação atual estiver adequada.

A integração com GSAP e ScrollTrigger deve ser consistente, evitando conflitos entre os sistemas de rolagem.

### Motion design

Utilizar GSAP e ScrollTrigger para criar:
- Animações vinculadas à rolagem.
- Revelação de fotografias.
- Animações tipográficas.
- Transições entre seções.
- Sobreposições.
- Movimentos de elementos.
- Animações com diferentes velocidades.
- Sequências visuais.
- Efeitos de entrada e saída.

Não quero apenas fade-in e slide-up repetidos.

O movimento precisa reforçar a narrativa da página e dialogar com a identidade gráfica.

### Preloader

O preloader da primeira versão foi considerado muito bom.

Quero preservá-lo, analisando sua implementação atual.

Ele deve aparecer:
- No carregamento inicial.
- Após atualização do navegador.

Não deve apresentar porcentagens falsas de carregamento nem bloquear desnecessariamente a experiência.

### Temas claro e escuro

Manter os dois temas, com tokens específicos e coerentes com a identidade visual.

Não fazer apenas uma inversão automática de cores.

---

## 10. STACK TÉCNICA

A implementação atual já utiliza Next.js, mas a stack real deve ser auditada.

A direção técnica desejada é:

- Next.js com App Router.
- React.
- TypeScript.
- Tailwind CSS, se adequado.
- GSAP.
- ScrollTrigger.
- Lenis.
- Solução apropriada para tema claro e escuro.
- Playwright para testes e validação visual.

Priorizar:
- Componentes reutilizáveis.
- Separação correta entre Server Components e Client Components.
- Otimização de imagens.
- Carregamento eficiente de fontes.
- Código organizado.
- Dependências necessárias e justificadas.
- SEO.
- Acessibilidade.
- Responsividade.
- Performance.

Não reinstale pacotes sem verificar o que já está instalado.

---

## 11. CONTEÚDO COMERCIAL DA LANDING PAGE

O conteúdo oficial está no PDF da pasta `content/`.

Nome original:

`PAGINA DE VENDAS_PERPETUO GESTAO_21-08-26.pdf`

O documento possui 10 páginas e 19 seções.

Ele deve ser considerado a fonte oficial da copy.

**Não invente informações nem altere a estratégia comercial, os textos, os preços, os módulos, os bônus, os depoimentos ou as condições da oferta.**

O objetivo é transformar o conteúdo existente em uma experiência visual e comercialmente eficiente.

### Estrutura das 19 seções

1. Hero: transforme seu preparo artístico em visibilidade no mercado.
2. Você sabe atuar, mas o mercado sabe quem você é?
3. O custo de se moldar para caber.
4. O mercado precisa conseguir ler você com clareza.
5. Viver de atuação também é viver de incerteza.
6. Comandar a carreira ou só reagir a ela.
7. Comparação entre reagir às oportunidades e decidir a própria carreira.
8. Apresentação do método e seus 12 módulos.
9. Várias portas, não uma só.
10. Criatividade também é estratégia.
11. Depoimentos e provas sociais.
12. Para quem é o programa.
13. Tudo que o aluno terá acesso.
14. Apresentação da Estela Albani.
15. Oferta e preço.
16. Garantia de sete dias.
17. Chamada final para ação.
18. Contato pelo WhatsApp.
19. Perguntas frequentes.

### Oferta comercial

Produto: Gestão de Carreira.

Investimento:
- R$ 442 à vista.
- R$ 497 em até 12 parcelas.

Inclui:
- 12 módulos.
- Mais de 150 aulas gravadas.
- PDFs de apoio.
- Um ano de acesso.
- Suporte via chat da plataforma.
- Ebook "Passo a Passo para a Carreira de Ator".
- Contatos dos principais diretores de casting.

Garantia:
- Sete dias.
- Reembolso integral.
- Incondicional.

Público:
- Atores e atrizes maiores de 18 anos.
- Estudantes ou profissionais com experiência em teatro e/ou audiovisual.

Não prometer testes, convites ou trabalhos garantidos. O foco é posicionamento, apresentação, preparação e autonomia na condução da carreira.

---

## 12. O QUE NÃO FUNCIONOU NA PRIMEIRA VERSÃO

A primeira implementação ficou visualmente simplória.

Os principais problemas percebidos:
- Layout pouco expressivo.
- Pouca variação de composição.
- Ausência de fotografias.
- Tipografia sem protagonismo suficiente.
- Pouco aproveitamento dos recursos gráficos da identidade da Estela.
- Aparência distante dos materiais já desenvolvidos para a marca.

A impressão foi de que o resultado não aproveitou adequadamente as skills de design disponíveis.

Não queremos simplesmente pedir para o Claude "deixar mais bonito".

Precisamos fazer uma revisão real da direção de arte e da aplicação das referências.

### O que funcionou

- Smooth scroll.
- Animações.
- Preloader.

Esses elementos devem ser auditados e preservados quando tecnicamente adequados.

---

## 13. HIERARQUIA DAS REFERÊNCIAS

Esta hierarquia deve orientar todas as decisões visuais:

**1º — Materiais gráficos reais da Estela**

São a principal fonte da identidade visual. Deles devem vir as regras de tipografia, fotografia, composição, cores e personalidade.

**2º — Fotografias fornecidas para o projeto**

Devem ser utilizadas como parte da composição visual, com prioridade para os arquivos reais da Estela e do acervo disponibilizado.

**3º — Davies**

Referência para animações, movimento, transições, cursor trail e experiência de navegação.

**4º — Design system e skills**

Devem ajudar a organizar e transformar a identidade em um sistema reutilizável, sem impor uma aparência genérica.

**5º — Conteúdo comercial**

O conteúdo determina a narrativa e a conversão. O design deve valorizá-lo sem alterar sua estratégia.

---

## 14. O QUE ESPERO DA NOVA PROPOSTA

Quero que você faça uma análise crítica da primeira versão e apresente uma proposta concreta de evolução.

Não quero apenas sugestões genéricas.

Para cada seção importante, explique:
- Qual será a composição.
- Como a tipografia será utilizada.
- Quais fotografias podem ser aplicadas.
- Como os blocos de cores serão distribuídos.
- Quais elementos poderão se sobrepor.
- Quais animações fazem sentido.
- Como a composição se conecta à identidade da Estela.

Explore especialmente:
- Títulos em escala monumental.
- Fotografias em preto e branco.
- Fotografias dentro de letras.
- Faixas brancas e roxas.
- Tipografia atravessando áreas de cores diferentes.
- Composições assimétricas.
- Elementos que ultrapassam os limites convencionais das seções.
- Alternância entre áreas densas e áreas de respiro.

Não aplique todos os efeitos indiscriminadamente. A intenção é criar uma linguagem consistente e sofisticada.

---

## 15. FLUXO DE TRABALHO

Quero seguir esta sequência:

### ETAPA 1 — AUDITORIA DA IMPLEMENTAÇÃO

Analise o projeto atual e a primeira versão publicada.

Verifique:
- Estrutura de arquivos.
- Componentes.
- Dependências.
- Design system existente.
- Animações.
- Preloader.
- Smooth scroll.
- Responsividade.
- Utilização das skills.
- Possíveis problemas técnicos.

Não altere nada nesta etapa.

### ETAPA 2 — AUDITORIA DA IDENTIDADE VISUAL

Analise integralmente:
- PDF de conteúdo.
- Carrosséis.
- Logos.
- Materiais gráficos.
- Fotografias disponíveis.
- Prints de referência.

Identifique os padrões visuais recorrentes.

Não se limite a descrever os arquivos. Extraia regras de design que possam ser aplicadas à landing.

### ETAPA 3 — NOVA DIREÇÃO DE ARTE

Apresente:
- Diagnóstico da primeira versão.
- Diagnóstico da identidade visual.
- Direção de arte proposta.
- Sistema tipográfico.
- Paleta e tokens.
- Tratamento fotográfico.
- Estratégia de faixas e blocos.
- Estratégia de tipografia com imagens.
- Composição de cada seção.
- Plano de animações.

### ETAPA 4 — ARQUITETURA E PLANO DE REFORMULAÇÃO

Explique:
- Quais componentes existentes serão preservados.
- Quais serão reformulados.
- Quais novos componentes serão necessários.
- Como a estrutura atual será aproveitada.
- Quais dependências realmente precisam ser alteradas.
- Como serão realizados os testes.

### ETAPA 5 — APROVAÇÃO

Apresente a proposta e aguarde minha aprovação.

Não comece a reformulação visual antes da aprovação.

### ETAPA 6 — IMPLEMENTAÇÃO

Após aprovação:
- Reformular a landing.
- Aplicar a nova direção de arte.
- Integrar fotografias.
- Refinar a tipografia.
- Desenvolver as composições.
- Implementar os efeitos gráficos.
- Preservar e refinar as animações.
- Testar desktop e mobile.
- Fazer revisão visual e técnica.

---

## 16. INSTRUÇÕES FINAIS

Não quero uma resposta que apenas concorde com todas as minhas ideias.

Quero uma análise profissional, crítica e fundamentada.

Se uma ideia não funcionar tecnicamente ou prejudicar a experiência, explique e proponha uma alternativa.

Não invente imagens, depoimentos, informações comerciais ou elementos da identidade.

Não descarte o trabalho técnico existente sem necessidade.

Não considere o Davies como referência principal de layout.

Não transforme a landing em um portfólio de artista.

O objetivo continua sendo vender o produto Gestão de Carreira.

**A principal mudança é esta: precisamos sair de uma landing page convencional com animações e chegar a uma experiência editorial, tipográfica, fotográfica e visualmente marcante, que tenha a identidade gráfica da Estela Albani.**

Sua primeira resposta deve confirmar o entendimento, apresentar o plano de auditoria e apontar quais materiais precisam estar disponíveis para a análise.

Não comece a programar nem altere os arquivos antes de apresentar o diagnóstico e receber minha aprovação.
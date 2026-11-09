---
name: estela-landing
description: Diretrizes permanentes para construir e manter a landing page de vendas "Gestão de Carreira" (Estela Albani). Use sempre que for escrever copy, componentes, animações, tema claro/escuro, cursor trail ou preloader deste projeto específico.
metadata:
  author: operion
  version: "1.1.0"
---

# Gestão de Carreira — Landing Page

Diretrizes operacionais do projeto. Produto, oferta, direção de arte aprovada (Eixo de Corte), tokens, tipografia, fotografia e pendências estão em `CLAUDE.md` na raiz — este arquivo foca em **como construir**, não em **o que é o produto**.

O projeto Next.js já existe (ver stack e versões em `CLAUDE.md`). Reformular sobre ele; não recriar o app nem reinstalar dependências. Única dependência nova autorizada: `@playwright/test` (dev).

## Regra de ouro: copy

Toda copy vem de `content/PAGINA DE VENDAS_PERPETUO GESTAO_21-08-26.pdf` e mora em `lib/content.ts` — componentes não têm texto de venda escrito à mão. Antes de escrever uma seção, confira a seção correspondente no PDF. Não parafrasear depoimentos, não alterar preço/condições/bônus, não inventar FAQ, rótulos ou sobretítulos. Microcopy funcional (alt, rótulos acessíveis, erros) pode ser criada.

## Scroll e animação

- **Lenis é o único driver de scroll** e alimenta o ScrollTrigger (`lenis.on('scroll', ScrollTrigger.update)`). Manter a sensação atual (`duration: 1.1`).
- O callback do `gsap.ticker` é guardado e removido no cleanup; `lagSmoothing` é restaurado.
- Importar `lenis/dist/lenis.css`. Âncoras passam pelo Lenis por um handler próprio (a opção `anchors` do Lenis não cancela o salto nativo); o offset do header vem de `scroll-padding-top: var(--header-h)`, que o Lenis já desconta.
- Lenis fica pausado enquanto o preloader está visível.
- `ScrollTrigger.refresh()` depois de `document.fonts.ready` e do carregamento das imagens acima da dobra; de novo quando um `details` do FAQ abre ou fecha.
- **Movimento reduzido em um único ponto**: `gsap.matchMedia()` em `lib/motion.ts`, que registra os plugins uma vez. Componentes não leem `prefers-reduced-motion` por conta própria. A página é desenhada completa no estado final; o movimento é camada adicional.
- SplitText só em títulos curtos (até cerca de 8 palavras), por linha ou palavra, com `revert()` ao terminar.
- Um único pin na página: seção 7, só no desktop. Pin novo exige aprovação do cliente. No celular: sem pin e sem paralaxe contínua.
- Fade e slide-up não são o padrão: o movimento desloca o eixo, abre máscaras e muda escala.

## Cursor trail (Canvas)

Implementação própria, inspirada na referência Davies mas sem copiar código:

- Canvas fixo cobrindo o viewport, `pointer-events: none`, acima do header e abaixo de modais/overlays.
- Linha fina desenhada como spline suave (não segmentos retos), com suavização baseada em tempo (independente de FPS) e dissipação pela idade de cada ponto.
- Cor pela zona sob o ponteiro: ink sobre campo branco, branco sobre ink. Sem `mix-blend-mode`.
- O loop de `requestAnimationFrame` para quando o rastro some e quando a aba fica em background (`visibilitychange`).
- **Não montar** (nem o canvas, nem listeners) em `pointer: coarse` ou com movimento reduzido.
- Nunca bloquear cliques, scroll ou seleção de texto.

## Preloader

- Manter o visual atual. Corrigir só o comportamento.
- Dispara no carregamento inicial e em todo refresh; nada é persistido em storage.
- Sai quando `document.fonts.ready` resolve **e** o traço da estrela termina, com teto máximo de espera. Sem porcentagem falsa.
- Sem JS: uma animação CSS de segurança (com `<noscript>`) remove o overlay sozinha. O conteúdo nunca fica preso.
- `prefers-reduced-motion`: sem traço animado, crossfade curto.
- A saída é coordenada com a entrada do hero.

## Componentes do sistema

- **Eixo e blocos**: um componente de campo controla `--cut` e a orientação (vertical/horizontal). Blocos e palavras que atravessam o eixo usam a mesma coordenada.
- **Palavra que cruza cores**: `background-clip: text` com gradiente de parada dura em `--cut` (animável via `@property`). Nada de texto duplicado visível nem `mix-blend-mode`.
- **Palavra partida**: palavra inteira em `sr-only` e a versão partida com `aria-hidden="true"`. Nunca `role="text"`.
- **Foto na letra**: `background-clip: text` com `getImageProps` do `next/image` e `image-set()`. Fallback em cor sólida (`@supports`, `forced-colors`). Máximo de 3 palavras na página.
- **Fotos**: arquivos em `public/img/photo/conceptual/` (liberadas) e `public/img/photo/estela/` (só commitadas após aprovação da Estela; a pasta está no `.gitignore`). Sempre via manifesto `lib/photos.ts`, com `tone`, `rights` e `approval`; o componente `components/media/Photo.tsx` é o único que aplica `filter: grayscale()` quando `tone` for `"bw"`. Foto sem aprovação vira placeholder explícito (`PhotoPlaceholder`), nunca outra imagem.
- **Logos**: servidos de `public/img/brand/`, sem filtro CSS.
- **Pendências**: `lib/site-config.ts` concentra checkout, WhatsApp, vídeos e dados legais. O build emite aviso se algum ainda for placeholder.

## Acessibilidade e performance

- Contraste AA em todas as combinações, nos dois temas, medido por teste automatizado.
- Skip link, ordem de títulos sequencial, foco visível, alvos de toque com pelo menos 44 px.
- Imagens via `next/image` com dimensões explícitas; preload só do que está acima da dobra.
- Fontes: Bebas (Regular e Bold) por `next/font/local`; Barlow e Inter por `next/font/google`.
- SEO: metadata com Open Graph, canonical e JSON-LD; todas as respostas do FAQ no HTML.
- Ícone gerado em tamanhos otimizados (não servir o PNG de 2063 px).

## Responsividade e testes

Mobile-first. Pontos de maior risco: a tabela da seção 7 (pares empilhados no celular), os 12 módulos da seção 8 e as palavras monumentais.

Testes com Playwright em 390, 768, 1440 e 1920 px, nos dois temas: screenshots por seção, contraste automático, teste de copy (todas as frases do PDF presentes no HTML), sem JS, movimento reduzido, teclado, âncoras e FAQ. Antes de cada entrega: `npm run build`, lint e checagem de tipos; Lighthouse em build de produção (metas: LCP < 2,5 s, CLS < 0,1).

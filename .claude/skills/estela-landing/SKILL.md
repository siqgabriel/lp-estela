---
name: estela-landing
description: Diretrizes permanentes para construir e manter a landing page de vendas "Gestão de Carreira" (Estela Albani). Use sempre que for escrever copy, componentes, animações, tema claro/escuro, cursor trail ou preloader deste projeto específico.
metadata:
  author: operion
  version: "1.0.0"
---

# Gestão de Carreira — Landing Page

Diretrizes operacionais do projeto. Para contexto de produto, oferta e identidade visual, ver `CLAUDE.md` na raiz — este arquivo foca em **como construir**, não em **o que é o produto**.

## Regra de ouro: copy

Toda copy vem de `content/PAGINA DE VENDAS_PERPETUO GESTAO_21-08-26.pdf`. Antes de escrever texto de qualquer seção, confira a seção correspondente no PDF. Não parafrasear depoimentos, não alterar preço/condições/bônus, não inventar FAQ. Se uma seção da implementação pedir texto que não existe no PDF (ex.: microcopy de erro de formulário, alt text de imagem), é aceitável criar — mas texto de vendas/produto sempre vem do PDF.

## Stack (quando aprovado)

Next.js (App Router) + React + TypeScript + Tailwind CSS + GSAP/ScrollTrigger + Lenis (smooth scroll) + tema claro/escuro. Não instalar nada disso enquanto o projeto estiver em fase de planejamento — ver status em `CLAUDE.md`.

- **Animação de scroll**: GSAP ScrollTrigger. Registrar Lenis como driver de scroll do ScrollTrigger (`lenis.on('scroll', ScrollTrigger.update)`), não os dois sistemas de scroll competindo.
- **Tema**: suportar claro e escuro via tokens CSS (ver paleta em `CLAUDE.md`), com alternância persistida (ex. `localStorage`) e sem flash de tema errado no load (aplicar classe antes da hidratação).
- **Respeitar `prefers-reduced-motion`**: toda animação de scroll/hover/cursor trail precisa de um fallback estático quando o usuário pede menos movimento.

## Cursor trail (Canvas)

Implementação própria, inspirada na referência Davies mas não copiada:

- Canvas fixo, cobrindo o viewport, `position: fixed`, `pointer-events: none`, `z-index` acima do conteúdo mas abaixo de modais/overlays.
- Desenhar uma linha orgânica fina que segue o ponteiro com suavização (lerp/spring entre posição real e posição desenhada) e dissipação progressiva (fade dos pontos mais antigos do rastro, não um corte abrupto).
- **Desativar completamente em touch/coarse pointer**: checar `matchMedia('(pointer: coarse)')` e não montar o canvas nem os listeners nesse caso — não apenas escondê-lo via CSS.
- Nunca bloquear cliques, scroll ou seleção de texto da página por baixo do canvas.
- Pausar o loop de desenho (`requestAnimationFrame`) quando a aba está em background (`visibilitychange`) para não gastar bateria/CPU à toa.

## Preloader

- Dispara no carregamento inicial e em todo refresh (não só na primeira visita da sessão).
- Duração atrelada ao carregamento real de assets críticos (fontes, hero), não um tempo fixo arbitrário — mas com um teto máximo para não travar a experiência se algo falhar.
- Transição de saída coordenada com a entrada do hero (handoff para a animação GSAP da seção 1), não dois momentos desconectados.
- Respeitar `prefers-reduced-motion` com uma versão sem movimento/crossfade simples.

## Acessibilidade e performance

- Contraste AA mínimo em todas as combinações de cor (incluindo texto sobre as superfícies violeta/ink).
- Toda animação de entrada tem equivalente estático para `prefers-reduced-motion: reduce`.
- Imagens (brand-assets, carrosséis, fotos de prova social) otimizadas via `next/image`, com dimensões explícitas para evitar layout shift.
- CTAs e elementos de formulário com foco visível via teclado.
- Fontes carregadas sem bloquear o First Contentful Paint (ver decisão pendente de self-host vs. `next/font/google` em `CLAUDE.md`).

## Responsividade

Mobile-first. A tabela comparativa da Seção 7 ("Reagindo às oportunidades" vs. "Decidindo a própria carreira") e a grade de 12 módulos da Seção 8 são os dois pontos de maior risco de quebra em telas pequenas — testar esses dois primeiro.

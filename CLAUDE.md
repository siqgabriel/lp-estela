# Gestão de Carreira — Estela Albani

Landing page de vendas (perpétua) do curso **Gestão de Carreira**, de Estela Albani (direção de elenco, produção cultural e mentoria de carreira artística há 25 anos). Público: atores e atrizes maiores de 18 anos, com experiência em teatro e/ou audiovisual.

## Estado do projeto

**Fase atual: planejamento.** Não há projeto Next.js inicializado ainda. Não rode `create-next-app`, não instale dependências e não escreva componentes de produção sem aprovação explícita do usuário para sair da fase de planejamento.

Quando a implementação for aprovada, consulte também `.claude/skills/estela-landing/SKILL.md` para as diretrizes operacionais (stack, cursor trail, preloader, acessibilidade).

## Fonte oficial de conteúdo

`content/PAGINA DE VENDAS_PERPETUO GESTAO_21-08-26.pdf` é a **única fonte de copy**. Regras:

- Nunca invente, resuma de forma lossy, ou altere preços, bônus, condições, depoimentos ou a estratégia de persuasão.
- Preserve a estrutura de 19 seções do documento (Hero → Dor → Virada → Método/12 módulos → Prova social → Público → Oferta → Garantia → CTA final → FAQ).
- Oferta vigente: **R$ 442 à vista / R$ 497 em 12x** — 12 módulos, +150 aulas, 1 ano de acesso, suporte via chat, 2 bônus (e-book "Passo a Passo" + contatos de Diretores de Elenco), garantia incondicional de 7 dias.
- Depoimentos (Kécia Prado, Lira) e vídeos de prova social (Julia Marques, Samuel Giacomelli, Ilca Angela, Carolina Vilela) são nomes reais — não parafrasear os textos das atrizes, usar como citação literal.
- Se qualquer seção do site precisar de um texto que não está no PDF, sinalizar ao usuário em vez de criar copy nova.

## Identidade visual

**Cores**
| Token | Hex | Papel |
|---|---|---|
| `ink` (primária) | `#1f1539` | Fundo escuro dominante, texto em telas claras |
| `white` (primária) | `#ffffff` | Fundo claro dominante, texto em telas escuras |
| `violet` (secundária) | `#331e69` | Superfícies elevadas, blocos de contraste, estados hover |

Não introduzir uma quarta cor de destaque sem aprovação — ver pendência no documento de proposta. Construir hierarquia via tintas/sombras de `violet`/`ink` e neutros quentes antes de considerar uma cor nova.

**Tipografia**
- **Bebas Neue** — títulos/headlines. Fonte display de peso único (400); hierarquia vem de escala, tracking e cor, não de peso.
- **Barlow** — subtítulos e corpo de texto (100–900 disponíveis).
- **Inter** — elementos terciários: nav, labels, legal, formulário.

Nenhum arquivo de fonte local existe no repositório — todas as três são Google Fonts. Decisão pendente de aprovação: carregar via `next/font/google` (simples, requer rede no build) vs. self-host dos `.woff2` (melhor para LGPD/performance/offline). Ver proposta.

**Logos** (`brand-assets/logo/`)
- `logo-gc.png` / `logo-gc-sem-fundo.png` — lockup "Gestão de Carreira" (estrela + wordmark), tinta `#1f1539`. Logo principal da oferta, uso em fundos claros.
- `logo-estela.png` — wordmark pessoal de Estela Albani; arquivo está em tom claro/transparente, **ilegível sobre fundo branco** — precisa ser testado sobre `#1f1539`/`#331e69` antes de uso (pendência).
- `favicon-dark.png` / `favicon-light.png` — ícone da estrela isolada, variantes para favicon claro/escuro.

**Materiais de marca adicionais** (`brand-assets/identity/`): carrosséis publicados (referência de linguagem editorial já em uso — tipografia condensada pesada, blocos de cor sólidos, fotografia em preto e branco) e PDFs de apoio (`20_qualidades`, `6-necessidades`, `manual_de_testes`, `passo_a_passo` — este último é o Bônus 1 da oferta).

## Referências de design

Davies (`wpriverthemes.com/HTML/davies`) é referência de **composição e interação**, não de layout a copiar. Pontos observados: hero escuro com tipografia display enorme sobreposta a fotografia desaturada, nav minimalista, um único acento de cor usado com parcimônia, e uma linha orgânica fina (trilha de cursor) sobre um canvas fixo com `pointer-events: none`.

A direção de arte própria para Gestão de Carreira está detalhada no documento de proposta (ver histórico de conversa / artifact publicado). Não copiar o layout do Davies.

## Estrutura de pastas

```
brand-assets/   # logos, favicons, carrosséis, PDFs de apoio
content/        # PDF oficial de copy (fonte única da verdade)
references/     # capturas de tela de referência visual (Davies)
.claude/skills/ # skills do projeto (não reinstalar sem checar antes)
```

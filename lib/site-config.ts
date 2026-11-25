/**
 * Configuração do site e pendências externas.
 *
 * Tudo que depende de material do cliente fica aqui, com `null` como
 * placeholder explícito. `next.config.ts` lista os itens pendentes no build.
 */

export type TestimonialVideoFiles = { src: string; poster: string };

export const siteConfig = {
  url: "https://lp-estela.vercel.app",
  name: "Gestão de Carreira | Estela Albani",
  shortName: "Gestão de Carreira",
  author: "Estela Albani",
  /** Headline e subheadline da seção 1 do PDF. */
  description:
    "Transforme seu preparo artístico em visibilidade no mercado. O caminho para o seu trabalho chegar até quem importa, sem depender de sorte.",
  locale: "pt_BR",

  /** Link de compra (seção 15). */
  checkoutUrl: null as string | null,

  /** WhatsApp (seção 18 e botão flutuante). Formato: só dígitos, com DDI. */
  whatsappNumber: null as string | null,

  videos: {
    /** Vídeo de vendas da seção 1. */
    sales: "https://www.youtube-nocookie.com/embed/c3-SoHH4loM?rel=0&modestbranding=1&playsinline=1" as string | null,
    /** Vídeos de depoimento da seção 11 (nomes do PDF, mais Danilo Anastácio; ver CLAUDE.md). */
    testimonials: {
      "Julia Marques": { src: "/video/julia-marques.mp4", poster: "/video/julia-marques.jpg" } as TestimonialVideoFiles | null,
      "Samuel Giacomelli": { src: "/video/samuel-giacomelli.mp4", poster: "/video/samuel-giacomelli.jpg" } as TestimonialVideoFiles | null,
      "Danilo Anastácio": { src: "/video/danilo-anastacio.mp4", poster: "/video/danilo-anastacio.jpg" } as TestimonialVideoFiles | null,
      "Ilca Angela": null as TestimonialVideoFiles | null,
      "Carolina Vilela": null as TestimonialVideoFiles | null,
    },
  },

  /** Dados legais do rodapé. */
  legal: {
    company: null as string | null,
    cnpj: null as string | null,
    termsUrl: null as string | null,
    privacyUrl: null as string | null,
  },
};

export function whatsappLink(): string | null {
  return siteConfig.whatsappNumber ? `https://wa.me/${siteConfig.whatsappNumber}` : null;
}

/** Itens ainda sem valor real, em português, para o aviso do build. */
export function pendingItems(): string[] {
  const items: string[] = [];
  if (!siteConfig.checkoutUrl) items.push("link de checkout (seção 15)");
  if (!siteConfig.whatsappNumber) items.push("número do WhatsApp (seção 18)");
  if (!siteConfig.videos.sales) items.push("vídeo de vendas (seção 1)");
  for (const [name, video] of Object.entries(siteConfig.videos.testimonials)) {
    if (!video) items.push(`vídeo de depoimento: ${name} (seção 11)`);
  }
  for (const [key, value] of Object.entries(siteConfig.legal)) {
    if (!value) items.push(`dado legal do rodapé: ${key}`);
  }
  return items;
}

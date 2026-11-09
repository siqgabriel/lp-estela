/**
 * Manifesto de fotos. Única fonte de verdade sobre arquivo, tom, direitos e aprovação.
 *
 * - tone: o P&B é aplicado por CSS em components/media/Photo.tsx. Nenhum arquivo
 *   é convertido. Padrão provisório: "bw" para todas, inclusive as da Estela.
 *   A decisão final de cor é do cliente, depois do layout: trocar aqui basta.
 * - rights: "liberada" pode ir ao ar; "aguardando-aprovacao" não pode ser
 *   commitada nem renderizada (o componente mostra placeholder).
 * - Fotos da Estela: public/img/photo/estela/ está no .gitignore até a aprovação dela.
 */

export type PhotoTone = "bw" | "color";
export type PhotoRights = "liberada" | "aguardando-aprovacao";

export type Photo = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  tone: PhotoTone;
  rights: PhotoRights;
  /** Quem liberou e quando; null enquanto pendente. */
  approval: { by: string; date: string } | null;
  credit?: string;
  /** Uso proposto (avaliação de 2026-11-09, refeita com a ft8 nova e a Bebas Bold real). */
  proposedUse?: string;
  /** Aparece nos carrosséis da Estela (evitar em PORTAS e SEU). */
  inCarousels?: boolean;
};

const conceptual = (
  n: number,
  width: number,
  height: number,
  alt: string,
  proposedUse?: string,
  inCarousels = false,
): Photo => ({
  id: `conceptual-ft${n}`,
  src: `/img/photo/conceptual/ft${n}.png`,
  width,
  height,
  alt,
  tone: "bw",
  rights: "liberada",
  approval: { by: "cliente (Operion)", date: "2026-11-09" },
  proposedUse,
  inCarousels,
});

export const photos = {
  ft1: conceptual(1, 660, 1197, "Atriz em fundo escuro, olhos fechados, com as mãos na cabeça.", "Reserva; só em tamanho pequeno", true),
  ft2: conceptual(2, 1555, 888, "Atriz de costas no palco, olhando para a plateia vazia sob os refletores.", "SEU (seção 17), foto em letra, deslocamento ~55%"),
  ft3: conceptual(3, 727, 1330, "Atriz se maquiando nos bastidores, olhando para cima.", "Reserva para a seção 10 até chegarem as fotos de bastidores", true),
  ft4: conceptual(4, 2217, 1475, "Câmera de ação montada em tripé, com a imagem do set no visor.", "Seção 10"),
  ft5: conceptual(5, 1112, 638, "Pessoa saltando entre dois muros contra o céu claro.", "Seção 5"),
  ft6: conceptual(6, 1831, 1208, "Atriz com maquiagem cênica e galhos enrolados no corpo, gritando com as mãos na cabeça.", "Seção 3", true),
  ft7: conceptual(7, 943, 1067, "Monitor de câmera em um set escuro, mostrando um ator em cena.", "Alternativa para a seção 10", true),
  ft8: conceptual(8, 2006, 2609, "Rosto de um homem visto através de um vidro com gotas de chuva.", "CLAREZA (seção 4), foto em letra, deslocamento ~50%", true),
  ft9: conceptual(9, 1255, 928, "Mulher de costas erguendo o braço, com uma pessoa desfocada ao fundo.", "Seção 6", true),
  ft10: conceptual(10, 1752, 1674, "Pessoa sentada sozinha num banco no alto de uma colina, contra o céu.", "Alternativa para a seção 5"),
  ft11: conceptual(11, 1066, 1747, "Mulher de perfil, pensativa, com a mão no queixo diante de uma janela clara.", "PORTAS (seção 9), provisória: legível, mas mostra só tecido; falta foto adequada"),
} satisfies Record<string, Photo>;

/**
 * Fotos da Estela. Vazio até a aprovação dela.
 * Quando uma foto for aprovada: colocar o arquivo em public/img/photo/estela/,
 * liberar o arquivo no .gitignore e registrar aqui com rights "liberada" e approval preenchido.
 */
export const estelaPhotos = {
  /** Recorte extraído do PDF "6 necessidades". Uso local para compor o layout; não commitar. */
  sentada: {
    id: "estela-sentada",
    src: "/img/photo/estela/estela-sentada.png",
    width: 1100,
    height: 1888,
    alt: "Estela Albani, sentada, de vestido preto, olhando para a câmera",
    tone: "bw",
    rights: "aguardando-aprovacao",
    approval: null,
  },
} satisfies Record<string, Photo>;

export type PhotoId = keyof typeof photos;

export function isPublishable(photo: Photo): boolean {
  return photo.rights === "liberada" && photo.approval !== null;
}

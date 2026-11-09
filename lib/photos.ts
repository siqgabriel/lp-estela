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
  /** Uso proposto na avaliação de 2026-11-09 (ver relatório da etapa 3). */
  proposedUse?: string;
};

const conceptual = (
  n: number,
  width: number,
  height: number,
  alt: string,
  proposedUse?: string,
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
});

export const photos = {
  ft1: conceptual(1, 660, 1197, "Atriz em fundo escuro, olhos fechados, com as mãos na cabeça.", "Reserva; só em tamanho pequeno"),
  ft2: conceptual(2, 1555, 888, "Atriz de costas no palco, olhando para a plateia vazia sob os refletores.", "PORTAS (seção 9), foto em letra"),
  ft3: conceptual(3, 727, 1330, "Atriz se maquiando nos bastidores, olhando para cima.", "Reserva para a seção 10 até chegarem as fotos de bastidores"),
  ft4: conceptual(4, 2217, 1475, "Câmera de ação montada em tripé, com a imagem do set no visor.", "Seção 10"),
  ft5: conceptual(5, 1112, 638, "Pessoa saltando entre dois muros contra o céu claro.", "Seção 5"),
  ft6: conceptual(6, 1831, 1208, "Atriz com maquiagem cênica e galhos enrolados no corpo, gritando com as mãos na cabeça.", "Seção 3"),
  ft7: conceptual(7, 943, 1067, "Monitor de câmera em um set escuro, mostrando um ator em cena.", "SEU (seção 17), foto em letra"),
  ft8: conceptual(8, 722, 939, "Rosto de um homem visto através de um vidro com gotas de chuva.", "CLAREZA (seção 4), foto em letra; resolução baixa"),
  ft9: conceptual(9, 1255, 928, "Mulher de costas erguendo o braço, com uma pessoa desfocada ao fundo.", "Seção 6"),
  ft10: conceptual(10, 1752, 1674, "Pessoa sentada sozinha num banco no alto de uma colina, contra o céu.", "Alternativa para a seção 5"),
  ft11: conceptual(11, 1066, 1747, "Mulher de perfil, pensativa, com a mão no queixo diante de uma janela clara.", "Seção 8, em tamanho pequeno"),
} satisfies Record<string, Photo>;

/**
 * Fotos da Estela. Vazio até a aprovação dela.
 * Quando uma foto for aprovada: colocar o arquivo em public/img/photo/estela/,
 * liberar o arquivo no .gitignore e registrar aqui com rights "liberada" e approval preenchido.
 */
export const estelaPhotos: Record<string, Photo> = {};

export type PhotoId = keyof typeof photos;

export function isPublishable(photo: Photo): boolean {
  return photo.rights === "liberada" && photo.approval !== null;
}

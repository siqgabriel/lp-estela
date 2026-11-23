import { getImageProps } from "next/image";
import { photoToneClass } from "@/components/media/Photo";
import { isPublishable, type Photo } from "@/lib/photos";
import { PhotoWordClient } from "./PhotoWordClient";

type PhotoWordProps = {
  word: string;
  photo: Photo;
  /** background-position da foto dentro das letras (ex.: "50% 50%"). */
  position?: string;
  /**
   * Camada neutra opcional sobre a foto, só nesta aplicação (ex.: escurecer altas luzes
   * para manter 3:1 contra o branco). Gradiente em preto/transparente: nada de cor.
   */
  overlay?: string;
  className?: string;
};

/**
 * Foto dentro da letra. O texto continua real (lido e selecionável).
 * - A foto passa pelo otimizador do Next (getImageProps) como url() simples — image-set()
 *   falhava em navegadores móveis e deixava a palavra transparente.
 * - O P&B do manifesto vai num elemento envolvente: filter no próprio elemento com
 *   background-clip:text some no Safari.
 * - A letra só fica transparente depois que a imagem carrega (PhotoWordClient).
 *   Antes disso, sem JS, com erro ou sem suporte: ink sólido.
 */
export function PhotoWord({ word, photo, position = "50% 50%", overlay, className = "" }: PhotoWordProps) {
  if (!isPublishable(photo)) {
    return (
      <span className={`block text-paper-ink ${className}`} data-pending="photo-word">
        {word}
      </span>
    );
  }

  const { props } = getImageProps({
    src: photo.src,
    alt: "",
    width: 1920,
    height: Math.round((1920 * photo.height) / photo.width),
    quality: 80,
  });

  return (
    <span className={`block ${photoToneClass(photo)}`}>
      <PhotoWordClient
        word={word}
        url={props.src}
        position={position}
        overlay={overlay}
        photoId={photo.id}
        className={className}
      />
    </span>
  );
}

import { getImageProps } from "next/image";
import { photoToneClass } from "@/components/media/Photo";
import { isPublishable, type Photo } from "@/lib/photos";

type PhotoWordProps = {
  word: string;
  photo: Photo;
  /** background-position da foto dentro das letras (ex.: "50% 50%"). */
  position?: string;
  className?: string;
};

/**
 * Foto dentro da letra. O texto continua real (lido e selecionável); a foto
 * passa pelo otimizador do Next via getImageProps + image-set(). O tratamento
 * P&B vem do manifesto (photoToneClass). Sem suporte a background-clip ou com
 * cores forçadas, a palavra aparece em cor sólida (globals.css).
 * Foto sem aprovação: a palavra aparece sólida, sem foto, e marcada como pendente.
 */
export function PhotoWord({ word, photo, position = "50% 50%", className = "" }: PhotoWordProps) {
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
    width: 1440,
    height: Math.round((1440 * photo.height) / photo.width),
    quality: 80,
  });
  const set = (props.srcSet ?? `${props.src} 1x`)
    .split(", ")
    .map((entry) => {
      const [url, density] = entry.split(" ");
      return `url("${url}") ${density}`;
    })
    .join(", ");

  return (
    <span
      className={`photo-word block ${photoToneClass(photo)} ${className}`}
      style={{ backgroundImage: `image-set(${set})`, backgroundPosition: position }}
      data-photo={photo.id}
    >
      {word}
    </span>
  );
}

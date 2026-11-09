import Image, { type ImageProps } from "next/image";
import { isPublishable, type Photo as PhotoEntry } from "@/lib/photos";

type PhotoProps = Omit<ImageProps, "src" | "alt" | "width" | "height"> & {
  photo: PhotoEntry;
  /** Usar dimensões do manifesto (padrão) ou `fill`. */
  fill?: boolean;
};

/**
 * Único ponto que aplica o tratamento de cor das fotos: `tone: "bw"` vira
 * `filter: grayscale(1)`. Foto sem aprovação nunca é renderizada.
 */
export function Photo({ photo, fill, className = "", ...rest }: PhotoProps) {
  if (!isPublishable(photo)) {
    return <PhotoPlaceholder label={`Foto aguardando aprovação: ${photo.alt}`} className={className} />;
  }
  const tone = photo.tone === "bw" ? "grayscale" : "";
  return fill ? (
    <Image src={photo.src} alt={photo.alt} fill className={`${tone} ${className}`} {...rest} />
  ) : (
    <Image
      src={photo.src}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      className={`${tone} ${className}`}
      {...rest}
    />
  );
}

/** Placeholder explícito para foto que ainda não existe ou não foi aprovada. */
export function PhotoPlaceholder({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex items-center justify-center bg-[repeating-linear-gradient(135deg,var(--placeholder-a)_0_2px,var(--placeholder-b)_2px_8px)] p-4 text-center font-ui text-xs text-strong ${className}`}
    >
      <span className="bg-field px-2 py-1">{label}</span>
    </div>
  );
}

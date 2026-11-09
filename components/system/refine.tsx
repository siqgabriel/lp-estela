import { Photo, PhotoPlaceholder } from "@/components/media/Photo";
import type { Photo as PhotoEntry } from "@/lib/photos";
import { MaskReveal } from "./MaskReveal";

/**
 * Rótulo de moldura (microtipografia nos cantos das seções). Sempre com informação
 * real do PDF; nunca sobretítulo genérico. Decorativo para leitores de tela quando
 * repete conteúdo da seção (aria-hidden por padrão).
 */
export function FrameLabel({
  children,
  className = "",
  hidden = true,
}: {
  children: React.ReactNode;
  className?: string;
  hidden?: boolean;
}) {
  return (
    <p aria-hidden={hidden || undefined} className={`frame-label pointer-events-none absolute ${className}`}>
      {children}
    </p>
  );
}

/** Faixa infinita de texto com a estrela do logo como separador. Decorativa (aria-hidden). */
export function Marquee({
  items,
  className = "",
  duration = 40,
  reverse = false,
}: {
  items: readonly string[];
  className?: string;
  duration?: number;
  reverse?: boolean;
}) {
  const track = (key: string) => (
    <div key={key} className="marquee-track" style={{ animationDirection: reverse ? "reverse" : "normal" }}>
      {items.map((item) => (
        <span key={item} className="flex items-center gap-[0.6em]">
          <span>{item}</span>
          <span className="marquee-star" />
        </span>
      ))}
    </div>
  );
  return (
    <div
      aria-hidden="true"
      className={`marquee font-display font-bold uppercase ${className}`}
      style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
    >
      {track("a")}
      {track("b")}
    </div>
  );
}

/** Foto com revelação por máscara e paralaxe leve; o cursor cresce sobre ela. */
export function RevealPhoto({
  photo,
  sizes,
  className = "",
  imgClassName = "object-cover",
  priority = false,
}: {
  photo: PhotoEntry;
  sizes: string;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  return (
    <MaskReveal className={`relative overflow-hidden ${className}`}>
      <div data-cursor="photo" className="reveal-inner absolute inset-[-6%_0]">
        <Photo photo={photo} fill sizes={sizes} className={imgClassName} priority={priority} />
      </div>
    </MaskReveal>
  );
}

/**
 * Galeria assimétrica com legendas pequenas (referência: home do Uniiq), cantos secos.
 * As legendas são descritivas (microcopy funcional), numeradas pela ordem.
 */
export function Gallery({
  photos,
  className = "",
  tone = "light",
}: {
  photos: readonly PhotoEntry[];
  className?: string;
  tone?: "light" | "dark";
}) {
  const layout = [
    "col-span-12 row-span-2 aspect-[4/5] lg:col-span-7 lg:row-start-1",
    "col-span-6 aspect-[3/4] lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:mt-[6vw]",
    "col-span-6 aspect-square lg:col-span-4 lg:col-start-6 lg:row-start-3 lg:-mt-[4vw]",
  ];
  return (
    <div className={`grid grid-cols-12 gap-x-3 gap-y-6 lg:gap-x-[1.5vw] ${className}`}>
      {photos.slice(0, 3).map((photo, i) => (
        <figure key={photo.id} className={layout[i]}>
          {photo ? (
            <RevealPhoto photo={photo} sizes="(min-width: 1024px) 40vw, 90vw" className="h-full w-full" />
          ) : (
            <PhotoPlaceholder label="Foto pendente" className="h-full w-full" />
          )}
          <figcaption className={`frame-label mt-3 ${tone === "dark" ? "text-paper" : "text-strong"}`}>
            <span className={`mr-3 ${tone === "dark" ? "text-numeral-dark" : "text-numeral"}`}>{String(i + 1).padStart(2, "0")}</span>
            {photo.alt.replace(/\.$/, "")}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

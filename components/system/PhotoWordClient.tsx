"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Parte client da foto dentro da letra: a letra só fica transparente (deixando a foto
 * aparecer) depois que a imagem carregou. Se a imagem falhar, sem JS ou sem suporte a
 * background-clip, a palavra continua em ink sólido (ver .photo-word em globals.css).
 */
export function PhotoWordClient({
  word,
  url,
  position,
  overlay,
  photoId,
  className = "",
}: {
  word: string;
  url: string;
  position: string;
  overlay?: string;
  photoId: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let alive = true;
    const img = new Image();
    img.onload = () => alive && setLoaded(true);
    img.onerror = () => alive && setLoaded(false);
    img.src = url;
    if (img.complete && img.naturalWidth > 0) setLoaded(true);
    return () => {
      alive = false;
    };
  }, [url]);

  const layers = overlay ? `${overlay}, url("${url}")` : `url("${url}")`;
  return (
    <span
      ref={ref}
      className={`photo-word block ${loaded ? "is-loaded" : ""} ${className}`}
      style={{ backgroundImage: layers, backgroundPosition: position }}
      data-photo={photoId}
    >
      {word}
    </span>
  );
}

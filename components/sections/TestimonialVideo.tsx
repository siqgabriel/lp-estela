"use client";

import type { SyntheticEvent } from "react";

/** Vídeo de depoimento: ao tocar um, os outros pausam. */
export function TestimonialVideo({ name, src, poster }: { name: string; src: string; poster: string }) {
  const pauseOthers = (event: SyntheticEvent<HTMLVideoElement>) => {
    document.querySelectorAll<HTMLVideoElement>("video[data-testimonial]").forEach((video) => {
      if (video !== event.currentTarget) video.pause();
    });
  };
  return (
    <video
      controls
      playsInline
      preload="none"
      poster={poster}
      src={src}
      aria-label={`Depoimento de ${name}`}
      data-testimonial
      onPlay={pauseOthers}
      className="h-full w-full object-cover"
    />
  );
}

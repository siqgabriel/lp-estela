import { s11, testimonials, testimonialVideoNames } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";
import { GUTTER, Title } from "@/components/system/type";
import { FrameLabel } from "@/components/system/refine";

/**
 * Seção 11 — página cheia ink, só tipográfica (sem foto de banco perto das citações).
 * Citações literais em escala de leitura, desencontradas; vídeos em retângulos verticais secos.
 */
export function SocialProof() {
  return (
    <section data-section="11" className="relative bg-ink-band-deep text-paper">
      <FrameLabel className="top-7 right-5 text-right text-lilac sm:right-8 lg:right-[4vw]">
        JULIA MARQUES · SAMUEL GIACOMELLI · ILCA ANGELA · CAROLINA VILELA
      </FrameLabel>
      <div className={`${GUTTER} pad-section`}>
        <Title lead={s11.lead} impact={s11.impact} leadClass="text-lilac" />

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-[3vw]">
          {testimonials.map((t, i) => (
            <figure key={t.name} className={i === 0 ? "lg:col-span-6" : "lg:col-span-6 lg:col-start-7 lg:mt-[10vw]"}>
              <span aria-hidden="true" className="block font-display text-[96px] leading-[0.6] text-lilac">
                “
              </span>
              <blockquote className="mt-2 font-sans text-xl leading-relaxed font-medium lg:text-[22px]">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 font-ui text-sm font-semibold tracking-wider uppercase">
                {t.name}, {t.role}
              </figcaption>
            </figure>
          ))}
        </div>

        <ul className="mt-16 grid grid-cols-2 gap-3 lg:mt-[6vw] lg:ml-auto lg:w-[58%] lg:grid-cols-4 lg:gap-[1vw]">
          {testimonialVideoNames.map((name) => {
            const src = siteConfig.videos.testimonials[name];
            return (
              <li key={name} className="flex aspect-[9/16] flex-col justify-end bg-ink-band p-4 ring-1 ring-paper/25">
                {src ? (
                  <iframe src={src} title={`Depoimento de ${name}`} className="h-full w-full" allow="fullscreen" />
                ) : (
                  <span className="font-ui text-xs text-lilac" data-pending="video-depoimento">
                    [Pendente: vídeo]
                  </span>
                )}
                <span className="mt-2 font-display text-[clamp(22px,1.7vw,28px)] leading-none font-bold uppercase">{name}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

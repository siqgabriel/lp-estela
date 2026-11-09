import { hero } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";
import { SplitWord } from "@/components/system/SplitWord";
import { HeroMotion } from "./HeroMotion";

/**
 * Seção 1 — Hero. Campo branco com eixo de corte.
 * - Celular: eixo horizontal atravessando a segunda linha de VISIBI/LIDADE; tudo abaixo fica no bloco.
 * - Desktop (lg): eixo vertical em 64%; VISIBILIDADE cruza o eixo; vídeo e CTA dentro do bloco.
 * Sem JS ou com movimento reduzido, o estado final é este. Com movimento, o bloco
 * nasce cobrindo o campo e recua até o eixo quando o preloader sai (HeroMotion).
 */
export function Hero() {
  return (
    <section
      id="hero"
      data-section="1"
      className="hero relative isolate overflow-hidden bg-field pt-18"
      style={{ "--cut": "64%", "--cut-y": "62%" } as React.CSSProperties}
    >
      {/* Bloco do eixo vertical (desktop). */}
      <div aria-hidden="true" className="hero-block absolute inset-y-0 right-0 -z-10 hidden bg-block lg:block" />

      <h1 className="font-display uppercase">
        <span className="block px-5 pt-8 text-right text-[7.4vw] leading-[0.95] font-normal text-accent sm:px-8 lg:w-(--cut) lg:pt-[6vw] lg:pr-[2vw] lg:text-[2.9vw]">
          {hero.lead}
        </span>

        <span className="hero-word relative block lg:mt-[0.8vw]">
          <SplitWord
            text={hero.word}
            mobileLines={[hero.word]}
            mobileClassName="split-y pt-[1vw] text-center text-[21.5vw] leading-[0.9] font-bold [--split-a:var(--type-strong)] [--split-b:var(--type-on-block)]"
            desktopClassName="split-x pr-[10vw] text-right text-[14vw] leading-[0.88] font-bold [--split-a:var(--type-strong)] [--split-b:var(--type-on-block)]"
          />
        </span>

        <span className="block bg-block px-5 pt-4 text-right text-[12vw] leading-[0.9] font-bold text-on-block sm:px-8 lg:w-(--cut) lg:bg-transparent lg:pt-[1.2vw] lg:pr-[2vw] lg:text-[6.6vw] lg:text-strong">
          {hero.impact}
        </span>
      </h1>

      {/* No desktop esta grade sobe para alinhar o vídeo ao topo de "NO MERCADO." */}
      <div className="grid bg-block text-on-block lg:-mt-[6.4vw] lg:grid-cols-[var(--cut)_1fr] lg:bg-transparent">
        <div className="px-5 pt-4 pb-5 text-right sm:px-8 lg:pt-[7.4vw] lg:pr-[2vw] lg:pb-[5vw] lg:text-strong">
          <p className="ml-auto max-w-[34ch] font-sans text-lg leading-snug font-medium lg:text-[19px]">
            {hero.subheadline}
          </p>
          <p className="mt-2 ml-auto max-w-[38ch] font-sans text-[17px] leading-snug font-bold lg:text-[18px]">
            {hero.videoIntro}
          </p>
        </div>

        <div className="grid content-start gap-3 px-5 pb-12 sm:px-8 lg:max-w-[34vw] lg:gap-[1.1vw] lg:px-[3vw] lg:pt-[0.6vw] lg:pb-[5vw]">
          <SalesVideo />
          <a
            href="#oferta"
            data-cta-inline
            className="block bg-field px-6 py-4 text-center font-ui text-sm font-semibold tracking-wider text-strong uppercase transition-opacity hover:opacity-90"
          >
            {hero.cta}
          </a>
        </div>
      </div>

      <HeroMotion />
    </section>
  );
}

/** Vídeo de vendas: placeholder explícito enquanto o link não chega (lib/site-config.ts). */
function SalesVideo() {
  const src = siteConfig.videos.sales;
  if (src) {
    return (
      <div className="aspect-video w-full bg-black">
        <iframe src={src} title="Vídeo de vendas" className="h-full w-full" allow="fullscreen; picture-in-picture" />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label="Vídeo de vendas pendente"
      data-pending="video-vendas"
      className="flex aspect-video w-full items-center justify-center border border-dashed border-on-block-soft p-4 text-center font-ui text-xs text-on-block-soft"
    >
      [Pendente: vídeo de vendas — lib/site-config.ts]
    </div>
  );
}

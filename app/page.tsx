import { Hero } from "@/components/sections/Hero";
import { PainIntro } from "@/components/sections/PainIntro";
import { CostOfFitting } from "@/components/sections/CostOfFitting";
import { MarketClarity } from "@/components/sections/MarketClarity";
import { LivingUncertainty } from "@/components/sections/LivingUncertainty";
import { CommandOrReact } from "@/components/sections/CommandOrReact";
import { ComparisonTable } from "@/components/sections/ComparisonTable";
import { Method } from "@/components/sections/Method";
import { ManyDoors } from "@/components/sections/ManyDoors";
import { CulturalProjects } from "@/components/sections/CulturalProjects";
import { SocialProof } from "@/components/sections/SocialProof";
import { Audience } from "@/components/sections/Audience";
import { Deliverables } from "@/components/sections/Deliverables";
import { AboutEstela } from "@/components/sections/AboutEstela";
import { Offer } from "@/components/sections/Offer";
import { Guarantee } from "@/components/sections/Guarantee";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Questions } from "@/components/sections/Questions";
import { FAQ } from "@/components/sections/FAQ";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { Marquee } from "@/components/system/refine";
import { marqueeModules, marqueeOffer } from "@/lib/content";
import { siteConfig } from "@/lib/site-config";

/** Dados estruturados: só fatos do PDF (nome, descrição, autora, preço à vista, curso online). */
const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "Gestão de Carreira",
  description: siteConfig.description,
  inLanguage: "pt-BR",
  url: siteConfig.url,
  provider: { "@type": "Person", name: siteConfig.author },
  offers: {
    "@type": "Offer",
    category: "Paid",
    price: "442",
    priceCurrency: "BRL",
    url: siteConfig.url,
  },
  hasCourseInstance: { "@type": "CourseInstance", courseMode: "online" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <PainIntro />
      <CostOfFitting />
      <MarketClarity />
      <LivingUncertainty />
      <CommandOrReact />
      <ComparisonTable />
      <Marquee items={marqueeModules} className="bg-ink-band-deep py-5 text-[clamp(28px,3.2vw,52px)] text-paper" duration={55} />
      <Method />
      <ManyDoors />
      <CulturalProjects />
      <SocialProof />
      <Audience />
      <Deliverables />
      <AboutEstela />
      <Marquee items={marqueeOffer} reverse className="border-y border-rule bg-field py-5 text-[clamp(28px,3.2vw,52px)] text-strong" duration={45} />
      <Offer />
      <Guarantee />
      <FinalCTA />
      <Questions />
      <FAQ />
      <SiteFooter />
    </>
  );
}

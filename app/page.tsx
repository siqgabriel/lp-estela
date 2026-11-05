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
import { FAQ } from "@/components/sections/FAQ";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <PainIntro />
      <CostOfFitting />
      <MarketClarity />
      <LivingUncertainty />
      <CommandOrReact />
      <ComparisonTable />
      <Method />
      <ManyDoors />
      <CulturalProjects />
      <SocialProof />
      <Audience />
      <Deliverables />
      <AboutEstela />
      <Offer />
      <Guarantee />
      <FinalCTA />
      <FAQ />
      <SiteFooter />
    </>
  );
}

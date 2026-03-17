import { Hero } from "@/components/Hero";
import { TheProblem } from "@/components/TheProblem";
import { ExplosiveDemand } from "@/components/ExplosiveDemand";
import { MTP } from "@/components/MTP";
import { NewApproach } from "@/components/NewApproach";
import { LogoCloudSection } from "@/components/LogoCloudSection";
import { GenAITalentGap } from "@/components/GenAITalentGap";
import { SuccessStories } from "@/components/SuccessStories";
import { RebelCurriculum } from "@/components/RebelCurriculum";
import { GlobalMovement } from "@/components/GlobalMovement";
import { BeyondData } from "@/components/BeyondData";
import { FAQ } from "@/components/FAQ";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="w-full flex-1 flex flex-col text-white overflow-x-hidden font-sans bg-transparent">

      <div className="relative w-full">
        <div className="absolute inset-0 hero-section-bg pointer-events-none" />

        <div
          className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-8 bg-transparent"
          style={{ '--page-px': '24px' } as React.CSSProperties}
        >
          {/* Hero — main ya tiene pt-[80px], solo respiro visual mínimo */}
          <section
            className="pt-2 pb-8 md:pt-10 md:pb-10 flex flex-col justify-center bg-transparent"
            aria-label="Hero"
          >
            <Hero />
          </section>

          <section className="pb-8 md:pb-10 max-w-2xl bg-transparent" aria-label="The Problem">
            <TheProblem />
          </section>

          <section className="pb-8 md:pb-10 md:ml-auto max-w-2xl text-left md:text-right bg-transparent" aria-label="Explosive Demand">
            <ExplosiveDemand />
          </section>

          <section className="pb-12 md:pb-16 flex flex-col items-center bg-transparent" aria-label="MTP">
            <MTP />
          </section>
        </div>
      </div>

      <NewApproach />
      <LogoCloudSection />
      <GenAITalentGap />
      <SuccessStories />
      <RebelCurriculum />
      <GlobalMovement />
      <BeyondData />
      <FAQ />
      <ContactSection />
    </div>
  );
}
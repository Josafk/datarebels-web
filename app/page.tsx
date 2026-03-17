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

      {/* Fondo solo visual — no fuerza altura */}
      <div className="relative w-full">
        <div className="absolute inset-0 hero-section-bg pointer-events-none" />

        <div
          className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-8 bg-transparent"
          style={{ '--page-px': '24px' } as React.CSSProperties}
        >
          {/* 1. Hero — pt compensa header fijo (64px) + respiro */}
          <section
            className="pt-24 pb-8 md:pt-28 md:pb-10 flex flex-col justify-center bg-transparent"
            aria-label="Hero"
          >
            <Hero />
          </section>

          {/* 2. The Problem */}
          <section className="pb-8 md:pb-10 max-w-2xl bg-transparent" aria-label="The Problem">
            <TheProblem />
          </section>

          {/* 3. Explosive Demand */}
          <section className="pb-8 md:pb-10 md:ml-auto max-w-2xl text-left md:text-right bg-transparent" aria-label="Explosive Demand">
            <ExplosiveDemand />
          </section>

          {/* 4. MTP */}
          <section className="pb-12 md:pb-16 flex flex-col items-center bg-transparent" aria-label="MTP">
            <MTP />
          </section>
        </div>
      </div>

      {/* 5. New Approach & Stats */}
      <NewApproach />

      {/* 6. Logos */}
      <LogoCloudSection />

      {/* 7. Close the GenAI Talent Gap */}
      <GenAITalentGap />

      {/* 8. Success Stories */}
      <SuccessStories />

      {/* 9. The Rebel Curriculum */}
      <RebelCurriculum />

      {/* 10. Global Movement */}
      <GlobalMovement />

      {/* 11. Beyond Data */}
      <BeyondData />

      {/* 12. FAQ */}
      <FAQ />

      {/* 13. Contact */}
      <ContactSection />
    </div>
  );
}
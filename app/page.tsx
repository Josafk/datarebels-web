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

      {/* Bloque con fondo Background-Principal: Hero → MTP */}
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0 hero-section-bg" />
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-8">

          {/* 1. Hero */}
          <section className="pt-24 pb-8 bg-transparent" aria-label="Hero">
            <Hero />
          </section>

          {/* 2. The Problem */}
          <section className="pb-8 max-w-xl bg-transparent" aria-label="The Problem">
            <TheProblem />
          </section>

          {/* 3. Explosive Demand */}
          <section className="pb-8 md:ml-auto max-w-xl text-left md:text-right bg-transparent" aria-label="Explosive Demand">
            <ExplosiveDemand />
          </section>

          {/* 4. MTP */}
          <section className="pb-16 flex flex-col items-center text-center bg-transparent" aria-label="MTP">
            <MTP />
          </section>

        </div>
      </div>

      {/* 5. New Approach — sin margin-bottom, LogoCloud pega directo abajo */}
      <NewApproach />

      {/* 6. LogoCloud — pega directo bajo NewApproach, sin gap */}
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
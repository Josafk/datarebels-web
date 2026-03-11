import { Hero } from "@/components/hero";
import { TheProblem } from "@/components/TheProblem";
import { ExplosiveDemand } from "@/components/ExplosiveDemand";
import { MTP } from "@/components/MTP";
import { NewApproach } from "@/components/NewApproach";
import { LogoCloudSection } from "@/components/LogoCloudSection";
import { GenAITalentGap } from "@/components/GenAITalentGap";
import { SuccessStories } from "@/components/SuccessStories";
import { RebelCurriculum } from "@/components/RebelCurriculum";
import { GlobalMovement } from "@/components/GlobalMovement";
import { BeyondData } from "@/components|";
import { FAQ } from "@/components/FAQ";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="w-full flex-1 flex flex-col text-white overflow-x-hidden font-sans bg-transparent">
      {/* Contenedor con fondo Background-Principal desde Hero hasta MTP */}
      <div className="relative w-full min-h-screen">
        <div className="absolute inset-0 hero-section-bg" />
        <div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-6 md:px-10 lg:px-8 bg-transparent">
          {/* 1. Hero */}
          <section className="pt-16 pb-12 md:pt-20 md:pb-16 min-h-[70vh] flex flex-col justify-center bg-transparent" aria-label="Hero">
            <Hero />
          </section>

          {/* 2. The Problem */}
          <section className="py-12 max-w-2xl bg-transparent" aria-label="The Problem">
            <TheProblem />
          </section>

          {/* 3. Explosive Demand — izquierda en móvil, derecha en md/lg/xl */}
          <section className="py-12 md:ml-auto max-w-2xl text-left md:text-right bg-transparent" aria-label="Explosive Demand">
            <ExplosiveDemand />
          </section>

          {/* 4. MTP - Closing the GenAI... */}
          <section className="pt-16 pb-12 flex flex-col items-center bg-transparent" aria-label="MTP">
            <MTP />
          </section>
        </div>
      </div>

      {/* 5. New Approach & Stats (La Isla Blanca) */}
      <NewApproach />

      {/* 6. Logos - Join the 100K Rebels (Infinite Slider) */}
      <LogoCloudSection />

      {/* 7. Close the GenAI Talent Gap */}
      <GenAITalentGap />

      {/* 8. Success Stories */}
      <SuccessStories />

      {/* 9. The Rebel Curriculum */}
      <RebelCurriculum />

      {/* 10. Global Movement */}
      <GlobalMovement />

      {/* 11. Beyond Data (Lessons from Business Leaders) */}
      <BeyondData />

      {/* 12. FAQ */}
      <FAQ />

      {/* 13. Contact */}
      <ContactSection />
    </div>
  );
}

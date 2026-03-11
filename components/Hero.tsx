"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ShinyButton } from "@/components/ui/shiny-button";
import { useGSAP } from "@gsap/react";
import { HERO_SECTION_IMAGES } from "@/lib/hero-images";

gsap.registerPlugin(useGSAP);

const HERO_ALTS: Record<string, string> = {
  "/community-demoday-01.png": "Semillero de talento - Demoday",
  "/community-woman-presenting-02.png": "Presentación Machine Learning y análisis de datos",
  "/community-woman-portrait-03.png": "Rebel en espacio Data Rebels",
  "/community-man-presenting-04.png": "Presentación en evento Data Rebels",
  "/community-woman-red-glasses-05.png": "Análisis exploratorio y visualización - presentación",
  "/community-team-meeting-06.png": "Equipo Data Rebels en reunión colaborativa",
};

const rebelProfiles = HERO_SECTION_IMAGES.map((src) => ({
  src,
  alt: HERO_ALTS[src] ?? "Rebel Data Rebels",
}));

export function Hero() {
  const headerRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!headerRef.current) return;
    gsap.from(headerRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
      delay: 0.5,
    });
  }, []);

  return (
    <>
      <h1
        ref={headerRef}
        className="font-title text-white text-[32px] sm:text-[40px] lg:text-[48px] lg:leading-[56px] font-semibold leading-tight mb-8 md:mb-12 max-w-3xl"
      >
        The Future of AI is Built Here. Become One of Our{" "}
        <span className="font-semibold">100K Rebels.</span>
      </h1>

      {/* CARRUSEL REPARADO: Sin cortes y con espacio para el hover */}
      <div className="relative w-full mb-10 md:mb-16 py-4"> 
        <div className="group flex items-center justify-between gap-4 overflow-visible">
          {rebelProfiles.map((profile) => (
            <div
              key={profile.src}
              className="relative flex-1 aspect-[3/4] min-w-[100px] rounded-2xl transition-all duration-500 ease-in-out group-hover:scale-95 group-hover:opacity-40 hover:!scale-110 hover:!opacity-100 hover:z-20 shadow-xl"
            >
              <Image
                src={profile.src}
                alt={profile.alt}
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                className="rounded-2xl object-cover"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-8 relative z-10">
        <p className="font-sans text-[16px] lg:text-[18px] text-[#F9F9F9] max-w-sm leading-relaxed opacity-90">
          The fastest, most cost-effective way to get your teams using AI.
        </p>

        {/* BOTONES UNIFICADOS */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#programs"
            className="h-12 px-8 min-w-[180px] rounded-full border border-rose-500/50 text-white font-bold flex items-center justify-center hover:bg-rose-500/10 transition-all duration-300"
          >
            Our programs
          </Link>
          <ShinyButton href="#contact" variant="blue">
            Enroll a Rebel Today
          </ShinyButton>
        </div>
      </div>
    </>
  );
}

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
  "/hero-1.png": "Semillero de talento - Demoday",
  "/hero-2.png": "Presentación Machine Learning y análisis de datos",
  "/hero-3.png": "Rebel en espacio Data Rebels",
  "/hero-4.png": "Presentación en evento Data Rebels",
  "/hero-5.png": "Análisis exploratorio y visualización - presentación",
  "/hero-6.png": "Equipo Data Rebels en reunión colaborativa",
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
      opacity: 0, y: 30, duration: 1, ease: "power3.out", delay: 0.5,
    });
  }, []);

  return (
    <>
      {/* Título */}
      <h1
        ref={headerRef}
        className="font-title text-white font-semibold leading-tight mb-5 max-w-3xl
          text-[28px] sm:text-[36px] lg:text-[44px] lg:leading-[52px]"
      >
        The Future of AI is Built Here. Become One of Our{" "}
        <span className="font-semibold">100K Rebels.</span>
      </h1>

      {/* Galería de perfiles */}
      <div className="relative w-full mb-6 md:mb-8 py-3">
        <div className="group flex items-center justify-between gap-3 overflow-visible">
          {rebelProfiles.map((profile) => (
            <div
              key={profile.src}
              className="relative flex-1 aspect-[3/4] min-w-[80px] rounded-2xl shadow-xl
                transition-all duration-500 ease-in-out
                group-hover:scale-95 group-hover:opacity-40
                hover:!scale-110 hover:!opacity-100 hover:z-20"
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

      {/* Tagline + botones */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 lg:gap-8 relative z-10">
        <p className="font-sans text-[15px] lg:text-[17px] text-[#F9F9F9] max-w-xs leading-relaxed opacity-90">
          The fastest, most cost-effective way to get your teams using AI.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
          {/* Botón outline — mismo alto que ShinyButton (44px) */}
          <Link
            href="#programs"
            className="inline-flex items-center justify-center h-11 px-6 rounded-full
              border-2 border-[#EA366B] text-white font-bold text-[15px]
              whitespace-nowrap
              hover:bg-[#EA366B]/10 transition-all duration-300"
          >
            Our programs
          </Link>

          {/* ShinyButton azul con efecto conic-gradient */}
          <ShinyButton href="#contact" variant="blue">
            Enroll a Rebel Today
          </ShinyButton>
        </div>
      </div>
    </>
  );
}
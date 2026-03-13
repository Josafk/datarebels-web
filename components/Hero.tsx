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
        className="font-title text-white font-semibold leading-tight mb-4 max-w-2xl
          text-[28px] sm:text-[34px] lg:text-[40px] lg:leading-[48px]"
      >
        The Future of AI is Built Here. Become One of Our{" "}
        <span className="font-semibold">100K Rebels.</span>
      </h1>

      {/* Galería */}
      <div className="relative w-full mb-5 md:mb-6 py-2">
        <div className="group flex items-center justify-between gap-2 sm:gap-3 overflow-visible">
          {rebelProfiles.map((profile) => (
            <div
              key={profile.src}
              className="relative flex-1 aspect-[3/4] min-w-[72px] max-w-[160px] rounded-xl shadow-xl
                transition-all duration-500 ease-in-out
                group-hover:scale-95 group-hover:opacity-40
                hover:!scale-105 hover:!opacity-100 hover:z-20"
            >
              <Image
                src={profile.src}
                alt={profile.alt}
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                className="rounded-xl object-cover"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tagline + botones */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-6 relative z-10">
        <p className="font-sans text-[14px] lg:text-[16px] text-[#F9F9F9] max-w-xs leading-relaxed opacity-85">
          The fastest, most cost-effective way to get your teams using AI.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5">
          {/*
            Botón outline "Our programs"
            — mismo height que ShinyButton (42px = h-[2.625rem])
            — borde #EA366B, sin fondo, sin efecto hover-box
            — solo cambia opacidad del borde en hover
          */}
          <Link
            href="#programs"
            className="
              inline-flex items-center justify-center
              h-[2.625rem] px-5 rounded-full
              border-2 border-[#EA366B]
              text-white font-bold text-[13px] whitespace-nowrap
              transition-colors duration-200
              hover:bg-[#EA366B]/10
            "
          >
            Our programs
          </Link>

          {/* ShinyButton azul */}
          <ShinyButton href="#contact" variant="blue">
            Enroll a Rebel Today
          </ShinyButton>
        </div>
      </div>
    </>
  );
}
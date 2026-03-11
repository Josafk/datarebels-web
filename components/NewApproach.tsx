"use client";

import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ShinyButton } from "@/components/ui/shiny-button";
import { cn } from "@/lib/utils";

const stats = [
  { value: "1,135", label: "Rebels Graduated" },
  { value: "+357",  label: "Proyectos implementados" },
  { value: "8x",   label: "Average ROI on AI Implementations" },
  { value: "91%",  label: "de CSAT alcanzado" },
];

const EnrollBtn = () => (
  <ShinyButton href="#contact" variant="blue" className="px-8 py-3.5 w-fit rounded-full">
    Enroll a Rebel Today
    <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18}
      viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  </ShinyButton>
);

export function NewApproach() {
  return (
    <section className="bg-gray-100 py-12 w-full relative z-10" aria-label="New Approach & Stats">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-8">
        <div className={cn(
          "bg-white rounded-3xl shadow-2xl mx-auto max-w-6xl relative",
          // overflow-hidden en mobile/tablet para que no haya artefactos sin imagen
          "overflow-hidden lg:overflow-visible",
        )}>

          {/* ─── BLOQUE SUPERIOR: texto + imagen (desktop) ─── */}
          <div className="w-full lg:relative lg:flex lg:items-end lg:overflow-visible lg:min-h-[380px]">

            {/* Texto */}
            <div className="flex flex-col p-8 md:p-10 lg:p-16 lg:max-w-xl relative z-10">
              <div className="mb-5">
                <Image
                  src="/isologo.svg" alt=""
                  width={40} height={32}
                  className="object-contain w-10 h-8"
                />
              </div>

              {/* Título — Ambit Semibold, escala por breakpoint */}
              <h2 className="font-title text-slate-900 text-2xl lg:text-4xl font-semibold mb-4">
                Our economy demands a new approach
              </h2>

              {/* Body — DS: Inter Regular 14px / 18px en mobile·tablet; 15px relajado en desktop */}
              <p className={cn(
                "font-sans text-gray-600 mb-6 lg:mb-8",
                "text-[14px] leading-[18px]",          // mobile & tablet
                "lg:text-[15px] lg:leading-relaxed",   // desktop
              )}>
                We aim to solve this problem by eliminating uncertainty. We achieve
                this by mapping the precise skills required by the global GenAI market,
                moving beyond traditional curricula.
              </p>

              {/* Botón: visible en tablet+ (md+), oculto en mobile — reaparece al pie del card */}
              <div className="hidden md:block">
                <EnrollBtn />
              </div>
            </div>

            {/* Imagen de la chica — SOLO en desktop (lg+) */}
            <div className="hidden lg:block lg:absolute lg:right-0 lg:bottom-0 lg:w-[48%] lg:min-w-[280px] lg:h-full lg:max-h-[450px] z-10">
              <Image
                src="/img.png"
                alt="Data Rebels team member"
                fill
                className="object-contain object-bottom pointer-events-none"
                sizes="48vw"
              />
            </div>
          </div>

          {/* ─── ESTADÍSTICAS ─── */}
          {/*
            Mobile  (< md):  1 columna — separadores horizontales entre filas
            Tablet  (md):    2×2 grid  — separadores vertical y horizontal entre celdas
            Desktop (lg+):   4 columnas — solo separadores verticales
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-slate-100">
            {stats.map((stat, i) => (
              <div
                key={stat.value}
                className={cn(
                  "flex flex-col items-start justify-center py-8 px-6 text-left border-slate-100",
                  // Mobile (1-col): top border para items 1·2·3
                  i > 0 && "border-t",
                  // Tablet (2-col): item 1 → limpiar top, añadir left; item 3 → añadir left
                  i === 1 && "md:border-t-0 md:border-l",
                  i === 3 && "md:border-l",
                  // Desktop (4-col): left border para todos excepto primero; limpiar top
                  i > 0 && "lg:border-l lg:border-t-0",
                )}
              >
                <AnimatedCounter
                  value={stat.value}
                  duration={1500}
                  className="font-title text-[48px] leading-[56px] font-semibold mb-1 text-blue-main block"
                />
                <span className="font-sans text-slate-500 text-[14px] leading-[18px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* ─── BOTÓN MOBILE: solo visible en < md, debajo de las estadísticas ─── */}
          <div className="md:hidden px-8 pb-8 pt-2">
            <EnrollBtn />
          </div>

        </div>
      </div>
    </section>
  );
}

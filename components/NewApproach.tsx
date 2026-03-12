"use client";

import React from "react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ShinyButton } from "@/components/ui/shiny-button";

const stats = [
  { value: "1,135", label: "Rebels Graduated" },
  { value: "+357",  label: "Proyectos implementados" },
  { value: "8x",   label: "Average ROI on AI Implementations" },
  { value: "91%",  label: "de CSAT alcanzado" },
];

export function NewApproach() {
  return (
    <section className="bg-gray-100 py-12 lg:py-20 w-full relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* CARD PRINCIPAL - Añadimos overflow-visible para que la chica pueda "respirar" */}
        <div className="bg-white rounded-[2.5rem] shadow-xl mx-auto max-w-5xl border border-gray-100 relative">

          <div className="flex flex-col lg:flex-row relative min-h-[400px]">
            
            {/* TEXTO: 40px arriba / 80px abajo en desktop */}
            <div className="flex-1 pt-[40px] pb-[40px] lg:pb-[80px] px-[32px] flex flex-col justify-start z-20">
              <div className="mb-6 h-[40px] flex items-center">
                {/* Logo con ruta absoluta para forzar carga */}
                <img
                  src="/isologo.svg" 
                  alt="Data Rebels"
                  className="h-full w-auto block"
                  onError={(e) => (e.currentTarget.src = "isologo.svg")} // Intento de respaldo
                />
              </div>

              <h2 className="font-title text-slate-900 font-semibold mb-5 text-[32px] leading-[34px] tracking-tight text-left">
                Our economy demands a <br className="hidden lg:block" /> new approach
              </h2>

              <p className="font-sans text-gray-600 text-[14px] leading-relaxed mb-8 max-w-[360px] text-left">
                We aim to solve this problem by eliminating uncertainty. We achieve
                this by mapping the precise skills required by the global GenAI market.
              </p>

              <div className="flex justify-start">
                <ShinyButton 
                  href="#contact" 
                  variant="blue" 
                  className="py-[11px] pl-[24px] pr-[16px] rounded-full text-[14px] font-bold h-auto w-auto"
                >
                  <span className="flex items-center gap-2">
                    Enroll a Rebel Today
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14m-7-7 7 7-7 7" />
                    </svg>
                  </span>
                </ShinyButton>
              </div>
            </div>

            {/* CHICA: Corregimos para que NO se corte la cara */}
            {/* hidden lg:flex asegura que solo se vea en desktop */}
            <div className="hidden lg:flex absolute right-0 bottom-0 w-[50%] h-full z-10 items-end justify-end pointer-events-none pr-4">
              <img
                src="/image-girl.png" 
                alt="Rebel"
                className="max-h-[95%] w-auto object-contain object-bottom" // max-h-[95%] evita que toque el borde superior
              />
            </div>
          </div>

          {/* NUMERALIA: Inter con medidas de Figma */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-gray-100 bg-white rounded-b-[2.5rem] relative z-30">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center lg:items-start justify-center py-10 px-8 ${
                  i > 0 ? "lg:border-l border-gray-100" : ""
                } ${i >= 2 ? "border-t lg:border-t-0" : ""}`}
              >
                <div className="font-sans font-semibold text-[#1330f4] text-[48px] leading-[56px] tracking-tighter">
                  <AnimatedCounter value={stat.value} />
                </div>
                <span className="font-sans text-slate-500 text-[16px] font-normal leading-[24px] mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
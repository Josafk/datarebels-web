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
    <section className="bg-gray-100 py-10 lg:py-16 w-full relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* CARD PRINCIPAL - max-w-5xl */}
        <div className="bg-white rounded-[2.5rem] shadow-xl mx-auto max-w-5xl overflow-hidden border border-gray-100">
          
          <div className="flex flex-col lg:flex-row relative">
            
            {/* TEXTO: Margen de 40px arriba / 80px abajo (Desktop) y 32px a los lados */}
            <div className="flex-1 pt-[40px] pb-[40px] lg:pb-[80px] px-[32px] flex flex-col justify-start z-20">
              <div className="mb-6 h-[40px]">
                {/* Forzamos el logo con query param para evitar caché de Vercel */}
                <img
                  src="/isologo.svg?refresh=2" 
                  alt="Data Rebels"
                  className="h-full w-auto object-contain"
                />
              </div>

              <h2 className="font-title text-slate-900 font-semibold mb-5 text-[32px] leading-[34px] tracking-tight text-left">
                Our economy demands a <br className="hidden lg:block" /> new approach
              </h2>

              <p className="font-sans text-gray-600 text-[14px] leading-relaxed mb-8 max-w-[380px] text-left">
                We aim to solve this problem by eliminating uncertainty. We achieve
                this by mapping the precise skills required by the global GenAI market.
              </p>

              {/* BOTÓN: Padding exacto de Figma: 11px vertical, 24px izquierda, 16px derecha */}
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

            {/* FOTO DE LA CHICA: 'hidden' por defecto, 'lg:block' solo en desktop */}
            {/* El rostro no se tapa porque usamos object-bottom y max-h-[100%] */}
            <div className="hidden lg:block absolute right-0 bottom-0 w-[50%] h-full z-10 pointer-events-none">
              <img
                src="/image-girl.png" 
                alt="Rebel"
                className="max-h-[100%] w-auto object-contain object-bottom ml-auto"
              />
            </div>
          </div>

          {/* NUMERALIA: Todo en Inter (font-sans) con medidas de Figma */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-gray-100 bg-white relative z-30">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center lg:items-start justify-center py-10 px-8 ${
                  i > 0 ? "lg:border-l border-gray-100" : ""
                } ${i >= 2 ? "border-t lg:border-t-0" : ""}`}
              >
                {/* Números: Inter SemiBold 48px / 56px */}
                <div className="font-sans font-semibold text-[#1330f4] text-[48px] leading-[56px] tracking-tighter">
                  <AnimatedCounter value={stat.value} />
                </div>
                {/* Labels: Inter Regular 16px / 24px */}
                <span className="font-sans text-slate-500 text-[16px] font-normal leading-[24px] mt-1 text-left">
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
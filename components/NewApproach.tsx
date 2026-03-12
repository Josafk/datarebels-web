"use client";

import React from "react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ShinyButton } from "@/components/ui/shiny-button";

const stats = [
  { value: "1,135", label: "REBELS GRADUATED" },
  { value: "+357",  label: "PROYECTOS IMPLEMENTADOS" },
  { value: "8x",   label: "AVERAGE ROI ON AI IMPLEMENTATIONS" },
  { value: "91%",  label: "DE CSAT ALCANZADO" },
];

export function NewApproach() {
  return (
    <section className="bg-gray-100 py-12 lg:py-20 w-full relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* CARD PRINCIPAL - max-w-5xl para que sea compacta como el Figma */}
        <div className="bg-white rounded-[2.5rem] shadow-xl mx-auto max-w-5xl overflow-hidden border border-gray-100">
          
          <div className="flex flex-col lg:flex-row relative">
            
            {/* TEXTO: 40px arriba, 80px abajo, 32px a los lados */}
            <div className="flex-1 pt-[40px] pb-[40px] lg:pb-[80px] px-[32px] flex flex-col justify-start z-20">
              <div className="mb-6 h-[40px]">
                {/* Usamos etiqueta img directa para asegurar que Vercel encuentre /isologo.svg */}
                <img
                  src="/isologo.svg" 
                  alt="Data Rebels"
                  className="h-full w-auto object-contain"
                />
              </div>

              <h2 className="font-title text-slate-900 font-semibold mb-5 text-[32px] leading-[34px] tracking-tight text-left">
                Our economy demands a <br className="hidden lg:block" /> new approach
              </h2>

              <p className="font-sans text-gray-600 text-[14px] leading-relaxed mb-8 max-w-[380px] text-left">
                We aim to solve this problem by eliminating uncertainty. We achieve
                this by mapping the precise skills required by the global GenAI market,
                moving beyond traditional curricula.
              </p>

              {/* BOTÓN: Con el padding exacto de Figma y ahora con espacio suficiente */}
              <div className="flex justify-start pb-4">
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

            {/* IMAGEN DE LA CHICA: SOLO visible en Desktop (lg+) */}
            <div className="hidden lg:block absolute right-0 bottom-0 w-[55%] h-[120%] z-10 pointer-events-none">
              <img
                src="/image-girl.png" 
                alt="Data Rebels Student"
                className="w-full h-full object-contain object-right-bottom scale-110 origin-bottom-right"
              />
            </div>
          </div>

          {/* ESTADÍSTICAS: Ambit 48px / 56px */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-gray-100 bg-white relative z-30">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center lg:items-start justify-center py-10 px-8 ${
                  i > 0 ? "lg:border-l border-gray-100" : ""
                } ${i >= 2 ? "border-t lg:border-t-0" : ""}`}
              >
                <div className="font-title font-semibold text-[#1330f4] text-[48px] leading-[56px]">
                  <AnimatedCounter value={stat.value} />
                </div>
                <span className="font-sans text-slate-500 text-[10px] font-bold uppercase tracking-[0.1em] mt-1">
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
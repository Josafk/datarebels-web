"use client";

import React from "react";
import Image from "next/image";
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
    <section className="bg-gray-100 py-12 w-full relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* CARD PRINCIPAL: max-w-5xl y altura controlada */}
        <div className="bg-white rounded-[2rem] shadow-xl mx-auto max-w-5xl overflow-hidden border border-gray-100">
          
          <div className="flex flex-col lg:flex-row relative lg:h-[420px]">
            
            {/* COLUMNA TEXTO: Medidas de Figma (40px top, 80px bottom, 32px sides) */}
            <div className="flex-1 pt-[40px] pb-[40px] lg:pb-[80px] px-[32px] flex flex-col justify-start z-20 bg-white lg:bg-transparent">
              <div className="mb-6">
                <Image
                  src="/isologo.svg" 
                  alt="Data Rebels"
                  width={40}
                  height={34}
                  priority
                  className="object-contain"
                />
              </div>

              <h2 className="font-title text-slate-900 font-semibold mb-4 text-[32px] leading-[34px] tracking-tight text-left">
                Our economy demands a <br className="hidden lg:block" /> new approach
              </h2>

              <p className="font-sans text-gray-600 text-[14px] leading-relaxed mb-8 max-w-[360px] text-left">
                We aim to solve this problem by eliminating uncertainty. We achieve
                this by mapping the precise skills required by the global GenAI market.
              </p>

              {/* BOTÓN: Propiedades exactas de Figma (11px vert, 24px left, 16px right) */}
              <div className="flex justify-start">
                <ShinyButton 
                  href="#contact" 
                  variant="blue" 
                  className="py-[11px] pl-[24px] pr-[16px] rounded-full text-[14px] font-bold h-auto w-auto"
                >
                  <span className="flex items-center gap-2">
                    Enroll a Rebel Today
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14m-7-7 7 7-7 7" />
                    </svg>
                  </span>
                </ShinyButton>
              </div>
            </div>

            {/* COLUMNA IMAGEN: No empuja el contenedor, "flota" a la derecha */}
            <div className="hidden lg:block absolute right-0 bottom-0 w-[50%] h-full z-10 pointer-events-none">
              <Image
                src="/image-girl.png" 
                alt="Rebel"
                fill
                className="object-contain object-right-bottom scale-110 origin-bottom-right"
                sizes="40vw"
                priority
              />
            </div>
            
            {/* Versión móvil de la imagen */}
            <div className="lg:hidden relative h-[300px] w-full bg-white">
               <Image src="/image-girl.png" alt="Rebel" fill className="object-contain object-bottom" />
            </div>
          </div>

          {/* ESTADÍSTICAS: Ambit 48px / 56px */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-gray-100 bg-white relative z-30">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center lg:items-start justify-center py-8 px-8 ${
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
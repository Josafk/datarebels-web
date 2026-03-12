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
    <section className="bg-gray-100 py-10 lg:py-16 w-full relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* CARD BLANCA: max-w-5xl para que no sea gigante */}
        <div className="bg-white rounded-[2rem] shadow-xl mx-auto max-w-5xl overflow-hidden border border-gray-100">
          
          <div className="flex flex-col lg:flex-row items-stretch relative">
            
            {/* COLUMNA TEXTO: Aplicando medidas de Figma (40px top, 80px bottom, 32px sides) */}
            <div className="flex-1 pt-[40px] pb-[40px] lg:pb-[80px] px-[32px] flex flex-col justify-start z-10">
              <div className="mb-6">
                <Image
                  src="/isologo.svg" 
                  alt="Data Rebels"
                  width={48}
                  height={40}
                  className="object-contain"
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

              <div className="flex justify-start">
                <ShinyButton 
                  href="#contact" 
                  variant="blue" 
                  className="h-11 pl-[24px] pr-[16px] py-[11px] rounded-full text-[14px] font-bold"
                >
                  Enroll a Rebel Today →
                </ShinyButton>
              </div>
            </div>

            {/* COLUMNA IMAGEN: Altura controlada para que la chica no estire el bloque */}
            <div className="flex-1 relative min-h-[300px] lg:min-h-full bg-transparent overflow-visible">
              <div className="absolute right-0 bottom-0 w-full h-[110%] flex items-end justify-end">
                <Image
                  src="/image-girl.png" 
                  alt="Rebel"
                  width={500}
                  height={600}
                  className="object-contain object-bottom lg:scale-110 origin-bottom-right"
                  priority
                />
              </div>
            </div>
          </div>

          {/* ESTADÍSTICAS: Ambit 48px / 56px */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-gray-100">
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
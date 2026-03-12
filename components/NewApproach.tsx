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
    <section className="bg-gray-100 py-8 lg:py-12 w-full relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Card más pequeña: max-w-5xl y rounded-3xl */}
        <div className="bg-white rounded-[2.5rem] shadow-xl mx-auto max-w-5xl overflow-hidden border border-gray-100">
          
          <div className="flex flex-col lg:flex-row items-stretch">
            
            {/* Contenido Izquierdo: Menos padding (p-8 lg:p-12) */}
            <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-4">
                <Image
                  src="/isologo.svg" 
                  alt="Logo"
                  width={42}
                  height={34}
                  className="object-contain"
                />
              </div>

              {/* Título Ambit 32px / 34px */}
              <h2 className="font-title text-slate-900 font-semibold mb-3 text-[32px] leading-[34px]">
                Our economy demands a <br className="hidden lg:block" /> new approach
              </h2>

              <p className="font-sans text-gray-600 text-[14px] leading-relaxed mb-6 max-w-sm">
                We aim to solve this problem by eliminating uncertainty. We achieve
                this by mapping the precise skills required by the global GenAI market,
                moving beyond traditional curricula.
              </p>

              {/* Botón Compacto Figma: h-11 y padding lateral ajustado */}
              <div className="flex justify-start">
                <ShinyButton 
                  href="#contact" 
                  variant="blue" 
                  className="h-11 px-6 text-[14px] font-bold rounded-full"
                >
                  Enroll a Rebel Today →
                </ShinyButton>
              </div>
            </div>

            {/* Fotografía: Contenedor con altura máxima para no estirar la card */}
            <div className="flex-1 relative min-h-[280px] lg:max-h-[450px]">
              <Image
                src="/image-girl.png" 
                alt="Rebel"
                fill
                className="object-contain object-bottom scale-100 lg:scale-105 origin-bottom"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          {/* Estadísticas: Ambit 48px / 56px */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-gray-500/10">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center lg:items-start py-8 px-8 ${
                  i > 0 ? "lg:border-l border-gray-500/10" : ""
                } ${i >= 2 ? "border-t lg:border-t-0 border-gray-500/10" : ""}`}
              >
                <div className="font-title font-semibold text-[#1330f4] text-[48px] leading-[56px]">
                  <AnimatedCounter value={stat.value} />
                </div>
                <span className="font-sans text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-1">
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
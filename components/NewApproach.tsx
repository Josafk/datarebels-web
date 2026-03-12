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
        <div className="bg-white rounded-[2rem] shadow-xl mx-auto max-w-5xl overflow-hidden border border-gray-100">
          
          <div className="flex flex-col lg:flex-row items-stretch">
            
            {/* Columna de Texto */}
            <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <Image
                  src="/beyond-data-isologo.svg" // RUTA CORREGIDA AQUÍ
                  alt="Data Rebels Isologo"
                  width={40}
                  height={34}
                  className="object-contain"
                />
              </div>

              {/* Título: Ambit SemiBold 32/34 */}
              <h2 className="font-title text-slate-900 font-semibold mb-4 text-left"
                  style={{ fontSize: '32px', lineHeight: '34px' }}>
                Our economy demands a <br className="hidden lg:block" /> new approach
              </h2>

              <p className="font-sans text-gray-600 text-[14px] leading-relaxed mb-8 max-w-sm text-left">
                We aim to solve this problem by eliminating uncertainty. We achieve
                this by mapping the precise skills required by the global GenAI market,
                moving beyond traditional curricula.
              </p>

              <div className="flex justify-start">
                <ShinyButton href="#contact" variant="blue" className="h-10 px-6 text-sm">
                  Enroll a Rebel Today →
                </ShinyButton>
              </div>
            </div>

            {/* Columna de Imagen */}
            <div className="flex-1 relative min-h-[250px] lg:min-h-full">
              <Image
                src="/image-girl.png" 
                alt="Rebel student"
                fill
                className="object-contain object-bottom lg:scale-105 origin-bottom"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>

          {/* Estadísticas: Ambit SemiBold 48/56 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-gray-100">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center lg:items-start justify-center py-8 px-6 text-center lg:text-left ${
                  i > 0 ? "lg:border-l border-gray-100" : ""
                } ${i >= 2 ? "border-t lg:border-t-0" : ""}`}
              >
                <AnimatedCounter
                  value={stat.value}
                  className="font-title font-semibold text-[#1330f4] block"
                  style={{ fontSize: '48px', lineHeight: '56px' }}
                />
                <span className="font-sans text-slate-500 text-[10px] font-bold uppercase tracking-wider mt-1">
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
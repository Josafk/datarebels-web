"use client";

import React from "react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ShinyButton } from "@/components/ui/shiny-button";

const stats = [
  { value: "1,135", label: "Rebels Graduated" },
  { value: "+357",  label: "Proyectos implementados" },
  { value: "8x",   label: "Avg. ROI on AI Implementations" }, // Abreviado para evitar 3 líneas
  { value: "91%",  label: "de CSAT alcanzado" },
];

export function NewApproach() {
  return (
    <section className="bg-gray-100 py-8 lg:py-12 w-full relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="bg-white rounded-[2rem] shadow-xl mx-auto max-w-5xl overflow-hidden border border-gray-100">
          
          <div className="flex flex-col lg:flex-row relative">
            
            {/* TEXTO: Reducimos padding para bajar la altura total */}
            <div className="flex-1 pt-10 pb-10 lg:pb-16 px-8 flex flex-col justify-center z-20">
              <div className="mb-6 h-9">
                {/* Intentamos ruta absoluta con slash inicial */}
                <img
                  src="/isologo.svg" 
                  alt="Data Rebels"
                  className="h-full w-auto object-contain"
                />
              </div>

              <h2 className="font-title text-slate-900 font-semibold mb-4 text-[28px] lg:text-[32px] leading-tight text-left">
                Our economy demands a <br className="hidden lg:block" /> new approach
              </h2>

              <p className="font-sans text-gray-600 text-[14px] leading-relaxed mb-6 max-w-[360px] text-left">
                We aim to solve this problem by eliminating uncertainty. We achieve
                this by mapping the precise skills required by the global GenAI market.
              </p>

              <div className="flex justify-start">
                <ShinyButton 
                  href="#contact" 
                  variant="blue" 
                  className="py-2.5 pl-6 pr-4 rounded-full text-[14px] font-bold"
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

            {/* FOTO CHICA: Ajustada para no inflar el contenedor */}
            <div className="hidden lg:block absolute right-0 bottom-0 w-[45%] h-full z-10 pointer-events-none">
              <img
                src="/image-girl.png" 
                alt="Rebel"
                className="max-h-[90%] w-auto object-contain object-right-bottom absolute right-0 bottom-0"
              />
            </div>
          </div>

          {/* NUMERALIA: Ajuste de fuente para evitar 3 renglones */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-gray-100 bg-white relative z-30">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center lg:items-start justify-center py-8 px-6 ${
                  i > 0 ? "lg:border-l border-gray-100" : ""
                } ${i >= 2 ? "border-t lg:border-t-0" : ""}`}
              >
                <div className="font-sans font-semibold text-[#1330f4] text-[40px] lg:text-[48px] leading-none mb-1">
                  <AnimatedCounter value={stat.value} />
                </div>
                {/* Bajamos a 13px y quitamos padding excesivo para que quepa en 1 o 2 líneas */}
                <span className="font-sans text-slate-500 text-[13px] leading-tight text-center lg:text-left max-w-[150px]">
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
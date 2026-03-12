"use client";

import React from "react";
import Image from "next/image";
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
    <section className="bg-gray-100 py-16 lg:py-24 w-full relative z-10" aria-label="New Approach and Stats">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-[2.5rem] shadow-xl mx-auto max-w-6xl overflow-hidden border border-gray-200">
          
          <div className="flex flex-col lg:flex-row items-stretch min-h-[400px]">
            
            {/* Texto */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="mb-6">
                <Image
                  src="/isologo.svg" 
                  alt="Data Rebels Logo"
                  width={45}
                  height={38}
                  className="object-contain"
                />
              </div>

              <h2 className="font-title text-slate-900 text-3xl lg:text-4xl font-bold mb-5 leading-tight">
                Our economy demands a <br className="hidden lg:block" /> new approach
              </h2>

              <p className="font-sans text-gray-600 text-[15px] lg:text-[16px] leading-relaxed mb-8 max-w-md">
                We aim to solve this problem by eliminating uncertainty. We achieve
                this by mapping the precise skills required by the global GenAI market,
                moving beyond traditional curricula.
              </p>

              <div className="flex">
                <ShinyButton href="#contact" variant="blue">
                  Enroll a Rebel Today →
                </ShinyButton>
              </div>
            </div>

            {/* Imagen */}
            <div className="flex-1 relative min-h-[300px] lg:min-h-full">
              <Image
                src="/image-girl.png" 
                alt="Rebel member"
                fill
                className="object-contain object-bottom"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-gray-100">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center lg:items-start justify-center py-10 px-8 text-center lg:text-left ${
                  i > 0 ? "lg:border-l border-gray-100" : ""
                } ${i >= 2 ? "border-t lg:border-t-0" : ""}`}
              >
                <AnimatedCounter
                  value={stat.value}
                  className="font-title text-4xl lg:text-5xl font-bold mb-1 text-[#1330f4]"
                />
                <span className="font-sans text-slate-500 text-xs lg:text-sm font-medium uppercase tracking-wide">
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
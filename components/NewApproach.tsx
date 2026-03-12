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

export function NewApproach() {
  return (
    <section className="bg-gray-100 py-16 lg:py-24 w-full relative z-10" aria-label="New Approach & Stats">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl mx-auto max-w-6xl overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-stretch lg:min-h-[500px]">
            
            {/* ─── BLOQUE IZQUIERDO: TEXTO ─── */}
            <div className="flex-1 p-8 md:p-12 lg:p-20 flex flex-col justify-center">
              <div className="mb-8">
                <Image
                  src="/isologo.svg" // Nombre corregido según tu carpeta public
                  alt="Data Rebels Logo"
                  width={48}
                  height={40}
                  className="object-contain"
                />
              </div>

              <h2 className="font-title text-slate-900 text-3xl lg:text-4xl font-bold mb-6 leading-tight">
                Our economy demands a <br className="hidden lg:block" /> new approach
              </h2>

              <p className="font-sans text-gray-600 text-[15px] lg:text-[16px] leading-relaxed mb-10 max-w-md">
                We aim to solve this problem by eliminating uncertainty. We achieve
                this by mapping the precise skills required by the global GenAI market,
                moving beyond traditional curricula.
              </p>

              <div className="flex">
                <ShinyButton href="#contact" variant="blue">
                  Enroll a Rebel Today
                  <span className="ml-2">→</span>
                </ShinyButton>
              </div>
            </div>

            {/* ─── BLOQUE DERECHO: IMAGEN DE LA CHICA ─── */}
            {/* Ajustamos la altura y el centrado para que no se vea gigante */}
            <div className="flex-1 relative min-h-[400px] lg:min-h-full bg-slate-50 lg:bg-transparent">
              <Image
                src="/image-girl.png" // Nombre corregido según el rename que vimos en terminal
                alt="Rebel member"
                fill
                className="object-contain object-bottom p-4 lg:p-0"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* ─── SECCIÓN DE ESTAD
"use client";

import Image from "next/image";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ShinyButton } from "@/components/ui/shiny-button";
import { cn } from "@/lib/utils";

// Definimos las estadísticas con los labels en MAYÚSCULAS tal como Figma
const stats = [
  { value: "1,135", label: "REBELS GRADUATED" },
  { value: "+357",  label: "PROYECTOS IMPLEMENTADOS" },
  { value: "8x",   label: "AVERAGE ROI ON AI IMPLEMENTATIONS" },
  { value: "91%",  label: "DE CSAT ALCANZADO" },
];

// Componente EnrollBtn con la CSS exacta de Figma para padding y radius
// mientras se mantiene el efecto ShinyButton
const EnrollBtn = ({ className }: { className?: string }) => (
  <ShinyButton 
    href="#contact" 
    variant="blue" 
    // Padding 11px 16px 11px 24px, radius 1000px, w-fit para ser compacto
    className={cn("py-[11px] pl-[24px] pr-[16px] rounded-[1000px] w-fit", className)}
  >
    {/* Gap de 4px entre texto e icono, text-sm font-bold */}
    <span className="flex items-center gap-1 text-sm font-bold">
      Enroll a Rebel Today
      <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18}
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
        <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
      </svg>
    </span>
  </ShinyButton>
);

export function NewApproach() {
  return (
    // Reducimos el padding de la sección py-12 a py-10 lg:py-16 para que sea más compacta
    <section className="bg-gray-100 py-10 lg:py-16 w-full relative z-10" aria-label="New Approach & Stats">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Hacemos la card blanca max-w-5xl en lugar de max-w-6xl para un bloque más compacto */}
        <div className="bg-white rounded-[2rem] shadow-xl mx-auto max-w-5xl relative overflow-hidden">

          <div className="flex flex-col lg:flex-row items-stretch lg:min-h-[480px]">

            {/* Columna Izquierda: Texto - Padding reducido de p-8/10/16 a p-6/10/12 */}
            <div className="flex-1 p-6 md:p-10 lg:p-12 flex flex-col justify-center relative z-10">
              <div className="mb-6">
                <Image
                  // RUTA CORREGIDA: Usamos el nombre del archivo adjunto
                  src="/isologo.svg" 
                  alt="Data Rebels Isologo"
                  width={48}
                  height={40}
                  className="object-contain"
                />
              </div>

              {/* Título: Ambit SemiBold 32px font size, 34px line height usando Tailwind arbitrario */}
              <h2 className="font-title text-slate-900 text-left font-semibold mb-5 text-[32px] leading-[34px]">
                Our economy demands a <br className="hidden lg:block" /> new approach
              </h2>

              {/* Body compactado con max-w-sm */}
              <p className="font-sans text-gray-600 mb-8 text-[14px] leading-relaxed max-w-sm text-left">
                We aim to solve this problem by eliminating uncertainty. We achieve
                this by mapping the precise skills required by the global GenAI market,
                moving beyond traditional curricula.
              </p>

              {/* Botón: visible en tablet+ (md+), oculto en mobile, padding compacto de EnrollBtn */}
              <div className="hidden md:block">
                <EnrollBtn />
              </div>
            </div>

            {/* Columna Derecha: Imagen - Chica redimensionada y proportionate, apoyada en la base */}
            <div className="flex-1 relative min-h-[300px] lg:min-h-full bg-slate-50 lg:bg-transparent flex items-end justify-center lg:justify-end">
              {/* Contenedor de imagen con alturas controladas y object-bottom */}
              <div className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] lg:absolute lg:right-0 lg:bottom-0 lg:w-[105%] lg:origin-bottom lg:scale-105">
                <Image
                  src="/image-girl.png" // same girl filename
                  alt="Data Rebels student"
                  fill
                  // object-containobject-bottom para que esté apoyada en la base sin cortarse
                  className="object-contain object-bottom p-4 lg:p-0"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Estadísticas Section: Ambit SemiBold 48px font size, 56px line height usando Tailwind arbitrario */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-slate-100">
            {stats.map((stat, i) => (
              <div
                key={stat.value}
                className={cn(
                  "flex flex-col items-center lg:items-start justify-center py-9 px-7 text-center lg:text-left border-slate-100",
                  // Mobile: Grid 2 col, añadir borde izquierdo a impares (i=1, 3, etc)
                  i % 2 !== 0 && "md:border-l",
                  // Mobile: Grid 2 col, añadir borde top a la segunda fila (i=2, 3)
                  i > 1 && "border-t md:border-t-0",
                  // Desktop: Grid 4 col, añadir borde izquierdo a todos menos primero y limpiar top
                  i > 0 && "lg:border-l lg:border-t-0",
                )}
              >
                {/* Wrap in div to apply Figma's 48/56 size, component may not accept style prop */}
                <div className="font-title font-semibold text-[#1330f4] block text-[48px] leading-[56px] mb-1">
                  <AnimatedCounter value={stat.value} duration={1500} />
                </div>
                {/* Stats labels: text-xs, font-bold uppercase tracking-wider */}
                <span className="font-sans text-slate-500 text-xs font-bold uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

          {/* Botón Mobile: same styles, w-full, below stats */}
          <div className="md:hidden px-6 pb-6 pt-1">
            <EnrollBtn className="w-full justify-center" />
          </div>

        </div>
      </div>
    </section>
  );
}
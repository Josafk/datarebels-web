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
    <section className="bg-gray-100 pt-8 lg:pt-10 pb-0 w-full relative z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] shadow-xl mx-auto max-w-5xl border border-gray-100"
          style={{ overflow: 'visible' }}
        >

          {/* ── FILA SUPERIOR: texto + foto ── */}
          <div className="flex flex-col lg:flex-row relative rounded-t-[2rem] overflow-hidden" style={{ minHeight: 0 }}>

            <div className="flex-1 pt-6 pb-6 px-6 lg:px-8 flex flex-col justify-center z-20">

              <div className="mb-4 h-8 flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/isologo.svg" alt="Data Rebels" className="h-8 w-auto" />
              </div>

              <h2 className="font-title text-slate-900 font-semibold mb-2 text-[24px] lg:text-[30px] leading-tight text-left">
                Our economy demands a{" "}
                <br className="hidden lg:block" />
                new approach
              </h2>

              <p className="font-sans text-gray-600 text-[13px] leading-relaxed mb-5 text-left" style={{ maxWidth: 340 }}>
                We aim to solve this problem by eliminating uncertainty. We achieve
                this by mapping the precise skills required by the global GenAI
                market, moving beyond traditional curricula.
              </p>

              {/* Botón — en mobile ocupa todo el ancho disponible */}
              <div className="flex justify-start w-full lg:w-auto pb-2">
                <ShinyButton
                  href="#contact"
                  variant="blue"
                  className="w-full lg:w-auto"
                  style={{ height: 44, paddingLeft: 20, paddingRight: 20, fontSize: 14 }}
                >
                  <span className="flex items-center justify-center gap-2 whitespace-nowrap">
                    Enroll a Rebel Today
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14m-7-7 7 7-7 7" />
                    </svg>
                  </span>
                </ShinyButton>
              </div>
            </div>

            {/* Foto — solo desktop */}
            <div className="hidden lg:flex absolute right-0 bottom-0 w-[46%] h-full z-10 pointer-events-none items-end justify-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/image-girl.png" alt="Rebel" className="w-auto object-contain object-right-bottom max-h-full" />
            </div>
          </div>

          {/* ── NUMERALIA ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-gray-100 bg-white rounded-b-[2rem] overflow-hidden">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={[
                  "flex flex-col items-start justify-center py-5 px-6",
                  i > 0 ? "border-t border-gray-100" : "",
                  i === 1 ? "md:border-l md:border-t-0" : "",
                  i === 2 ? "md:border-t  md:border-l-0" : "",
                  i === 3 ? "md:border-t  md:border-l" : "",
                  i > 0 ? "lg:border-t-0 lg:border-l" : "",
                ].join(" ")}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-ambit), ui-sans-serif, system-ui, sans-serif',
                    fontSize: 48,
                    fontWeight: 600,
                    lineHeight: '56px',
                    color: '#1330F4',
                    marginBottom: 4,
                  }}
                >
                  <AnimatedCounter value={stat.value} />
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
                    fontSize: 12,
                    lineHeight: '16px',
                    fontWeight: 400,
                    color: '#64748b',
                    maxWidth: 160,
                  }}
                >
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
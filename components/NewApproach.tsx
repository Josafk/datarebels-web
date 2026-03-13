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
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="bg-white rounded-[2rem] shadow-xl mx-auto max-w-5xl overflow-hidden border border-gray-100">

          {/* FILA SUPERIOR: texto + foto — altura compacta */}
          <div className="flex flex-col lg:flex-row relative" style={{ minHeight: 0 }}>

            {/* COLUMNA TEXTO — menos padding vertical */}
            <div className="flex-1 pt-6 pb-6 px-8 flex flex-col justify-center z-20">

              <div className="mb-4 h-8 flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/isologo.svg" alt="Data Rebels" className="h-8 w-auto" />
              </div>

              <h2 className="font-title text-slate-900 font-semibold mb-2 text-[26px] lg:text-[30px] leading-tight text-left">
                Our economy demands a{" "}
                <br className="hidden lg:block" />
                new approach
              </h2>

              <p className="font-sans text-gray-600 text-[13px] leading-relaxed mb-5 max-w-[340px] text-left">
                We aim to solve this problem by eliminating uncertainty. We achieve
                this by mapping the precise skills required by the global GenAI
                market, moving beyond traditional curricula.
              </p>

              <div className="flex justify-start">
                <ShinyButton href="#contact" variant="blue" className="h-10 px-5 text-[14px] min-w-0 w-auto">
                  <span className="flex items-center gap-2">
                    Enroll a Rebel Today
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14m-7-7 7 7-7 7" />
                    </svg>
                  </span>
                </ShinyButton>
              </div>
            </div>

            {/* FOTO */}
            <div className="hidden lg:flex absolute right-0 bottom-0 w-[46%] h-full z-10 pointer-events-none items-end justify-end">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/image-girl.png" alt="Rebel" className="w-auto object-contain object-right-bottom max-h-full" />
            </div>
          </div>

          {/* NUMERALIA */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-gray-100 bg-white relative z-30">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={[
                  "flex flex-col items-start justify-center py-5 px-6",
                  i > 0 ? "lg:border-l border-gray-100" : "",
                  i >= 2 ? "border-t lg:border-t-0 border-gray-100" : "",
                ].join(" ")}
              >
                {/*
                  Fuente Ambit SemiBold 48px / line-height 56px — igual al Figma.
                  AnimatedCounter hereda font-family del padre vía CSS var.
                */}
                <div
                  style={{
                    fontFamily: 'var(--font-ambit), ui-sans-serif, system-ui, sans-serif',
                    fontSize: 48,
                    fontWeight: 600,
                    lineHeight: '56px',
                    color: '#1330F4',
                    marginBottom: 2,
                  }}
                >
                  <AnimatedCounter value={stat.value} />
                </div>
                {/*
                  Label en una sola línea — whitespace-nowrap evita el salto.
                  Font-size reducido a 11px para que "Average ROI on AI Implementations"
                  quepa en una línea sin overflow.
                */}
                <span
                  style={{
                    fontFamily: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
                    fontSize: 11,
                    lineHeight: '16px',
                    fontWeight: 400,
                    color: '#64748b',
                    whiteSpace: 'nowrap',
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
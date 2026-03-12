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
    <section className="bg-gray-100 py-8 lg:py-12 w-full relative z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="bg-white rounded-[2rem] shadow-xl mx-auto max-w-5xl overflow-hidden border border-gray-100">

          {/* FILA SUPERIOR: texto + foto */}
          <div className="flex flex-col lg:flex-row relative min-h-0">

            {/* COLUMNA TEXTO */}
            <div className="flex-1 pt-8 pb-8 px-8 flex flex-col justify-center z-20">

              <div className="mb-5 h-8 flex items-center">
                <Image
                  src="/isologo.svg"
                  alt="Data Rebels"
                  width={36}
                  height={32}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>

              <h2 className="font-title text-slate-900 font-semibold mb-3 text-[26px] lg:text-[30px] leading-tight text-left">
                Our economy demands a{" "}
                <br className="hidden lg:block" />
                new approach
              </h2>

              <p className="font-sans text-gray-600 text-[13px] leading-relaxed mb-6 max-w-[340px] text-left">
                We aim to solve this problem by eliminating uncertainty. We achieve
                this by mapping the precise skills required by the global GenAI
                market, moving beyond traditional curricula.
              </p>

              <div className="flex justify-start">
                <ShinyButton
                  href="#contact"
                  variant="blue"
                  className="py-2.5 pl-6 pr-4 rounded-full text-[14px] font-bold"
                >
                  <span className="flex items-center gap-2">
                    Enroll a Rebel Today
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path d="M5 12h14m-7-7 7 7-7 7" />
                    </svg>
                  </span>
                </ShinyButton>
              </div>
            </div>

            {/* FOTO CHICA: posicionada desde abajo para no inflar la altura */}
            <div className="hidden lg:flex absolute right-0 bottom-0 w-[46%] h-full z-10 pointer-events-none items-end justify-end">
              <Image
                src="/image-girl.png"
                alt="Rebel"
                width={420}
                height={380}
                className="w-auto object-contain object-right-bottom"
                style={{ maxHeight: "100%" }}
                priority
              />
            </div>
          </div>

          {/* NUMERALIA */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-gray-100 bg-white relative z-30">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={[
                  "flex flex-col items-center lg:items-start justify-center py-6 px-6",
                  i > 0 ? "lg:border-l border-gray-100" : "",
                  i >= 2 ? "border-t lg:border-t-0 border-gray-100" : "",
                ].join(" ")}
              >
                <div className="font-sans font-semibold text-[#1330f4] text-[38px] lg:text-[44px] leading-none mb-1">
                  <AnimatedCounter value={stat.value} />
                </div>
                <span className="font-sans text-slate-500 text-[12px] leading-tight text-center lg:text-left max-w-[140px]">
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
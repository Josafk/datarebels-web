"use client";

import Image from "next/image";
import { Sparkles, Users, MessageCircle, Zap, BarChart3, TrendingUp } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { ShinyButton } from "@/components/ui/shiny-button";

const cards = [
  {
    title: "Unique solutions",
    description:
      "Our learning solutions are custom-built, not templated. We reject outdated curricula to deliver cutting-edge content in Data Science and GenAI, precisely matching industry demands and accelerating every Rebel's career.",
    Icon: Sparkles,
  },
  {
    title: "Vibrant AI Pioneer Ecosystem",
    description:
      "Adoption doesn't happen in a vacuum. Connect your team with an elite network of practitioners sharing real-world insights, proven adoption frameworks, and peer-to-peer strategies to overcome organizational resistance.",
    Icon: Users,
    variant: "pink-purple" as const,
  },
  {
    title: "Open Dialogue",
    description:
      "We believe in direct, honest dialogue. We are always ready to discuss specific GenAI scenarios, whether for startups, corporations, or government. Your vision and feedback are key to successful educational implementation.",
    Icon: MessageCircle,
  },
  {
    title: "Agile & Frictionless Enablement",
    description:
      "AI moves fast, and so should your team. Our modular, self-paced curriculum is designed to integrate into high-pressure workflows, allowing your organization to master GenAI adoption without disrupting daily business operations.",
    Icon: Zap,
  },
  {
    title: "Measurable Outcome-Driven Value",
    description:
      "Stop experimenting and start delivering. We focus on high-impact use cases that shift the needle from technical curiosity to tangible business ROI, ensuring every 'Rebel' you enroll translates into streamlined efficiency and data-driven profitability.",
    Icon: BarChart3,
  },
  {
    title: "Scalability",
    description:
      "We build the fundamental architecture of our Data Science and GenAI curricula with your future needs in mind. This ensures seamless integration of new technologies and makes long-term talent development both efficient and scalable.",
    Icon: TrendingUp,
  },
];

export function GenAITalentGap() {
  return (
    <section
      id="solutions"
      className="relative z-10 py-20 overflow-hidden scroll-mt-20"
      aria-label="Close the GenAI Talent Gap"
    >
      {/* Fondo: degradado oscuro + imagen texturizada */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/90 via-[#0a0612] to-black/95" />
      <div
        className="absolute inset-0 z-0 opacity-[0.08]"
        style={{
          backgroundImage: "url('/WhatsApp Image 2025-12-18 at 16.33.20-3.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          maskImage: "linear-gradient(to right, transparent 30%, black 70%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 30%, black 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-8">
        {/* Encabezado y Filtros
            Desktop (lg): fila única — título izquierda + pills derecha en la misma línea
            Tablet/Mobile: columna — título arriba, pills abajo con flex-wrap
        */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8 mb-10 md:mb-12 lg:mb-16">
          {/* Logo + Título — min-w-0 para ceder espacio a las pills en lg:flex-row */}
          <div className="flex items-center gap-4 min-w-0">
            <Image
              src="/isologo-white.svg"
              alt=""
              width={40}
              height={32}
              className="w-10 h-8 flex-shrink-0 object-contain"
            />
            {/* DS Desktop: H2 Ambit Semibold 32px */}
            <h2 className="font-title text-white text-[22px] md:text-[26px] lg:text-[32px] font-semibold leading-tight">
              Close the GenAI{' '}
              <span style={{ color: '#B282FF' }}>Talent Gap</span>
              {'.'} Enroll a Rebel Today.
            </h2>
          </div>
          {/* OUR FORMATS + pills
              flex-shrink-0 → no se encoge en desktop, permanece en la misma fila
              flex-wrap     → permite salto de línea en mobile/tablet si es necesario
              lg:flex-nowrap→ fuerza línea única en desktop
          */}
          <div className="flex flex-wrap lg:flex-nowrap flex-shrink-0 items-center gap-3">
            <span className="font-sans text-[11px] font-semibold tracking-[0.15em] text-white/50 uppercase whitespace-nowrap">
              OUR FORMATS
            </span>
              <button className="inline-flex items-center justify-center gap-2 px-4 h-10 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-white text-sm font-medium hover:border-white/30 transition-colors">
                <svg
                  className="w-3.5 h-3.5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="12" rx="2" />
                  <path d="m10 9 5 3-5 3V9z" />
                </svg>
                Live Sessions
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-4 h-10 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-white text-sm font-medium hover:border-white/30 transition-colors">
                <svg
                  className="w-3.5 h-3.5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
                On-demand
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-4 h-10 rounded-full border border-white/10 bg-black/40 backdrop-blur-md text-white text-sm font-medium hover:border-white/30 transition-colors">
                <svg
                  className="w-3.5 h-3.5 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21h18" />
                  <path d="M5 21V7l8-4 8 4v14" />
                  <path d="M9 21V9l6-3 6 3v12" />
                </svg>
                Hybrid
              </button>
          </div>
        </div>

        {/* Grid de Tarjetas — 1-col mobile / 2-col tablet / 3-col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 md:mb-16">
          {cards.map(({ title, description, Icon, variant }) => (
            <div
              key={title}
              className="group relative rounded-2xl p-[2px] transition-all duration-300"
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={2}
                variant={variant}
              />
              <div className="relative z-10 rounded-[calc(1rem-2px)] bg-black/80 backdrop-blur-md border border-white/5 p-6 min-h-full">
                <div className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/5 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-white" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </div>
                {/* DS: Ambit Semibold para títulos de card */}
                <h3 className="font-title text-white text-[18px] font-semibold mb-3 pr-12">{title}</h3>
                {/* DS: Inter Regular 14px / 18px line-height */}
                <p className="font-sans text-white/60 text-[14px] leading-[18px]">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Botón CTA */}
        <div className="flex justify-center">
          <ShinyButton href="#contact" variant="blue" className="px-12 py-4">
            Enroll now! →
          </ShinyButton>
        </div>
      </div>
    </section>
  );
}

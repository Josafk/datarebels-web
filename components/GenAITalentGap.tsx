"use client";

import { Sparkles, Users, MessageCircle, Zap, BarChart2, TrendingUp } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const CARDS = [
  {
    title: "Unique solutions",
    icon: Sparkles,
    body: "Our learning solutions are custom-built, not templated. We reject outdated curricula to deliver cutting-edge content in Data Science and GenAI, precisely matching industry demands and accelerating every Rebel's career.",
    variant: "default" as const,
  },
  {
    title: "Vibrant AI Pioneer Ecosystem",
    icon: Users,
    body: "Adoption doesn't happen in a vacuum. Connect your team with an elite network of practitioners sharing real-world insights, proven adoption frameworks, and peer-to-peer strategies to overcome organizational resistance.",
    variant: "pink-purple" as const,
  },
  {
    title: "Open Dialogue",
    icon: MessageCircle,
    body: "We believe in direct, honest dialogue. We are always ready to discuss specific GenAI scenarios, whether for startups, corporations, or government. Your vision and feedback are key to successful educational implementation.",
    variant: "default" as const,
  },
  {
    title: "Agile & Frictionless Enablement",
    icon: Zap,
    body: "AI moves fast, and so should your team. Our modular, self-paced curriculum is designed to integrate into high-pressure workflows, allowing your organization to master GenAI adoption without disrupting daily business operations.",
    variant: "rainbow" as const,
  },
  {
    title: "Measurable Outcome-Driven Value",
    icon: BarChart2,
    body: "Stop experimenting and start delivering. We focus on high-impact use cases that shift the needle from technical curiosity to tangible business ROI, ensuring every 'Rebel' you enroll translates into streamlined efficiency and data-driven profitability.",
    variant: "pink-purple" as const,
  },
  {
    title: "Scalability",
    icon: TrendingUp,
    body: "We build the fundamental architecture of our Data Science and GenAI curricula with your future needs in mind. This ensures seamless integration of new technologies and makes long-term talent development both efficient and scalable.",
    variant: "default" as const,
  },
];

export function GenAITalentGap() {
  return (
    <section
      id="solutions"
      aria-label="Close the GenAI Talent Gap"
      className="relative z-10 py-20 overflow-hidden scroll-mt-20"
    >
      {/* Fondo */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/whatsapp-image-2025-12-18-at-16.33.20-3.jpeg"
          alt=""
          aria-hidden
          className="w-full h-full object-cover"
          style={{ filter: 'grayscale(100%)', opacity: 0.08 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, #08060f 0%, #0d0b1a 40%, #0d0b1a 60%, #08060f 100%)' }}
        />
      </div>

      {/* ── Header ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-6">

          {/* Title */}
          <div className="flex items-start gap-3 w-full lg:w-auto lg:max-w-[480px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/isologo-white.svg" alt="" aria-hidden className="w-8 h-8 lg:w-10 lg:h-10 flex-shrink-0 mt-1" />
            <h2
              className="text-[22px] md:text-[26px] lg:text-[32px]"
              style={{
                fontFamily: 'var(--font-ambit), ui-sans-serif, system-ui, sans-serif',
                fontWeight: 600,
                lineHeight: '1.15',
                color: '#F9F9F9',
                margin: 0,
              }}
            >
              Close the GenAI{' '}
              <span style={{ color: '#CDACFC' }}>Talent Gap.</span>{' '}
              <br className="hidden lg:block" />
              Enroll a Rebel Today.
            </h2>
          </div>

          {/* Format pills */}
          <div className="flex items-center gap-2 flex-wrap">
            <span style={{
              fontFamily: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
              fontSize: 11, fontWeight: 600, letterSpacing: '2px',
              textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)',
              whiteSpace: 'nowrap',
            }}>
              Our Formats
            </span>
            {['Live Sessions', 'On-demand', 'Hybrid'].map((f) => (
              <span key={f} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '6px 14px', borderRadius: 999,
                border: '1px solid rgba(255,255,255,0.18)',
                background: 'rgba(255,255,255,0.06)',
                fontFamily: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
                fontSize: 13, fontWeight: 500, color: '#fff', whiteSpace: 'nowrap',
              }}>
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Cards grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CARDS.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="relative rounded-[10px] p-px"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              >
                <GlowingEffect
                  disabled={false}
                  variant={card.variant}
                  spread={80}
                  proximity={100}
                  borderWidth={2}
                  glow={false}
                />
                <div
                  className="relative rounded-[9px] flex flex-col"
                  style={{
                    background: 'rgba(10, 8, 20, 0.92)',
                    padding: '32px 16px 16px 16px',
                    gap: 24,
                    minHeight: 200,
                  }}
                >
                  <div style={{
                    display: 'flex', alignItems: 'flex-start',
                    justifyContent: 'space-between', gap: 12,
                  }}>
                    <h3 style={{
                      fontFamily: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
                      fontSize: 15, fontWeight: 600, lineHeight: '22px',
                      color: '#fff', margin: 0,
                    }}>
                      {card.title}
                    </h3>
                    <span style={{
                      width: 32, height: 32, borderRadius: '50%',
                      background: 'rgba(255,255,255,0.08)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <Icon size={15} color="rgba(255,255,255,0.7)" />
                    </span>
                  </div>
                  <p style={{
                    fontFamily: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
                    fontSize: 13, lineHeight: '20px',
                    color: 'rgba(255,255,255,0.55)', margin: 0,
                  }}>
                    {card.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-10">
          <ShinyButton href="#contact" variant="blue">
            Enroll now! →
          </ShinyButton>
        </div>
      </div>
    </section>
  );
}
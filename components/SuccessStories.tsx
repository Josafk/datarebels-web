"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Check } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

const SUCCESS_STORIES = [
  {
    id: "arca-continental",
    company: "Arca Continental",
    logo: "/arcacontal-white.svg",
    challenge: "Scale data literacy and product ownership across a global organization by building specialized tracks for technical and business roles.",
    tags: ["Data Literacy", "Product Ownership"],
    results: [
      "Successfully certified 69 students, featuring 42 top-performers across Data Product Owner and Python tracks",
      "Developed 34 strategic projects, with 10 elite initiatives selected by experts for their high ROI and potential",
      "Achieved a 96% historical CSAT score across 6 intensive certification programs from 2023 to 2025",
    ],
  },
  {
    id: "cemex",
    company: "Cemex",
    logo: "/cemex-white.svg",
    challenge: "Improve data discovery time from business users & reduce cost to serve new data requirements",
    tags: ["Cost-optimization", "GenAI expert"],
    results: [
      "Reduce 75% FTE time invested in requirements gathering from Data Team",
      "Improve business productivity by 20% by recommending existing data products & assets",
      "Drive 2x adoption of current data platforms",
    ],
  },
  {
    id: "digital-hub-mty",
    company: "Digital Hub MTY",
    logo: "/mdh-white.svg",
    challenge: "Bridge the talent gap in the local digital economy by training high-performing students through real-world corporate projects and massive GenAI adoption.",
    tags: ["Talent Incubator", "Enterprise ROI"],
    results: [
      "Delivered 16 strategic projects, including 9 solving complex corporate challenges with real business data.",
      "Maintained an elite 98% satisfaction rate (CSAT) across 3 generations of 100+ participants each",
      "Certified 79 top-performing graduates with high-demand skills for immediate professional placement.",
    ],
  },
  {
    id: "deacero",
    company: "Deacero",
    logo: "/deacero-white.svg",
    challenge: "Scale GenAI adoption across 200 business users in under 30 days while unlocking the ROI of previously underutilized licenses",
    tags: ["Massive Adoption", "Business Productivity"],
    results: [
      "Achieved 100% CSAT and 65% NPS across a massive group of 200 business leaders.",
      "Unstuck GenAI adoption by mapping specific business roles to high-impact productivity tools",
      "Graduated 112 top-performing students through a hybrid community program of live and on-demand training",
    ],
  },
];

function CaseStudyCard({
  data,
  activeCardId,
  onToggle,
}: {
  data: (typeof SUCCESS_STORIES)[number];
  activeCardId: string | null;
  onToggle: (id: string) => void;
}) {
  const isExpanded = activeCardId === data.id;

  return (
    <div className="group relative rounded-2xl p-[2px] bg-white/[0.10]">
      <GlowingEffect
        spread={40}
        glow={false}
        disabled={false}
        proximity={64}
        inactiveZone={0.01}
        borderWidth={2}
        variant={
          data.id === "cemex" || data.id === "digital-hub-mty" || data.id === "deacero"
            ? "rainbow"
            : "default"
        }
      />
      {/*
        min-h-[420px]: altura mínima uniforme para todos los cards en desktop.
        El card con más contenido marca la altura visual,
        los demás llegan a ese mínimo con flex justify-between.
      */}
      <article className="relative z-10 rounded-[calc(1rem-2px)] bg-[#0a0a0b] p-5 flex flex-col justify-between min-h-[420px]">

        {/* Bloque superior: logo + challenge */}
        <div className="flex flex-col gap-4">
          {/* Logo más grande */}
          <div className="flex items-center h-14 flex-shrink-0">
            <Image
              src={data.logo}
              alt={data.company}
              width={200}
              height={56}
              className={`w-auto object-contain brightness-0 invert opacity-95 ${
                data.id === "digital-hub-mty" ? "max-h-[32px]" : "max-h-[56px]"
              }`}
            />
          </div>

          <div>
            <h3 className="font-title text-white font-semibold text-[20px] leading-[24px] mb-2">
              Challenge
            </h3>
            <p className="font-sans text-slate-300 text-[13px] leading-[18px]">
              {data.challenge}
            </p>
          </div>
        </div>

        {/* Bloque inferior: pills + toggle + resultados */}
        <div className="flex flex-col gap-3 mt-4">
          <div className="flex flex-wrap gap-1.5">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex px-2.5 py-1 rounded-full font-sans text-[12px] leading-[16px] text-white border border-white/20 bg-white/5"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={() => onToggle(data.id)}
            className="flex items-center gap-2 text-white font-sans text-[13px] font-medium hover:text-white/80 transition-colors w-fit"
          >
            View results
            <ChevronDown
              className={`w-4 h-4 text-[#EA366B] transition-transform duration-200 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                key="results"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
                className="overflow-hidden"
              >
                <ul className="border-t border-white/10 pt-3 space-y-3">
                  {data.results.map((result, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 font-sans text-[13px] leading-[18px] text-white/90"
                    >
                      <span className="flex-shrink-0 w-[18px] h-[18px] rounded-full bg-emerald-500 flex items-center justify-center mt-0.5">
                        <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                      </span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </article>
    </div>
  );
}

export function SuccessStories() {
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setActiveCardId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="case-studies"
      className="relative z-10 py-10 md:py-12 lg:py-16 overflow-hidden scroll-mt-20"
      aria-label="Success Stories"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/95 via-[#0a0612] to-black/95" />
      <div
        className="absolute inset-0 z-0 opacity-[0.06]"
        style={{
          backgroundImage: "url('/WhatsApp Image 2025-12-18 at 16.33.20-3.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          maskImage: "linear-gradient(to right, transparent 30%, black 70%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 30%, black 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 lg:gap-8 mb-8 lg:mb-10">
          <h2 className="font-title text-white text-[26px] md:text-[28px] lg:text-[36px] font-semibold leading-tight flex-shrink-0">
            Read some of the{' '}
            <span className="text-violet-300">1,000+</span>
            <br />rebel success stories
          </h2>
          <div className="flex flex-col gap-3 lg:max-w-[420px]">
            <p className="hidden lg:block font-sans text-white/70 text-[14px] leading-relaxed">
              Our programs are custom-built, not templated. We build skills on foundational mastery, not temporary trends.
            </p>
            <Link
              href="#programs"
              className="flex items-center justify-center w-full md:w-fit"
              style={{
                height: 44,
                padding: '0 20px',
                borderRadius: 999,
                border: '2px solid #EA366B',
                fontFamily: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
                fontSize: 13,
                fontWeight: 700,
                color: '#fff',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
                background: 'transparent',
                transition: 'background .2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(234,54,107,0.12)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              Explore our programs →
            </Link>
          </div>
        </div>

        {/* items-start: cada card crece solo al expandirse */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
          {SUCCESS_STORIES.map((story) => (
            <CaseStudyCard
              key={story.id}
              data={story}
              activeCardId={activeCardId}
              onToggle={handleToggle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
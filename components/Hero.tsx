"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ShinyButton } from "@/components/ui/shiny-button";
import { useGSAP } from "@gsap/react";
import { HERO_SECTION_IMAGES } from "@/lib/hero-images";

gsap.registerPlugin(useGSAP);

const HERO_ALTS: Record<string, string> = {
  "/hero-1.png": "Semillero de talento - Demoday",
  "/hero-2.png": "Presentación Machine Learning y análisis de datos",
  "/hero-3.png": "Rebel en espacio Data Rebels",
  "/hero-4.png": "Presentación en evento Data Rebels",
  "/hero-5.png": "Análisis exploratorio y visualización - presentación",
  "/hero-6.png": "Equipo Data Rebels en reunión colaborativa",
};

const profiles = HERO_SECTION_IMAGES.map((src) => ({
  src,
  alt: HERO_ALTS[src] ?? "Rebel Data Rebels",
}));

export function Hero() {
  const h1Ref = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!h1Ref.current) return;
    gsap.from(h1Ref.current, { opacity: 0, y: 24, duration: 0.9, ease: "power3.out", delay: 0.3 });
  }, []);

  return (
    /* pt-2 = muy poco aire bajo el header h-14, hero pegado arriba */
    <div className="pt-2">

      {/* ── Título: Ambit Semibold 48px/56px ── */}
      <h1
        ref={h1Ref}
        style={{
          fontFamily: 'var(--font-ambit), ui-sans-serif, system-ui, sans-serif',
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontWeight: 600,
          lineHeight: '56px',
          color: '#ffffff',
          marginBottom: '1rem',
          maxWidth: '680px',
        }}
      >
        The Future of AI is Built Here.{' '}
        Become One of Our <span style={{ fontWeight: 600 }}>100K Rebels.</span>
      </h1>

      {/* ── Galería: aspecto 3/4, altura máx 200px en desktop ── */}
      <div className="relative w-full mb-4" style={{ paddingBlock: '6px' }}>
        <div
          className="group flex items-end justify-between gap-2 overflow-visible"
          style={{ height: 'clamp(140px, 20vw, 200px)' }}
        >
          {profiles.map((p) => (
            <div
              key={p.src}
              className="relative flex-1 h-full rounded-xl overflow-hidden shadow-lg
                transition-all duration-500 ease-in-out
                group-hover:opacity-40 group-hover:scale-95
                hover:!opacity-100 hover:!scale-105 hover:z-20"
              style={{ minWidth: 0 }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="(max-width: 768px) 33vw, 16vw"
                className="object-cover object-top"
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {/* ── Tagline + CTAs ── */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <p
          style={{
            fontFamily: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
            fontSize: 15,
            lineHeight: '22px',
            color: 'rgba(249,249,249,0.85)',
            maxWidth: 280,
          }}
        >
          The fastest, most cost-effective way to get your teams using AI.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2.5">
          {/*
            Botón outline "Our programs"
            — misma altura que ShinyButton (h-10 = 40px)
            — borde #EA366B 2px
            — hover: fondo levísimo, SIN caja ni sombra
          */}
          <Link
            href="#programs"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '2.5rem',
              padding: '0 1.125rem',
              borderRadius: 999,
              border: '2px solid #EA366B',
              fontFamily: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 700,
              color: '#ffffff',
              whiteSpace: 'nowrap',
              textDecoration: 'none',
              transition: 'background .2s',
              background: 'transparent',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(234,54,107,0.1)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            Our programs
          </Link>

          <ShinyButton href="#contact" variant="blue">
            Enroll a Rebel Today
          </ShinyButton>
        </div>
      </div>
    </div>
  );
}
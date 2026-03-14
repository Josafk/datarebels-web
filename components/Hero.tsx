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
    gsap.from(h1Ref.current, {
      opacity: 0,
      y: 16,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.1,
    });
  }, []);

  return (
    <div style={{ paddingBottom: 32 }}>

      {/* Título */}
      <h1
        ref={h1Ref}
        style={{
          fontFamily: 'var(--font-ambit), ui-sans-serif, system-ui, sans-serif',
          fontSize: 'clamp(28px, 3.8vw, 48px)',
          fontWeight: 600,
          lineHeight: 'clamp(34px, 4.6vw, 56px)',
          color: '#ffffff',
          margin: 0,
          marginBottom: 20,
        }}
      >
        The Future of AI is Built Here.
        <br />
        Become One of Our 100K Rebels.
      </h1>

      {/*
        ── GALERÍA ──────────────────────────────────────────────────
        UN SOLO BLOQUE. Comportamiento por breakpoint:

        Mobile (<768px / md):
          - Scroll horizontal con snap
          - Negative margin compensa exactamente el px-6 (24px) del padre
          - paddingLeft/Right 24px para que las fotos respeten el borde
          - Las fotos se ven ligeramente cortadas al borde → full-bleed visual

        Desktop (≥768px):
          - flex fila estática, todas visibles, hover effects
          - height clamp para escalar con viewport

        Usamos --gallery-mode vía className para separar comportamientos
        sin duplicar el DOM (evita el bug de imágenes duplicadas).
        ─────────────────────────────────────────────────────────────
      */}
      <style>{`
        .hero-gallery-scroll::-webkit-scrollbar { display: none; }
        /* Mobile: scroll horizontal full-bleed */
        @media (max-width: 767px) {
          .hero-gallery {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            gap: 8px;
            /* Bleed: cancela px-6=24px del padre */
            margin-left: -24px;
            margin-right: -24px;
            padding-left: 24px;
            padding-right: 24px;
            padding-bottom: 4px;
            margin-bottom: 20px;
          }
          .hero-gallery-item {
            flex-shrink: 0;
            width: 140px;
            height: 180px;
            border-radius: 14px;
            overflow: hidden;
            scroll-snap-align: start;
            box-shadow: 0 4px 16px rgba(0,0,0,0.35);
            position: relative;
          }
          /* Desktop styles no aplican en mobile */
          .hero-gallery { flex-wrap: nowrap; align-items: unset; height: auto; }
          .hero-gallery-item { flex: none; }
        }
        /* Tablet md (768px-1023px): bleed compensa px-10=40px */
        @media (min-width: 768px) and (max-width: 1023px) {
          .hero-gallery {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            scrollbar-width: none;
            gap: 8px;
            margin-left: -40px;
            margin-right: -40px;
            padding-left: 40px;
            padding-right: 40px;
            padding-bottom: 4px;
            margin-bottom: 20px;
          }
          .hero-gallery-item {
            flex-shrink: 0;
            width: 160px;
            height: 200px;
            border-radius: 14px;
            overflow: hidden;
            scroll-snap-align: start;
            box-shadow: 0 4px 16px rgba(0,0,0,0.35);
            position: relative;
          }
        }
        /* Desktop ≥1024px: flex fila estática con hover */
        @media (min-width: 1024px) {
          .hero-gallery {
            display: flex;
            align-items: stretch;
            gap: 8px;
            height: clamp(150px, 19vw, 220px);
            margin-bottom: 20px;
            overflow: visible;
            margin-left: 0;
            margin-right: 0;
            padding: 0;
          }
          .hero-gallery-item {
            position: relative;
            flex: 1 1 0;
            min-width: 0;
            border-radius: 14px;
            overflow: hidden;
            box-shadow: 0 4px 16px rgba(0,0,0,0.35);
            transition: transform .4s ease, opacity .4s ease;
            height: auto;
            width: auto;
            flex-shrink: unset;
          }
          .hero-gallery:hover .hero-gallery-item {
            opacity: 0.4;
            transform: scale(0.95);
          }
          .hero-gallery-item:hover {
            opacity: 1 !important;
            transform: scale(1.05) !important;
            z-index: 20;
          }
        }
      `}</style>

      <div className="hero-gallery hero-gallery-scroll">
        {profiles.map((p) => (
          <div key={p.src} className="hero-gallery-item">
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 767px) 140px, (max-width: 1023px) 160px, 16vw"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
            />
          </div>
        ))}
      </div>

      {/* Tagline + CTAs */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap' }}>
        <p style={{
          fontFamily: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
          fontSize: 15, lineHeight: '22px',
          color: 'rgba(249,249,249,0.82)',
          maxWidth: 260, margin: 0,
        }}>
          The fastest, most cost-effective way to get your teams using AI.
        </p>

        {/* CTAs: columna full-width en mobile, fila en md+ */}
        <div className="flex flex-col md:flex-row w-full md:w-auto" style={{ gap: 10 }}>
          <Link
            href="#programs"
            className="flex items-center justify-center w-full md:w-auto"
            style={{
              height: 40, padding: '0 18px', borderRadius: 999,
              border: '2px solid #EA366B',
              fontFamily: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
              fontSize: 13, fontWeight: 700, color: '#fff',
              whiteSpace: 'nowrap', textDecoration: 'none',
              background: 'transparent', transition: 'background .2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(234,54,107,0.12)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
          >
            Our programs
          </Link>

          <ShinyButton href="#contact" variant="blue" className="w-full md:w-auto flex justify-center">
            Enroll a Rebel Today
          </ShinyButton>
        </div>
      </div>
    </div>
  );
}
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
    /*
      paddingBottom: 32px → espacio hacia "The Problem".
      La galería en mobile usa negative margins para romper el padding
      del contenedor padre (px-6) y llegar a los bordes.
    */
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
        ── GALERÍA — UN SOLO BLOQUE con comportamiento responsivo ──

        Mobile (<sm):
          - overflow-x scroll horizontal
          - negative margin-x para romper el px-6 del padre y llegar al borde
          - fotos de 140px de ancho fijo, 180px alto
          - padding horizontal para que la primera foto no pegue al borde

        Desktop (sm+):
          - flex fila normal, height clamp, hover effects
      */}

      {/* Mobile: full-bleed carousel */}
      <div
        className="sm:hidden"
        style={{
          marginLeft: -24,   /* cancela px-6 (24px) del padre en page.tsx */
          marginRight: -24,
          marginBottom: 20,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          display: 'flex',
          gap: 8,
          paddingLeft: 24,
          paddingRight: 24,
          paddingBottom: 2,
        }}
      >
        <style>{`
          .hero-mobile-gallery::-webkit-scrollbar { display: none; }
        `}</style>
        <div
          className="hero-mobile-gallery"
          style={{
            display: 'flex',
            gap: 8,
            flexShrink: 0,
          }}
        >
          {profiles.map((p) => (
            <div
              key={p.src}
              style={{
                position: 'relative',
                flexShrink: 0,
                width: 140,
                height: 180,
                borderRadius: 14,
                overflow: 'hidden',
                scrollSnapAlign: 'start',
                boxShadow: '0 4px 16px rgba(0,0,0,0.35)',
              }}
            >
              <Image
                src={p.src}
                alt={p.alt}
                fill
                sizes="140px"
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop: flex fila con hover */}
      <div
        className="hidden sm:flex group"
        style={{
          alignItems: 'stretch',
          gap: 8,
          height: 'clamp(150px, 19vw, 220px)',
          marginBottom: 20,
        }}
      >
        {profiles.map((p) => (
          <div
            key={p.src}
            style={{
              position: 'relative',
              flex: '1 1 0',
              minWidth: 0,
              borderRadius: 14,
              overflow: 'hidden',
              boxShadow: '0 4px 16px rgba(0,0,0,0.35)',
              transition: 'transform .4s ease, opacity .4s ease',
            }}
            className="group-hover:opacity-40 group-hover:scale-95 hover:!opacity-100 hover:!scale-105 hover:z-20"
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(max-width: 768px) 33vw, 16vw"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
            />
          </div>
        ))}
      </div>

      {/* Tagline + CTAs */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 16,
          flexWrap: 'wrap',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
            fontSize: 15,
            lineHeight: '22px',
            color: 'rgba(249,249,249,0.82)',
            maxWidth: 260,
            margin: 0,
          }}
        >
          The fastest, most cost-effective way to get your teams using AI.
        </p>

        {/* CTAs: columna apilada en mobile, fila en desktop */}
        <div className="flex flex-col sm:flex-row w-full sm:w-auto" style={{ gap: 10 }}>
          <Link
            href="#programs"
            className="flex items-center justify-center w-full sm:w-auto"
            style={{
              height: 40,
              padding: '0 18px',
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
            Our programs
          </Link>

          <ShinyButton href="#contact" variant="blue" className="w-full sm:w-auto flex justify-center">
            Enroll a Rebel Today
          </ShinyButton>
        </div>
      </div>
    </div>
  );
}
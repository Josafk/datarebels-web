'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Linkedin, Instagram } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useScroll } from '@/components/ui/use-scroll';
import { ShinyButton } from '@/components/ui/shiny-button';

function XBrandIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" style={{ width: 16, height: 16 }}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function MorphIcon({ open }: { open: boolean }) {
  const line: React.CSSProperties = {
    position: 'absolute', left: 8, width: 20, height: 2,
    background: '#fff', borderRadius: 2, transformOrigin: 'center',
  };
  return (
    <span style={{ position: 'relative', width: 36, height: 36, display: 'flex' }}>
      <span style={{ ...line, top: open ? 17 : 11, transform: open ? 'translateY(-1px) rotate(45deg)' : 'none', transition: 'top .26s,transform .26s' }} />
      <span style={{ ...line, top: 17, opacity: open ? 0 : 1, width: open ? 0 : 20, left: open ? '50%' : 8, transition: 'opacity .16s,width .16s,left .16s' }} />
      <span style={{ ...line, top: open ? 17 : 23, transform: open ? 'translateY(-1px) rotate(-45deg)' : 'none', transition: 'top .26s,transform .26s' }} />
    </span>
  );
}

const NAV_LINKS = [
  { label: 'Solutions',    href: '#solutions'   },
  { label: 'Case studies', href: '#case-studies' },
  { label: 'Our Programs', href: '#programs'     },
  { label: 'Podcast',      href: '#podcast'      },
];

const SOCIAL = [
  { href: 'https://www.linkedin.com/company/datarebelsmx/', Icon: Linkedin,   label: 'LinkedIn'  },
  { href: 'https://www.instagram.com/datarebels.mx/',       Icon: Instagram,  label: 'Instagram' },
  { href: 'https://x.com/Eduardo_dlgs',                     Icon: XBrandIcon, label: 'X'         },
];

const backdropV = { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } };
const cardV = {
  hidden:  { opacity: 0, scale: .88, y: -4 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 340, damping: 28 } },
  exit:    { opacity: 0, scale: .88, y: -4, transition: { duration: .15, ease: 'easeIn' } },
};
const itemV = {
  hidden:  { opacity: 0, y: 6 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: .05 + i * .04, duration: .2 } }),
  exit:    (i: number) => ({ opacity: 0, y: 4, transition: { delay: i * .02, duration: .12 } }),
};

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(20);
  const close  = () => setOpen(false);
  const toggle = () => setOpen(v => !v);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/*
        ESTRATEGIA:
        - El <header> ocupa todo el ancho (left-0 right-0) pero es transparente
          y tiene pointer-events:none para no bloquear el hero debajo.
        - El contenido real está en un <div> interior que transiciona suavemente:
            • Estado TOP:    w-full, bg negro, h-14, sin border-radius, sin margen top
            • Estado SCROLL: max-w-3xl centrado, pill redondeada, mt-2, bg negro/95
        - NO usamos transform ni translate — todo es max-width + margin + border-radius
          para evitar texto cortado o solapado.
      */}
      <header
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          zIndex: 50,
          display: 'flex', justifyContent: 'center', alignItems: 'flex-start',
          background: 'transparent',
          pointerEvents: 'none',
          // Reservamos espacio para la píldora con mt-2
          paddingTop: scrolled ? 8 : 0,
          transition: 'padding-top .4s ease',
        }}
      >
        <div
          style={{
            // Ancho: full en top, fijo en scroll
            width: scrolled ? 'min(840px, calc(100vw - 48px))' : '100%',
            // Alto: un poco más compacto en scroll
            height: scrolled ? 48 : 56,
            // Fondo siempre negro, sin transparencia
            background: '#000',
            // Bordes: pill en scroll, recto en top
            borderRadius: scrolled ? 999 : 0,
            // Borde sutil solo en scroll
            border: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
            // Sombra suave solo en scroll
            boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.5)' : 'none',
            // Padding lateral — más generoso en top para no comprimir
            paddingLeft: scrolled ? 20 : 40,
            paddingRight: scrolled ? 16 : 40,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            // Suavizar TODO de una vez
            transition: 'width .4s ease, height .4s ease, border-radius .4s ease, padding .4s ease, box-shadow .4s ease, border-color .4s ease',
            pointerEvents: 'auto',
            // Prevenir overflow del texto
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ flexShrink: 0, display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-white.svg"
              alt="Data Rebels"
              style={{
                height: scrolled ? 15 : 18,
                width: 'auto',
                transition: 'height .4s ease',
                display: 'block',
              }}
            />
          </Link>

          {/* Desktop nav — oculto en mobile */}
          <nav
            className="hidden lg:flex"
            style={{ alignItems: 'center', gap: scrolled ? 20 : 32, transition: 'gap .4s ease' }}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{
                  fontFamily: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
                  fontSize: scrolled ? 13 : 16,
                  fontWeight: 600,
                  lineHeight: '24px',
                  color: '#E5E7FB',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap',
                  transition: 'color .15s, font-size .4s ease',
                  flexShrink: 0,
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#E5E7FB'; }}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden lg:block" style={{ flexShrink: 0 }}>
            <ShinyButton href="#contact" variant="blue">
              Explore Solutions <ArrowRight style={{ width: 14, height: 14 }} />
            </ShinyButton>
          </div>

          {/* Mobile trigger */}
          <div className="lg:hidden" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{
              fontSize: 11, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
              color: open ? 'rgba(255,255,255,0.45)' : '#fff', transition: 'color .18s',
            }}>
              {open ? 'Close' : 'Menu'}
            </span>
            <button type="button" aria-label={open ? 'Cerrar' : 'Menú'} onClick={toggle}
              style={{ width: 34, height: 34, background: '#1330F4', borderRadius: 8, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}
            >
              <MorphIcon open={open} />
            </button>
          </div>
        </div>

        {/* Mobile floating card */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="card"
              variants={cardV} initial="hidden" animate="visible" exit="exit"
              style={{
                transformOrigin: 'top right',
                position: 'absolute',
                top: scrolled ? 64 : 60,
                right: 24,
                width: 'min(300px, calc(100vw - 48px))',
                background: '#1a1a1a',
                borderRadius: 20,
                overflow: 'hidden',
                boxShadow: '0 0 0 1px rgba(255,255,255,0.07), 0 16px 48px rgba(0,0,0,0.75)',
                pointerEvents: 'auto',
              }}
              role="dialog" aria-modal aria-label="Navegación"
            >
              <nav style={{ display: 'flex', flexDirection: 'column', padding: '20px 24px 8px' }}>
                {NAV_LINKS.map((link, i) => (
                  <motion.div key={link.label} custom={i} variants={itemV} initial="hidden" animate="visible" exit="exit">
                    <Link href={link.href} onClick={close}
                      style={{ display: 'block', padding: '10px 0', fontSize: 20, fontWeight: 400, lineHeight: '28px', color: '#fff', textDecoration: 'none' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#c4b5fd'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                    >{link.label}</Link>
                  </motion.div>
                ))}
                <motion.div custom={NAV_LINKS.length} variants={itemV} initial="hidden" animate="visible" exit="exit">
                  <Link href="#contact" onClick={close}
                    style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', fontSize: 20, fontWeight: 400, lineHeight: '28px', color: '#a78bfa', textDecoration: 'none' }}
                  >
                    Get in touch
                    <span style={{ width: 30, height: 30, borderRadius: '50%', background: '#1330F4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <ArrowUpRight style={{ width: 14, height: 14, color: '#fff' }} />
                    </span>
                  </Link>
                </motion.div>
              </nav>

              <div style={{ margin: '0 24px', height: 1, background: 'rgba(255,255,255,0.08)' }} />

              <motion.div custom={NAV_LINKS.length + 1} variants={itemV} initial="hidden" animate="visible" exit="exit"
                style={{ padding: '14px 24px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}
              >
                <div style={{ display: 'flex', gap: 8 }}>
                  {SOCIAL.map(({ href, Icon, label }) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      style={{ width: 36, height: 36, borderRadius: 8, background: 'linear-gradient(180deg,#B282FF,#9038FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', opacity: 1, transition: 'opacity .15s', textDecoration: 'none' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '.75'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
                <p style={{ fontSize: 9, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.28)', margin: 0 }}>
                  ©2026 DATA REBELS. ALL RIGHTS RESERVED
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Backdrop mobile */}
      <AnimatePresence>
        {open && (
          <motion.div key="bd"
            variants={backdropV} initial="hidden" animate="visible" exit="exit"
            transition={{ duration: .18 }}
            style={{ position: 'fixed', inset: 0, zIndex: 49, background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)' }}
            className="lg:hidden"
            onClick={close} aria-hidden
          />
        )}
      </AnimatePresence>
    </>
  );
}
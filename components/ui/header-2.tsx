'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Linkedin, Instagram } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useScroll } from '@/components/ui/use-scroll';
import { ShinyButton } from '@/components/ui/shiny-button';

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 16, height: 16 }}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function HamburgerIcon({ open }: { open: boolean }) {
  const s: React.CSSProperties = {
    position: 'absolute', left: 7, width: 18, height: 2,
    background: '#fff', borderRadius: 2, transformOrigin: 'center',
  };
  return (
    <span style={{ position: 'relative', width: 32, height: 32, display: 'flex' }}>
      <span style={{ ...s, top: open ? 15 : 9,  transform: open ? 'rotate(45deg)'  : 'none', transition: 'top .22s, transform .22s' }} />
      <span style={{ ...s, top: 15, opacity: open ? 0 : 1, transition: 'opacity .15s' }} />
      <span style={{ ...s, top: open ? 15 : 21, transform: open ? 'rotate(-45deg)' : 'none', transition: 'top .22s, transform .22s' }} />
    </span>
  );
}

const NAV = [
  { label: 'Solutions',    href: '#solutions'   },
  { label: 'Case studies', href: '#case-studies' },
  { label: 'Our Programs', href: '#programs'     },
  { label: 'Podcast',      href: '#podcast'      },
];

const SOCIAL = [
  { href: 'https://www.linkedin.com/company/datarebelsmx/', Icon: Linkedin,  label: 'LinkedIn'  },
  { href: 'https://www.instagram.com/datarebels.mx/',       Icon: Instagram, label: 'Instagram' },
  { href: 'https://x.com/Eduardo_dlgs',                     Icon: XIcon,     label: 'X'         },
];

const cardV = {
  hidden:  { opacity: 0, scale: .9,  y: -6 },
  visible: { opacity: 1, scale: 1,   y: 0,  transition: { type: 'spring', stiffness: 320, damping: 26 } },
  exit:    { opacity: 0, scale: .92, y: -4, transition: { duration: .15 } },
};
const itemV = {
  hidden:  { opacity: 0, y: 5 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: .04 + i * .04 } }),
  exit:    (i: number) => ({ opacity: 0, y: 3, transition: { delay: i * .02, duration: .1 } }),
};

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(20);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header
        id="site-header"
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
          height: 80,
          background: '#000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          id="header-inner"
          style={{
            width: '100%',
            maxWidth: scrolled ? 860 : 1280,
            height: scrolled ? 48 : 80,
            background: scrolled ? '#000' : 'transparent',
            borderRadius: scrolled ? 9999 : 0,
            border: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
            boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.5)' : 'none',
            padding: scrolled ? '0 20px' : '0 40px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            transition: 'max-width .38s ease, height .38s ease, border-radius .38s ease, padding .38s ease, box-shadow .38s ease',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ flexShrink: 0, textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-white.svg" alt="Data Rebels"
              style={{ height: scrolled ? 16 : 20, width: 'auto', transition: 'height .38s ease' }}
            />
          </Link>

          {/* Nav DESKTOP */}
          <nav id="header-nav" style={{ display: 'flex', alignItems: 'center', gap: scrolled ? 22 : 36, transition: 'gap .38s ease' }}>
            {NAV.map(({ label, href }) => (
              <Link key={href} href={href}
                style={{
                  fontFamily: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
                  fontSize: scrolled ? 13 : 16, fontWeight: 600,
                  color: '#E5E7FB', textDecoration: 'none',
                  whiteSpace: 'nowrap', flexShrink: 0,
                  transition: 'color .15s, font-size .38s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#E5E7FB'; }}
              >{label}</Link>
            ))}
          </nav>

          {/* CTA DESKTOP */}
          <div id="header-cta" style={{ flexShrink: 0 }}>
            <ShinyButton href="#contact" variant="blue">
              Explore Solutions <ArrowRight style={{ width: 14, height: 14 }} />
            </ShinyButton>
          </div>

          {/* Hamburger MOBILE */}
          <div id="header-hamburger" style={{ alignItems: 'center', gap: 8 }}>
            <span style={{
              fontSize: 11, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase',
              color: open ? 'rgba(255,255,255,0.45)' : '#fff', transition: 'color .18s',
            }}>
              {open ? 'Close' : 'Menu'}
            </span>
            <button type="button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setOpen(v => !v)}
              style={{
                width: 34, height: 34, borderRadius: 8, background: '#1330F4',
                border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <HamburgerIcon open={open} />
            </button>
          </div>
        </div>

        {/* Mobile card */}
        <AnimatePresence>
          {open && (
            <motion.div key="card" id="mobile-card"
              variants={cardV} initial="hidden" animate="visible" exit="exit"
              style={{
                transformOrigin: 'top right',
                position: 'absolute', top: 88, right: 20,
                width: 'min(300px, calc(100vw - 40px))',
                background: '#1a1a1a', borderRadius: 20, overflow: 'hidden',
                boxShadow: '0 0 0 1px rgba(255,255,255,0.07), 0 20px 60px rgba(0,0,0,0.8)',
                zIndex: 60,
              }}
            >
              <nav style={{ display: 'flex', flexDirection: 'column', padding: '20px 24px 8px' }}>
                {NAV.map((link, i) => (
                  <motion.div key={link.label} custom={i} variants={itemV} initial="hidden" animate="visible" exit="exit">
                    <Link href={link.href} onClick={() => setOpen(false)}
                      style={{ display: 'block', padding: '10px 0', fontSize: 20, fontWeight: 400, color: '#fff', textDecoration: 'none' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#c4b5fd'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#fff'; }}
                    >{link.label}</Link>
                  </motion.div>
                ))}
                <motion.div custom={NAV.length} variants={itemV} initial="hidden" animate="visible" exit="exit">
                  <Link href="#contact" onClick={() => setOpen(false)}
                    style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', fontSize: 20, color: '#a78bfa', textDecoration: 'none' }}
                  >
                    Get in touch
                    <span style={{ width: 28, height: 28, borderRadius: '50%', background: '#1330F4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <ArrowUpRight style={{ width: 13, height: 13, color: '#fff' }} />
                    </span>
                  </Link>
                </motion.div>
              </nav>
              <div style={{ margin: '0 24px', height: 1, background: 'rgba(255,255,255,0.08)' }} />
              <motion.div custom={NAV.length + 1} variants={itemV} initial="hidden" animate="visible" exit="exit"
                style={{ padding: '14px 24px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}
              >
                <div style={{ display: 'flex', gap: 8 }}>
                  {SOCIAL.map(({ href, Icon, label }) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      style={{ width: 34, height: 34, borderRadius: 8, background: 'linear-gradient(180deg,#B282FF,#9038FF)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none' }}
                    ><Icon /></a>
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

      {/* Backdrop */}
      <AnimatePresence>
        {open && (
          <motion.div key="bd" id="mobile-backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: .18 }}
            style={{ position: 'fixed', inset: 0, zIndex: 49, background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(4px)' }}
            onClick={() => setOpen(false)} aria-hidden
          />
        )}
      </AnimatePresence>

      {/*
        Toda la lógica responsiva en un solo bloque CSS.
        Los IDs son más específicos que las clases Tailwind → no hay conflicto.
      */}
      <style>{`
        /* DESKTOP ≥1024px: nav + CTA visibles, hamburger oculto */
        @media (min-width: 1024px) {
          #header-hamburger { display: none !important; }
          #header-nav       { display: flex !important; }
          #header-cta       { display: block !important; }
        }

        /* MOBILE <1024px: hamburger visible, nav + CTA ocultos, sin píldora */
        @media (max-width: 1023px) {
          #header-hamburger { display: flex !important; }
          #header-nav       { display: none !important; }
          #header-cta       { display: none !important; }
          #mobile-card      { display: block !important; }

          /* Forzar estado plano — nunca pill en mobile */
          #header-inner {
            max-width: 100%  !important;
            height: 80px     !important;
            border-radius: 0 !important;
            border: none     !important;
            box-shadow: none !important;
            padding: 0 24px  !important;
          }
        }
      `}</style>
    </>
  );
}
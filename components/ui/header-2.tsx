'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Linkedin, Instagram } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { useScroll } from '@/components/ui/use-scroll';
import { ShinyButton } from '@/components/ui/shiny-button';

function XBrandIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
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

/* Nav link: Inter Semibold 16px/24px #E5E7FB → white on hover — NO background on hover */
const NavLink = ({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) => (
  <Link
    href={href}
    onClick={onClick}
    style={{
      fontFamily: 'var(--font-inter), ui-sans-serif, system-ui, sans-serif',
      fontSize: 16,
      fontWeight: 600,
      lineHeight: '24px',
      color: '#E5E7FB',
      textDecoration: 'none',
      whiteSpace: 'nowrap',
      transition: 'color .15s',
      background: 'none',
      padding: 0,
      border: 'none',
    }}
    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = '#ffffff'; }}
    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = '#E5E7FB'; }}
  >
    {label}
  </Link>
);

const backdropV = { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } };
const cardV = {
  hidden:  { opacity: 0, scale: .84, y: -6 },
  visible: { opacity: 1, scale: 1,   y: 0, transition: { type: 'spring', stiffness: 360, damping: 26 } },
  exit:    { opacity: 0, scale: .84, y: -6, transition: { duration: .16, ease: 'easeIn' } },
};
const itemV = {
  hidden:  { opacity: 0, y: 8 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: .06 + i * .05, duration: .22 } }),
  exit:    (i: number) => ({ opacity: 0, y: 6, transition: { delay: i * .025,      duration: .14 } }),
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
        ─── HEADER ───────────────────────────────────────────────────
        Estado inicial (top of page):
          • full-width, negro sólido, h-14, logo grande

        Al hacer scroll (scrolled = true):
          • se convierte en píldora centrada de ancho fijo
          • borde sutil + sombra
          • logo levemente más pequeño

        La transición se hace con max-width + border-radius en el
        wrapper interior, no en el <header> fixed.
        ─────────────────────────────────────────────────────────────
      */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center"
        style={{ background: 'transparent', pointerEvents: 'none' }}>

        {/* Pill wrapper — este es el que crece/encoge */}
        <div
          className={cn(
            'flex items-center justify-between',
            'transition-all duration-300 ease-out',
            'pointer-events-auto',
            scrolled
              ? [
                  // Píldora compacta centrada
                  'mt-2 px-4 rounded-full',
                  'h-11',
                  'w-auto max-w-[780px] min-w-[600px]',
                  'bg-black/95 backdrop-blur-md',
                  'border border-white/10',
                  'shadow-[0_4px_24px_rgba(0,0,0,0.6)]',
                ].join(' ')
              : [
                  // Barra completa
                  'mt-0 px-8 md:px-12 rounded-none',
                  'h-14',
                  'w-full max-w-none',
                  'bg-black',
                ].join(' '),
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo-white.svg"
              alt="Data Rebels"
              style={{
                height: scrolled ? 16 : 19,
                width: 'auto',
                transition: 'height .3s ease',
              }}
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {NAV_LINKS.map(l => <NavLink key={l.href} {...l} />)}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block flex-shrink-0">
            <ShinyButton href="#contact" variant="blue">
              Explore Solutions <ArrowRight className="w-3.5 h-3.5" />
            </ShinyButton>
          </div>

          {/* Mobile trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: open ? 'rgba(255,255,255,0.5)' : '#fff', transition: 'color .18s' }}>
              {open ? 'Close' : 'Menu'}
            </span>
            <button
              type="button"
              aria-label={open ? 'Cerrar' : 'Menú'}
              onClick={toggle}
              style={{ width: 36, height: 36, background: '#1330F4', borderRadius: 8, border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
            >
              <MorphIcon open={open} />
            </button>
          </div>
        </div>

        {/* Mobile floating card — anchored to pill bottom */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="card"
              variants={cardV} initial="hidden" animate="visible" exit="exit"
              style={{
                transformOrigin: 'top right',
                position: 'absolute',
                top: scrolled ? 52 : 56,
                right: 24,
                boxShadow: '0 0 0 1px rgba(255,255,255,0.08),0 20px 60px rgba(0,0,0,0.8)',
              }}
              className="w-[min(320px,calc(100vw-48px))] rounded-2xl bg-[#1a1a1a] flex flex-col overflow-hidden pointer-events-auto"
              role="dialog" aria-modal aria-label="Navegación"
            >
              <nav className="flex flex-col px-6 pt-5 pb-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.div key={link.label} custom={i} variants={itemV} initial="hidden" animate="visible" exit="exit">
                    <Link href={link.href} onClick={close}
                      className="block py-2.5 text-white hover:text-violet-300 transition-colors"
                      style={{ fontSize: 22, fontWeight: 400, lineHeight: '30px' }}
                    >{link.label}</Link>
                  </motion.div>
                ))}
                <motion.div custom={NAV_LINKS.length} variants={itemV} initial="hidden" animate="visible" exit="exit">
                  <Link href="#contact" onClick={close}
                    className="flex items-center gap-2 py-2.5 text-violet-400 hover:text-violet-300 transition-colors"
                    style={{ fontSize: 22, fontWeight: 400, lineHeight: '30px' }}
                  >
                    Get in touch
                    <span style={{ width: 32, height: 32, borderRadius: '50%', background: '#1330F4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <ArrowUpRight style={{ width: 16, height: 16, color: '#fff' }} strokeWidth={2.5} />
                    </span>
                  </Link>
                </motion.div>
              </nav>

              <div style={{ margin: '0 24px', height: 1, background: 'rgba(255,255,255,0.1)' }} />

              <motion.div custom={NAV_LINKS.length + 1} variants={itemV} initial="hidden" animate="visible" exit="exit"
                className="px-6 pt-3.5 pb-4 flex flex-col gap-2.5"
              >
                <div className="flex gap-2.5">
                  {SOCIAL.map(({ href, Icon, label }) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-white hover:opacity-80 transition-opacity"
                      style={{ background: 'linear-gradient(180deg,#B282FF,#9038FF)' }}
                    ><Icon className="w-4 h-4" /></a>
                  ))}
                </div>
                <p style={{ fontSize: 10, fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
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
          <motion.div key="bd" variants={backdropV} initial="hidden" animate="visible" exit="exit"
            transition={{ duration: .2 }}
            className="fixed inset-0 z-[49] bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={close} aria-hidden
          />
        )}
      </AnimatePresence>
    </>
  );
}
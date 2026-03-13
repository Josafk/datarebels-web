'use client';

import React from 'react';
import Image from 'next/image';
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
  const base: React.CSSProperties = {
    position: 'absolute',
    left: '8px',
    width: '20px',
    height: '2px',
    backgroundColor: '#ffffff',
    borderRadius: '2px',
    transformOrigin: 'center',
  };
  return (
    <span style={{ position: 'relative', width: '36px', height: '36px', display: 'flex' }}>
      <span style={{
        ...base, top: open ? '17px' : '11px',
        transform: open ? 'translateY(-1px) rotate(45deg)' : 'none',
        transition: 'top .26s ease, transform .26s ease',
      }} />
      <span style={{
        ...base, top: '17px',
        opacity: open ? 0 : 1,
        width: open ? '0' : '20px',
        left: open ? '50%' : '8px',
        transition: 'opacity .16s ease, width .16s ease, left .16s ease',
      }} />
      <span style={{
        ...base, top: open ? '17px' : '23px',
        transform: open ? 'translateY(-1px) rotate(-45deg)' : 'none',
        transition: 'top .26s ease, transform .26s ease',
      }} />
    </span>
  );
}

function BlueBtn({ onClick, children, ariaLabel }: {
  onClick: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <button type="button" aria-label={ariaLabel} onClick={onClick}
      style={{
        width: '36px', height: '36px', backgroundColor: '#1330F4',
        borderRadius: '8px', border: 'none', display: 'flex',
        alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        cursor: 'pointer', transition: 'opacity .18s',
      }}
      onMouseOver={e => { (e.currentTarget as HTMLElement).style.opacity = '.78'; }}
      onMouseOut={e  => { (e.currentTarget as HTMLElement).style.opacity = '1'; }}
    >
      {children}
    </button>
  );
}

const navLinkBase = 'font-sans font-semibold text-base leading-6 text-white/70 hover:text-white transition-colors';

const links = [
  { label: 'Solutions',    href: '#solutions'    },
  { label: 'Case studies', href: '#case-studies'  },
  { label: 'Our Programs', href: '#programs'      },
  { label: 'Podcast',      href: '#podcast'       },
];

const socialLinks = [
  { href: 'https://www.linkedin.com/company/datarebelsmx/', icon: Linkedin,   label: 'LinkedIn'    },
  { href: 'https://www.instagram.com/datarebels.mx/',       icon: Instagram,  label: 'Instagram'   },
  { href: 'https://x.com/Eduardo_dlgs',                     icon: XBrandIcon, label: 'X (Twitter)' },
];

const labelSt: React.CSSProperties = {
  fontSize: '12px', fontWeight: 600, lineHeight: '16px',
  letterSpacing: '2px', textTransform: 'uppercase',
};
const copyrightSt: React.CSSProperties = {
  fontSize: '10px', fontWeight: 600, lineHeight: '16px',
  letterSpacing: '2px', textTransform: 'uppercase',
};

const backdropV = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
  exit:    { opacity: 0 },
};

const CARD_TOP = 64;

const cardV = {
  hidden:  { opacity: 0, scale: 0.82, y: -4 },
  visible: { opacity: 1, scale: 1, y: 0,
    transition: { type: 'spring', stiffness: 380, damping: 28, mass: 0.9 } },
  exit: { opacity: 0, scale: 0.82, y: -4,
    transition: { duration: .18, ease: 'easeIn' } },
};

const itemV = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: .07 + i * .06, duration: .24, ease: 'easeOut' },
  }),
  exit: (i: number) => ({
    opacity: 0, y: 8,
    transition: { delay: i * .03, duration: .15, ease: 'easeIn' },
  }),
};

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(10);
  const close  = () => setOpen(false);
  const toggle = () => setOpen(v => !v);

  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className={cn(
        'fixed top-0 left-1/2 z-50 w-full -translate-x-1/2',
        'transition-all duration-300 ease-out',
        'mx-auto max-w-5xl',
        // Siempre negro al 92% — nunca transparente
        'bg-black/92 backdrop-blur-md',
        // Al hacer scroll: borde sutil + sombra, se estrecha en lg
        scrolled && !open
          ? 'lg:max-w-4xl lg:rounded-b-xl border-b border-white/10 shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
          : 'border-b border-white/5',
      )}>
        <nav className={cn(
          'flex h-16 w-full items-center justify-between px-6 md:px-10',
          'transition-all duration-300 ease-out',
          scrolled && 'lg:px-6',
        )}>
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-white.svg" alt="Data Rebels" className="h-5 w-auto" />
          </Link>

          {/* Desktop: links + CTA */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <Link key={l.href} href={l.href} className={navLinkBase}>{l.label}</Link>
            ))}
            {/* ShinyButton en header — padding reducido para que sea compacto */}
            <ShinyButton href="#contact" variant="blue" className="!h-10 !text-sm">
              Explore Solutions <ArrowRight className="w-4 h-4 ml-1" />
            </ShinyButton>
          </div>

          {/* Mobile trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="relative" style={{ width: '44px', height: '16px' }}>
              <span style={{
                ...labelSt, color: '#fff',
                opacity: open ? 0 : 1, transition: 'opacity .18s ease',
                pointerEvents: 'none', position: 'absolute', right: 0, top: 0,
              }}>Menu</span>
              <span style={{
                ...labelSt, color: 'rgba(255,255,255,0.5)',
                opacity: open ? 1 : 0, transition: 'opacity .18s ease',
                pointerEvents: 'none', position: 'absolute', right: 0, top: 0,
              }}>Close</span>
            </div>
            <BlueBtn onClick={toggle} ariaLabel={open ? 'Cerrar menú' : 'Abrir menú'}>
              <MorphIcon open={open} />
            </BlueBtn>
          </div>
        </nav>

        {/* Floating card */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="card"
              variants={cardV} initial="hidden" animate="visible" exit="exit"
              style={{
                transformOrigin: 'top right',
                top: `${CARD_TOP}px`,
                boxShadow: '0 0 0 1px rgba(255,255,255,0.08), 0 20px 60px rgba(0,0,0,0.75)',
              }}
              className={cn(
                'absolute z-10 lg:hidden flex flex-col overflow-hidden',
                'right-[24px] md:right-[40px]',
                'w-[min(340px,calc(100vw-64px))]',
                'rounded-2xl bg-[#1a1a1a]',
              )}
              role="dialog" aria-modal aria-label="Menú de navegación"
            >
              <nav className="flex flex-col px-6 pt-5 pb-2">
                {links.map((link, i) => (
                  <motion.div key={link.label} custom={i}
                    variants={itemV} initial="hidden" animate="visible" exit="exit">
                    <Link href={link.href} onClick={close}
                      className="text-white hover:text-violet-300 transition-colors block py-[10px]"
                      style={{ fontSize: '24px', fontWeight: 400, lineHeight: '32px' }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div custom={links.length} variants={itemV}
                  initial="hidden" animate="visible" exit="exit" className="mb-1">
                  <Link href="#contact" onClick={close}
                    className="flex items-center gap-3 text-violet-400 hover:text-violet-300 transition-colors py-[10px]"
                    style={{ fontSize: '24px', fontWeight: 400, lineHeight: '32px' }}
                  >
                    Get in touch
                    <span style={{
                      width: '36px', height: '36px', borderRadius: '50%',
                      backgroundColor: '#1330F4', flexShrink: 0,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <ArrowUpRight style={{ width: '18px', height: '18px', color: '#fff' }} strokeWidth={2.5} />
                    </span>
                  </Link>
                </motion.div>
              </nav>

              <div style={{ margin: '0 24px', height: '1px', background: 'rgba(255,255,255,0.1)' }} />

              <motion.div custom={links.length + 1} variants={itemV}
                initial="hidden" animate="visible" exit="exit"
                className="px-6 pt-4 pb-5 flex flex-col gap-3"
              >
                <div className="flex gap-3">
                  {socialLinks.map(s => (
                    <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer"
                      aria-label={s.label}
                      className="flex items-center justify-center w-10 h-10 rounded-lg text-white transition-opacity hover:opacity-80"
                      style={{ background: 'linear-gradient(180deg, #B282FF 0%, #9038FF 100%)' }}
                    >
                      <s.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
                <p style={{ ...copyrightSt, color: 'rgba(255,255,255,0.3)' }}>
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
          <motion.div key="backdrop"
            variants={backdropV} initial="hidden" animate="visible" exit="exit"
            transition={{ duration: .2 }}
            className="fixed inset-0 z-[49] bg-black/55 backdrop-blur-sm lg:hidden"
            onClick={close} aria-hidden
          />
        )}
      </AnimatePresence>
    </>
  );
}
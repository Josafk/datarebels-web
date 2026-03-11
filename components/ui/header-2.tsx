'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Linkedin, Instagram } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { useScroll } from '@/components/ui/use-scroll';
import { ShinyButton } from '@/components/ui/shiny-button';

/* ─── Icono X social (Twitter) ─── */
function XBrandIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────────
   MORPH ICON — 3 líneas animadas → X
   Contenedor: 36 × 36 px
   Líneas: 20 × 2 px, left: 8 px ( = (36-20)/2 )

   Estado hamburguesa: tops 11 / 17 / 23 px
   Estado X abierto:   top 17 px (centro), ±45°
───────────────────────────────────────────────── */
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
      {/* Línea superior */}
      <span style={{
        ...base,
        top: open ? '17px' : '11px',
        transform: open ? 'translateY(-1px) rotate(45deg)' : 'none',
        transition: 'top .26s ease, transform .26s ease',
      }} />
      {/* Línea central — desaparece */}
      <span style={{
        ...base,
        top: '17px',
        opacity: open ? 0 : 1,
        width: open ? '0' : '20px',
        left: open ? '50%' : '8px',
        transition: 'opacity .16s ease, width .16s ease, left .16s ease',
      }} />
      {/* Línea inferior */}
      <span style={{
        ...base,
        top: open ? '17px' : '23px',
        transform: open ? 'translateY(-1px) rotate(-45deg)' : 'none',
        transition: 'top .26s ease, transform .26s ease',
      }} />
    </span>
  );
}

/* ─── Botón azul 36×36 reutilizable ─── */
function BlueBtn({
  onClick, children, ariaLabel,
}: {
  onClick: () => void;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      onClick={onClick}
      style={{
        width: '36px', height: '36px',
        backgroundColor: '#1330F4',
        borderRadius: '8px',
        border: 'none',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
        cursor: 'pointer',
        transition: 'opacity .18s',
      }}
      onMouseOver={e => { (e.currentTarget as HTMLElement).style.opacity = '.78'; }}
      onMouseOut={e  => { (e.currentTarget as HTMLElement).style.opacity = '1';   }}
    >
      {children}
    </button>
  );
}

/* XClose eliminado — el card ya no tiene header propio */

/* ─── Datos ─── */
const navLinkBase =
  'font-sans font-semibold text-base leading-6 text-fs-200 hover:text-white transition-colors';

const links = [
  { label: 'Solutions',    href: '#solutions'   },
  { label: 'Case studies', href: '#case-studies' },
  { label: 'Our Programs', href: '#programs'     },
  { label: 'Podcast',      href: '#podcast'      },
];

const socialLinks = [
  { href: 'https://www.linkedin.com/company/datarebelsmx/', icon: Linkedin,   label: 'LinkedIn'   },
  { href: 'https://www.instagram.com/datarebels.mx/',       icon: Instagram,  label: 'Instagram'  },
  { href: 'https://x.com/Eduardo_dlgs',                     icon: XBrandIcon, label: 'X (Twitter)'},
];

/* ─── Design System tipografía ─── */
const labelSt: React.CSSProperties = {
  fontSize: '12px', fontWeight: 600,
  lineHeight: '16px', letterSpacing: '2px', textTransform: 'uppercase',
};
const copyrightSt: React.CSSProperties = {
  fontSize: '10px', fontWeight: 600,
  lineHeight: '16px', letterSpacing: '2px', textTransform: 'uppercase',
};

/* ─── Framer Motion variants ─── */
const backdropV = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
  exit:    { opacity: 0 },
};

/*
  GEOMETRÍA — card flotante sin header propio
  ────────────────────────────────────────────
  Header nav h-16 = 64px  →  card.top = 64px (aparece justo bajo el header bar)

  Card right edge = nav padding right (el card se alinea con el borde del trigger):
    mobile  (< md):  px-6  = 24px  →  card right = 24px
    tablet  (md+):   px-10 = 40px  →  card right = 40px

  El header gestiona MENU↔CLOSE y hamburguesa↔X in-place.
  El card solo contiene los nav links y el footer.
*/
const CARD_TOP = 64; // px — flush con el borde inferior del header bar

const cardV = {
  hidden:  { opacity: 0, scale: 0.82, y: -4 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: 'spring', stiffness: 380, damping: 28, mass: 0.9 },
  },
  exit:    { opacity: 0, scale: 0.82, y: -4,
    transition: { duration: .18, ease: 'easeIn' } },
};

const itemV = {
  hidden:  { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: .07 + i * .06, duration: .24, ease: 'easeOut' },
  }),
  exit: (i: number) => ({
    opacity: 0, y: 8,
    transition: { delay: i * .03, duration: .15, ease: 'easeIn' },
  }),
};

/* ═══════════════════════════════════════
   COMPONENTE PRINCIPAL
═══════════════════════════════════════ */
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
      {/* ══════════ HEADER ══════════ */}
      <header className={cn(
        'fixed top-0 left-1/2 z-50 w-full -translate-x-1/2',
        'border-b border-transparent transition-all duration-300 ease-out',
        'mx-auto max-w-5xl bg-black lg:rounded-b-md lg:border lg:border-transparent',
        {
          'border-white/10 bg-black/98 backdrop-blur-lg lg:max-w-4xl lg:border-white/15 lg:shadow-[0_4px_24px_rgba(0,0,0,0.4)]':
            scrolled && !open,
          'bg-black/98 backdrop-blur-md': open,
        },
      )}>
        {/* md:px-10 = mismo padding lateral que el resto del sitio en tablet */}
        <nav className={cn(
          'flex h-16 w-full items-center justify-between px-6 md:px-10',
          'transition-all duration-300 ease-out',
          { 'lg:px-4': scrolled },
        )}>
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo-white.svg" alt="Data Rebels"
              width={130} height={20} className="h-5 w-auto" priority />
          </Link>

          {/* Desktop: links + CTA */}
          <div className="hidden lg:flex items-center gap-8">
            {links.map(l => (
              <Link key={l.href} href={l.href} className={navLinkBase}>{l.label}</Link>
            ))}
            <ShinyButton href="#contact" variant="blue">
              Explore Solutions <ArrowRight className="w-4 h-4" />
            </ShinyButton>
          </div>

          {/*
            TRIGGER (<lg) — MENU↔CLOSE in-place
            Las dos etiquetas se superponen con absolute y hacen cross-fade.
            El botón azul permanece estático; solo el icono interno morfa.
          */}
          <div className="lg:hidden flex items-center gap-2">
            {/* Label cross-fade: MENU (cerrado) ↔ CLOSE (abierto) */}
            <div className="relative" style={{ width: '44px', height: '16px' }}>
              <span style={{
                ...labelSt, color: '#fff',
                opacity: open ? 0 : 1,
                transition: 'opacity .18s ease',
                pointerEvents: 'none',
                position: 'absolute', right: 0, top: 0,
              }}>Menu</span>
              <span style={{
                ...labelSt, color: 'rgba(255,255,255,0.5)',
                opacity: open ? 1 : 0,
                transition: 'opacity .18s ease',
                pointerEvents: 'none',
                position: 'absolute', right: 0, top: 0,
              }}>Close</span>
            </div>

            <BlueBtn onClick={toggle} ariaLabel={open ? 'Cerrar menú' : 'Abrir menú'}>
              <MorphIcon open={open} />
            </BlueBtn>
          </div>
        </nav>

        {/*
          ══════════ FLOATING CARD ══════════
          position: absolute dentro del <header> (position: fixed) → mismo containing block.

          Geometría (sin header row propio):
            card.top = 64px  →  aparece flush bajo el header bar (h-16)
            card.right = nav padding right  →  borde derecho del card = borde del trigger
              mobile  (< md):  right = 24px  (= px-6)
              tablet  (md+):   right = 40px  (= px-10)

          MENU↔CLOSE lo gestiona el header trigger — el card solo contiene links + footer.
        */}
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
                'right-[24px] md:right-[40px]',   // alinea borde card con borde del trigger
                'w-[min(340px,calc(100vw-64px))]', // safe area: evita overflow en cualquier viewport
                'rounded-2xl',
                'bg-[#1a1a1a]',
              )}
              role="dialog" aria-modal aria-label="Menú de navegación"
            >
              {/* NAV LINKS con stagger — el card empieza directamente aquí */}
              <nav className="flex flex-col px-6 pt-5 pb-2">
                {links.map((link, i) => (
                  <motion.div key={link.label} custom={i}
                    variants={itemV} initial="hidden" animate="visible" exit="exit">
                    <Link
                      href={link.href} onClick={close}
                      className="text-white hover:text-violet-300 transition-colors block py-[10px]"
                      style={{ fontSize: '24px', fontWeight: 400, lineHeight: '32px', letterSpacing: 0 }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Get in touch */}
                <motion.div custom={links.length} variants={itemV}
                  initial="hidden" animate="visible" exit="exit" className="mb-1">
                  <Link
                    href="#contact" onClick={close}
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

              {/* Divider */}
              <div style={{ margin: '0 24px', height: '1px', background: 'rgba(255,255,255,0.1)' }} />

              {/* Footer: social + copyright */}
              <motion.div
                custom={links.length + 1} variants={itemV}
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

      {/* ══════════ BACKDROP (fixed al viewport, z bajo el header) ══════════ */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="backdrop"
            variants={backdropV} initial="hidden" animate="visible" exit="exit"
            transition={{ duration: .2 }}
            className="fixed inset-0 z-[49] bg-black/55 backdrop-blur-sm lg:hidden"
            onClick={close}
            aria-hidden
          />
        )}
      </AnimatePresence>
    </>
  );
}

export const WordmarkIcon = (props: React.ComponentProps<'svg'>) => (
  <svg viewBox="0 0 84 24" fill="currentColor" {...props}>
    <path d="M45.035 23.984c-1.34-.062-2.566-.441-3.777-1.16-1.938-1.152-3.465-3.187-4.02-5.36-.199-.784-.238-1.128-.234-2.058 0-.691.008-.87.062-1.207.23-1.5.852-2.883 1.852-4.144.297-.371 1.023-1.09 1.41-1.387 1.399-1.082 2.84-1.68 4.406-1.816.536-.047 1.528-.02 2.047.054 1.227.184 2.227.543 3.106 1.121 1.277.84 2.5 2.184 3.367 3.7.098.168.172.308.172.312-.004 0-1.047.723-2.32 1.598l-2.711 1.867c-.61.422-2.91 2.008-2.993 2.062l-.074.047-1-1.574c-.55-.867-1.008-1.594-1.012-1.61-.007-.019.922-.648 2.188-1.476 1.215-.793 2.2-1.453 2.191-1.46-.02-.032-.508-.27-.691-.34a5 5 0 0 0-.465-.13c-.371-.09-1.105-.125-1.426-.07-1.285.219-2.336 1.3-2.777 2.852-.215.761-.242 1.636-.074 2.355.129.527.383 1.102.691 1.543.234.332.727.82 1.047 1.031.664.434 1.195.586 1.969.555.613-.023 1.027-.129 1.64-.426 1.184-.574 2.16-1.554 2.828-2.843.122-.235.208-.372.227-.368.082.032 3.77 1.938 3.79 1.961.034.032-.407.93-.696 1.414a12 12 0 0 1-1.051 1.477c-.36.422-1.102 1.14-1.492 1.445a9.9 9.9 0 0 1-3.23 1.684 9.2 9.2 0 0 1-2.95.351M74.441 23.996c-1.488-.043-2.8-.363-4.066-.992-1.687-.848-2.992-2.14-3.793-3.774-.605-1.234-.863-2.402-.863-3.894.004-1.149.176-2.156.527-3.11.14-.378.531-1.171.75-1.515 1.078-1.703 2.758-2.934 4.805-3.524.847-.242 1.465-.332 2.433-.351 1.032-.024 1.743.055 2.48.277l.31.09.007 2.48c.004 1.364 0 2.481-.008 2.481a1 1 0 0 1-.12-.055c-.688-.347-2.09-.488-2.962-.296-.754.167-1.296.453-1.785.945a3.7 3.7 0 0 0-1.043 2.11c-.047.382-.02 1.109.055 1.437a3.4 3.4 0 0 0 .941 1.738c.75.75 1.715 1.102 2.875 1.05.645-.03 1.118-.14 1.563-.366q1.721-.864 2.02-3.145c.035-.293.042-1.266.042-7.957V0H84l-.012 8.434c-.008 7.851-.011 8.457-.054 8.757-.196 1.274-.586 2.25-1.301 3.243-1.293 1.808-3.555 3.07-6.145 3.437-.664.098-1.43.14-2.047.125M9.848 23.574a14 14 0 0 1-1.137-.152c-2.352-.426-4.555-1.781-6.117-3.774-.27-.335-.75-1.05-.95-1.406-1.156-2.047-1.695-4.27-1.64-6.77.047-1.995.43-3.66 1.23-5.316.524-1.086 1.04-1.87 1.793-2.715C4.567 1.72 6.652.535 8.793.171 9.68.02 10.093 0 12.297 0h1.789v5.441l-.961.016c-2.36.04-3.441.215-4.441.719-.836.414-1.278.879-1.895 1.976-.219.399-.535 1.02-.535 1.063 0 .02 1.285.027 3.918.027h3.914v5.113h-3.914c-2.54 0-3.918.008-3.918.028 0 .05.254.597.441.953.344.656.649 1.086 1.051 1.48.668.657 1.356.985 2.445 1.16.645.106 1.274.145 2.61.16l1.285.016v5.442l-2.055-.004a120 120 0 0 1-2.183-.016M16.469 14.715c0-5.504.011-9.04.031-9.29a5.54 5.54 0 0 1 1.527-3.48c.778-.82 1.922-1.457 3.118-1.734C21.915.035 22.422 0 24.39 0h1.652v4.914h-1.426c-1.324 0-1.445.004-1.644.055-.739.191-1.059.699-1.106 1.754l-.015.355h4.191v4.914h-4.184v11.602h-5.39ZM27.023 14.727c0-5.223.012-9.04.028-9.278.129-1.98 1.234-3.68 3.012-4.62.87-.462 1.777-.716 2.851-.802A61 61 0 0 1 34.945 0h1.649v4.914h-1.426c-1.32 0-1.441.004-1.64.055-.739.191-1.063.699-1.106 1.754l-.02.355h4.192v4.914H32.41v11.602h-5.387ZM55.48 15.406V7.22h4.66v1.363c0 1.3.005 1.363.051 1.363.04 0 .075-.054.133-.203.38-.98.969-1.68 1.711-2.031.563-.266 1.422-.43 2.492-.48l.414-.02v4.914l-.414.035c-.738.063-1.597.195-2.058.313-.297.082-.688.28-.875.449-.324.289-.532.703-.625 1.254-.094.547-.098.879-.098 5.144v4.274h-5.39Zm0 0" />
  </svg>
);

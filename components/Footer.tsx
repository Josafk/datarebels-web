"use client";

import Image from "next/image";
import Link from "next/link";
import { ShinyButton } from "@/components/ui/shiny-button";
import { Zap, Linkedin, Instagram } from "lucide-react";

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const socialLinks = [
  { href: "https://www.linkedin.com/company/datarebelsmx/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/datarebels.mx/", icon: Instagram, label: "Instagram" },
  { href: "https://x.com/Eduardo_dlgs", icon: XIcon, label: "X" },
];

const legalLinks = [
  { href: "/terminos", label: "TERMS OF USE" },
  { href: "/privacidad", label: "PRIVACY POLICY" },
  { href: "/seguridad", label: "SECURITY" },
];

export function Footer() {
  return (
    <footer className="bg-dark-deep-200 flex-shrink-0 relative z-20">
      <div className="h-[3px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-purple-600" />
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-8 py-8 lg:py-10">

        {/* 2 cols: logo izq | slogan+CTA+social der */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">

          {/* Col izq: solo logo */}
          <Image src="/logo-white.svg" alt="datarebels" width={130} height={20}
            className="h-5 w-auto flex-shrink-0 max-w-[130px]" />

          {/* Col der: slogan arriba + CTA+social abajo */}
          <div className="flex flex-col gap-4">
            <p className="font-sans text-white text-[16px] lg:text-[20px] font-medium leading-[24px] max-w-sm">
              Closing the GenAI talent gap in Mexico with 100,000 certified Rebels by 2030.
              <Zap className="inline w-4 h-4 text-yellow-400 ml-1 -mt-0.5" />
            </p>
            <div className="flex flex-row items-center gap-2 flex-wrap">
              <ShinyButton href="#contact" variant="blue" className="whitespace-nowrap flex-shrink-0">
                Enroll a Rebel Today
              </ShinyButton>
              <span className="text-white text-[14px] font-medium whitespace-nowrap flex-shrink-0">Visit us at</span>
              <div className="flex items-center gap-2 flex-shrink-0">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                    className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors flex-shrink-0">
                    <Icon className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-6 pt-4 flex flex-row flex-wrap items-center justify-between gap-2">
          <p className="font-sans text-white/40 text-[11px] font-semibold tracking-[1.5px] uppercase whitespace-nowrap">
            ©2026 DATA REBELS. ALL RIGHTS RESERVED
          </p>
          <div className="flex flex-row flex-wrap gap-3 sm:gap-6">
            {legalLinks.map(({ href, label }) => (
              <Link key={href} href={href}
                className="font-sans text-white/40 hover:text-white text-[12px] font-semibold tracking-[2px] uppercase transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

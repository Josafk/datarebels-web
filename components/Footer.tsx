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
  { href: "#terms", label: "TERMS OF USE" },
  { href: "#privacy", label: "PRIVACY POLICY" },
  { href: "#security", label: "SECURITY" },
];

export function Footer() {
  return (
    <footer className="bg-dark-deep-200 flex-shrink-0 relative z-20">
      <div className="h-[3px] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-purple-600" />
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-8 py-8 lg:py-10">

        {/* 2 columnas: izq logo+slogan / der CTA+social */}
        <div className="flex flex-col items-start lg:flex-row lg:items-center lg:justify-between gap-6">

          {/* Col izq: Logo + Slogan apilados */}
          <div className="flex flex-col gap-3 lg:max-w-[340px]">
            <Image src="/logo-white.svg" alt="datarebels" width={130} height={20} className="h-5 w-auto mb-1" />
            <p className="font-sans text-white text-[14px] lg:text-[16px] font-medium leading-[22px]">
              Closing the GenAI talent gap in Mexico with 100,000 certified Rebels by 2030.
              <Zap className="inline w-4 h-4 text-yellow-400 ml-1 -mt-0.5" />
            </p>
          </div>

          {/* Col der: CTA + Visit us at + iconos en fila */}
          <div className="flex flex-row items-center gap-3 flex-shrink-0" style={{flexWrap:"nowrap"}}>
            <ShinyButton href="#contact" variant="blue" className="whitespace-nowrap flex-shrink-0">
              Enroll a Rebel Today
            </ShinyButton>
            <span className="text-white text-[14px] font-medium whitespace-nowrap flex-shrink-0">Visit us at</span>
            <div className="flex items-center gap-2 flex-shrink-0">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors flex-shrink-0">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 mt-8 pt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="font-sans text-white/40 text-[12px] font-semibold tracking-[2px] uppercase">
            ©2026 DATA REBELS. ALL RIGHTS RESERVED
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
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

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

        {/* Fila principal: Logo | Slogan | CTA + Redes */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

          {/* Logo */}
          <div className="flex-shrink-0">
            <Image src="/logo-white.svg" alt="datarebels" width={130} height={20} className="h-5 w-auto" />
          </div>

          {/* Slogan — centro */}
          <p className="font-sans text-white text-[16px] md:text-[20px] font-medium leading-[24px] lg:max-w-sm">
            Closing the GenAI talent gap in Mexico with 100,000 certified Rebels by 2030.
            <Zap className="inline w-4 h-4 text-yellow-400 ml-1 -mt-0.5" />
          </p>

          {/* CTA + Redes */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <ShinyButton href="#contact" variant="blue" className="w-fit whitespace-nowrap">
              Enroll a Rebel Today
            </ShinyButton>
            <div className="flex items-center gap-3">
              <span className="text-white text-[14px] font-medium whitespace-nowrap">Visit us at</span>
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="text-white/70 hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Separador + Copyright */}
        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-white/40 text-[11px] tracking-wide uppercase">
            ©2026 DATA REBELS. ALL RIGHTS RESERVED
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            {legalLinks.map(({ href, label }) => (
              <Link key={href} href={href}
                className="text-white/40 hover:text-white text-[11px] tracking-wide uppercase transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}

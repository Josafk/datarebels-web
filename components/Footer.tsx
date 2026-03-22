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
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-8 py-10 lg:py-12">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
          <div className="flex flex-col gap-4 max-w-sm">
            <Image src="/logo-white.svg" alt="datarebels" width={130} height={20} className="h-5 w-auto" />
            <p className="text-white/80 text-[14px] leading-[20px] flex items-start gap-1.5">
              Closing the GenAI talent gap in Mexico with 100,000 certified Rebels by 2030.
              <Zap className="w-4 h-4 text-fuchsia-400 flex-shrink-0 mt-0.5" />
            </p>
            <ShinyButton href="#contact" variant="blue" className="w-fit">
              Enroll a Rebel Today
            </ShinyButton>
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-white text-[14px] font-medium">Visit us at</p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
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
      </div>
    </footer>
  );
}

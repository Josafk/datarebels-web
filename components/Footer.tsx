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

const footerColumns = [
  {
    title: "Testimonials",
    links: [],
  },
  {
    title: "Learn",
    links: [
      { href: "#documentation", label: "Documentation" },
      { href: "#webinars", label: "Webinars" },
      { href: "#case-studies", label: "Case Studies" },
    ],
  },
  {
    title: "Product",
    links: [
      { href: "#features", label: "Features" },
      { href: "#pricing", label: "Pricing" },
      { href: "#integrations", label: "Integrations" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "#about", label: "About us" },
      { href: "#contact", label: "Contact" },
      { href: "#press", label: "Press" },
    ],
  },
];

const socialLinks = [
  { href: "https://www.linkedin.com/company/datarebelsmx/?originalSubdomain=mx", icon: Linkedin },
  { href: "https://www.instagram.com/datarebels.mx/", icon: Instagram },
  { href: "https://x.com/Eduardo_dlgs", icon: XIcon },
];

export function Footer() {
  return (
    <footer className="bg-dark-deep-200 border-t border-dark-deep-50/20">
      {/* Banda de gradiente superior */}
      <div className="h-1 bg-gradient-to-r from-fuchsia-500 via-purple-500 to-purple-600" />

      {/* Sección superior: Logo, slogan, CTA y redes */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
          <div className="max-w-md">
            <Image
              src="/logo-white.svg"
              alt="Data Rebels"
              width={130}
              height={20}
              className="h-5 w-auto mb-4"
            />
            <p className="text-white/90 text-sm leading-relaxed mb-4 flex items-start gap-1.5">
              Closing the GenAI talent gap in Mexico with 100,000 certified
              Rebels by 2030.
              <Zap className="w-4 h-4 text-fuchsia-400 flex-shrink-0 mt-0.5" />
            </p>
            <ShinyButton href="#contact" variant="blue" className="w-fit">
              Enroll a Rebel Today
            </ShinyButton>
          </div>

          <div className="flex flex-col items-start lg:items-end">
            <p className="text-white text-sm font-medium mb-4">Visit us at</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-deep-50 flex items-center justify-center text-white hover:bg-dark-deep-100 hover:text-fuchsia-400 transition-colors"
                  aria-label={social.href}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Sección de columnas de navegación */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-dark-deep-50/30">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-white font-semibold text-sm mb-4">
                {column.title}
              </h3>
              {column.links.length > 0 ? (
                <ul className="space-y-3">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white text-sm transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>

        {/* Sección inferior: Copyright y legal */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-12 pt-8 border-t border-dark-deep-50/30">
          <p className="text-gray-500 text-xs">
            ©2026 DATA REBELS. ALL RIGHTS RESERVED
          </p>
          <div className="flex gap-6">
            <Link
              href="#terms"
              className="text-gray-500 hover:text-white text-xs transition-colors"
            >
              TERMS OF USE
            </Link>
            <Link
              href="#privacy"
              className="text-gray-500 hover:text-white text-xs transition-colors"
            >
              PRIVACY POLICY
            </Link>
            <Link
              href="#security"
              className="text-gray-500 hover:text-white text-xs transition-colors"
            >
              SECURITY
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

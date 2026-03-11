"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu } from "lucide-react";
import { ShinyButton } from "@/components/ui/shiny-button";

const navLinks = [
  { href: "#solutions", label: "Solutions" },
  { href: "#case-studies", label: "Case studies" },
  { href: "#programs", label: "Our Programs" },
  { href: "#podcast", label: "Podcast" },
];

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-deep-200 border-b border-dark-deep-50/20">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo-white.svg"
            alt="Data Rebels"
            width={130}
            height={20}
            className="h-5 w-auto"
            priority
          />
        </Link>

        {/* Desktop: links centrados — solo visible en lg+ */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white hover:text-fuchsia-400 transition-colors text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA — solo visible en lg+ */}
        <ShinyButton href="#demo" variant="blue" className="hidden lg:inline-flex">
          Explore Solutions
          <ArrowRight className="w-4 h-4" />
        </ShinyButton>

        {/* Mobile/Tablet (<lg): "Menu" + hamburger azul */}
        <button
          type="button"
          aria-label="Abrir menú"
          className="lg:hidden flex items-center gap-2 text-white font-sans font-medium text-sm"
        >
          <span>Menu</span>
          <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600">
            <Menu className="w-5 h-5 text-white" strokeWidth={2} />
          </span>
        </button>
      </div>
    </nav>
  );
}

"use client";

import { LogoCloud } from "@/components/ui/logo-cloud-4";

const LOGOS = [
  {
    src: "/gray-arcacontal.svg",  // ← nombre real del archivo en /public
    alt: "Arca Continental",
    boxClass: "flex items-center justify-center w-[140px] h-[52px] flex-shrink-0",
  },
  { src: "/gray-alfa.svg",      alt: "Alfa",        boxClass: "flex items-center justify-center w-[80px]  h-[52px] flex-shrink-0" },
  { src: "/gray-bimbo.svg",     alt: "Grupo Bimbo", boxClass: "flex items-center justify-center w-[120px] h-[52px] flex-shrink-0" },
  { src: "/gray-cemex.svg",     alt: "Cemex",       boxClass: "flex items-center justify-center w-[110px] h-[48px] flex-shrink-0", imgClassName: "opacity-40" },
  { src: "/gray-deacero.svg",   alt: "Deacero",     boxClass: "flex items-center justify-center w-[120px] h-[48px] flex-shrink-0" },
  { src: "/gray-femsa.svg",     alt: "Femsa",       boxClass: "flex items-center justify-center w-[100px] h-[52px] flex-shrink-0" },
  { src: "/gray-gbm.svg",       alt: "GBM",         boxClass: "flex items-center justify-center w-[90px]  h-[52px] flex-shrink-0" },
  { src: "/gray-lamosa.svg",    alt: "Lamosa",      boxClass: "flex items-center justify-center w-[120px] h-[52px] flex-shrink-0" },
  { src: "/gray-liverpool.svg", alt: "Liverpool",   boxClass: "flex items-center justify-center w-[130px] h-[52px] flex-shrink-0" },
  { src: "/gray-oxxo.svg",      alt: "Oxxo",        boxClass: "flex items-center justify-center w-[90px]  h-[52px] flex-shrink-0" },
  { src: "/gray-sigma.svg",     alt: "Sigma",       boxClass: "flex items-center justify-center w-[100px] h-[52px] flex-shrink-0" },
  { src: "/gray-ternium.svg",   alt: "Ternium",     boxClass: "flex items-center justify-center w-[130px] h-[52px] flex-shrink-0" },
];

export function LogoCloudSection() {
  return (
    <section aria-label="Logos de empresas" className="bg-gray-100 pt-4 pb-6 w-full overflow-hidden">
      <p className="font-sans font-semibold text-[11px] leading-[16px] tracking-[2px] uppercase text-slate-400 text-center mb-3 px-4">
        Join the 100K Rebels in México from companies like...
      </p>
      <LogoCloud logos={LOGOS} gradientFrom="from-gray-100" />
    </section>
  );
}
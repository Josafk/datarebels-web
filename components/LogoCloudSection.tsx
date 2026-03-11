"use client";

import { LogoCloud } from "@/components/ui/logo-cloud-4";

/* Bounding Box: cajas 160x60px, variantes para balance visual */
const LOGOS = [
  { src: "/gray-arca-continental.svg", alt: "Arca Continental", boxClass: "flex items-center justify-center w-[160px] h-[60px] flex-shrink-0" },
  { src: "/gray-alfa.svg", alt: "Alfa", boxClass: "flex items-center justify-center w-[160px] h-[64px] flex-shrink-0" },
  { src: "/gray-bimbo.svg", alt: "Grupo Bimbo", boxClass: "flex items-center justify-center w-[176px] h-[66px] flex-shrink-0" },
  { src: "/gray-cemex.svg", alt: "Cemex", boxClass: "flex items-center justify-center w-[128px] h-[48px] flex-shrink-0", imgClassName: "opacity-40" },
  { src: "/gray-deacero.svg", alt: "Deacero", boxClass: "flex items-center justify-center w-[128px] h-[48px] flex-shrink-0" },
  { src: "/gray-femsa.svg", alt: "Femsa", boxClass: "flex items-center justify-center w-[136px] h-[52px] flex-shrink-0" },
  { src: "/gray-gbm.svg", alt: "GBM", boxClass: "flex items-center justify-center w-[160px] h-[60px] flex-shrink-0" },
  { src: "/gray-lamosa.svg", alt: "Lamosa", boxClass: "flex items-center justify-center w-[160px] h-[60px] flex-shrink-0" },
  { src: "/gray-liverpool.svg", alt: "Liverpool", boxClass: "flex items-center justify-center w-[200px] h-[80px] flex-shrink-0" },
  { src: "/gray-oxxo.svg", alt: "Oxxo", boxClass: "flex items-center justify-center w-[160px] h-[60px] flex-shrink-0" },
  { src: "/gray-sigma.svg", alt: "Sigma", boxClass: "flex items-center justify-center w-[160px] h-[60px] flex-shrink-0" },
  { src: "/gray-ternium.svg", alt: "Ternium", boxClass: "flex items-center justify-center w-[160px] h-[60px] flex-shrink-0" },
];

export function LogoCloudSection() {
  return (
    <section
      className="py-6 bg-gray-100 w-full"
      aria-label="Logos de empresas"
    >
      <div className="w-full text-center">
        <p className="font-sans font-semibold text-[12px] leading-[16px] tracking-[2px] uppercase text-slate-500 mt-0 mb-0">
          JOIN THE 100K REBELS IN MÉXICO FROM COMPANIES LIKE...
        </p>
        <div className="mt-4">
          <LogoCloud
            logos={LOGOS}
            gradientFrom="from-gray-100"
            className="md:border-x-0 py-4"
          />
        </div>
      </div>
    </section>
  );
}

"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

/* Bounding Box: cajas 160x60px */
const LOGOS = [
  { src: "/gray-arca-continental.svg", alt: "Arca Continental", boxClass: "flex items-center justify-center w-[140px] h-[52px] flex-shrink-0" },
  { src: "/gray-alfa.svg",             alt: "Alfa",             boxClass: "flex items-center justify-center w-[80px]  h-[52px] flex-shrink-0" },
  { src: "/gray-bimbo.svg",            alt: "Grupo Bimbo",      boxClass: "flex items-center justify-center w-[120px] h-[52px] flex-shrink-0" },
  { src: "/gray-cemex.svg",            alt: "Cemex",            boxClass: "flex items-center justify-center w-[110px] h-[48px] flex-shrink-0", imgClassName: "opacity-40" },
  { src: "/gray-deacero.svg",          alt: "Deacero",          boxClass: "flex items-center justify-center w-[120px] h-[48px] flex-shrink-0" },
  { src: "/gray-femsa.svg",            alt: "Femsa",            boxClass: "flex items-center justify-center w-[100px] h-[52px] flex-shrink-0" },
  { src: "/gray-gbm.svg",              alt: "GBM",              boxClass: "flex items-center justify-center w-[90px]  h-[52px] flex-shrink-0" },
  { src: "/gray-lamosa.svg",           alt: "Lamosa",           boxClass: "flex items-center justify-center w-[120px] h-[52px] flex-shrink-0" },
  { src: "/gray-liverpool.svg",        alt: "Liverpool",        boxClass: "flex items-center justify-center w-[130px] h-[52px] flex-shrink-0" },
  { src: "/gray-oxxo.svg",             alt: "Oxxo",             boxClass: "flex items-center justify-center w-[90px]  h-[52px] flex-shrink-0" },
  { src: "/gray-sigma.svg",            alt: "Sigma",            boxClass: "flex items-center justify-center w-[100px] h-[52px] flex-shrink-0" },
  { src: "/gray-ternium.svg",          alt: "Ternium",          boxClass: "flex items-center justify-center w-[130px] h-[52px] flex-shrink-0" },
];

export function LogoCloudSection() {
  return (
    /*
      bg-gray-100 = mismo fondo que NewApproach → fusión sin costura visual.
      pt-4 (16px) entre la tarjeta de NewApproach y el texto label.
      pb-6 (24px) bajo los logos.
      overflow-hidden: el InfiniteSlider sale full-width sin scrollbar.
    */
    <section
      aria-label="Logos de empresas"
      className="bg-gray-100 pt-4 pb-6 w-full overflow-hidden"
    >
      {/* Título */}
      <p className="font-sans font-semibold text-[11px] leading-[16px] tracking-[2px] uppercase text-slate-400 text-center mb-3 px-4">
        Join the 100K Rebels in México from companies like...
      </p>

      {/* Slider — full viewport width, sin max-w-5xl */}
      <div className="relative w-full">
        <InfiniteSlider
          gap={48}
          reverse
          duration={60}
          durationOnHover={60}   /* ← mismo valor: sin aceleración en hover */
          className="py-2"
        >
          {LOGOS.map((logo) => (
            <div key={logo.alt} className={logo.boxClass}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={logo.alt}
                src={logo.src}
                width="auto"
                height="auto"
                loading="lazy"
                className={`pointer-events-none select-none max-w-full max-h-full object-contain grayscale ${logo.imgClassName ?? "opacity-50"}`}
              />
            </div>
          ))}
        </InfiniteSlider>

        {/* Fades full-width — llegan al borde real de la pantalla */}
        <ProgressiveBlur
          blurIntensity={1}
          className="pointer-events-none absolute top-0 left-0 h-full w-32"
          direction="left"
        />
        <ProgressiveBlur
          blurIntensity={1}
          className="pointer-events-none absolute top-0 right-0 h-full w-32"
          direction="right"
        />
      </div>
    </section>
  );
}
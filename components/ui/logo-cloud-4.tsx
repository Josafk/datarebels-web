"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

type Logo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  boxClass?: string;
  imgClassName?: string;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
  gradientFrom?: string;
};

export function LogoCloud({
  logos,
  gradientFrom = "from-gray-100",
  className,
  ...props
}: LogoCloudProps) {
  return (
    <div
      className={`relative w-full ${className ?? ""}`}
      {...props}
    >
      {/* Bordes top/bottom eliminados — sumaban espacio visual innecesario */}

      <InfiniteSlider
        gap={48}
        reverse
        duration={60}
        durationOnHover={60}  /* ← igual a duration: sin aceleración en hover */
        className="py-2"
      >
        {logos.map((logo) => {
          const boxClass = logo.boxClass ?? "flex items-center justify-center w-[160px] h-[52px] flex-shrink-0";
          const imgClass = `pointer-events-none select-none max-w-full max-h-full object-contain grayscale ${logo.imgClassName ?? "opacity-50"}`;
          return (
            <div key={`logo-${logo.alt}`} className={boxClass}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={logo.alt}
                className={imgClass}
                height="auto"
                loading="lazy"
                src={logo.src}
                width="auto"
              />
            </div>
          );
        })}
      </InfiniteSlider>

      {/* Fades full-width */}
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
  );
}
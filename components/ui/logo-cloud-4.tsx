"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

type Logo = {
  src: string;
  alt: string;
  className?: string;
  boxClass?: string;
  imgClassName?: string;
  imgWidth?: number;
  imgHeight?: number;
};

type LogoCloudProps = React.ComponentProps<"div"> & {
  logos: Logo[];
  gradientFrom?: string;
};

export function LogoCloud({ logos, gradientFrom = "from-gray-100", className, ...props }: LogoCloudProps) {
  return (
    <div className={`relative w-full ${className ?? ""}`} {...props}>
      <InfiniteSlider gap={48} reverse duration={60} durationOnHover={60} className="py-2">
        {logos.map((logo) => {
          const boxClass = logo.boxClass ?? "flex items-center justify-center w-[160px] h-[52px] flex-shrink-0";
          const imgClass = `pointer-events-none select-none object-contain grayscale ${logo.imgClassName ?? "opacity-50"}`;
          return (
            <div key={`logo-${logo.alt}`} className={boxClass}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={logo.alt}
                className={imgClass}
                src={logo.src}
                loading="lazy"
                width={logo.imgWidth}
                height={logo.imgHeight}
                style={
                  logo.imgWidth
                    ? { width: logo.imgWidth, height: logo.imgHeight, maxWidth: '100%', maxHeight: '100%' }
                    : { maxWidth: '100%', maxHeight: '100%' }
                }
              />
            </div>
          );
        })}
      </InfiniteSlider>

      {/* w-32 (128px) en desktop, w-12 (48px) en mobile para no tapar los logos */}
      <ProgressiveBlur blurIntensity={1} className="pointer-events-none absolute top-0 left-0 h-full w-12 md:w-24 lg:w-32" direction="left" />
      <ProgressiveBlur blurIntensity={1} className="pointer-events-none absolute top-0 right-0 h-full w-12 md:w-24 lg:w-32" direction="right" />
    </div>
  );
}
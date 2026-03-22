"use client";

import { useEffect, useState } from "react";
import { Globe, LayoutGrid, Users, Network } from "lucide-react";
import { ImageSwiper } from "@/components/ui/image-swiper";

const COMMUNITY_IMAGES =
  "/community-carousel-02.png,/community-carousel-03.png,/community-carousel-04.png,/community-carousel-05.png,/community-carousel-06.png,/community-carousel-07.png";

const benefits = [
  {
    icon: Globe,
    title: "Real-Time Global Insights",
    description:
      "Stay ahead of the curve with a curated stream of the latest GenAI breakthroughs, tools, and trends from international experts.",
  },
  {
    icon: LayoutGrid,
    title: "Cross-Industry Blueprints",
    description:
      "Discover how peers in CPG, Retail, and Manufacturing are successfully scaling GenAI to solve complex operational challenges.",
  },
  {
    icon: Users,
    title: "Collaborative Problem Solving",
    description:
      "Gain direct access to a worldwide network of 10,000+ Rebels for peer-to-peer support, technical guidance, and strategic mentorship.",
  },
  {
    icon: Network,
    title: "The 100K Movement",
    description:
      "Be part of the mission to certify 100,000 leaders by 2030, securing your organization's place in the future of the digital economy.",
  },
];

export function GlobalMovement() {
  const [swiperDims, setSwiperDims] = useState({ width: 650, height: 650 });

  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) {
        setSwiperDims({ width: window.innerWidth - 40, height: Math.round((window.innerWidth - 40) * 0.85) });
      } else if (window.innerWidth < 1024) {
        setSwiperDims({ width: window.innerWidth - 80, height: 440 });
      } else {
        setSwiperDims({ width: 650, height: 650 });
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section
      className="relative z-10 bg-slate-50"
      aria-label="Global Movement"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:gap-x-16 gap-y-8 py-6 px-5 md:px-10 lg:px-8">
        {/* Columna Izquierda: mobile stack / tablet dos columnas */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h2 className="font-title text-slate-900 text-[24px] md:text-[24px] lg:text-[32px] font-semibold leading-[26px] md:leading-[26px] lg:leading-[34px] tracking-normal mb-8">
            Connect with the global movement closing the talent gap and driving
            real-world adoption.
          </h2>

          <div className="flex flex-col space-y-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="flex gap-4 items-start"
              >
                <div className="flex-shrink-0 bg-[#1330F4] rounded-lg p-1.5 flex items-center justify-center shrink-0 w-8 h-8">
                  <benefit.icon size={16} className="text-white flex-shrink-0" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-sans text-[15px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] font-medium tracking-normal text-slate-900">
                    {benefit.title}
                  </span>
                  <span className="font-sans text-[14px] leading-[18px] font-normal text-slate-500">
                    {benefit.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Columna Derecha: mobile al final / tablet derecha con aire */}
        <div className="w-full lg:w-1/2 rounded-2xl min-h-[320px] md:min-h-[440px] lg:min-h-[500px] lg:self-stretch">
          <ImageSwiper
            images={COMMUNITY_IMAGES}
            cardWidth={swiperDims.width}
            cardHeight={swiperDims.height}
            fill
            className="rounded-2xl w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

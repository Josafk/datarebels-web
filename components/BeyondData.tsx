"use client";

import { useEffect, useState } from "react";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const episodes = [
  {
    id: "1",
    date: "23 JUL, 2025",
    name: "Christopher Paquette",
    title: "Chief Digital & Transformation Officer",
    image: "/podcast-01.avif",
    watchUrl: "https://www.youtube.com/watch?v=nPxZAuwX6Ns",
  },
  {
    id: "2",
    date: "12 MAY, 2025",
    name: "Koro Castellano",
    title: "Independent Advisor and Strategic Consultant",
    image: "/podcast-02.avif",
    watchUrl: "https://www.youtube.com/watch?v=RJOcFuX4oIs",
  },
  {
    id: "3",
    date: "04 APR, 2025",
    name: "Mariano Hansen",
    title: "Chief Strategy Officer en PSG",
    image: "/podcast-03.avif",
    watchUrl: "https://youtu.be/Dflk3lKTKxI?si=olbEgV0NJA1_KWGf",
  },
  {
    id: "4",
    date: "18 MAR, 2025",
    name: "José Chapa",
    title: "VP Product Management en Walmart",
    image: "/podcast-04.avif",
    watchUrl: "https://youtu.be/_QNofyYmct8?si=yLBrXDvyExLJgh9Y",
  },
  {
    id: "5",
    date: "27 FEB, 2025",
    name: "Sebastián Caro",
    title: "CEO de Hunty",
    image: "/podcast-05.avif",
    watchUrl: "https://youtu.be/aWOWs1UWSqU?si=-K8ZLlTqrBxShfOk",
  },
  {
    id: "6",
    date: "15 FEB, 2025",
    name: "Patricio Gil",
    title: "Director de Estrategia de Consumidor y Analitica de Oxxo",
    image: "/podcast6.png",
    watchUrl: "https://youtu.be/vcw3HsBpuhI?si=azAFa02xE_eT8wxR",
  },
  {
    id: "7",
    date: "09 FEB, 2025",
    name: "Enrico Robles",
    title: "Director of Data Analytics & Platform en Endeavor",
    image: "/podcast7.png",
    watchUrl: "https://youtu.be/gZbvuMpjI_M?si=juWDJeHxsxAYeYrE",
  },
  {
    id: "8",
    date: "20 JAN, 2025",
    name: "Eduardo de la Garza",
    title: "Por Talento Ganas o por Talento Pierdes",
    image: "/podcast8.png",
    watchUrl: "https://youtu.be/o4A26hzyyrs?si=Tw3ziTr8PXTggJgW",
  },
  {
    id: "9",
    date: "08 JAN, 2025",
    name: "Alberto de Armas",
    title: "HR Powered AI",
    image: "/podcast9.png",
    watchUrl: "https://youtu.be/zEPY40fmIfU?si=Ib4ordqyvXnBkjqP",
  },
  {
    id: "10",
    date: "22 DEC, 2024",
    name: "Karim Touma",
    title: "Data & AI como capacidad de negocios",
    image: "/podcast10.png",
    watchUrl: "https://youtu.be/SgEVj-6g41k?si=JWAMWiDzG-r1MQvS",
  },
  {
    id: "11",
    date: "10 DEC, 2024",
    name: "David Puente",
    title: "De AI a ROI: Modelos de captura de valor",
    image: "/podcast11.png",
    watchUrl: "https://youtu.be/w-dBaJPByKE?si=aElOIXtf5ztnE5S7",
  },
];

function EpisodeCard({ episode }: { episode: (typeof episodes)[0] }) {
  const watchUrl = episode.watchUrl ?? "#watch";
  const isExternal = watchUrl.startsWith("http");
  return (
    <article className="group border border-slate-200/80 rounded-2xl overflow-hidden bg-white flex flex-col shrink-0 w-full h-full">
      <a
        href={watchUrl}
        className="flex flex-col flex-1"
        {...(isExternal && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        <div className="relative h-32 md:h-36 overflow-hidden">
          <div className="podcast-thumb absolute inset-0" />
          <div className="podcast-thumb-pattern absolute inset-0" />
          <div className="absolute inset-0 flex overflow-hidden rounded-t-2xl">
            <div className="relative h-full w-full origin-center transition duration-300 group-hover:scale-105">
              <Image
                src={episode.image}
                alt={episode.name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 340px"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>

        </div>
        <div className="p-3 flex-1 flex flex-col">
          <p
            className="font-sans text-[11px] font-semibold leading-4 tracking-[0.04em] uppercase mb-1"
            style={{ color: "#9CA3AF" }}
          >
            {episode.date}
          </p>
          <h3 className="font-sans text-slate-900 text-[16px] font-medium leading-5 mb-1">
            {episode.name}
          </h3>
          <p className="font-sans text-slate-500 text-[13px] leading-[18px] mb-3 flex-1">
            {episode.title}
          </p>
          <span
            className="font-sans inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-white text-[13px] font-medium w-fit whitespace-nowrap transition-opacity group-hover:opacity-90"
            style={{ backgroundColor: "#1330F4" }}
          >
            <Play size={14} className="flex-shrink-0" strokeWidth={2.5} />
            Watch full episode
          </span>
        </div>
      </a>
    </article>
  );
}

export function BeyondData() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapCount, setSnapCount] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  useEffect(() => {
    if (!carouselApi) return;
    const updateState = () => {
      setSelectedIndex(carouselApi.selectedScrollSnap());
      setSnapCount(carouselApi.scrollSnapList().length);
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateState();
    carouselApi.on("select", updateState);
    carouselApi.on("reInit", updateState);
    return () => {
      carouselApi.off("select", updateState);
      carouselApi.off("reInit", updateState);
    };
  }, [carouselApi]);

  return (
    <section
      id="podcast"
      className="relative z-10 py-10 overflow-hidden scroll-mt-20"
      aria-label="Lessons from Business Leaders - Beyond Data"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(135deg, #7c3aed 0%, #a855f7 30%, #6366f1 60%, #8b5cf6 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: "url('/background-podcast.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-8">
        <div className="bg-white rounded-[24px] md:rounded-[28px] p-6 md:p-8 lg:p-10 border border-violet-200/70 shadow-[0_0_0_1px_rgba(168,85,247,0.14),0_20px_50px_rgba(124,58,237,0.15)]">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6 mb-6 md:mb-8">
            <div className="order-1 md:order-2 flex-shrink-0 md:self-start">
              <Image
                src="/beyon-data.svg"
                alt="BEYOND DATA"
                width={180}
                height={80}
                className="h-11 md:h-14 w-auto object-contain"
              />
            </div>
            <div className="order-2 md:order-1 max-w-2xl">
              <h2 className="font-title text-slate-900 text-[24px] md:text-[24px] lg:text-[32px] font-semibold leading-[26px] lg:leading-[34px] tracking-normal mb-4 text-left">
                Lessons from Business Leaders Implementing Data & IA Strategies
              </h2>
              <p className="font-sans text-slate-500 text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-left">
                Go behind the scenes with global leaders as they share the raw
                blueprints for successful Data & AI implementation.{" "}
                <span className="text-violet-500 font-medium">
                  No fluff—just real-world strategies
                </span>{" "}
                from the people moving the needle.
              </p>
            </div>
          </div>

          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: "start",
              dragFree: false,
              containScroll: "trimSnaps",
              slidesToScroll: 1,
              breakpoints: {
                "(min-width: 768px)": {
                  dragFree: false,
                  containScroll: "trimSnaps",
                  slidesToScroll: 2,
                },
                "(min-width: 1024px)": {
                  dragFree: false,
                  containScroll: "trimSnaps",
                  slidesToScroll: 3,
                },
              },
            }}
            className="w-full overflow-hidden"
          >
            {/* Flujo horizontal estricto: flex-row + no-wrap */}
            <CarouselContent className="!ml-0 flex flex-row flex-nowrap">
              {episodes.map((episode) => (
                <CarouselItem
                  key={episode.id}
                  // Visibilidad estricta: 1 (sm) / 2 (md) / 3 (lg)
                  className="!pl-0 pr-4 md:pr-6 flex-none basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <EpisodeCard episode={episode} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex items-center justify-between pt-5 mt-6">
            <div className="flex items-center gap-2">
              {Array.from({ length: Math.max(1, snapCount) }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => carouselApi?.scrollTo(i)}
                  className={`w-2 h-2 rounded-full shrink-0 transition-all border-none ${
                    i === selectedIndex
                      ? "bg-[#1330F4]"
                      : "bg-slate-300"
                  }`}
                  aria-current={i === selectedIndex ? "true" : undefined}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => carouselApi?.scrollPrev()}
                disabled={!canScrollPrev}
                aria-label="Anterior"
                className={`
                  h-8 w-8 rounded-full flex items-center justify-center
                  outline-none shrink-0
                  transition-colors duration-200
                  disabled:pointer-events-none disabled:cursor-not-allowed
                  ${canScrollPrev
                    ? "bg-white text-[#1330F4] border border-slate-200 shadow-sm hover:bg-slate-50"
                    : "bg-white text-slate-300 border border-slate-200"
                  }
                `}
              >
                <ChevronLeft size={16} strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={() => carouselApi?.scrollNext()}
                disabled={!canScrollNext}
                aria-label="Siguiente"
                className={`
                  h-8 w-8 rounded-full flex items-center justify-center
                  outline-none shrink-0
                  transition-colors duration-200
                  disabled:pointer-events-none disabled:cursor-not-allowed
                  ${canScrollNext
                    ? "bg-[#1330F4] text-white border border-transparent shadow-sm hover:bg-[#0f27cc]"
                    : "bg-white text-slate-300 border border-slate-200"
                  }
                `}
              >
                <ChevronRight size={16} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

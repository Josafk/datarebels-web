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
  { id: "1", date: "23 JUL, 2025", name: "Christopher Paquette", title: "Chief Digital & Transformation Officer", image: "/podcast-01.avif", watchUrl: "https://www.youtube.com/watch?v=nPxZAuwX6Ns" },
  { id: "2", date: "12 MAY, 2025", name: "Koro Castellano", title: "Independent Advisor and Strategic Consultant", image: "/podcast-02.avif", watchUrl: "https://www.youtube.com/watch?v=RJOcFuX4oIs" },
  { id: "3", date: "04 APR, 2025", name: "Mariano Hansen", title: "Chief Strategy Officer en PSG", image: "/podcast-03.avif", watchUrl: "https://youtu.be/Dflk3lKTKxI?si=olbEgV0NJA1_KWGf" },
  { id: "4", date: "18 MAR, 2025", name: "Jose Chapa", title: "VP Product Management en Walmart", image: "/podcast-04.avif", watchUrl: "https://youtu.be/_QNofyYmct8?si=yLBrXDvyExLJgh9Y" },
  { id: "5", date: "27 FEB, 2025", name: "Sebastian Caro", title: "CEO de Hunty", image: "/podcast-05.avif", watchUrl: "https://youtu.be/aWOWs1UWSqU?si=-K8ZLlTqrBxShfOk" },
  { id: "6", date: "15 FEB, 2025", name: "Patricio Gil", title: "Director de Estrategia de Consumidor y Analitica de Oxxo", image: "/podcast6.png", watchUrl: "https://youtu.be/vcw3HsBpuhI?si=azAFa02xE_eT8wxR" },
  { id: "7", date: "09 FEB, 2025", name: "Enrico Robles", title: "Director of Data Analytics & Platform en Endeavor", image: "/podcast7.png", watchUrl: "https://youtu.be/gZbvuMpjI_M?si=juWDJeHxsxAYeYrE" },
  { id: "8", date: "20 JAN, 2025", name: "Eduardo de la Garza", title: "Por Talento Ganas o por Talento Pierdes", image: "/podcast8.png", watchUrl: "https://youtu.be/o4A26hzyyrs?si=Tw3ziTr8PXTggJgW" },
  { id: "9", date: "08 JAN, 2025", name: "Alberto de Armas", title: "HR Powered AI", image: "/podcast9.png", watchUrl: "https://youtu.be/zEPY40fmIfU?si=Ib4ordqyvXnBkjqP" },
  { id: "10", date: "22 DEC, 2024", name: "Karim Touma", title: "Data & AI como capacidad de negocios", image: "/podcast10.png", watchUrl: "https://youtu.be/SgEVj-6g41k?si=JWAMWiDzG-r1MQvS" },
  { id: "11", date: "10 DEC, 2024", name: "David Puente", title: "De AI a ROI: Modelos de captura de valor", image: "/podcast11.png", watchUrl: "https://youtu.be/w-dBaJPByKE?si=aElOIXtf5ztnE5S7" },
];

function EpisodeCard({ episode }: { episode: (typeof episodes)[0] }) {
  const watchUrl = episode.watchUrl ?? "#watch";
  const isExternal = watchUrl.startsWith("http");
  return (
    <article className="group border border-slate-200/80 rounded-2xl overflow-hidden bg-white flex flex-col w-full h-full">
      <a
        href={watchUrl}
        className="flex flex-col flex-1"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <div className="relative h-40 overflow-hidden shrink-0">
          <div className="podcast-thumb absolute inset-0" />
          <div className="podcast-thumb-pattern absolute inset-0" />
          <Image
            src={episode.image}
            alt={episode.name}
            fill
            className="object-cover object-center transition duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 340px"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
        </div>
        <div className="p-5 flex flex-col gap-4 flex-1">
          <div className="flex flex-col gap-1 flex-1">
            <p className="font-sans text-[11px] font-semibold leading-4 tracking-[0.04em] uppercase text-slate-400">
              {episode.date}
            </p>
            <h3 className="font-sans text-slate-900 text-[15px] font-medium leading-5">
              {episode.name}
            </h3>
            <p className="font-sans text-slate-500 text-[13px] leading-[18px]">
              {episode.title}
            </p>
          </div>
          <span className="font-sans inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-[12px] font-medium w-fit whitespace-nowrap shrink-0" style={{ backgroundColor: "#1330F4" }}>
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
      className="relative z-10 py-6 md:py-10 overflow-hidden scroll-mt-20"
      aria-label="Lessons from Business Leaders - Beyond Data"
    >
      <div className="absolute inset-0 z-0" style={{ background: "linear-gradient(135deg, #7c3aed 0%, #a855f7 30%, #6366f1 60%, #8b5cf6 100%)" }} />
      <div className="absolute inset-0 z-0 opacity-30" style={{ backgroundImage: "url('/background-podcast.png')", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-10 lg:px-8">
        <div className="bg-white rounded-[20px] md:rounded-[28px] p-5 md:p-8 lg:p-10 border border-violet-200/70 shadow-[0_0_0_1px_rgba(168,85,247,0.14),0_20px_50px_rgba(124,58,237,0.15)]">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 md:gap-6 mb-5 md:mb-6">
            <div className="order-first md:order-first max-w-2xl">
              <h2 className="font-title text-slate-900 text-[22px] md:text-[24px] lg:text-[32px] font-semibold leading-[26px] lg:leading-[34px] tracking-normal mb-3 text-left">
                Lessons from Business Leaders Implementing Data & IA Strategies
              </h2>
              <p className="font-sans text-slate-500 text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] text-left">
                Go behind the scenes with global leaders as they share the raw blueprints for successful Data & AI implementation.{" "}
                <span className="text-violet-500 font-medium">No fluff—just real-world strategies</span>{" "}
                from the people moving the needle.
              </p>
            </div>
            <div className="order-first md:order-last flex-shrink-0 md:self-start">
              <Image src="/beyon-data.svg" alt="BEYOND DATA" width={180} height={80} className="h-7 md:h-10 lg:h-12 w-auto object-contain" />
            </div>
          </div>

          <Carousel
            setApi={setCarouselApi}
            opts={{ align: "start", dragFree: false, containScroll: "trimSnaps", slidesToScroll: 1, breakpoints: { "(min-width: 768px)": { slidesToScroll: 2 }, "(min-width: 1024px)": { slidesToScroll: 3 } } }}
            className="w-full"
          >
            <CarouselContent className="!ml-0 flex flex-row flex-nowrap">
              {episodes.map((episode) => (
                <CarouselItem key={episode.id} className="!pl-0 pr-3 md:pr-4 flex-none basis-full md:basis-1/2 lg:basis-1/3 flex">
                  <EpisodeCard episode={episode} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="flex items-center justify-between pt-3 mt-3">
            <div className="flex items-center gap-1.5" role="tablist" aria-label="Paginacion de episodios">
              {Array.from({ length: Math.max(1, snapCount) }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => carouselApi?.scrollTo(i)}
                  className={`h-2 rounded-full shrink-0 transition-all border-none ${i === selectedIndex ? "w-6 bg-[#1330F4]" : "w-2 bg-slate-300"}`}
                  aria-current={i === selectedIndex ? "true" : undefined}
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button id="podcast-prev" type="button" onClick={() => carouselApi?.scrollPrev()} disabled={!canScrollPrev} aria-label="Anterior" style={{ width: 32, height: 32, flexShrink: 0 }} className={`rounded-full flex items-center justify-center outline-none transition-colors duration-200 disabled:pointer-events-none disabled:cursor-not-allowed ${canScrollPrev ? "bg-[#1330F4] text-white border border-transparent shadow-sm" : "bg-transparent text-slate-300 border border-slate-200"}`}>
                <ChevronLeft size={16} strokeWidth={2} />
              </button>
              <button id="podcast-next" type="button" onClick={() => carouselApi?.scrollNext()} disabled={!canScrollNext} aria-label="Siguiente" style={{ width: 32, height: 32, flexShrink: 0 }} className={`rounded-full flex items-center justify-center outline-none transition-colors duration-200 disabled:pointer-events-none disabled:cursor-not-allowed ${canScrollNext ? "bg-[#1330F4] text-white border border-transparent shadow-sm" : "bg-transparent text-slate-300 border border-slate-200"}`}>
                <ChevronRight size={16} strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

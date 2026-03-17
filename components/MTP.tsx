"use client";

import { ShinyButton } from "@/components/ui/shiny-button";

export function MTP() {
  return (
    <>
      <span className="font-sans text-[12px] leading-[16px] tracking-[2px] font-semibold text-white uppercase block mb-3">
        OUR MASSIVE TRANSFORMATIONAL PURPOSE
      </span>
      <h2 className="font-title text-white font-semibold mb-6 max-w-3xl mx-auto tracking-[0px] text-[24px] leading-[32px] lg:text-[32px] lg:leading-[40px]">
        Closing the GenAI talent gap in Mexico with 100,000 certified Rebels by 2030.{" "}
        <span className="inline-block align-middle animate-mtp-pulse">⚡</span>
      </h2>
      <ShinyButton
        href="#contact"
        variant="blue"
        className="w-full md:w-auto px-10 py-4 flex justify-center"
      >
        Book a Meeting
      </ShinyButton>
    </>
  );
}
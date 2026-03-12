"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function ShinyButton({
  children,
  onClick,
  href,
  className = "",
  variant = "blue",
  ...rest
}: any) {

  const variantClasses =
    variant === "blue"
      ? "bg-[#1330f4] text-white shadow-[0_0_15px_rgba(19,48,244,0.3)] hover:shadow-[0_0_25px_rgba(19,48,244,0.5)]"
      : "bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white/20";

  // Clases base SIN tamaños fijos — cada uso define su propio padding/height.
  // Si no se pasa ningún tamaño, el fallback es h-11 px-8 (botón estándar).
  const baseClass = cn(
    "inline-flex items-center justify-center",
    "rounded-full font-bold",
    "transition-all duration-300 ease-out",
    "hover:scale-105 active:scale-95",
    // Tamaño default — se sobreescribe con className del caller
    "h-11 px-8 text-[15px]",
    variantClasses,
    // className va AL FINAL para ganar siempre
    className
  );

  const Comp = href ? (Link as any) : ("button" as any);

  return (
    <Comp href={href} onClick={onClick} className={baseClass} {...rest}>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </Comp>
  );
}
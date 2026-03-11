"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Asegúrate de tener esta utilidad o usa strings normales

export function ShinyButton({ 
  children, 
  onClick, 
  href, 
  className = "", 
  variant = "blue", 
  ...rest 
}: any) {
  
  // 1. Definimos los colores según la variante
  const variantClasses = variant === "blue" 
    ? "bg-[#1330f4] text-white shadow-[0_0_15px_rgba(19,48,244,0.3)] hover:shadow-[0_0_25px_rgba(19,48,244,0.5)]" 
    : "bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white/20";

  // 2. Clases base para UNIFICAR TAMAÑO y añadir el EFECTO HOVER
  const baseClass = cn(
    "inline-flex items-center justify-center",
    "h-12 px-10 rounded-full font-bold text-[15px]", // Altura fija y padding
    "transition-all duration-300 ease-out",        // Animación suave
    "hover:scale-105 active:scale-95",             // Efecto de rebote al pasar el mouse
    "w-full md:w-fit min-w-[180px]",               // Ancho mínimo para que todos sean iguales
    variantClasses,
    className
  );

  const Comp = href ? (Link as any) : ("button" as any);

  return (
    <Comp 
      href={href} 
      onClick={onClick} 
      className={baseClass} 
      {...rest}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </Comp>
  );
}
"use client";

import React from "react";
import Link from "next/link";

export function ShinyButton({
  children,
  onClick,
  href,
  className = "",
  variant = "blue",
  disabled = false,
  ...rest
}: any) {
  // Recuperamos las clases originales para que no se vea "descuadrado"
  const variantClass = variant === "blue" 
    ? "bg-blue-600 hover:bg-blue-700 shadow-[0_0_20px_rgba(37,99,235,0.5)]" 
    : "bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20";
  
  const baseClass = `inline-flex items-center justify-center px-8 py-3 rounded-full font-bold text-white transition-all duration-300 transform active:scale-95 w-full md:w-auto ${variantClass} ${className}`.trim();

  const LinkComponent = Link as any;
  const ButtonComponent = "button" as any;

  const innerContent = (
    <span className="flex items-center gap-2">
      {children}
    </span>
  );

  if (href) {
    return (
      <LinkComponent href={href} className={baseClass} {...rest}>
        {innerContent}
      </LinkComponent>
    );
  }

  return (
    <ButtonComponent
      className={baseClass}
      onClick={onClick}
      type="button"
      disabled={disabled}
      {...rest}
    >
      {innerContent}
    </ButtonComponent>
  );
}
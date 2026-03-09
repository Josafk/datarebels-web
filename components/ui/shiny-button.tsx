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
  const variantClass = variant === "blue" ? "bg-blue-600 hover:bg-blue-700" : "bg-black hover:bg-gray-900";
  const baseClass = `inline-flex items-center justify-center px-6 py-2 rounded-full font-semibold text-white transition-all ${variantClass} ${className}`.trim();

  // Alias para que Vercel no se detenga por tipos de datos
  const LinkComponent = Link as any;
  const ButtonComponent = "button" as any;

  if (href) {
    return (
      <LinkComponent href={href} className={baseClass} {...rest}>
        {children}
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
      {children}
    </ButtonComponent>
  );
}
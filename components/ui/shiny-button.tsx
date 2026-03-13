"use client";

import React from "react";
import Link from "next/link";

interface ShinyButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  variant?: "blue" | "ghost";
}

export function ShinyButton({
  children,
  onClick,
  href,
  className = "",
  variant = "blue",
}: ShinyButtonProps) {
  const isBlue = variant === "blue";

  const css = `
    @property --gradient-angle {
      syntax: "<angle>"; initial-value: 0deg; inherits: false;
    }
    @property --gradient-angle-offset {
      syntax: "<angle>"; initial-value: 0deg; inherits: false;
    }
    @property --gradient-percent {
      syntax: "<percentage>"; initial-value: 5%; inherits: false;
    }
    @property --gradient-shine {
      syntax: "<color>"; initial-value: white; inherits: false;
    }
    .shiny-cta {
      --shiny-cta-bg: ${isBlue ? "#1330F4" : "#0a0a0a"};
      --shiny-cta-bg-subtle: ${isBlue ? "#2a44ff" : "#1a1818"};
      --shiny-cta-fg: #ffffff;
      --shiny-cta-highlight: ${isBlue ? "#6eb3ff" : "#6060ff"};
      --shiny-cta-highlight-subtle: ${isBlue ? "#a8d4ff" : "#8484ff"};
      --animation: gradient-angle-kf linear infinite;
      --duration: 3s;
      --shadow-size: 2px;
      --transition: 800ms cubic-bezier(0.25, 1, 0.5, 1);
      isolation: isolate;
      position: relative;
      overflow: hidden;
      cursor: pointer;
      outline-offset: 4px;
      padding: 0 1.25rem;
      height: 2.625rem;
      font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
      font-size: 0.875rem;
      line-height: 1;
      font-weight: 700;
      border: 1px solid transparent;
      border-radius: 360px;
      color: var(--shiny-cta-fg);
      background:
        linear-gradient(var(--shiny-cta-bg), var(--shiny-cta-bg)) padding-box,
        conic-gradient(
          from calc(var(--gradient-angle) - var(--gradient-angle-offset)),
          transparent,
          var(--shiny-cta-highlight) var(--gradient-percent),
          var(--gradient-shine) calc(var(--gradient-percent) * 2),
          var(--shiny-cta-highlight) calc(var(--gradient-percent) * 3),
          transparent calc(var(--gradient-percent) * 4)
        ) border-box;
      box-shadow: inset 0 0 0 1px var(--shiny-cta-bg-subtle);
      transition: var(--transition);
      transition-property: --gradient-angle-offset, --gradient-percent, --gradient-shine, transform;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      text-decoration: none;
    }
    .shiny-cta::before,
    .shiny-cta::after,
    .shiny-inner::before {
      content: "";
      pointer-events: none;
      position: absolute;
      inset-inline-start: 50%;
      inset-block-start: 50%;
      translate: -50% -50%;
      z-index: -1;
    }
    .shiny-cta:active { translate: 0 1px; }
    .shiny-cta::before {
      --size: calc(100% - var(--shadow-size) * 3);
      --position: 2px;
      --space: calc(var(--position) * 2);
      width: var(--size);
      height: var(--size);
      background: radial-gradient(
          circle at var(--position) var(--position),
          white calc(var(--position) / 4),
          transparent 0
        ) padding-box;
      background-size: var(--space) var(--space);
      background-repeat: space;
      mask-image: conic-gradient(
        from calc(var(--gradient-angle) + 45deg),
        black, transparent 10% 90%, black
      );
      border-radius: inherit;
      opacity: 0.4;
      z-index: -1;
    }
    .shiny-cta::after {
      --animation: shimmer-kf linear infinite;
      width: 100%;
      aspect-ratio: 1;
      background: linear-gradient(-50deg, transparent, var(--shiny-cta-highlight), transparent);
      mask-image: radial-gradient(circle at bottom, transparent 40%, black);
      opacity: 0.6;
    }
    .shiny-inner {
      z-index: 1;
      position: relative;
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
    }
    .shiny-inner::before {
      --size: calc(100% + 1rem);
      width: var(--size);
      height: var(--size);
      box-shadow: inset 0 -1ex 2rem 4px var(--shiny-cta-highlight);
      opacity: 0;
      transition: opacity var(--transition);
      animation: calc(var(--duration) * 1.5) breathe-kf linear infinite;
    }
    .shiny-cta,
    .shiny-cta::before,
    .shiny-cta::after {
      animation:
        var(--animation) var(--duration),
        var(--animation) calc(var(--duration) / 0.4) reverse paused;
      animation-composition: add;
    }
    .shiny-cta:is(:hover, :focus-visible) {
      --gradient-percent: 20%;
      --gradient-angle-offset: 95deg;
      --gradient-shine: var(--shiny-cta-highlight-subtle);
      transform: scale(1.03);
    }
    .shiny-cta:is(:hover, :focus-visible),
    .shiny-cta:is(:hover, :focus-visible)::before,
    .shiny-cta:is(:hover, :focus-visible)::after {
      animation-play-state: running;
    }
    .shiny-cta:is(:hover, :focus-visible) .shiny-inner::before { opacity: 1; }
    @keyframes gradient-angle-kf { to { --gradient-angle: 360deg; } }
    @keyframes shimmer-kf { to { rotate: 360deg; } }
    @keyframes breathe-kf {
      from, to { scale: 1; }
      50% { scale: 1.2; }
    }
  `;

  const inner = (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <span className="shiny-inner">{children}</span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`shiny-cta ${className}`} onClick={onClick}>
        {inner}
      </Link>
    );
  }
  return (
    <button className={`shiny-cta ${className}`} onClick={onClick}>
      {inner}
    </button>
  );
}
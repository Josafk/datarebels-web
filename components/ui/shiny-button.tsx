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

  // Unique class per variant to avoid CSS collision between instances
  const uniqueClass = isBlue ? "shiny-blue" : "shiny-ghost";

  const css = `
    @property --ga { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
    @property --gao { syntax: "<angle>"; initial-value: 0deg; inherits: false; }
    @property --gp { syntax: "<percentage>"; initial-value: 5%; inherits: false; }
    @property --gs { syntax: "<color>"; initial-value: white; inherits: false; }

    .${uniqueClass} {
      --bg:  ${isBlue ? "#1330F4" : "#111"};
      --bg2: ${isBlue ? "#1e3bff" : "#222"};
      --hl:  ${isBlue ? "#7ec8ff" : "#6060ff"};
      --hl2: ${isBlue ? "#b8e0ff" : "#9090ff"};
      isolation: isolate;
      position: relative;
      overflow: hidden;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      white-space: nowrap;
      text-decoration: none;
      cursor: pointer;
      height: 2.5rem;
      padding: 0 1.125rem;
      border-radius: 999px;
      border: 1px solid transparent;
      font-family: var(--font-inter), ui-sans-serif, system-ui, sans-serif;
      font-size: 0.8125rem;
      font-weight: 700;
      color: #fff;
      background:
        linear-gradient(var(--bg), var(--bg)) padding-box,
        conic-gradient(
          from calc(var(--ga) - var(--gao)),
          transparent,
          var(--hl) var(--gp),
          var(--gs) calc(var(--gp) * 2),
          var(--hl) calc(var(--gp) * 3),
          transparent calc(var(--gp) * 4)
        ) border-box;
      box-shadow: inset 0 0 0 1px var(--bg2);
      /* Only animate the conic vars — no transform on base state */
      transition:
        --gao 800ms cubic-bezier(.25,1,.5,1),
        --gp  800ms cubic-bezier(.25,1,.5,1),
        --gs  800ms cubic-bezier(.25,1,.5,1);
      animation:
        shine-ga 3s linear infinite,
        shine-ga calc(3s / 0.4) linear infinite reverse paused;
      animation-composition: add;
    }

    /* Dots overlay */
    .${uniqueClass}::before {
      content: "";
      pointer-events: none;
      position: absolute;
      inset: 0;
      border-radius: inherit;
      z-index: 0;
      --pos: 2px;
      background:
        radial-gradient(circle at var(--pos) var(--pos), white calc(var(--pos)/4), transparent 0)
        padding-box;
      background-size: calc(var(--pos)*2) calc(var(--pos)*2);
      background-repeat: space;
      mask-image: conic-gradient(from calc(var(--ga) + 45deg), black, transparent 10% 90%, black);
      opacity: 0.35;
      animation: shine-ga 3s linear infinite,
                 shine-ga calc(3s / 0.4) linear infinite reverse paused;
      animation-composition: add;
    }

    /* Shimmer sweep */
    .${uniqueClass}::after {
      content: "";
      pointer-events: none;
      position: absolute;
      left: 50%; top: 50%;
      translate: -50% -50%;
      width: 100%; aspect-ratio: 1;
      background: linear-gradient(-50deg, transparent, var(--hl), transparent);
      mask-image: radial-gradient(circle at bottom, transparent 40%, black);
      opacity: 0.55;
      z-index: 0;
      animation: shine-shimmer 3s linear infinite paused;
    }

    /* Inner text sits above pseudo-elements */
    .${uniqueClass} > .s-inner {
      position: relative;
      z-index: 1;
      display: inline-flex;
      align-items: center;
      gap: 0.35rem;
    }

    /* Hover: widen the arc, keep playing */
    .${uniqueClass}:is(:hover, :focus-visible) {
      --gao: 95deg;
      --gp: 20%;
      --gs: var(--hl2);
    }
    .${uniqueClass}:is(:hover, :focus-visible),
    .${uniqueClass}:is(:hover, :focus-visible)::before,
    .${uniqueClass}:is(:hover, :focus-visible)::after {
      animation-play-state: running;
    }

    .${uniqueClass}:active { translate: 0 1px; }

    @keyframes shine-ga      { to { --ga: 360deg; } }
    @keyframes shine-shimmer { to { rotate: 360deg; } }
  `;

  const inner = (
    <>
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <span className="s-inner">{children}</span>
    </>
  );

  if (href) {
    return <Link href={href} className={`${uniqueClass} ${className}`} onClick={onClick}>{inner}</Link>;
  }
  return <button className={`${uniqueClass} ${className}`} onClick={onClick}>{inner}</button>;
}
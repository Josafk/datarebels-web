"use client";

import { memo, useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { animate } from "motion/react";

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white" | "pink-purple" | "rainbow";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.7,
    proximity = 0,
    spread = 20,
    variant = "default",
    glow = false,
    className,
    movementDuration = 2,
    borderWidth = 1,
    disabled = true,
  }: GlowingEffectProps) => {
    const containerRef  = useRef<HTMLDivElement>(null);
    const gradientRef   = useRef<HTMLDivElement>(null);
    const isPointerInsideRef = useRef(false);

    const getGradientColors = useCallback(() => {
      if (variant === "white") {
        return "transparent 0%, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.2) 75%, transparent 100%";
      }
      if (variant === "pink-purple") {
        return "transparent 0%, rgba(236,72,153,0.7) 25%, rgba(139,92,246,0.9) 50%, rgba(236,72,153,0.7) 75%, transparent 100%";
      }
      if (variant === "rainbow") {
        return "transparent 0%, rgba(226,201,251,1) 15%, rgba(106,63,209,1) 35%, rgba(255,107,107,1) 55%, rgba(255,154,86,1) 75%, transparent 100%";
      }
      // default: blue → violet → pink
      return "transparent 0%, rgba(59,130,246,0.7) 20%, rgba(139,92,246,0.9) 50%, rgba(236,72,153,0.7) 80%, transparent 100%";
    }, [variant]);

    const updateGlow = useCallback(
      (clientX: number, clientY: number) => {
        const container = containerRef.current;
        const gradient  = gradientRef.current;
        if (!container || !gradient) return;

        const rect = container.getBoundingClientRect();
        const expandedLeft   = rect.left   - proximity;
        const expandedTop    = rect.top    - proximity;
        const expandedRight  = rect.right  + proximity;
        const expandedBottom = rect.bottom + proximity;

        const isInside =
          clientX >= expandedLeft &&
          clientX <= expandedRight &&
          clientY >= expandedTop  &&
          clientY <= expandedBottom;

        if (!isInside && !glow) {
          isPointerInsideRef.current = false;
          animate(
            gradient,
            { opacity: 0 } as any,
            { duration: movementDuration * 0.3, ease: "easeOut" }
          );
          return;
        }

        isPointerInsideRef.current = true;
        const centerX  = rect.left + rect.width  / 2;
        const centerY  = rect.top  + rect.height / 2;
        const angle    = Math.atan2(clientY - centerY, clientX - centerX);
        const angleDeg = (angle * 180) / Math.PI + 90;
        const startAngle = angleDeg - spread / 2;

        gradient.style.background = `conic-gradient(from ${startAngle}deg, ${getGradientColors()})`;

        // ← Opacity subida de 0.4 → 0.85 para stroke visible
        animate(
          gradient,
          { opacity: glow || isInside ? 0.85 : 0 } as any,
          { duration: 0.15, ease: "easeOut" }
        );
      },
      [glow, proximity, spread, movementDuration, getGradientColors]
    );

    const handlePointerMove = useCallback(
      (e: PointerEvent) => {
        if (disabled && !glow) return;
        updateGlow(e.clientX, e.clientY);
      },
      [disabled, glow, updateGlow]
    );

    useEffect(() => {
      if (disabled && !glow) return;
      window.addEventListener("pointermove", handlePointerMove);
      return () => window.removeEventListener("pointermove", handlePointerMove);
    }, [disabled, glow, handlePointerMove]);

    return (
      <div
        ref={containerRef}
        className={cn("absolute inset-0 overflow-hidden rounded-[inherit]", className)}
        style={{ pointerEvents: "none" }}
      >
        <div
          ref={gradientRef}
          className={cn("absolute inset-0", !glow && "opacity-0")}
          style={{
            filter: blur ? `blur(${blur}px)` : undefined,
            background: `conic-gradient(from 0deg, ${getGradientColors()})`,
            padding: borderWidth,
            boxSizing: "border-box",
            borderRadius: "inherit",
            mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      </div>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";
export { GlowingEffect };
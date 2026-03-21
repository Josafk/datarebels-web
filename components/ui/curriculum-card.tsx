"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Clock, Video, Eye, Building2 } from "lucide-react";

export interface CurriculumBadge {
  icon: "clock" | "video" | "eye" | "building";
  label: string;
}

interface CurriculumCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  title: string;
  description: string;
  badges: CurriculumBadge[];
  href: string;
  themeColor: string;
}

const iconMap = {
  clock: Clock,
  video: Video,
  eye: Eye,
  building: Building2,
};

const CurriculumCard = React.forwardRef<HTMLDivElement, CurriculumCardProps>(
  ({ className, imageUrl, title, description, badges, href, themeColor, ...props }, ref) => {
    return (
      <div
        ref={ref}
        style={{ "--theme-color": themeColor } as React.CSSProperties & { "--theme-color": string }}
        className={cn("group w-full h-full", className)}
        {...props}
      >
        <a
          href={href}
          className="relative flex flex-col w-full h-full rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out group-hover:scale-[1.02]"
          aria-label={`Explore ${title}`}
          style={{ boxShadow: "0 0 40px -15px hsl(var(--theme-color) / 0.5)" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 ease-in-out group-hover:scale-110"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="absolute inset-0 z-0 bg-black/30" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#4a1a9e] via-[#682AC6]/70 to-transparent" />
          <div className="relative z-20 flex flex-col h-full p-5 text-white">
            <h3 className="font-title font-semibold text-[24px] leading-[26px] text-white mb-auto">
              {title}
            </h3>
            <div className="flex flex-col gap-2 mt-4">
              <p className="font-sans text-white/90 text-[12px] leading-[18px] line-clamp-4">
                {description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {badges.map((badge, i) => {
                  const Icon = iconMap[badge.icon];
                  return (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm text-white/90 text-[10px]"
                    >
                      <Icon className="w-2.5 h-2.5 flex-shrink-0" strokeWidth={2} />
                      {badge.label}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
);

CurriculumCard.displayName = "CurriculumCard";

export { CurriculumCard };

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showDomain?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  asLink?: boolean;
  monochrome?: boolean;
}

export function Logo({
  className,
  showDomain = true,
  size = "md",
  asLink = true,
  monochrome = false,
}: LogoProps) {
  const sizeMap = {
    sm: { icon: 22, text: "text-lg", domain: "text-[10px]", gap: "gap-2" },
    md: { icon: 28, text: "text-xl", domain: "text-xs", gap: "gap-2.5" },
    lg: { icon: 36, text: "text-2xl", domain: "text-sm", gap: "gap-3" },
    xl: { icon: 48, text: "text-4xl", domain: "text-base", gap: "gap-4" },
  };

  const currentSize = sizeMap[size];

  const content = (
    <div className={cn("inline-flex items-center select-none group font-sans tracking-tight", currentSize.gap, className)}>
      {/* Precision Geometric Glyph: 1008 synthesis emblem */}
      <div className="relative flex items-center justify-center">
        <svg
          width={currentSize.icon}
          height={currentSize.icon}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          {/* Subtle Outer Precision Ring */}
          <rect
            x="1"
            y="1"
            width="38"
            height="38"
            rx="8"
            stroke="currentColor"
            strokeOpacity="0.15"
            strokeWidth="1.5"
            className="text-white"
          />
          {/* Diagonal Architectural Beam */}
          <line
            x1="8"
            y1="32"
            x2="32"
            y2="8"
            stroke="currentColor"
            strokeOpacity="0.2"
            strokeWidth="1.5"
            strokeDasharray="2 2"
            className="text-white"
          />
          {/* Primary 1008 Geometry: Dual intersecting harmonic nodes */}
          <circle
            cx="14"
            cy="20"
            r="6"
            stroke={monochrome ? "currentColor" : "#F59E0B"}
            strokeWidth="2.5"
            className="transition-all duration-300 group-hover:stroke-amber-400"
          />
          <circle
            cx="26"
            cy="20"
            r="6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeOpacity="0.9"
            className="text-white transition-all duration-300 group-hover:stroke-white"
          />
          {/* Central Nexus Point */}
          <circle
            cx="20"
            cy="20"
            r="2"
            fill={monochrome ? "currentColor" : "#06B6D4"}
            className="transition-all duration-300 group-hover:scale-125"
          />
        </svg>
      </div>

      {/* Typographic Wordmark */}
      <div className="flex items-baseline">
        <span className={cn("font-bold tracking-tighter text-white font-mono", currentSize.text)}>
          1008
        </span>
        {showDomain && (
          <span
            className={cn(
              "font-mono font-medium tracking-normal ml-0.5 text-muted hover:text-white transition-colors",
              currentSize.domain
            )}
          >
            .network
          </span>
        )}
      </div>
    </div>
  );

  if (asLink) {
    return (
      <Link href="/" aria-label="1008.network Homepage" className="focus:outline-none focus-visible:ring-1 focus-visible:ring-accent-amber/50 rounded-md">
        {content}
      </Link>
    );
  }

  return content;
}

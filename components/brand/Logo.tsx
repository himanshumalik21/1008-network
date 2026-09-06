import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showDomain?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  asLink?: boolean;
  monochrome?: boolean;
}

export function Logo({
  className,
  showDomain = true,
  size = "lg",
  asLink = true,
  monochrome = false,
}: LogoProps) {
  const sizeMap = {
    sm: { icon: 28, text: "text-xl", domain: "text-xs", gap: "gap-2.5" },
    md: { icon: 34, text: "text-2xl sm:text-3xl", domain: "text-sm", gap: "gap-3" },
    lg: { icon: 42, text: "text-3xl sm:text-4xl", domain: "text-sm sm:text-base", gap: "gap-3.5" },
    xl: { icon: 52, text: "text-4xl sm:text-5xl", domain: "text-base sm:text-lg", gap: "gap-4" },
    hero: { icon: 64, text: "text-5xl sm:text-6xl", domain: "text-xl", gap: "gap-5" },
  };

  const currentSize = sizeMap[size];

  const content = (
    <div className={cn("inline-flex items-center select-none group font-sans tracking-tight", currentSize.gap, className)}>
      {/* Precision Geometric Glyph: 1008 synthesis emblem */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          width={currentSize.icon}
          height={currentSize.icon}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105 filter drop-shadow-sm"
        >
          {/* Subtle Outer Precision Ring */}
          <rect
            x="1.5"
            y="1.5"
            width="37"
            height="37"
            rx="9"
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeWidth="1.75"
            className="text-foreground"
          />
          {/* Diagonal Architectural Beam */}
          <line
            x1="8"
            y1="32"
            x2="32"
            y2="8"
            stroke="currentColor"
            strokeOpacity="0.25"
            strokeWidth="1.5"
            strokeDasharray="2.5 2.5"
            className="text-foreground"
          />
          {/* Primary 1008 Geometry: Dual intersecting harmonic nodes */}
          <circle
            cx="14"
            cy="20"
            r="6.5"
            stroke={monochrome ? "currentColor" : "#F59E0B"}
            strokeWidth="2.75"
            className="transition-all duration-300 group-hover:stroke-amber-400"
          />
          <circle
            cx="26"
            cy="20"
            r="6.5"
            stroke="currentColor"
            strokeWidth="2.75"
            strokeOpacity="0.85"
            className="text-foreground transition-all duration-300 group-hover:text-amber-500"
          />
          {/* Central Nexus Point */}
          <circle
            cx="20"
            cy="20"
            r="2.5"
            fill={monochrome ? "currentColor" : "#06B6D4"}
            className="transition-all duration-300 group-hover:scale-125"
          />
        </svg>
      </div>

      {/* Typographic Wordmark */}
      <div className="flex items-baseline">
        <span className={cn("font-extrabold tracking-tighter text-foreground font-mono transition-colors", currentSize.text)}>
          1008
        </span>
        {showDomain && (
          <span
            className={cn(
              "font-mono font-semibold tracking-tight ml-1 text-muted-foreground group-hover:text-amber-500 transition-colors",
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
      <Link href="/" aria-label="1008.network Homepage" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber/50 rounded-lg inline-block">
        {content}
      </Link>
    );
  }

  return content;
}

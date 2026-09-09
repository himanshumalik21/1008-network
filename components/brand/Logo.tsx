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
    sm: { icon: 26, text: "text-lg", domain: "text-xs", gap: "gap-2" },
    md: { icon: 32, text: "text-2xl sm:text-3xl", domain: "text-sm", gap: "gap-2.5" },
    lg: { icon: 38, text: "text-3xl sm:text-4xl", domain: "text-sm sm:text-base", gap: "gap-3" },
    xl: { icon: 48, text: "text-4xl sm:text-5xl", domain: "text-base sm:text-lg", gap: "gap-3.5" },
    hero: { icon: 60, text: "text-5xl sm:text-6xl", domain: "text-xl", gap: "gap-4" },
  };

  const currentSize = sizeMap[size];

  const content = (
    <div className={cn("inline-flex items-center select-none group font-sans tracking-tight", currentSize.gap, className)}>
      {/* Stripe-Grade High Precision Geometric Glyph */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          width={currentSize.icon}
          height={currentSize.icon}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          {/* Subtle Outer Precision Rounded Rect */}
          <rect
            x="2"
            y="2"
            width="36"
            height="36"
            rx="10"
            fill="#F6F9FC"
            stroke="#E6E8EB"
            strokeWidth="1.5"
          />
          {/* Primary 1008 Geometry: Dual intersecting harmonic nodes */}
          <circle
            cx="14.5"
            cy="20"
            r="6.5"
            stroke={monochrome ? "currentColor" : "#635BFF"}
            strokeWidth="2.5"
            className="transition-all duration-300 group-hover:stroke-[#5851EA]"
          />
          <circle
            cx="25.5"
            cy="20"
            r="6.5"
            stroke={monochrome ? "currentColor" : "#0A2540"}
            strokeWidth="2.5"
            strokeOpacity="0.85"
            className="transition-all duration-300 group-hover:stroke-[#635BFF]"
          />
          {/* Central Nexus Point */}
          <circle
            cx="20"
            cy="20"
            r="2.2"
            fill={monochrome ? "currentColor" : "#00D4B2"}
            className="transition-all duration-300 group-hover:scale-125"
          />
        </svg>
      </div>

      {/* Typographic Wordmark */}
      <div className="flex items-baseline">
        <span className={cn("font-extrabold tracking-tight text-[#0A2540] font-sans transition-colors", currentSize.text)}>
          1008
        </span>
        {showDomain && (
          <span
            className={cn(
              "font-medium tracking-tight ml-1 text-[#627D98] group-hover:text-[#635BFF] transition-colors font-sans",
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
      <Link href="/" aria-label="1008.network Homepage" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#635BFF]/50 rounded-lg inline-block">
        {content}
      </Link>
    );
  }

  return content;
}

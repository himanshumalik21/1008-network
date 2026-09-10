import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showDomain?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  asLink?: boolean;
  monochrome?: boolean;
  variant?: "full" | "mark-only" | "wordmark-only";
}

export function Logo({
  className,
  showDomain = true,
  size = "lg",
  asLink = true,
  monochrome = false,
  variant = "full",
}: LogoProps) {
  const sizeMap = {
    sm: {
      mark: "h-6 w-6",
      markSvg: 24,
      text: "text-lg",
      domain: "text-[11px]",
      gap: "gap-2",
    },
    md: {
      mark: "h-7 w-7",
      markSvg: 28,
      text: "text-xl",
      domain: "text-xs",
      gap: "gap-2.5",
    },
    lg: {
      mark: "h-8 w-8 sm:h-9 sm:w-9",
      markSvg: 32,
      text: "text-2xl sm:text-[25px]",
      domain: "text-xs sm:text-[13px]",
      gap: "gap-2.5 sm:gap-3",
    },
    xl: {
      mark: "h-11 w-11",
      markSvg: 44,
      text: "text-3xl sm:text-4xl",
      domain: "text-sm sm:text-base",
      gap: "gap-3.5",
    },
    hero: {
      mark: "h-14 w-14",
      markSvg: 56,
      text: "text-4xl sm:text-5xl",
      domain: "text-base sm:text-lg",
      gap: "gap-4",
    },
  };

  const currentSize = sizeMap[size];

  // Precision Geometric Vector Mark for 1008
  // Strict simplicity: Interlocking dual-orbit nexus (00 / 8) with an integrated vertical apex (1)
  const geometricMark = (
    <div
      className={cn(
        "relative flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-[1.04]",
        currentSize.mark
      )}
    >
      <svg
        viewBox="0 0 36 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer Minimalist Diamond Container with Soft Corner Radii */}
        <rect
          x="1"
          y="1"
          width="34"
          height="34"
          rx="9"
          fill={monochrome ? "currentColor" : "#0A2540"}
          className="transition-colors duration-200"
        />

        {/* 1008 Harmonic Nexus Nodes */}
        {/* Left Node (1 + 0) */}
        <circle
          cx="13"
          cy="18"
          r="5.5"
          stroke={monochrome ? "#FFFFFF" : "#635BFF"}
          strokeWidth="2.75"
        />
        {/* Right Node (0 + 8) */}
        <circle
          cx="23"
          cy="18"
          r="5.5"
          stroke={monochrome ? "#FFFFFF" : "#00D4B2"}
          strokeWidth="2.75"
        />
        {/* Central Interlocking Apex Core */}
        <rect
          x="16.5"
          y="12.5"
          width="3"
          height="11"
          rx="1.5"
          fill="#FFFFFF"
        />
      </svg>
    </div>
  );

  const content = (
    <div
      className={cn(
        "inline-flex items-center select-none group font-sans tracking-tight",
        currentSize.gap,
        className
      )}
    >
      {/* 1. Iconic Minimalist Mark */}
      {variant !== "wordmark-only" && geometricMark}

      {/* 2. Razor-Sharp Typographic Lockup */}
      {variant !== "mark-only" && (
        <div className="flex items-baseline tracking-[-0.04em]">
          <span
            className={cn(
              "font-extrabold transition-colors duration-150 font-sans",
              monochrome
                ? "text-current"
                : "text-[#0A2540] group-hover:text-[#635BFF]",
              currentSize.text
            )}
          >
            1008
          </span>
          {showDomain && (
            <span
              className={cn(
                "font-medium tracking-normal ml-1 transition-colors duration-150 font-sans",
                monochrome
                  ? "opacity-75"
                  : "text-[#627D98] group-hover:text-[#425466]",
                currentSize.domain
              )}
            >
              .network
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        aria-label="1008.network Homepage"
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#635BFF]/50 rounded-xl inline-block"
      >
        {content}
      </Link>
    );
  }

  return content;
}


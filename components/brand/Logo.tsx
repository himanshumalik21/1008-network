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
    sm: {
      iconBox: "h-7 w-7 rounded-lg",
      iconSvg: "w-4 h-4",
      text: "text-lg",
      domain: "text-xs",
      gap: "gap-2.5",
    },
    md: {
      iconBox: "h-8 w-8 rounded-lg",
      iconSvg: "w-4.5 h-4.5",
      text: "text-xl",
      domain: "text-xs",
      gap: "gap-2.5",
    },
    lg: {
      iconBox: "h-9 w-9 sm:h-10 sm:w-10 rounded-xl",
      iconSvg: "w-5 h-5 sm:w-5.5 sm:h-5.5",
      text: "text-2xl sm:text-[26px]",
      domain: "text-sm",
      gap: "gap-3",
    },
    xl: {
      iconBox: "h-12 w-12 rounded-2xl",
      iconSvg: "w-7 h-7",
      text: "text-3xl sm:text-4xl",
      domain: "text-base",
      gap: "gap-3.5",
    },
    hero: {
      iconBox: "h-14 w-14 rounded-2xl",
      iconSvg: "w-8 h-8",
      text: "text-4xl sm:text-5xl",
      domain: "text-lg",
      gap: "gap-4",
    },
  };

  const currentSize = sizeMap[size];

  const content = (
    <div className={cn("inline-flex items-center select-none group font-sans", currentSize.gap, className)}>
      {/* Stripe-Caliber Precision Minimalist Glyph */}
      <div
        className={cn(
          "relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105",
          monochrome
            ? "bg-[#0A2540] text-white"
            : "bg-[#635BFF] text-white shadow-[0_2px_8px_rgba(99,91,255,0.25)]",
          currentSize.iconBox
        )}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={currentSize.iconSvg}
        >
          {/* Minimalist 1008 Intersecting Infinity / Orbit Node Geometry */}
          <path
            d="M7 12C7 9.79086 8.79086 8 11 8C13.2091 8 15 9.79086 15 12C15 14.2091 13.2091 16 11 16C8.79086 16 7 14.2091 7 12Z"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M13 12C13 9.79086 14.7909 8 17 8C19.2091 8 21 9.79086 21 12C21 14.2091 19.2091 16 17 16C14.7909 16 13 14.2091 13 12Z"
            stroke="white"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeOpacity="0.85"
          />
          <circle cx="4" cy="12" r="1.5" fill="white" />
        </svg>
      </div>

      {/* Typographic Wordmark */}
      <div className="flex items-baseline tracking-[-0.03em]">
        <span
          className={cn(
            "font-bold text-[#0A2540] font-sans transition-colors duration-200 group-hover:text-[#635BFF]",
            currentSize.text
          )}
        >
          1008
        </span>
        {showDomain && (
          <span
            className={cn(
              "font-medium ml-1 text-[#627D98] transition-colors duration-200 group-hover:text-[#425466]",
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

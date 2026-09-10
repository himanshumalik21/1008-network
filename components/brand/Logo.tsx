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
  showDomain = false,
  size = "lg",
  asLink = true,
  monochrome = false,
}: LogoProps) {
  const sizeMap = {
    sm: {
      text: "text-xl",
      domain: "text-[11px]",
    },
    md: {
      text: "text-2xl",
      domain: "text-xs",
    },
    lg: {
      text: "text-2xl sm:text-[30px]",
      domain: "text-xs sm:text-[13px]",
    },
    xl: {
      text: "text-3xl sm:text-4xl",
      domain: "text-sm sm:text-base",
    },
    hero: {
      text: "text-5xl sm:text-6xl",
      domain: "text-base sm:text-lg",
    },
  };

  const currentSize = sizeMap[size];

  const content = (
    <div
      className={cn(
        "inline-flex items-baseline select-none group font-sans tracking-[-0.05em]",
        className
      )}
    >
      {/* Pure Iconic 1008 Wordmark */}
      <span
        className={cn(
          "font-black leading-none transition-colors duration-150 font-sans",
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
            "font-semibold tracking-normal ml-0.5 transition-colors duration-150 font-sans",
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
  );

  if (asLink) {
    return (
      <Link
        href="/"
        aria-label="1008 Homepage"
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#635BFF]/50 rounded-lg inline-flex items-baseline"
      >
        {content}
      </Link>
    );
  }

  return content;
}




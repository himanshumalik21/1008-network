import React, { useId } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showDomain?: boolean;
  size?: "sm" | "md" | "lg" | "xl" | "hero";
  asLink?: boolean;
  monochrome?: boolean;
  animated?: boolean;
}

export function Logo({
  className,
  showDomain = false,
  size = "lg",
  asLink = true,
  monochrome = false,
  animated = true,
}: LogoProps) {
  const rawId = useId();
  const id = rawId.replace(/[^a-zA-Z0-9_-]/g, "");

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
        "inline-flex items-baseline select-none group font-sans tracking-[-0.04em]",
        className
      )}
    >
      {/* Pure Iconic 1008 Network Wordmark */}
      <span
        className={cn(
          "font-black leading-none transition-colors duration-150 font-sans inline-flex items-baseline",
          monochrome
            ? "text-current"
            : "text-[#0A2540] group-hover:text-[#635BFF]",
          currentSize.text
        )}
      >
        <span>1</span>
        {animated ? (
          <span
            className="inline-flex items-baseline select-none shrink-0"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 100 66"
              className="inline-block overflow-visible select-none pointer-events-none"
              style={{
                height: "0.76em",
                width: "1.15em",
                verticalAlign: "-0.09em",
                margin: "0 0.02em",
              }}
              role="presentation"
            >
              <defs>
                <linearGradient
                  id={`brandGrad-${id}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#635BFF" />
                  <stop offset="50%" stopColor="#4E7BFF" />
                  <stop offset="100%" stopColor="#00D4B2" />
                </linearGradient>
                <filter
                  id={`infinityGlow-${id}`}
                  x="-30%"
                  y="-30%"
                  width="160%"
                  height="160%"
                >
                  <feDropShadow
                    dx="0"
                    dy="0"
                    stdDeviation="3"
                    floodColor="#635BFF"
                    floodOpacity="0.4"
                  />
                </filter>
              </defs>

              {/* Left Zero */}
              <rect
                className="animate-zero-left"
                x="8"
                y="8"
                width="36"
                height="50"
                rx="16"
                ry="16"
                fill="none"
                strokeWidth="11"
              />

              {/* Right Zero */}
              <rect
                className="animate-zero-right"
                x="56"
                y="8"
                width="36"
                height="50"
                rx="16"
                ry="16"
                fill="none"
                strokeWidth="11"
              />

              {/* Infinity Symbol — Zero to Infinite Possibilities */}
              <path
                className="animate-infinity-bloom"
                d="M 50 33 C 60 18 73 15 82 18 C 91 21 93 28 93 33 C 93 38 91 45 82 48 C 73 51 60 48 50 33 C 40 18 27 15 18 18 C 9 21 7 28 7 33 C 7 38 9 45 18 48 C 27 51 40 48 50 33 Z"
                fill="none"
                stroke={`url(#brandGrad-${id})`}
                strokeWidth="11"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter={`url(#infinityGlow-${id})`}
              />
            </svg>
          </span>
        ) : (
          <span>00</span>
        )}
        <span>8</span>
      </span>
      <span
        className={cn(
          "font-bold leading-none ml-1.5 transition-colors duration-150 font-sans",
          monochrome
            ? "text-current opacity-90"
            : "text-[#0A2540] group-hover:text-[#635BFF]",
          currentSize.text
        )}
      >
        Network
      </span>
    </div>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        aria-label="1008 Network Homepage"
        className="focus:outline-none focus-visible:ring-2 focus-visible:ring-[#635BFF]/50 rounded-lg inline-flex items-baseline"
      >
        {content}
      </Link>
    );
  }

  return content;
}

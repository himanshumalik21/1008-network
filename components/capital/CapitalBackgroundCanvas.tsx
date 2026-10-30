"use client";

import React from "react";

export function CapitalBackgroundCanvas() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none"
    >
      {/* 1. Base Subtle Ambient Tint */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F7FCFA] via-white to-[#F6F9FD]" />

      {/* 2. Atmospheric Radiant Lighting (Mint #00D4B2 & Iris #635BFF & Teal #00A389) */}
      <div className="absolute -top-[15%] right-0 w-[55vw] h-[55vw] max-w-[850px] max-h-[850px] rounded-full bg-gradient-to-bl from-[#00D4B2]/12 via-[#00A389]/08 to-transparent blur-3xl opacity-80" />
      <div className="absolute top-[35%] -left-[10%] w-[50vw] h-[50vw] max-w-[750px] max-h-[750px] rounded-full bg-gradient-to-tr from-[#635BFF]/08 via-[#00D4B2]/06 to-transparent blur-3xl opacity-75" />
      <div className="absolute -bottom-[10%] right-[10%] w-[45vw] h-[45vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-tl from-[#00A389]/10 via-[#635BFF]/06 to-transparent blur-3xl opacity-70" />

      {/* 3. Topographical Elevation Wave Vectors (Slide 1 & Slide 3 inspiration) */}
      <svg
        className="absolute inset-0 w-full h-full opacity-35"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="topoMintGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4B2" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#00A389" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#635BFF" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="topoTealGrad" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#635BFF" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#00D4B2" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0A2540" stopOpacity="0.15" />
          </linearGradient>

          <radialGradient id="topoCenterMaskGrad" cx="50%" cy="50%" r="52%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.15" />
            <stop offset="45%" stopColor="#ffffff" stopOpacity="0.4" />
            <stop offset="85%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
          </radialGradient>
          <mask id="topoCenterMask">
            <rect width="1920" height="1080" fill="url(#topoCenterMaskGrad)" />
          </mask>
        </defs>

        {/* Topographic flowing isoline contours */}
        <g mask="url(#topoCenterMask)">
          {/* Wave 1 */}
          <path
            d="M-100,280 C320,180 640,420 1020,310 C1400,200 1680,380 2020,260"
            fill="none"
            stroke="url(#topoMintGrad)"
            strokeWidth="1.6"
            strokeDasharray="4 8"
          />
          {/* Wave 2 */}
          <path
            d="M-80,340 C340,240 670,480 1050,370 C1430,260 1710,440 2050,320"
            fill="none"
            stroke="url(#topoMintGrad)"
            strokeWidth="1.8"
          />
          {/* Wave 3 */}
          <path
            d="M-60,400 C360,300 700,540 1080,430 C1460,320 1740,500 2080,380"
            fill="none"
            stroke="url(#topoTealGrad)"
            strokeWidth="1.5"
          />
          {/* Wave 4 */}
          <path
            d="M-40,460 C380,360 730,600 1110,490 C1490,380 1770,560 2110,440"
            fill="none"
            stroke="url(#topoTealGrad)"
            strokeWidth="1.4"
            strokeDasharray="6 12"
          />

          {/* Symmetrical Lower Ridge */}
          <path
            d="M-100,720 C280,820 620,680 1000,790 C1380,900 1660,740 2020,830"
            fill="none"
            stroke="url(#topoMintGrad)"
            strokeWidth="1.5"
          />
          <path
            d="M-80,780 C300,880 650,740 1030,850 C1410,960 1690,800 2050,890"
            fill="none"
            stroke="url(#topoTealGrad)"
            strokeWidth="1.8"
          />

          {/* Hexagonal Isometric Mesh Lattice on Corners (Slide 14) */}
          <g opacity="0.35" stroke="#00D4B2" strokeWidth="0.8" fill="none">
            <polygon points="1720,120 1750,135 1750,170 1720,185 1690,170 1690,135" />
            <polygon points="1780,155 1810,170 1810,205 1780,220 1750,205 1750,170" />
            <polygon points="1840,190 1870,205 1870,240 1840,255 1810,240 1810,205" />
            <polygon points="1720,190 1750,205 1750,240 1720,255 1690,240 1690,205" />
            <polygon points="1780,225 1810,240 1810,275 1780,290 1750,275 1750,240" />
          </g>
        </g>
      </svg>
    </div>
  );
}

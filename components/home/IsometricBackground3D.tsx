"use client";

import React from "react";

export function IsometricBackground3D() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden z-0 select-none"
    >
      {/* 1. Ambient Background Gradient Tint */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F5F8FE] via-[#F8FAFD] to-[#EDF3FF]" />

      {/* Atmospheric Soft Radiant Halos */}
      <div className="absolute -top-[20%] -left-[10%] w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-br from-[#635BFF]/12 via-[#00D4B2]/10 to-transparent blur-3xl opacity-75" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-tl from-[#635BFF]/14 via-[#4F46E5]/10 to-transparent blur-3xl opacity-75" />
      <div className="absolute top-[25%] right-[20%] w-[40vw] h-[40vw] max-w-[550px] max-h-[550px] rounded-full bg-gradient-to-tr from-[#00A68C]/10 to-transparent blur-3xl opacity-65" />

      {/* 2. Decagon-Style 3D Vector Contour & Isometric Grid Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Main 3D line gradient: vibrant iris to emerald to violet */}
          <linearGradient id="gridGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#635BFF" />
            <stop offset="50%" stopColor="#00A68C" />
            <stop offset="100%" stopColor="#4F46E5" />
          </linearGradient>

          {/* Secondary 3D line gradient: teal/mint to blurple to coral */}
          <linearGradient id="gridGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00D4B2" />
            <stop offset="50%" stopColor="#635BFF" />
            <stop offset="100%" stopColor="#FF6B4A" />
          </linearGradient>
        </defs>

        {/* A. Diagonal Lattice Grid Lines (Top-Left to Bottom-Right) */}
        <g stroke="url(#gridGrad1)" strokeWidth="1.5" opacity="0.32">
          <line x1="-1200" y1="0" x2="720" y2="1920" />
          <line x1="-1040" y1="0" x2="880" y2="1920" />
          <line x1="-880" y1="0" x2="1040" y2="1920" />
          <line x1="-720" y1="0" x2="1200" y2="1920" />
          <line x1="-560" y1="0" x2="1360" y2="1920" />
          <line x1="-400" y1="0" x2="1520" y2="1920" />
          <line x1="-240" y1="0" x2="1680" y2="1920" />
          <line x1="-80" y1="0" x2="1840" y2="1920" />
          <line x1="80" y1="0" x2="2000" y2="1920" />
          <line x1="240" y1="0" x2="2160" y2="1920" />
          <line x1="400" y1="0" x2="2320" y2="1920" />
          <line x1="560" y1="0" x2="2480" y2="1920" />
          <line x1="720" y1="0" x2="2640" y2="1920" />
          <line x1="880" y1="0" x2="2800" y2="1920" />
          <line x1="1040" y1="0" x2="2960" y2="1920" />
          <line x1="1200" y1="0" x2="3120" y2="1920" />
          <line x1="1360" y1="0" x2="3280" y2="1920" />
          <line x1="1520" y1="0" x2="3440" y2="1920" />
          <line x1="1680" y1="0" x2="3600" y2="1920" />
          <line x1="1840" y1="0" x2="3760" y2="1920" />
          <line x1="2000" y1="0" x2="3920" y2="1920" />
        </g>

        {/* B. Diagonal Lattice Grid Lines (Bottom-Left to Top-Right) */}
        <g stroke="url(#gridGrad2)" strokeWidth="1.5" opacity="0.28">
          <line x1="-600" y1="1080" x2="1320" y2="-840" />
          <line x1="-440" y1="1080" x2="1480" y2="-840" />
          <line x1="-280" y1="1080" x2="1640" y2="-840" />
          <line x1="-120" y1="1080" x2="1800" y2="-840" />
          <line x1="40" y1="1080" x2="1960" y2="-840" />
          <line x1="200" y1="1080" x2="2120" y2="-840" />
          <line x1="360" y1="1080" x2="2280" y2="-840" />
          <line x1="520" y1="1080" x2="2440" y2="-840" />
          <line x1="680" y1="1080" x2="2600" y2="-840" />
          <line x1="840" y1="1080" x2="2760" y2="-840" />
          <line x1="1000" y1="1080" x2="2920" y2="-840" />
          <line x1="1160" y1="1080" x2="3080" y2="-840" />
          <line x1="1320" y1="1080" x2="3240" y2="-840" />
          <line x1="1480" y1="1080" x2="3400" y2="-840" />
          <line x1="1640" y1="1080" x2="3560" y2="-840" />
          <line x1="1800" y1="1080" x2="3720" y2="-840" />
          <line x1="1960" y1="1080" x2="3880" y2="-840" />
          <line x1="2120" y1="1080" x2="4040" y2="-840" />
          <line x1="2280" y1="1080" x2="4200" y2="-840" />
          <line x1="2440" y1="1080" x2="4360" y2="-840" />
        </g>

        {/* C. Decagon Concentric 3D Stadium Capsule Contours (Centered at x=960, y=540) */}
        <g fill="none">
          {/* Outer Stadium Capsule */}
          <rect
            x="460"
            y="-80"
            width="1000"
            height="1240"
            rx="500"
            ry="500"
            stroke="url(#gridGrad1)"
            strokeWidth="2.5"
            opacity="0.65"
          />
          {/* Mid-Outer Stadium Capsule */}
          <rect
            x="560"
            y="20"
            width="800"
            height="1040"
            rx="400"
            ry="400"
            stroke="url(#gridGrad2)"
            strokeWidth="2.2"
            opacity="0.6"
          />
          {/* Center Stadium Capsule */}
          <rect
            x="660"
            y="120"
            width="600"
            height="840"
            rx="300"
            ry="300"
            stroke="url(#gridGrad1)"
            strokeWidth="2"
            opacity="0.55"
          />
          {/* Inner Stadium Capsule */}
          <rect
            x="760"
            y="220"
            width="400"
            height="640"
            rx="200"
            ry="200"
            stroke="url(#gridGrad2)"
            strokeWidth="1.8"
            opacity="0.5"
          />
          {/* Core Stadium Capsule */}
          <rect
            x="860"
            y="320"
            width="200"
            height="440"
            rx="100"
            ry="100"
            stroke="url(#gridGrad1)"
            strokeWidth="1.6"
            opacity="0.45"
          />
        </g>

        {/* D. 3D Dimensional Corner Orbits */}
        <circle cx="240" cy="200" r="180" fill="none" stroke="url(#gridGrad1)" strokeWidth="1.8" opacity="0.4" />
        <circle cx="240" cy="200" r="300" fill="none" stroke="url(#gridGrad2)" strokeWidth="1.4" opacity="0.25" />
        <circle cx="1680" cy="880" r="220" fill="none" stroke="url(#gridGrad2)" strokeWidth="1.8" opacity="0.4" />
        <circle cx="1680" cy="880" r="360" fill="none" stroke="url(#gridGrad1)" strokeWidth="1.4" opacity="0.25" />
      </svg>
    </div>
  );
}

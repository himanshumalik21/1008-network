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

      {/* Atmospheric Soft Radiant Halos (Darker/Vibrant on Edges, Subtle Ambient in Center) */}
      <div className="absolute -top-[20%] -left-[10%] w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-br from-[#4F46E5]/18 via-[#00A68C]/14 to-transparent blur-3xl opacity-85" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-tl from-[#312E81]/20 via-[#4F46E5]/14 to-transparent blur-3xl opacity-85" />
      <div className="absolute top-[20%] left-[25%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] rounded-full bg-gradient-to-r from-[#635BFF]/6 via-[#00D4B2]/6 to-[#4F46E5]/6 blur-3xl opacity-60" />
      <div className="absolute top-[30%] right-[15%] w-[40vw] h-[40vw] max-w-[550px] max-h-[550px] rounded-full bg-gradient-to-tr from-[#0F766E]/14 to-transparent blur-3xl opacity-75" />

      {/* 2. Decagon-Style 3D Vector Contour & Isometric Grid Lines (Dark on Sides • Light in Center) */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Vignette Contrast Mask: Full Opacity on Outer Sides (100%), Soft/Light in Center (18%) */}
          <radialGradient id="sidesDarkCenterLightGrad" cx="50%" cy="50%" r="56%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.18" />
            <stop offset="35%" stopColor="#ffffff" stopOpacity="0.35" />
            <stop offset="70%" stopColor="#ffffff" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="1.0" />
          </radialGradient>
          <mask id="sidesDarkCenterLightMask">
            <rect x="-2000" y="-2000" width="6000" height="6000" fill="url(#sidesDarkCenterLightGrad)" />
          </mask>

          {/* Main 3D line gradient: deep obsidian indigo on sides, softer iris in center */}
          <linearGradient id="gridGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#312E81" />
            <stop offset="25%" stopColor="#4F46E5" />
            <stop offset="50%" stopColor="#818CF8" />
            <stop offset="75%" stopColor="#4F46E5" />
            <stop offset="100%" stopColor="#312E81" />
          </linearGradient>

          {/* Secondary 3D line gradient: deep dark teal on sides, soft teal in center */}
          <linearGradient id="gridGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0F766E" />
            <stop offset="25%" stopColor="#00A68C" />
            <stop offset="50%" stopColor="#5EEAD4" />
            <stop offset="75%" stopColor="#00A68C" />
            <stop offset="100%" stopColor="#0F766E" />
          </linearGradient>
        </defs>

        {/* Masked Group: Darker on outer sides, smoothly dissolving into lighter lines in center */}
        <g mask="url(#sidesDarkCenterLightMask)">
          {/* A. Diagonal Lattice Grid Lines (Top-Left to Bottom-Right) */}
          <g stroke="url(#gridGrad1)" strokeWidth="2.2" opacity="0.90">
            <line x1="-1320" y1="0" x2="600" y2="1920" />
            <line x1="-1200" y1="0" x2="720" y2="1920" />
            <line x1="-1080" y1="0" x2="840" y2="1920" />
            <line x1="-960" y1="0" x2="960" y2="1920" />
            <line x1="-840" y1="0" x2="1080" y2="1920" />
            <line x1="-720" y1="0" x2="1200" y2="1920" />
            <line x1="-600" y1="0" x2="1320" y2="1920" />
            <line x1="-480" y1="0" x2="1440" y2="1920" />
            <line x1="-360" y1="0" x2="1560" y2="1920" />
            <line x1="-240" y1="0" x2="1680" y2="1920" />
            <line x1="-120" y1="0" x2="1800" y2="1920" />
            <line x1="0" y1="0" x2="1920" y2="1920" />
            <line x1="120" y1="0" x2="2040" y2="1920" />
            <line x1="240" y1="0" x2="2160" y2="1920" />
            <line x1="360" y1="0" x2="2280" y2="1920" />
            <line x1="480" y1="0" x2="2400" y2="1920" />
            <line x1="600" y1="0" x2="2520" y2="1920" />
            <line x1="720" y1="0" x2="2640" y2="1920" />
            <line x1="840" y1="0" x2="2760" y2="1920" />
            <line x1="960" y1="0" x2="2880" y2="1920" />
            <line x1="1080" y1="0" x2="3000" y2="1920" />
            <line x1="1200" y1="0" x2="3120" y2="1920" />
            <line x1="1320" y1="0" x2="3240" y2="1920" />
            <line x1="1440" y1="0" x2="3360" y2="1920" />
            <line x1="1560" y1="0" x2="3480" y2="1920" />
            <line x1="1680" y1="0" x2="3600" y2="1920" />
            <line x1="1800" y1="0" x2="3720" y2="1920" />
            <line x1="1920" y1="0" x2="3840" y2="1920" />
            <line x1="2040" y1="0" x2="3960" y2="1920" />
            <line x1="2160" y1="0" x2="4080" y2="1920" />
            <line x1="2280" y1="0" x2="4200" y2="1920" />
          </g>

          {/* B. Diagonal Lattice Grid Lines (Bottom-Left to Top-Right) */}
          <g stroke="url(#gridGrad2)" strokeWidth="2.2" opacity="0.85">
            <line x1="-720" y1="1080" x2="1200" y2="-840" />
            <line x1="-600" y1="1080" x2="1320" y2="-840" />
            <line x1="-480" y1="1080" x2="1440" y2="-840" />
            <line x1="-360" y1="1080" x2="1560" y2="-840" />
            <line x1="-240" y1="1080" x2="1680" y2="-840" />
            <line x1="-120" y1="1080" x2="1800" y2="-840" />
            <line x1="0" y1="1080" x2="1920" y2="-840" />
            <line x1="120" y1="1080" x2="2040" y2="-840" />
            <line x1="240" y1="1080" x2="2160" y2="-840" />
            <line x1="360" y1="1080" x2="2280" y2="-840" />
            <line x1="480" y1="1080" x2="2400" y2="-840" />
            <line x1="600" y1="1080" x2="2520" y2="-840" />
            <line x1="720" y1="1080" x2="2640" y2="-840" />
            <line x1="840" y1="1080" x2="2760" y2="-840" />
            <line x1="960" y1="1080" x2="2880" y2="-840" />
            <line x1="1080" y1="1080" x2="3000" y2="-840" />
            <line x1="1200" y1="1080" x2="3120" y2="-840" />
            <line x1="1320" y1="1080" x2="3240" y2="-840" />
            <line x1="1440" y1="1080" x2="3360" y2="-840" />
            <line x1="1560" y1="1080" x2="3480" y2="-840" />
            <line x1="1680" y1="1080" x2="3600" y2="-840" />
            <line x1="1800" y1="1080" x2="3720" y2="-840" />
            <line x1="1920" y1="1080" x2="3840" y2="-840" />
            <line x1="2040" y1="1080" x2="3960" y2="-840" />
            <line x1="2160" y1="1080" x2="4080" y2="-840" />
            <line x1="2280" y1="1080" x2="4200" y2="-840" />
            <line x1="2400" y1="1080" x2="4320" y2="-840" />
            <line x1="2520" y1="1080" x2="4440" y2="-840" />
          </g>

          {/* C. Decagon Concentric 3D Stadium Capsule Contours (Dark Outer • Light Inner) */}
          <g fill="none">
            {/* Outer Stadium Capsule (Bold & Dark on Sides) */}
            <rect
              x="420"
              y="-120"
              width="1080"
              height="1320"
              rx="540"
              ry="540"
              stroke="url(#gridGrad1)"
              strokeWidth="3.2"
              opacity="0.88"
            />
            {/* Mid-Outer Stadium Capsule */}
            <rect
              x="520"
              y="-20"
              width="880"
              height="1120"
              rx="440"
              ry="440"
              stroke="url(#gridGrad2)"
              strokeWidth="2.8"
              opacity="0.68"
            />
            {/* Center Stadium Capsule */}
            <rect
              x="620"
              y="80"
              width="680"
              height="920"
              rx="340"
              ry="340"
              stroke="url(#gridGrad1)"
              strokeWidth="2.4"
              opacity="0.48"
            />
            {/* Inner Stadium Capsule (Lighter) */}
            <rect
              x="720"
              y="180"
              width="480"
              height="720"
              rx="240"
              ry="240"
              stroke="url(#gridGrad2)"
              strokeWidth="2.0"
              opacity="0.30"
            />
            {/* Core Stadium Capsule (Delicately Light in Center) */}
            <rect
              x="820"
              y="280"
              width="280"
              height="520"
              rx="140"
              ry="140"
              stroke="url(#gridGrad1)"
              strokeWidth="1.6"
              opacity="0.18"
            />
          </g>

          {/* D. 3D Dimensional Corner Orbits (Dark & Crisp on Sides) */}
          <circle cx="240" cy="200" r="180" fill="none" stroke="url(#gridGrad1)" strokeWidth="2.4" opacity="0.80" />
          <circle cx="240" cy="200" r="300" fill="none" stroke="url(#gridGrad2)" strokeWidth="2.0" opacity="0.65" />
          <circle cx="1680" cy="880" r="220" fill="none" stroke="url(#gridGrad2)" strokeWidth="2.4" opacity="0.80" />
          <circle cx="1680" cy="880" r="360" fill="none" stroke="url(#gridGrad1)" strokeWidth="2.0" opacity="0.65" />
        </g>
      </svg>
    </div>
  );
}

"use client";

import React from "react";

export function IsometricBackground3D() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden -z-10 select-none"
    >
      {/* 1. Subtle Ambient Gradient Wash (Decagon / Stripe light atmospheric glow) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F6F9FE] via-[#F8FAFD] to-[#EDF3FF]" />

      {/* Atmospheric Soft Radiant Halos */}
      <div className="absolute -top-[25%] -left-[10%] w-[60vw] h-[60vw] max-w-[850px] max-h-[850px] rounded-full bg-gradient-to-br from-[#635BFF]/10 via-[#00D4B2]/08 to-transparent blur-3xl opacity-70" />
      <div className="absolute -bottom-[20%] -right-[10%] w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-tl from-[#635BFF]/12 via-[#4F46E5]/08 to-transparent blur-3xl opacity-75" />
      <div className="absolute top-[20%] right-[15%] w-[40vw] h-[40vw] max-w-[550px] max-h-[550px] rounded-full bg-gradient-to-tr from-[#00A68C]/08 to-transparent blur-3xl opacity-60" />

      {/* 2. Decagon-Style 3D Vector Contour & Isometric Lines */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Main 3D line gradient: subtle iris to cyan to violet */}
          <linearGradient id="isoLineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#635BFF" stopOpacity="0.35" />
            <stop offset="45%" stopColor="#00A68C" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#4F46E5" stopOpacity="0.32" />
          </linearGradient>

          <linearGradient id="isoLineGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#00D4B2" stopOpacity="0.30" />
            <stop offset="50%" stopColor="#635BFF" stopOpacity="0.24" />
            <stop offset="100%" stopColor="#FF6B4A" stopOpacity="0.22" />
          </linearGradient>

          {/* Mask to smoothly fade lines towards the edges and bottom */}
          <radialGradient id="lineFadeMask" cx="50%" cy="50%" r="58%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="65%" stopColor="#ffffff" stopOpacity="0.85" />
            <stop offset="95%" stopColor="#ffffff" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          <mask id="fadeEdges">
            <rect width="1920" height="1080" fill="url(#lineFadeMask)" />
          </mask>
        </defs>

        <g mask="url(#fadeEdges)">
          {/* A. Isometric 45-degree Diagonal Lattice (Decagon Wireframe Grid) */}
          <g stroke="url(#isoLineGrad1)" strokeWidth="1.25" opacity="0.8">
            {/* Top-Left to Bottom-Right Diagonals */}
            <line x1="-300" y1="0" x2="1620" y2="1920" />
            <line x1="-100" y1="0" x2="1820" y2="1920" />
            <line x1="100" y1="0" x2="2020" y2="1920" />
            <line x1="300" y1="0" x2="2220" y2="1920" />
            <line x1="500" y1="0" x2="2420" y2="1920" />
            <line x1="700" y1="0" x2="2620" y2="1920" />
            <line x1="900" y1="0" x2="2820" y2="1920" />
            <line x1="1100" y1="0" x2="3020" y2="1920" />
            <line x1="1300" y1="0" x2="3220" y2="1920" />
            <line x1="1500" y1="0" x2="3420" y2="1920" />
          </g>

          <g stroke="url(#isoLineGrad2)" strokeWidth="1.25" opacity="0.7">
            {/* Bottom-Left to Top-Right Diagonals */}
            <line x1="-300" y1="1080" x2="1620" y2="-840" />
            <line x1="-100" y1="1080" x2="1820" y2="-840" />
            <line x1="100" y1="1080" x2="2020" y2="-840" />
            <line x1="300" y1="1080" x2="2220" y2="-840" />
            <line x1="500" y1="1080" x2="2420" y2="-840" />
            <line x1="700" y1="1080" x2="2620" y2="-840" />
            <line x1="900" y1="1080" x2="2820" y2="-840" />
            <line x1="1100" y1="1080" x2="3020" y2="-840" />
            <line x1="1300" y1="1080" x2="3220" y2="-840" />
            <line x1="1500" y1="1080" x2="3420" y2="-840" />
          </g>

          {/* B. Decagon Signature Concentric 3D Stadium / Capsule Rings */}
          {/* Outer Stadium Capsule */}
          <rect
            x="510"
            y="-100"
            width="900"
            height="1280"
            rx="450"
            ry="450"
            fill="none"
            stroke="url(#isoLineGrad1)"
            strokeWidth="1.75"
            opacity="0.9"
          />

          {/* Mid-Outer Stadium Capsule */}
          <rect
            x="590"
            y="-20"
            width="740"
            height="1120"
            rx="370"
            ry="370"
            fill="none"
            stroke="url(#isoLineGrad2)"
            strokeWidth="1.5"
            opacity="0.85"
          />

          {/* Center Stadium Capsule */}
          <rect
            x="670"
            y="60"
            width="580"
            height="960"
            rx="290"
            ry="290"
            fill="none"
            stroke="url(#isoLineGrad1)"
            strokeWidth="1.5"
            opacity="0.8"
          />

          {/* Inner Stadium Capsule */}
          <rect
            x="750"
            y="140"
            width="420"
            height="800"
            rx="210"
            ry="210"
            fill="none"
            stroke="url(#isoLineGrad2)"
            strokeWidth="1.5"
            opacity="0.75"
          />

          {/* Core Stadium Capsule */}
          <rect
            x="830"
            y="220"
            width="260"
            height="640"
            rx="130"
            ry="130"
            fill="none"
            stroke="url(#isoLineGrad1)"
            strokeWidth="1.25"
            opacity="0.65"
          />

          {/* C. 3D Isometric Corner Accent Rings */}
          <circle
            cx="220"
            cy="180"
            r="160"
            fill="none"
            stroke="url(#isoLineGrad1)"
            strokeWidth="1.25"
            opacity="0.55"
          />
          <circle
            cx="220"
            cy="180"
            r="260"
            fill="none"
            stroke="url(#isoLineGrad2)"
            strokeWidth="1"
            opacity="0.4"
          />

          <circle
            cx="1700"
            cy="900"
            r="180"
            fill="none"
            stroke="url(#isoLineGrad2)"
            strokeWidth="1.25"
            opacity="0.55"
          />
          <circle
            cx="1700"
            cy="900"
            r="300"
            fill="none"
            stroke="url(#isoLineGrad1)"
            strokeWidth="1"
            opacity="0.4"
          />
        </g>
      </svg>
    </div>
  );
}

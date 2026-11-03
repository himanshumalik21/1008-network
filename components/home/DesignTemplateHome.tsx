"use client";

import React from "react";
import { IsometricBackground3D } from "./IsometricBackground3D";
import { ModernHeroSection } from "./ModernHeroSection";
import { PathwaysBentoGrid } from "./PathwaysBentoGrid";
import { LiveEcosystemSection } from "./LiveEcosystemSection";
import { CollaborativeModelSection } from "./CollaborativeModelSection";
import { HomeBentoCta } from "./HomeBentoCta";
import { ModernHomeFooter } from "./ModernHomeFooter";

export function DesignTemplateHome() {
  return (
    <div className="relative w-full min-h-screen flex flex-col font-sans antialiased pt-16 sm:pt-20 selection:bg-[#635BFF]/15 selection:text-[#0A2540] overflow-x-hidden">
      {/* 3D Geometric Isometric Wireframe Background */}
      <IsometricBackground3D />

      {/* Layer 1: Ambient Multi-Hue Halos across the page */}
      <div className="absolute top-24 left-1/4 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#635BFF]/08 via-[#00D4B2]/06 to-transparent blur-[160px] pointer-events-none z-0" />
      <div className="absolute top-[900px] right-1/4 w-[600px] h-[450px] bg-gradient-to-l from-[#FF6B4A]/06 via-[#00A68C]/06 to-transparent blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[1800px] left-1/3 w-[650px] h-[500px] bg-gradient-to-r from-[#00D4B2]/06 via-[#635BFF]/07 to-transparent blur-[160px] pointer-events-none z-0" />

      {/* 1. Superhero Hero Section & Trust Ticker */}
      <ModernHeroSection />

      {/* 2. Five Growth Pathways Bento Grid */}
      <PathwaysBentoGrid />

      {/* 3. Live Ecosystem Activity (Mandates & Capital Theses) */}
      <LiveEcosystemSection />

      {/* 4. Collaborative Model (4-Step Engine) */}
      <CollaborativeModelSection />

      {/* 5. High-Conversion Bento CTA Box */}
      <HomeBentoCta />

      {/* 6. Modern Mega Footer */}
      <ModernHomeFooter />
    </div>
  );
}

import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { PillarsBento } from "@/components/home/PillarsBento";

export function generateMetadata() {
  return {
    title: "1008 Network — End-to-End Business Operations & Turnkey Execution",
    description: "You bring the vision & capital. We handle end-to-end operations to build, launch & scale your business.",
  };
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Section with Razor-Sharp Hook & Interactive Blueprint */}
      <HeroSection />

      {/* 2. The Four Pillars Bento Grid */}
      <PillarsBento />
    </div>
  );
}

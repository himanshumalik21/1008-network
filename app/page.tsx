import React from "react";
import { HeroSection } from "@/components/home/HeroSection";

export function generateMetadata() {
  return {
    title: "1008 Network — End-to-End Business Operations & Turnkey Execution",
    description: "You bring the vision & capital. We handle end-to-end operations to build, launch & scale your business.",
  };
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section with Razor-Sharp Hook & Four Pillars 2x2 Interactive Blueprint */}
      <HeroSection />
    </div>
  );
}

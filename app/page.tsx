import React from "react";
import { HeroSection } from "@/components/home/HeroSection";

export const metadata = {
  title: "1008 Network — Venture Studio, Partner Network, Capital & Playbook",
  description:
    "1008 Network is India's premier venture ecosystem across 4 pillars: Venture Studio turnkey execution for equity, Partner Network co-founder & talent matching, Capital syndicate matchmaking (₹50K to ₹5Cr+), and tactical Playbooks.",
  alternates: {
    canonical: "https://www.1008.network",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-white lg:h-[calc(100dvh-4rem)] lg:overflow-hidden">
      {/* Hero Section with Razor-Sharp Hook & Four Pillars 2x2 Interactive Blueprint */}
      <HeroSection />
    </div>
  );
}

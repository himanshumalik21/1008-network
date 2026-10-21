import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { CommunityInfographicSection } from "@/components/home/CommunityInfographicSection";
import { ProcessFlowInfographic } from "@/components/home/ProcessFlowInfographic";
import { HumanStorySection } from "@/components/home/HumanStorySection";
import { PillarsBentoSection } from "@/components/home/PillarsBentoSection";
import { DomainsGridSection } from "@/components/home/DomainsGridSection";
import { HomeCtaBanner } from "@/components/home/HomeCtaBanner";

export const metadata = {
  title: "1008 Network — Helping your Business get closer to your Goals",
  description:
    "1008 Network is a collaborative business community. Find co-founders & talent, access funding, outsource operational bottlenecks to 1008, or post and find project gigs.",
  alternates: {
    canonical: "https://www.1008.network",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      <HeroSection />
      <CommunityInfographicSection />
      <ProcessFlowInfographic />
      <PillarsBentoSection />
      <HumanStorySection />
      <DomainsGridSection />
      <HomeCtaBanner />
    </div>
  );
}

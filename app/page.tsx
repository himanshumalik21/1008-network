import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { HumanStorySection } from "@/components/home/HumanStorySection";
import { PillarsBentoSection } from "@/components/home/PillarsBentoSection";
import { DomainsGridSection } from "@/components/home/DomainsGridSection";
import { HomeCtaBanner } from "@/components/home/HomeCtaBanner";

export const metadata = {
  title: "1008 Network — Co-Building Businesses With Experienced People",
  description:
    "Build the business you know should exist. 1008 Network helps experienced professionals and entrepreneurs turn industry expertise into operating businesses.",
  alternates: {
    canonical: "https://www.1008.network",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      <HeroSection />
      <HumanStorySection />
      <PillarsBentoSection />
      <DomainsGridSection />
      <HomeCtaBanner />
    </div>
  );
}

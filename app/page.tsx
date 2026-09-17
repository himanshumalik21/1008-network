import React from "react";
import { HeroSection } from "@/components/home/HeroSection";

export const metadata = {
  title: "1008 Network — Co-Building Businesses With Experienced People",
  description:
    "You know the business. We'll help you build the company. 1008 helps experienced engineers, operators, and executives turn domain insights into enduring enterprises.",
  alternates: {
    canonical: "https://www.1008.network",
  },
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full bg-white min-h-screen">
      <HeroSection />
    </div>
  );
}

import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { PillarsBento } from "@/components/home/PillarsBento";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { PersonaMatrix } from "@/components/home/PersonaMatrix";
import { KnowledgeTeaser } from "@/components/home/KnowledgeTeaser";
import { FAQSection } from "@/components/home/FAQSection";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { InteractiveNetworkGlobe } from "@/components/canvas/InteractiveNetworkGlobe";
import { Sparkles, ArrowRight, Lock } from "lucide-react";

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

      {/* 2. The Venture Studio Advantage Bento Grid */}
      <PillarsBento />

      {/* 3. Direct Comparison (Why Agencies and Incubators Fail Domain Leaders) */}
      <ComparisonSection />

      {/* 4. Target Domain Archetypes */}
      <PersonaMatrix />

      {/* 6. Tactical Operational Playbooks */}
      <KnowledgeTeaser />

      {/* 7. Frequently Answered Questions Accordion */}
      <FAQSection />

      {/* 8. Global Conversion Banner */}
      <section className="py-24 bg-[#F6F9FC] border-t border-[#E6E8EB] relative overflow-hidden">
        {/* Background Architectural Box Grid & Ambient Motion */}
        <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-60 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-80 bg-gradient-to-r from-[#635BFF]/12 via-[#00D4B2]/08 to-[#FF7043]/06 blur-[130px] pointer-events-none animate-pulse-subtle" />
        
        {/* Interactive 3D Point-Cloud Globe Artwork on Right */}
        <InteractiveNetworkGlobe className="absolute -right-24 top-1/2 -translate-y-1/2 w-[540px] h-[540px] opacity-65 pointer-events-none hidden xl:block" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <Badge variant="indigo" size="md" pulse>
            Operational Partnerships Open
          </Badge>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Ready to turn your business vision into reality?
          </h2>

          <p className="text-base sm:text-xl text-[#425466] max-w-2xl mx-auto leading-relaxed">
            Stop worrying about operational friction or contractor markups. Partner with 1008 Network for turnkey real estate, setup, machinery, staffing, tech, and marketing.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              href="/studio"
              size="lg"
              variant="primary"
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="w-full sm:w-auto font-semibold text-base px-8"
            >
              Apply to Build With Us
            </Button>
            <Button
              href="/contact"
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto text-base font-semibold"
            >
              Contact Studio Team
            </Button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-[#627D98] font-semibold">
            <span className="flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5 text-[#059669]" /> Mutual NDA from Day 1
            </span>
            <span>•</span>
            <span>Zero Upfront Consulting Fees</span>
            <span>•</span>
            <span>Phased Handover Standard</span>
          </div>
        </div>
      </section>
    </div>
  );
}

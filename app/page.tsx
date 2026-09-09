import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { PillarsBento } from "@/components/home/PillarsBento";
import { ComparisonSection } from "@/components/home/ComparisonSection";
import { StudioSprintTimeline } from "@/components/home/StudioSprintTimeline";
import { PersonaMatrix } from "@/components/home/PersonaMatrix";
import { KnowledgeTeaser } from "@/components/home/KnowledgeTeaser";
import { FAQSection } from "@/components/home/FAQSection";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { Sparkles, ArrowRight, Lock } from "lucide-react";

export function generateMetadata() {
  return {
    title: "1008 — High-Conviction Venture Studio for Senior Domain Leaders",
    description: "You know where the industry bleeds money. We build the tech to capture it.",
  };
}

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Section with Razor-Sharp Hook */}
      <HeroSection />

      {/* 2. The Venture Studio Advantage Bento Grid */}
      <PillarsBento />

      {/* 3. Direct Comparison (Why Agencies and Incubators Fail Domain Leaders) */}
      <ComparisonSection />

      {/* 4. The 180-Day Build & Handover Blueprint */}
      <StudioSprintTimeline />

      {/* 5. Target Domain Archetypes */}
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
        <div className="absolute -top-10 -left-10 w-96 h-96 bg-gradient-to-br from-[#635BFF]/08 to-transparent blur-[120px] pointer-events-none animate-float-slow" />
        <div className="absolute -bottom-10 -right-10 w-96 h-96 bg-gradient-to-tl from-[#00D4B2]/08 to-transparent blur-[120px] pointer-events-none animate-float-reverse" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <Badge variant="indigo" size="md" pulse>
            Next Studio Cohort Intake Open
          </Badge>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Ready to build a defensible venture in India?
          </h2>

          <p className="text-base sm:text-xl text-[#425466] max-w-2xl mx-auto leading-relaxed">
            Stop waiting for the perfect moment or overpaying freelance agencies. Partner with 1008 for true execution muscle and shared equity upside.
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
            <span>180-Day Handover Standard</span>
          </div>
        </div>
      </section>
    </div>
  );
}

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
import { ArrowRight, Sparkles, Shield, ArrowUpRight, Lock } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
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
      <section className="py-24 bg-surface-100 border-t border-border relative overflow-hidden transition-colors">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-amber-500/[0.08] dark:bg-amber-500/[0.12] blur-[140px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <Badge variant="amber" size="md" pulse>
            Next Studio Cohort Intake Open
          </Badge>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground font-sans">
            Ready to build a defensible venture in India?
          </h2>

          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Stop waiting for the perfect moment or overpaying freelance agencies. Partner with 1008 for true execution muscle and shared equity upside.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/studio"
              size="lg"
              variant="primary"
              rightIcon={<ArrowUpRight className="h-4 w-4" />}
              className="w-full sm:w-auto shadow-md font-semibold text-base px-8"
            >
              Apply to Build With Us
            </Button>
            <Button
              href="/readiness"
              size="lg"
              variant="secondary"
              leftIcon={<Sparkles className="h-4 w-4 text-amber-500" />}
              className="w-full sm:w-auto text-base"
            >
              Take 2-Min Venture Readiness Quiz
            </Button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground font-mono">
            <span className="flex items-center gap-1.5">
              <Lock className="h-3.5 w-3.5 text-emerald-500" /> Mutual NDA from Day 1
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

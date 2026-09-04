import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { PillarsBento } from "@/components/home/PillarsBento";
import { PersonaMatrix } from "@/components/home/PersonaMatrix";
import { StudioSprintTimeline } from "@/components/home/StudioSprintTimeline";
import { NetworkTeaser } from "@/components/home/NetworkTeaser";
import { KnowledgeTeaser } from "@/components/home/KnowledgeTeaser";
import { FAQSection } from "@/components/home/FAQSection";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Sparkles, Shield, ArrowUpRight } from "lucide-react";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. The 4 Unified Pillars Bento Grid */}
      <PillarsBento />

      {/* 3. The Persona Matrix */}
      <PersonaMatrix />

      {/* 4. The 180-Day Build & Handover Blueprint */}
      <StudioSprintTimeline />

      {/* 5. Live Network Opportunities Teaser */}
      <NetworkTeaser />

      {/* 6. Knowledge Hub & Media Teaser */}
      <KnowledgeTeaser />

      {/* 7. Frequently Answered Questions Accordion */}
      <FAQSection />

      {/* 8. Global Conversion Banner */}
      <section className="py-24 bg-gradient-to-b from-[#090A0C] via-[#0F1218] to-[#090A0C] border-t border-white/[0.08] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 bg-amber-500/10 blur-[120px] pointer-events-none" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <Badge variant="amber" size="md" pulse>
            Next Studio Cohort Intake Open
          </Badge>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-sans">
            Ready to build a defensible venture in India?
          </h2>

          <p className="text-base sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed">
            Stop waiting for the perfect moment or overpaying freelance agencies. Partner with 1008 for true execution muscle and shared upside.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="/studio"
              size="lg"
              variant="primary"
              rightIcon={<ArrowUpRight className="h-4 w-4" />}
              className="w-full sm:w-auto shadow-[0_0_30px_rgba(245,158,11,0.35)]"
            >
              Apply to Build With Us
            </Button>
            <Button
              href="/readiness"
              size="lg"
              variant="secondary"
              leftIcon={<Sparkles className="h-4 w-4 text-amber-400" />}
              className="w-full sm:w-auto"
            >
              Take 2-Min Venture Readiness Quiz
            </Button>
          </div>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground font-mono">
            <span className="flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5 text-emerald-400" /> Mutual NDA from Day 1
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

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function ManifestoPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Capsule */}
        <div className="space-y-4 mb-12 text-center">
          <Badge variant="indigo" size="md">
            The 1008 Network Philosophy
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#0A2540] font-sans leading-tight">
            Great Ventures Are Built on Real Operations, Not Vanity Hype.
          </h1>
          <p className="text-base sm:text-lg text-[#425466]">
            Why sustainable Indian enterprises are forged through rigorous 0-to-1 operational systems, clear unit economics, and shared skin in the game.
          </p>
        </div>

        {/* Manifesto Content */}
        <div className="rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] p-6 sm:p-10 space-y-8 text-sm sm:text-base text-[#425466] leading-relaxed font-sans shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-[#0A2540] font-sans">
              1. The Solitary Burden of the Indian Entrepreneur
            </h2>
            <p>
              Starting or running a business in India is an act of immense courage. Yet, too often, ambitious builders find themselves trapped in isolation: navigating bureaucratic licensing mazes, negotiating with unscrupulous contractors, burning through personal life savings on billable agency retainers, or watching operational bottlenecks strangle a promising venture.
            </p>
            <p>
              Durable enterprises are not built on pitch deck slogans or vanity metrics. They are forged through ground-level operational mastery: understanding factory shop-floor ergonomics, supply chain credit cycles, statutory zoning clearances, talent retention, and customer unit economics.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-[#E6E8EB]">
            <h2 className="text-xl font-bold text-[#0A2540] font-sans">
              2. The Failure of Traditional Intermediaries
            </h2>
            <p>
              When founders seek support, they are met with broken models: consulting firms that sell expensive slide decks without setting foot on the ground; agencies that profit from endless hourly invoices regardless of outcomes; and incubators that trade equity for lecture sessions without providing physical build or operational muscle.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-[#E6E8EB]">
            <h2 className="text-xl font-bold text-[#0A2540] font-sans">
              3. The 1008 Network Covenant: Shared Risk, Turnkey Execution
            </h2>
            <p>
              1008 Network was created to stand shoulder-to-shoulder with ambitious builders. We are not external advisors; we are full-stack operational co-builders with true skin in the game.
            </p>
            <p>
              Whether launching a new vertical software platform, setting up a manufacturing supply chain, or building a consumer brand—we handle software, systems, suppliers, compliance, and core team hiring for shared equity. We work across disciplined phases to graduate each business to complete, profitable autonomy.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-[#E6E8EB]">
            <h2 className="text-xl font-bold text-[#0A2540] font-sans">
              4. Why &ldquo;1008&rdquo;? The Meaning Behind the Name
            </h2>
            <p>
              In Indian tradition and classical mathematics, <strong>108</strong>—and its elevated order <strong>1008</strong>—signifies <em>wholeness, completeness, and mastery</em>. It represents finishing what you start, leaving no detail half-executed.
            </p>
            <p>
              In our venture-building architecture:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-xs sm:text-sm">
              <li><strong>The 1:</strong> The founder&apos;s singular vision, deep industry insight, and initial ambition.</li>
              <li><strong>The 00:</strong> The twin pillars of operational execution—the digital software systems and physical operations built from scratch.</li>
              <li><strong>The 8 (&infin;):</strong> Compounding scale, healthy cash flows, and enduring generational enterprise value.</li>
            </ul>
            <p className="italic text-[#635BFF] font-medium pt-1">
              You bring the 1. We help build the 008 around it.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-[#E0E0FF] space-y-3 shadow-xs">
            <div className="text-xs uppercase text-[#635BFF] font-bold">
              Our Core Operating Principles
            </div>
            <div className="space-y-2.5 text-xs text-[#0A2540] font-sans">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                <span><strong>Radical Operational Pragmatism:</strong> Solve quantifiable financial bleeds, not theoretical problems.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                <span><strong>Handover By Design:</strong> A venture studio must build founder autonomy, not permanent dependence.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                <span><strong>True Skin in the Game:</strong> Shared upside alignment from Day 1 to liquidity.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action CTA */}
        <div className="pt-10 text-center space-y-4">
          <Button href="/studio" size="lg" variant="primary" rightIcon={<ArrowRight className="h-4 w-4" />}>
            Apply to Build With 1008 Network
          </Button>
        </div>
      </div>
    </div>
  );
}

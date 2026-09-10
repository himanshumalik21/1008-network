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
              1. The Myth of the Unprepared Founder
            </h2>
            <p>
              For the last decade, venture capital in India celebrated speed over substance: consumer apps burning capital on customer acquisition, buzzwords without unit economics, and shallow solutions attempting to digitize supply chains without real operational grounding.
            </p>
            <p>
              Real businesses are not built on hype. They are built on understanding the unwritten rules of enterprise procurement, the nuances of GST tax reconciliation, the realities of shop-floor labor, and the distribution dynamics of local supply chains.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-[#E6E8EB]">
            <h2 className="text-xl font-bold text-[#0A2540] font-sans">
              2. The Execution Bottleneck
            </h2>
            <p>
              Whether starting a new business or turning around a stalled venture, founders face the same friction: overpaying external agencies with zero skin in the game, hiring too fast without validated workflows, and building fragile software before verifying operational demand.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-[#E6E8EB]">
            <h2 className="text-xl font-bold text-[#0A2540] font-sans">
              3. The 1008 Network Thesis: Skin in the Game
            </h2>
            <p>
              1008 Network was built to bridge this precise chasm. We do not charge hourly consulting fees. We do not sell slide decks.
            </p>
            <p>
              We bring 0-to-1 operational architecture, rapid feasibility prototypes, vetted talent sourcing, and commercial systems for shared equity upside. We build with you through a structured 180-day framework, stabilize the business, and transition full operational autonomy back to you.
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

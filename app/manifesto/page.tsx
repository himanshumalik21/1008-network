import React from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from "lucide-react";

export default function ManifestoPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Capsule */}
        <div className="space-y-4 mb-12 text-center">
          <Badge variant="amber" size="md">
            The 1008 Philosophy
          </Badge>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground font-sans leading-tight">
            The Decacorns of Bharat Will Be Built by Domain Veterans.
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Why the next wave of multi-billion dollar Indian enterprises belongs to 40-year-old industry leaders, not 20-year-old college dropouts.
          </p>
        </div>

        {/* Manifesto Content */}
        <div className="rounded-2xl bg-surface-50 border border-border p-6 sm:p-10 space-y-8 text-sm sm:text-base text-muted-foreground leading-relaxed font-sans shadow-md">
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground font-sans">
              1. The Myth of the Unprepared Founder
            </h2>
            <p>
              For the last decade, venture capital in India celebrated speed over substance: consumer apps burning capital on customer acquisition, buzzwords without unit economics, and 22-year-olds attempting to digitize supply chains they had never walked through.
            </p>
            <p>
              Real businesses are not built on hype. They are built on understanding the unwritten rules of hospital procurement, the nuances of GST tax reconciliation, the realities of shop-floor labor in Pune, and the distribution dynamics of Tier-2 FMCG distributors.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-border">
            <h2 className="text-xl font-bold text-foreground font-sans">
              2. The Domain Dilemma
            </h2>
            <p>
              India’s most capable talent sits inside corporate boardrooms. These are Senior Directors, Vice Presidents, and GMs who have lived through structural sector inefficiencies for 15+ years. They know exactly where the money bleeds.
            </p>
            <p>
              Yet, they are trapped: leaving corporate life to hire freelance agencies usually leads to broken code, burned cash, and lost momentum.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-border">
            <h2 className="text-xl font-bold text-foreground font-sans">
              3. The 1008 Thesis: Skin in the Game
            </h2>
            <p>
              1008 was built to bridge this precise chasm. We do not charge hourly consulting fees. We do not sell slide decks.
            </p>
            <p>
              We bring full-stack software architecture, world-class product design, talent recruiting, and operational governance for shared equity upside. We build with you through a structured 180-day framework, stabilize the company, and transition full independence back to you.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-surface-100 border border-amber-500/30 space-y-3">
            <div className="text-xs font-mono uppercase text-amber-600 dark:text-amber-400 font-semibold">
              Our Core Operating Principles
            </div>
            <div className="space-y-2 text-xs text-foreground font-sans">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <span><strong>Radical Operational Pragmatism:</strong> Solve quantifiable financial bleeds, not theoretical problems.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <span><strong>Handover By Design:</strong> A venture studio must build founder autonomy, not permanent dependence.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <span><strong>True Skin in the Game:</strong> Shared upside alignment from Day 1 to liquidity.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Action CTA */}
        <div className="pt-10 text-center space-y-4">
          <Button href="/studio" size="lg" variant="primary" rightIcon={<ArrowRight className="h-4 w-4" />}>
            Apply to Build With 1008
          </Button>
        </div>
      </div>
    </div>
  );
}

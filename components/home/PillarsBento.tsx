"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import {
  Code2,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Clock,
  Sparkles,
  Lock,
  ArrowRight,
} from "lucide-react";

export function PillarsBento() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="py-24 bg-[#F6F9FC] border-y border-[#E6E8EB] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="indigo" size="sm">The Venture Studio Model</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Everything you need to turn domain insight into an enterprise.
          </h2>
          <p className="text-[#425466] text-base sm:text-lg">
            We don&apos;t advise from the sidelines. We write production code, design the product, build standard operating procedures, and set up your initial revenue pipeline.
          </p>
        </div>

        {/* Studio Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Card 1: In-House Tech Team (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-8 relative group hover:border-[#CBD5E1] transition-all duration-300 flex flex-col justify-between shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)]">
            <div>
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-[#F0F0FF] text-[#635BFF] border border-[#E0E0FF]">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-sans text-[#635BFF] tracking-wide font-bold uppercase">
                    FULL-STACK EXECUTION
                  </span>
                </div>
                <Badge variant="indigo" size="sm">Production-Grade</Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A2540] mb-3">
                Full-Stack Tech & Product Architecture
              </h3>
              <p className="text-[#425466] text-sm sm:text-base leading-relaxed mb-6">
                Never waste months searching for a technical co-founder or overpaying low-quality dev agencies. 1008 provides a battle-tested engineering and design team from Day 1.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6 text-xs text-[#425466] font-sans">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0A2540]">Next.js 15 & React 19:</strong> Blazing fast web apps & APIs.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0A2540]">Linear-Grade UI/UX:</strong> World-class design systems.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0A2540]">Enterprise Security:</strong> Role-based auth, DB backups & SOC2 ready.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0 mt-0.5" />
                  <span><strong className="text-[#0A2540]">100% IP Ownership:</strong> Transferred entirely to your entity.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E6E8EB] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#627D98]">Zero freelance headache</span>
              <button
                onClick={() => setModalOpen(true)}
                className="text-xs font-semibold text-[#635BFF] hover:underline flex items-center gap-1"
              >
                Explore Tech Stack <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Card 2: Shared Equity & Upside (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-8 relative group hover:border-[#CBD5E1] transition-all duration-300 flex flex-col justify-between shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)]">
            <div>
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-[#ECFDF5] text-[#059669] border border-[#A7F3D0]">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-sans text-[#059669] tracking-wide font-bold uppercase">
                    SKIN IN THE GAME
                  </span>
                </div>
                <Badge variant="emerald" size="sm">Equity Aligned</Badge>
              </div>

              <h3 className="text-2xl font-bold text-[#0A2540] mb-3">
                No Consulting Invoices. True Equity Partnership.
              </h3>
              <p className="text-[#425466] text-sm leading-relaxed mb-6">
                Consultants get paid whether your business succeeds or fails. 1008 partners for shared equity and long-term valuation upside. Our incentives are 100% aligned with yours.
              </p>

              <div className="p-4 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] space-y-2 mb-6 text-xs">
                <div className="flex items-center justify-between text-[#627D98] text-[11px] font-semibold">
                  <span>FINANCIAL MODEL</span>
                  <span className="text-[#059669] font-bold">ZERO RETAINER FEES</span>
                </div>
                <p className="text-[#425466] font-sans">
                  We invest development, design, and venture architecture for equity upside (8%–18%).
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E6E8EB] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#627D98]">Aligned from Day 1</span>
              <button
                onClick={() => setModalOpen(true)}
                className="text-xs font-semibold text-[#059669] hover:underline flex items-center gap-1"
              >
                Review Equity Terms <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Card 3: 180-Day Handover (5 cols) */}
          <div className="lg:col-span-5 rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-8 relative group hover:border-[#CBD5E1] transition-all duration-300 flex flex-col justify-between shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)]">
            <div>
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-[#E6FFFA] text-[#00A389] border border-[#B2F5EA]">
                    <Clock className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-sans text-[#00A389] tracking-wide font-bold uppercase">
                    FOUNDER AUTONOMY
                  </span>
                </div>
                <Badge variant="cyan" size="sm">180d Standard</Badge>
              </div>

              <h3 className="text-2xl font-bold text-[#0A2540] mb-3">
                Build With You. Not Forever For You.
              </h3>
              <p className="text-[#425466] text-sm leading-relaxed mb-6">
                A great venture studio makes founders self-sustaining, not dependent. Over 180 days, we stabilize the business, recruit your permanent core hires, and transition complete autonomy back to you.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E6E8EB] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#627D98]">No agency lock-in</span>
              <Link href="/#blueprint" className="text-xs font-semibold text-[#00A389] hover:underline flex items-center gap-1">
                View Sprint Stages <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Card 4: Confidential Corporate Transition (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-8 relative group hover:border-[#CBD5E1] transition-all duration-300 flex flex-col justify-between shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)]">
            <div>
              <div className="flex items-center justify-between gap-4 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-[#FFF4ED] text-[#F4511E] border border-[#FFE0D2]">
                    <Lock className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-sans text-[#F4511E] tracking-wide font-bold uppercase">
                    CONFIDENTIALITY & NDA
                  </span>
                </div>
                <Badge variant="amber" size="sm">Mutual NDA</Badge>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#0A2540] mb-3">
                Validate Before You Resign
              </h3>
              <p className="text-[#425466] text-sm sm:text-base leading-relaxed mb-6">
                Leaving a VP or Director salary without validation is unnecessarily risky. We sign a strict mutual NDA on Day 1, helping you quantify customer willingness-to-pay before you make any public career transition.
              </p>

              <div className="p-4 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] text-xs text-[#425466] leading-relaxed font-sans mb-6">
                <strong className="text-[#0A2540] block mb-1">De-Risked Career Transition:</strong>
                Complete 25+ discovery interviews and architectural blueprints quietly. When customer pull is proven with 3 advance LOIs, execute your full-time transition with absolute conviction.
              </div>
            </div>

            <div className="pt-4 border-t border-[#E6E8EB] flex items-center justify-between">
              <span className="text-xs font-semibold text-[#627D98]">Strict confidentiality guaranteed</span>
              <Button
                onClick={() => setModalOpen(true)}
                variant="primary"
                size="sm"
                className="font-semibold"
                rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
              >
                Confidential Intake Call
              </Button>
            </div>
          </div>
        </div>
      </div>

      <StudioApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}

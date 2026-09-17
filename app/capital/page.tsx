"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { InvestIn1008Modal } from "@/components/capital/InvestIn1008Modal";
import { PillarFAQ } from "@/components/ui/PillarFAQ";
import { capitalFaqs } from "@/data/faqs";
import {
  TrendingUp,
  ShieldCheck,
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Rocket,
  DollarSign,
  PlusCircle,
  Coins,
  Users,
  FileCheck2,
  AlertTriangle,
  FileText,
  Target,
  Handshake,
  UserCheck,
  Layers,
  Search,
  BookOpen,
} from "lucide-react";

export default function CapitalPage() {
  const [isStudioInvestModalOpen, setIsStudioInvestModalOpen] = useState(false);

  const founderChecklist = [
    "Founder & team background",
    "Business concept & industry sector",
    "Company stage & current traction",
    "Problem, product & service model",
    "Market size & target customer ICP",
    "Monthly revenue & unit economics",
    "Capital required & itemized use of funds",
    "Existing cap table & fundraising status",
    "Pitch deck & financial projections",
  ];

  const investorChecklist = [
    "Name & organisation / entity",
    "Direct email, phone & location",
    "Investor type (Angel, Family Office, CXO, Fund)",
    "Investment interests & sector focus",
    "Typical ticket / check size (₹5L – ₹5Cr+)",
    "Geographic & stage preferences",
    "Accredited / eligible investor status",
    "LinkedIn profile & verification consent",
  ];

  const steps = [
    {
      num: "01",
      tag: "Application",
      title: "Founders Submit Venture & Use of Funds",
      desc: "Founders outline their product model, unit economics, and precise capital milestones (e.g. setting up machinery, working capital, or hiring key operators).",
      icon: <FileText className="h-4 w-4 text-[#635BFF]" />,
      iconBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
    },
    {
      num: "02",
      tag: "Curated Review",
      title: "Thesis Review & Investor Matching",
      desc: "1008 reviews business feasibility and presents promising ventures directly to aligned angels and family offices based on sector interest and check size.",
      icon: <Search className="h-4 w-4 text-[#00A389]" />,
      iconBg: "bg-[#E6FFFA] text-[#007A66] border-[#B2F5EA]",
    },
    {
      num: "03",
      tag: "Deal Session",
      title: "Structured Founder-Investor Meetings",
      desc: "Interested capital partners participate in direct, structured deal calls with founders to evaluate unit metrics, growth milestones, and commercial terms.",
      icon: <Users className="h-4 w-4 text-[#FF7043]" />,
      iconBg: "bg-[#FFF3EE] text-[#D94814] border-[#FFD8C9]",
    },
    {
      num: "04",
      tag: "Direct Execution",
      title: "Independent Due Diligence & Direct Signing",
      desc: "Investors execute their independent legal due diligence and contract directly with the company entity. Zero broker cuts or hidden fees.",
      icon: <FileCheck2 className="h-4 w-4 text-[#0A2540]" />,
      iconBg: "bg-[#F8FAFC] text-[#0A2540] border-[#CBD5E1]",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#FDFDFE] min-h-screen">
      {/* 1. Hero Header Section */}
      <section className="relative py-14 sm:py-20 overflow-hidden border-b border-[#E6E8EB] bg-[#F6F9FC]">
        <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-55 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 bg-gradient-to-r from-[#635BFF]/12 via-[#00D4B2]/08 to-[#FF7043]/06 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 flex-wrap justify-center">
            <Badge variant="indigo" size="md">
              03 — Capital Network
            </Badge>
            <span className="text-xs font-mono font-semibold text-[#007A66] bg-[#E6FFFA] px-3 py-1 rounded-full border border-[#B2F5EA]">
              FUND // Find the Capital
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Capital for businesses{" "}
            <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
              worth building.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-[#425466] leading-relaxed max-w-3xl mx-auto font-normal">
            1008 connects entrepreneurs building promising businesses with a curated network of capital partners.
          </p>

          <p className="text-xs sm:text-sm text-[#64748B] font-medium max-w-2xl mx-auto">
            Founders bring the opportunity. Capital partners bring resources. 1008 helps create the connection.
          </p>

          {/* Ecosystem Flow Formula */}
          <div className="pt-2 pb-2 inline-flex items-center gap-2 text-xs font-mono text-[#64748B] bg-white/90 px-4 py-2 rounded-full border border-[#E2E8F0] shadow-2xs">
            <span className="text-[#635BFF] font-semibold">Idea</span>
            <span>→</span>
            <span className="text-[#00A389] font-semibold">People</span>
            <span>→</span>
            <span className="text-[#059669] font-semibold">Capital</span>
            <span>→</span>
            <span className="text-[#D94814] font-semibold">Execution</span>
            <span>→</span>
            <span className="text-[#0A2540] font-bold">Business</span>
          </div>

          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href="#for-founders"
              size="md"
              variant="primary"
              rightIcon={<Rocket className="h-4 w-4" />}
              className="w-full sm:w-auto font-semibold px-6 shadow-sm"
            >
              For Founders (Submit Venture)
            </Button>
            <Button
              href="#for-investors"
              size="md"
              variant="secondary"
              rightIcon={<TrendingUp className="h-4 w-4 text-[#00A389]" />}
              className="w-full sm:w-auto font-semibold"
            >
              For Investors (Join Network)
            </Button>
            <Button
              onClick={() => setIsStudioInvestModalOpen(true)}
              size="md"
              variant="ghost"
              className="w-full sm:w-auto text-xs text-[#635BFF] font-semibold hover:bg-[#635BFF]/10"
            >
              Invest in 1008 Studio →
            </Button>
          </div>

          {/* Quick Informational Highlights */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-mono text-[#627D98]">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              <span>Curated Network Introductions</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <Target className="h-3.5 w-3.5 text-[#635BFF]" />
              <span>Transparent Use of Funds</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-[#059669]" />
              <span>Zero Intermediary Broker Fees</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Dual Distinct Journeys: For Founders & For Investors */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
          <Badge variant="indigo" size="sm">Two Clear Pathways</Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight font-sans">
            Choose Your Journey
          </h2>
          <p className="text-xs sm:text-base text-[#475569] max-w-xl mx-auto">
            Whether you need capital for an operating business or are an allocator looking for high-quality opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: For Founders */}
          <div
            id="for-founders"
            className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#635BFF]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#635BFF] opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#F0F0FF] text-[#635BFF] flex items-center justify-center border border-[#E0E0FF] group-hover:scale-105 transition-transform shadow-2xs">
                  <Rocket className="h-6 w-6" />
                </div>
                <Badge variant="indigo" size="sm">For Founders</Badge>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] font-sans group-hover:text-[#635BFF] transition-colors">
                  Need capital?
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Submit your business for consideration. We review your model, traction, and unit economics to introduce you to aligned capital partners.
                </p>
              </div>

              {/* Information Collected Checklist */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#635BFF]">
                  Information Evaluated:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#334155]">
                  {founderChecklist.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-[#F8FAFC] border border-[#F1F5F9]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#635BFF] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#F1F4F8]">
              <Button
                href="/capital/post"
                variant="primary"
                size="lg"
                className="w-full justify-center font-semibold shadow-xs text-sm py-3.5"
                rightIcon={<ArrowRight className="h-4 w-4" />}
              >
                Submit Your Venture
              </Button>
              <div className="mt-2 text-center text-[11px] text-[#64748B]">
                Mutual NDA covered • Direct founder review
              </div>
            </div>
          </div>

          {/* Card 2: For Investors */}
          <div
            id="for-investors"
            className="p-8 sm:p-10 rounded-3xl bg-white border border-[#E2E8F0] shadow-xs hover:border-[#00A389]/60 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#00D4B2] opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="space-y-6">
              <div className="flex items-center justify-between gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E6FFFA] text-[#00A389] flex items-center justify-center border border-[#B2F5EA] group-hover:scale-105 transition-transform shadow-2xs">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <Badge variant="cyan" size="sm">For Investors</Badge>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] font-sans group-hover:text-[#00A389] transition-colors">
                  Looking for your next opportunity?
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed">
                  Join the 1008 Capital Network. Tell us your sector preferences and check sizes to receive curated deals with full operational clarity.
                </p>
              </div>

              {/* Information Collected Checklist */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#00A389]">
                  Allocator Profile Criteria:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#334155]">
                  {investorChecklist.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-[#F8FAFC] border border-[#F1F5F9]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#00A389] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-[#F1F4F8]">
              <Button
                href="/capital/join"
                variant="secondary"
                size="lg"
                className="w-full justify-center font-semibold shadow-xs text-sm py-3.5"
                rightIcon={<UserCheck className="h-4 w-4 text-[#00A389]" />}
              >
                Join the Capital Network
              </Button>
              <div className="mt-2 text-center text-[11px] text-[#64748B]">
                Curated introductions • Zero broker management fee
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 4-Step Capital Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2.5">
          <Badge variant="cyan" size="sm">The 1008 Capital Process</Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight font-sans">
            How Capital Introductions Work
          </h2>
          <p className="text-xs sm:text-base text-[#475569] leading-relaxed max-w-2xl mx-auto font-normal">
            From venture submission to direct founder-investor contract completion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-[#E2E8F0] shadow-xs flex flex-col justify-between space-y-3.5 hover:border-[#CBD5E1] transition-all"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className={`w-8 h-8 rounded-lg font-mono font-bold text-xs flex items-center justify-center border shrink-0 ${step.iconBg}`}>
                    {step.num}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#64748B] bg-[#F1F5F9] px-2 py-0.5 rounded-full">
                    {step.tag}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#0A2540] leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-[#475569] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Featured Syndicate Opportunity: Invest in 1008 Studio Parent */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-3xl bg-[#0A2540] p-8 sm:p-12 text-white relative overflow-hidden shadow-[0_20px_50px_rgba(10,37,64,0.25)] border border-[#1E293B]">
          <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-15 pointer-events-none" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#635BFF]/30 rounded-full blur-[110px] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#00D4B2]/20 rounded-full blur-[110px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-[#00D4B2]/15 text-[#00D4B2] text-xs font-mono font-bold uppercase tracking-wider border border-[#00D4B2]/30 flex items-center gap-1.5 shadow-2xs">
                  <Sparkles className="h-3.5 w-3.5" />
                  Studio Holding Opportunity
                </span>
                <span className="text-xs text-[#94A3B8] font-mono">
                  Parent Equity Allocation
                </span>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-4xl lg:text-[36px] font-extrabold tracking-tight text-white font-sans leading-[1.15]">
                  Invest in{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#38BDF8]">
                    1008 Network Studio
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-[#94A3B8] leading-relaxed max-w-2xl font-normal">
                  Back the venture studio co-building real economy enterprises with experienced founders. Holding equity in 1008 Network gives you direct participation across the ventures, systems, and operating equity we build.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-[#00D4B2] text-xs font-mono font-bold">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Co-Building Engine</span>
                  </div>
                  <span className="text-[11px] text-[#94A3B8] mt-1">Direct venture creation</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-[#00D4B2] text-xs font-mono font-bold">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Parent Equity</span>
                  </div>
                  <span className="text-[11px] text-[#94A3B8] mt-1">Holding entity stake</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col justify-between">
                  <div className="flex items-center gap-2 text-[#00D4B2] text-xs font-mono font-bold">
                    <CheckCircle2 className="h-4 w-4 shrink-0" />
                    <span>Zero Brokerage</span>
                  </div>
                  <span className="text-[11px] text-[#94A3B8] mt-1">Direct private round</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 sm:p-7 rounded-2xl bg-white/[0.06] border border-white/15 backdrop-blur-md space-y-4 shadow-xl">
              <div className="space-y-2.5 text-xs font-mono">
                <div className="flex items-center justify-between text-[#94A3B8]">
                  <span>Structure</span>
                  <span className="text-white font-bold">Parent Holding Corp</span>
                </div>
                <div className="flex items-center justify-between text-[#94A3B8]">
                  <span>Access</span>
                  <span className="text-[#00D4B2] font-semibold">Curated Review</span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  onClick={() => setIsStudioInvestModalOpen(true)}
                  variant="primary"
                  size="lg"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                  className="w-full justify-center font-semibold text-sm shadow-[0_4px_16px_rgba(99,91,255,0.4)] bg-[#635BFF] hover:bg-[#5851EA] border-none py-3"
                >
                  Invest in 1008 Studio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FAQs Section */}
      <PillarFAQ
        items={capitalFaqs}
        badge="Capital Network FAQs"
        badgeVariant="cyan"
        title="Frequently Answered Questions"
        description="Everything you need to know about submissions, investor criteria, deal calls, and independent due diligence."
      />

      {/* 6. Facilitator & Disclaimer Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="p-6 rounded-2xl bg-[#FFFBEB] border border-[#FDE68A] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#92400E]">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-[#D97706] shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold font-sans text-sm text-[#78350F]">
                Statutory Notice & Explicit Regulatory Exclusions:
              </span>
              <p className="text-xs text-[#A16207] leading-relaxed max-w-4xl">
                1008 Network operates strictly as a discovery and networking facilitator. 1008 is <strong>not</strong> a stock broker, investment adviser, portfolio manager, Alternative Investment Fund (AIF), mutual fund, merchant banker, custodian, depository, escrow provider, or investment fund. We do not hold investor capital, manage custodial funds, provide financial advice, or guarantee returns. All contracts and due diligence are executed directly between companies and investors.
              </p>
            </div>
          </div>
          <Link
            href="/terms#regulatory-disclaimer"
            className="text-xs font-mono font-bold text-[#D97706] hover:underline whitespace-nowrap shrink-0 self-start md:self-auto"
          >
            Review Disclaimers →
          </Link>
        </div>
      </section>

      {/* Invest in 1008 Network Modal */}
      <InvestIn1008Modal
        isOpen={isStudioInvestModalOpen}
        onClose={() => setIsStudioInvestModalOpen(false)}
      />
    </div>
  );
}

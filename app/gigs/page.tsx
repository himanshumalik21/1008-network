"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import {
  Zap,
  Clock,
  ArrowRight,
  PlusCircle,
  Sparkles,
  CheckCircle2,
  Building2,
  Users,
  ShieldCheck,
  ChevronRight,
  FileCheck2,
  Workflow,
  Target,
  Code2,
  Search,
  Cpu,
  BarChart3,
  Scale,
} from "lucide-react";

export default function GigsPage() {
  const [selectedSprint, setSelectedSprint] = useState<number>(0);

  const sprintCapabilities = [
    {
      id: "erp",
      title: "ERP & Automated GST Ledgers",
      category: "Operations & Accounts",
      typicalBudget: "₹35,000 - ₹75,000",
      turnaround: "2 - 4 Weeks",
      summary: "Migrate legacy tally accounts into self-hosted ERPNext or Zoho, configure multi-warehouse inventory ledgers, and automate GST e-invoicing webhooks.",
      deliverables: [
        "ERPNext / Frappe cloud deployment with custom ledger charts",
        "Legacy Tally & Excel master data migration and reconciliation",
        "Automated GST e-way bill & e-invoicing API integration",
        "Accounting team workflow walkthrough & SOP documentation",
      ],
      icon: BarChart3,
      color: "#635BFF",
      accentBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
    },
    {
      id: "sales",
      title: "B2B Outbound Cold Lead Engine",
      category: "Go-to-Market & Sales",
      typicalBudget: "₹25,000 - ₹50,000",
      turnaround: "1 - 2 Weeks",
      summary: "Build verified ICP lead databases, configure secondary email outreach domains with SPF/DKIM/DMARC warmup, and deploy high-converting cold email sequences.",
      deliverables: [
        "Verified lead list of 1,000+ target decision makers via Apollo",
        "Domain reputation warmup & Smartlead / Instantly integration",
        "3 high-conversion copywriting outreach sequence variants",
        "Automated CRM webhook piping for inbound meeting bookings",
      ],
      icon: Target,
      color: "#00A389",
      accentBg: "bg-[#E6FFFA] text-[#007A66] border-[#B2F5EA]",
    },
    {
      id: "factory",
      title: "Factory SOPs & Regulatory Compliance",
      category: "Supply Chain & Manufacturing",
      typicalBudget: "₹50,000 - ₹90,000",
      turnaround: "2 - 4 Weeks",
      summary: "Draft detailed assembly floor SOPs, quality assurance bench-testing checklists, and regulatory submission documentation for BIS, ISO, or FSSAI standards.",
      deliverables: [
        "Floor assembly process documentation & technician work instructions",
        "Quality control (QC) bench-testing protocol checklists",
        "Worker safety & thermal/hazardous material handling protocols",
        "Pre-audit binder prepared for laboratory testing compliance",
      ],
      icon: Building2,
      color: "#059669",
      accentBg: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
    },
    {
      id: "software",
      title: "Full-Stack Web & Next.js Architecture",
      category: "Tech & Software Development",
      typicalBudget: "₹40,000 - ₹1,00,000",
      turnaround: "2 - 4 Weeks",
      summary: "Modernize legacy portals, build production Next.js web applications, connect banking/UPI payment gateways, and optimize cloud hosting performance.",
      deliverables: [
        "Production Next.js / TypeScript responsive web application",
        "Database schema design (PostgreSQL / Supabase / Prisma)",
        "Payment rails integration (Razorpay / Cashfree / Stripe)",
        "Zero-downtime CI/CD deployment on Vercel or AWS",
      ],
      icon: Code2,
      color: "#635BFF",
      accentBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
    },
    {
      id: "legal",
      title: "Co-Founder SHA & Cap Table Setup",
      category: "Legal & Corporate Structuring",
      typicalBudget: "₹20,000 - ₹45,000",
      turnaround: "1 - 2 Weeks",
      summary: "Draft standard co-founder shareholders agreements (SHA) with 1-year cliff and 4-year milestone vesting schedules, ESOP pool guidelines, and IP assignment.",
      deliverables: [
        "Comprehensive Co-Founder Agreement with vesting clauses",
        "Intellectual Property (IP) assignment agreements",
        "Standardized advisor & key employee equity grant deeds",
        "Cap table modeling and founder dispute resolution terms",
      ],
      icon: Scale,
      color: "#D97706",
      accentBg: "bg-[#FEF3C7] text-[#B45309] border-[#FDE68A]",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#FDFDFE] min-h-screen">
      {/* 1. Header Banner */}
      <section className="relative py-14 sm:py-20 overflow-hidden border-b border-[#E6E8EB] bg-[#F6F9FC]">
        <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-40 pointer-events-none" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-80 bg-gradient-to-r from-[#635BFF]/10 via-[#00D4B2]/08 to-[#FF7043]/06 blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 flex-wrap justify-center">
            <Badge variant="indigo" size="md">
              1008 Community • Gigs & Project Sprints
            </Badge>
            <span className="text-xs font-mono font-semibold text-[#00A389] bg-[#E6FFFA] px-2.5 py-0.5 rounded-full border border-[#B2F5EA]">
              Fast-Turnaround Business Goals
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Acute project sprints for operating businesses.{" "}
            <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
              Delivered by verified specialists.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#425466] leading-relaxed max-w-3xl mx-auto font-normal">
            Whether your business needs an ERP ledger migration, cold outbound sales engine, or BIS factory compliance audit — post an acute gig or deliver high-impact project sprints for Indian ventures.
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              href="/gigs/post"
              size="md"
              variant="primary"
              rightIcon={<PlusCircle className="h-4 w-4" />}
              className="w-full sm:w-auto font-semibold px-6 shadow-sm"
            >
              Post a Gig Request (For Businesses)
            </Button>
            <Button
              href="/contact"
              size="md"
              variant="secondary"
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="w-full sm:w-auto font-semibold px-6 shadow-xs"
            >
              Apply as a Specialist (For Operators)
            </Button>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-[#64748B] font-mono">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[#00D4B2]" /> Direct Founder Scope
            </span>
            <span>•</span>
            <span>Fixed Milestone INR Budgets</span>
            <span>•</span>
            <span>Zero Agency Retainers</span>
          </div>
        </div>
      </section>

      {/* 2. Dual Intake Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Businesses */}
          <div className="p-8 rounded-3xl bg-white border border-[#E6E8EB] shadow-xs flex flex-col justify-between space-y-6 hover:border-[#635BFF]/40 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#F0F0FF] text-[#635BFF] flex items-center justify-center border border-[#E0E0FF]">
                <Building2 className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <Badge variant="indigo" size="sm">For Operating Businesses</Badge>
                <h3 className="text-2xl font-extrabold text-[#0A2540]">Need an Acute Bottleneck Solved?</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Post your exact deliverable, budget, and timeline. 1008 Network matches your requirement with verified specialists within 24 to 48 hours.
                </p>
              </div>

              <div className="space-y-2 pt-2 text-xs text-[#334155]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0" />
                  <span>Clear deliverables with milestone-based sign-offs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0" />
                  <span>No monthly marketing agency lock-ins or retainers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#635BFF] shrink-0" />
                  <span>Direct communication with pre-vetted operators</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F1F4F8]">
              <Button
                href="/gigs/post"
                variant="primary"
                size="md"
                className="w-full justify-center font-semibold shadow-xs"
                rightIcon={<PlusCircle className="h-4 w-4" />}
              >
                Post a Gig Requirement (Fill Form)
              </Button>
            </div>
          </div>

          {/* Card 2: Specialists */}
          <div className="p-8 rounded-3xl bg-white border border-[#E6E8EB] shadow-xs flex flex-col justify-between space-y-6 hover:border-[#00A389]/40 transition-all">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#E6FFFA] text-[#00A389] flex items-center justify-center border border-[#B2F5EA]">
                <Users className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <Badge variant="cyan" size="sm">For Operators & Specialists</Badge>
                <h3 className="text-2xl font-extrabold text-[#0A2540]">Take On High-Value Sprints</h3>
                <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                  Join the 1008 community to work with ambitious Indian businesses. Get clear briefs, committed budgets, and zero payment chasing.
                </p>
              </div>

              <div className="space-y-2 pt-2 text-xs text-[#334155]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                  <span>Pre-scoped projects with committed founder budgets</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                  <span>Direct founder collaboration under clean contracts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0" />
                  <span>Fast 1 to 4 week agile sprints with immediate payout</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#F1F4F8]">
              <Button
                href="/contact"
                variant="secondary"
                size="md"
                className="w-full justify-center font-semibold shadow-xs"
                rightIcon={<ArrowRight className="h-4 w-4 text-[#00A389]" />}
              >
                Join Specialist Network (Get In Touch)
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Common Sprint Capabilities & Deliverables Matrix */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <Badge variant="indigo" size="sm">Sprint Capabilities</Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
            Common Project Sprints Solved in 1008
          </h2>
          <p className="text-xs sm:text-sm text-[#475569]">
            Select a project category below to view typical scopes, budgets, and turnaround timelines.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex items-center justify-center gap-2 flex-wrap">
          {sprintCapabilities.map((cap, idx) => (
            <button
              key={cap.id}
              onClick={() => setSelectedSprint(idx)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                selectedSprint === idx
                  ? "bg-[#635BFF] text-white shadow-xs"
                  : "bg-white text-[#475569] border border-[#CBD5E1] hover:bg-[#F8FAFC]"
              }`}
            >
              {cap.title}
            </button>
          ))}
        </div>

        {/* Active Capability Card */}
        {(() => {
          const cap = sprintCapabilities[selectedSprint];
          const Icon = cap.icon;
          return (
            <div className="bg-white rounded-3xl border border-[#E2E8F0] p-6 sm:p-8 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#F1F5F9]">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-md border ${cap.accentBg}`}>
                      {cap.category}
                    </span>
                    <span className="text-xs font-mono text-[#64748B]">⏱ {cap.turnaround}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540]">
                    {cap.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#475569] max-w-2xl">
                    {cap.summary}
                  </p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span className="text-xs font-mono text-[#64748B] block">Typical Budget</span>
                  <span className="text-lg sm:text-xl font-bold text-[#059669] font-mono">{cap.typicalBudget}</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#64748B]">
                  Core Deliverables Included in this Sprint:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cap.deliverables.map((d, i) => (
                    <div key={i} className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-start gap-2.5 text-xs text-[#334155]">
                      <CheckCircle2 className="h-4 w-4 text-[#00A389] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#F1F5F9] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#64748B]">
                  Need this delivered for your business?
                </span>
                <Button
                  href="/gigs/post"
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRight className="h-4 w-4" />}
                >
                  Post This Requirement Now
                </Button>
              </div>
            </div>
          );
        })()}
      </section>

      {/* 4. Sprint Lifecycle Infographic */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540]">
              How Project Sprints Work in 1008
            </h3>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Streamlined, milestone-verified execution with zero administrative friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-2">
              <span className="w-8 h-8 rounded-xl bg-[#F0F0FF] text-[#635BFF] font-mono font-bold text-xs flex items-center justify-center">
                01
              </span>
              <h4 className="text-sm font-bold text-[#0A2540]">Submit Requirement & Budget</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Define the acute hurdle, key deliverables, and target timeline in our intake form.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-2">
              <span className="w-8 h-8 rounded-xl bg-[#E6FFFA] text-[#00A389] font-mono font-bold text-xs flex items-center justify-center">
                02
              </span>
              <h4 className="text-sm font-bold text-[#0A2540]">24-Hour Specialist Matching</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                1008 ops matches your brief with a pre-vetted specialist and establishes milestone scopes.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#E2E8F0] space-y-2">
              <span className="w-8 h-8 rounded-xl bg-[#ECFDF5] text-[#059669] font-mono font-bold text-xs flex items-center justify-center">
                03
              </span>
              <h4 className="text-sm font-bold text-[#0A2540]">Milestone Sign-Off</h4>
              <p className="text-xs text-[#475569] leading-relaxed">
                Specialist delivers in 1 to 4 weeks. Payout is released upon verified completion.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

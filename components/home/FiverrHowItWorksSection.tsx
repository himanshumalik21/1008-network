"use client";

import React from "react";
import { Badge } from "@/components/brand/Badge";
import {
  FileText,
  Users,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Lock,
} from "lucide-react";
import Link from "next/link";

export function FiverrHowItWorksSection() {
  const steps = [
    {
      num: "01",
      tag: "INTAKE & SELECTION",
      title: "Browse Services or Post a Custom Need",
      description:
        "Select from our pre-scoped turnkey offerings—such as hiring a technical CTO, deploying ERPNext, or finding angel investors—or post a custom business requirement.",
      icon: FileText,
      accentColor: "#00A389",
      accentBg: "bg-[#E6FFFA] text-[#007A66] border-[#B2F5EA]",
    },
    {
      num: "02",
      tag: "CONFIDENTIAL SCOPING",
      title: "Matched Under Mutual NDA",
      description:
        "1008 curates high-alignment matches. Connect directly with vetted leaders, capital syndicates, or 1008's dedicated execution pod with complete confidentiality.",
      icon: Users,
      accentColor: "#635BFF",
      accentBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
    },
    {
      num: "03",
      tag: "MILESTONE DELIVERY",
      title: "Turnkey Execution & Aligned Ownership",
      description:
        "Execute with milestone-based gates. 100% Day-1 IP ownership, standardized 4-year reverse-vesting rails, and zero hidden placement or agency commissions.",
      icon: CheckCircle2,
      accentColor: "#059669",
      accentBg: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-[#E6E8EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="cyan" size="sm">
            How It Works
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight font-sans">
            Getting Things Done on 1008 Marketplace
          </h2>
          <p className="text-sm sm:text-base text-[#425466]">
            A simple, transparent 3-step workflow designed to eliminate friction, broker fees, and execution delays.
          </p>
        </div>

        {/* 3 Step Flow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-xs relative flex flex-col justify-between space-y-6 hover:border-[#CBD5E1] transition-all"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-2xl bg-white border border-[#CBD5E1] text-[#0A2540] font-mono font-bold text-sm flex items-center justify-center shadow-2xs">
                      {step.num}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${step.accentBg}`}
                    >
                      {step.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#0A2540]">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex items-center gap-2 text-xs font-mono text-[#64748B]">
                  <Icon className="h-4 w-4" style={{ color: step.accentColor }} />
                  <span>Verified Standardized Process</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

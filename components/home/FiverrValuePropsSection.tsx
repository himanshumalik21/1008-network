"use client";

import React from "react";
import { Badge } from "@/components/brand/Badge";
import {
  ShieldCheck,
  CheckCircle2,
  Lock,
  Layers,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export function FiverrValuePropsSection() {
  const valueProps = [
    {
      title: "Pre-Screened Leaders & Architects",
      description:
        "No unqualified applicant spam. Every Technical CTO, GTM head, and specialist is evaluated on proven past execution and domain depth.",
      icon: ShieldCheck,
      color: "#00A389",
    },
    {
      title: "Turnkey In-House Execution Arm",
      description:
        "Stop burning cash on generic marketing agencies. 1008 works hands-on to build your production software, deploy ERPNext, and structure factory supply chains.",
      icon: Layers,
      color: "#635BFF",
    },
    {
      title: "Zero Intermediary & Broker Cuts",
      description:
        "100% direct founder-to-partner discovery. We charge zero placement markups on talent and take zero broker commission on angel investment syndicates.",
      icon: CheckCircle2,
      color: "#059669",
    },
    {
      title: "Day-1 IP Assignment & Legal Rails",
      description:
        "All code, architectures, SOPs, and assets remain 100% owned by your company entity from Day 1 under standardized reverse-vesting legal frameworks.",
      icon: Lock,
      color: "#FF7043",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#F6F9FC] border-b border-[#E6E8EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <Badge variant="indigo" size="sm">
            Why Businesses Build With 1008
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight font-sans">
            A New Standard for Business Execution & Scaling
          </h2>
          <p className="text-sm sm:text-base text-[#425466]">
            We combined community talent matching, capital syndication, and venture studio operational execution into one seamless marketplace.
          </p>
        </div>

        {/* 4 Value Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-white border border-[#E2E8F0] shadow-2xs space-y-3.5 hover:border-[#CBD5E1] transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}15`, color: item.color }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#0A2540]">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner Strip */}
        <div className="p-8 rounded-3xl bg-white border border-[#CBD5E1] flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-[#0A2540]">
              Need a custom operational setup or confidential consultation?
            </h4>
            <p className="text-xs sm:text-sm text-[#64748B]">
              Speak directly with 1008 Network partners under mutual NDA.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/studio"
              className="px-6 py-3 rounded-xl bg-[#0A2540] hover:bg-[#635BFF] text-white text-xs sm:text-sm font-semibold transition-colors shadow-xs"
            >
              Consult With 1008
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

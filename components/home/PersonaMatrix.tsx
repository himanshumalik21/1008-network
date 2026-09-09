"use client";

import React, { useState } from "react";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import {
  Activity,
  Truck,
  Factory,
  Building2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function PersonaMatrix() {
  const [modalOpen, setModalOpen] = useState(false);

  const domains = [
    {
      icon: Activity,
      badge: "Healthcare & MedTech",
      badgeVariant: "amber" as const,
      iconBg: "bg-[#FFF4ED] text-[#F4511E] border-[#FFE0D2]",
      title: "Hospital & Pharma Leaders (Ex-VP / Directors)",
      description:
        "You understand clinical workflows, tertiary hospital procurement bottlenecks, cold-chain regulatory compliance, and diagnostic data silos.",
      thesisExample: "e.g. Automated Phase II/III clinical trial telemetry or B2B hospital consumables procurement ledger.",
    },
    {
      icon: Factory,
      badge: "Industrial & Manufacturing",
      badgeVariant: "cyan" as const,
      iconBg: "bg-[#E6FFFA] text-[#00A389] border-[#B2F5EA]",
      title: "Plant Heads & Auto-Ancillary GMs",
      description:
        "You have run machining units, precision tooling clusters, or component supply lines in Pune, Manesar, or Coimbatore.",
      thesisExample: "e.g. On-demand precision CNC jigs procurement or shop-floor downtime tracking software.",
    },
    {
      icon: Truck,
      badge: "Logistics & Supply Chain",
      badgeVariant: "emerald" as const,
      iconBg: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
      title: "Supply Chain & Operations Executives",
      description:
        "You have managed 3PL fleets, FMCG distributor networks, warehouse reconciliation, or multi-state freight routes.",
      thesisExample: "e.g. Real-time GST-to-Bank trade credit underwriting for Tier-2 distributors.",
    },
    {
      icon: Building2,
      badge: "Enterprise & Real Estate",
      badgeVariant: "indigo" as const,
      iconBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
      title: "Commercial Asset & B2B Practice Leads",
      description:
        "You know how large Indian family enterprises buy, manage Grade-A commercial leasing, or navigate compliance audits.",
      thesisExample: "e.g. Unified tenant CAM billing automation or B2B enterprise procurement engines.",
    },
  ];

  return (
    <section id="personas" className="py-24 bg-white relative overflow-hidden border-t border-[#E6E8EB]">
      {/* Background Architectural Box Grid & Ambient Motion */}
      <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-45 pointer-events-none" />
      <div className="absolute top-1/3 -left-20 w-[500px] h-[400px] bg-gradient-to-tr from-[#635BFF]/06 via-[#00D4B2]/05 to-transparent blur-[130px] pointer-events-none animate-float-slow" />
      <div className="absolute -bottom-20 -right-20 w-[450px] h-[350px] bg-gradient-to-bl from-[#FF7043]/06 to-transparent blur-[120px] pointer-events-none animate-float-reverse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="indigo" size="sm">Domain Expertise</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Built for India&apos;s deep domain veterans.
          </h2>
          <p className="text-[#425466] text-base sm:text-lg">
            We partner with operators who have lived the problem for 10–20+ years and possess authentic customer trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {domains.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-8 flex flex-col justify-between hover:border-[#CBD5E1] transition-all duration-300 relative group shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className={`p-2.5 rounded-xl border ${item.iconBg}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge variant={item.badgeVariant} size="sm">
                      {item.badge}
                    </Badge>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#425466] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] text-xs text-[#0A2540] mb-6 flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                    <span><strong className="text-[#0A2540]">Venture Opportunity:</strong> {item.thesisExample}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E6E8EB]">
                  <Button
                    onClick={() => setModalOpen(true)}
                    variant="secondary"
                    size="sm"
                    className="w-full justify-between font-semibold text-xs"
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    Build in This Sector
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <StudioApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}

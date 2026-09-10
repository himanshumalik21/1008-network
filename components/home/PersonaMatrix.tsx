"use client";

import React, { useState } from "react";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import {
  Sparkles,
  RefreshCw,
  Briefcase,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function PersonaMatrix() {
  const [modalOpen, setModalOpen] = useState(false);

  const domains = [
    {
      icon: Briefcase,
      badge: "Tech Startups & SaaS",
      badgeVariant: "indigo" as const,
      iconBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
      title: "Tech Startups & Digital Platforms",
      bullets: [
        "Venture-grade Next.js / cloud infrastructure architecture",
        "Rapid feasibility MVP build & vetted developer hiring",
        "GTM customer activation, pilot onboarding & telemetry",
      ],
      thesisExample: "B2B SaaS, enterprise workflow engines, fintech infrastructure & logistics platforms.",
    },
    {
      icon: Sparkles,
      badge: "Consumer Brands & D2C",
      badgeVariant: "amber" as const,
      iconBg: "bg-[#FFF4ED] text-[#F4511E] border-[#FFE0D2]",
      title: "Consumer Brands & D2C Networks",
      bullets: [
        "Contract batch manufacturing & custom packaging design",
        "Warehousing, 3PL fulfillment & conversion-optimized commerce stack",
        "Brand launch campaigns, retail distribution & customer acquisition",
      ],
      thesisExample: "Apparel labels, packaged consumer goods, functional wellness & beauty brands.",
    },
    {
      icon: TrendingUp,
      badge: "Product Brands & Hardware",
      badgeVariant: "emerald" as const,
      iconBg: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
      title: "Physical Product Brands & Hardware",
      bullets: [
        "Industrial 3D design, rapid CAD prototyping & material testing",
        "Custom tooling, mold fabrication & batch manufacturing",
        "Domestic distributor placement, warranty & supply chain rails",
      ],
      thesisExample: "Consumer electronics, smart appliances, industrial gear & lifestyle hardware.",
    },
    {
      icon: Briefcase,
      badge: "Manufacturing & Industrial",
      badgeVariant: "indigo" as const,
      iconBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
      title: "Manufacturing Plants & Assembly Units",
      bullets: [
        "Strategic industrial land acquisition & state zoning clearances",
        "OEM machinery sourcing, custom tooling & trial production runs",
        "Plant labor staffing & standard operating quality controls",
      ],
      thesisExample: "Precision engineering, auto-components, packaging plants, chemicals & fabrication.",
    },
    {
      icon: Sparkles,
      badge: "Global Co-Investment",
      badgeVariant: "cyan" as const,
      iconBg: "bg-[#E6FFFA] text-[#00A389] border-[#B2F5EA]",
      title: "India Market Entry & Manufacturing JVs",
      bullets: [
        "PLI policy navigation, state subsidy lock & corporate structuring",
        "Industrial corridor scouting, cleanroom & factory setup",
        "Local supplier joint-ventures & syndication with Indian co-investors",
      ],
      thesisExample: "Semiconductor assembly & test (OSAT), EV battery & powertrain units, renewable tech.",
    },
    {
      icon: RefreshCw,
      badge: "Turnaround & Reboots",
      badgeVariant: "indigo" as const,
      iconBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
      title: "Struggling Businesses & Venture Reboots",
      bullets: [
        "Comprehensive root-cause financial & margin leak audit",
        "Restructuring broken supply chains, workflows & bloated tech",
        "Re-igniting sales pipelines & stabilizing monthly cash flows",
      ],
      thesisExample: "Distressed SME turnaround, tech modernization, supplier re-negotiation & margin recovery.",
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
          <Badge variant="indigo" size="sm">Turnkey Capabilities & Use Cases</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Built for any business. From manufacturing to consumer brands.
          </h2>
          <p className="text-[#425466] text-base sm:text-lg">
            Whether launching a new venture from scratch or revitalizing an existing business, 1008 Network executes the ground operations to build lasting enterprise value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-7 flex flex-col justify-between hover:border-[#CBD5E1] hover:shadow-md transition-all duration-300 relative group shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)] h-full"
              >
                {/* Top Section: Header, Title & Scannable Bullets */}
                <div className="space-y-4 flex-1">
                  <div className="flex items-center justify-between gap-4">
                    <div className={`p-2.5 rounded-xl border ${item.iconBg}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <Badge variant={item.badgeVariant} size="sm">
                      {item.badge}
                    </Badge>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#0A2540]">
                    {item.title}
                  </h3>

                  {/* Scannable Bullet Points */}
                  <div className="space-y-2 text-xs text-[#425466]">
                    {item.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#00A389] shrink-0 mt-0.5" />
                        <span className="leading-snug">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Section: Always Aligned Use Cases Box & Action Button */}
                <div className="mt-6 pt-2 space-y-4">
                  <div className="p-3.5 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] text-[11px] text-[#425466] min-h-[72px] flex flex-col justify-center">
                    <strong className="text-[#0A2540] block mb-0.5 font-bold">Use Cases:</strong>
                    <span className="leading-relaxed">{item.thesisExample}</span>
                  </div>

                  <div className="pt-3 border-t border-[#E6E8EB]">
                    <Button
                      onClick={() => setModalOpen(true)}
                      variant="secondary"
                      size="sm"
                      className="w-full justify-between font-semibold text-xs h-9 shadow-xs"
                      rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
                    >
                      Build in This Sector
                    </Button>
                  </div>
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

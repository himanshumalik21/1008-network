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
  Globe,
  Factory,
} from "lucide-react";

export function PersonaMatrix() {
  const [modalOpen, setModalOpen] = useState(false);

  const domains = [
    {
      icon: Factory,
      badge: "Industry & Supply Chain",
      badgeVariant: "indigo" as const,
      iconBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
      title: "Industrial, Manufacturing & Supply Chain",
      bullets: [
        "Cloud ERP, automated inventory ledgers & invoicing setup",
        "OEM batch manufacturing, supplier auditing & vendor contracts",
        "B2B sales workflows, key account management & credit rails",
      ],
      thesisExample: "Precision tooling, spare parts distribution, industrial ancillaries, and B2B supply networks.",
    },
    {
      icon: Briefcase,
      badge: "Software & Digital Platforms",
      badgeVariant: "cyan" as const,
      iconBg: "bg-[#E6FFFA] text-[#00A389] border-[#B2F5EA]",
      title: "Vertical Software & Tech Platforms",
      bullets: [
        "Production cloud architecture, APIs & secure database design",
        "Sourcing and hiring founding engineers & technical leads",
        "Enterprise customer onboarding, pilot rollouts & integrations",
      ],
      thesisExample: "B2B vertical SaaS, logistics software, trade finance infrastructure & workflow automation.",
    },
    {
      icon: Sparkles,
      badge: "Consumer & Product Brands",
      badgeVariant: "amber" as const,
      iconBg: "bg-[#FFF4ED] text-[#F4511E] border-[#FFE0D2]",
      title: "Consumer Products & Physical Brands",
      bullets: [
        "Contract batch manufacturing, packaging design & regulatory licenses",
        "Warehousing, 3PL logistics & inventory working capital setup",
        "Modern trade distribution, marketplace launches & customer acquisition",
      ],
      thesisExample: "Packaged consumer goods, wellness products, lifestyle hardware & functional nutrition.",
    },
    {
      icon: TrendingUp,
      badge: "Specialized Services & Health",
      badgeVariant: "emerald" as const,
      iconBg: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
      title: "Specialized Services & Healthcare",
      bullets: [
        "Clinical & service SOPs, staff workflows & billing software",
        "Regulatory compliance, statutory licenses & site setup",
        "Local customer acquisition, referral channels & expansion blueprints",
      ],
      thesisExample: "Specialized diagnostic chains, clinical trial logistics, healthcare operations & domain services.",
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
          <Badge variant="indigo" size="sm">Domain Archetypes</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            You know your industry. We build the company around it.
          </h2>
          <p className="text-[#425466] text-base sm:text-lg">
            Whether your background is in industrial manufacturing, enterprise sales, healthcare, or corporate leadership, 1008 provides the software, suppliers, operational systems, and people you need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

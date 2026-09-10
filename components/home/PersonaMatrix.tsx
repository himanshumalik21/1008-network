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
      badge: "Industrial & Manufacturing",
      badgeVariant: "indigo" as const,
      iconBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
      title: "Manufacturing Plants & Assembly Lines",
      bullets: [
        "Strategic industrial land acquisition & zoning clearances",
        "OEM machinery sourcing, customs clearance & trial runs",
        "Plant labor staffing & standard operating quality controls",
      ],
      thesisExample: "Auto-components, precision tooling, packaging plants, chemicals & electronics fabrication.",
    },
    {
      icon: TrendingUp,
      badge: "Healthcare & Institutions",
      badgeVariant: "emerald" as const,
      iconBg: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
      title: "Hospitals, Clinics & Educational Hubs",
      bullets: [
        "Commercial medical real estate scouting & health permits",
        "Diagnostic & clinical equipment procurement and leasing",
        "Doctors, clinical technicians & institutional staff hiring",
      ],
      thesisExample: "Specialty day-care clinics, diagnostic chains, private K-12 schools & vocational academies.",
    },
    {
      icon: Sparkles,
      badge: "Hospitality & Commercial Spaces",
      badgeVariant: "cyan" as const,
      iconBg: "bg-[#E6FFFA] text-[#00A389] border-[#B2F5EA]",
      title: "Hotels, Resorts & Restaurant Chains",
      bullets: [
        "High-footfall property due diligence & commercial leases",
        "Commercial kitchen fit-out, interior commissioning & liquor permits",
        "Hospitality crew recruitment, property tech & OTA booking launch",
      ],
      thesisExample: "Boutique heritage resorts, cloud kitchen networks, lifestyle cafes & experiential venues.",
    },
    {
      icon: Sparkles,
      badge: "Consumer Brands & D2C",
      badgeVariant: "amber" as const,
      iconBg: "bg-[#FFF4ED] text-[#F4511E] border-[#FFE0D2]",
      title: "Apparel Lines, Consumer Tech & D2C",
      bullets: [
        "Contract batch manufacturing & custom packaging design",
        "Warehousing, 3PL fulfillment & conversion-optimized commerce stack",
        "Brand launch campaigns, retail distribution & customer acquisition",
      ],
      thesisExample: "Apparel labels, consumer electronics, specialized packaged goods & functional foods.",
    },
    {
      icon: Briefcase,
      badge: "Trade & Distribution",
      badgeVariant: "slate" as const,
      iconBg: "bg-[#F6F9FC] text-[#0A2540] border-[#E6E8EB]",
      title: "Distribution Networks & Import-Export",
      bullets: [
        "Verified supplier contracts & wholesale logistics corridors",
        "Warehousing hubs, customs clearance & GST tax compliance",
        "B2B dealer sales pipelines & trade credit financing",
      ],
      thesisExample: "Commodity distribution, industrial raw materials, cross-border trade & wholesale supply.",
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
          <Badge variant="indigo" size="sm">Sector Specializations & Use Cases</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Built for any industry. From heavy manufacturing to consumer brands.
          </h2>
          <p className="text-[#425466] text-base sm:text-lg">
            Whether starting from zero or revitalizing a struggling enterprise, 1008 Network executes the ground operations to build lasting enterprise value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {domains.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-7 flex flex-col justify-between hover:border-[#CBD5E1] transition-all duration-300 relative group shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)]"
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

                  <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] mb-3">
                    {item.title}
                  </h3>

                  {/* Scannable Bullet Points */}
                  <div className="space-y-2 mb-5 text-xs text-[#425466]">
                    {item.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#00A389] shrink-0 mt-0.5" />
                        <span className="leading-snug">{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] text-[11px] text-[#425466] mb-5">
                    <strong className="text-[#0A2540] block mb-0.5">Use Cases:</strong>
                    <span>{item.thesisExample}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E6E8EB]">
                  <Button
                    onClick={() => setModalOpen(true)}
                    variant="secondary"
                    size="sm"
                    className="w-full justify-between font-semibold text-xs"
                    rightIcon={<ArrowRight className="h-3.5 w-3.5" />}
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

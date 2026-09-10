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
      description:
        "Passionate about setting up a production facility but intimidated by industrial zoning, machinery vendors, or plant licensing? We handle strategic land acquisition, OEM equipment procurement, factory civil works, pollution clearances, and floor staffing.",
      thesisExample: "Auto-components, precision fabrication, packaging lines, chemical processing & electronics assembly.",
    },
    {
      icon: TrendingUp,
      badge: "Healthcare & Institutions",
      badgeVariant: "emerald" as const,
      iconBg: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
      title: "Hospitals, Clinics & Educational Hubs",
      description:
        "Building a multi-specialty clinic, diagnostic chain, school, or skill academy? We take care of commercial real estate scouting, medical/lab equipment leasing, regulatory health/education compliance, management tech, and medical/academic staffing.",
      thesisExample: "Specialty day-care surgery, diagnostic networks, K-12 private institutions & vocational academies.",
    },
    {
      icon: Sparkles,
      badge: "Hospitality & Commercial Spaces",
      badgeVariant: "cyan" as const,
      iconBg: "bg-[#E6FFFA] text-[#00A389] border-[#B2F5EA]",
      title: "Hotels, Resorts & Food & Beverage Networks",
      description:
        "Envisioning a boutique resort, hotel property, or specialty restaurant chain? We execute site location diligence, interior and kitchen commissioning, municipal and liquor licensing, property management tech, and hospitality staff onboarding.",
      thesisExample: "Boutique heritage retreats, cloud kitchen clusters, lifestyle cafes & experiential hospitality.",
    },
    {
      icon: Sparkles,
      badge: "Consumer Brands & D2C",
      badgeVariant: "amber" as const,
      iconBg: "bg-[#FFF4ED] text-[#F4511E] border-[#FFE0D2]",
      title: "Apparel Lines, Consumer Electronics & D2C",
      description:
        "Launching an apparel collection, consumer gadget, or packaged food brand? We manage contract manufacturing negotiations, packaging design, warehouse fulfillment, digital commerce architecture, and performance GTM to drive early sales.",
      thesisExample: "Specialty apparel labels, smart consumer hardware, functional nutrition & packaged consumer goods.",
    },
    {
      icon: Briefcase,
      badge: "Wholesale & Trade Infrastructure",
      badgeVariant: "slate" as const,
      iconBg: "bg-[#F6F9FC] text-[#0A2540] border-[#E6E8EB]",
      title: "Distribution Networks & Import-Export",
      description:
        "Establishing an interstate distribution network or import-export house? We structure verified supplier contracts, warehousing hubs, customs clearances, and B2B dealer sales channels for consistent cash flows.",
      thesisExample: "Industrial raw material supply, FMCG distribution corridors, cross-border trading & wholesale logistics.",
    },
    {
      icon: RefreshCw,
      badge: "Turnaround & Stalled Ventures",
      badgeVariant: "indigo" as const,
      iconBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
      title: "Struggling Businesses & Venture Reboots",
      description:
        "Is your business bleeding cash, suffering from operational chaos, or stalled by broken technology? We step in as active co-builders to audit unit economics, restructure operations, repair workflows, and re-ignite commercial growth.",
      thesisExample: "Distressed SME turnaround, tech-stack re-architecture, distribution restructuring & cash-flow stabilization.",
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
            Built for any business. From heavy industry to consumer brands.
          </h2>
          <p className="text-[#425466] text-base sm:text-lg">
            Whether starting from a blank sheet of paper or reviving a struggling enterprise, 1008 Network provides the operational muscle to build a durable business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

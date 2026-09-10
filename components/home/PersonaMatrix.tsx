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
      badge: "Manufacturing & Industrial",
      badgeVariant: "indigo" as const,
      iconBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
      title: "Manufacturing Plants & Industrial Units",
      description:
        "Looking to set up a new production or assembly line? We scout industrial land, manage plant civil setup, procure machinery, clear regulatory registrations, hire plant manpower, and set up the supply chain.",
      thesisExample: "Auto-ancillaries, precision tooling, packaging plants, chemicals, food processing & electronics fabrication.",
    },
    {
      icon: TrendingUp,
      badge: "Healthcare & Institutions",
      badgeVariant: "emerald" as const,
      iconBg: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
      title: "Hospitals, Clinics, Schools & Academies",
      description:
        "Building a hospital, specialized diagnostic center, private school, or skill institute? We handle facility scouting, medical/lab equipment sourcing, licensing & compliance, management tech, and staff hiring.",
      thesisExample: "Multi-specialty clinics, diagnostic chains, K-12 schools, vocational academies & healthcare hubs.",
    },
    {
      icon: Sparkles,
      badge: "Hospitality & Retail",
      badgeVariant: "cyan" as const,
      iconBg: "bg-[#E6FFFA] text-[#00A389] border-[#B2F5EA]",
      title: "Hotels, Resorts, Restaurants & Commercial Real Estate",
      description:
        "Launching a boutique hotel, restaurant chain, or commercial venue? We manage site acquisition, interior & kitchen build-out, booking software, hospitality staff recruitment, and opening marketing.",
      thesisExample: "Boutique hotels, cloud kitchen networks, wellness resorts, and premium F&B retail formats.",
    },
    {
      icon: Sparkles,
      badge: "E-Commerce & D2C",
      badgeVariant: "amber" as const,
      iconBg: "bg-[#FFF4ED] text-[#F4511E] border-[#FFE0D2]",
      title: "Clothing Lines, Electronics & Consumer Brands",
      description:
        "Launching an apparel brand, consumer electronics product, or lifestyle brand? We coordinate contract manufacturing, packaging, warehouse fulfillment, digital storefronts, and performance marketing to get first orders.",
      thesisExample: "Apparel & fashion lines, consumer electronics, specialized packaged goods & D2C brands.",
    },
    {
      icon: Briefcase,
      badge: "Trading & Distribution",
      badgeVariant: "slate" as const,
      iconBg: "bg-[#F6F9FC] text-[#0A2540] border-[#E6E8EB]",
      title: "Trading, Wholesale & Import-Export",
      description:
        "Setting up a distribution network or trading company? We establish supplier contracts, warehouse operations, customs/GST compliance, and B2B dealer sales pipelines.",
      thesisExample: "Commodity distribution, industrial raw materials, cross-border import/export & wholesale channels.",
    },
    {
      icon: RefreshCw,
      badge: "Tech & Turnaround",
      badgeVariant: "indigo" as const,
      iconBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
      title: "Tech Ventures & Stalled Business Turnarounds",
      description:
        "Starting a tech venture or rebooting a struggling business? We build rapid feasibility prototypes, design scalable operational systems, fix broken workflows, and vet tech teams tailored to your budget.",
      thesisExample: "B2B SaaS, internal enterprise software, marketplace platforms, and operational reboot of stalled companies.",
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
          <Badge variant="indigo" size="sm">Industries & Business Use Cases</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Built for any business. From manufacturing to tech.
          </h2>
          <p className="text-[#425466] text-base sm:text-lg">
            Whether starting a manufacturing plant, hospital, school, hotel, e-commerce brand, or tech startup—1008 Network puts your vision to work.
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

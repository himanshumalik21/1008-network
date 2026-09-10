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
      icon: Sparkles,
      badge: "Idea to Launch",
      badgeVariant: "indigo" as const,
      iconBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
      title: "Aspiring Founders with a Strong Concept",
      description:
        "You have identified a real market opportunity and want to build a business, but lack a dedicated technical co-founder or engineering team to build a scalable product.",
      thesisExample: "e.g. B2B marketplaces, workflow automation tools, niche SaaS, and AI-powered service platforms.",
    },
    {
      icon: RefreshCw,
      badge: "Turnaround & Reboot",
      badgeVariant: "amber" as const,
      iconBg: "bg-[#FFF4ED] text-[#F4511E] border-[#FFE0D2]",
      title: "Struggling or Stalled Ventures",
      description:
        "You launched an MVP or early version, but got stuck with buggy outsourced code, poor user retention, or lack of traction. 1008 steps in as your turnaround partner to rebuild and relaunch.",
      thesisExample: "e.g. Re-architecting brittle MVPs into production-grade Next.js platforms with streamlined onboarding.",
    },
    {
      icon: Briefcase,
      badge: "Domain Operators",
      badgeVariant: "emerald" as const,
      iconBg: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
      title: "Professionals & Operators Starting a Business",
      description:
        "You know your industry inside out (Healthcare, Logistics, Retail, Manufacturing, Finance) and want to turn that deep insight into a high-margin tech company.",
      thesisExample: "e.g. Specialized hospital procurement engines, auto-ancillary tracking tools, or supply chain portals.",
    },
    {
      icon: TrendingUp,
      badge: "Offline to Tech",
      badgeVariant: "cyan" as const,
      iconBg: "bg-[#E6FFFA] text-[#00A389] border-[#B2F5EA]",
      title: "Established Businesses Modernizing",
      description:
        "You run an existing profitable business or distribution network and want to build a software arm, digital marketplace, or tech-enabled spin-out.",
      thesisExample: "e.g. Digitizing dealer distributor networks, automating customer workflows, or building proprietary SaaS.",
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
          <Badge variant="indigo" size="sm">Who We Build With</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Built for founders, operators & businesses ready to scale.
          </h2>
          <p className="text-[#425466] text-base sm:text-lg">
            Whether you are starting from scratch with a fresh idea or fixing a stalled business, 1008 provides the technical execution to make it happen.
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

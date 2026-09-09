"use client";

import React, { useState } from "react";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { StudioApplicationModal } from "@/components/studio/StudioApplicationModal";
import {
  Briefcase,
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
      title: "Hospital & Pharma Leaders (Ex-VP / Directors)",
      description:
        "You understand clinical workflows, tertiary hospital procurement bottlenecks, cold-chain regulatory compliance, and diagnostic data silos.",
      thesisExample: "e.g. Automated Phase II/III clinical trial telemetry or B2B hospital consumables procurement ledger.",
      accent: "amber",
    },
    {
      icon: Factory,
      badge: "Industrial & Manufacturing",
      title: "Plant Heads & Auto-Ancillary GMs",
      description:
        "You have run machining units, precision tooling clusters, or component supply lines in Pune, Manesar, or Coimbatore.",
      thesisExample: "e.g. On-demand precision CNC jigs procurement or shop-floor downtime tracking software.",
      accent: "cyan",
    },
    {
      icon: Truck,
      badge: "Logistics & Supply Chain",
      title: "Supply Chain & Operations Executives",
      description:
        "You have managed 3PL fleets, FMCG distributor networks, warehouse reconciliation, or multi-state freight routes.",
      thesisExample: "e.g. Real-time GST-to-Bank trade credit underwriting for Tier-2 distributors.",
      accent: "emerald",
    },
    {
      icon: Building2,
      badge: "Enterprise & Real Estate",
      title: "Commercial Asset & B2B Practice Leads",
      description:
        "You know how large Indian family enterprises buy, manage Grade-A commercial leasing, or navigate compliance audits.",
      thesisExample: "e.g. Unified tenant CAM billing automation or B2B enterprise procurement engines.",
      accent: "slate",
    },
  ];

  return (
    <section id="personas" className="py-24 bg-background relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="cyan" size="sm">Domain Expertise</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground font-sans">
            Built for India&apos;s deep domain veterans.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            We partner with operators who have lived the problem for 10–20+ years and possess authentic customer trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {domains.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-surface-50 border border-border p-6 sm:p-8 flex flex-col justify-between hover:border-border-hover transition-all duration-300 relative group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="p-2.5 rounded-xl bg-surface-200 text-foreground border border-border">
                      <Icon className="h-5 w-5 text-amber-500" />
                    </div>
                    <Badge variant={item.accent as any} size="sm">
                      {item.badge}
                    </Badge>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-surface-100 border border-border text-xs text-foreground mb-6 flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong className="text-foreground">Venture Opportunity:</strong> {item.thesisExample}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button
                    onClick={() => setModalOpen(true)}
                    variant="secondary"
                    size="sm"
                    className="w-full justify-between font-semibold"
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

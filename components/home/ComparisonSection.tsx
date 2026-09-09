"use client";

import React from "react";
import { Badge } from "@/components/brand/Badge";
import { CheckCircle2, XCircle, AlertTriangle } from "lucide-react";

export function ComparisonSection() {
  const comparison = [
    {
      dimension: "Business Model & Alignment",
      studio1008: "Shared Equity & Upside. Zero hourly consulting retainers.",
      agency: "High hourly fees & monthly retainers. Zero skin in the game.",
      accelerator: "Takes 7% equity for generic talks; zero code or product build.",
      solo: "100% personal cash burn with high opportunity cost.",
    },
    {
      dimension: "Software Engineering & Architecture",
      studio1008: "Senior in-house full-stack engineers building production Next.js/React.",
      agency: "Junior outsourced coders; low quality, brittle, unmaintainable.",
      accelerator: "None. Founder must find and recruit a technical CTO alone.",
      solo: "Managing disconnected freelancers on Upwork with high churn.",
    },
    {
      dimension: "Relationship Duration",
      studio1008: "180-Day Exit & Handover. Engineered for founder autonomy.",
      agency: "Incentivized to prolong development to bill more monthly retainers.",
      accelerator: "12-week batch ending in a Demo Day pitch.",
      solo: "Indefinite timeline leading to execution fatigue.",
    },
    {
      dimension: "Intellectual Property Ownership",
      studio1008: "100% IP & code assigned to your new corporate entity from Day 1.",
      agency: "Often held hostage until dispute-ridden final invoices are settled.",
      accelerator: "Owned by entity, but cap table is crowded early.",
      solo: "Disorganized IP contracts across multiple independent contractors.",
    },
    {
      dimension: "Target Founder Fit",
      studio1008: "10–20+ year senior corporate leaders, VPs, and industry experts.",
      agency: "Anyone with a credit card or bank transfer.",
      accelerator: "Primarily 20-something first-time founders without domain depth.",
      solo: "Solo operators risking career stability without team leverage.",
    },
  ];

  return (
    <section id="comparison" className="py-24 bg-surface-100/40 border-t border-border relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="amber" size="sm">The Direct Comparison</Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground font-sans">
            Why traditional paths fail domain leaders.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Senior executives don&apos;t fail from lack of industry insight. They fail from broken execution models and misaligned incentives.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-border bg-surface-50 shadow-lg">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="border-b border-border bg-surface-100 text-muted-foreground font-mono uppercase text-[11px]">
              <tr>
                <th className="p-4 sm:p-5">Dimension</th>
                <th className="p-4 sm:p-5 text-amber-600 dark:text-amber-400 bg-amber-500/10 border-x border-amber-500/20 font-bold">
                  1008 Venture Studio
                </th>
                <th className="p-4 sm:p-5">IT & Dev Agencies</th>
                <th className="p-4 sm:p-5">Standard Incubators</th>
                <th className="p-4 sm:p-5">Solo Freelancing</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {comparison.map((row, idx) => (
                <tr key={idx} className="hover:bg-surface-100/40 transition-colors">
                  <td className="p-4 sm:p-5 font-bold text-foreground">
                    {row.dimension}
                  </td>
                  <td className="p-4 sm:p-5 bg-amber-500/[0.04] border-x border-amber-500/20 text-foreground font-medium">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                      <span>{row.studio1008}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500/80 shrink-0 mt-0.5" />
                      <span>{row.agency}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-500/80 shrink-0 mt-0.5" />
                      <span>{row.accelerator}</span>
                    </div>
                  </td>
                  <td className="p-4 sm:p-5 text-muted-foreground">
                    <div className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500/80 shrink-0 mt-0.5" />
                      <span>{row.solo}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

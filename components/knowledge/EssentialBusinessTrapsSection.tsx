"use client";

import React from "react";
import {
  AlertTriangle,
  ShoppingBag,
  Store,
  Megaphone,
  XCircle,
  TrendingDown,
} from "lucide-react";

export function EssentialBusinessTrapsSection() {
  const traps = [
    {
      number: "01",
      title: "Chasing Discretionary Wants over Non-Negotiable Needs",
      badge: "Demand Risk Trap",
      badgeColor: "text-[#C2410C] bg-[#FFF4ED] border-[#FFD8C2]",
      iconBg: "bg-[#FFF4ED] border-[#FFD8C2] text-[#FF7043]",
      icon: <ShoppingBag className="h-5 w-5 text-[#FF7043]" />,
      summary:
        "When inflation rises or budgets tighten, Indian consumers and businesses immediately cut luxury, discretionary lifestyle purchases.",
      points: [
        {
          label: "Discretionary Churn",
          text: "If your product is a 'nice-to-have' luxury, customer retention collapses the moment you stop running discount ads.",
        },
        {
          label: "Utility-Driven Moats",
          text: "High-margin businesses solve everyday friction: factory packaging, water filtration consumables, regional spices, or specialized tooling.",
        },
      ],
      coreFlaw:
        "Build for essential daily utility: when orders are non-negotiable, repeat revenue is guaranteed.",
    },
    {
      number: "02",
      title: "The 'Online-Only' Squeeze (Ignoring General Trade)",
      badge: "Distribution Trap",
      badgeColor: "text-[#635BFF] bg-[#F0F0FF] border-[#E0E0FF]",
      iconBg: "bg-[#F0F0FF] border-[#E0E0FF] text-[#635BFF]",
      icon: <Store className="h-5 w-5 text-[#635BFF]" />,
      summary:
        "The vast majority of India's retail commerce happens through offline General Trade (Kirana stores and local distributors), not digital apps.",
      points: [
        {
          label: "The Margin Wall",
          text: "Founders relying exclusively on Shopify and quick-commerce get squeezed by platform fees (20%–35%) and rising Meta ad costs.",
        },
        {
          label: "Physical Moats",
          text: "Without a physical distributor network across Tier-2 and Tier-3 hubs, building a lasting national enterprise is extraordinarily difficult.",
        },
      ],
      coreFlaw:
        "Omnichannel architecture is critical: offline General Trade distribution combined with digital storefronts.",
    },
    {
      number: "03",
      title: "The 'Branding Agency' Cash Drain",
      badge: "Capital Leak Trap",
      badgeColor: "text-[#007A66] bg-[#E6FFFA] border-[#B2F5EA]",
      iconBg: "bg-[#E6FFFA] border-[#B2F5EA] text-[#00D4B2]",
      icon: <Megaphone className="h-5 w-5 text-[#007A66]" />,
      summary:
        "Struggling founders often spend ₹5L–₹15L hiring branding agencies to design packaging and pitch decks rather than locking distribution.",
      points: [
        {
          label: "Superficial Design",
          text: "Aesthetic branding agencies carry zero downside and have no ability to secure retailer shelf space or factory tooling.",
        },
        {
          label: "Distribution Truth",
          text: "Branding does not create distribution in India; ground distribution and product reliability create the brand.",
        },
      ],
      coreFlaw:
        "Reallocate capital from cosmetic retainers into supplier batch tooling, 3PL warehousing, and sales beat execution.",
    },
  ];

  return (
    <div className="my-8 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {traps.map((trap) => (
          <div
            key={trap.number}
            className="rounded-2xl bg-white border border-[#E6E8EB] p-6 flex flex-col justify-between space-y-4 shadow-xs hover:shadow-md hover:border-[#CBD5E1] transition-all"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded border ${trap.badgeColor}`}>
                  PITFALL {trap.number}
                </span>
                <div className={`p-1.5 rounded-lg border ${trap.iconBg}`}>
                  {trap.icon}
                </div>
              </div>

              <h4 className="text-base font-extrabold text-[#0A2540] leading-snug">
                {trap.title}
              </h4>

              <p className="text-xs text-[#627D98] leading-relaxed">
                {trap.summary}
              </p>

              <div className="space-y-2 pt-2">
                {trap.points.map((pt, pIdx) => (
                  <div key={pIdx} className="text-xs text-[#425466] bg-[#F8FAFC] p-2.5 rounded-lg border border-[#E6E8EB]">
                    <strong className="text-[#0A2540] block mb-0.5">{pt.label}:</strong>
                    <span>{pt.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2.5 border-t border-[#F1F5F9] text-[11px] font-mono text-[#C2410C] flex items-start gap-1.5 bg-[#FFF4ED]/40 p-2 rounded-lg border border-[#FFD8C2]/40">
              <AlertTriangle className="h-3.5 w-3.5 shrink-0 mt-0.5 text-[#FF7043]" />
              <span>{trap.coreFlaw}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { FAQItem } from "@/lib/types";
import { Badge } from "@/components/brand/Badge";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface PillarFAQProps {
  items: FAQItem[];
  badge?: string;
  badgeVariant?: "primary" | "indigo" | "amber" | "cyan" | "emerald" | "slate" | "outline";
  title?: string;
  description?: string;
  className?: string;
}

export function PillarFAQ({
  items,
  badge = "Clarity & Conviction",
  badgeVariant = "indigo",
  title = "Frequently Answered Questions",
  description = "Everything you need to know about our partnership structure, operational execution, and governance.",
  className,
}: PillarFAQProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className={cn("py-20 bg-white border-t border-[#E6E8EB] relative", className)}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <Badge variant={badgeVariant} size="sm">
            {badge}
          </Badge>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0A2540] font-sans tracking-tight">
            {title}
          </h2>
          <p className="text-[#425466] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="space-y-3">
          {items.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#E6E8EB] overflow-hidden transition-all shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:border-[#CBD5E1]"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-[#0A2540] font-sans leading-snug">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-[#627D98] shrink-0 transition-transform duration-200",
                      isOpen && "rotate-180 text-[#635BFF]"
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-[#425466] leading-relaxed border-t border-[#E6E8EB]/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

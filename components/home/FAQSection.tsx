"use client";

import React, { useState } from "react";
import { faqs } from "@/data/faqs";
import { Badge } from "@/components/brand/Badge";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [category, setCategory] = useState<"all" | "studio" | "network" | "equity">("all");

  const filteredFaqs = category === "all" ? faqs : faqs.filter((f) => f.category === category);

  return (
    <section className="py-24 bg-white border-t border-[#E6E8EB] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <Badge variant="indigo" size="sm">Clarity & Conviction</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0A2540] font-sans">
            Frequently Answered Questions
          </h2>
          <p className="text-[#425466] text-base">
            Everything you need to know about partnering with 1008, our equity model, and operational governance.
          </p>

          {/* Category Tabs */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {(["all", "studio", "equity", "network"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  "px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider transition-all",
                  category === cat
                    ? "bg-[#0A2540] text-white shadow-xs"
                    : "bg-[#F6F9FC] text-[#425466] hover:text-[#0A2540] border border-[#E6E8EB]"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-white border border-[#E6E8EB] overflow-hidden transition-all shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base font-semibold text-[#0A2540] font-sans">
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
                  <div className="px-5 pb-5 pt-1 text-sm text-[#425466] leading-relaxed border-t border-[#E6E8EB]/60">
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

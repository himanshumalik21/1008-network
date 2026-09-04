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
    <section className="py-24 bg-[#090A0C] border-t border-white/[0.06] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-3">
          <Badge variant="amber" size="sm">Clarity & Conviction</Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-white font-sans">
            Frequently Answered Questions
          </h2>
          <p className="text-muted text-base">
            Everything you need to know about partnering with 1008, our equity model, and operational governance.
          </p>

          {/* Category Tabs */}
          <div className="pt-4 flex flex-wrap justify-center gap-2">
            {(["all", "studio", "equity", "network"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  "px-3 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all",
                  category === cat
                    ? "bg-white/15 text-white font-semibold border border-white/20"
                    : "bg-surface-200/40 text-muted hover:text-white border border-transparent"
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
                className="rounded-xl bg-surface-100/60 border border-white/[0.08] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-base font-semibold text-white font-sans">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 text-muted shrink-0 transition-transform duration-200",
                      isOpen && "rotate-180 text-amber-400"
                    )}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-muted leading-relaxed border-t border-white/[0.04]">
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

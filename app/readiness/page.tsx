"use client";

import React from "react";
import { ReadinessQuiz } from "@/components/readiness/ReadinessQuiz";
import { Badge } from "@/components/brand/Badge";

export default function ReadinessPage() {
  return (
    <div className="pt-28 pb-20 bg-white">
      <section className="relative py-12 border-b border-[#E6E8EB] bg-[#F6F9FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2">
            <Badge variant="indigo" size="md" pulse>
              Diagnostic Tool // 8 Questions
            </Badge>
            <span className="text-xs font-semibold text-[#627D98]">2-Minute Venture Assessment</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            Evaluate Your Venture Readiness
          </h1>

          <p className="text-sm sm:text-base text-[#425466] max-w-2xl mx-auto leading-relaxed">
            Assess your domain authority, customer financial bleed, technical execution runway, and founder-venture fit to discover the optimal path forward.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <ReadinessQuiz />
      </div>
    </div>
  );
}

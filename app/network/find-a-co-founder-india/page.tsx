"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import {
  Users,
  Code2,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Handshake,
  Scale,
  Zap,
  Building2,
  Briefcase,
  HelpCircle,
  FileCheck2,
} from "lucide-react";

export default function FindCoFounderIndiaPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [roleNeeded, setRoleNeeded] = useState("Technical Co-Founder (CTO)");
  const [sector, setSector] = useState("Tech & Software");
  const [location, setLocation] = useState("Gurgaon / Delhi NCR");

  return (
    <div className="pt-28 pb-20 bg-[#FDFDFE] min-h-screen">
      {/* 1. Hero Header */}
      <section className="relative py-14 sm:py-20 overflow-hidden border-b border-[#E6E8EB] bg-[#F6F9FC]">
        <div className="absolute inset-0 bg-grid-boxes mask-radial-fade opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-5">
          <div className="inline-flex items-center gap-2 flex-wrap justify-center">
            <span className="text-xs font-mono font-bold text-[#635BFF] bg-[#635BFF]/10 px-3 py-1 rounded-full border border-[#635BFF]/20 flex items-center gap-1.5">
              <Handshake className="h-3.5 w-3.5" />
              1008 Co-Founder Matching Engine
            </span>
            <span className="text-xs font-mono font-semibold text-[#008774] bg-[#00D4B2]/10 px-2.5 py-1 rounded-full border border-[#00D4B2]/20">
              India // Gurgaon • Bengaluru • NCR
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0A2540] max-w-4xl mx-auto">
            Have the domain vision.{" "}
            <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#635BFF]">
              Find your Technical CTO or GTM Co-Founder.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-[#425466] max-w-3xl mx-auto leading-relaxed">
            India's premier co-founder matching network. We connect experienced domain leaders and industrialists with battle-tested Technical CTOs, GTM commercial heads, and founding operators ready to co-build for milestone equity.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-[#627D98]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#059669]" /> Vetted Technical CTOs & Architects
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Scale className="h-4 w-4 text-[#635BFF]" /> Standardized Reverse-Vesting Legal Rails
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-[#008774]" /> Zero Recruitment Agency Markup
            </span>
          </div>
        </div>
      </section>

      {/* 2. Co-Founder Matching Wizard & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Value Proposition & Vetting Framework */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono font-bold text-[#635BFF] uppercase tracking-wider">
                Why 1008 Co-Founder Matching Works
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] mt-1">
                Stop pitching strangers on LinkedIn. Partner with aligned operators.
              </h2>
              <p className="text-sm text-[#425466] leading-relaxed mt-2">
                Most startup co-founder pairings fail within 12 months because equity was handed out on a handshake without milestone gates, or because partners had mismatched risk tolerances.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white border border-[#E6E8EB] shadow-2xs flex items-start gap-3">
                <span className="p-2 rounded-lg bg-[#635BFF]/10 text-[#635BFF] shrink-0 mt-0.5">
                  <Code2 className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-bold text-sm text-[#0A2540]">Technical Co-Founder (CTO) Track</h4>
                  <p className="text-xs text-[#425466] leading-relaxed mt-0.5">
                    Senior staff engineers and engineering managers from top tech companies ready to own architecture, full-stack code, and hiring the engineering pod.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E6E8EB] shadow-2xs flex items-start gap-3">
                <span className="p-2 rounded-lg bg-[#00D4B2]/10 text-[#008774] shrink-0 mt-0.5">
                  <TrendingUp className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-bold text-sm text-[#0A2540]">Commercial & GTM Co-Founder Track</h4>
                  <p className="text-xs text-[#425466] leading-relaxed mt-0.5">
                    B2B enterprise sales directors and growth marketers with pre-existing buyer networks who open real commercial pipelines from day one.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#E6E8EB] shadow-2xs flex items-start gap-3">
                <span className="p-2 rounded-lg bg-[#059669]/10 text-[#059669] shrink-0 mt-0.5">
                  <Scale className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-bold text-sm text-[#0A2540]">Milestone Equity & Vesting Protection</h4>
                  <p className="text-xs text-[#425466] leading-relaxed mt-0.5">
                    Every introduction is governed by our institutional 4-year reverse vesting agreements with performance milestones to protect your cap table.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] flex items-center justify-between">
              <div>
                <span className="text-xs font-mono font-bold text-[#627D98] block">Looking for a job instead?</span>
                <span className="text-sm font-bold text-[#0A2540]">Explore verified startup jobs with equity</span>
              </div>
              <Link
                href="/network/startup-jobs-india"
                className="px-3.5 py-1.5 rounded-lg bg-[#0A2540] text-white text-xs font-bold hover:bg-[#635BFF] transition-all shrink-0"
              >
                Browse Roles →
              </Link>
            </div>
          </div>

          {/* Right Column: Founder Requirement Intake Form */}
          <div className="lg:col-span-6 bg-white rounded-2xl border border-[#E6E8EB] p-6 sm:p-8 shadow-sm">
            {formSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <CheckCircle2 className="h-14 w-14 text-[#059669] mx-auto" />
                <h3 className="text-2xl font-bold text-[#0A2540]">Requirement Received!</h3>
                <p className="text-xs sm:text-sm text-[#627D98] max-w-md mx-auto leading-relaxed">
                  Our venture team is reviewing your venture thesis and matching it against vetted CTOs and commercial leads in our network. A partner will reach out within 48 hours.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="mt-4 px-6 py-2 rounded-xl bg-[#0A2540] text-white text-xs font-bold"
                >
                  Submit Another Requirement
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="border-b border-[#E6E8EB] pb-3">
                  <span className="text-xs font-mono font-bold text-[#635BFF] uppercase tracking-wider">
                    Step 1 of 1 // Confidential
                  </span>
                  <h3 className="text-xl font-bold text-[#0A2540]">
                    Post Your Co-Founder Requirement
                  </h3>
                  <p className="text-xs text-[#627D98]">
                    Zero placement fees. Reviewed by operators who understand venture building.
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-1">
                      Your Name & Current Role / Background
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar, 15 yrs in Industrial Manufacturing"
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#E6E8EB] focus:outline-none focus:border-[#635BFF]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#0A2540] mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ramesh@company.com"
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#E6E8EB] focus:outline-none focus:border-[#635BFF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0A2540] mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#E6E8EB] focus:outline-none focus:border-[#635BFF]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#0A2540] mb-1">
                        Role Needed
                      </label>
                      <select
                        value={roleNeeded}
                        onChange={(e) => setRoleNeeded(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-[#E6E8EB] bg-white focus:outline-none focus:border-[#635BFF]"
                      >
                        <option>Technical Co-Founder (CTO)</option>
                        <option>Go-to-Market / Sales Co-Founder</option>
                        <option>Operations & Supply Chain Lead</option>
                        <option>Manufacturing & Plant Setup Head</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0A2540] mb-1">
                        Sector
                      </label>
                      <select
                        value={sector}
                        onChange={(e) => setSector(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-[#E6E8EB] bg-white focus:outline-none focus:border-[#635BFF]"
                      >
                        <option>Tech & Software</option>
                        <option>CleanTech & EV</option>
                        <option>Industrial & Manufacturing</option>
                        <option>Healthcare & HealthTech</option>
                        <option>FinTech & Credit</option>
                        <option>D2C & Consumer</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-[#0A2540] mb-1">
                        Location
                      </label>
                      <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full px-3 py-2 text-xs rounded-xl border border-[#E6E8EB] bg-white focus:outline-none focus:border-[#635BFF]"
                      >
                        <option>Gurgaon / Delhi NCR</option>
                        <option>Bengaluru</option>
                        <option>Mumbai</option>
                        <option>Pune</option>
                        <option>Chennai</option>
                        <option>Remote / Pan-India</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#0A2540] mb-1">
                      Venture Concept & Problem Being Solved (1-2 Sentences)
                    </label>
                    <textarea
                      rows={3}
                      required
                      placeholder="e.g. Digitizing industrial CNC spare parts procurement for Tier-2 suppliers with pre-existing buyer letters of intent."
                      className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#E6E8EB] focus:outline-none focus:border-[#635BFF]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#0A2540] mb-1">
                        Equity Allocation Range
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 15% - 25% with milestone vesting"
                        className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#E6E8EB] focus:outline-none focus:border-[#635BFF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#0A2540] mb-1">
                        Current Venture Stage
                      </label>
                      <select className="w-full px-3 py-2 text-xs rounded-xl border border-[#E6E8EB] bg-white focus:outline-none focus:border-[#635BFF]">
                        <option>Concept & Domain Validation</option>
                        <option>Feasibility & Early Prototype</option>
                        <option>Early Revenue (₹25L - ₹1Cr)</option>
                        <option>Scaling (₹1Cr+)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#635BFF] hover:bg-[#5349e0] text-white text-xs font-bold transition-all shadow-xs"
                >
                  Submit Requirement & Request Matches
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 3. FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-[#E6E8EB]">
        <div className="text-center mb-8 space-y-2">
          <span className="text-xs font-mono font-bold text-[#635BFF] uppercase tracking-wider">
            Governance & Alignment
          </span>
          <h3 className="text-2xl font-bold text-[#0A2540]">
            Frequently Asked Questions by Founders
          </h3>
        </div>

        <div className="space-y-4">
          <div className="p-5 rounded-2xl bg-white border border-[#E6E8EB]">
            <h5 className="font-bold text-sm text-[#0A2540] mb-1">
              How does 1008 Network evaluate co-founder candidates?
            </h5>
            <p className="text-xs text-[#425466] leading-relaxed">
              We vet candidates on architectural depth, past shipping velocity, problem-solving under ambiguity, and risk-appetite. We only introduce operators who explicitly want equity-driven upside and understand early-stage reality.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E6E8EB]">
            <h5 className="font-bold text-sm text-[#0A2540] mb-1">
              What legal documentation protects my venture?
            </h5>
            <p className="text-xs text-[#425466] leading-relaxed">
              We provide standardized Mutual Non-Disclosure Agreements (NDA), IP Assignment Deeds, and a 4-year reverse-vesting Co-Founder Agreement with a 1-year cliff to guarantee your proprietary assets remain safe.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[#E6E8EB]">
            <h5 className="font-bold text-sm text-[#0A2540] mb-1">
              Are there upfront fees to post a requirement?
            </h5>
            <p className="text-xs text-[#425466] leading-relaxed">
              No. Posting a requirement is free for domain founders. Our primary alignment is building scalable, sustainable enterprises.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

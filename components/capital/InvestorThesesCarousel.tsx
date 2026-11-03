"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import {
  Cpu,
  Layers,
  TrendingUp,
  Factory,
  Coins,
  Sparkles,
  ShoppingBag,
  Scale,
  Layout,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  ArrowRight,
  UserCheck,
  CheckCircle2,
  MapPin,
  Clock,
  Truck,
  Building2,
  ShieldCheck,
} from "lucide-react";

export function InvestorThesesCarousel() {
  const investors = [
    {
      handle: "Rajeev K. • Ex-Tier 1 Auto MD",
      experience: "24 yrs exp • Pune & Manesar",
      sector: "Industrial & Precision Mfg",
      badgeColor: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
      icon: Factory,
      iconColor: "text-[#635BFF]",
      ticket: "₹25L – ₹75L Check Size",
      sourceBadge: "ACMA Verified Angel",
      moat: "Direct buyer introductions with Tier 1 auto OEMs (Maruti, Tata Motors, M&M) and precision machine tool vendors.",
      pitch:
        "“Looking for capital-efficient manufacturing and hardware startups with physical plant models. Can open doors with Tier 1 automotive and heavy engineering OEMs across Pune and export buyers.”",
      terms: "Angel Equity / Convertible Note",
    },
    {
      handle: "Nidhi S. • Ex-Fintech VP & Active Angel",
      experience: "12 yrs exp • Bengaluru",
      sector: "B2B SaaS & Invoicing",
      badgeColor: "bg-[#E6FFFA] text-[#00A389] border-[#B2F5EA]",
      icon: Coins,
      iconColor: "text-[#00A389]",
      ticket: "₹15L – ₹40L Check Size",
      sourceBadge: "LinkedIn Verified",
      moat: "Bank API sandbox access, Account Aggregator architecture, and NBFC co-lending partnerships.",
      pitch:
        "“Interested in vertical SaaS and workflow reconciliation software solving real accounting or invoice friction for MSMEs. Looking for high gross margin software with near-zero churn.”",
      terms: "Lead Angel / Advisory Board",
    },
    {
      handle: "Mehta Multi-Family Office",
      experience: "2nd-Gen Allocators • Ahmedabad",
      sector: "Industrial Capex & Export",
      badgeColor: "bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]",
      icon: Scale,
      iconColor: "text-[#D97706]",
      ticket: "₹50L – ₹2.5 Cr Check Size",
      sourceBadge: "MCA RoC Verified",
      moat: "Port logistics access at Mundra, warehouse land leases, and working capital debt syndication.",
      pitch:
        "“We back profitable physical businesses transitioning from unorganized to modern branded operations. Focus on sustainable agro-processing, industrial packaging, and export manufacturing.”",
      terms: "Growth Equity / Structured Debt",
    },
    {
      handle: "Arjun V. • Ex-Supply Chain VP",
      experience: "15 yrs ops • Delhi NCR",
      sector: "Supply Chain & Logistics",
      badgeColor: "bg-[#FFF3EE] text-[#FF7043] border-[#FFE2D6]",
      icon: Truck,
      iconColor: "text-[#FF7043]",
      ticket: "₹20L – ₹50L Check Size",
      sourceBadge: "Verified Operator",
      moat: "Inter-state truck fleet tie-ups, micro-hub dark stores, and cold-chain route density optimization.",
      pitch:
        "“Looking for logistics infrastructure, EV commercial fleets, and cold-chain temperature monitoring startups. I help optimize operational cost per delivery run and unit economics.”",
      terms: "Operator Angel / Board Advisor",
    },
    {
      handle: "Dr. Sandeep B. • MedTech Syndicate",
      experience: "19 yrs clinical • Hyderabad",
      sector: "Healthcare Devices & AI",
      badgeColor: "bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]",
      icon: Cpu,
      iconColor: "text-[#2563EB]",
      ticket: "₹30L – ₹1.0 Cr Check Size",
      sourceBadge: "IMA Verified Lead",
      moat: "Hospital procurement committees, CDSCO clearance navigation, and live clinical pilot beds across 9 hospital networks.",
      pitch:
        "“We back clinical simulation, low-cost diagnostic hardware, and assistive healthcare technology. We provide pilot testing beds across 9 partner hospital networks in South India.”",
      terms: "Syndicate Equity / Milestone Tranches",
    },
    {
      handle: "Pooja T. • Ex-FMCG Category Director",
      experience: "13 yrs brand exp • Mumbai",
      sector: "Consumer Brands & Q-Comm",
      badgeColor: "bg-[#FFF1F2] text-[#E11D48] border-[#FECDD3]",
      icon: ShoppingBag,
      iconColor: "text-[#E11D48]",
      ticket: "₹15L – ₹35L Check Size",
      sourceBadge: "Verified FMCG Lead",
      moat: "Direct listing acceleration on Blinkit/Zepto/Instamart and modern trade distributor tie-ups.",
      pitch:
        "“Seeking high-margin functional food, clean beverage, and personal care brands with genuine repeat purchase rates. I assist with distributor terms, channel margins, and retail listing.”",
      terms: "Angel Equity + Growth Mentorship",
    },
    {
      handle: "Kunal R. • 2x Exited SaaS Founder",
      experience: "14 yrs engineering • Bengaluru",
      sector: "Developer Tools & SaaS",
      badgeColor: "bg-[#F0FDF4] text-[#16A34A] border-[#BBF7D0]",
      icon: Sparkles,
      iconColor: "text-[#16A34A]",
      ticket: "₹25L – ₹60L Check Size",
      sourceBadge: "Exited Founder",
      moat: "US/Europe GTM playbooks, AWS credits, and technical architecture advisory for global scale.",
      pitch:
        "“Scaling from zero to first $1M ARR in US/Europe enterprise markets. Looking for engineering-led teams building devtools, API infrastructure, or deep workflow SaaS.”",
      terms: "Direct Angel Equity / SAFE Note",
    },
    {
      handle: "Singhania Syndicate • Export Allocators",
      experience: "28 yrs export ops • Surat & Mumbai",
      sector: "Specialty Chem & Exports",
      badgeColor: "bg-[#FAF5FF] text-[#9333EA] border-[#E9D5FF]",
      icon: Building2,
      iconColor: "text-[#9333EA]",
      ticket: "₹50L – ₹1.5 Cr Check Size",
      sourceBadge: "Export Council Verified",
      moat: "Export buyer contracts in Germany, US & Japan; environmental clearance and industrial plant advisory.",
      pitch:
        "“We syndicate capital for precision chemicals, industrial catalysts, and export-oriented fabrication units. We provide captive buyer off-take agreements in European and Japanese markets.”",
      terms: "Syndicate Equity / Pre-IPO Tranche",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, investors.length - itemsPerPage);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, maxIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section className="relative w-full py-10 sm:py-14 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Ambient Radiant Glow (Iris & Mint) */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-96 bg-gradient-to-r from-[#635BFF]/08 via-[#00D4B2]/06 to-transparent blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enclosing Card Container Box */}
        <div className="rounded-[28px] sm:rounded-[36px] bg-gradient-to-b from-[#F7F8FF]/80 via-white to-white border border-[#E0E0FF] p-6 sm:p-8 lg:p-10 shadow-[0_4px_24px_rgba(99,91,255,0.06)] relative overflow-hidden">
          {/* Subtle ambient radiant glow inside the box */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[#635BFF]/08 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#00D4B2]/05 blur-3xl pointer-events-none" />

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row items-center sm:items-end justify-between mb-8 gap-4 relative z-10">
            <div className="text-center sm:text-left space-y-2 max-w-2xl">
              <Badge variant="indigo" size="sm">
                Curated Allocator Profiles
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
                Curated Angels & Investment Theses
              </h2>
              <p className="text-xs sm:text-sm text-[#425466]">
                Active angel syndicates, operating CXOs, family offices, and micro-funds seeking vetted business opportunities with clear unit economics and commercial discipline.
              </p>
            </div>

            {/* Carousel Navigation Controls */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => setIsPaused((prev) => !prev)}
                className="w-9 h-9 rounded-full bg-white border border-[#CBD5E1] text-[#627D98] hover:text-[#0A2540] hover:border-[#94A3B8] flex items-center justify-center transition-all shadow-2xs focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-hidden cursor-pointer"
                title={isPaused ? "Play Auto-Slide" : "Pause Auto-Slide"}
                aria-label={isPaused ? "Play Auto-Slide" : "Pause Auto-Slide"}
              >
                {isPaused ? <Play className="h-3.5 w-3.5 ml-0.5" /> : <Pause className="h-3.5 w-3.5" />}
              </button>
              <button
                onClick={handlePrev}
                className="w-9 h-9 rounded-full bg-white border border-[#CBD5E1] text-[#0A2540] hover:bg-[#F6F9FC] hover:border-[#635BFF] flex items-center justify-center transition-all shadow-2xs focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-hidden cursor-pointer"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-9 h-9 rounded-full bg-white border border-[#CBD5E1] text-[#0A2540] hover:bg-[#F6F9FC] hover:border-[#635BFF] flex items-center justify-center transition-all shadow-2xs focus-visible:ring-2 focus-visible:ring-[#635BFF] focus-visible:outline-hidden cursor-pointer"
                aria-label="Next Slide"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Carousel Viewport */}
          <div
            className="overflow-hidden relative z-10"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-out -mx-2.5"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
              }}
            >
              {investors.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      width: `${100 / itemsPerPage}%`,
                    }}
                    className="px-2.5 shrink-0"
                  >
                    <div className="p-5 sm:p-5.5 rounded-2xl bg-white border border-[#CBD5E1]/80 space-y-3.5 shadow-xs hover:shadow-md hover:border-[#635BFF] transition-all h-full flex flex-col justify-between">
                      {/* Top Area: Tag, Icon & Candidate Info */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between gap-1 h-6">
                          <span
                            className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${item.badgeColor} truncate`}
                          >
                            {item.sector}
                          </span>
                          <span className="text-[10px] font-mono font-bold text-[#635BFF] bg-[#F0F0FF] border border-[#E0E0FF] px-2 py-0.5 rounded-full shrink-0">
                            {item.ticket}
                          </span>
                        </div>

                        <div className="flex items-start gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-[#F8FAFC] border border-[#E6E8EB] flex items-center justify-center shrink-0 mt-1">
                            <IconComponent className={`h-4 w-4 ${item.iconColor}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="h-10 sm:h-11 flex items-center">
                              <h3 className="text-sm sm:text-base font-bold text-[#0A2540] leading-snug line-clamp-2">
                                {item.handle}
                              </h3>
                            </div>
                            <div className="flex flex-col gap-1 mt-1 font-mono text-xs">
                              <div className="flex items-center gap-1.5 text-[#627D98] h-4">
                                <MapPin className="h-3 w-3 text-[#94A3B8] shrink-0" />
                                <span className="truncate">{item.experience}</span>
                              </div>
                              <div className="flex items-center gap-1 text-[11px] font-semibold text-[#00A389] h-4">
                                <ShieldCheck className="h-3.5 w-3.5 text-[#00A389] shrink-0" />
                                <span className="truncate">{item.sourceBadge}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Middle Area: Value-Add Moat (Locked uniform height) */}
                      <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1.5 text-xs h-[88px] sm:h-[92px] flex flex-col justify-center">
                        <div className="text-[10.5px] font-mono font-bold text-[#0A2540] uppercase tracking-wider flex items-center gap-1 shrink-0">
                          <CheckCircle2 className="h-3 w-3 text-[#10B981] shrink-0" />
                          <span>Strategic Value-Add:</span>
                        </div>
                        <p className="text-xs text-[#475569] leading-relaxed line-clamp-2">
                          {item.moat}
                        </p>
                      </div>

                      {/* Thesis Quote (Locked uniform min-height) */}
                      <div className="space-y-1 text-xs text-[#425466] flex-1 flex flex-col justify-start">
                        <div className="text-[11px] font-mono font-bold text-[#635BFF] uppercase tracking-wider">
                          Investment Thesis:
                        </div>
                        <p className="text-xs text-[#475569] italic leading-relaxed line-clamp-3 min-h-[56px] sm:min-h-[60px]">
                          {item.pitch}
                        </p>
                      </div>

                      {/* Bottom Action Button (Locked to bottom) */}
                      <div className="pt-3 border-t border-[#F1F4F8] mt-auto">
                        <Link
                          href="/capital/post"
                          className="w-full py-2 px-3 rounded-xl bg-[#635BFF]/10 hover:bg-[#635BFF] text-[#5851EA] hover:text-white font-semibold text-xs transition-all flex items-center justify-center gap-1.5 text-center group"
                        >
                          <span>Pitch This Allocator</span>
                          <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 mt-6 relative z-10">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx
                    ? "w-6 bg-[#635BFF]"
                    : "w-1.5 bg-[#CBD5E1] hover:bg-[#94A3B8]"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

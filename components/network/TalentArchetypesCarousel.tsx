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
} from "lucide-react";

export function TalentArchetypesCarousel() {
  const candidates = [
    {
      handle: "Rohit K. • Ex-Swiggy / Razorpay",
      experience: "9 yrs exp • Bengaluru • LinkedIn Verified",
      roleSeeking: "Founding Tech Lead / CTO",
      tag: "Technology & Backend",
      badgeColor: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
      icon: Cpu,
      iconColor: "text-[#635BFF]",
      trackRecord: "Ex-Staff Engineer. Scaled Go/Postgres microservices handling 450k req/min and Kafka pipelines.",
      pitch:
        "“Left big tech to build 0-to-1. I can architect the core stack, set up DevOps, and ship web & mobile apps fast. Looking to partner with a domain expert founder with customer validation. Open to sweat equity + modest stipend.”",
      terms: "Equity + Low Burn Stipend",
    },
    {
      handle: "Ananya M. • Ex-Freshworks / Zoho",
      experience: "11 yrs exp • Chennai / Remote • LinkedIn Verified",
      roleSeeking: "B2B Commercial Co-Founder",
      tag: "Enterprise Sales & GTM",
      badgeColor: "bg-[#FFF3EE] text-[#FF7043] border-[#FFE2D6]",
      icon: TrendingUp,
      iconColor: "text-[#FF7043]",
      trackRecord: "Closed $1.8M ARR in ACV contracts ($30k-$90k) across India, UAE, and Southeast Asia enterprises.",
      pitch:
        "“Proven enterprise sales playbook and active relationships across mid-market manufacturing, IT, and retail. Looking for a technical founder whose product is working but needs an aggressive partner to hunt and close revenue.”",
      terms: "Significant Co-Founder Equity",
    },
    {
      handle: "Vikram S. • Ex-Blinkit / Delhivery",
      experience: "8 yrs exp • Delhi NCR • 1008 Verified Lead",
      roleSeeking: "Operating Co-Founder & COO",
      tag: "Operations & Dark Stores",
      badgeColor: "bg-[#E6FFFA] text-[#00A389] border-[#B2F5EA]",
      icon: Layers,
      iconColor: "text-[#00A389]",
      trackRecord: "Managed 22 dark stores and 350+ fleet at 98.6% SLA. Expertise in warehouse layout & cold chain.",
      pitch:
        "“Hands-on warehouse and last-mile execution specialist. I know lease negotiations, rider retention, micro-hub ergonomics, and cold logistics. Looking to partner with a consumer or D2C founder building physical delivery channels.”",
      terms: "Operating Partner Equity",
    },
    {
      handle: "CA Aman G. • Ex-PwC / Grant Thornton",
      experience: "8 yrs exp • Mumbai • ICAI #541982",
      roleSeeking: "Fractional CFO / Finance Partner",
      tag: "Finance & Debt Facilities",
      badgeColor: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
      icon: Coins,
      iconColor: "text-[#059669]",
      trackRecord: "Structured ₹45 Cr in working capital bank facilities, vendor bill discounting, and GST audits.",
      pitch:
        "“Chartered Accountant specializing in working capital debt, financial modeling, and GST/ROC compliance. Available for early manufacturing, lending, or industrial startups navigating debt syndication and cash flow architecture.”",
      terms: "Fractional CXO / Advisory Equity",
    },
    {
      handle: "Karthik R. • 3x National Hackathon Winner",
      experience: "5 yrs exp • Bengaluru • GitHub Verified",
      roleSeeking: "Full-Stack & Mobile Co-Founder",
      tag: "Full-Stack & Mobile",
      badgeColor: "bg-[#F5F3FF] text-[#7C3AED] border-[#DDD6FE]",
      icon: Sparkles,
      iconColor: "text-[#7C3AED]",
      trackRecord: "Solo-shipped 3 React Native apps with 60k+ MAU. Deep in Next.js 15, TypeScript & Supabase.",
      pitch:
        "“I ship weekly and iterate fast based on user feedback. Tired of corporate services work. Want to team up full-time with a non-technical founder who has real industry distribution and relentless hustle.”",
      terms: "Equal 50/50 Equity",
    },
    {
      handle: "Sneha P. • Ex-Sugar Cosmetics / D2C",
      experience: "7 yrs exp • Gurugram • Meta Certified",
      roleSeeking: "D2C Growth & E-Commerce Partner",
      tag: "D2C & Performance",
      badgeColor: "bg-[#FFF1F2] text-[#E11D48] border-[#FECDD3]",
      icon: ShoppingBag,
      iconColor: "text-[#E11D48]",
      trackRecord: "Scaled monthly ad spend from ₹5L to ₹45L at 3.4x blended ROAS; Shopify CRO & retention.",
      pitch:
        "“Deep expertise in Meta performance marketing, influencer seeding, and Blinkit/Zepto onboarding. Looking for a consumer founder with clean formulations or unique physical products who needs an equity partner to own digital revenue.”",
      terms: "Equity + Rev Share",
    },
    {
      handle: "Harpreet S. • Ex-Bharat Forge / Endurance",
      experience: "14 yrs exp • Pune / Chakan • COEP Mechanical",
      roleSeeking: "Plant Setup & Manufacturing Head",
      tag: "Industrial & Manufacturing",
      badgeColor: "bg-[#F8FAFC] text-[#0A2540] border-[#CBD5E1]",
      icon: Factory,
      iconColor: "text-[#0A2540]",
      trackRecord: "Six Sigma Black Belt. Set up 2 greenfield auto-component plants from civil layout to CNC lines.",
      pitch:
        "“Mechanical engineer with deep machinery vendor relationships across Pune, Rajkot, and Coimbatore. Looking for hardware or EV entrepreneurs who have an innovative design and need an experienced partner to build the factory floor.”",
      terms: "Co-Director / Equity",
    },
    {
      handle: "Devika N. • Ex-CRED / Swiggy Design",
      experience: "6 yrs exp • Bengaluru • Verified Design Lead",
      roleSeeking: "Founding Product & UX Co-Founder",
      tag: "Product & UI/UX Design",
      badgeColor: "bg-[#FFFBEB] text-[#D97706] border-[#FDE68A]",
      icon: Layout,
      iconColor: "text-[#D97706]",
      trackRecord: "Designed consumer mobile apps used by 3M+ users. Crafted end-to-end design systems & micro-interactions.",
      pitch:
        "“Looking to team up with an engineer-heavy team to turn complex technical workflows into dead-simple, high-converting product experiences. Ready to commit full-time for a meaningful founding stake.”",
      terms: "Co-Founder Equity",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const updateVisible = () => {
      if (typeof window === "undefined") return;
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, candidates.length - visibleCount);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 4200);

    return () => clearInterval(timer);
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
              Curated Executive Talent
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
              Verified Co-Founders & Operating Leads
            </h2>
            <p className="text-xs sm:text-sm text-[#425466]">
              Senior builders, engineers, and commercial leaders actively vetted in the 1008 private talent pool, ready to partner with high-conviction business ventures.
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
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          className="flex transition-transform duration-500 ease-out -mx-2.5"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCount)}%)`,
          }}
        >
          {candidates.map((cand) => {
            const Icon = cand.icon;
            return (
              <div
                key={cand.handle}
                style={{
                  width: `${100 / visibleCount}%`,
                }}
                className="px-2.5 shrink-0"
              >
                <div className="p-5 sm:p-5.5 rounded-2xl bg-white border border-[#CBD5E1]/80 space-y-3.5 shadow-xs hover:shadow-md hover:border-[#635BFF] transition-all h-full flex flex-col justify-between">
                  {/* Top Area: Tag, Icon & Candidate Info */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-1 h-8">
                      <span
                        className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${cand.badgeColor} truncate`}
                      >
                        {cand.tag}
                      </span>
                      <div className="w-8 h-8 rounded-xl bg-[#F6F9FC] flex items-center justify-center text-[#0A2540] border border-[#E2E8F0] shadow-2xs shrink-0">
                        <Icon className={`h-4 w-4 ${cand.iconColor}`} />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm sm:text-base font-bold text-[#0A2540] leading-snug line-clamp-2 h-10 sm:h-11 flex items-center">
                        {cand.handle}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-[#627D98] pt-1 font-mono h-5">
                        <MapPin className="h-3 w-3 shrink-0 text-[#635BFF]" />
                        <span className="truncate">{cand.experience}</span>
                      </div>
                    </div>

                    {/* Seeking Role & Track Record Container (Locked uniform height) */}
                    <div className="p-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-1 h-[88px] sm:h-[92px] flex flex-col justify-between">
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-[#635BFF] font-semibold flex items-center gap-1">
                          <UserCheck className="h-3 w-3 shrink-0" />
                          <span>Seeking</span>
                        </div>
                        <div className="text-xs font-bold text-[#0A2540] leading-tight line-clamp-1">
                          {cand.roleSeeking}
                        </div>
                      </div>
                      <div className="text-[10.5px] text-[#475569] leading-tight truncate">
                        <span className="font-semibold text-[#0A2540]">Track Record:</span> {cand.trackRecord}
                      </div>
                      <div className="text-[10px] text-[#475569] truncate">
                        Terms: <span className="font-semibold text-[#635BFF]">{cand.terms}</span>
                      </div>
                    </div>

                    {/* Authentic Candidate Pitch (Locked uniform min-height) */}
                    <div className="relative pl-2.5 border-l-2 border-[#CBD5E1] min-h-[68px] sm:min-h-[74px] flex items-start">
                      <p className="text-[11.5px] text-[#334155] leading-relaxed italic line-clamp-3">
                        {cand.pitch}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action Footer (Locked to bottom) */}
                  <div className="pt-2.5 border-t border-[#F1F5F9] mt-auto flex items-center justify-between">
                    <span className="text-[10.5px] font-medium text-[#15803D] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse shrink-0" />
                      Available to Partner
                    </span>
                    <Link
                      href="/network/post"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#635BFF] hover:text-[#4F46E5] transition-colors group"
                    >
                      <span>Request Intro</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Indicator Dots */}
      <div className="flex items-center justify-center gap-1.5 pt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#635BFF] ${
              currentIndex === idx
                ? "w-7 bg-[#635BFF]"
                : "w-2 bg-[#CBD5E1] hover:bg-[#94A3B8]"
            }`}
            aria-label={`Go to candidate slide ${idx + 1}`}
          />
        ))}
      </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import {
  Users,
  Coins,
  Layers,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Building2,
  UserCheck,
  Pause,
  Play,
  ArrowUpRight,
} from "lucide-react";

export interface CarouselSlide {
  id: string;
  num: string;
  pillar: string;
  shortLabel: string;
  title: string;
  tagline: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  accentBg: string;
  badgeBorder: string;
  cardGlow: string;
  businessPerspective: {
    label: string;
    description: string;
    badge: string;
  };
  operatorPerspective: {
    label: string;
    description: string;
    badge: string;
  };
  highlights: string[];
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
}

const SLIDES: CarouselSlide[] = [
  {
    id: "talent",
    num: "01",
    pillar: "CO-FOUNDERS & TALENT",
    shortLabel: "Co-Founders & Talent",
    title: "Find Co-Founders or Join an Ambitious Venture",
    tagline: "Have the business vision? Find talent, or find a business to work with.",
    icon: Users,
    color: "#00A389",
    accentBg: "bg-[#E6FFFA] text-[#007A66] border-[#B2F5EA]",
    badgeBorder: "border-[#00A389]/30",
    cardGlow: "from-[#00A389]/10 via-[#00A389]/05 to-transparent",
    businessPerspective: {
      label: "For Businesses & Founders",
      description:
        "Have the industry vision but missing execution partners? Find vetted Technical CTOs, GTM commercial heads, and operations leaders ready to co-build for milestone equity.",
      badge: "Find Talent",
    },
    operatorPerspective: {
      label: "For Operators & CXOs",
      description:
        "Looking for your next high-conviction company? Connect with verified founders building real-economy and software enterprises with pre-existing market traction.",
      badge: "Join a Business",
    },
    highlights: [
      "Vetted Technical CTOs & Engineering Leads",
      "Standardized 4-Year Milestone Vesting Rails",
      "Direct Introductions • 0% Placement Fees",
    ],
    primaryAction: {
      label: "Find a Co-Founder / Talent",
      href: "/network",
    },
    secondaryAction: {
      label: "Post a Requirement",
      href: "/network/post",
    },
  },
  {
    id: "capital",
    num: "02",
    pillar: "FUNDING & INVESTORS",
    shortLabel: "Funding & Investors",
    title: "Direct Investor Discovery for Evaluated Businesses",
    tagline: "Businesses find investors; investors discover evaluated businesses.",
    icon: Coins,
    color: "#059669",
    accentBg: "bg-[#ECFDF5] text-[#059669] border-[#A7F3D0]",
    badgeBorder: "border-[#059669]/30",
    cardGlow: "from-[#059669]/10 via-[#059669]/05 to-transparent",
    businessPerspective: {
      label: "For Businesses Seeking Capital",
      description:
        "Present your business model, customer traction, and capital milestones to an active network of angel investors, CXOs, and family offices.",
      badge: "Get Funded",
    },
    operatorPerspective: {
      label: "For Angels & Family Offices",
      description:
        "Access an exclusive pipeline of evaluated Indian businesses with vetted unit economics, validated customer pipelines, and zero intermediary markups.",
      badge: "Discover Deals",
    },
    highlights: [
      "Curated Angel & Family Office Allocator Discovery",
      "16-Point Unit Economics & Feasibility Intake",
      "Direct Deal Session Discovery • 0% Broker Cut",
    ],
    primaryAction: {
      label: "Explore Funding & Capital",
      href: "/capital",
    },
    secondaryAction: {
      label: "Submit Venture for Review",
      href: "/capital/post",
    },
  },
  {
    id: "studio",
    num: "03",
    pillar: "OUTSOURCE OPERATIONS",
    shortLabel: "Outsource Operations",
    title: "Navigate Operational Challenges with 1008 as Execution Arm",
    tagline: "1008 acts as your hands-on outsourced operations & tech partner.",
    icon: Layers,
    color: "#635BFF",
    accentBg: "bg-[#F0F0FF] text-[#635BFF] border-[#E0E0FF]",
    badgeBorder: "border-[#635BFF]/30",
    cardGlow: "from-[#635BFF]/10 via-[#635BFF]/05 to-transparent",
    businessPerspective: {
      label: "Turnkey Tech & Operations Arm",
      description:
        "Don't let operational bottlenecks slow your growth. 1008 engineers production web & mobile software, configures cloud ERPs (ERPNext), and sets up GST/banking rails.",
      badge: "Outsource Tech & Ops",
    },
    operatorPerspective: {
      label: "Industrial & Supply Chain Handover",
      description:
        "We audit OEM factories, negotiate vendor tooling agreements, standardize operating SOPs, and hand over a running operation on milestone completion.",
      badge: "Milestone Handover",
    },
    highlights: [
      "Turnkey Production Software & Cloud Infrastructure",
      "Self-Hosted Cloud ERP & Automated Banking Rails",
      "Shared Milestone Equity (Zero Agency Retainers)",
    ],
    primaryAction: {
      label: "Work With 1008 Execution Arm",
      href: "/studio",
    },
    secondaryAction: {
      label: "View Operational Blueprint",
      href: "/studio#timeline",
    },
  },
  {
    id: "gigs",
    num: "04",
    pillar: "PROJECT GIGS & SPRINTS",
    shortLabel: "Project Gigs & Sprints",
    title: "Post Acute Project Requests or Find Specialized Sprints",
    tagline: "Post project gig requests, or get hired for specialized execution gigs.",
    icon: Briefcase,
    color: "#FF7043",
    accentBg: "bg-[#FFF3EE] text-[#D94814] border-[#FFD8C9]",
    badgeBorder: "border-[#FF7043]/30",
    cardGlow: "from-[#FF7043]/10 via-[#FF7043]/05 to-transparent",
    businessPerspective: {
      label: "For Businesses With Bottlenecks",
      description:
        "Unblock acute operational needs without long hiring cycles. Post fixed-scope gig requests across custom ERP setups, outbound B2B sales pipelines, or factory audits.",
      badge: "Post a Gig Request",
    },
    operatorPerspective: {
      label: "For Verified Domain Specialists",
      description:
        "Take on high-impact milestone project contracts. Deliver turnkey 2–4 week sprints with pre-agreed budgets and direct milestone payouts upon delivery.",
      badge: "Deliver Sprints",
    },
    highlights: [
      "Acute 2 to 4-Week High-Impact Execution Sprints",
      "Fixed Milestone Budgets & Pre-Scoped Deliverables",
      "24–48h Specialist Matchmaking Pan-India",
    ],
    primaryAction: {
      label: "Explore Project Gigs & Sprints",
      href: "/gigs",
    },
    secondaryAction: {
      label: "Post a Project Request",
      href: "/gigs/post",
    },
  },
];

const AUTOPLAY_INTERVAL = 6000; // 6 seconds per slide

export function CommunityCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    setProgress(0);
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
    setProgress(0);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  // Progress timer for active slide
  useEffect(() => {
    if (isPaused) return;

    const tickMs = 60;
    const step = (tickMs / AUTOPLAY_INTERVAL) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNext();
          return 0;
        }
        return prev + step;
      });
    }, tickMs);

    return () => clearInterval(timer);
  }, [isPaused, goToNext]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const current = SLIDES[currentIndex];
  const CurrentIcon = current.icon;

  return (
    <div
      className="w-full max-w-5xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="1008 Community Offerings Carousel"
    >
      {/* 1. Header Navigation Pills with Animated Progress Line */}
      <div className="bg-[#F8FAFC] p-1.5 sm:p-2 rounded-2xl border border-[#E2E8F0] shadow-2xs mb-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1.5 sm:gap-2">
          {SLIDES.map((slide, idx) => {
            const Icon = slide.icon;
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                className={`relative px-3 py-2.5 rounded-xl text-left transition-all duration-200 overflow-hidden cursor-pointer flex flex-col gap-1 ${
                  isActive
                    ? "bg-white text-[#0A2540] shadow-sm border border-[#CBD5E1]"
                    : "text-[#64748B] hover:text-[#0A2540] hover:bg-white/60 border border-transparent"
                }`}
                aria-selected={isActive}
                role="tab"
              >
                {/* Active progress bar */}
                {isActive && (
                  <div
                    className="absolute bottom-0 left-0 h-[2.5px] transition-all duration-75 ease-linear"
                    style={{
                      width: `${progress}%`,
                      backgroundColor: slide.color,
                    }}
                  />
                )}

                <div className="flex items-center gap-2">
                  <div
                    className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 text-xs font-mono font-bold ${
                      isActive ? slide.accentBg : "bg-[#E2E8F0] text-[#64748B]"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" style={{ color: isActive ? slide.color : undefined }} />
                  </div>
                  <span className="text-[11px] font-mono font-bold tracking-wider opacity-60">
                    {slide.num}
                  </span>
                </div>

                <span className="text-xs sm:text-[13px] font-bold truncate">
                  {slide.shortLabel}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Main Interactive Carousel Stage Card */}
      <div className="relative rounded-3xl bg-white border border-[#E2E8F0] p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden transition-all duration-300">
        {/* Subtle Ambient Radial Glow Matching Pillar Color */}
        <div
          className={`absolute -top-24 -right-24 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-40 bg-gradient-to-br ${current.cardGlow}`}
        />
        <div
          className="absolute top-0 left-0 right-0 h-[3px] transition-colors duration-500"
          style={{ backgroundColor: current.color }}
        />

        {/* Top Header of Card: Pillar Badge + Step Counter + Navigation Controls */}
        <div className="flex items-center justify-between flex-wrap gap-3 pb-6 border-b border-[#F1F5F9] relative z-10">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-1 rounded-full border ${current.accentBg}`}
            >
              <CurrentIcon className="h-3.5 w-3.5" style={{ color: current.color }} />
              <span>{current.pillar}</span>
            </span>
            <span className="text-xs text-[#64748B] font-mono hidden sm:inline">
              Step {current.num} of 04
            </span>
          </div>

          {/* Controls: Prev / Next / Pause */}
          <div className="flex items-center gap-1.5 ml-auto">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="p-2 rounded-xl text-[#64748B] hover:text-[#0A2540] hover:bg-[#F1F5F9] border border-transparent hover:border-[#E2E8F0] transition-colors cursor-pointer"
              title={isPaused ? "Play Auto-cycle" : "Pause Auto-cycle"}
              aria-label={isPaused ? "Play" : "Pause"}
            >
              {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
            </button>
            <button
              onClick={goToPrev}
              className="p-2 rounded-xl text-[#64748B] hover:text-[#0A2540] hover:bg-[#F1F5F9] border border-[#E2E8F0] shadow-2xs hover:border-[#CBD5E1] transition-all cursor-pointer"
              title="Previous Pillar"
              aria-label="Previous Pillar"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={goToNext}
              className="p-2 rounded-xl text-[#64748B] hover:text-[#0A2540] hover:bg-[#F1F5F9] border border-[#E2E8F0] shadow-2xs hover:border-[#CBD5E1] transition-all cursor-pointer"
              title="Next Pillar"
              aria-label="Next Pillar"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Card Body: Title + Dual Perspective Breakdown + Deliverables Matrix */}
        <div className="pt-6 space-y-6 relative z-10 text-left">
          {/* Headline & Tagline */}
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight font-sans">
              {current.title}
            </h3>
            <p className="text-sm sm:text-base font-medium text-[#475569]">
              {current.tagline}
            </p>
          </div>

          {/* Visual Dual Breakdown (How it works for Businesses vs Operators) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            {/* Box 1: Business Perspective */}
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2.5 hover:border-[#CBD5E1] transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540] flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5" style={{ color: current.color }} />
                  <span>{current.businessPerspective.label}</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white border border-[#E2E8F0] text-[#475569] font-medium">
                  {current.businessPerspective.badge}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                {current.businessPerspective.description}
              </p>
            </div>

            {/* Box 2: Operator / Investor / Specialist Perspective */}
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] space-y-2.5 hover:border-[#CBD5E1] transition-all">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#0A2540] flex items-center gap-1.5">
                  <UserCheck className="h-3.5 w-3.5" style={{ color: current.color }} />
                  <span>{current.operatorPerspective.label}</span>
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white border border-[#E2E8F0] text-[#475569] font-medium">
                  {current.operatorPerspective.badge}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                {current.operatorPerspective.description}
              </p>
            </div>
          </div>

          {/* Highlights Checklist Strip */}
          <div className="pt-2">
            <div className="text-[11px] font-mono font-semibold uppercase tracking-wider text-[#64748B] mb-2.5">
              Key Standards & Guarantees:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {current.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="px-3 py-2 rounded-xl bg-white border border-[#E2E8F0] flex items-center gap-2 shadow-2xs"
                >
                  <CheckCircle2
                    className="h-3.5 w-3.5 shrink-0"
                    style={{ color: current.color }}
                  />
                  <span className="text-xs text-[#334155] font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Primary & Secondary Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-3 border-t border-[#F1F5F9]">
            <Link
              href={current.primaryAction.href}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-semibold text-sm shadow-sm transition-all hover:scale-[1.01] active:scale-[0.99]"
              style={{ backgroundColor: current.color }}
            >
              <span>{current.primaryAction.label}</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            {current.secondaryAction && (
              <Link
                href={current.secondaryAction.href}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#0A2540] border border-[#E2E8F0] font-semibold text-sm transition-all hover:border-[#CBD5E1]"
              >
                <span>{current.secondaryAction.label}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#64748B]" />
              </Link>
            )}

            <div className="sm:ml-auto flex items-center gap-2 text-xs text-[#64748B] font-mono pt-2 sm:pt-0">
              <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: current.color }} />
              <span>Active Community Pathway</span>
            </div>
          </div>
        </div>

        {/* 3. Bottom Dot Pagination */}
        <div className="flex items-center justify-center gap-2 pt-6 mt-4 border-t border-[#F1F5F9]">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? "w-8 bg-[#0A2540]"
                  : "w-2 bg-[#E2E8F0] hover:bg-[#CBD5E1]"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import {
  MapPin,
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Building2,
  Users,
  PieChart,
  BookOpen,
  CheckCircle2,
} from "lucide-react";
import { LinkedInIcon } from "@/components/brand/LinkedInIcon";

export default function AboutPage() {
  const founderPromises = [
    {
      icon: <Sparkles className="h-5 w-5 text-[#635BFF]" />,
      title: "Zero Upfront Consulting Retainers",
      desc: "We reject the monthly agency retainers that drain early runway. We align 100% of our incentives through shared equity and milestone upside.",
    },
    {
      icon: <Building2 className="h-5 w-5 text-[#00A389]" />,
      title: "Hands-On Operational Execution",
      desc: "We don't give advice from spreadsheets. We write production software, audit suppliers, set up ERPs, and hire core team members alongside you.",
    },
    {
      icon: <Users className="h-5 w-5 text-[#059669]" />,
      title: "Co-Founder & Talent Matchmaking",
      desc: "We connect domain founders with reviewed technical CTOs, GTM leaders, and operations managers through our curated Partner Network.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-[#FF7043]" />,
      title: "100% IP Assignment & Handover",
      desc: "We build founder independence, not permanent vendor lock-in. All custom software, licenses, and contracts are formally assigned to your venture.",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <Badge variant="indigo" size="md">
            About 1008 Network
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans leading-tight">
            1008 helps experienced people build businesses by providing the execution and people they are missing.
          </h1>
          <p className="text-base sm:text-lg text-[#425466] max-w-2xl mx-auto leading-relaxed">
            Based in Delhi NCR and partnering with founders across India, 1008 Network turns deep industry expertise into operating, cashflow-positive companies.
          </p>
        </div>

        {/* The 1008 Founder Covenant */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A2540] font-sans">
              The 1008 Network Founder Covenant
            </h2>
            <p className="text-xs sm:text-sm text-[#627D98]">
              Four principles engineered to protect founder runway, accelerate execution, and build lasting businesses.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {founderPromises.map((p, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-2.5 shadow-2xs hover:border-[#CBD5E1] transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-white border border-[#E2E8F0] shadow-2xs">
                    {p.icon}
                  </div>
                  <h3 className="font-bold text-sm text-[#0A2540] font-sans">
                    {p.title}
                  </h3>
                </div>
                <p className="text-xs text-[#425466] leading-relaxed pl-1">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Why 1008? The Story Behind the Name */}
        <div id="why-1008" className="rounded-3xl bg-[#0A2540] text-white p-8 sm:p-10 space-y-6 relative overflow-hidden border border-[#1E293B] shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-[#635BFF]/20 via-[#00D4B2]/15 to-transparent blur-[90px] pointer-events-none" />
          
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-white/10 text-[#00D4B2] text-xs font-mono font-bold uppercase tracking-wider border border-white/15">
                The Brand Story
              </span>
              <span className="text-xs text-[#94A3B8] font-mono">Why 1008?</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-sans">
              The Meaning Behind <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#635BFF] via-[#00D4B2] to-[#38BDF8]">1008</span>
            </h2>

            <p className="text-sm sm:text-base text-[#CBD5E1] leading-relaxed">
              In Indian tradition and classical mathematics, <strong>108</strong>—and its elevated order <strong>1008</strong>—represents <em>completeness, rigorous discipline, and wholeness</em>. It signifies seeing a commitment through to the end, leaving nothing half-built.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/[0.05] border border-white/10 space-y-2">
                <div className="text-2xl font-extrabold text-[#635BFF] font-mono">1</div>
                <div className="text-sm font-bold text-white font-sans">The Domain Originator</div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  The singular vision, deep industry knowledge, ambition, and initial spark brought by the founder.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.05] border border-white/10 space-y-2">
                <div className="text-2xl font-extrabold text-[#00D4B2] font-mono">00</div>
                <div className="text-sm font-bold text-white font-sans">The Operational Core</div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  The digital software systems and physical ground operations built from scratch with zero shortcuts.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.05] border border-white/10 space-y-2">
                <div className="text-2xl font-extrabold text-[#FF7043] font-mono">8 (∞)</div>
                <div className="text-sm font-bold text-white font-sans">Compounding Scale</div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  The multiplier of enduring enterprise value, positive unit cash flows, and long-term founder ownership.
                </p>
              </div>
            </div>

            <div className="pt-2 text-xs sm:text-sm text-[#94A3B8] border-t border-white/10 italic">
              &ldquo;You bring the 1 (domain expertise and market opportunity). 1008 helps build the 008 (the systems, operations, and compounding scale around it).&rdquo;
            </div>
          </div>
        </div>

        {/* The 1008 Standard */}
        <div className="rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] p-6 sm:p-8 space-y-4 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
          <h2 className="text-xl font-bold text-[#0A2540] font-sans">
            Our Operational Philosophy
          </h2>
          <p className="text-sm text-[#425466] leading-relaxed">
            The most successful companies are often built by people with deep domain expertise—professionals who have spent years in an industry and know the customers, suppliers, and pain points inside out. But launching a company requires execution capabilities they may not have: software architecture, digital systems, supplier contracts, compliance, and initial hiring. 1008 steps in as an operational co-builder to provide that execution machinery and missing talent for shared equity.
          </p>
        </div>

        {/* CTAs */}
        <div className="p-8 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-lg font-bold text-[#0A2540]">Have a domain thesis to discuss?</div>
            <p className="text-xs text-[#627D98]">Reach out directly to our venture partners in Delhi NCR or follow our updates.</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.linkedin.com/company/1008-network/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-[#E6E8EB] text-xs font-semibold text-[#0A2540] hover:text-[#0A66C2] hover:border-[#0A66C2]/30 transition-all shadow-xs"
            >
              <LinkedInIcon className="h-3.5 w-3.5 text-[#0A66C2]" />
              <span>Follow on LinkedIn</span>
            </a>
            <Button href="/contact" variant="primary" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
              Contact & Office Hours
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

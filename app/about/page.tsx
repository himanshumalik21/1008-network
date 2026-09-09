import React from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { MapPin, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const hubs = [
    { city: "Delhi NCR", role: "Headquarters & Central Studio Operations" },
    { city: "Bengaluru", role: "Engineering, Product Architecture & Tech Talent" },
    { city: "Mumbai", role: "FinTech, Institutional Capital & Banking Integrations" },
    { city: "Pune", role: "Industrial, Automotive & Precision Manufacturing Hub" },
    { city: "Hyderabad & Chennai", role: "BioPharma, CleanTech & Deep Enterprise" },
  ];

  return (
    <div className="pt-28 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <Badge variant="indigo" size="md">
            About 1008 (1008.network)
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            The Venture-Building Partner for India&apos;s Business Builders
          </h1>
          <p className="text-base sm:text-lg text-[#425466] max-w-2xl mx-auto leading-relaxed">
            Headquartered in Delhi NCR with an active pan-India footprint, 1008 exists to convert deep industrial and corporate domain expertise into high-conviction startups.
          </p>
        </div>

        {/* Operating Footprint */}
        <div className="rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] p-6 sm:p-8 space-y-6 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
          <div className="flex items-center gap-2 text-xs uppercase text-[#635BFF] font-bold">
            <MapPin className="h-4 w-4" />
            <span>Pan-India Operating Footprint</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {hubs.map((hub, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white border border-[#E6E8EB] space-y-1 shadow-xs">
                <div className="text-[#0A2540] font-bold text-sm">{hub.city}</div>
                <div className="text-xs text-[#627D98]">{hub.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* The 1008 Standard */}
        <div className="rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] p-6 sm:p-8 space-y-4 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
          <h2 className="text-xl font-bold text-[#0A2540] font-sans">
            The 1008 Curation Standard
          </h2>
          <p className="text-sm text-[#425466] leading-relaxed">
            We hold an uncompromising quality bar across all venture sprint tracks. Whether it is our 180-day studio sprints or our curated venture playbooks, we prioritize high signal and authentic execution above vanity metrics.
          </p>
        </div>

        {/* CTAs */}
        <div className="p-8 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-lg font-bold text-[#0A2540]">Have a domain thesis to discuss?</div>
            <p className="text-xs text-[#627D98]">Reach out directly to our venture partners in Delhi NCR.</p>
          </div>
          <Button href="/contact" variant="primary" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
            Contact & Office Hours
          </Button>
        </div>
      </div>
    </div>
  );
}

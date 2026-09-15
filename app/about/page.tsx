import React from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { MapPin, ArrowRight } from "lucide-react";
import { LinkedInIcon } from "@/components/brand/LinkedInIcon";

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
            About 1008 Network
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans">
            The End-to-End Operational Execution Partner for Any Business
          </h1>
          <p className="text-base sm:text-lg text-[#425466] max-w-2xl mx-auto leading-relaxed">
            Headquartered in Delhi NCR with a pan-India execution footprint, 1008 Network partners with founders to turn business visions into operational reality—from manufacturing plants and healthcare facilities to retail brands, schools, and tech platforms.
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
            The 1008 Network Operational Philosophy
          </h2>
          <p className="text-sm text-[#425466] leading-relaxed">
            We partner with budding entrepreneurs and business owners whose ventures hold exceptional conviction. The founder brings the industry vision and core ambition, and 1008 Network drives the complete turnkey operational engine (site scouting, facility commissioning, OEM machinery, permits, team recruitment, pragmatic tech, and commercial sales). We connect vetted ventures with our active investor syndicate and align 100% of our incentives through shared equity and long-term milestone upside.
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

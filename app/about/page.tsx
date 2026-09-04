import React from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import {
  MapPin,
  ShieldCheck,
  Layers,
  Users,
  TrendingUp,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  const hubs = [
    { city: "Delhi NCR", role: "Headquarters & Central Studio Operations" },
    { city: "Bengaluru", role: "Engineering, Product Architecture & Tech Talent" },
    { city: "Mumbai", role: "FinTech, Institutional Capital & Banking Integrations" },
    { city: "Pune", role: "Industrial, Automotive & Precision Manufacturing Hub" },
    { city: "Hyderabad & Chennai", role: "BioPharma, CleanTech & Deep Enterprise" },
  ];

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <Badge variant="amber" size="md">
            About 1008 (1008.network)
          </Badge>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans">
            The Venture-Building Partner for India&apos;s Business Builders
          </h1>
          <p className="text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed">
            Headquartered in Delhi NCR with an active pan-India footprint, 1008 exists to convert deep industrial and corporate domain expertise into high-conviction startups.
          </p>
        </div>

        {/* Operating Footprint */}
        <div className="rounded-2xl bg-surface-100/60 border border-white/[0.08] p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-400 font-semibold">
            <MapPin className="h-4 w-4" />
            <span>Pan-India Operating Footprint</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {hubs.map((hub, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-surface-200/60 border border-white/[0.05] space-y-1">
                <div className="text-white font-semibold text-sm">{hub.city}</div>
                <div className="text-xs text-muted font-mono">{hub.role}</div>
              </div>
            ))}
          </div>
        </div>

        {/* The 1008 Standard */}
        <div className="rounded-2xl bg-surface-100/60 border border-white/[0.08] p-6 sm:p-8 space-y-4">
          <h2 className="text-xl font-bold text-white font-sans">
            The 1008 Curation Standard
          </h2>
          <p className="text-sm text-muted leading-relaxed">
            We hold an uncompromising quality bar across all four of our pillars. Whether it is our 180-day studio sprints, our 60-day auto-expiring partner network listings, or our curated seed syndicate deal cards, we prioritize high signal and authentic execution above vanity metrics.
          </p>
        </div>

        {/* CTAs */}
        <div className="p-8 rounded-2xl bg-surface-100/90 border border-white/[0.1] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-lg font-bold text-white">Have a domain thesis to discuss?</div>
            <p className="text-xs text-muted">Reach out directly to our venture partners in Delhi NCR.</p>
          </div>
          <Button href="/contact" variant="primary" size="md" rightIcon={<ArrowRight className="h-4 w-4" />}>
            Contact & Office Hours
          </Button>
        </div>
      </div>
    </div>
  );
}

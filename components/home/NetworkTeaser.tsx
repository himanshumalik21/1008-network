"use client";

import React from "react";
import Link from "next/link";
import { initialOpportunities } from "@/data/opportunities";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import {
  Users,
  MapPin,
  Clock,
  ArrowRight,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

export function NetworkTeaser() {
  const featured = initialOpportunities.slice(0, 3);

  return (
    <section className="py-24 bg-background border-t border-border relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <Badge variant="cyan" size="sm" pulse>Live Network Opportunities</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-sans">
              Have the idea. Missing the person?
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl">
              Curated matchmaking for domain founders and technical/commercial leaders. All listings auto-expire in 60 days to ensure active conviction.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Button href="/network/post" variant="outline" size="sm">
              Post Opportunity
            </Button>
            <Button href="/network" variant="secondary" size="sm" rightIcon={<ArrowRight className="h-4 w-4" />}>
              View All ({initialOpportunities.length})
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((opp) => (
            <div
              key={opp.id}
              className="rounded-2xl bg-surface-50 border border-border p-6 flex flex-col justify-between hover:border-cyan-500/50 transition-all duration-300 relative group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="cyan" size="sm">
                    {opp.sector}
                  </Badge>
                  <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {opp.expiresInDays}d left
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  {opp.title}
                </h3>

                <div className="p-3 rounded-lg bg-surface-100 border border-border mb-4 text-xs space-y-1">
                  <div className="text-muted-foreground font-mono uppercase text-[10px]">FOUNDER BACKGROUND</div>
                  <div className="text-foreground font-semibold">{opp.founderBackground.headline}</div>
                  <div className="text-muted-foreground">{opp.founderBackground.domainYears} years domain depth</div>
                </div>

                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                  {opp.ventureThesis}
                </p>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between text-xs">
                <div>
                  <span className="text-muted-foreground text-[10px] block font-mono">EQUITY OFFER</span>
                  <span className="text-amber-500 font-mono font-bold">{opp.equityRange}</span>
                </div>

                <Button
                  href={`/network/${opp.id}`}
                  variant="secondary"
                  size="sm"
                  className="text-xs font-semibold"
                  rightIcon={<ArrowUpRight className="h-3 w-3" />}
                >
                  Connect
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

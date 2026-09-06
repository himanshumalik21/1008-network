"use client";

import React from "react";
import Link from "next/link";
import { initialKnowledgeResources } from "@/data/knowledgeResources";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { BookOpen, ArrowRight, Clock, FileText, Sparkles } from "lucide-react";

export function KnowledgeTeaser() {
  const featured = initialKnowledgeResources.slice(0, 3);

  return (
    <section className="py-24 bg-surface-100/60 border-t border-border relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <Badge variant="slate" size="sm">Knowledge Hub & Media</Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground font-sans">
              Operational Playbooks. Zero Theory.
            </h2>
            <p className="text-muted-foreground text-base max-w-2xl">
              Battle-tested frameworks on cap table structuring, enterprise B2B sales cycles, ESOP rules under Indian law, and unit economic modeling.
            </p>
          </div>

          <Button href="/knowledge" variant="outline" size="sm" rightIcon={<ArrowRight className="h-4 w-4" />}>
            Explore All Resources
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((item) => (
            <Link
              key={item.slug}
              href={`/knowledge/${item.slug}`}
              className="rounded-2xl bg-surface-50 border border-border p-6 flex flex-col justify-between hover:border-border-hover hover:bg-surface-100 transition-all duration-300 group shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge variant="slate" size="sm">
                    {item.category.replace("_", " ").toUpperCase()}
                  </Badge>
                  <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {item.readOrWatchTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-amber-500 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                  {item.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-mono text-[11px]">{item.authorOrSource}</span>
                <span className="text-foreground group-hover:translate-x-1 transition-transform flex items-center gap-1 font-medium">
                  Read <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

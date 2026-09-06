"use client";

import React from "react";
import Link from "next/link";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import {
  Briefcase,
  Code2,
  Building2,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export function PersonaMatrix() {
  const personas = [
    {
      icon: Briefcase,
      badge: "Domain Leader",
      title: "Corporate VP / Director / Senior GM",
      description:
        "You have 8–20+ years of deep domain experience in Healthcare, Logistics, D2C, Industrial Manufacturing, or FinTech. You see clear market inefficiencies every day, but lack the tech team and full-stack execution setup to build it alone.",
      solution: "Join the Build With 1008 Studio for our 180-day execution framework. We handle code, design, and hiring while you lead sector strategy.",
      cta: "Apply as Domain Founder",
      href: "/studio",
      accent: "amber",
    },
    {
      icon: Code2,
      badge: "Technical & GTM",
      title: "Technical Co-Founder / Operator",
      description:
        "You are a Staff Engineer, Engineering Lead, or VP of Sales looking to build an authentic 0-to-1 company with meaningful equity, but you don't want to work on trivial consumer gimmicks.",
      solution: "Browse vetted domain opportunities with 60-day active lifecycles and partner with senior corporate veterans holding deep enterprise rolodexes.",
      cta: "Find a Co-Founder",
      href: "/network",
      accent: "cyan",
    },
    {
      icon: Building2,
      badge: "Traditional SME",
      title: "Family Business / Industrial SME",
      description:
        "You run an established manufacturing unit, distribution warehouse, or supply chain business. You want to launch a modern digital spin-out or modernize operations with automated tech.",
      solution: "Co-build a high-margin digital venture leveraging your captive supplier and customer network with 1008's venture engineering stack.",
      cta: "Explore Venture Spin-Out",
      href: "/studio",
      accent: "slate",
    },
    {
      icon: TrendingUp,
      badge: "Syndicate / Angel",
      title: "Angel Investor / CXO Syndicate",
      description:
        "You seek high-signal early seed deals led by mature operators with proven unit economics, reference-checked backgrounds, and high technical defensibility.",
      solution: "Access curated deal cards and syndicate allocations from 1008 Studio ventures with verified codebases and traction.",
      cta: "Access 1008 Capital",
      href: "/capital",
      accent: "emerald",
    },
  ];

  return (
    <section className="py-24 bg-background relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <Badge variant="cyan" size="sm">Target Audience</Badge>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground font-sans">
            Built for India&apos;s serious venture builders.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            We don&apos;t cater to tourists or hype-chasers. We partner with operators who have lived the problem and have the conviction to build defensible enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personas.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-surface-50 border border-border p-6 sm:p-8 flex flex-col justify-between hover:border-border-hover transition-all duration-300 relative group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="p-2.5 rounded-xl bg-surface-200 text-foreground border border-border">
                      <Icon className="h-5 w-5 text-amber-500" />
                    </div>
                    <Badge variant={item.accent as any} size="sm">
                      {item.badge}
                    </Badge>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="p-3.5 rounded-xl bg-surface-100 border border-border text-xs text-foreground mb-6 flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item.solution}</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button
                    href={item.href}
                    variant="secondary"
                    size="sm"
                    className="w-full justify-between"
                    rightIcon={<ArrowRight className="h-4 w-4" />}
                  >
                    {item.cta}
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

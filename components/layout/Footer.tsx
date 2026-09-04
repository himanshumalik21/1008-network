"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Badge } from "@/components/brand/Badge";
import { subscribeNewsletter } from "@/lib/actions";
import {
  ArrowRight,
  Mail,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Sparkles,
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    try {
      const res = await subscribeNewsletter(email);
      if (res.success) {
        setStatus("success");
        setMessage(res.message);
        setEmail("");
      } else {
        setStatus("error");
        setMessage(res.message);
      }
    } catch {
      setStatus("error");
      setMessage("Failed to subscribe. Please try again.");
    }
  };

  return (
    <footer className="bg-[#060709] border-t border-white/[0.08] text-foreground pt-16 pb-12 overflow-hidden relative">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-48 bg-amber-500/[0.04] blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/[0.08]">
          {/* Col 1 & 2: Brand Identity & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" />
            <p className="text-sm text-muted leading-relaxed max-w-sm">
              The high-conviction venture-building partner and talent syndicate.
              We partner with experienced corporate leaders and domain experts to build, de-risk, and scale high-upside businesses across India.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <Badge variant="amber" size="sm">
                Equity & Upside Partner
              </Badge>
              <Badge variant="cyan" size="sm">
                180-Day Handover
              </Badge>
              <Badge variant="slate" size="sm">
                60-Day Network Board
              </Badge>
            </div>

            <div className="pt-4 flex items-center gap-2 text-xs font-mono text-muted">
              <MapPin className="h-3.5 w-3.5 text-amber-400" />
              <span>Headquartered in Delhi NCR • Operating Pan-India</span>
            </div>
          </div>

          {/* Col 3: Studio & Network */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Venture Engine
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/studio" className="text-muted hover:text-white transition-colors flex items-center justify-between group">
                  <span>Build With 1008</span>
                  <span className="text-[10px] font-mono text-amber-400/80 opacity-0 group-hover:opacity-100 transition-opacity">180d</span>
                </Link>
              </li>
              <li>
                <Link href="/network" className="text-muted hover:text-white transition-colors flex items-center justify-between group">
                  <span>Partner Network</span>
                  <span className="text-[10px] font-mono text-cyan-400/80 opacity-0 group-hover:opacity-100 transition-opacity">60d</span>
                </Link>
              </li>
              <li>
                <Link href="/network/post" className="text-muted hover:text-white transition-colors">
                  Post an Opportunity
                </Link>
              </li>
              <li>
                <Link href="/capital" className="text-muted hover:text-white transition-colors">
                  1008 Capital Syndicate
                </Link>
              </li>
              <li>
                <Link href="/readiness" className="text-muted hover:text-white transition-colors">
                  Venture Readiness Quiz
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Knowledge & Strategy */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Knowledge & Thesis
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/knowledge" className="text-muted hover:text-white transition-colors">
                  Operational Playbooks
                </Link>
              </li>
              <li>
                <Link href="/manifesto" className="text-muted hover:text-white transition-colors">
                  The 1008 Manifesto
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-muted hover:text-white transition-colors">
                  About the Studio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted hover:text-white transition-colors">
                  Contact & Office Hours
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter / Dispatch */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              <span>Venture Dispatch</span>
            </h4>
            <p className="text-xs text-muted leading-relaxed">
              Bi-weekly analysis on Indian domain ventures, cap-table frameworks, and 0-to-1 operational playbooks.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@domain.com"
                  required
                  className="w-full bg-surface-200/80 border border-white/[0.1] rounded-lg px-3 py-2 text-xs text-foreground placeholder:text-muted/60 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="absolute right-1 top-1 bottom-1 px-2.5 bg-amber-500 hover:bg-amber-400 text-black font-semibold rounded text-xs transition-colors flex items-center justify-center disabled:opacity-50"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
              {status === "success" && (
                <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="h-3 w-3" /> {message}
                </p>
              )}
              {status === "error" && (
                <p className="text-[11px] text-red-400">{message}</p>
              )}
            </form>

            <div className="pt-2 text-[11px] font-mono text-muted-foreground flex items-center gap-1.5">
              <Mail className="h-3 w-3 text-amber-400" />
              <span>Direct: join@1008.network</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} 1008 (1008.network). All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <Link href="/terms" className="hover:text-muted transition-colors">
              Terms & Syndicate Notice
            </Link>
            <Link href="/privacy" className="hover:text-muted transition-colors">
              Privacy Policy
            </Link>
            <div className="flex items-center gap-1.5 font-mono text-emerald-400/90">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Zero-Fee Studio Model</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

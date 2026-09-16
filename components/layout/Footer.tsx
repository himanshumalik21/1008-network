"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { Badge } from "@/components/brand/Badge";
import { subscribeNewsletter } from "@/lib/actions";
import { trackNewsletterSignup } from "@/lib/analytics";
import {
  ArrowRight,
  Mail,
  ShieldCheck,
  CheckCircle2,
  MapPin,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { LinkedInIcon } from "@/components/brand/LinkedInIcon";

export function Footer() {
  const pathname = usePathname();
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
        trackNewsletterSignup("footer");
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

  if (pathname === "/") {
    return (
      <footer className="w-full bg-white/95 backdrop-blur-md border-t border-[#E6E8EB] py-3 sm:py-2 lg:h-10 text-xs text-[#627D98] relative lg:fixed lg:bottom-0 lg:left-0 lg:right-0 z-30 shrink-0 pb-safe">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <div className="flex items-center gap-2 text-center sm:text-left flex-wrap justify-center sm:justify-start">
            <span>© {new Date().getFullYear()} 1008 Network (1008.network)</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Operating Pan-India</span>
          </div>
          <div className="flex items-center gap-4 sm:gap-5 text-xs flex-wrap justify-center">
            <a
              href="https://www.linkedin.com/company/1008-network/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A66C2] transition-colors flex items-center gap-1 font-medium"
            >
              <LinkedInIcon className="h-3.5 w-3.5 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>
            <Link href="/terms" className="hover:text-[#0A2540] transition-colors">
              Terms & NDA
            </Link>
            <Link href="/privacy" className="hover:text-[#0A2540] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-[#F6F9FC] border-t border-[#E6E8EB] text-[#0A2540] pt-16 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#E6E8EB]">
          {/* Col 1 & 2: Brand Identity & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" />
            <p className="text-sm text-[#425466] leading-relaxed max-w-sm">
              The turnkey operations & venture partner for new ventures, early-stage founders, and businesses looking to reboot. We build feasibility prototypes, run end-to-end ground operations, and syndicate capital from our investor pool for shared equity upside.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <Badge variant="indigo" size="sm">
                Equity & Upside Partner
              </Badge>
              <Badge variant="cyan" size="sm">
                Turnkey Operations
              </Badge>
              <Badge variant="emerald" size="sm">
                Investor Syndicate
              </Badge>
            </div>

            <div className="pt-2 flex flex-col gap-2 text-xs text-[#627D98] font-medium">
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-[#635BFF]" />
                <span>Headquartered in Delhi NCR • Operating Pan-India</span>
              </div>
              <div className="pt-1">
                <a
                  href="https://www.linkedin.com/company/1008-network/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#0A66C2]/10 text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white transition-all text-xs font-semibold border border-[#0A66C2]/20 shadow-2xs group"
                >
                  <LinkedInIcon className="h-3.5 w-3.5" />
                  <span>Follow 1008 Network on LinkedIn</span>
                  <ArrowUpRight className="h-3 w-3 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 3: Four Pillars */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#0A2540] font-bold">
              The Four Pillars
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/studio" className="text-[#425466] hover:text-[#635BFF] transition-colors flex items-center justify-between group">
                  <span>1. Venture Studio</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#F0F0FF] text-[#635BFF]">Turnkey</span>
                </Link>
              </li>
              <li>
                <Link href="/network" className="text-[#425466] hover:text-[#635BFF] transition-colors flex items-center justify-between group">
                  <span>2. Partner Network</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#E6FFFA] text-[#007A66]">Talent</span>
                </Link>
              </li>
              <li>
                <Link href="/capital" className="text-[#425466] hover:text-[#635BFF] transition-colors flex items-center justify-between group">
                  <span>3. Capital Network</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#ECFDF5] text-[#059669]">Invest</span>
                </Link>
              </li>
              <li>
                <Link href="/knowledge" className="text-[#425466] hover:text-[#635BFF] transition-colors flex items-center justify-between group">
                  <span>4. Playbook</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-[#FFF3EE] text-[#FF7043]">Intel</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Portals & Company */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#0A2540] font-bold">
              Portals & Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/capital/post" className="text-[#425466] hover:text-[#635BFF] transition-colors">
                  Raise Capital (Startups)
                </Link>
              </li>
              <li>
                <Link href="/capital/join" className="text-[#425466] hover:text-[#635BFF] transition-colors">
                  Join Investor Pool
                </Link>
              </li>
              <li>
                <Link href="/network/post" className="text-[#425466] hover:text-[#635BFF] transition-colors">
                  Post Talent Requirement
                </Link>
              </li>
              <li>
                <Link href="/manifesto" className="text-[#425466] hover:text-[#635BFF] transition-colors">
                  1008 Manifesto
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#425466] hover:text-[#635BFF] transition-colors">
                  About 1008 Network
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#425466] hover:text-[#635BFF] transition-colors">
                  Contact & Office Hours
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Newsletter / Dispatch */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#0A2540] font-bold flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-[#635BFF]" />
              <span>Venture Dispatch</span>
            </h4>
            <p className="text-xs text-[#425466] leading-relaxed">
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
                  className="w-full bg-white border border-[#E6E8EB] rounded-full px-4 py-2 text-xs text-[#0A2540] placeholder:text-[#8898AA] focus:outline-none focus:border-[#635BFF] shadow-xs"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="absolute right-1 top-1 bottom-1 px-3 bg-[#635BFF] hover:bg-[#5851EA] text-white font-semibold rounded-full text-xs transition-colors flex items-center justify-center disabled:opacity-50"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
              {status === "success" && (
                <p className="text-[11px] text-[#059669] flex items-center gap-1 font-medium">
                  <CheckCircle2 className="h-3 w-3" /> {message}
                </p>
              )}
              {status === "error" && (
                <p className="text-[11px] text-red-500">{message}</p>
              )}
            </form>

            <div className="pt-2 space-y-1 text-[11px] text-[#627D98] font-medium">
              <div className="flex items-center gap-1.5">
                <Mail className="h-3 w-3 text-[#635BFF]" />
                <span>Direct: join@1008.network</span>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/company/1008-network/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-[#0A66C2] transition-colors"
                >
                  <LinkedInIcon className="h-3 w-3 text-[#0A66C2]" />
                  <span>LinkedIn: 1008-network</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Statutory Regulatory & Non-Broker Notice */}
        <div className="pt-8 pb-4 text-[11px] text-[#829AB1] leading-relaxed border-b border-[#E6E8EB]/80 space-y-1">
          <p>
            <strong>Regulatory Disclaimer (Republic of India):</strong> 1008 Network (1008.network) operates as a turnkey venture studio, co-founder talent matching network, and discovery facilitator. 1008 Network is not a registered Stock Broker, Investment Adviser, Research Analyst, Alternative Investment Fund (AIF), or Merchant Banker under SEBI regulations. We do not manage pooled investment funds, hold investor capital, execute financial trades, or guarantee financial returns. All partnership arrangements, equity vesting, and angel syndicate allocations are private commercial contracts executed directly between founders, operators, and investors following independent due diligence.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#627D98]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} 1008 Network (1008.network). All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <a
              href="https://www.linkedin.com/company/1008-network/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A66C2] transition-colors flex items-center gap-1 font-medium"
            >
              <LinkedInIcon className="h-3.5 w-3.5 text-[#0A66C2]" />
              <span>LinkedIn</span>
            </a>
            <Link href="/terms" className="hover:text-[#0A2540] transition-colors">
              Terms & NDA Notice
            </Link>
            <Link href="/privacy" className="hover:text-[#0A2540] transition-colors">
              Privacy Policy (DPDP Act)
            </Link>
            <div className="flex items-center gap-1.5 text-[#059669] font-medium">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>Zero Consulting Retainers</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

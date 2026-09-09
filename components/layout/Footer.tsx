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
    <footer className="bg-[#F6F9FC] border-t border-[#E6E8EB] text-[#0A2540] pt-16 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-[#E6E8EB]">
          {/* Col 1 & 2: Brand Identity & Positioning */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" />
            <p className="text-sm text-[#425466] leading-relaxed max-w-sm">
              The high-conviction venture studio for experienced Indian corporate leaders, VPs, and domain veterans. We architect, build, and deploy defensible businesses for shared equity upside.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <Badge variant="indigo" size="sm">
                Equity & Upside Partner
              </Badge>
              <Badge variant="cyan" size="sm">
                180-Day Handover
              </Badge>
              <Badge variant="emerald" size="sm">
                Mutual NDA Standard
              </Badge>
            </div>

            <div className="pt-4 flex items-center gap-2 text-xs text-[#627D98] font-medium">
              <MapPin className="h-3.5 w-3.5 text-[#635BFF]" />
              <span>Headquartered in Delhi NCR • Operating Pan-India</span>
            </div>
          </div>

          {/* Col 3: Studio & Execution */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#0A2540] font-bold">
              Venture Studio
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/studio" className="text-[#425466] hover:text-[#635BFF] transition-colors flex items-center justify-between group">
                  <span>Build With 1008</span>
                  <span className="text-[10px] font-bold text-[#635BFF] opacity-0 group-hover:opacity-100 transition-opacity">180d</span>
                </Link>
              </li>
              <li>
                <Link href="/#blueprint" className="text-[#425466] hover:text-[#635BFF] transition-colors">
                  The 180-Day Blueprint
                </Link>
              </li>
              <li>
                <Link href="/#comparison" className="text-[#425466] hover:text-[#635BFF] transition-colors">
                  Why 1008 vs. Agencies
                </Link>
              </li>
              <li>
                <Link href="/readiness" className="text-[#425466] hover:text-[#635BFF] transition-colors">
                  Venture Readiness Quiz
                </Link>
              </li>
              <li>
                <Link href="/#personas" className="text-[#425466] hover:text-[#635BFF] transition-colors">
                  Domain Archetypes
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Knowledge & Thesis */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#0A2540] font-bold">
              Knowledge & Insights
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/knowledge" className="text-[#425466] hover:text-[#635BFF] transition-colors">
                  Operational Playbooks
                </Link>
              </li>
              <li>
                <Link href="/manifesto" className="text-[#425466] hover:text-[#635BFF] transition-colors">
                  The 1008 Manifesto
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#425466] hover:text-[#635BFF] transition-colors">
                  About the Studio
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

            <div className="pt-2 text-[11px] text-[#627D98] flex items-center gap-1.5 font-medium">
              <Mail className="h-3 w-3 text-[#635BFF]" />
              <span>Direct: join@1008.network</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#627D98]">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} 1008 (1008.network). All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-xs">
            <Link href="/terms" className="hover:text-[#0A2540] transition-colors">
              Terms & NDA Notice
            </Link>
            <Link href="/privacy" className="hover:text-[#0A2540] transition-colors">
              Privacy Policy
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

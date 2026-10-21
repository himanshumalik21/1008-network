"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/brand/LinkedInIcon";
import { InstagramIcon, FacebookIcon } from "@/components/brand/SocialIcons";

export function Footer() {
  return (
    <footer className="bg-[#F8FAFC] border-t border-[#E2E8F0] text-[#0A2540] pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12 pb-10 border-b border-[#E2E8F0]">
          {/* Brand & Mission Statement */}
          <div className="col-span-2 space-y-3">
            <Logo size="md" />
            <p className="text-sm text-[#475569] font-medium leading-relaxed max-w-sm">
              Helping your Business get closer to your Goals. A collaborative community for talent, capital, outsource operations, and gigs.
            </p>
            <div className="pt-2 flex flex-col gap-2.5 text-xs text-[#64748B]">
              <a
                href="mailto:join@1008.network"
                className="inline-flex items-center gap-2 text-[#475569] hover:text-[#635BFF] transition-colors font-medium"
              >
                <Mail className="h-3.5 w-3.5 text-[#635BFF]" />
                <span>join@1008.network</span>
              </a>
              <div className="flex items-center gap-3 pt-1">
                <a
                  href="https://www.linkedin.com/company/1008-network/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#475569] hover:text-[#0A66C2] transition-colors font-medium"
                  title="LinkedIn"
                >
                  <LinkedInIcon className="h-4 w-4 text-[#0A66C2]" />
                  <span>LinkedIn</span>
                </a>
                <span>•</span>
                <a
                  href="https://www.instagram.com/1008_network/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#475569] hover:text-[#E4405F] transition-colors font-medium"
                  title="Instagram"
                >
                  <InstagramIcon className="h-4 w-4 text-[#E4405F]" />
                  <span>Instagram</span>
                </a>
                <span>•</span>
                <a
                  href="https://www.facebook.com/share/1BpxN8G7VM/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#475569] hover:text-[#1877F2] transition-colors font-medium"
                  title="Facebook"
                >
                  <FacebookIcon className="h-4 w-4 text-[#1877F2]" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Ecosystem / Community */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#0A2540] font-bold">
              Community
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/network" className="text-[#64748B] hover:text-[#635BFF] transition-colors">
                  Co-Founders & Talent
                </Link>
              </li>
              <li>
                <Link href="/capital" className="text-[#64748B] hover:text-[#635BFF] transition-colors">
                  Funding & Investors
                </Link>
              </li>
              <li>
                <Link href="/studio" className="text-[#64748B] hover:text-[#635BFF] transition-colors">
                  Outsource Operations
                </Link>
              </li>
              <li>
                <Link href="/gigs" className="text-[#64748B] hover:text-[#635BFF] transition-colors">
                  Gigs & Sprints
                </Link>
              </li>
              <li>
                <Link href="/readiness" className="text-[#64748B] hover:text-[#635BFF] transition-colors">
                  Readiness Diagnostic
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#0A2540] font-bold">
              Learn
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/knowledge" className="text-[#64748B] hover:text-[#635BFF] transition-colors">
                  Playbook
                </Link>
              </li>
              <li>
                <Link href="/manifesto" className="text-[#64748B] hover:text-[#635BFF] transition-colors">
                  Insights & Manifesto
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#0A2540] font-bold">
              Company
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-[#64748B] hover:text-[#635BFF] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#64748B] hover:text-[#635BFF] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#0A2540] font-bold">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-[#64748B] hover:text-[#635BFF] transition-colors">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-[#64748B] hover:text-[#635BFF] transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/terms#regulatory-disclaimer" className="text-[#64748B] hover:text-[#635BFF] transition-colors">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#64748B]">
          <div>
            © {new Date().getFullYear()} 1008 Network (1008.network). All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Delhi NCR • Operating Pan-India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

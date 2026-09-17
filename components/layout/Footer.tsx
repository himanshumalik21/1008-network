"use client";

import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Mail } from "lucide-react";
import { LinkedInIcon } from "@/components/brand/LinkedInIcon";

export function Footer() {
  return (
    <footer className="bg-[#F8FAFC] border-t border-[#E2E8F0] text-[#0A2540] pt-12 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 lg:gap-12 pb-10 border-b border-[#E2E8F0]">
          {/* Brand & Mission Statement */}
          <div className="col-span-2 space-y-3">
            <Logo size="md" />
            <p className="text-sm text-[#475569] font-medium leading-relaxed max-w-sm">
              Build businesses. Find the people. Access the resources.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs text-[#64748B]">
              <a
                href="mailto:join@1008.network"
                className="inline-flex items-center gap-2 text-[#475569] hover:text-[#635BFF] transition-colors font-medium"
              >
                <Mail className="h-3.5 w-3.5 text-[#635BFF]" />
                <span>join@1008.network</span>
              </a>
              <a
                href="https://www.linkedin.com/company/1008-network/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#475569] hover:text-[#0A66C2] transition-colors font-medium"
              >
                <LinkedInIcon className="h-3.5 w-3.5 text-[#0A66C2]" />
                <span>Follow on LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Build */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider text-[#0A2540] font-bold">
              Build
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/studio" className="text-[#64748B] hover:text-[#635BFF] transition-colors">
                  Venture Studio
                </Link>
              </li>
              <li>
                <Link href="/network" className="text-[#64748B] hover:text-[#635BFF] transition-colors">
                  Partner Network
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

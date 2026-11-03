\"use client\";

import React from \"react\";
import Link from \"next/link\";
import { Logo } from \"@/components/brand/Logo\";
import { Mail, ArrowUpRight } from \"lucide-react\";
import { LinkedInIcon } from \"@/components/brand/LinkedInIcon\";
import { InstagramIcon, FacebookIcon } from \"@/components/brand/SocialIcons\";

export function ModernHomeFooter() {
  return (
    <footer className=\"relative w-full border-t border-[#E2E8F0] bg-[#F8FAFC]/95 backdrop-blur-md text-[#0A2540] pt-14 pb-12 z-30 overflow-hidden\">
      {/* Top subtle radiant gradient */}
      <div className=\"absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#CBD5E1] to-transparent\" />

      <div className=\"max-w-[1420px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12\">
        {/* Main Sitemap Grid */}
        <div className=\"grid grid-cols-2 md:grid-cols-12 gap-8 lg:gap-12 pb-10 border-b border-[#E2E8F0]\">
          {/* Brand & Mission Statement (Span 4 cols) */}
          <div className=\"col-span-2 md:col-span-4 space-y-4 text-left\">
            <Logo size=\"md\" />
            <p className=\"text-sm text-[#475569] font-normal leading-relaxed max-w-sm\">
              Helping your business get closer to your goals. A collaborative ecosystem for co-founders, capital allocation, outsource operations, and gigs.
            </p>
            <div className=\"space-y-2.5 pt-2 text-xs text-[#64748B]\">
              <a
                href=\"mailto:join@1008.network\"
                className=\"inline-flex items-center gap-2 text-[#475569] hover:text-[#635BFF] transition-colors font-medium\"
              >
                <Mail className=\"h-3.5 w-3.5 text-[#635BFF]\" />
                <span>join@1008.network</span>
              </a>

              <div className=\"flex items-center gap-3 pt-1\">
                <a
                  href=\"https://www.linkedin.com/company/1008-network/\"
                  target=\"_blank\"
                  rel=\"noopener noreferrer\"
                  className=\"inline-flex items-center gap-1.5 text-[#475569] hover:text-[#0A66C2] transition-colors font-medium\"
                  title=\"LinkedIn\"
                >
                  <LinkedInIcon className=\"h-4 w-4 text-[#0A66C2]\" />
                  <span>LinkedIn</span>
                </a>
                <span>•</span>
                <a
                  href=\"https://www.instagram.com/1008_network/\"
                  target=\"_blank\"
                  rel=\"noopener noreferrer\"
                  className=\"inline-flex items-center gap-1.5 text-[#475569] hover:text-[#E4405F] transition-colors font-medium\"
                  title=\"Instagram\"
                >
                  <InstagramIcon className=\"h-4 w-4 text-[#E4405F]\" />
                  <span>Instagram</span>
                </a>
                <span>•</span>
                <a
                  href=\"https://www.facebook.com/share/1BpxN8G7VM/?mibextid=wwXIfr\"
                  target=\"_blank\"
                  rel=\"noopener noreferrer\"
                  className=\"inline-flex items-center gap-1.5 text-[#475569] hover:text-[#1877F2] transition-colors font-medium\"
                  title=\"Facebook\"
                >
                  <FacebookIcon className=\"h-4 w-4 text-[#1877F2]\" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Five Growth Pathways (Span 3 cols) */}
          <div className=\"col-span-1 md:col-span-3 space-y-3 text-left\">
            <h4 className=\"text-xs uppercase font-mono font-bold tracking-wider text-[#0A2540]\">
              Growth Pathways
            </h4>
            <ul className=\"space-y-2.5 text-xs sm:text-[13px]\">
              <li>
                <Link href=\"/network\" className=\"text-[#64748B] hover:text-[#635BFF] transition-colors flex items-center gap-1\">
                  <span>Co-Founders & Talent</span>
                  <ArrowUpRight className=\"h-3 w-3 opacity-60\" />
                </Link>
              </li>
              <li>
                <Link href=\"/capital\" className=\"text-[#64748B] hover:text-[#635BFF] transition-colors flex items-center gap-1\">
                  <span>Funding & Investors</span>
                  <ArrowUpRight className=\"h-3 w-3 opacity-60\" />
                </Link>
              </li>
              <li>
                <Link href=\"/studio\" className=\"text-[#64748B] hover:text-[#635BFF] transition-colors flex items-center gap-1\">
                  <span>Outsource Operations</span>
                  <ArrowUpRight className=\"h-3 w-3 opacity-60\" />
                </Link>
              </li>
              <li>
                <Link href=\"/gigs\" className=\"text-[#64748B] hover:text-[#635BFF] transition-colors flex items-center gap-1\">
                  <span>Gigs & Sprints</span>
                  <ArrowUpRight className=\"h-3 w-3 opacity-60\" />
                </Link>
              </li>
              <li>
                <Link href=\"/knowledge\" className=\"text-[#64748B] hover:text-[#635BFF] transition-colors flex items-center gap-1\">
                  <span>Playbooks & Research</span>
                  <ArrowUpRight className=\"h-3 w-3 opacity-60\" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Community & Knowledge (Span 2 cols) */}
          <div className=\"col-span-1 md:col-span-2 space-y-3 text-left\">
            <h4 className=\"text-xs uppercase font-mono font-bold tracking-wider text-[#0A2540]\">
              Resources
            </h4>
            <ul className=\"space-y-2.5 text-xs sm:text-[13px]\">
              <li>
                <Link href=\"/knowledge\" className=\"text-[#64748B] hover:text-[#635BFF] transition-colors\">
                  Knowledge Hub
                </Link>
              </li>
              <li>
                <Link href=\"/manifesto\" className=\"text-[#64748B] hover:text-[#635BFF] transition-colors\">
                  Insights & Manifesto
                </Link>
              </li>
              <li>
                <Link href=\"/readiness\" className=\"text-[#64748B] hover:text-[#635BFF] transition-colors\">
                  Readiness Diagnostic
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Company (Span 1.5 cols) */}
          <div className=\"col-span-1 md:col-span-1 space-y-3 text-left\">
            <h4 className=\"text-xs uppercase font-mono font-bold tracking-wider text-[#0A2540]\">
              Company
            </h4>
            <ul className=\"space-y-2.5 text-xs sm:text-[13px]\">
              <li>
                <Link href=\"/about\" className=\"text-[#64748B] hover:text-[#635BFF] transition-colors\">
                  About
                </Link>
              </li>
              <li>
                <Link href=\"/contact\" className=\"text-[#64748B] hover:text-[#635BFF] transition-colors\">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Legal & Compliance (Span 2 cols) */}
          <div className=\"col-span-1 md:col-span-2 space-y-3 text-left\">
            <h4 className=\"text-xs uppercase font-mono font-bold tracking-wider text-[#0A2540]\">
              Legal & Trust
            </h4>
            <ul className=\"space-y-2.5 text-xs sm:text-[13px]\">
              <li>
                <Link href=\"/privacy\" className=\"text-[#64748B] hover:text-[#635BFF] transition-colors\">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href=\"/terms\" className=\"text-[#64748B] hover:text-[#635BFF] transition-colors\">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href=\"/terms#regulatory-disclaimer\" className=\"text-[#64748B] hover:text-[#635BFF] transition-colors\">
                  Regulatory Notice
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Location & Operational Status Pill */}
        <div className=\"pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]\">
          <div className=\"flex items-center flex-wrap gap-2 text-center sm:text-left\">
            <span>© {new Date().getFullYear()} 1008 Network (1008.network). All rights reserved.</span>
            <span className=\"hidden sm:inline text-zinc-300\">•</span>
            <span>Delhi NCR / Gurgaon • Pan-India Network</span>
          </div>

          {/* Live Operational Status Badge */}
          <div className=\"inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#CBD5E1] shadow-2xs text-[11px] font-mono text-[#0A2540]\">
            <span className=\"w-2 h-2 rounded-full bg-[#00D4B2] animate-pulse\" />
            <span>All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

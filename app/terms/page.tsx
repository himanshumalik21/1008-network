import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/brand/Badge";
import {
  ShieldCheck,
  Lock,
  FileText,
  Scale,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Clock,
  ArrowLeft,
  Calendar,
  Sparkles,
  Award,
  HelpCircle,
  Briefcase,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service & Mutual NDA Agreement | 1008 Network",
  description:
    "Official Terms of Service, Partner Network Matching Rules, and Mutual Non-Disclosure Agreement (NDA) for 1008 Network venture studio, co-founders, and operators.",
  alternates: {
    canonical: "https://www.1008.network/terms",
  },
};

export default function TermsPage() {
  const lastUpdated = "September 15, 2026";

  const keyGuarantees = [
    {
      icon: <Lock className="h-4 w-4 text-[#635BFF]" />,
      title: "Mutual NDA Standard",
      desc: "All venture proposals, pitch decks, candidate CVs, and proprietary models are covered under mutual non-disclosure obligations from Day 1.",
    },
    {
      icon: <Sparkles className="h-4 w-4 text-[#059669]" />,
      title: "Zero Retainers & Shared Equity",
      desc: "Our Venture Studio model rejects high upfront consulting fees in favor of skin-in-the-game shared equity partnerships.",
    },
    {
      icon: <Scale className="h-4 w-4 text-[#00A389]" />,
      title: "Non-Broker Platform",
      desc: "1008 Network is an operational builder and talent network—not a SEBI registered broker-dealer, portfolio manager, or stock exchange.",
    },
    {
      icon: <Clock className="h-4 w-4 text-[#FF7043]" />,
      title: "Active Curated Pipeline",
      desc: "All network postings are actively curated to prevent stale listings and protect founder response rates.",
    },
  ];

  return (
    <div className="pt-28 pb-20 bg-[#FDFDFE] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#627D98] hover:text-[#0A2540] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to 1008 Network
          </Link>
        </div>

        {/* Header Block */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center gap-2">
            <Badge variant="indigo" size="sm">
              Legal & Compliance
            </Badge>
            <span className="text-xs font-mono text-[#627D98] flex items-center gap-1">
              <Calendar className="h-3 w-3 text-[#635BFF]" /> Effective: {lastUpdated}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans leading-tight">
            Terms of Service & Mutual NDA Agreement
          </h1>

          <p className="text-base sm:text-lg text-[#425466] leading-relaxed font-normal">
            Welcome to 1008 Network. By accessing <strong>https://www.1008.network</strong>, applying to our Venture Studio, posting leadership requirements, or registering as an operator in our Partner Network, you agree to these Terms of Service and Mutual Non-Disclosure Agreement.
          </p>
        </div>

        {/* Key Governance Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {keyGuarantees.map((item, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] space-y-1.5 shadow-2xs"
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-white border border-[#E2E8F0] shadow-2xs">
                  {item.icon}
                </div>
                <h3 className="text-xs font-bold text-[#0A2540] uppercase tracking-wider font-mono">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs text-[#425466] leading-relaxed pl-8">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content Sections */}
        <div className="rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-10 space-y-10 shadow-xs text-xs sm:text-sm text-[#425466] leading-relaxed">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-mono font-bold text-xs">
                1
              </span>
              <h2 className="text-lg font-bold text-[#0A2540]">
                Nature of Platform & Operations
              </h2>
            </div>
            <p>
              1008 Network operates as a premier **turnkey venture studio, co-founder talent network, and operational execution partner** across India. Our core service pillars comprise:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0A2540]">
                  <Building2 className="h-3.5 w-3.5 text-[#635BFF]" />
                  <span>Venture Studio</span>
                </div>
                <p className="text-[11px] text-[#627D98]">0-to-1 operational systems, software engineering, plant commissioning, and supply chain execution for shared equity.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0A2540]">
                  <Users className="h-3.5 w-3.5 text-[#00A389]" />
                  <span>Partner Network</span>
                </div>
                <p className="text-[11px] text-[#627D98]">Curated matching connecting founders with CTOs, GTM leaders, supply chain heads, and operators for shared equity upside.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0A2540]">
                  <FileText className="h-3.5 w-3.5 text-[#FF7043]" />
                  <span>Knowledge Hub</span>
                </div>
                <p className="text-[11px] text-[#627D98]">Actionable, open-access founder playbooks on zero-retainer building, working capital (RBI ULI), and cashflow models.</p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 border-t border-[#F1F4F8] pt-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-mono font-bold text-xs">
                2
              </span>
              <h2 className="text-lg font-bold text-[#0A2540]">
                SEBI Regulatory Disclaimer & Non-Broker Notice
              </h2>
            </div>
            <div className="p-4 rounded-xl bg-[#FFFBEB] border border-[#FDE68A] text-[#92400E] space-y-2 text-xs">
              <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-[11px]">
                <AlertTriangle className="h-4 w-4 text-[#D97706]" />
                <span>Important Regulatory Disclosure (India)</span>
              </div>
              <p>
                1008 Network is <strong>not</strong> a registered Stock Broker, Investment Adviser, Research Analyst, or Merchant Banker under the Securities and Exchange Board of India (SEBI) Regulations. Nothing contained on <code>1008.network</code> or in our playbooks constitutes financial, investment, legal, or tax advice, nor does it constitute an offer, invitation, or public solicitation to purchase or subscribe to any securities, shares, or debentures.
              </p>
              <p>
                Any co-founding, equity vesting, or partnership arrangements facilitated through the platform are strictly private commercial agreements negotiated independently between the respective founders, operators, and legal entities.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 border-t border-[#F1F4F8] pt-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-mono font-bold text-xs">
                3
              </span>
              <h2 className="text-lg font-bold text-[#0A2540]">
                Mutual Non-Disclosure Agreement (NDA) Standard
              </h2>
            </div>
            <p>
              Trust and commercial confidentiality are the bedrock of 1008 Network. By submitting information through any intake portal, all parties agree to the following Mutual NDA provisions:
            </p>
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1.5">
                <strong className="text-[#0A2540] text-xs font-mono block">A. Definition of Confidential Information</strong>
                <p className="text-xs text-[#425466]">
                  Includes all business models, technical codebases, product roadmaps, founder backgrounds, commercial contracts, financial projections, candidate compensation expectations, and proprietary workflows shared between 1008 Network, applying founders, and registered operators.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1.5">
                <strong className="text-[#0A2540] text-xs font-mono block">B. Duty of Care & Restricted Use</strong>
                <p className="text-xs text-[#425466]">
                  Each receiving party agrees to hold all Confidential Information in strict confidence and shall not disclose, duplicate, reverse engineer, or utilize such information for any purpose other than evaluating a bona fide co-building, partnership, or co-founder engagement.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1.5">
                <strong className="text-[#0A2540] text-xs font-mono block">C. Non-Circumvention & Talent Protection</strong>
                <p className="text-xs text-[#425466]">
                  Founders and companies introduced to talent through the 1008 Network agree not to circumvent the curated matchmaking framework to solicit or engage candidates outside agreed commercial parameters.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 border-t border-[#F1F4F8] pt-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-mono font-bold text-xs">
                4
              </span>
              <h2 className="text-lg font-bold text-[#0A2540]">
                Network Rules & Campaign Lifecycles
              </h2>
            </div>
            <p>
              To maintain high operational conviction and clean pipeline visibility across 1008 Network:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-xs text-[#425466]">
              <li><strong>Zero Placement / Syndicate Fees:</strong> Posting leadership requirements, registering investor profiles, or pitching startup capital needs carries zero upfront brokerage retainers.</li>
              <li><strong>Partner Network Active Curation:</strong> Co-founder and operator leadership listings are actively monitored and curated to keep talent matching pipelines responsive and eliminate stale listings.</li>
              <li><strong>Capital Network Target-Based Lifecycles:</strong> Capital campaigns and investment tranches remain active based on the venture&apos;s target funding goal and close once syndicate allocation targets are met.</li>
              <li><strong>Authentic Representations:</strong> Users represent that all submitted track records, founder pedigrees, equity ranges, and financials are truthful and accurate.</li>
              <li><strong>Community Conduct:</strong> Unsolicited sales pitches, automated bot scraping, recruitment poaching, or harassment will result in immediate permanent expulsion.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 border-t border-[#F1F4F8] pt-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-mono font-bold text-xs">
                5
              </span>
              <h2 className="text-lg font-bold text-[#0A2540]">
                Venture Studio Model & Intellectual Property (IP)
              </h2>
            </div>
            <p>
              For ventures selected for co-building inside the 1008 Venture Studio:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-xs text-[#425466]">
              <li><strong>Shared Equity Alignment:</strong> Studio co-building is governed by individualized Milestone & Equity Vesting Agreements (₹0 cash retainers).</li>
              <li><strong>IP Assignment:</strong> All custom source code, operational playbooks, physical infrastructure blueprints, and software architectures created exclusively for the venture are formally assigned to the venture entity upon agreed milestone handover.</li>
              <li><strong>Phased Handover:</strong> Engagements are designed with clear execution sprints ensuring the founding team reaches full operational autonomy.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 border-t border-[#F1F4F8] pt-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-mono font-bold text-xs">
                6
              </span>
              <h2 className="text-lg font-bold text-[#0A2540]">
                Intellectual Property & Platform Rights
              </h2>
            </div>
            <p>
              The 1008 Network name, logos, website design, UI layout, knowledge articles, and proprietary readiness evaluation frameworks are the exclusive intellectual property of 1008 Network and protected under Indian and international copyright and trademark laws. You may not scrape, clone, reproduce, or republish platform assets without written consent.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 border-t border-[#F1F4F8] pt-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-mono font-bold text-xs">
                7
              </span>
              <h2 className="text-lg font-bold text-[#0A2540]">
                Limitation of Liability & Disclaimers
              </h2>
            </div>
            <p>
              The platform and knowledge resources are provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis. 1008 Network disclaims all warranties, express or implied, including fitness for a particular commercial purpose. In no event shall 1008 Network be liable for indirect, incidental, consequential, or punitive damages arising from the commercial failure of any venture, recruitment decision, or partnership formed through the platform.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3 border-t border-[#F1F4F8] pt-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-mono font-bold text-xs">
                8
              </span>
              <h2 className="text-lg font-bold text-[#0A2540]">
                Governing Law & Dispute Resolution
              </h2>
            </div>
            <p>
              These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the <strong>laws of the Republic of India</strong>. The courts located in <strong>Delhi / Delhi NCR, India</strong> shall have exclusive jurisdiction to settle any disputes.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3 border-t border-[#F1F4F8] pt-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-mono font-bold text-xs">
                9
              </span>
              <h2 className="text-lg font-bold text-[#0A2540]">
                Contact & Inquiries
              </h2>
            </div>
            <p>
              For legal inquiries, NDA execution, or partnership compliance questions, contact our legal desk:
            </p>
            <div className="p-4 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] space-y-1 text-xs">
              <p><strong>1008 Network Legal & Partnerships Desk</strong></p>
              <p>Email: <a href="mailto:join@1008.network" className="text-[#635BFF] font-semibold hover:underline">join@1008.network</a></p>
              <p>Headquarters: Delhi NCR, India</p>
            </div>
          </section>

        </div>

        {/* Footer Navigation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#627D98]">
          <Link
            href="/privacy"
            className="text-[#635BFF] hover:underline font-semibold"
          >
            ← Review Privacy Policy & Data Governance
          </Link>
          <Link
            href="/"
            className="hover:text-[#0A2540]"
          >
            1008 Network © 2026. All rights reserved.
          </Link>
        </div>
      </div>
    </div>
  );
}

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
  const lastUpdated = "September 16, 2026";

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
      desc: "1008 Network is an operational builder and talent network—not a SEBI registered broker-dealer, investment adviser, AIF, or stock exchange.",
    },
    {
      icon: <Clock className="h-4 w-4 text-[#FF7043]" />,
      title: "Active Curated Pipeline",
      desc: "All network postings are actively curated to prevent stale listings, protect founder response rates, and safeguard intellectual property.",
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
              Legal & Compliance Framework
            </Badge>
            <span className="text-xs font-mono text-[#627D98] flex items-center gap-1">
              <Calendar className="h-3 w-3 text-[#635BFF]" /> Effective: {lastUpdated}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans leading-tight">
            Terms of Service & Mutual NDA Agreement
          </h1>

          <p className="text-base sm:text-lg text-[#425466] leading-relaxed font-normal">
            Welcome to 1008 Network. By accessing <strong>https://www.1008.network</strong>, applying to our Venture Studio, posting leadership requirements, registering as an operator in our Partner Network, or participating in the Capital Network syndicate pool, you agree to be bound by these Terms of Service and Mutual Non-Disclosure Agreement under the laws of the Republic of India.
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
                Nature of Platform & Service Pillars
              </h2>
            </div>
            <p>
              1008 Network operates as a premier <strong>turnkey venture studio, co-founder talent network, capital discovery facilitator, and operational execution partner</strong> across India. Our core service pillars comprise:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0A2540]">
                  <Building2 className="h-3.5 w-3.5 text-[#635BFF]" />
                  <span>1. Venture Studio</span>
                </div>
                <p className="text-[11px] text-[#627D98]">0-to-1 operational systems, software engineering, manufacturing plant commissioning, and supply chain execution for shared equity.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0A2540]">
                  <Users className="h-3.5 w-3.5 text-[#00A389]" />
                  <span>2. Partner Network</span>
                </div>
                <p className="text-[11px] text-[#627D98]">Curated matching connecting founders with CTOs, GTM leaders, supply chain heads, and operators for shared equity upside.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0A2540]">
                  <Sparkles className="h-3.5 w-3.5 text-[#059669]" />
                  <span>3. Capital Network</span>
                </div>
                <p className="text-[11px] text-[#627D98]">Direct capital discovery connecting high-conviction startups with angels, family offices, and operators for target-based syndicate rounds.</p>
              </div>

              <div className="p-3.5 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1">
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#0A2540]">
                  <FileText className="h-3.5 w-3.5 text-[#FF7043]" />
                  <span>4. Playbook & Knowledge</span>
                </div>
                <p className="text-[11px] text-[#627D98]">Actionable, open-access founder playbooks on zero-retainer building, working capital architectures, and cashflow models.</p>
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
                <span>Statutory Regulatory Disclosure (Republic of India)</span>
              </div>
              <p>
                1008 Network is <strong>not</strong> a registered Stock Broker, Investment Adviser (under SEBI (Investment Advisers) Regulations, 2013), Research Analyst (under SEBI (Research Analysts) Regulations, 2014), Portfolio Manager, Alternative Investment Fund (AIF under SEBI (AIF) Regulations, 2012), or Merchant Banker under the Securities and Exchange Board of India (SEBI) Act, 1992.
              </p>
              <p>
                Nothing contained on <code>1008.network</code>, in our playbooks, or in any platform communications constitutes financial, investment, legal, tax, or securities advice, nor does it constitute an offer, public solicitation, or invitation to subscribe to or purchase securities, debentures, or financial instruments.
              </p>
              <p>
                1008 Network does not manage pooled investment funds, hold custodial capital, execute financial transactions on behalf of users, or offer any guaranteed investment returns. Any angel co-investment, equity vesting, or partnership arrangements are private commercial contracts negotiated and executed directly between the respective founders, investors, and incorporated legal entities following independent due diligence.
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
              Commercial confidentiality and trust are foundational to 1008 Network. By accessing the platform, submitting requirements, or enrolling in our networks, all parties agree to the following legally binding Mutual Non-Disclosure terms:
            </p>
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1.5">
                <strong className="text-[#0A2540] text-xs font-mono block">A. Definition of Confidential Information</strong>
                <p className="text-xs text-[#425466]">
                  &quot;Confidential Information&quot; includes all business plans, financial projections, customer discovery logs, software architectures, source code, candidate resumes, compensation expectations, syndicate allocations, and proprietary domain methodologies shared between 1008 Network, founders, investors, and operators.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1.5">
                <strong className="text-[#0A2540] text-xs font-mono block">B. Standard of Care & Restricted Use</strong>
                <p className="text-xs text-[#425466]">
                  The Receiving Party agrees to protect Confidential Information using the same degree of care it uses for its own confidential assets (and not less than reasonable care). Confidential Information shall be used exclusively for evaluating bona fide co-building, talent partnership, or direct angel investment opportunities.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1.5">
                <strong className="text-[#0A2540] text-xs font-mono block">C. Non-Circumvention (12-Month Covenant)</strong>
                <p className="text-xs text-[#425466]">
                  Founders, companies, and investors introduced through 1008 Network agree not to circumvent the platform to directly or indirectly solicit, negotiate, or engage introduced talent or deal allocations outside the facilitated framework for a period of 12 months following formal introduction.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1.5">
                <strong className="text-[#0A2540] text-xs font-mono block">D. Exclusions</strong>
                <p className="text-xs text-[#425466]">
                  Confidential Information does not include information that: (i) is or becomes publicly known through no breach by Receiving Party; (ii) was already known prior to disclosure without restriction; or (iii) is required to be disclosed by applicable Indian law or court subpoena with prompt advance notice.
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
                Venture Studio Intellectual Property (IP) Framework
              </h2>
            </div>
            <p>
              For ventures selected for co-building inside the 1008 Venture Studio:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-xs text-[#425466]">
              <li><strong>Zero Retainer Alignment:</strong> Studio co-building is governed by individualized Milestone & Equity Vesting Agreements (₹0 cash retainers).</li>
              <li><strong>Complete Venture IP Assignment:</strong> All bespoke source code, UI/UX designs, operational playbooks, factory blueprints, and trade secrets developed exclusively for the venture are formally assigned and transferred to the venture entity upon agreed milestone gates.</li>
              <li><strong>Studio Background IP:</strong> 1008 Network retains ownership of its pre-existing foundational developer tooling, scaffolding libraries, readiness diagnostic algorithms, and shared operational templates, granting the venture a perpetual, non-exclusive license to use such embedded components.</li>
              <li><strong>Operational Handover:</strong> Sprints are structured to transition full operational independence, system controls, and IP repositories to the founding team.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 border-t border-[#F1F4F8] pt-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-mono font-bold text-xs">
                5
              </span>
              <h2 className="text-lg font-bold text-[#0A2540]">
                User Representations & Platform Rules
              </h2>
            </div>
            <p>
              By utilizing 1008 Network, you warrant and agree that:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-xs text-[#425466]">
              <li><strong>Truthful Information:</strong> All submitted track records, professional experience, cap-table structures, and financial metrics are authentic, accurate, and not misleading.</li>
              <li><strong>Authority:</strong> You possess the legal capacity and authority under Indian law (or your jurisdiction of incorporation) to enter into these binding terms.</li>
              <li><strong>Prohibited Conduct:</strong> You shall not: (a) employ automated scrapers, bots, or data harvesting scripts; (b) submit malicious payloads, spam, or false opportunity postings; (c) poach, harass, or solicit platform users for unauthorized commercial marketing; or (d) violate applicable intellectual property rights.</li>
              <li><strong>Sanctions:</strong> Any violation of these terms will result in immediate termination of platform access, removal of active listings, and legal recourse where appropriate.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 border-t border-[#F1F4F8] pt-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-mono font-bold text-xs">
                6
              </span>
              <h2 className="text-lg font-bold text-[#0A2540]">
                Intellectual Property Rights & Trademarks
              </h2>
            </div>
            <p>
              The 1008 Network brand, logos, typography, website layout, readiness evaluation matrices, diagnostic logic, and knowledge articles are the exclusive intellectual property of 1008 Network, protected under the Trade Marks Act, 1999 and the Copyright Act, 1957 of India. No portion of the platform may be cloned, scraped, reverse-engineered, or republished without prior written authorization.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 border-t border-[#F1F4F8] pt-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-mono font-bold text-xs">
                7
              </span>
              <h2 className="text-lg font-bold text-[#0A2540]">
                Limitation of Liability & Intermediary Safe Harbor
              </h2>
            </div>
            <p>
              The platform and all playbooks are provided strictly on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis without warranties of any kind. 
            </p>
            <p>
              To the maximum extent permitted under Section 79 of the Information Technology Act, 2000 and applicable Indian law: (i) 1008 Network shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages; (ii) 1008 Network does not warrant commercial success, revenue generation, candidate suitability, or investor fulfillment; and (iii) all users are solely responsible for conducting independent background checks, legal audits, and technical verification before signing definitive agreements.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3 border-t border-[#F1F4F8] pt-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-mono font-bold text-xs">
                8
              </span>
              <h2 className="text-lg font-bold text-[#0A2540]">
                Governing Law & Dispute Resolution (Arbitration)
              </h2>
            </div>
            <p>
              These Terms, the Mutual NDA, and any dispute arising out of or related to platform usage shall be governed by and construed in accordance with the <strong>substantive laws of the Republic of India</strong>.
            </p>
            <p>
              Any dispute, controversy, or claim arising out of or relating to these Terms shall be referred to and finally resolved by <strong>binding arbitration in accordance with the Arbitration and Conciliation Act, 1996</strong>. The arbitration shall be conducted by a sole arbitrator mutually appointed by the parties. The seat and venue of arbitration shall be <strong>New Delhi, India</strong>, and the proceedings shall be conducted in English. Subject to arbitration, the courts of competent jurisdiction in <strong>Delhi / Delhi NCR, India</strong> shall have exclusive jurisdiction.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3 border-t border-[#F1F4F8] pt-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-mono font-bold text-xs">
                9
              </span>
              <h2 className="text-lg font-bold text-[#0A2540]">
                Electronic Contracting, Severability & Entire Agreement
              </h2>
            </div>
            <p>
              In terms of the Information Technology Act, 2000, this document is an electronic record generated by a computer system and does not require physical or digital signatures. If any provision of these Terms is deemed unlawful, void, or unenforceable, that provision shall be deemed severable and shall not affect the validity and enforceability of remaining provisions. These Terms constitute the entire agreement between the user and 1008 Network concerning platform access.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3 border-t border-[#F1F4F8] pt-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-mono font-bold text-xs">
                10
              </span>
              <h2 className="text-lg font-bold text-[#0A2540]">
                Legal & Compliance Desk
              </h2>
            </div>
            <p>
              For legal inquiries, NDA clarifications, intellectual property questions, or compliance notices, contact our legal desk:
            </p>
            <div className="p-4 rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] space-y-1 text-xs">
              <p><strong>1008 Network Legal, Compliance & Partnerships Desk</strong></p>
              <p>Email: <a href="mailto:join@1008.network" className="text-[#635BFF] font-semibold hover:underline">join@1008.network</a></p>
              <p>Headquarters: Delhi NCR, India (Pan-India Operations)</p>
            </div>
          </section>

        </div>

        {/* Footer Navigation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#627D98]">
          <Link
            href="/privacy"
            className="text-[#635BFF] hover:underline font-semibold"
          >
            ← Review Privacy Policy & DPDP Data Governance
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

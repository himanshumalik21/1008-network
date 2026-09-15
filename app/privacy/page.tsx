import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/brand/Badge";
import {
  ShieldCheck,
  Lock,
  FileText,
  CheckCircle2,
  Mail,
  ArrowLeft,
  Calendar,
  Globe,
  Database,
  UserCheck,
  Clock,
  EyeOff,
  Server,
  KeyRound,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | 1008 Network",
  description:
    "Privacy Policy and Data Protection Notice for 1008 Network. Learn how we safeguard founder theses, talent credentials, and operational data under Indian DPDP Act 2023 and global standards.",
  alternates: {
    canonical: "https://www.1008.network/privacy",
  },
};

export default function PrivacyPage() {
  const lastUpdated = "September 15, 2026";

  const keyHighlights = [
    {
      icon: <Lock className="h-4 w-4 text-[#635BFF]" />,
      title: "Mutual NDA from Day 1",
      desc: "All founder business theses, technical architectures, and applicant resumes are held in strict commercial confidence.",
    },
    {
      icon: <EyeOff className="h-4 w-4 text-[#059669]" />,
      title: "Zero Data Brokerage",
      desc: "We never sell, rent, monetize, or trade your personal or commercial data with third-party brokers or advertisers.",
    },
    {
      icon: <Clock className="h-4 w-4 text-[#00A389]" />,
      title: "Active Listing Lifecycle",
      desc: "Partner network listings and inactive profile data are automatically archived or purged to prevent stale data retention.",
    },
    {
      icon: <ShieldCheck className="h-4 w-4 text-[#635BFF]" />,
      title: "DPDP Act 2023 Compliant",
      desc: "Fully aligned with India's Digital Personal Data Protection Act 2023 and international data privacy principles.",
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
              Data Privacy & Governance
            </Badge>
            <span className="text-xs font-mono text-[#627D98] flex items-center gap-1">
              <Calendar className="h-3 w-3 text-[#635BFF]" /> Effective: {lastUpdated}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans leading-tight">
            Privacy Policy & Data Notice
          </h1>

          <p className="text-base sm:text-lg text-[#425466] leading-relaxed font-normal">
            At 1008 Network (<strong>&quot;1008 Network&quot;</strong>, <strong>&quot;we&quot;</strong>, <strong>&quot;us&quot;</strong>, or <strong>&quot;our&quot;</strong>), we engineer high-conviction partnerships, turnkey operations, and co-founder matchmaking for shared equity. Protecting the intellectual property, commercial secrets, and personal information of founders and operators is foundational to everything we do.
          </p>
        </div>

        {/* Executive Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {keyHighlights.map((hl, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] space-y-1.5 shadow-2xs"
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-lg bg-white border border-[#E2E8F0] shadow-2xs">
                  {hl.icon}
                </div>
                <h3 className="text-xs font-bold text-[#0A2540] uppercase tracking-wider font-mono">
                  {hl.title}
                </h3>
              </div>
              <p className="text-xs text-[#425466] leading-relaxed pl-8">
                {hl.desc}
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
                Scope & Regulatory Compliance
              </h2>
            </div>
            <p>
              This Privacy Policy applies to all services, forms, interactive portals, and communications provided through <strong>https://www.1008.network</strong> (the &quot;Platform&quot;). We adhere strictly to the <strong>Digital Personal Data Protection Act, 2023 (India)</strong>, the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and international data protection best practices including the General Data Protection Regulation (GDPR) for international cross-border founders.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 border-t border-[#F1F4F8] pt-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-mono font-bold text-xs">
                2
              </span>
              <h2 className="text-lg font-bold text-[#0A2540]">
                Information We Collect
              </h2>
            </div>
            <p>
              We collect information solely to provide venture co-building, partner matching, and operational support. We collect data across two categories:
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-2">
                <h3 className="font-bold text-[#0A2540] text-xs uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Database className="h-3.5 w-3.5 text-[#635BFF]" /> A. Information You Voluntarily Provide
                </h3>
                <ul className="space-y-1.5 pl-4 list-disc text-xs text-[#425466]">
                  <li><strong>Founder & Studio Applications:</strong> Name, contact email, phone number, enterprise description, sector, operational bottleneck, capital status, and current entity stage.</li>
                  <li><strong>Partner Network Requirements:</strong> Title, required co-founder/operator role (CTO, GTM Lead, Supply Chain Lead), location, equity offering percentage, founder pedigree, and project thesis.</li>
                  <li><strong>Talent & Operator Profiles:</strong> Full name, verified contact info, years of domain experience, past companies/track record, LinkedIn profile URL, core technical skills, and target equity expectation.</li>
                  <li><strong>General Communications & Inquiries:</strong> Messages, feedback, expressions of interest (EOI), and direct correspondence sent to <code>join@1008.network</code>.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-2">
                <h3 className="font-bold text-[#0A2540] text-xs uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Server className="h-3.5 w-3.5 text-[#00A389]" /> B. Automatically Collected Technical Metadata
                </h3>
                <ul className="space-y-1.5 pl-4 list-disc text-xs text-[#425466]">
                  <li><strong>Device & Network Identifiers:</strong> IP addresses (anonymized/hashed), browser type, device operating system, referring URL, and session timestamps.</li>
                  <li><strong>Aggregated Analytics:</strong> We use Google Analytics (GA4) with IP anonymization enabled to inspect aggregate page interaction metrics, preventing individual visitor identification.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 border-t border-[#F1F4F8] pt-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-mono font-bold text-xs">
                3
              </span>
              <h2 className="text-lg font-bold text-[#0A2540]">
                Purpose & Legal Basis of Processing
              </h2>
            </div>
            <p>
              Under Indian DPDP Act provisions, your data is processed exclusively for explicit, legitimate, and consented commercial purposes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2 p-3 rounded-xl bg-white border border-[#E6E8EB]">
                <CheckCircle2 className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                <span className="text-xs">Curating mutual, high-alignment introductions between founders and vetted co-founders.</span>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-xl bg-white border border-[#E6E8EB]">
                <CheckCircle2 className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                <span className="text-xs">Evaluating venture readiness, tech architecture, and operational feasibility for the 1008 Studio.</span>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-xl bg-white border border-[#E6E8EB]">
                <CheckCircle2 className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                <span className="text-xs">Protecting our platform against bots, abuse, spam submissions, and unauthorized automated scraping.</span>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-xl bg-white border border-[#E6E8EB]">
                <CheckCircle2 className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                <span className="text-xs">Providing customer support and responding directly to inquiries sent to <code>join@1008.network</code>.</span>
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
                Form Security, Transmission & Anti-Spam Architecture
              </h2>
            </div>
            <p>
              When you submit an application, post a requirement, or register in our talent pool:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-xs text-[#425466]">
              <li><strong>End-to-End Encryption:</strong> All form data is encrypted in transit using Transport Layer Security (TLS 1.3 / SSL).</li>
              <li><strong>Secure Email Dispatch:</strong> Form submissions are processed securely via verified enterprise endpoints and dispatched directly to <code>join@1008.network</code> for private internal review.</li>
              <li><strong>Automated Threat & Spam Defense:</strong> Our forms employ client-side rate limiting, client-side input sanitization, and hidden honeypot spam traps to neutralize malicious injection attacks without collecting intrusive third-party biometric tracking data.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 border-t border-[#F1F4F8] pt-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-mono font-bold text-xs">
                5
              </span>
              <h2 className="text-lg font-bold text-[#0A2540]">
                Active Listing Lifecycle & Data Retention Policy
              </h2>
            </div>
            <p>
              To maintain the highest standards of pipeline freshness and respect your right to data minimization:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-xs text-[#425466]">
              <li><strong>Automated Expiry:</strong> All public startup requirements on the Partner Network follow an active curation lifecycle with automated archiving. Retired postings are removed from active directory boards to prevent stale data.</li>
              <li><strong>Archival & Deletion:</strong> Inactive applicant records and studio intake notes that do not proceed to an active engagement are permanently purged or anonymized within 12 months.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3 border-t border-[#F1F4F8] pt-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-mono font-bold text-xs">
                6
              </span>
              <h2 className="text-lg font-bold text-[#0A2540]">
                Information Sharing & Confidential Introductions
              </h2>
            </div>
            <p>
              We do not sell, barter, monetize, or disclose your personal information to third parties for advertising or unsolicited commercial marketing. Information is disclosed strictly in the following circumstances:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-xs text-[#425466]">
              <li><strong>Consented Partner Introductions:</strong> Contact information is shared with prospective co-founders, advisors, or venture partners only after mutual confirmation and consent under our Mutual NDA framework.</li>
              <li><strong>Essential Infrastructure Providers:</strong> Trusted technical service providers (e.g., Vercel hosting, Google Cloud Infrastructure, Web3Forms) under strict non-disclosure obligations.</li>
              <li><strong>Legal Compliance:</strong> When strictly mandated by applicable law, court subpoena, or authorized statutory body in India.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 border-t border-[#F1F4F8] pt-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-mono font-bold text-xs">
                7
              </span>
              <h2 className="text-lg font-bold text-[#0A2540]">
                Your Rights as a Data Principal (DPDP & GDPR)
              </h2>
            </div>
            <p>
              You maintain full ownership of your personal and commercial data. You have the right to:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1">
                <strong className="text-[#0A2540] text-xs font-mono block">Right to Access & Summary</strong>
                <span className="text-[11px] text-[#425466]">Request a copy of all personal information held about you.</span>
              </div>
              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1">
                <strong className="text-[#0A2540] text-xs font-mono block">Right to Correction & Update</strong>
                <span className="text-[11px] text-[#425466]">Request corrections to any inaccurate or outdated information.</span>
              </div>
              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1">
                <strong className="text-[#0A2540] text-xs font-mono block">Right to Erasure (Forget Me)</strong>
                <span className="text-[11px] text-[#425466]">Request immediate removal of your talent profile or requirements.</span>
              </div>
              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1">
                <strong className="text-[#0A2540] text-xs font-mono block">Right to Withdraw Consent</strong>
                <span className="text-[11px] text-[#425466]">Revoke processing consent at any time without retroactive penalty.</span>
              </div>
            </div>
            <p className="pt-2 text-xs text-[#627D98]">
              To exercise any of these rights, email our team at <strong>join@1008.network</strong>. All requests are processed within 72 hours.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3 border-t border-[#F1F4F8] pt-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-mono font-bold text-xs">
                8
              </span>
              <h2 className="text-lg font-bold text-[#0A2540]">
                Data Grievance Redressal & Contact Coordinates
              </h2>
            </div>
            <p>
              In accordance with the Information Technology Act 2000 and the DPDP Act 2023, the details of our Data Grievance Redressal mechanism are set out below:
            </p>

            <div className="p-5 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] space-y-3 mt-3">
              <div className="flex items-center gap-2 text-[#0A2540] font-bold text-sm">
                <Globe className="h-4 w-4 text-[#635BFF]" />
                <span>1008 Network Governance & Grievance Cell</span>
              </div>
              <div className="text-xs space-y-1 text-[#425466]">
                <p><strong>Entity:</strong> 1008 Network</p>
                <p><strong>Primary Operations Hub:</strong> Delhi NCR, India (Pan-India Operational Footprint)</p>
                <p><strong>Designated Grievance Email:</strong> <a href="mailto:join@1008.network" className="text-[#635BFF] font-semibold hover:underline">join@1008.network</a></p>
                <p><strong>Response Timeline:</strong> Within 24–48 business hours</p>
              </div>
            </div>
          </section>

        </div>

        {/* Footer Navigation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#627D98]">
          <Link
            href="/terms"
            className="text-[#635BFF] hover:underline font-semibold"
          >
            Read Terms of Service & Mutual NDA Agreement →
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

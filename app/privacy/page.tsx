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
  const lastUpdated = "September 16, 2026";

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
              Data Privacy & Governance Notice
            </Badge>
            <span className="text-xs font-mono text-[#627D98] flex items-center gap-1">
              <Calendar className="h-3 w-3 text-[#635BFF]" /> Effective: {lastUpdated}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans leading-tight">
            Privacy Policy & Data Notice
          </h1>

          <p className="text-base sm:text-lg text-[#425466] leading-relaxed font-normal">
            At 1008 Network (<strong>&quot;1008 Network&quot;</strong>, <strong>&quot;we&quot;</strong>, <strong>&quot;us&quot;</strong>, or <strong>&quot;our&quot;</strong>), we operate as a Data Fiduciary under the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act, India)</strong>. Protecting the commercial secrets, trade ideas, candidate profiles, and personal data of founders, operators, and investors is core to our operational integrity.
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
                Scope & Statutory Governance
              </h2>
            </div>
            <p>
              This Privacy Policy applies to digital personal data collected and processed through <strong>https://www.1008.network</strong> (the &quot;Platform&quot;). We comply with:
            </p>
            <ul className="space-y-1.5 pl-4 list-disc text-xs text-[#425466]">
              <li>The <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> of the Republic of India;</li>
              <li>The <strong>Information Technology Act, 2000</strong> and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011;</li>
              <li>Global data protection best practices including the General Data Protection Regulation (GDPR) for international and cross-border users.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 border-t border-[#F1F4F8] pt-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-mono font-bold text-xs">
                2
              </span>
              <h2 className="text-lg font-bold text-[#0A2540]">
                Categories of Digital Personal Data Collected
              </h2>
            </div>
            <p>
              We collect data strictly necessary to fulfill venture co-building, talent matchmaking, and capital discovery services:
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-2">
                <h3 className="font-bold text-[#0A2540] text-xs uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Database className="h-3.5 w-3.5 text-[#635BFF]" /> A. Data Provided Voluntarily by You
                </h3>
                <ul className="space-y-1.5 pl-4 list-disc text-xs text-[#425466]">
                  <li><strong>Founder & Venture Studio Intake:</strong> Full name, work email, phone number, entity stage, sector, operational bottlenecks, revenue run-rate, and deck URLs.</li>
                  <li><strong>Partner Network & Talent Pool:</strong> Full name, email, phone, LinkedIn profile URL, current company & role, years of domain experience, primary functional capability, target equity expectations, and executive bio.</li>
                  <li><strong>Capital Network Investor Profiles:</strong> Full name, accredited email, phone, investor category (Angel, Family Office, Corporate CXO), target deployment tier (₹2L–₹5Cr+), risk appetite, and sector mandates.</li>
                  <li><strong>General Inquiries:</strong> Name, work email, organization, inquiry category, and message payload sent via contact or diagnostic forms.</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-2">
                <h3 className="font-bold text-[#0A2540] text-xs uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Server className="h-3.5 w-3.5 text-[#00A389]" /> B. Technical Metadata & Analytics
                </h3>
                <ul className="space-y-1.5 pl-4 list-disc text-xs text-[#425466]">
                  <li><strong>Device & Telemetry Data:</strong> Browser type, operating system, anonymized IP addresses, session duration, and page view sequences.</li>
                  <li><strong>Privacy-Conscious Analytics:</strong> We use Google Analytics 4 (GA4) with IP anonymization to evaluate aggregate platform usage patterns without profiling or tracking individual visitors across the web.</li>
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
                Legal Grounds for Processing (Sections 4 & 7 of DPDP Act)
              </h2>
            </div>
            <p>
              We process personal data solely on lawful grounds under Indian data protection law:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-start gap-2 p-3 rounded-xl bg-white border border-[#E6E8EB]">
                <CheckCircle2 className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                <span className="text-xs"><strong>Specified Consent:</strong> Explicit, affirmative consent given during form submission to evaluate co-building or matching opportunities.</span>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-xl bg-white border border-[#E6E8EB]">
                <CheckCircle2 className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                <span className="text-xs"><strong>Legitimate Uses:</strong> Responding to voluntary inquiries and taking steps requested by the data principal prior to entering a contract.</span>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-xl bg-white border border-[#E6E8EB]">
                <CheckCircle2 className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                <span className="text-xs"><strong>Security & Integrity:</strong> Enforcing rate limiting, neutralizing spam bots, and protecting against distributed attacks.</span>
              </div>
              <div className="flex items-start gap-2 p-3 rounded-xl bg-white border border-[#E6E8EB]">
                <CheckCircle2 className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                <span className="text-xs"><strong>Legal Compliance:</strong> Meeting statutory requirements under Indian law or court orders.</span>
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
                Reasonable Security Safeguards (Section 8(5) DPDP Act)
              </h2>
            </div>
            <p>
              In accordance with Section 8(5) of the DPDP Act 2023, 1008 Network implements technical and organizational measures to prevent personal data breaches:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-xs text-[#425466]">
              <li><strong>Transport Layer Encryption:</strong> All data transmitted between your browser and our servers is encrypted using modern TLS 1.3 cryptographic protocols.</li>
              <li><strong>Strict Access Control:</strong> Access to confidential venture proposals and talent records is restricted to authorized partners bound by non-disclosure agreements.</li>
              <li><strong>Content Security Policy (CSP):</strong> Next.js security headers with strict script, frame, and connect constraints to prevent cross-site scripting (XSS) and clickjacking.</li>
              <li><strong>Anti-Abuse Architecture:</strong> Sliding-window rate limiting, client input sanitization, and hidden honeypot spam traps neutralize automated attacks.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 border-t border-[#F1F4F8] pt-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-mono font-bold text-xs">
                5
              </span>
              <h2 className="text-lg font-bold text-[#0A2540]">
                Data Retention & Automated Archiving
              </h2>
            </div>
            <p>
              We enforce strict data minimization principles under Indian law:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-xs text-[#425466]">
              <li><strong>Active Partner Postings:</strong> Public opportunity listings are curated with active lifecycles to eliminate stale listings.</li>
              <li><strong>Archival Schedule:</strong> Talent and investor registration profiles that remain inactive without active matchmaking engagements are archived and permanently purged within 12 months.</li>
              <li><strong>Right to Immediate Erasure:</strong> Any user may request immediate erasure of their submitted profile at any time by emailing <code>join@1008.network</code>.</li>
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
              We do not sell, barter, lease, or monetize personal data with commercial brokers or third-party advertisers. Data is shared exclusively under the following strict conditions:
            </p>
            <ul className="space-y-2 pl-4 list-disc text-xs text-[#425466]">
              <li><strong>Consensual Introductions:</strong> Contact information is shared with prospective co-founders, advisors, or venture partners only after mutual consent under our Mutual NDA framework.</li>
              <li><strong>Infrastructure Processors:</strong> Secure cloud infrastructure providers (Vercel, Google Cloud, Web3Forms) operating under contractual confidentiality and data processing agreements.</li>
              <li><strong>Statutory Mandate:</strong> Where required by valid court order, regulatory subpoena, or competent statutory authority in India.</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section className="space-y-3 border-t border-[#F1F4F8] pt-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-mono font-bold text-xs">
                7
              </span>
              <h2 className="text-lg font-bold text-[#0A2540]">
                Rights of Data Principals (Sections 11–14 DPDP Act 2023)
              </h2>
            </div>
            <p>
              As a Data Principal under Indian law, you possess the following statutory rights:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1">
                <strong className="text-[#0A2540] text-xs font-mono block">1. Right to Access & Summary</strong>
                <span className="text-[11px] text-[#425466]">Request a summary of personal data being processed and the identities of any data fiduciaries with whom it has been shared.</span>
              </div>
              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1">
                <strong className="text-[#0A2540] text-xs font-mono block">2. Right to Correction & Erasure</strong>
                <span className="text-[11px] text-[#425466]">Request correction of inaccurate data, completion of incomplete records, or permanent erasure of personal data.</span>
              </div>
              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1">
                <strong className="text-[#0A2540] text-xs font-mono block">3. Right of Grievance Redressal</strong>
                <span className="text-[11px] text-[#425466]">Access readily available grievance redressal mechanisms to resolve questions or complaints regarding data processing.</span>
              </div>
              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E6E8EB] space-y-1">
                <strong className="text-[#0A2540] text-xs font-mono block">4. Right to Nominate</strong>
                <span className="text-[11px] text-[#425466]">Nominate an individual who shall exercise your rights as a Data Principal in the event of death or incapacity.</span>
              </div>
            </div>
            <p className="pt-2 text-xs text-[#627D98]">
              To exercise any of these statutory rights, submit a written request to our Grievance Desk at <strong>join@1008.network</strong>. All requests are acknowledged within 24 hours and completed within 72 hours.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3 border-t border-[#F1F4F8] pt-8">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-lg bg-[#635BFF]/10 text-[#635BFF] flex items-center justify-center font-mono font-bold text-xs">
                8
              </span>
              <h2 className="text-lg font-bold text-[#0A2540]">
                Data Protection Officer & Grievance Redressal Mechanism
              </h2>
            </div>
            <p>
              In compliance with Section 10 and Section 13 of the DPDP Act 2023 and the Information Technology Act 2000, our designated Grievance Redressal Officer coordinates all privacy inquiries and complaints:
            </p>

            <div className="p-5 rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] space-y-3 mt-3">
              <div className="flex items-center gap-2 text-[#0A2540] font-bold text-sm">
                <Globe className="h-4 w-4 text-[#635BFF]" />
                <span>1008 Network Grievance Redressal Cell</span>
              </div>
              <div className="text-xs space-y-1 text-[#425466]">
                <p><strong>Designation:</strong> Data Protection & Grievance Officer</p>
                <p><strong>Entity:</strong> 1008 Network (1008.network)</p>
                <p><strong>Headquarters:</strong> Delhi NCR, India (Operating Pan-India)</p>
                <p><strong>Direct Grievance Email:</strong> <a href="mailto:join@1008.network" className="text-[#635BFF] font-semibold hover:underline">join@1008.network</a></p>
                <p><strong>Statutory SLA:</strong> Acknowledgment within 24–48 business hours; complete resolution within 30 days.</p>
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

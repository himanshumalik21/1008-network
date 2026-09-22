"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  Sparkles,
  ArrowRight,
  TrendingDown,
  Layers,
  ShieldAlert,
  Terminal,
  Zap,
  Building2,
  Users,
  Database,
  Briefcase,
  HelpCircle,
  Square,
} from "lucide-react";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { FounderCashDrainGraphic } from "@/components/knowledge/FounderCashDrainGraphic";
import { TurnaroundPlaybookPhases } from "@/components/knowledge/TurnaroundPlaybookPhases";
import { StructuralTrapsSection } from "@/components/knowledge/StructuralTrapsSection";
import { ULICreditArchitectureGraphic } from "@/components/knowledge/ULICreditArchitectureGraphic";
import { CreditPlaybookPhases } from "@/components/knowledge/CreditPlaybookPhases";
import { LenderRejectionTrapsSection } from "@/components/knowledge/LenderRejectionTrapsSection";
import { CashFlowVersusHypeGraphic } from "@/components/knowledge/CashFlowVersusHypeGraphic";
import { EssentialBusinessTrapsSection } from "@/components/knowledge/EssentialBusinessTrapsSection";
import { RealBusinessPlaybookPhases } from "@/components/knowledge/RealBusinessPlaybookPhases";
import { IdeaValidationGraphic } from "@/components/knowledge/IdeaValidationGraphic";
import { ValidationPlaybookPhases } from "@/components/knowledge/ValidationPlaybookPhases";
import { CoFounderEquitySplitGraphic } from "@/components/knowledge/CoFounderEquitySplitGraphic";
import { CoFounderCapTableTrapsSection } from "@/components/knowledge/CoFounderCapTableTrapsSection";
import { CoFounderGovernancePhases } from "@/components/knowledge/CoFounderGovernancePhases";
import { PCBHadwareCoreGraphic } from "@/components/knowledge/PCBHadwareCoreGraphic";
import { TechnicalTextilesGraphic } from "@/components/knowledge/TechnicalTextilesGraphic";
import { MoldedPulpPackagingGraphic } from "@/components/knowledge/MoldedPulpPackagingGraphic";
import { TissuePaperConvertingGraphic } from "@/components/knowledge/TissuePaperConvertingGraphic";
import { EVFastChargingJVGraphic } from "@/components/knowledge/EVFastChargingJVGraphic";

interface ArticleContentRendererProps {
  content: string;
}

export function ArticleContentRenderer({ content }: ArticleContentRendererProps) {
  const [copiedCodeIndex, setCopiedCodeIndex] = useState<number | null>(null);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedCodeIndex(index);
    setTimeout(() => setCopiedCodeIndex(null), 2000);
  };

  // Helper to parse inline markdown (bold, code, links)
  const renderInline = (text: string): React.ReactNode => {
    if (!text) return null;

    const parts: React.ReactNode[] = [];
    let current = text;
    let key = 0;

    const regex = /(\*\*([^*]+)\*\*|`([^`]+)`|\[([^\]]+)\]\(([^)]+)\))/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(current)) !== null) {
      if (match.index > lastIndex) {
        parts.push(current.substring(lastIndex, match.index));
      }

      if (match[2]) {
        // Bold
        parts.push(
          <strong key={key++} className="font-bold text-[#0A2540]">
            {match[2]}
          </strong>
        );
      } else if (match[3]) {
        // Inline code
        parts.push(
          <code
            key={key++}
            className="px-1.5 py-0.5 mx-0.5 text-xs font-mono font-medium rounded bg-[#F1F5F9] text-[#635BFF] border border-[#E2E8F0]"
          >
            {match[3]}
          </code>
        );
      } else if (match[4] && match[5]) {
        // Link
        parts.push(
          <Link
            key={key++}
            href={match[5]}
            className="text-[#635BFF] font-semibold hover:underline inline-flex items-center gap-0.5"
          >
            {match[4]}
          </Link>
        );
      }

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < current.length) {
      parts.push(current.substring(lastIndex));
    }

    return parts.length > 0 ? parts : text;
  };

  // Split content into blocks safely
  const blocks = content ? content.split(/\n\n+/) : [];

  let codeBlockCount = 0;

  return (
    <div className="article-rendered-content space-y-8 text-[#425466] leading-relaxed font-sans">
      {blocks.map((block, idx) => {
        const trimmed = block.trim();

        if (!trimmed) return null;

        // Check for Horizontal Rule
        if (trimmed === "---" || trimmed === "***") {
          return (
            <hr
              key={idx}
              className="my-10 border-t border-[#E6E8EB] border-dashed"
            />
          );
        }

        // Check for Heading 2 (## Heading)
        if (trimmed.startsWith("## ")) {
          const headingText = trimmed.replace("## ", "").trim();

          // If heading is "The Three Structural Traps That Break Early Businesses" (Day 1)
          if (headingText.includes("The Three Structural Traps")) {
            return (
              <div key={idx} className="pt-6 pb-2 space-y-4">
                <div className="border-b border-[#E6E8EB] pb-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight flex items-center gap-2.5">
                    <span className="w-2 h-6 rounded-full bg-[#635BFF] inline-block" />
                    {headingText}
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-[#425466] leading-relaxed">
                  When a business stalls, founders often believe they need a bigger marketing budget or a fresh round of angel investment. In reality, the breakdown is almost always structural:
                </p>
                <StructuralTrapsSection />
              </div>
            );
          }

          // If heading is "The Three Deadly Pitfalls Struggling Founders Must Avoid" (Day 3)
          if (headingText.includes("The Three Deadly Pitfalls")) {
            return (
              <div key={idx} className="pt-6 pb-2 space-y-4">
                <div className="border-b border-[#E6E8EB] pb-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight flex items-center gap-2.5">
                    <span className="w-2 h-6 rounded-full bg-[#635BFF] inline-block" />
                    {headingText}
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-[#425466] leading-relaxed">
                  When early-stage businesses stall, the failure is rarely bad luck. It is rooted in three common structural blunders:
                </p>
                <EssentialBusinessTrapsSection />
              </div>
            );
          }

          // If heading is "Why Early Businesses Get Rejected by Institutional Lenders" (Day 2)
          if (headingText.includes("Why Early Businesses Get Rejected")) {
            return (
              <div key={idx} className="pt-6 pb-2 space-y-4">
                <div className="border-b border-[#E6E8EB] pb-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight flex items-center gap-2.5">
                    <span className="w-2 h-6 rounded-full bg-[#635BFF] inline-block" />
                    {headingText}
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-[#425466] leading-relaxed">
                  Under modern digital lending algorithms, loan rejections rarely stem from a lack of business ambition. They stem from data mismatches across three core touchpoints:
                </p>
                <LenderRejectionTrapsSection />
              </div>
            );
          }

          // If heading is "The 1008 Zero-Retainer Playbook: How to Build with Venture Discipline" (Day 1)
          if (headingText.includes("The 1008 Zero-Retainer Playbook")) {
            return (
              <div key={idx} className="pt-6 pb-2 space-y-4">
                <div className="border-b border-[#E6E8EB] pb-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight flex items-center gap-2.5">
                    <span className="w-2 h-6 rounded-full bg-[#635BFF] inline-block" />
                    {headingText}
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-[#425466] leading-relaxed">
                  Whether you are launching your first company or restructuring a business under pressure, you must transition from <em>passive spending</em> to <em>active co-building</em>.
                </p>
                <TurnaroundPlaybookPhases />
              </div>
            );
          }

          // If heading is "The 1008 Playbook: Building an Unglamorous, Highly Profitable Enterprise" (Day 3)
          if (headingText.includes("The 1008 Playbook: Building an Unglamorous")) {
            return (
              <div key={idx} className="pt-6 pb-2 space-y-4">
                <div className="border-b border-[#E6E8EB] pb-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight flex items-center gap-2.5">
                    <span className="w-2 h-6 rounded-full bg-[#635BFF] inline-block" />
                    {headingText}
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-[#425466] leading-relaxed">
                  To transition from a struggling concept to a cash-generative, scalable enterprise, execute this 4-phase ground-level playbook:
                </p>
                <RealBusinessPlaybookPhases />
              </div>
            );
          }

          // If heading is "The 1008 30-Day Pre-Launch Validation Playbook" (Day 4)
          if (headingText.includes("30-Day Pre-Launch Validation Playbook") || headingText.includes("Pre-Launch Validation Playbook")) {
            return (
              <div key={idx} className="pt-6 pb-2 space-y-4">
                <div className="border-b border-[#E6E8EB] pb-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight flex items-center gap-2.5">
                    <span className="w-2 h-6 rounded-full bg-[#635BFF] inline-block" />
                    {headingText}
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-[#425466] leading-relaxed">
                  Follow this structured, low-risk roadmap to validate genuine market pull before committing capital:
                </p>
                <ValidationPlaybookPhases />
              </div>
            );
          }

          // If heading is "The 1008 Digital Credit Playbook: From Cash Starved to Bankable" (Day 2)
          if (headingText.includes("The 1008 Digital Credit Playbook")) {
            return (
              <div key={idx} className="pt-6 pb-2 space-y-4">
                <div className="border-b border-[#E6E8EB] pb-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight flex items-center gap-2.5">
                    <span className="w-2 h-6 rounded-full bg-[#635BFF] inline-block" />
                    {headingText}
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-[#425466] leading-relaxed">
                  To unlock low-cost, collateral-free credit (8%–10.5% interest) and bridge your cash flow gaps, execute this 4-phase financial restructuring roadmap:
                </p>
                <CreditPlaybookPhases />
              </div>
            );
          }

          // If heading is "The 3 Fatal Cap Table Mistakes Indian Founders Make" (Day 5)
          if (headingText.includes("The 3 Fatal Cap Table Mistakes") || headingText.includes("Fatal Cap Table Mistakes")) {
            return (
              <div key={idx} className="pt-6 pb-2 space-y-4">
                <div className="border-b border-[#E6E8EB] pb-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight flex items-center gap-2.5">
                    <span className="w-2 h-6 rounded-full bg-[#635BFF] inline-block" />
                    {headingText}
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-[#425466] leading-relaxed">
                  If your startup is currently navigating co-founder structuring or preparing to incorporate, beware of these three common legal errors under Indian Company Law:
                </p>
                <CoFounderCapTableTrapsSection />
              </div>
            );
          }

          // If heading is "The 1008 Governance Framework: The 4-Step Co-Founder Architecture" (Day 5)
          if (headingText.includes("The 1008 Governance Framework") || headingText.includes("4-Step Co-Founder Architecture")) {
            return (
              <div key={idx} className="pt-6 pb-2 space-y-4">
                <div className="border-b border-[#E6E8EB] pb-2">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight flex items-center gap-2.5">
                    <span className="w-2 h-6 rounded-full bg-[#635BFF] inline-block" />
                    {headingText}
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-[#425466] leading-relaxed">
                  To build an institutional-grade company that attracts top talent and angel syndicate capital, execute this 4-step governance blueprint:
                </p>
                <CoFounderGovernancePhases />
              </div>
            );
          }

          return (
            <div key={idx} className="pt-6 pb-2 border-b border-[#E6E8EB]">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight flex items-center gap-2.5">
                <span className="w-2 h-6 rounded-full bg-[#635BFF] inline-block" />
                {headingText}
              </h2>
            </div>
          );
        }

        // Check for Heading 3 (### Heading)
        if (trimmed.startsWith("### ")) {
          // If we already rendered via visual sections, skip individual subheadings
          if (
            trimmed.includes("The \"Agency & Consultant\" Retainer Sinkhole") ||
            trimmed.includes("The 50/50 Handshake") ||
            trimmed.includes("Operational Blindness: The \"Spreadsheet & WhatsApp\"") ||
            trimmed.includes("The GST Reconciliation Gap") ||
            trimmed.includes("Fragmented Offline Accounting") ||
            trimmed.includes("Un-Factored Receivables and Late Debtor Cycles") ||
            trimmed.includes("Chasing Discretionary Wants Instead of Non-Negotiable Needs") ||
            trimmed.includes("The 'Online-Only' Illusion") ||
            trimmed.includes("The 'Branding Agency' Cash Drain") ||
            trimmed.includes("Phase 1: High-Utility Need") ||
            trimmed.includes("Phase 2: Dedicated Tooling") ||
            trimmed.includes("Phase 3: General Trade Beat") ||
            trimmed.includes("Phase 4: Shared-Equity Scaling")
          ) {
            return null; // already rendered cleanly in visual card sections
          }

          const lines = trimmed.split("\n");
          const headingText = lines[0].replace("### ", "").trim();
          const remainingContent = lines.slice(1).join("\n").trim();

          return (
            <div key={idx} className="pt-4 space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF]" />
                {headingText}
              </h3>
              {remainingContent && (
                <p className="text-sm sm:text-base text-[#425466] leading-relaxed font-normal">
                  {renderInline(remainingContent)}
                </p>
              )}
            </div>
          );
        }

        // Check for Code Block (``` ... ```)
        if (trimmed.startsWith("```") && trimmed.endsWith("```")) {
          const codeLines = trimmed.replace(/^```[a-z]*\n?/, "").replace(/\n?```$/, "");

          // Check if this is the Early Founder Cash Drain Diagram -> Render bespoke graphic!
          if (codeLines.includes("THE EARLY FOUNDER CASH DRAIN")) {
            return <FounderCashDrainGraphic key={idx} />;
          }

          // Check if this is the Lifestyle Hype vs. Essential Reality Diagram -> Render bespoke graphic!
          if (
            codeLines.includes("THE LIFESTYLE HYPE VS. ESSENTIAL REALITY") ||
            codeLines.includes("THE LIFESTYLE HYPE")
          ) {
            return <CashFlowVersusHypeGraphic key={idx} />;
          }

          // Check if this is the ULI / Working Capital diagram -> Render bespoke graphic!
          if (
            codeLines.includes("THE WORKING CAPITAL CHASM") ||
            codeLines.includes("WORKING CAPITAL CREDIT ARCHITECTURE") ||
            codeLines.includes("RBI ULI DIGITAL RAILS")
          ) {
            return <ULICreditArchitectureGraphic key={idx} />;
          }

          // Check if this is the Idea Validation / Polite Feedback Diagram -> Render bespoke graphic!
          if (
            codeLines.includes("THE POLITE FEEDBACK DEATH SPIRAL") ||
            codeLines.includes("POLITE FEEDBACK") ||
            codeLines.includes("MARKET TRUTH ARCHITECTURE") ||
            codeLines.includes("THE POLITE HEAD-NODDING TRAP") ||
            codeLines.includes("POLITE TRAP")
          ) {
            return <IdeaValidationGraphic key={idx} />;
          }

          // Check if this is the Co-Founder Equity / 50-50 Handshake Diagram -> Render bespoke graphic!
          if (
            codeLines.includes("THE 50/50 HANDSHAKE DEATH TRAP") ||
            codeLines.includes("THE 50/50 DEAD EQUITY TRAP") ||
            codeLines.includes("CAP TABLE ARCHITECTURE") ||
            codeLines.includes("THE HANDSHAKE TRAP")
          ) {
            return <CoFounderEquitySplitGraphic key={idx} />;
          }

          // Check if this is the PCB Assembly Hardware Core Diagram -> Render bespoke graphic!
          if (
            codeLines.includes("THE ELECTRONICS HARDWARE CORE") ||
            codeLines.includes("ELECTRONICS HARDWARE CORE")
          ) {
            return <PCBHadwareCoreGraphic key={idx} />;
          }

          // Check if this is the Technical Textiles / Geotextiles Diagram -> Render bespoke graphic!
          if (
            codeLines.includes("TECHNICAL TEXTILES MANUFACTURING CORE") ||
            codeLines.includes("GEOTEXTILES & AGROTEXTILES ARCHITECTURE") ||
            codeLines.includes("TECHNICAL TEXTILES")
          ) {
            return <TechnicalTextilesGraphic key={idx} />;
          }

          // Check if this is the Molded Fiber / Thermoformed Pulp Packaging Diagram -> Render bespoke graphic!
          if (
            codeLines.includes("MOLDED FIBER & PULP PACKAGING CORE") ||
            codeLines.includes("THERMOFORMED PULP PACKAGING") ||
            codeLines.includes("MOLDED FIBER MANUFACTURING") ||
            codeLines.includes("MOLDED PULP")
          ) {
            return <MoldedPulpPackagingGraphic key={idx} />;
          }

          // Check if this is the Tissue Paper / Napkin Converting Diagram -> Render bespoke graphic!
          if (
            codeLines.includes("SUB-₹10 LAKH MICRO-CONVERTING CORE") ||
            codeLines.includes("TISSUE PAPER & NAPKIN CONVERTING") ||
            codeLines.includes("TISSUE PAPER CONVERTING") ||
            codeLines.includes("TISSUE PAPER & TABLE NAPKIN") ||
            codeLines.includes("PAPER NAPKIN CONVERTING")
          ) {
            return <TissuePaperConvertingGraphic key={idx} />;
          }

          // Check if this is the EV Fast Charging & Power Electronics JV Diagram -> Render bespoke graphic!
          if (
            codeLines.includes("EV POWER ELECTRONICS & DC FAST CHARGING") ||
            codeLines.includes("EV FAST CHARGING & POWER ELECTRONICS") ||
            codeLines.includes("EV FAST CHARGING") ||
            codeLines.includes("DC FAST CHARGING CORE") ||
            codeLines.includes("POWER ELECTRONICS JOINT VENTURE")
          ) {
            return <EVFastChargingJVGraphic key={idx} />;
          }

          // Check if this is the Phase 1..4 diagram or Phase checklist tree -> Handled by PlaybookPhases components
          if (
            (codeLines.includes("PHASE 1") && codeLines.includes("PHASE 2")) ||
            codeLines.includes("Phase 1: Immediate Cash Triage") ||
            codeLines.includes("Phase 1: GST & Bank Data Integrity Audit") ||
            codeLines.includes("Phase 1: High-Utility Need")
          ) {
            return null; // already rendered via phase components
          }

          const currentCodeIdx = codeBlockCount++;
          const isCopied = copiedCodeIndex === currentCodeIdx;

          return (
            <div
              key={idx}
              className="my-6 rounded-2xl overflow-hidden border border-[#E6E8EB] bg-[#F8FAFC] text-[#0A2540] shadow-xs"
            >
              <div className="bg-[#F1F4F8] px-4 py-3 border-b border-[#E6E8EB] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#CBD5E1] inline-block" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#627D98] ml-2 flex items-center gap-1.5">
                    <Terminal className="h-3.5 w-3.5 text-[#635BFF]" />
                    Execution Protocol
                  </span>
                </div>
                <button
                  onClick={() => handleCopy(codeLines, currentCodeIdx)}
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#627D98] hover:text-[#0A2540] bg-white hover:bg-[#F1F4F8] border border-[#E6E8EB] px-2.5 py-1 rounded-md transition-colors"
                  title="Copy diagram"
                >
                  {isCopied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#059669]" />
                      <span className="text-[#059669]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-5 sm:p-6 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed text-[#425466] bg-white">
                <pre className="whitespace-pre font-mono">{codeLines}</pre>
              </div>
            </div>
          );
        }

        // Check for Markdown Table (| ... |)
        if (trimmed.includes("|") && trimmed.includes("\n|")) {
          const lines = trimmed.split("\n").filter((l) => l.trim().startsWith("|"));
          if (lines.length >= 2) {
            const parseRow = (line: string) =>
              line
                .split("|")
                .slice(1, -1)
                .map((cell) => cell.trim());

            const headers = parseRow(lines[0]);
            const rows = lines.slice(2).map(parseRow);

            return (
              <div key={idx} className="my-8 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-xs uppercase tracking-wider text-[#635BFF] font-bold flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 text-[#635BFF]" />
                    <span>Comparative Strategic Analysis</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#627D98]">
                    Scroll horizontally on mobile →
                  </span>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-[#E6E8EB] shadow-xs bg-white">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#F8FAFC] border-b border-[#E6E8EB] text-[#0A2540]">
                        {headers.map((h, hIdx) => (
                          <th
                            key={hIdx}
                            className={`py-3.5 px-4 sm:px-6 font-bold tracking-tight text-xs uppercase text-[#0A2540] ${
                              hIdx === 0
                                ? "w-[28%]"
                                : hIdx === 1
                                ? "w-[36%] bg-[#F1F5F9]/60"
                                : "w-[36%] bg-[#F0F5FF]/60 text-[#635BFF]"
                            }`}
                          >
                            <div className="flex items-center gap-1.5">
                              {hIdx === 2 && (
                                <Zap className="h-3.5 w-3.5 text-[#635BFF]" />
                              )}
                              <span>{h}</span>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#E6E8EB]">
                      {rows.map((row, rIdx) => (
                        <tr
                          key={rIdx}
                          className={`transition-colors hover:bg-[#F8FAFC] ${
                            rIdx % 2 === 0 ? "bg-white" : "bg-[#FAFAFC]"
                          }`}
                        >
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`py-3.5 px-4 sm:px-6 align-top ${
                                cIdx === 0
                                  ? "font-semibold text-[#0A2540] bg-[#F8FAFC]/40"
                                  : cIdx === 1
                                  ? "text-[#627D98]"
                                  : "text-[#0A2540] font-medium bg-[#F0F5FF]/20"
                              }`}
                            >
                              <div className="flex items-start gap-2">
                                {cIdx === 1 && (
                                  <XCircle className="h-4 w-4 text-[#FF7043] shrink-0 mt-0.5" />
                                )}
                                {cIdx === 2 && (
                                  <CheckCircle2 className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                                )}
                                <span>{renderInline(cell)}</span>
                              </div>
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            );
          }
        }

        // If block is already captured inside the traps section text or phases, skip duplicate rendering
        if (
          trimmed.startsWith("When first-time founders lack specific technical") ||
          trimmed.startsWith("Two colleagues or friends decide to start up") ||
          trimmed.startsWith("Eight months later, when the initial excitement fades") ||
          trimmed.startsWith("The active founder is left doing 100%") ||
          trimmed.startsWith("When customer orders, vendor deliveries") ||
          trimmed.startsWith("Without an integrated digital source of truth") ||
          trimmed.startsWith("Whether you are launching your first company") ||
          trimmed.startsWith("Differences between monthly sales reported in GSTR-1") ||
          trimmed.startsWith("Running a business on standalone offline Tally") ||
          trimmed.startsWith("Allowing corporate accounts to linger beyond 90 days") ||
          trimmed.startsWith("* **Mismatch Between Filings") ||
          trimmed.startsWith("To unlock low-cost, collateral-free credit")
        ) {
          return null;
        }

        const blockLines = trimmed.split("\n");

        // Check for Checklist Items (- [ ] or - [x])
        const checkListRegex = /^-\s+\[([ xX])\]\s+(.*)$/;
        if (blockLines.some((l) => checkListRegex.test(l.trim()))) {
          const introLines: string[] = [];
          const items: { checked: boolean; text: string }[] = [];

          for (const line of blockLines) {
            const match = line.trim().match(checkListRegex);
            if (match) {
              items.push({ checked: match[1].toLowerCase() === "x", text: match[2] });
            } else if (items.length === 0 && line.trim()) {
              introLines.push(line.trim());
            } else if (items.length > 0 && line.trim()) {
              items[items.length - 1].text += " " + line.trim();
            }
          }

          return (
            <div key={idx} className="my-6 space-y-3">
              {introLines.length > 0 && (
                <p className="text-sm sm:text-base text-[#425466] leading-relaxed font-normal">
                  {renderInline(introLines.join(" "))}
                </p>
              )}
              <div className="rounded-2xl bg-white border border-[#E6E8EB] p-4 sm:p-5 space-y-3 shadow-2xs">
                {items.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-start gap-3 text-sm sm:text-base">
                    <div
                      className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                        item.checked
                          ? "bg-[#635BFF] border-[#635BFF] text-white"
                          : "bg-[#F8FAFC] border-[#CBD5E1] text-[#635BFF]"
                      }`}
                    >
                      {item.checked ? <Check className="w-3.5 h-3.5" /> : null}
                    </div>
                    <div className="text-[#0A2540] leading-relaxed font-medium">
                      {renderInline(item.text)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }

        // Check for Numbered / Ordered List (1. , 2. , etc.)
        const orderedListRegex = /^(\d+)\.\s+(.*)$/;
        if (blockLines.some((l) => orderedListRegex.test(l.trim()))) {
          const introLines: string[] = [];
          const items: { number: string; text: string }[] = [];

          for (const line of blockLines) {
            const match = line.trim().match(orderedListRegex);
            if (match) {
              items.push({ number: match[1], text: match[2] });
            } else if (items.length === 0 && line.trim()) {
              introLines.push(line.trim());
            } else if (items.length > 0 && line.trim()) {
              items[items.length - 1].text += " " + line.trim();
            }
          }

          return (
            <div key={idx} className="my-5 space-y-3">
              {introLines.length > 0 && (
                <p className="text-sm sm:text-base text-[#425466] leading-relaxed font-normal">
                  {renderInline(introLines.join(" "))}
                </p>
              )}
              <ol className="space-y-3">
                {items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3.5 text-sm sm:text-base">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#F0F5FF] text-[#635BFF] border border-[#D0E2FF] text-xs font-mono font-bold shrink-0 mt-0.5 shadow-2xs">
                      {item.number}
                    </span>
                    <div className="text-[#425466] leading-relaxed flex-1">
                      {renderInline(item.text)}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          );
        }

        // Check for Bullet List (* or -)
        const bulletListRegex = /^(\*|-)\s+(.*)$/;
        if (blockLines.some((l) => bulletListRegex.test(l.trim()))) {
          const introLines: string[] = [];
          const items: string[] = [];

          for (const line of blockLines) {
            const match = line.trim().match(bulletListRegex);
            if (match) {
              items.push(match[2]);
            } else if (items.length === 0 && line.trim()) {
              introLines.push(line.trim());
            } else if (items.length > 0 && line.trim()) {
              items[items.length - 1] += " " + line.trim();
            }
          }

          return (
            <div key={idx} className="my-4 space-y-3">
              {introLines.length > 0 && (
                <p className="text-sm sm:text-base text-[#425466] leading-relaxed font-normal">
                  {renderInline(introLines.join(" "))}
                </p>
              )}
              <ul className="space-y-2.5">
                {items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-3 text-sm sm:text-base">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF] shrink-0 mt-2.5" />
                    <div className="text-[#425466] leading-relaxed flex-1">
                      {renderInline(item)}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        }

        // Check for Blockquote or Highlight Quote (> ...)
        if (trimmed.startsWith("> ")) {
          const quoteText = trimmed.replace(/^>\s*/gm, "").trim();
          return (
            <div
              key={idx}
              className="my-6 rounded-2xl bg-gradient-to-r from-[#F5F3FF] to-[#EFF6FF] border-l-4 border-[#635BFF] p-6 sm:p-7 shadow-xs space-y-2"
            >
              <div className="text-xs uppercase tracking-wider text-[#635BFF] font-bold flex items-center gap-1.5">
                <Sparkles className="h-4 w-4" />
                <span>Foundational Rule</span>
              </div>
              <p className="text-base sm:text-lg font-semibold text-[#0A2540] leading-snug">
                {renderInline(quoteText)}
              </p>
            </div>
          );
        }

        // Check if paragraph is an alert/highlight (e.g., starts with "The Core Principle:" or "The Bottom Line:")
        if (
          trimmed.startsWith("The Core Principle:") ||
          trimmed.startsWith("The Bottom Line:") ||
          trimmed.startsWith("Core Insight:")
        ) {
          return (
            <div
              key={idx}
              className="my-6 rounded-2xl bg-[#F0F4FF] border border-[#D0E0FF] p-6 sm:p-7 shadow-xs space-y-2"
            >
              <div className="text-xs uppercase tracking-wider text-[#635BFF] font-bold flex items-center gap-1.5">
                <Zap className="h-4 w-4" />
                <span>Executive Principle</span>
              </div>
              <p className="text-base sm:text-lg font-bold text-[#0A2540] leading-snug">
                {renderInline(trimmed)}
              </p>
            </div>
          );
        }

        // Standard Paragraph
        return (
          <p
            key={idx}
            className="text-sm sm:text-base text-[#425466] leading-relaxed font-normal"
          >
            {renderInline(trimmed)}
          </p>
        );
      })}
    </div>
  );
}

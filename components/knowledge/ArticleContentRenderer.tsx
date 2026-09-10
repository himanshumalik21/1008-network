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
} from "lucide-react";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { FounderCashDrainGraphic } from "@/components/knowledge/FounderCashDrainGraphic";
import { TurnaroundPlaybookPhases } from "@/components/knowledge/TurnaroundPlaybookPhases";
import { StructuralTrapsSection } from "@/components/knowledge/StructuralTrapsSection";

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

  // Split content into blocks
  const blocks = content.split(/\n\n+/);

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

          // If heading is "The Three Structural Traps That Break Early Businesses", render heading + dedicated visual traps grid
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

          // If heading is "The 1008 Zero-Retainer Playbook: How to Build with Venture Discipline"
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
          // If we already rendered the structural traps via StructuralTrapsSection, skip individual subheadings 1., 2., 3.
          if (
            trimmed.includes("The \"Agency & Consultant\" Retainer Sinkhole") ||
            trimmed.includes("The 50/50 Handshake") ||
            trimmed.includes("Operational Blindness: The \"Spreadsheet & WhatsApp\"")
          ) {
            return null; // already rendered cleanly in StructuralTrapsSection
          }

          const subheadingText = trimmed.replace("### ", "").trim();
          return (
            <div key={idx} className="pt-4">
              <h3 className="text-lg sm:text-xl font-bold text-[#0A2540] tracking-tight flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF]" />
                {subheadingText}
              </h3>
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

          // Check if this is the Phase 1..4 diagram or Phase checklist tree -> Handled by TurnaroundPlaybookPhases
          if (
            (codeLines.includes("PHASE 1") && codeLines.includes("PHASE 2")) ||
            codeLines.includes("Phase 1: Immediate Cash Triage")
          ) {
            return null; // already rendered via TurnaroundPlaybookPhases
          }

          const currentCodeIdx = codeBlockCount++;
          const isCopied = copiedCodeIndex === currentCodeIdx;

          return (
            <div
              key={idx}
              className="my-6 rounded-2xl overflow-hidden border border-[#1E293B] bg-[#0A0F1D] text-[#E2E8F0] shadow-xl"
            >
              <div className="bg-[#111827] px-4 py-3 border-b border-[#1E293B] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-[#10B981]/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-[#94A3B8] ml-2 flex items-center gap-1.5">
                    <Terminal className="h-3.5 w-3.5 text-[#635BFF]" />
                    Execution Protocol
                  </span>
                </div>
                <button
                  onClick={() => handleCopy(codeLines, currentCodeIdx)}
                  className="inline-flex items-center gap-1 text-xs font-mono text-[#94A3B8] hover:text-white bg-[#1F2937] hover:bg-[#374151] px-2.5 py-1 rounded-md transition-colors"
                  title="Copy diagram"
                >
                  {isCopied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#10B981]" />
                      <span className="text-[#10B981]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-5 sm:p-6 overflow-x-auto font-mono text-xs sm:text-sm leading-relaxed text-[#CBD5E1] bg-[#0A0F1D]/90">
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
                    <Sparkles className="h-4 w-4" />
                    <span>Comparative Strategic Analysis</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#627D98]">
                    Scroll horizontally on mobile →
                  </span>
                </div>

                <div className="overflow-x-auto rounded-2xl border border-[#E6E8EB] shadow-sm bg-white">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse">
                    <thead>
                      <tr className="bg-[#0A2540] text-white">
                        {headers.map((h, hIdx) => (
                          <th
                            key={hIdx}
                            className={`py-4 px-4 sm:px-6 font-bold tracking-tight text-xs uppercase ${
                              hIdx === 0
                                ? "w-[28%]"
                                : hIdx === 1
                                ? "w-[36%] bg-[#0F2D4A]"
                                : "w-[36%] bg-[#1E1B4B] text-[#A5B4FC]"
                            }`}
                          >
                            <div className="flex items-center gap-1.5">
                              {hIdx === 2 && (
                                <Zap className="h-3.5 w-3.5 text-[#818CF8]" />
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
                            rIdx % 2 === 0 ? "bg-white" : "bg-[#FDFDFE]"
                          }`}
                        >
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`py-3.5 px-4 sm:px-6 align-top ${
                                cIdx === 0
                                  ? "font-semibold text-[#0A2540] bg-[#F8FAFC]/50"
                                  : cIdx === 1
                                  ? "text-[#64748B]"
                                  : "text-[#0A2540] font-medium bg-[#F5F3FF]/40"
                              }`}
                            >
                              <div className="flex items-start gap-2">
                                {cIdx === 1 && (
                                  <XCircle className="h-4 w-4 text-[#EF4444] shrink-0 mt-0.5" />
                                )}
                                {cIdx === 2 && (
                                  <CheckCircle2 className="h-4 w-4 text-[#10B981] shrink-0 mt-0.5" />
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

        // If block is already captured inside the traps section text, skip duplicate rendering
        if (
          trimmed.startsWith("When first-time founders lack specific technical") ||
          trimmed.startsWith("Two colleagues or friends decide to start up") ||
          trimmed.startsWith("Eight months later, when the initial excitement fades") ||
          trimmed.startsWith("The active founder is left doing 100%") ||
          trimmed.startsWith("When customer orders, vendor deliveries") ||
          trimmed.startsWith("Without an integrated digital source of truth")
        ) {
          return null;
        }

        // Check for Bullet List (* or -)
        if (
          trimmed.split("\n").every((line) => line.trim().startsWith("* ") || line.trim().startsWith("- "))
        ) {
          const items = trimmed
            .split("\n")
            .map((l) => l.trim().replace(/^(\*|-)\s+/, ""));

          return (
            <div key={idx} className="my-4 space-y-2.5">
              {items.map((item, itemIdx) => (
                <div key={itemIdx} className="flex items-start gap-3 text-sm sm:text-base">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#635BFF] shrink-0 mt-2.5" />
                  <div className="text-[#425466] leading-relaxed">
                    {renderInline(item)}
                  </div>
                </div>
              ))}
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

import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "1008 Playbook — Operational Intelligence & Execution Guides | 1008 Network",
  description:
    "Actionable, battle-tested operational playbooks, working capital frameworks, and high-cashflow business models for Indian founders.",
  keywords: [
    "1008 Playbook",
    "Startup Playbooks India",
    "How to start a business in India",
    "Working Capital Financing India",
    "Cashflow Business Models India",
    "Venture Building Frameworks",
    "Founder Resources India",
  ],
  openGraph: {
    title: "1008 Playbook — Operational Intelligence & Execution Guides | 1008 Network",
    description:
      "Deep-dive playbooks and execution guides for building profitable enterprises in India without burning cash.",
    url: "https://www.1008.network/knowledge",
  },
  alternates: {
    canonical: "https://www.1008.network/knowledge",
  },
};

export default function KnowledgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

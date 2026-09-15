import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Knowledge Hub & Founder Playbooks | 1008 Network",
  description:
    "Actionable, battle-tested operational playbooks, working capital frameworks (RBI ULI), and high-cashflow business models for Indian founders.",
  keywords: [
    "Startup Playbooks India",
    "How to start a business in India",
    "Unified Lending Interface ULI RBI",
    "Cashflow Business Models India",
    "Venture Building Frameworks",
    "Founder Resources India",
  ],
  openGraph: {
    title: "Knowledge Hub & Founder Playbooks | 1008 Network",
    description:
      "Deep-dive playbooks and execution guides for building profitable enterprises in India without burning cash.",
    url: "https://1008.network/knowledge",
  },
  alternates: {
    canonical: "https://1008.network/knowledge",
  },
};

export default function KnowledgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

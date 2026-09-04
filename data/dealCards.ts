import { DealCard } from "@/lib/types";

export const initialDealCards: DealCard[] = [
  {
    id: "deal-medflow-health",
    name: "MedFlow Telemetry",
    codeName: "Project MedFlow",
    oneLiner: "Real-time Cold-Chain & Sample Integrity Ledger for Phase II/III Clinical Trials in India",
    sector: "Healthcare & HealthTech",
    location: "Delhi NCR",
    stage: "Pre-Seed",
    targetRaiseINR: 150, // ₹1.5 Cr
    valuationCapINR: 1200, // ₹12 Cr
    syndicateAllocationINR: 40, // ₹40 Lakhs
    committedPercentage: 78,
    studioBatch: "1008 Studio Cohort Q2",
    tractionHighlights: [
      { metric: "Active Trial Sites", value: "14 Tertiary Hospitals", growth: "+4 this month" },
      { metric: "Monthly ARR Run-rate", value: "₹28 Lakhs", growth: "3.2x QoQ" },
      { metric: "Sample Loss Rate", value: "<0.02%", growth: "vs 4.2% industry avg" },
    ],
    thesis: "Led by an 18-year ex-Fortis/Dr. Reddy's supply chain director. Commercial exclusivity signed across 3 major Indian hospital networks with high regulatory barrier to entry.",
    founders: [
      { role: "CEO / Domain Veteran", background: "Ex-Director Supply Chain, Fortis Healthcare (18 yrs)" },
      { role: "CTO / Technical Co-Founder", background: "Ex-Staff Architect, Distributed IoT Systems (9 yrs)" },
    ],
    status: "Allocating",
    closingInDays: 14,
  },
  {
    id: "deal-fabriqk-industrial",
    name: "Fabriqk Systems",
    codeName: "Project Fabriqk",
    oneLiner: "On-Demand Precision Jigs & Tooling Procurement Platform for Auto-Ancillary Units",
    sector: "Industrial & Manufacturing",
    location: "Pune",
    stage: "Seed",
    targetRaiseINR: 250, // ₹2.5 Cr
    valuationCapINR: 2000, // ₹20 Cr
    syndicateAllocationINR: 60, // ₹60 Lakhs
    committedPercentage: 92,
    studioBatch: "1008 Studio Cohort Q1",
    tractionHighlights: [
      { metric: "Monthly GMV", value: "₹1.15 Cr", growth: "+42% MoM" },
      { metric: "Tooling Delivery SLA", value: "48 Hours", growth: "vs 14 days baseline" },
      { metric: "Tier-2 Machine Shops", value: "85 Onboarded Units", growth: "Pune & Chakan" },
    ],
    thesis: "Solving the ₹18L/hr machine downtime problem for Tier-2 automotive manufacturers with automated CAD-to-CNC bidding and guaranteed 48-hour delivery.",
    founders: [
      { role: "CEO", background: "Former VP Operations, Bharat Forge & Cummins (16 yrs)" },
      { role: "COO / Commercial Co-Founder", background: "Ex-Category Lead, Industrial B2B Unicorn (8 yrs)" },
    ],
    status: "Allocating",
    closingInDays: 7,
  },
  {
    id: "deal-credo-invoice",
    name: "Credo Ledger",
    codeName: "Project Credo",
    oneLiner: "Real-time GSTN-Reconciled Instant Trade Credit Infrastructure for FMCG Distributors",
    sector: "FinTech & Financial Infrastructure",
    location: "Mumbai",
    stage: "Pre-Seed",
    targetRaiseINR: 180, // ₹1.8 Cr
    valuationCapINR: 1500, // ₹15 Cr
    syndicateAllocationINR: 50, // ₹50 Lakhs
    committedPercentage: 65,
    studioBatch: "1008 Studio Cohort Q2",
    tractionHighlights: [
      { metric: "Invoices Underwritten", value: "₹14.2 Cr GMV", growth: "0.0% NPA to date" },
      { metric: "Distributor Partners", value: "38 Active Networks", growth: "Western India" },
      { metric: "Underwriting TAT", value: "<180 Seconds", growth: "Instant Bank API" },
    ],
    thesis: "Led by 15-year ex-HDFC Bank SME risk head. Instant credit scoring leveraging Account Aggregator + GSTN ledger integration, capturing 1.8% take-rate.",
    founders: [
      { role: "CEO", background: "Ex-Credit Risk Head (SME Lending), Tier-1 Private Bank (15 yrs)" },
      { role: "CTO", background: "Ex-Senior Engineering Lead, Razorpay/Cashfree (10 yrs)" },
    ],
    status: "Open",
    closingInDays: 22,
  }
];

import { KnowledgeResource } from "@/lib/types";

export const initialKnowledgeResources: KnowledgeResource[] = [
  {
    slug: "corporate-to-venture-transition-blueprint",
    title: "The Phased Corporate-to-Venture Transition Blueprint",
    subtitle: "A structured, risk-mitigated operational roadmap for senior executives leaving corporate careers to build high-conviction ventures.",
    category: "playbook",
    sectorTags: ["Venture Building", "Leadership", "0-to-1"],
    readOrWatchTime: "14 min read",
    authorOrSource: "1008 Network Research & Venture Architecture",
    featured: true,
    summary: "Senior corporate executives possess immense domain depth, supplier networks, and customer trust, yet 80% fail when transitioning to startups due to speed mismatch, bloated initial hires, and lack of hands-on prototyping. This playbook details the exact 4-phase transition matrix to de-risk leaving employment.",
    keyTakeaways: [
      "Why domain veterans should never start by hiring an agency: agencies build specs, not businesses with customer feedback loops.",
      "The phased parallel validation framework: how to conduct 40 problem-discovery interviews without violating corporate IP/NDAs.",
      "Equity vs. Salary calculations: calculating your true venture runway and structuring personal cash reserves for 18-24 months.",
      "The 'Minimum Viable Signal' rule: securing 3 letters of intent (LOIs) or advance commitments before spending a single rupee on code.",
    ],
    actionableChecklist: [
      "Identify 3 structural inefficiencies in your current sector that you have lived through for >5 years.",
      "Draft a 1-page Problem Brief focusing solely on the customer's financial loss, not your solution.",
      "Conduct 25 discovery calls with former industry peers asking 'How do you solve X today and what does it cost?'",
      "Formulate your unit economics model on a simple Google Sheet before approaching co-founders or studios.",
      "Establish a clean IP separation date and formal resignation timeline.",
    ],
    contentMarkdown: `
# The Phased Corporate-to-Venture Transition Blueprint

Leaving a lucrative leadership role with compensation packages north of ₹60L–₹1.5Cr is one of the most high-friction decisions an Indian corporate executive will ever make. The primary failure mode is not a lack of sector intelligence; it is the fundamental difference in operating velocity, team leverage, and capital allocation.

In a corporate environment, you have specialized departments for legal, finance, IT, HR, and sales enablement. In a zero-to-one venture, you are the department.

---

## Phase 1: Problem Discovery & Customer Pain Ledger
Before writing any code or incorporating an entity, domain experts must validate whether their perceived market problem is a **hair-on-fire financial bleed** or merely an **operational annoyance**.

### The Rule of Quantifiable Bleed
If your target enterprise or SME cannot point to an explicit line-item loss of at least ₹10 Lakhs/year (or 150+ human hours) caused by the problem, they will not pay upfront for a new software or workflow solution.

### Conducting Neutral Discovery Calls
- **Never pitch your idea.** Pitching triggers polite compliance. Instead, ask: *"Walk me through the last time shipment X was delayed. What was the exact sequence of steps taken?"*
- Track emotional triggers: frustration with suppliers, manual Excel reconcile errors, or regulatory audit panic.

---

## Phase 2: Rapid Prototyping & Architecture
During this stage, your objective is not to build a full enterprise ERP. It is to build the thinnest technical layer that executes the core transaction or workflow.

- Use modular, production-ready full-stack boilerplates (Next.js, Tailwind, Server Actions, PostgreSQL).
- Avoid 6-month outsourced agency contracts that cost ₹15L–₹30L and result in bloated, unmaintainable code.
- Bring on a Technical Co-Founder or partner with a venture studio like 1008 Network that has shared equity upside.

---

## Phase 3: The 3-LOI Commercial Gate
Do not raise institutional seed capital until you have secured proof of commercial pull.

1. **Letter of Intent with Pre-Payment / Deposit:** The highest signal of customer conviction.
2. **Pilot Agreement with Success Criteria:** Clear 30-day KPI targets. If target is met, contract auto-converts to annual subscription or recurring billing.

---

## Phase 4: Founder Handover & Full Operational Independence
The final stage establishes your corporate entity, cap table, initial hiring pipelines, and prepares your institutional data room.

- Finalize founder vesting (4-year vesting with 1-year cliff).
- Establish ESOP pool (typically 10%–12% reserved for initial core engineers and operators).
- Execute complete handover of codebases, cloud infrastructure, and brand assets to the founding entity.
    `,
    publishedAt: "2026-08-15",
  },
  {
    slug: "esop-structuring-and-vesting-guide-india",
    title: "ESOP Structuring & Co-Founder Vesting in Indian Startups",
    subtitle: "A comprehensive operational guide on cap tables, dynamic split frameworks, reverse vesting, and tax implications under Indian corporate law.",
    category: "playbook",
    sectorTags: ["Cap Table", "Legal & Structuring", "Governance"],
    readOrWatchTime: "11 min read",
    authorOrSource: "1008 Network Legal & Financial Architecture",
    featured: true,
    summary: "Bad equity splits and ambiguous co-founder vesting destroy more early-stage Indian startups than market failure. Learn how to draft bulletproof SHA terms, implement reverse vesting, manage dead equity, and design high-conviction ESOP pools for early engineers.",
    keyTakeaways: [
      "Standard 4-year vesting with a 1-year cliff is non-negotiable for all founders, including the original idea originator.",
      "The 'Dynamic Slicing' method for pre-seed contributions before full-time operational transition.",
      "How Section 62(1)(b) of the Companies Act 2013 governs employee stock options in India.",
      "Structuring accelerated vesting on change of control (Single vs. Double Trigger).",
    ],
    actionableChecklist: [
      "Never allocate 50/50 splits without a designated tie-breaker or board dispute resolution mechanism.",
      "Ensure all intellectual property (IP) is assigned to the Private Limited entity, not individual founder names.",
      "Include bad-leaver repurchase clauses at par value to protect against early founder departures.",
      "Size your unallocated ESOP pool at 10%–15% prior to raising institutional seed rounds.",
    ],
    contentMarkdown: `
# ESOP Structuring & Co-Founder Vesting in Indian Startups

Cap table disputes and dead equity on the capitalization table are among the leading reasons angel investors and institutional seed funds walk away from otherwise promising startups.

---

## 1. The Fallacy of Static Day-1 Equity
Many first-time founders divide equity equally on Day 1 (e.g. 50-50 or 33-33-33) based on enthusiasm rather than risk contribution and operational longevity.

If one founder leaves after 6 months with 50% of the company, the remaining founder is left with an uninvestable cap table that no venture capitalist will touch without painful renegotiations.

---

## 2. Standard Founder Reverse Vesting
Every founder must subject their shares to **reverse vesting**:
- **Duration:** 48 Months (4 Years)
- **Cliff:** 12 Months (1 Year Cliff where 25% vests, followed by monthly or quarterly vesting thereafter).
- **Good Leaver vs. Bad Leaver:** If a founder is terminated for cause or breaches non-compete agreements, the company retains the right to repurchase unvested (and in extreme cases, vested) shares at nominal face value (e.g. ₹10 per share).

---

## 3. Creating a 10%–15% ESOP Trust in India
Under Indian law, ESOP schemes require:
1. Special resolution by shareholders in an EGM.
2. Adoption of an ESOP Scheme document detailing grant criteria, vesting schedules, and exercise price.
3. Setting the exercise price thoughtfully to minimize early tax friction for junior hires upon exercise under perquisite tax rules.
    `,
    publishedAt: "2026-08-20",
  },
  {
    slug: "high-output-management-andy-grove-summary",
    title: "High Output Management by Andy Grove: The Executive Summary for Founders",
    subtitle: "The definitive playbook on managerial leverage, meetings that matter, task-relevant maturity, and building scalable operational output.",
    category: "book_summary",
    sectorTags: ["Operations", "Management", "Execution"],
    readOrWatchTime: "9 min read",
    authorOrSource: "Andy Grove (Summarized by 1008 Network)",
    featured: false,
    summary: "Andy Grove, former CEO of Intel, defines management with mathematical clarity: a manager's output is the output of the organization. Learn how to apply manufacturing process control to knowledge work, engineering teams, and high-growth venture operations.",
    keyTakeaways: [
      "The Breakfast Factory metaphor: understanding limiting steps in any operational pipeline.",
      "Managerial Leverage: activities that yield disproportionately high impact relative to the time invested.",
      "Task-Relevant Maturity (TRM): why micro-management is necessary for new domains, and delegative leadership is required for high TRM.",
      "Dual Reporting and matrix structures for scaling organizations.",
    ],
    contentMarkdown: `
# High Output Management — Core Takeaways for Venture Builders

Andy Grove's central thesis is simple yet revolutionary: **The output of a manager is the output of the organizational units under their supervision or influence.**

---

## 1. Managerial Leverage
A manager can increase output in three ways:
1. Increasing the rate at which an activity is performed.
2. Increasing the leverage of the activity.
3. Shifting energy from low-leverage to high-leverage activities.

### High-Leverage Activities:
- When a manager can influence a large number of people at once (e.g. team OKR alignment, standard operating procedures).
- When a simple 30-minute 1-on-1 meeting alters an employee's performance for the next 6 months.
- When an executive imparts unique domain knowledge through structured training.

---

## 2. Managing the Limiting Step
In any production process, whether making breakfast or launching a software release, there is one step that takes the longest or has the highest cost of delay (the 'Limiting Step').

All other tasks must be planned and scheduled backwards around this limiting step to avoid expensive idle capacity.
    `,
    publishedAt: "2026-07-28",
  },
  {
    slug: "b2b-enterprise-sales-motion-india",
    title: "The B2B Enterprise Sales Playbook for Indian Conglomerates & SMEs",
    subtitle: "How to navigate procurement cycles, champion identification, and pilot-to-annual contract conversion across Tier-1 and Tier-2 Indian enterprises.",
    category: "playbook",
    sectorTags: ["Enterprise Sales", "B2B", "Revenue"],
    readOrWatchTime: "12 min read",
    authorOrSource: "1008 Network Commercial Strategy Team",
    featured: true,
    summary: "Selling software or operational services to traditional Indian family conglomerates, hospital chains, logistics networks, and industrial manufacturing plants requires a vastly different playbook than selling to US SaaS startups. Master champion mapping, procurement gatekeepers, and GST-linked pricing.",
    keyTakeaways: [
      "Identifying the 'Economic Buyer' vs. the 'Operational User' vs. the 'Procurement Blocker'.",
      "Why free pilots die in India: how to structure paid proof-of-concepts (PoCs) with upfront bank guarantees.",
      "Pricing psychology: how to pitch solutions in terms of direct margin expansion or working capital recovery rather than 'productivity gains'.",
      "Contract enforceability and milestone-linked payment tranches under Indian commercial courts.",
    ],
    contentMarkdown: `
# The B2B Enterprise Sales Playbook for Indian Conglomerates & SMEs

Indian enterprises are among the most value-conscious buyers in the world. Pitching vague concepts like 'AI efficiency' or 'modern UI' results in endless discovery meetings that never reach contract execution.

---

## 1. The Triad of Enterprise Decision Makers
In Indian corporate organizations, you must address three distinct personas simultaneously:

1. **The Promoters / CXO (The Conviction Layer):** Interested in market dominance, debt reduction, compliance insulation, and top-line growth.
2. **The Plant Head / GM Operations (The Practical Layer):** Terrified of operational disruptions, union issues, or learning curves. They need zero-friction workflows.
3. **The Head of Procurement / Finance (The Commercial Barrier):** Incentivized solely on driving vendor discounts (L1 pricing mindset).

---

## 2. The Golden Rule of Indian B2B Pricing
Never quote an open-ended hourly or user-seat rate to traditional Indian businesses without framing it against:
- **Direct Input Cost Reduction** (e.g. cutting packaging scrap by 3.2%).
- **Working Capital Cycle Shortening** (e.g. reducing DSO from 68 days to 44 days).
    `,
    publishedAt: "2026-08-05",
  },
  {
    slug: "masterclass-zero-to-one-unit-economics",
    title: "Masterclass: Unit Economics & Contribution Margin Modeling",
    subtitle: "A comprehensive breakdown of CAC, LTV, blended contribution margins, and payback periods for Indian startups.",
    category: "masterclass",
    sectorTags: ["Finance", "Unit Economics", "Financial Modeling"],
    readOrWatchTime: "45 min watch",
    authorOrSource: "1008 Network Venture Finance Masterclass",
    featured: false,
    summary: "A deep-dive video masterclass and downloadable financial model template showing how to build rigorous, investor-ready unit economics for B2B marketplaces, SaaS, and D2C brands in India.",
    keyTakeaways: [
      "Calculating CM1, CM2, and CM3 with Indian GST, shipping, and payment gateway deductions.",
      "The 6-month CAC payback rule for early-stage Indian venture viability.",
      "Sensitivity stress-testing for input inflation and customer churn.",
    ],
    contentMarkdown: `
# Unit Economics & Contribution Margin Modeling Masterclass

In this 45-minute session, we walk through the exact financial spreadsheet model used by 1008 Network Studio ventures to analyze contribution margins at every stage of customer acquisition.

Download the accompanying Google Sheets financial model template to test your venture's viability.
    `,
    publishedAt: "2026-08-10",
  },
  {
    slug: "podcast-building-in-bharat-industrial-tech",
    title: "Podcast: Building Industrial Tech & Supply Chain Startups in Bharat",
    subtitle: "Conversations with industrial leaders who transformed legacy factories into tech-enabled powerhouses.",
    category: "podcast",
    sectorTags: ["Manufacturing", "Supply Chain", "Podcast"],
    readOrWatchTime: "52 min listen",
    authorOrSource: "1008 Network Audio Series",
    featured: false,
    summary: "Episode 12 features a deep conversation with veteran plant operators discussing how technology adoption actually happens on factory floors in Pune, Manesar, and Coimbatore.",
    keyTakeaways: [
      "Why WhatsApp and simplified vernacular interfaces outperform complex desktop software.",
      "The reality of shop-floor incentives and overcoming operator resistance.",
      "How to build resilience against supply chain shocks.",
    ],
    contentMarkdown: `
# Podcast: Building Industrial Tech & Supply Chain Startups in Bharat

Listen to the full audio episode exploring the operational realities of Indian industrial hubs and how modern founders are partnering with legacy plant owners.
    `,
    publishedAt: "2026-08-25",
  }
];

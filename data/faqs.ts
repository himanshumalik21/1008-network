import { FAQItem } from "@/lib/types";

export const studioFaqs: FAQItem[] = [
  {
    question: "What kinds of businesses can partner with 1008 Venture Studio?",
    answer: "We partner across high-conviction digital and real-world business sectors in India: B2B Software & Tech platforms, Consumer Brands & D2C, Industrial & Batch Manufacturing, Healthcare Clinics & Diagnostics, Hospitality, and legacy businesses seeking an operational turnaround.",
    category: "studio",
  },
  {
    question: "How does the 180-day turnkey build sprint and phased handover work?",
    answer: "Our execution follows 4 milestone phase gates: Validation & Architecture (Days 1–30), System Build & Sourcing (Days 31–90), Revenue & Operations Pilot (Days 91–150), and Phased Handover (Days 151–180). We stay actively embedded until your business achieves unit-level profitability and has permanent operational staff in place.",
    category: "studio",
  },
  {
    question: "How do you handle software, ERPs, and digital infrastructure?",
    answer: "We architect and deploy modern open-source ERP systems (ERPNext/Frappe), payment gateway pipelines, warehouse management systems (WMS), and automated operational dashboards. We hire and train engineers directly into your company, ensuring zero technical debt.",
    category: "studio",
  },
  {
    question: "Who owns the intellectual property, codebase, and supply contracts?",
    answer: "100% of all software codebases, supplier contracts, brand trademarks, customer data, and operational assets belong exclusively to the founder's corporate entity. 1008 Network executes full IP assignment and non-disclosure documentation on Day 1.",
    category: "equity",
  },
  {
    question: "How does 1008 Network structure sweat equity and operational costs?",
    answer: "We operate as a venture facilitator on a shared-equity and milestone-based upside model, without charging expensive monthly consulting retainers. The venture directly covers its operational tooling, hired team salaries, and manufacturing capex—often supported by syndicate capital and non-dilutive credit lines we help structure.",
    category: "equity",
  },
  {
    question: "Can foreign corporations, global startups, and overseas OEMs partner with 1008 for India market entry?",
    answer: "Yes. 1008 Network acts as the turnkey India Operating Partner and JV Co-Builder for global corporations and hardware manufacturers. We facilitate industrial land allocation, PLI / SPECS policy subsidies, cleanroom/factory setups (e.g. Semiconductor OSAT, EV battery assembly), Press Note 3 compliance, Tier-1 supply chain localization, and statutory approvals (BIS/CDSCO/EPR).",
    category: "studio",
  },
  {
    question: "Can I discuss an early concept or a confidential business turnaround under NDA?",
    answer: "Every preliminary discussion, business model, and operational diagnostic is protected under our mutual Non-Disclosure Agreement (NDA). We evaluate operational viability with strict confidentiality before any formal commitments or public announcements are made.",
    category: "equity",
  },
];

export const networkFaqs: FAQItem[] = [
  {
    question: "How does co-founder and talent matching work on 1008 Partner Network?",
    answer: "Founders submit specific talent requirements (Technical CTO, Head of Operations, GTM Sales Lead) and their venture thesis. Experienced operators submit their verified execution track record. 1008 Network curates high-alignment matches and coordinates direct introduction meetings.",
    category: "network",
  },
  {
    question: "What kinds of roles can founders post on the network?",
    answer: "Founders can post for full-time Co-Founders (CTO, COO, CRO), Founding Engineers / Heads of Department, and Fractional CXO leadership roles across software engineering, industrial manufacturing, supply chain, and growth marketing.",
    category: "network",
  },
  {
    question: "How are operator profiles and candidate track records vetted?",
    answer: "We verify past execution experience, technical architectures built, revenue scales managed, and domain-specific credentials before presenting candidates for founder review.",
    category: "network",
  },
  {
    question: "What is the typical equity allocation range for network co-founders?",
    answer: "Equity typically ranges from 5% to 25%+ depending on venture stage, role criticality, and compensation structure (full sweat equity vs. hybrid cash/equity). All partnerships are structured with milestone-based vesting (typically a 1-year cliff and 4-year vesting schedule).",
    category: "equity",
  },
  {
    question: "How are introductions made between founders and candidates?",
    answer: "1008 Network curates high-alignment matches and facilitates direct introductions so founders and operators can evaluate chemistry, technical alignment, and co-building terms directly.",
    category: "network",
  },
  {
    question: "Does 1008 Network charge recruitment placement or agency fees?",
    answer: "No upfront placement or headhunting fees are charged to founders or candidates. We facilitate discovery and alignment so founders can build high-conviction founding teams seamlessly.",
    category: "network",
  },
];

export const capitalFaqs: FAQItem[] = [
  {
    question: "How do target-based capital rounds work on 1008 Capital Network?",
    answer: "Startups declare an exact target raise amount (e.g. ₹50 Lakhs to ₹5 Cr+) along with an itemized use of funds. The round stays open for allocation until the declared capital target is fulfilled by interested investors.",
    category: "general",
  },
  {
    question: "Who can participate in investor syndicates and what is the minimum check size?",
    answer: "Angel investors, working professionals, corporate CXOs, industrialists, and family offices can participate. Check sizes typically range from flexible allocations (₹50,000 to ₹5 Lakhs) up to institutional checks (₹25 Lakhs to ₹5 Cr+).",
    category: "general",
  },
  {
    question: "How is the 'Use of Funds' declared and verified?",
    answer: "Startups provide itemized milestone breakdowns—such as machinery procurement, inventory purchase, software deployment, or working capital. This breakdown is shared with soft-committed investors before the deal meeting.",
    category: "general",
  },
  {
    question: "What happens during the Combined Deal Meeting?",
    answer: "Once a round reaches its target allocation, 1008 Network coordinates a structured combined meeting where the founder and all interested investors review financial models, unit economics, term sheets, and governance terms together.",
    category: "general",
  },
  {
    question: "Does 1008 Network charge brokerage fees or hold custodial funds?",
    answer: "No. 1008 Network operates strictly as a discovery and networking facilitator with zero intermediary or broker fees. We do not hold custodial funds or manage investor capital. All contracts and fund transfers are executed directly between the company and investors.",
    category: "equity",
  },
  {
    question: "What legal shareholding instruments are used for equity allocations?",
    answer: "Investments are structured as standard Compulsorily Convertible Preference Shares (CCPS) or Equity Shares directly in the startup's cap table under the Indian Companies Act, 2013, with standard shareholder rights, anti-dilution, and information rights.",
    category: "equity",
  },
  {
    question: "What due diligence should investors perform?",
    answer: "Startup investing carries inherent risks. Investors are expected and required to conduct their own independent legal, financial, and technical due diligence before executing any binding investment agreement.",
    category: "general",
  },
];

export const faqs: FAQItem[] = [...studioFaqs, ...networkFaqs, ...capitalFaqs];

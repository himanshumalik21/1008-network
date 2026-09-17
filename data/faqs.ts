import { FAQItem } from "@/lib/types";

export const studioFaqs: FAQItem[] = [
  {
    question: "Who does 1008 partner with to build businesses?",
    answer: "We partner with experienced professionals, industry veterans, domain specialists, and technical minds who have deep market insights but need the execution capability—software, systems, suppliers, compliance, and initial hiring—to turn their idea into an operating company.",
    category: "studio",
  },
  {
    question: "What kinds of businesses do you help build?",
    answer: "We focus on high-conviction real-economy and digital business models in India: Industrial & B2B Supply Chains, Vertical Software & Tech Platforms, Consumer & Physical Product Brands, and Specialized Services & Healthcare Operations.",
    category: "studio",
  },
  {
    question: "How does the turnkey build partnership and phased handover work?",
    answer: "Our execution is tailored across 4 milestone phase gates: Business Blueprint & Feasibility, Core Engineering & Systems Setup, Key Hiring & First Revenue, and Handover to Your Team. We adapt the build timeline to operational realities and stay actively embedded until your business achieves positive cash flow and has permanent team members in place.",
    category: "studio",
  },
  {
    question: "How do you handle software, ERPs, and digital infrastructure?",
    answer: "We architect and deploy modern cloud infrastructure, open-source ERP systems (such as ERPNext/Frappe), payment workflows, inventory management, and automated operational dashboards. We help hire and onboard permanent engineers directly into your company.",
    category: "studio",
  },
  {
    question: "Who owns the intellectual property, codebase, and supply contracts?",
    answer: "100% of all software codebases, supplier contracts, brand trademarks, customer data, and operational assets belong exclusively to the founder's corporate entity. 1008 Network executes full IP assignment from Day 1.",
    category: "equity",
  },
  {
    question: "How does 1008 Network structure sweat equity and operational costs?",
    answer: "We operate on a shared-equity model with skin in the game, without charging expensive monthly consulting retainers. The venture directly covers its operational tooling, hired team salaries, and hard costs—which we help structure efficiently.",
    category: "equity",
  },
  {
    question: "Can I discuss an early concept or business idea confidentially?",
    answer: "Yes. Every preliminary discussion and business model review is conducted under strict confidentiality. We evaluate operational viability with care before any formal partnership commitments are made.",
    category: "equity",
  },
];

export const networkFaqs: FAQItem[] = [
  {
    question: "How does co-founder and talent matching work on 1008 Partner Network?",
    answer: "Founders submit specific talent requirements (Technical CTO, Head of Operations, GTM Sales Lead) and their venture thesis. Experienced operators submit their detailed background and execution track record. 1008 Network curates high-alignment matches and coordinates direct introduction meetings.",
    category: "network",
  },
  {
    question: "What kinds of roles can founders post on the network?",
    answer: "Founders can post for full-time Co-Founders (CTO, COO, CRO), Founding Engineers / Heads of Department, and Fractional CXO leadership roles across software engineering, industrial manufacturing, supply chain, and growth marketing.",
    category: "network",
  },
  {
    question: "How are operator profiles and candidate backgrounds reviewed?",
    answer: "We review past execution experience, technical architectures built, operational scales managed, and domain-specific background before presenting candidate introductions for founder review.",
    category: "network",
  },
  {
    question: "How is equity and compensation determined for network co-founders?",
    answer: "Equity, compensation and vesting are negotiated directly between the parties based on role, contribution, commitment, business stage and other relevant factors. Partnerships typically structure milestone-based vesting to protect both the company and the incoming builder.",
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
    question: "How is the 'Use of Funds' declared and tracked?",
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

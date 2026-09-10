export type PillarType = "studio" | "network" | "knowledge" | "capital";

export type RoleCategory = 
  | "Technical Co-Founder (CTO)"
  | "Go-to-Market / Sales Co-Founder"
  | "Operations & Supply Chain Lead"
  | "Product & Design Partner"
  | "Finance & Legal Strategist"
  | "Growth & Marketing Architect";

export type SectorCategory =
  | "Manufacturing & Industrial Plants"
  | "Industrial & Manufacturing"
  | "Healthcare, Hospitals & Clinics"
  | "Healthcare & HealthTech"
  | "Schools & Education Institutions"
  | "Hotels, Hospitality & F&B"
  | "Retail, E-Commerce & D2C Brands"
  | "D2C & Consumer Brands"
  | "Trading, Wholesale & Distribution"
  | "Tech & Software Ventures"
  | "B2B SaaS & Enterprise"
  | "Business Turnaround & Reboot"
  | "Logistics & Supply Chain"
  | "FinTech & Financial Infrastructure"
  | "PropTech & Real Estate"
  | "CleanTech & Energy";

export type LocationType =
  | "Delhi NCR"
  | "Bengaluru"
  | "Mumbai"
  | "Pune"
  | "Hyderabad"
  | "Chennai"
  | "Pan-India / Remote";

export interface Opportunity {
  id: string;
  title: string;
  role: RoleCategory;
  sector: SectorCategory;
  location: LocationType;
  equityRange: string;
  stipendOrSalary?: string;
  founderBackground: {
    name: string;
    headline: string;
    priorExperience: string;
    domainYears: number;
    avatarUrl?: string;
  };
  ventureThesis: string;
  problemStatement: string;
  idealCandidateProfile: string[];
  responsibilities: string[];
  studioBacked: boolean;
  createdAt: string;
  expiresInDays: number;
  applicantsCount: number;
  featured?: boolean;
}

export type ResourceCategory = "playbook" | "book_summary" | "masterclass" | "podcast";

export interface KnowledgeResource {
  slug: string;
  title: string;
  subtitle: string;
  category: ResourceCategory;
  sectorTags: string[];
  readOrWatchTime: string;
  authorOrSource: string;
  featured?: boolean;
  summary: string;
  keyTakeaways: string[];
  contentMarkdown: string;
  actionableChecklist?: string[];
  publishedAt: string;
}

export interface DealCard {
  id: string;
  name: string;
  codeName: string;
  oneLiner: string;
  sector: SectorCategory;
  location: LocationType;
  stage: "Pre-Seed" | "Seed" | "Bridge";
  targetRaiseINR: number; // in Lakhs
  valuationCapINR: number; // in Lakhs
  syndicateAllocationINR: number; // in Lakhs
  committedPercentage: number;
  studioBatch: string;
  tractionHighlights: {
    metric: string;
    value: string;
    growth?: string;
  }[];
  thesis: string;
  founders: {
    role: string;
    background: string;
  }[];
  status: "Open" | "Allocating" | "Oversubscribed" | "Closed";
  closingInDays: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "studio" | "network" | "equity" | "general";
}

export interface StudioApplicationData {
  fullName: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  currentRole: string;
  currentCompany: string;
  yearsOfExperience: number;
  primaryDomain: SectorCategory;
  city: LocationType;
  problemThesis: string;
  targetCustomer: string;
  unfairAdvantage: string;
  timeCommitment: "Full-Time Immediate" | "Transitioning over 3-6 Months" | "Exploring High Conviction";
  teamNeeds: string[];
  referralSource?: string;
}

export interface NetworkPostData {
  founderName: string;
  founderEmail: string;
  founderLinkedin: string;
  founderPriorExperience: string;
  domainYears: number;
  opportunityTitle: string;
  roleNeeded: RoleCategory;
  sector: SectorCategory;
  location: LocationType;
  equityOffered: string;
  stipendOffered?: string;
  ventureThesis: string;
  idealCandidateProfile: string;
}

export interface ReadinessAnswer {
  questionId: number;
  selectedOptionIndex: number;
  score: number;
}

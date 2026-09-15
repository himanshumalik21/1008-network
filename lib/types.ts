export type PillarType = "studio" | "network" | "knowledge" | "capital";

export type RoleCategory = 
  | "Technical Co-Founder (CTO)"
  | "Go-to-Market / Sales Co-Founder"
  | "Operations & Supply Chain Lead"
  | "Product & Design Partner"
  | "Finance & Legal Strategist"
  | "Growth & Marketing Architect"
  | "Manufacturing & Plant Setup Head"
  | "AI / ML & DeepTech Lead"
  | "Other Domain / Specialist Role";

export type RoleType =
  | "Co-Founder"
  | "Founding Lead"
  | "Head of Department"
  | "Fractional CXO"
  | "Specialist & Operator"
  | "Other";

export type CommitmentType =
  | "Full-time (Co-Founder)"
  | "Full-time (Core Lead)"
  | "Fractional / Part-time"
  | "Advisory / Milestone"
  | "Other / Flexible";

export type VentureStage =
  | "Idea / Pre-Seed"
  | "Feasibility & MVP"
  | "Early Revenue (₹25L - ₹1Cr)"
  | "Scaling & Growth (₹1Cr - ₹10Cr)"
  | "Other Stage";

export type SectorCategory =
  | "Manufacturing & Industrial Plants"
  | "Industrial & Manufacturing"
  | "India Market Entry & Manufacturing JVs"
  | "Global Co-Investment & JVs"
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
  | "CleanTech & Energy"
  | "AgriTech & Rural Commerce"
  | "Other Sector / Cross-Industry";

export type LocationType =
  | "Delhi NCR"
  | "Bengaluru"
  | "Mumbai"
  | "Pune"
  | "Hyderabad"
  | "Chennai"
  | "Ahmedabad"
  | "Pan-India / Remote"
  | "Other Location";

export interface Opportunity {
  id: string;
  title: string;
  role: RoleCategory;
  roleType?: RoleType;
  commitment?: CommitmentType;
  sector: SectorCategory;
  location: LocationType;
  equityRange: string;
  stipendOrSalary?: string;
  stage?: VentureStage;
  skills?: string[];
  fundingStatus?: string;
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

export interface TalentProfile {
  id: string;
  name: string;
  title: string;
  roleFamily: RoleCategory;
  roleType: RoleType;
  yearsOfExperience: number;
  location: LocationType;
  bio: string;
  skills: string[];
  targetRole: string;
  targetCommitment: CommitmentType;
  targetEquity: string;
  targetCash: string;
  exCompanies: string[];
  badge?: string;
  availableImmediately: boolean;
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
  primaryKeyword?: string;
  secondaryKeywords?: string[];
  targetAudience?: string;
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

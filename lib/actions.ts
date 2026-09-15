"use server";

import { StudioApplicationData, NetworkPostData } from "./types";
import {
  sendStudioPitchAlert,
  sendNetworkPostAlert,
  sendContactAlert,
  sendInvestorProfileAlert,
  sendStartupCapitalAlert,
  sendStudioInvestmentAlert,
} from "./email";

export interface ActionResult<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
}

function isValidEmail(email: string): boolean {
  if (!email || typeof email !== "string" || email.length > 254) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

function cleanString(val: unknown, maxLen = 5000): string {
  if (!val || typeof val !== "string") return "";
  return val.trim().slice(0, maxLen);
}

// In-memory persistent queue for runtime submissions (when running without live DB connection)
const localSubmissions = {
  studioApplications: [] as Array<StudioApplicationData & { id: string; submittedAt: string }>,
  networkPosts: [] as Array<NetworkPostData & { id: string; submittedAt: string }>,
  networkApplications: [] as Array<{ id: string; oppId: string; name: string; email: string; linkedin: string; pitch: string; submittedAt: string }>,
  dealEOIs: [] as Array<{ id: string; dealId: string; name: string; email: string; ticketSizeINR: number; submittedAt: string }>,
  investorProfiles: [] as Array<{
    id: string;
    name: string;
    email: string;
    phone: string;
    investorType: string;
    capitalAmount: string;
    riskAppetite: string;
    preferredIndustries: string[];
    notes?: string;
    submittedAt: string;
  }>,
  contactInquiries: [] as Array<{ id: string; name: string; email: string; type: string; message: string; submittedAt: string }>,
  newsletterSubscribers: [] as Array<{ email: string; subscribedAt: string }>,
};

export async function submitStudioApplication(formData: StudioApplicationData): Promise<ActionResult> {
  try {
    const fullName = cleanString(formData.fullName, 120);
    const email = cleanString(formData.email, 254);
    const problemThesis = cleanString(formData.problemThesis, 5000);

    if (!fullName || !email || !problemThesis) {
      return {
        success: false,
        message: "Please provide your full name, email, and problem thesis.",
        error: "VALIDATION_FAILED",
      };
    }

    if (!isValidEmail(email)) {
      return {
        success: false,
        message: "Please enter a valid work or personal email address.",
        error: "INVALID_EMAIL",
      };
    }

    const sanitizedData: StudioApplicationData = {
      ...formData,
      fullName,
      email,
      phone: cleanString(formData.phone, 30),
      city: (formData.city || "Delhi NCR") as StudioApplicationData["city"],
      currentRole: cleanString(formData.currentRole, 100),
      currentCompany: cleanString(formData.currentCompany, 100),
      primaryDomain: (formData.primaryDomain || "Tech & Software Ventures") as StudioApplicationData["primaryDomain"],
      linkedinUrl: cleanString(formData.linkedinUrl, 250),
      problemThesis,
      targetCustomer: cleanString(formData.targetCustomer, 2000),
      unfairAdvantage: cleanString(formData.unfairAdvantage, 2000),
      timeCommitment: (formData.timeCommitment || "Full-Time Immediate") as StudioApplicationData["timeCommitment"],
    };

    const newRecord = {
      ...sanitizedData,
      id: `app-studio-${Date.now()}`,
      submittedAt: new Date().toISOString(),
    };

    localSubmissions.studioApplications.push(newRecord);

    // Dispatch automated email notification to join@1008.network
    await sendStudioPitchAlert(sanitizedData).catch((err) => {
      console.error("[Non-blocking Email Error]:", err);
    });

    return {
      success: true,
      message: "Your application to Build With 1008 Network has been received. Our venture partners review every submission and respond within 48 business hours under NDA.",
      data: { id: newRecord.id },
    };
  } catch (err) {
    return {
      success: false,
      message: "An unexpected error occurred while submitting your application. Please email join@1008.network directly.",
      error: (err as Error).message,
    };
  }
}

export async function submitNetworkOpportunity(formData: NetworkPostData): Promise<ActionResult> {
  try {
    const founderName = cleanString(formData.founderName, 120);
    const founderEmail = cleanString(formData.founderEmail, 254);
    const opportunityTitle = cleanString(formData.opportunityTitle, 200);
    const roleNeeded = formData.roleNeeded;

    if (!founderName || !founderEmail || !opportunityTitle || !roleNeeded) {
      return {
        success: false,
        message: "Missing required fields for publishing opportunity.",
        error: "VALIDATION_FAILED",
      };
    }

    if (!isValidEmail(founderEmail)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
        error: "INVALID_EMAIL",
      };
    }

    const sanitizedData: NetworkPostData = {
      ...formData,
      founderName,
      founderEmail,
      opportunityTitle,
      roleNeeded: formData.roleNeeded,
      sector: formData.sector,
      location: formData.location,
      equityOffered: cleanString(formData.equityOffered, 50),
      stipendOffered: cleanString(formData.stipendOffered, 100),
      founderPriorExperience: cleanString(formData.founderPriorExperience, 300),
      ventureThesis: cleanString(formData.ventureThesis, 5000),
      idealCandidateProfile: cleanString(formData.idealCandidateProfile, 5000),
    };

    const newPost = {
      ...sanitizedData,
      id: `opp-${Date.now()}`,
      submittedAt: new Date().toISOString(),
    };

    localSubmissions.networkPosts.push(newPost);

    // Dispatch automated email notification to join@1008.network
    await sendNetworkPostAlert(sanitizedData).catch((err) => {
      console.error("[Non-blocking Email Error]:", err);
    });

    return {
      success: true,
      message: "Opportunity submitted successfully for 1008 Network editorial review. Upon 60-day listing approval, it will be published to the live Network board.",
      data: { id: newPost.id },
    };
  } catch (err) {
    return {
      success: false,
      message: "Unable to submit opportunity. Please reach out to join@1008.network.",
      error: (err as Error).message,
    };
  }
}

export async function applyToOpportunity(
  oppId: string,
  payload: { name: string; email: string; phone: string; linkedin: string; yearsOfExp: number; pitch: string }
): Promise<ActionResult> {
  try {
    const name = cleanString(payload.name, 120);
    const email = cleanString(payload.email, 254);
    const pitch = cleanString(payload.pitch, 3000);

    if (!name || !email || !pitch) {
      return {
        success: false,
        message: "Please complete your name, email, and introductory pitch.",
      };
    }

    if (!isValidEmail(email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
        error: "INVALID_EMAIL",
      };
    }

    const record = {
      id: `app-net-${Date.now()}`,
      oppId: cleanString(oppId, 100),
      name,
      email,
      phone: cleanString(payload.phone, 30),
      linkedin: cleanString(payload.linkedin, 250),
      yearsOfExp: Number(payload.yearsOfExp) || 0,
      pitch,
      submittedAt: new Date().toISOString(),
    };

    localSubmissions.networkApplications.push(record);

    return {
      success: true,
      message: "Connection request and profile forwarded directly to the founder. If there is mutual conviction, an introductory call will be coordinated within 3 business days.",
    };
  } catch (err) {
    return {
      success: false,
      message: "Submission failed. Please try again or email join@1008.network.",
      error: (err as Error).message,
    };
  }
}

export async function submitDealEOI(payload: {
  dealId: string;
  name: string;
  email: string;
  phone: string;
  investorType: string;
  ticketSizeINR: number;
  notes?: string;
}): Promise<ActionResult> {
  try {
    const name = cleanString(payload.name, 120);
    const email = cleanString(payload.email, 254);
    const ticketSizeINR = Number(payload.ticketSizeINR) || 0;

    if (!name || !email || !ticketSizeINR) {
      return {
        success: false,
        message: "Please provide your name, accredited email, and target allocation amount.",
      };
    }

    if (!isValidEmail(email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
        error: "INVALID_EMAIL",
      };
    }

    const record = {
      id: `eoi-${Date.now()}`,
      dealId: cleanString(payload.dealId, 100),
      name,
      email,
      phone: cleanString(payload.phone, 30),
      investorType: cleanString(payload.investorType, 100),
      ticketSizeINR,
      notes: cleanString(payload.notes, 2000),
      submittedAt: new Date().toISOString(),
    };

    localSubmissions.dealEOIs.push(record);

    return {
      success: true,
      message: `Expression of Interest recorded for ₹${ticketSizeINR} Lakhs allocation. The 1008 Network syndicate team will share the complete data room and term sheet overview.`,
    };
  } catch (err) {
    return {
      success: false,
      message: "Failed to record EOI. Please contact join@1008.network.",
      error: (err as Error).message,
    };
  }
}

export async function submitInvestorProfile(payload: {
  name: string;
  email: string;
  phone: string;
  investorType: string;
  capitalAmount: string;
  riskAppetite: string;
  preferredIndustries: string[];
  notes?: string;
}): Promise<ActionResult> {
  try {
    const name = cleanString(payload.name, 120);
    const email = cleanString(payload.email, 254);
    const phone = cleanString(payload.phone, 30);
    const capitalAmount = cleanString(payload.capitalAmount, 100);

    if (!name || !email || !phone || !capitalAmount) {
      return {
        success: false,
        message: "Please fill out your name, email, phone number, and capital allocation.",
      };
    }

    if (!isValidEmail(email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
        error: "INVALID_EMAIL",
      };
    }

    const sanitizedData = {
      name,
      email,
      phone,
      investorType: cleanString(payload.investorType, 100),
      capitalAmount,
      riskAppetite: cleanString(payload.riskAppetite, 100),
      preferredIndustries: (payload.preferredIndustries || []).map((ind) => cleanString(ind, 100)),
      notes: cleanString(payload.notes, 2000),
    };

    const record = {
      id: `inv-${Date.now()}`,
      ...sanitizedData,
      submittedAt: new Date().toISOString(),
    };

    localSubmissions.investorProfiles.push(record);

    // Dispatch automated email notification to join@1008.network
    await sendInvestorProfileAlert(sanitizedData).catch((err) => {
      console.error("[Non-blocking Email Error]:", err);
    });

    return {
      success: true,
      message: "Thank you! Your investor profile has been registered. Our venture partners will curate and introduce businesses matching your capital range and risk appetite within 24–48 hours.",
      data: { id: record.id },
    };
  } catch (err) {
    return {
      success: false,
      message: "Unable to submit your investor profile. Please email us directly at join@1008.network.",
      error: (err as Error).message,
    };
  }
}

export async function submitStartupCapitalRequest(payload: {
  startupName: string;
  founderName: string;
  email: string;
  phone: string;
  sector: string;
  currentStage: string;
  targetCapital: string;
  capitalUse: string;
  pitchDeckUrl?: string;
  thesis: string;
}): Promise<ActionResult> {
  try {
    const startupName = cleanString(payload.startupName, 150);
    const founderName = cleanString(payload.founderName, 120);
    const email = cleanString(payload.email, 254);
    const phone = cleanString(payload.phone, 30);
    const targetCapital = cleanString(payload.targetCapital, 100);

    if (!startupName || !founderName || !email || !phone || !targetCapital) {
      return {
        success: false,
        message: "Please fill out all required startup and founder fields.",
      };
    }

    if (!isValidEmail(email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
        error: "INVALID_EMAIL",
      };
    }

    const sanitizedData = {
      startupName,
      founderName,
      email,
      phone,
      sector: cleanString(payload.sector, 100),
      currentStage: cleanString(payload.currentStage, 100),
      targetCapital,
      capitalUse: cleanString(payload.capitalUse, 2000),
      pitchDeckUrl: cleanString(payload.pitchDeckUrl, 300),
      thesis: cleanString(payload.thesis, 5000),
    };

    const record = {
      id: `scap-${Date.now()}`,
      ...sanitizedData,
      submittedAt: new Date().toISOString(),
    };

    // Dispatch automated email notification to join@1008.network
    await sendStartupCapitalAlert(sanitizedData).catch((err) => {
      console.error("[Non-blocking Email Error]:", err);
    });

    return {
      success: true,
      message: "Your startup capital and co-building application has been received under Mutual NDA. Our partners will evaluate your thesis and reach out within 48 business hours.",
      data: { id: record.id },
    };
  } catch (err) {
    return {
      success: false,
      message: "Unable to submit your capital request. Please email us directly at join@1008.network.",
      error: (err as Error).message,
    };
  }
}

export async function submitStudioInvestmentRequest(payload: {
  fullName: string;
  email: string;
  phone: string;
  intendedTicket: string;
  investorType: string;
  notes?: string;
}): Promise<ActionResult> {
  try {
    const fullName = cleanString(payload.fullName, 120);
    const email = cleanString(payload.email, 254);
    const phone = cleanString(payload.phone, 30);
    const intendedTicket = cleanString(payload.intendedTicket, 100);

    if (!fullName || !email || !phone || !intendedTicket) {
      return {
        success: false,
        message: "Please provide your full name, email, phone number, and intended allocation.",
      };
    }

    if (!isValidEmail(email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
        error: "INVALID_EMAIL",
      };
    }

    const sanitizedData = {
      fullName,
      email,
      phone,
      intendedTicket,
      investorType: cleanString(payload.investorType, 100),
      notes: cleanString(payload.notes, 2000),
    };

    const record = {
      id: `inv-1008-${Date.now()}`,
      ...sanitizedData,
      submittedAt: new Date().toISOString(),
    };

    // Dispatch automated email notification to join@1008.network
    await sendStudioInvestmentAlert(sanitizedData).catch((err) => {
      console.error("[Non-blocking Email Error]:", err);
    });

    return {
      success: true,
      message: "Thank you for your interest in investing in 1008 Network parent studio. Our founders will review your profile and share the investor deck & confidential data room within 24 business hours.",
      data: { id: record.id },
    };
  } catch (err) {
    return {
      success: false,
      message: "Unable to submit investment expression. Please email us directly at join@1008.network.",
      error: (err as Error).message,
    };
  }
}

export async function submitContactInquiry(payload: {
  name: string;
  email: string;
  company?: string;
  type: string;
  message: string;
}): Promise<ActionResult> {
  try {
    const name = cleanString(payload.name, 120);
    const email = cleanString(payload.email, 254);
    const message = cleanString(payload.message, 5000);

    if (!name || !email || !message) {
      return {
        success: false,
        message: "Please fill out all required contact fields.",
      };
    }

    if (!isValidEmail(email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
        error: "INVALID_EMAIL",
      };
    }

    const sanitizedData = {
      name,
      email,
      company: cleanString(payload.company, 150),
      type: cleanString(payload.type, 100),
      message,
    };

    localSubmissions.contactInquiries.push({
      id: `inq-${Date.now()}`,
      ...sanitizedData,
      submittedAt: new Date().toISOString(),
    });

    // Dispatch automated email notification to join@1008.network
    await sendContactAlert(sanitizedData).catch((err) => {
      console.error("[Non-blocking Email Error]:", err);
    });

    return {
      success: true,
      message: "Thank you for reaching out to 1008 Network. Our team in Delhi NCR will review and get in touch within 24 hours.",
    };
  } catch (err) {
    return {
      success: false,
      message: "Error sending inquiry. Please email join@1008.network directly.",
    };
  }
}

export async function subscribeNewsletter(email: string): Promise<ActionResult> {
  try {
    const cleanMail = cleanString(email, 254);
    if (!isValidEmail(cleanMail)) {
      return {
        success: false,
        message: "Please provide a valid email address.",
      };
    }

    localSubmissions.newsletterSubscribers.push({
      email: cleanMail,
      subscribedAt: new Date().toISOString(),
    });

    return {
      success: true,
      message: "You are subscribed to 1008 Network Venture Dispatch. High-signal memos only.",
    };
  } catch (err) {
    return {
      success: false,
      message: "Subscription failed. Please try again.",
    };
  }
}

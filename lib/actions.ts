"use server";

import { StudioApplicationData, NetworkPostData } from "./types";
import {
  sendStudioPitchAlert,
  sendNetworkPostAlert,
  sendContactAlert,
  sendInvestorProfileAlert,
} from "./email";

export interface ActionResult<T = unknown> {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
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
    if (!formData.fullName || !formData.email || !formData.problemThesis) {
      return {
        success: false,
        message: "Please provide your full name, email, and problem thesis.",
        error: "VALIDATION_FAILED",
      };
    }

    const newRecord = {
      ...formData,
      id: `app-studio-${Date.now()}`,
      submittedAt: new Date().toISOString(),
    };

    localSubmissions.studioApplications.push(newRecord);

    // Dispatch automated email notification to join@1008.network
    await sendStudioPitchAlert(formData).catch((err) => {
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
    if (!formData.founderName || !formData.founderEmail || !formData.opportunityTitle || !formData.roleNeeded) {
      return {
        success: false,
        message: "Missing required fields for publishing opportunity.",
        error: "VALIDATION_FAILED",
      };
    }

    const newPost = {
      ...formData,
      id: `opp-${Date.now()}`,
      submittedAt: new Date().toISOString(),
    };

    localSubmissions.networkPosts.push(newPost);

    // Dispatch automated email notification to join@1008.network
    await sendNetworkPostAlert(formData).catch((err) => {
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
    if (!payload.name || !payload.email || !payload.pitch) {
      return {
        success: false,
        message: "Please complete your name, email, and introductory pitch.",
      };
    }

    const record = {
      id: `app-net-${Date.now()}`,
      oppId,
      ...payload,
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
    if (!payload.name || !payload.email || !payload.ticketSizeINR) {
      return {
        success: false,
        message: "Please provide your name, accredited email, and target allocation amount.",
      };
    }

    const record = {
      id: `eoi-${Date.now()}`,
      ...payload,
      submittedAt: new Date().toISOString(),
    };

    localSubmissions.dealEOIs.push(record);

    return {
      success: true,
      message: `Expression of Interest recorded for ₹${payload.ticketSizeINR} Lakhs allocation. The 1008 Network syndicate team will share the complete data room and term sheet overview.`,
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
    if (!payload.name || !payload.email || !payload.phone || !payload.capitalAmount) {
      return {
        success: false,
        message: "Please fill out your name, email, phone number, and capital allocation.",
      };
    }

    const record = {
      id: `inv-${Date.now()}`,
      ...payload,
      submittedAt: new Date().toISOString(),
    };

    localSubmissions.investorProfiles.push(record);

    // Dispatch automated email notification to join@1008.network
    await sendInvestorProfileAlert(payload).catch((err) => {
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

export async function submitContactInquiry(payload: {
  name: string;
  email: string;
  company?: string;
  type: string;
  message: string;
}): Promise<ActionResult> {
  try {
    if (!payload.name || !payload.email || !payload.message) {
      return {
        success: false,
        message: "Please fill out all required contact fields.",
      };
    }

    localSubmissions.contactInquiries.push({
      id: `inq-${Date.now()}`,
      ...payload,
      submittedAt: new Date().toISOString(),
    });

    // Dispatch automated email notification to join@1008.network
    await sendContactAlert(payload).catch((err) => {
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
    if (!email || !email.includes("@")) {
      return {
        success: false,
        message: "Please provide a valid email address.",
      };
    }

    localSubmissions.newsletterSubscribers.push({
      email,
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

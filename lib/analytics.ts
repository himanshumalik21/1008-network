export const GA_TRACKING_ID = "G-KC8X2W93JV";

// Track pageviews
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Generic event tracker conforming to GA4
export const trackEvent = (
  action: string,
  params: Record<string, any> = {}
) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, params);
  }
};

// ==========================================
// 1. Studio & Turnkey Operations Funnel
// ==========================================
export const trackStudioModalOpen = (source: string) => {
  trackEvent("studio_modal_open", {
    event_category: "Conversion",
    event_label: source,
  });
};

export const trackStudioApplicationSubmit = (
  primaryDomain: string,
  yearsOfExperience: number
) => {
  trackEvent("generate_lead", {
    event_category: "Studio Application",
    event_label: primaryDomain,
    value: yearsOfExperience,
    lead_type: "venture_studio_founder",
  });
};

// ==========================================
// 2. Partner Network & Talent Funnel
// ==========================================
export const trackNetworkApply = (opportunityId: string, role: string) => {
  trackEvent("network_apply", {
    event_category: "Network",
    event_label: `${role} - ${opportunityId}`,
    opportunity_id: opportunityId,
    role_name: role,
  });
};

export const trackPostRoleSubmit = (roleTitle: string, sector: string) => {
  trackEvent("post_role_submit", {
    event_category: "Network",
    event_label: `${roleTitle} (${sector})`,
    role_title: roleTitle,
    sector: sector,
  });
};

export const trackTalentProfileJoin = (roleCategory: string, experienceYears: number) => {
  trackEvent("join_talent_network", {
    event_category: "Network",
    event_label: roleCategory,
    experience_years: experienceYears,
  });
};

// ==========================================
// 3. Capital Network & Investor Funnel
// ==========================================
export const trackInvestorJoin = (investorType: string, checkSizeMin: string) => {
  trackEvent("generate_lead", {
    event_category: "Capital Network",
    event_label: `Investor: ${investorType} (${checkSizeMin})`,
    investor_type: investorType,
    lead_type: "syndicate_investor",
  });
};

export const trackStartupCapitalPost = (sector: string, targetAmount: string) => {
  trackEvent("generate_lead", {
    event_category: "Capital Network",
    event_label: `Startup Raise: ${sector} (${targetAmount})`,
    sector: sector,
    target_amount: targetAmount,
    lead_type: "startup_capital_raise",
  });
};

// ==========================================
// 4. Engagement, Blueprints & Navigation
// ==========================================
export const trackNewsletterSignup = (source: string = "footer") => {
  trackEvent("newsletter_signup", {
    event_category: "Engagement",
    event_label: source,
  });
};

export const trackContactSubmit = (subject: string) => {
  trackEvent("contact_form_submit", {
    event_category: "Contact",
    event_label: subject,
  });
};

export const trackReadinessQuizComplete = (score: number, tier: string) => {
  trackEvent("readiness_quiz_complete", {
    event_category: "Engagement",
    score: score,
    readiness_tier: tier,
  });
};

export const trackCtaClick = (buttonText: string, destination: string) => {
  trackEvent("cta_click", {
    event_category: "Navigation",
    event_label: buttonText,
    destination: destination,
  });
};


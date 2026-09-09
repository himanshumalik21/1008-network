export const GA_TRACKING_ID = "G-KC8X2W93JV";

// Track pageviews
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// Generic event tracker
export const trackEvent = (
  action: string,
  params: Record<string, any> = {}
) => {
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", action, params);
  }
};

// Specific Conversion Events
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
  });
};

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

export const trackCtaClick = (buttonText: string, destination: string) => {
  trackEvent("cta_click", {
    event_category: "Navigation",
    event_label: buttonText,
    destination: destination,
  });
};

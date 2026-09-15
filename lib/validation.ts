/**
 * Validation and Security Sanitization Utilities for 1008 Network
 */

// Strict Email Regex
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Phone Regex: Allows numbers, spaces, dashes, parentheses, plus sign, 7-15 digits
const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/;

/**
 * Sanitize text input by removing dangerous HTML, scripts, event handlers, and malicious tags
 */
export function sanitizeInput(input: unknown): string {
  if (typeof input !== "string") {
    if (input === null || input === undefined) return "";
    return String(input);
  }

  return input
    // Remove script tags and contents
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    // Remove iframe, embed, object tags
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, "")
    .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, "")
    .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, "")
    // Remove html tags
    .replace(/<[^>]+>/g, "")
    // Remove javascript: and data: pseudo-protocols
    .replace(/javascript:/gi, "")
    .replace(/data:text\/html/gi, "")
    // Remove inline event handlers (onerror=, onclick=, etc)
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, "")
    .trim();
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  if (!email || typeof email !== "string") return false;
  const clean = email.trim();
  return clean.length >= 5 && clean.length <= 120 && EMAIL_REGEX.test(clean);
}

/**
 * Validate phone number format (optional, but if provided must match valid format)
 */
export function isValidPhone(phone: string): boolean {
  if (!phone || typeof phone !== "string") return true; // Optional field
  const clean = phone.trim();
  if (clean === "") return true;
  // Strip non-digits to check digit count
  const digitsOnly = clean.replace(/\D/g, "");
  return digitsOnly.length >= 7 && digitsOnly.length <= 15 && PHONE_REGEX.test(clean);
}

/**
 * Validate URL (e.g. LinkedIn profile)
 */
export function isValidUrl(url: string, requireLinkedin = false): boolean {
  if (!url || typeof url !== "string") return false;
  const clean = url.trim();
  if (clean.length < 4) return false;

  // Prepend https:// if not present for test
  const testUrl = clean.startsWith("http://") || clean.startsWith("https://") ? clean : `https://${clean}`;

  try {
    const parsed = new URL(testUrl);
    if (!["http:", "https:"].includes(parsed.protocol)) return false;
    
    if (requireLinkedin) {
      return (
        parsed.hostname.includes("linkedin.com") ||
        parsed.hostname.includes("lnkd.in") ||
        parsed.hostname.includes("twitter.com") ||
        parsed.hostname.includes("x.com") ||
        parsed.hostname.includes("github.com")
      );
    }
    return true;
  } catch {
    return false;
  }
}

/**
 * Check if submission is from a bot (honeypot check)
 */
export function isBotHoneypot(honeypotVal?: string): boolean {
  return typeof honeypotVal === "string" && honeypotVal.trim().length > 0;
}

/**
 * Rate limit check in browser (prevent spam double clicks within N seconds)
 */
export function checkClientRateLimit(actionKey: string, cooldownSeconds = 4): boolean {
  if (typeof window === "undefined") return true;
  try {
    const key = `1008_last_sub_${actionKey}`;
    const lastSub = localStorage.getItem(key);
    const now = Date.now();
    if (lastSub && now - Number(lastSub) < cooldownSeconds * 1000) {
      return false; // rate limited
    }
    localStorage.setItem(key, String(now));
    return true;
  } catch {
    return true;
  }
}

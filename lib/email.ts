import { Resend } from "resend";
import nodemailer from "nodemailer";
import {
  StudioApplicationData,
  NetworkPostData,
} from "./types";

const ALERT_RECIPIENT = process.env.ALERT_EMAIL_RECIPIENT || "join@1008.network";
const SENDER_EMAIL = process.env.SENDER_EMAIL || "notifications@1008.network";

// Initialize Resend if API key is provided
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Initialize Nodemailer SMTP if configured
const smtpTransport =
  process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS
    ? nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })
    : null;

interface EmailPayload {
  to?: string;
  subject: string;
  html: string;
  replyTo?: string;
}

export async function sendEmail({
  to = ALERT_RECIPIENT,
  subject,
  html,
  replyTo,
}: EmailPayload): Promise<{ success: boolean; error?: string }> {
  try {
    // 1. Try Resend API first
    if (resend) {
      const { error } = await resend.emails.send({
        from: `1008 Network <${SENDER_EMAIL}>`,
        to: [to],
        subject,
        html,
        replyTo: replyTo || undefined,
      });

      if (error) {
        console.error("[Email Error via Resend]:", error);
        return { success: false, error: error.message };
      }
      return { success: true };
    }

    // 2. Try SMTP Nodemailer
    if (smtpTransport) {
      await smtpTransport.sendMail({
        from: `1008 Network <${SENDER_EMAIL}>`,
        to,
        subject,
        html,
        replyTo: replyTo || undefined,
      });
      return { success: true };
    }

    // 3. Dev / Staging Fallback (Logs to server console with full JSON payload)
    console.log(`\n=======================================================`);
    console.log(`📨 [EMAIL ALERT DISPATCHED TO: ${to}]`);
    console.log(`📌 Subject: ${subject}`);
    console.log(`📧 Reply-To: ${replyTo || "N/A"}`);
    console.log(`=======================================================\n`);
    return { success: true };
  } catch (err) {
    console.error("[Email Dispatch Exception]:", err);
    return { success: false, error: (err as Error).message };
  }
}

/**
 * Venture Studio Pitch Email Alert Formatter
 */
export async function sendStudioPitchAlert(data: StudioApplicationData) {
  const subject = `⚡ [NEW VENTURE PITCH]: ${data.fullName} (${data.primaryDomain}) - ${data.city}`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F6F9FC; color: #0A2540; margin: 0; padding: 24px; }
    .card { background-color: #FFFFFF; max-width: 620px; margin: 0 auto; border-radius: 16px; border: 1px solid #E6E8EB; overflow: hidden; box-shadow: 0 4px 12px rgba(10,37,64,0.05); }
    .header { background: linear-gradient(135deg, #0A2540 0%, #1A365D 100%); color: #FFFFFF; padding: 24px 32px; }
    .badge { display: inline-block; background-color: rgba(99,91,255,0.25); color: #00D4B2; font-family: monospace; font-size: 11px; font-weight: bold; padding: 4px 8px; border-radius: 6px; border: 1px solid rgba(0,212,178,0.4); text-transform: uppercase; }
    .content { padding: 32px; }
    .field-row { display: flex; justify-content: space-between; border-bottom: 1px solid #F1F5F9; padding: 10px 0; font-size: 13px; }
    .label { color: #627D98; font-weight: 600; width: 38%; }
    .value { color: #0A2540; font-weight: bold; width: 62%; text-align: right; }
    .box { background-color: #F8FAFC; border: 1px solid #E6E8EB; border-radius: 12px; padding: 16px; margin: 20px 0; }
    .box-title { font-size: 11px; font-family: monospace; font-weight: bold; color: #635BFF; text-transform: uppercase; margin-bottom: 6px; }
    .box-text { font-size: 13px; line-height: 1.6; color: #425466; }
    .button { display: inline-block; background-color: #635BFF; color: #FFFFFF !important; font-weight: bold; font-size: 13px; text-decoration: none; padding: 12px 24px; border-radius: 8px; margin-top: 16px; }
    .footer { background-color: #F6F9FC; border-top: 1px solid #E6E8EB; padding: 16px 32px; font-size: 11px; color: #829AB1; text-align: center; font-family: monospace; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <span class="badge">1008 Studio // New Venture Pitch</span>
      <h2 style="margin: 12px 0 4px 0; font-size: 22px; font-weight: 800; color: #FFFFFF;">${data.fullName}</h2>
      <div style="font-size: 13px; color: #CBD5E1;">${data.currentRole} at ${data.currentCompany || "Independent"} • ${data.yearsOfExperience}+ Years Depth</div>
    </div>

    <div class="content">
      <div class="field-row">
        <span class="label">Domain Sector:</span>
        <span class="value" style="color: #635BFF;">${data.primaryDomain}</span>
      </div>
      <div class="field-row">
        <span class="label">Location:</span>
        <span class="value">${data.city}</span>
      </div>
      <div class="field-row">
        <span class="label">Email:</span>
        <span class="value"><a href="mailto:${data.email}" style="color: #635BFF; text-decoration: none;">${data.email}</a></span>
      </div>
      <div class="field-row">
        <span class="label">Phone:</span>
        <span class="value"><a href="tel:${data.phone}" style="color: #0A2540; text-decoration: none;">${data.phone || "Not provided"}</a></span>
      </div>
      <div class="field-row">
        <span class="label">LinkedIn Profile:</span>
        <span class="value"><a href="${data.linkedinUrl.startsWith("http") ? data.linkedinUrl : `https://${data.linkedinUrl}`}" target="_blank" style="color: #635BFF; text-decoration: none;">View LinkedIn →</a></span>
      </div>
      <div class="field-row">
        <span class="label">Time Commitment:</span>
        <span class="value">${data.timeCommitment}</span>
      </div>
      <div class="field-row">
        <span class="label">Co-Founders / Talent Needed:</span>
        <span class="value" style="font-size: 12px;">${(data.teamNeeds || []).join(", ") || "None specified"}</span>
      </div>

      <!-- Problem Thesis -->
      <div class="box">
        <div class="box-title">Venture Thesis & Market Bottleneck</div>
        <div class="box-text">${data.problemThesis}</div>
      </div>

      <!-- Target Customer -->
      <div class="box">
        <div class="box-title">Target Customer & Revenue Model</div>
        <div class="box-text">${data.targetCustomer}</div>
      </div>

      <!-- Unfair Advantage -->
      ${
        data.unfairAdvantage
          ? `
      <div class="box">
        <div class="box-title">Domain Unfair Advantage & Defensibility</div>
        <div class="box-text">${data.unfairAdvantage}</div>
      </div>`
          : ""
      }

      <div style="text-align: center; margin-top: 24px;">
        <a href="mailto:${data.email}?subject=1008%20Network%20//%20Venture%20Diagnostic%20Call%20Schedule&body=Hi%20${encodeURIComponent(data.fullName)},%0A%0AThank%20you%20for%20sharing%20your%20venture%20thesis%20with%201008%20Network.%20Our%20partners%20have%20reviewed%20your%20submission%20and%20would%20like%20to%20schedule%20a%2030-minute%20Operational%20Diagnostic%20Call." class="button">
          Reply & Schedule Diagnostic Call →
        </a>
      </div>
    </div>

    <div class="footer">
      1008 Network • Turnkey Operations & Syndicate Partner • join@1008.network
    </div>
  </div>
</body>
</html>
`;

  return sendEmail({
    to: ALERT_RECIPIENT,
    subject,
    html,
    replyTo: data.email,
  });
}

/**
 * Co-Founder Opportunity Posting Alert
 */
export async function sendNetworkPostAlert(data: NetworkPostData) {
  const subject = `🤝 [NEW NETWORK POSTING]: ${data.roleNeeded} in ${data.sector} - ${data.founderName}`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #F6F9FC; color: #0A2540; padding: 24px; }
    .card { background-color: #FFFFFF; max-width: 600px; margin: 0 auto; border-radius: 16px; border: 1px solid #E6E8EB; overflow: hidden; }
    .header { background: #0A2540; color: #FFFFFF; padding: 24px; }
    .content { padding: 28px; }
    .field { margin-bottom: 12px; font-size: 13px; }
    .label { color: #627D98; font-weight: bold; }
    .box { background-color: #F8FAFC; border: 1px solid #E6E8EB; border-radius: 10px; padding: 14px; margin: 16px 0; font-size: 13px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h3 style="margin:0; color:#FFFFFF;">New Co-Founder Listing Submitted</h3>
      <p style="margin:4px 0 0 0; color:#CBD5E1; font-size:13px;">${data.opportunityTitle}</p>
    </div>
    <div class="content">
      <div class="field"><span class="label">Founder:</span> ${data.founderName} (<a href="mailto:${data.founderEmail}">${data.founderEmail}</a>)</div>
      <div class="field"><span class="label">Role Needed:</span> <strong>${data.roleNeeded}</strong></div>
      <div class="field"><span class="label">Sector:</span> ${data.sector} • ${data.location}</div>
      <div class="field"><span class="label">Equity Offered:</span> <strong>${data.equityOffered}</strong> (${data.stipendOffered || "Equity only"})</div>
      <div class="field"><span class="label">Experience:</span> ${data.domainYears} years (${data.founderPriorExperience})</div>

      <div class="box">
        <strong>Venture Thesis:</strong><br/>
        ${data.ventureThesis}
      </div>

      <div class="box">
        <strong>Ideal Candidate:</strong><br/>
        ${data.idealCandidateProfile}
      </div>
    </div>
  </div>
</body>
</html>
`;

  return sendEmail({
    to: ALERT_RECIPIENT,
    subject,
    html,
    replyTo: data.founderEmail,
  });
}

/**
 * Contact Inquiry Alert
 */
export async function sendContactAlert(data: { name: string; email: string; company?: string; type: string; message: string }) {
  const subject = `💬 [CONTACT INQUIRY]: ${data.name} (${data.type})`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #F6F9FC; color: #0A2540; padding: 24px; }
    .card { background-color: #FFFFFF; max-width: 600px; margin: 0 auto; border-radius: 16px; border: 1px solid #E6E8EB; overflow: hidden; }
    .header { background: #0A2540; color: #FFFFFF; padding: 20px 28px; }
    .content { padding: 28px; }
    .field { margin-bottom: 10px; font-size: 13px; }
    .label { color: #627D98; font-weight: bold; }
    .box { background-color: #F8FAFC; border: 1px solid #E6E8EB; border-radius: 10px; padding: 14px; margin: 16px 0; font-size: 13px; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h3 style="margin:0; color:#FFFFFF;">New Contact Message</h3>
    </div>
    <div class="content">
      <div class="field"><span class="label">Name:</span> ${data.name}</div>
      <div class="field"><span class="label">Email:</span> <a href="mailto:${data.email}">${data.email}</a></div>
      <div class="field"><span class="label">Company:</span> ${data.company || "Not provided"}</div>
      <div class="field"><span class="label">Inquiry Type:</span> <strong>${data.type}</strong></div>

      <div class="box">
        <strong>Message:</strong><br/>
        ${data.message}
      </div>
    </div>
  </div>
</body>
</html>
`;

  return sendEmail({
    to: ALERT_RECIPIENT,
    subject,
    html,
    replyTo: data.email,
  });
}

/**
 * Investor Onboarding Profile Alert
 */
export async function sendInvestorProfileAlert(data: {
  name: string;
  email: string;
  phone: string;
  investorType: string;
  capitalAmount: string;
  riskAppetite: string;
  preferredIndustries: string[];
  notes?: string;
}) {
  const subject = `💰 [INVESTOR ONBOARDING]: ${data.name} (${data.capitalAmount}) - ${data.investorType}`;

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #F6F9FC; color: #0A2540; padding: 24px; }
    .card { background-color: #FFFFFF; max-width: 600px; margin: 0 auto; border-radius: 16px; border: 1px solid #E6E8EB; overflow: hidden; }
    .header { background: #0A2540; color: #FFFFFF; padding: 24px; }
    .content { padding: 28px; }
    .field { margin-bottom: 10px; font-size: 13px; }
    .label { color: #627D98; font-weight: bold; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h3 style="margin:0; color:#FFFFFF;">New Investor Registration</h3>
      <p style="margin:4px 0 0 0; color:#00D4B2; font-size:13px; font-weight:bold;">${data.capitalAmount} • ${data.investorType}</p>
    </div>
    <div class="content">
      <div class="field"><span class="label">Investor Name:</span> ${data.name}</div>
      <div class="field"><span class="label">Email:</span> <a href="mailto:${data.email}">${data.email}</a></div>
      <div class="field"><span class="label">Phone:</span> <a href="tel:${data.phone}">${data.phone}</a></div>
      <div class="field"><span class="label">Risk Profile:</span> ${data.riskAppetite}</div>
      <div class="field"><span class="label">Preferred Industries:</span> ${(data.preferredIndustries || []).join(", ")}</div>
      ${data.notes ? `<div class="field"><span class="label">Mandate Notes:</span> ${data.notes}</div>` : ""}
    </div>
  </div>
</body>
</html>
`;

  return sendEmail({
    to: ALERT_RECIPIENT,
    subject,
    html,
    replyTo: data.email,
  });
}

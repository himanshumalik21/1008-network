export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "30146901-b156-4ddd-8202-737acea8b811";

interface Web3SubmitOptions {
  subject: string;
  name?: string;
  email?: string;
  replyTo?: string;
  data: Record<string, unknown>;
}

export async function submitToWeb3Forms(options: Web3SubmitOptions): Promise<{ success: boolean; message?: string }> {
  try {
    const formData = new FormData();
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", options.subject);
    formData.append("from_name", "1008 Network Alert");

    if (options.name) {
      formData.append("Applicant / Sender", options.name);
    }
    if (options.email || options.replyTo) {
      const email = options.email || options.replyTo || "";
      formData.append("email", email);
      formData.append("replyto", options.replyTo || email);
    }

    // Format all submitted fields into human-readable labels
    for (const [key, value] of Object.entries(options.data)) {
      if (value !== undefined && value !== null && value !== "") {
        // Convert camelCase to Title Case
        const label = key
          .replace(/([A-Z])/g, " $1")
          .replace(/^./, (s) => s.toUpperCase())
          .trim();

        const formattedVal = Array.isArray(value)
          ? value.join(", ")
          : typeof value === "object"
          ? JSON.stringify(value)
          : String(value);

        formData.append(label, formattedVal);
      }
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    const result = await response.json();
    return {
      success: !!result.success,
      message: result.message,
    };
  } catch (err) {
    console.warn("[Web3Forms Client Dispatch Warning]:", err);
    return { success: false, message: (err as Error).message };
  }
}

/**
 * Web3Forms contact submit (https://api.web3forms.com/submit).
 * The access key is public by design. Email layout is set in the Web3Forms dashboard
 * (Form Settings → Email Templates), not in this module.
 */

const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export type Web3FormsConfig = {
  accessKey: string;
  /** Inbox tag, always from app config — never from the visitor. */
  projectName: string;
  /** Brand label shown on the email. */
  fromName: string;
};

export type ContactSubmitInput = {
  name: string;
  email: string;
  message: string;
  source?: string;
  templateName?: string;
  /** Honeypot. Must stay empty for a real visitor. */
  botcheck?: string;
};

export type ContactSubmitResult = { ok: true } | { ok: false; error: string };

export function isWeb3FormsConfigured(accessKey: string | undefined | null): boolean {
  return (accessKey ?? "").trim().length > 0;
}

export async function submitContactViaWeb3Forms(
  config: Web3FormsConfig,
  payload: ContactSubmitInput,
): Promise<ContactSubmitResult> {
  const accessKey = config.accessKey.trim();
  if (!accessKey) {
    return { ok: false, error: "Contact form is not configured." };
  }

  // Silent success for bots that fill the honeypot (Web3Forms also checks botcheck).
  if ((payload.botcheck ?? "").trim().length > 0) {
    return { ok: true };
  }

  const formData = new FormData();
  formData.append("access_key", accessKey);
  formData.append("name", payload.name);
  formData.append("email", payload.email);
  formData.append("replyto", payload.email);
  formData.append("message", payload.message);
  formData.append("botcheck", "");
  formData.append("project_name", config.projectName);
  formData.append("subject", `[${config.projectName}] Contact from ${payload.name.slice(0, 80)}`);
  formData.append("from_name", config.fromName);
  if (payload.source) formData.append("source", payload.source);
  if (payload.templateName) formData.append("template", payload.templateName);

  try {
    const response = await fetch(WEB3FORMS_URL, {
      method: "POST",
      body: formData,
    });
    const data = (await response.json()) as { success?: boolean; message?: string };
    if (!response.ok || !data.success) {
      return {
        ok: false,
        error: data.message?.trim() || "Could not send your message. Please try again.",
      };
    }
    return { ok: true };
  } catch {
    return { ok: false, error: "Network error. Please try again or email us directly." };
  }
}

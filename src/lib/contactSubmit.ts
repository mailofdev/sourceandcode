import { PRODUCT_NAME, SITE_DOMAIN } from "../config/site";
import {
  isWeb3FormsConfigured,
  submitContactViaWeb3Forms,
  type ContactSubmitResult,
} from "../utils/web3forms";

const SUBMIT_TIMEOUT_MS = 20_000;
const NAME_MAX = 120;
const EMAIL_MAX = 254;
const MESSAGE_MAX = 8000;
const PHONE_MAX = 40;
const SOURCE_MAX = 80;

export type SiteContactInput = {
  name: string;
  email: string;
  message: string;
  phone?: string;
  botcheck?: string;
};

function withTimeout<T>(promise: Promise<T>, timeoutMs: number, timeoutMessage: string): Promise<T> {
  let timer: ReturnType<typeof setTimeout> | null = null;
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(new Error(timeoutMessage)), timeoutMs);
  });
  return Promise.race([promise, timeout]).finally(() => {
    if (timer) clearTimeout(timer);
  });
}

function messageWithPhone(message: string, phone: string | undefined): string {
  const trimmedPhone = (phone ?? "").trim().slice(0, PHONE_MAX);
  if (!trimmedPhone) return message.trim().slice(0, MESSAGE_MAX);
  const phoneLine = `\n\nPhone: ${trimmedPhone}`;
  const room = Math.max(0, MESSAGE_MAX - phoneLine.length);
  return `${message.trim().slice(0, room)}${phoneLine}`;
}

function accessKey(): string {
  return (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "").trim();
}

/** Trim, tag this site, and submit. The Web3Forms module stays free of app config. */
export async function submitSiteContact(input: SiteContactInput): Promise<ContactSubmitResult> {
  const key = accessKey();
  if (!isWeb3FormsConfigured(key)) {
    return { ok: false, error: "Contact form is not configured." };
  }

  const payload = {
    name: input.name.trim().slice(0, NAME_MAX),
    email: input.email.trim().slice(0, EMAIL_MAX),
    message: messageWithPhone(input.message, input.phone),
    source: "contact-page".slice(0, SOURCE_MAX),
    botcheck: input.botcheck ?? "",
  };

  try {
    return await withTimeout(
      submitContactViaWeb3Forms(
        {
          accessKey: key,
          projectName: SITE_DOMAIN,
          fromName: PRODUCT_NAME,
        },
        payload,
      ),
      SUBMIT_TIMEOUT_MS,
      "Sending message timed out. Please try again.",
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not send your message.";
    return { ok: false, error: message };
  }
}

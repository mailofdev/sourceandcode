/** Product identity sent with every contact email. Not taken from the form. */
export const SITE_DOMAIN = "sourceandcode.in";
export const PRODUCT_NAME = "SourceandcodE";
export const MENTOR_URL = "https://siddhantgadakh.in";

/** Mailto fallback only. Set `VITE_CONTACT_EMAIL` on the host. */
export const CONTACT_EMAIL = (import.meta.env.VITE_CONTACT_EMAIL ?? "").trim();

/** Public Web3Forms key. Set `VITE_WEB3FORMS_ACCESS_KEY` on the host. */
export const WEB3FORMS_ACCESS_KEY = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "").trim();

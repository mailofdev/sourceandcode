import { useState } from "react";
import { MapPin, Globe, Linkedin, Github, ArrowRight } from "lucide-react";
import { CONTACT_EMAIL, MENTOR_URL, WEB3FORMS_ACCESS_KEY } from "../config/site";
import { submitSiteContact } from "../lib/contactSubmit";
import { isWeb3FormsConfigured } from "../utils/web3forms";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateContact(fields: { name: string; email: string; message: string }): FieldErrors {
  const errors: FieldErrors = {};
  if (!fields.name.trim()) errors.name = "Name is required.";
  if (!fields.email.trim()) errors.email = "Email is required.";
  else if (!EMAIL_PATTERN.test(fields.email.trim())) errors.email = "Enter a valid email.";
  if (!fields.message.trim()) errors.message = "Message is required.";
  return errors;
}

export function Contact() {
  const formReady = isWeb3FormsConfigured(WEB3FORMS_ACCESS_KEY);
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  return (
    <section id="contact" className="overflow-x-clip bg-background py-16 sm:py-20 lg:py-24">
      <SectionHeader
        eyebrow="Let's Connect"
        title="Get in Touch"
        titleGradientPart="in Touch"
        subtitle="Have questions about the batch, syllabus, or enrollment? We're here to help."
      />

      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 px-4 sm:mt-14 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8">
        <Reveal y={26} className="space-y-6">
          <div className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-8">
            <h3 className="font-heading font-bold text-navy text-lg mb-6">Contact Details</h3>
            <div className="space-y-5">
              {[
                { label: "Location", icon: MapPin, value: "Pune, India · Online across India" },
                { label: "Website", icon: Globe, value: "sourceandcode.in", href: "https://sourceandcode.in" },
                { label: "Mentor", icon: Linkedin, value: "siddhantgadakh.in", href: "https://siddhantgadakh.in" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600">
                    <item.icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{item.label}</p>
                    {"href" in item && item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="break-words text-sm font-medium text-navy hover:underline">
                        {item.value}
                      </a>
                    ) : (
                      <p className="break-words text-sm text-slate-600">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm sm:p-8">
            <h3 className="font-heading font-bold text-navy text-lg mb-6">Socials</h3>
            <div className="flex flex-wrap gap-3">
              {[
                { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/siddhant-gadakh/" },
                { label: "GitHub", icon: Github, href: "https://github.com/SourceCode-code" },
                { label: "Mentor website", icon: Globe, href: "https://siddhantgadakh.in" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-navy/10 text-navy transition-all hover:bg-gradient-to-r hover:from-blue-500 hover:via-teal-500 hover:to-purple-600 hover:text-white"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="rounded-2xl border border-navy/10 bg-white p-5 shadow-sm sm:p-8">
          <h3 className="mb-6 font-heading text-lg font-bold text-navy">Send Us a Message</h3>
          <p className="mb-6 text-sm leading-relaxed text-slate-600">
            {formReady
              ? "Share your background and when you’d like to start. We’ll reply with the current batch details."
              : "Share your background and when you’d like to start. This inbox isn’t connected yet, so please use the mentor site until then."}
          </p>
          <form
            className="relative space-y-4"
            noValidate
            onSubmit={async (event) => {
              event.preventDefault();
              const form = event.currentTarget;
              const data = new FormData(form);
              const fields = {
                name: String(data.get("name") ?? ""),
                email: String(data.get("email") ?? ""),
                phone: String(data.get("phone") ?? ""),
                message: String(data.get("message") ?? ""),
                botcheck: String(data.get("botcheck") ?? ""),
              };
              const nextFieldErrors = validateContact(fields);
              setFieldErrors(nextFieldErrors);
              if (Object.keys(nextFieldErrors).length > 0) {
                setStatus("idle");
                setError(null);
                return;
              }

              if (!formReady) {
                setStatus("error");
                setError("Contact form is not configured.");
                return;
              }

              setStatus("submitting");
              setError(null);
              const result = await submitSiteContact(fields);
              if (result.ok) {
                form.reset();
                setStatus("sent");
                return;
              }
              setStatus("error");
              setError(result.error);
            }}
          >
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0">
              <label htmlFor="contact-botcheck">Company</label>
              <input
                id="contact-botcheck"
                name="botcheck"
                type="text"
                tabIndex={-1}
                autoComplete="off"
                defaultValue=""
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="sr-only">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Name"
                  maxLength={120}
                  required
                  aria-invalid={fieldErrors.name ? true : undefined}
                  aria-describedby={fieldErrors.name ? "contact-name-error" : undefined}
                  className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-base focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {fieldErrors.name && (
                  <p id="contact-name-error" className="mt-1 text-sm text-red-600">{fieldErrors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  maxLength={254}
                  required
                  aria-invalid={fieldErrors.email ? true : undefined}
                  aria-describedby={fieldErrors.email ? "contact-email-error" : undefined}
                  className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-base focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
                {fieldErrors.email && (
                  <p id="contact-email-error" className="mt-1 text-sm text-red-600">{fieldErrors.email}</p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="contact-phone" className="sr-only">Phone</label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="Phone"
                maxLength={40}
                className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-base focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="sr-only">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder="Message"
                maxLength={8000}
                required
                aria-invalid={fieldErrors.message ? true : undefined}
                aria-describedby={fieldErrors.message ? "contact-message-error" : undefined}
                className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-base focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
              {fieldErrors.message && (
                <p id="contact-message-error" className="mt-1 text-sm text-red-600">{fieldErrors.message}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={status === "submitting"}
              className="min-h-12 w-full rounded-xl bg-gradient-to-r from-sky-400 via-indigo-500 to-violet-500 px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            >
              {status === "submitting" ? "Sending…" : "Send Message"}
            </button>
            {status === "sent" && (
              <p className="text-sm leading-relaxed text-navy" role="status">
                Thanks. We’ll reply with the current batch details.
              </p>
            )}
            {status === "error" && error && (
              <p className="text-sm leading-relaxed text-red-600" role="alert">
                {error}{" "}
                {CONTACT_EMAIL ? (
                  <>
                    You can also email us at{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium underline">
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </>
                ) : (
                  <>
                    You can also reach us through{" "}
                    <a href={MENTOR_URL} target="_blank" rel="noopener noreferrer" className="font-medium underline">
                      siddhantgadakh.in
                    </a>
                    .
                  </>
                )}
              </p>
            )}
            <p className="text-xs leading-relaxed text-slate-500">
              Your name, email, phone, and message are sent through Web3Forms so we can reply. Web3Forms’ privacy terms apply to that delivery.
            </p>
          </form>
        </div>

        <div className="rounded-2xl border border-white/15 bg-gradient-to-br from-sky-400 via-indigo-500 to-violet-500 p-6 text-white shadow-xl sm:p-8 lg:col-span-2">
          <h3 className="mb-2 font-heading text-2xl font-bold">Ready to Automate Your Future?</h3>
          <p className="mb-6 max-w-2xl text-sm text-white/90">
            Join SourceandcodE — career-focused automation testing training. Master JavaScript,
            Playwright, Cypress, API testing & CI/CD with industry mentors, real projects, and interview
            prep. Enroll now!
          </p>
          <a
            href="#enroll"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-navy shadow-lg transition-transform hover:-translate-y-0.5 sm:w-auto"
          >
            Enroll Now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}


import { useState } from "react";
import { MapPin, Globe, Linkedin, Github, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function Contact() {
  const [sent, setSent] = useState(false);

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
            Share your background and when you’d like to start. We’ll reply with the current batch details once this inbox is connected. Until then, use the mentor site above.
          </p>
          <form
            className="space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className="sr-only">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Name"
                  className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-base focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">Email</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-base focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
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
                className="w-full rounded-xl border border-navy/10 bg-white px-4 py-3 text-base focus:border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <button
              type="submit"
              className="min-h-12 w-full rounded-xl bg-gradient-to-r from-sky-400 via-indigo-500 to-violet-500 px-6 py-3 font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
            {sent && (
              <p className="text-sm leading-relaxed text-navy" role="status">
                Thanks. This form is not connected to an inbox yet, so please also reach out through siddhantgadakh.in.
              </p>
            )}
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


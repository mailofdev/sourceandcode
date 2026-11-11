import { Mail, Phone, MapPin, Globe, Linkedin, Youtube, Instagram, X, ArrowRight } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { cn } from "../lib/utils";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <SectionHeader
        eyebrow="Let's Connect"
        title="Get in Touch"
        titleGradientPart="in Touch"
        subtitle="Have questions about the batch, syllabus, or enrollment? We're here to help."
      />

      <div className="mt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <Reveal y={26} className="space-y-6">
          <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-heading font-bold text-navy text-lg mb-6">Contact Details</h3>
            <div className="space-y-5">
              {[
                { label: "Email", icon: Mail, value: "[TODO: official email]" },
                { label: "Phone / WhatsApp", icon: Phone, value: "[TODO: phone number]" },
                { label: "Location", icon: MapPin, value: "[TODO: city / \"Online — pan India\"]" },
                { label: "Website", icon: Globe, value: "[TODO]" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm text-slate-600">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
            <h3 className="font-heading font-bold text-navy text-lg mb-6">Socials</h3>
            <div className="flex gap-3">
              {[
                { label: "LinkedIn", icon: Linkedin, href: "[TODO]" },
                { label: "YouTube", icon: Youtube, href: "[TODO]" },
                { label: "Instagram", icon: Instagram, href: "[TODO]" },
                { label: "X", icon: X, href: "[TODO]" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-10 h-10 rounded-xl flex items-center justify-center border border-navy/10 text-navy hover:bg-gradient-to-r hover:from-blue-500 hover:via-teal-500 hover:to-purple-600 hover:text-white transition-all",
                    s.href === "[TODO]" ? "text-slate-400 border-slate-200 cursor-not-allowed" : "",
                  )}
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="hidden lg:flex flex-col justify-center items-start gap-8">
          <div className="p-8 rounded-2xl border border-white/15 bg-gradient-to-br from-sky-400 via-indigo-500 to-violet-500 text-white shadow-xl">
            <h3 className="font-heading font-bold text-2xl mb-2">Ready to Automate Your Future?</h3>
            <p className="text-blue-50/100 text-sm mb-6">
              Join SourceandcodE — career-focused automation testing training. Master JavaScript,
              Playwright, Cypress, API testing & CI/CD with industry mentors, real projects, and interview
              prep. Enroll now!
            </p>
            <a
              href="#enroll"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-navy font-semibold shadow-lg hover:scale-105 transition-transform"
            >
              Enroll Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm">
          <h3 className="font-heading font-bold text-navy text-lg mb-6">Send Us a Message</h3>
          <p className="text-slate-600 text-sm mb-6">
            Optional contact form fields: Name, Email, Phone, Message → submit via Formspree/EmailJS
            [TODO: choose form backend]
          </p>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gradient focus:border-transparent"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-xl border border-navy/10 bg-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gradient focus:border-transparent"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone"
              className="rounded-xl border border-navy/10 bg-white w-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gradient focus:border-transparent"
            />
            <textarea
              rows={4}
              placeholder="Message"
              className="rounded-xl border border-navy/10 bg-white w-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-gradient focus:border-transparent"
            />
            <button
              type="submit"
              className="w-full rounded-xl px-6 py-3 bg-gradient-to-r from-sky-400 via-indigo-500 to-violet-500 text-white font-semibold hover:scale-[1.02] transition-transform"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


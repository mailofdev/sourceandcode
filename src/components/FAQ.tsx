import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { cn } from "../lib/utils";

const faqs = [
  {
    q: "Who can join this course?",
    a: "Freshers, manual testers moving to automation, and working professionals who want to switch to SDET/automation roles. No coding background required — we start from fundamentals.",
  },
  {
    q: "Do I need prior programming experience?",
    a: "No. The batch begins with JavaScript fundamentals and builds up to advanced automation frameworks.",
  },
  {
    q: "How long is the batch?",
    a: "The full syllabus spans roughly 4–5 months, followed by self-paced project work.",
  },
  {
    q: "Are sessions live or recorded?",
    a: "Sessions are live and interactive with mentors, so you can ask questions as you learn.",
  },
  {
    q: "Which tools will I learn?",
    a: "Git, GitHub, JavaScript, TypeScript, Playwright, Cypress, REST API testing, BDD, Jira, CI/CD pipelines, and Testing with AI.",
  },
  {
    q: "Is there placement/interview support?",
    a: "Yes — resume building, Naukri profile setup, interview question banks, mock interviews, and regular guidance sessions.",
  },
  {
    q: "What is the fee?",
    a: "Fee and installment options are shared when you enquire. Send a message and we’ll walk you through the current batch.",
  },
  {
    q: "When does the next batch start?",
    a: "The next start date is confirmed with each enquiry. Reach out and we’ll share the upcoming batch schedule.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
      {/* soft background decoration */}
      <div className="absolute top-24 -left-32 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 -right-32 w-72 h-72 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <SectionHeader
        eyebrow="Frequently Asked Questions"
        title="Got Questions?"
        titleGradientPart="Questions"
        subtitle="Have questions about the batch, syllabus, or enrollment? We're here to help."
      />

      <div className="mx-auto mt-10 max-w-3xl space-y-3 px-4 sm:mt-14 sm:px-6 lg:px-8">
        {faqs.map(({ q, a }, i) => {
          const isOpen = openIndex === i;
          return (
            <Reveal key={i} delay={i * 0.05} y={16}>
              <div
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden",
                  isOpen
                    ? "border-blue-300/70 bg-white shadow-lg shadow-blue-500/5"
                    : "border-navy/10 bg-white hover:border-navy/20 hover:shadow-sm",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full items-start justify-between gap-3 rounded-2xl px-4 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 sm:items-center sm:gap-4 sm:px-6 sm:py-5"
                >
                  <span className="flex min-w-0 items-start gap-3 sm:items-center sm:gap-3.5">
                    <span
                      className={cn(
                        "shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-[11px] font-bold transition-colors",
                        isOpen
                          ? "bg-gradient-to-r from-sky-400 to-violet-500 text-white"
                          : "bg-navy/5 text-navy/70",
                      )}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={cn(
                        "min-w-0 text-left font-heading text-sm font-bold transition-colors sm:text-base",
                        isOpen ? "text-gradient" : "text-navy",
                      )}
                    >
                      {q}
                    </span>
                  </span>
                  <ChevronDown
                    className={cn(
                      "shrink-0 w-4 h-4 text-slate-400 transition-transform duration-300",
                      isOpen && "rotate-180 text-blue-500",
                    )}
                  />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-navy/5 px-4 pb-5 pt-4 text-sm leading-relaxed text-slate-600 sm:px-6 sm:pl-16">
                      {a}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>

      <Reveal delay={0.2} y={20}>
        <div className="mt-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-5 rounded-2xl border border-navy/10 bg-gradient-to-r from-sky-50 via-indigo-50 to-violet-50 p-5 text-center sm:flex-row sm:p-7 sm:text-left">
            <div className="shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-r from-sky-400 to-violet-500 flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-heading font-bold text-navy">Still have questions?</p>
              <p className="text-slate-500 text-sm mt-0.5">
                Reach out and we'll get back to you as soon as possible.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gradient-to-r hover:from-blue-500 hover:via-teal-500 hover:to-purple-600 sm:w-auto"
            >
              Ask a Question <Sparkles className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

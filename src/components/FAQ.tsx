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
    a: "The full syllabus spans roughly 4–5 months, followed by self-paced project work. [TODO: confirm exact batch duration & schedule]",
  },
  {
    q: "Are sessions live or recorded?",
    a: "Live interactive sessions with mentors. [TODO: confirm recording policy]",
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
    a: "[TODO: add fee, installment options, EMI]",
  },
  {
    q: "When does the next batch start?",
    a: "[TODO: add next batch start date]",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden">
      {/* soft background decoration */}
      <div className="absolute top-24 -left-32 w-72 h-72 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-24 -right-32 w-72 h-72 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

      <SectionHeader
        eyebrow="Frequently Asked Questions"
        title="Got Questions?"
        titleGradientPart="Questions"
        subtitle="Have questions about the batch, syllabus, or enrollment? We're here to help."
      />

      <div className="mt-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
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
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400/60 rounded-2xl"
                >
                  <span className="flex items-center gap-3.5">
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
                        "font-heading font-bold text-sm sm:text-base transition-colors",
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
                    <p className="px-6 pb-5 pl-16 text-slate-600 text-sm leading-relaxed border-t border-navy/5 pt-4">
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
          <div className="rounded-2xl border border-navy/10 bg-gradient-to-r from-sky-50 via-indigo-50 to-violet-50 p-6 sm:p-7 flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-navy text-white text-sm font-semibold hover:bg-gradient-to-r hover:from-blue-500 hover:via-teal-500 hover:to-purple-600 transition-all shrink-0"
            >
              Ask a Question <Sparkles className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

import { Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="overflow-x-clip bg-navy/5 py-16 sm:py-20 lg:py-24">
      <SectionHeader
        eyebrow="Hear From Our Students"
        title="Student Success Stories"
        titleGradientPart="Success Stories"
        subtitle="Graduates move into automation roles after the batch. Recent interview notes and student work are already in the batch repository."
      />

      <Reveal y={24}>
        <div className="mx-auto mt-10 max-w-3xl px-4 sm:mt-14 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-navy/10 bg-white p-6 text-center shadow-sm sm:p-10">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-sky-400/15 to-violet-500/15" />
            <Quote className="relative mx-auto mb-5 h-8 w-8 text-violet-500" />
            <h3 className="relative font-heading text-xl font-bold text-navy sm:text-2xl">
              Stories from the latest batch are being added
            </h3>
            <p className="relative mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base">
              Interview feedback, projects, and notes from Batch 5 already live alongside the course code.
            </p>
            <a
              href="https://github.com/SourceCode-code/Source_and_code_batch_5"
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[linear-gradient(115deg,#38BDF8_0%,#6366F1_55%,#8B5CF6_100%)] px-6 py-3 text-sm font-bold text-white shadow-[0_10px_30px_-12px_rgba(99,102,241,0.55)]"
            >
              Browse student work
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

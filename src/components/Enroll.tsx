import { ArrowRight, Rocket, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function Enroll() {
  return (
    <section id="enroll" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#1a1d3a] to-[#2a1b5e]" />
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-purple-600/25 blur-3xl" />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader
          eyebrow="Limited Seats Available"
          title="Unlock Your High-Paying Tech Career!"
          titleGradientPart="Tech Career!"
          subtitle="Join SourceandcodE today and transform your future. Limited seats available — secure your spot and future-proof your skills!"
          variant="dark"
          className="mb-12"
        />

        <Reveal delay={0.2} y={24}>
          <div className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-sky-400 via-indigo-500 to-violet-500 px-6 py-3.5 text-base font-bold text-white shadow-xl shadow-indigo-900/40 transition-all hover:-translate-y-0.5 hover:shadow-2xl sm:w-auto sm:px-8 sm:text-lg"
            >
              Request Your Seat
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#home"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-2xl border border-white/25 bg-white/5 px-6 py-3.5 text-base font-semibold text-white transition-all hover:border-white/40 hover:bg-white/10 sm:w-auto sm:px-8 sm:text-lg"
            >
              <ShieldCheck className="h-5 w-5 shrink-0 text-teal-400" />
              Watch the Intro
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.35} y={16}>
          <div className="mt-8 inline-flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-center text-xs leading-snug text-white/60 backdrop-blur-sm">
            <Rocket className="w-3.5 h-3.5 text-orange-400" />
            Seats are limited — early birds get priority mentoring slots
          </div>
        </Reveal>

      </div>
    </section>
  );
}

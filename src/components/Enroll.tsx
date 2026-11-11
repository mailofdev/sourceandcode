import { ArrowRight, Rocket, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function Enroll() {
  return (
    <section id="enroll" className="py-24 relative overflow-hidden">
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="[TODO: payment link / Google Form / WhatsApp deep link]"
              className="group inline-flex items-center gap-2.5 px-10 py-4 rounded-2xl bg-gradient-to-r from-sky-400 via-indigo-500 to-violet-500 text-white font-bold text-lg shadow-xl shadow-indigo-900/40 hover:shadow-2xl hover:scale-[1.03] transition-all"
            >
              Enroll Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="[TODO: WhatsApp link]"
              className="inline-flex items-center gap-2.5 px-10 py-4 rounded-2xl border border-white/25 bg-white/5 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/40 transition-all"
            >
              <ShieldCheck className="w-5 h-5 text-teal-400" />
              Talk to Us on WhatsApp
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.35} y={16}>
          <div className="mt-8 inline-flex items-center gap-2 text-white/60 text-xs border border-white/10 bg-white/5 rounded-full px-4 py-2 backdrop-blur-sm">
            <Rocket className="w-3.5 h-3.5 text-orange-400" />
            Seats are limited — early birds get priority mentoring slots
          </div>
        </Reveal>

        <p className="mt-6 text-white/50 text-xs italic max-w-md mx-auto">
          [TODO: payment link / Google Form / WhatsApp deep link] · [TODO: WhatsApp link]
        </p>
      </div>
    </section>
  );
}

import { User, Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-navy/5">
      <SectionHeader
        eyebrow="Hear From Our Students"
        title="Student Success Stories"
        titleGradientPart="Success Stories"
        subtitle="[TODO: collect 3–6 short student testimonials/quotes with name, current role/company. Source material may exist in the INTERVIEW_FEEDBACK folder of the GitHub repo.]"
      />

      <div className="mt-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[0, 1, 2].map((i) => (
          <Reveal key={i} delay={i * 0.1} y={26}>
            <div className="h-full rounded-2xl border border-navy/10 bg-white p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all relative overflow-hidden">
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
              <Quote className="w-7 h-7 text-violet-500 mb-6 relative z-10" />
              <p className="text-slate-600 leading-relaxed mb-6 italic relative z-10">
                "[TODO: Add student quote — structure: Quote • Name • Current designation • Company • Photo (optional)]"
              </p>
              <div className="flex items-center gap-3 relative z-10 pt-4 border-t border-navy/5">
                <div className="w-10 h-10 rounded-full bg-navy/10 overflow-hidden border border-navy/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-slate-400" />
                </div>
                <div>
                  <p className="text-xs font-bold text-navy">[TODO: Student Name]</p>
                  <p className="text-[10px] text-slate-500 uppercase">[TODO: Role · Company]</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

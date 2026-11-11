import { HandHeart, Layers, FileText, Code2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const pillars = [
  {
    no: "1",
    title: "Mentorship",
    body: "Expert guidance from industry professionals who work on real automation suites every day.",
    icon: HandHeart,
  },
  {
    no: "2",
    title: "Real Projects",
    body: "Hands-on experience with industry-relevant automation projects, not toy examples.",
    icon: Layers,
  },
  {
    no: "3",
    title: "Interview Prep",
    body: "Comprehensive support to ace your job interviews, including interview questions, mock sessions, and resume building.",
    icon: FileText,
  },
  {
    no: "4",
    title: "Structured Curriculum",
    body: "A clear, guided learning path from fundamentals to advanced topics — no more information overload.",
    icon: Code2,
  },
];

const techStack = ["JavaScript", "TypeScript", "Playwright", "Cypress", "Git & GitHub", "Jira", "CI/CD", "BDD", "REST APIs", "AI-assisted Testing"];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-navy/5">
      <SectionHeader
        eyebrow="Your Path to Success"
        title="Why SourceandcodE"
        titleGradientPart="SourceandcodE"
        subtitle="SourceandcodE is meticulously crafted to bridge the gap between learning and employability. We provide a holistic approach that guarantees practical experience and career readiness."
      />

      <div className="mt-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {pillars.map((p, i) => (
          <Reveal key={i} delay={i * 0.1} y={26}>
            <div className="h-full rounded-2xl border border-navy/10 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-gradient transition-all group">
              <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center mb-4 group-hover:bg-gradient-to-r group-hover:from-sky-400 group-hover:via-indigo-500 group-hover:to-violet-500 group-hover:text-white group-hover:scale-110 transition-all">
                <p.icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-2">{p.no}</span>
              <h3 className="font-heading font-bold text-navy mb-2">{p.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 max-w-3xl mx-auto px-4 text-center">
        <Reveal y={20}>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {techStack.map((t, i) => (
              <span key={i} className="px-3.5 py-1.5 rounded-full border border-navy/10 bg-white text-xs font-medium text-navy shadow-sm hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default">
                {t}
              </span>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.2} y={20}>
          <p className="text-slate-600 leading-relaxed text-lg">
            Our unique methodology ensures you gain not just knowledge, but the confidence and practical
            skills essential for a successful career.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

import { ShieldCheck, Users, Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { cn } from "../lib/utils";

const solutions = [
  {
    challenge: "Information Overload",
    challengeBody: "Feeling overwhelmed by the vast amount of tools and concepts",
    solution: "Structured Curriculum",
    solutionBody: "One clear path, one module at a time",
    icon: ShieldCheck,
    iconColor: "bg-blue-500/10 text-blue-600",
  },
  {
    challenge: "Lack of Practical Skills",
    challengeBody: "Difficulty applying theory to real-world projects",
    solution: "Real Projects & Hackathons",
    solutionBody: "Build what companies actually use",
    icon: Star,
    iconColor: "bg-purple-500/10 text-purple-600",
  },
  {
    challenge: "No Clear Path",
    challengeBody: "Uncertainty about the best roadmap for career growth",
    solution: "Mentorship & Guidance Sessions",
    solutionBody: "Triweekly direction from industry pros",
    icon: Users,
    iconColor: "bg-teal-500/10 text-teal-600",
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="overflow-x-clip bg-background py-16 sm:py-20 lg:py-24">
      <SectionHeader
        eyebrow="We Understand the Struggle"
        title="From Confusion to Clarity"
        titleGradientPart="to Clarity"
        subtitle="Three common challenges aspiring testers face — and how SourceandcodE solves each one."
      />

      <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 px-4 sm:mt-14 sm:px-6 sm:gap-6 lg:grid-cols-3 lg:px-8">
        {solutions.map((s, i) => (
          <Reveal key={i} delay={i * 0.1} y={26}>
            <div className="h-full rounded-2xl border border-navy/10 bg-white p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-4", s.iconColor)}>
              <s.icon className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-navy mb-1">{s.challenge}</h4>
            <p className="text-xs text-slate-500 mb-4">{s.challengeBody}</p>
            <div className="rounded-xl border border-green-100 bg-green-50 p-3">
              <h5 className="font-bold text-green-800 text-xs mb-1">✅ Our Solution: {s.solution}</h5>
              <p className="text-xs text-green-700">{s.solutionBody}</p>
            </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

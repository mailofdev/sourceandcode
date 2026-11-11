import { CheckCircle2, Clock, ShieldAlert, Users } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const rules = [
  { no: 1, text: "Attend every live session on time — punctuality is mandatory.", icon: Clock },
  { no: 2, text: "Practice daily. Consistency beats intensity.", icon: ShieldAlert },
  { no: 3, text: "Complete assignments and push your code to the batch GitHub repo.", icon: Code2Placeholder },
  { no: 4, text: "Ask questions in every session — no doubt is too small.", icon: Users },
  { no: 5, text: "Respect fellow batch members and mentors.", icon: CheckCircle2 },
  { no: 6, text: "Recordings (if any) are for enrolled students only — do not share.", icon: ShieldAlert },
  { no: 7, text: "Focus in class — keep phones and distractions away during sessions.", icon: Clock },
  { no: 8, text: "Participate in hackathons and mock interviews.", icon: Users },
];

function Code2Placeholder({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export function Rules() {
  return (
    <section id="rules" className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-[#1a1d3a] to-[#2a1b5e]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Rules for the Batch"
          title="Follow Them"
          titleGradientPart="Follow Them"
          subtitle="Discipline is the difference between completing a course and launching a career. These rules apply to every SourceandcodE batch."
          variant="dark"
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {rules.map((rule, i) => (
            <Reveal key={rule.no} delay={i * 0.06} y={20}>
              <div
                className="flex h-full items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all hover:border-white/20 hover:bg-white/10 sm:p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-sky-400 to-violet-500 flex items-center justify-center text-white shrink-0 shadow-lg shadow-indigo-900/40">
                  <rule.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest block mb-1">
                    Rule {rule.no}
                  </span>
                  <p className="text-white/90 text-sm leading-relaxed">{rule.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

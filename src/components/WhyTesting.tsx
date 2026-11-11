import { TrendingUp, Rocket, Lock, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { cn } from "../lib/utils";

const cards = [
  {
    icon: TrendingUp,
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    title: "Explosive Growth",
    body: "Software development is growing rapidly, and with it the demand for skilled automation testers.",
  },
  {
    icon: Rocket,
    color: "bg-teal-500/10 text-teal-600 border-teal-500/20",
    title: "AI & DevOps Integration",
    body: "Modern teams combine automation testing with AI and DevOps methodologies — the skills of the future.",
  },
  {
    icon: Lock,
    color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    title: "Critical Role",
    body: "Testers play a critical role in product quality and release cycles — you are the gatekeeper of quality.",
  },
  {
    icon: Sparkles,
    color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    title: "High Earning Potential",
    body: "Automation Testers earn up to 2x more than manual testers as companies adopt agile and DevOps.",
  },
];

export function WhyTesting() {
  return (
    <section id="why-testing" className="py-24 bg-navy/5">
      <SectionHeader
        eyebrow="Why Automation Testing"
        title="Why Automation Testing is a Hot Career"
        titleGradientPart="Hot Career"
        subtitle="Automation Testers earn up to 2x more than manual testers. The software industry is booming — and as companies adopt agile and DevOps, the need for efficient automated testing becomes paramount."
      />

      <div className="mt-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, i) => (
          <Reveal key={i} delay={i * 0.08} y={26}>
            <div
              className={cn(
                "h-full rounded-2xl border p-6 hover:-translate-y-1.5 hover:shadow-lg transition-all duration-300 group",
                card.color,
              )}
            >
              <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform", card.color.replace("/10", "/20"))}>
                <card.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-navy mb-2">{card.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{card.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3} y={24}>
        <div className="mt-16 max-w-2xl mx-auto px-4 text-center bg-white rounded-2xl border border-navy/10 p-8 shadow-sm">
          <p className="text-slate-600 leading-relaxed italic text-lg">
            "Position yourself at the forefront of innovation — AI in Testing, Cloud Automation, and Test
            Leadership roles await."
          </p>
          <p className="mt-4 text-xs text-slate-500">
            Source points: leveraging AI for predictive analytics, test generation and defect detection;
            cloud-based test environments for scalability; career path to Test Lead, Architect, and Manager roles.
          </p>
        </div>
      </Reveal>
    </section>
  );
}

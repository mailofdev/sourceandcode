import { Clock, Code, Zap } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const ongoing = [
  { label: "Q&A Sessions", value: "Biweekly", icon: Zap },
  { label: "Guidance Sessions", value: "Triweekly", icon: Clock },
  { label: "Hackathons", value: "Once a Month", icon: Code },
];

const modules = [
  { no: "01", name: "Demo Lectures", duration: "5 days" },
  { no: "02", name: "Manual Testing (Self-paced)", duration: "Self-paced" },
  { no: "03", name: "Git", duration: "5 days" },
  { no: "04", name: "GitHub", duration: "3 days" },
  { no: "05", name: "JavaScript (Advanced)", duration: "30 days" },
  { no: "06", name: "API Testing — Manual", duration: "10 days" },
  { no: "07", name: "Frameworks — Page Object Model (POM)", duration: "15 days" },
  { no: "08", name: "API Automation", duration: "10 days" },
  { no: "09", name: "BDD (Behavior Driven Development)", duration: "15 days" },
  { no: "10", name: "Cypress", duration: "40 days" },
  { no: "11", name: "AJAX", duration: "20 days" },
  { no: "12", name: "Testing with AI (Optional)", duration: "15 days" },
  { no: "13", name: "TypeScript", duration: "25 days" },
  { no: "14", name: "CI/CD — Basics", duration: "10 days" },
  { no: "15", name: "Jira", duration: "5 days" },
  { no: "16", name: "CI/CD — Flow", duration: "15 days" },
  { no: "17", name: "Resume Building & Naukri Profile", duration: "3 days" },
  { no: "18", name: "Project", duration: "Self-paced" },
];

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 bg-background">
      <SectionHeader
        eyebrow="Your Roadmap to Becoming an Automation Tester"
        title="A Guided Learning Path, Module by Module"
        titleGradientPart="Module by Module"
        subtitle="A clear, guided learning path — from fundamentals to advanced topics. Here's exactly what you'll master."
        className="mb-16"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mx-4">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-navy/20" />
          {modules.map((mod, i) => {
            const isLast = i === modules.length - 1;
            return (
              <div key={i} className="relative pl-16 mb-12 group">
                <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-gradient-to-r from-sky-400 to-violet-500 shadow-lg ring-2 ring-white" />
                <span className="absolute -left-4 -top-1 text-[10px] font-bold text-navy/60 uppercase tracking-widest">
                  {mod.no}
                </span>
                <div className="rounded-xl border border-navy/10 bg-white p-5 shadow-sm hover:shadow-md transition-all group-hover:border-gradient group-hover:scale-[1.02]">
                  <h4 className="font-heading font-bold text-navy">{mod.name}</h4>
                  <p className="text-xs text-slate-500 mt-1">{mod.duration}</p>
                </div>
                {!isLast && (
                  <div className="absolute left-2 top-6 bottom-6 w-0.5 bg-navy/10" />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-3 text-center">
          {ongoing.map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 rounded-full border border-navy/20 bg-white px-4 py-2 text-xs font-medium text-navy shadow-sm hover:border-gradient transition-all"
            >
              <item.icon className="w-3 h-3 text-purple-500" />
              <span>{item.label}</span>
              <span className="w-px h-3 bg-navy/20 mx-1" />
              <span>{item.value}</span>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-500 max-w-md mx-auto italic">
          [TODO: confirm final module order & durations for Batch 5]
        </p>
      </div>
    </section>
  );
}

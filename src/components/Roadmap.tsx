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
    <section id="roadmap" className="overflow-x-clip bg-background py-16 sm:py-20 lg:py-24">
      <SectionHeader
        eyebrow="Your Roadmap to Becoming an Automation Tester"
        title="A Guided Learning Path, Module by Module"
        titleGradientPart="Module by Module"
        subtitle="A clear, guided learning path — from fundamentals to advanced topics. Here's exactly what you'll master."
        className="mb-16"
      />

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute bottom-2 left-2 top-2 w-px -translate-x-1/2 bg-navy/15" />
          {modules.map((mod) => (
            <div key={mod.no} className="relative mb-4 pl-8 last:mb-0 sm:mb-5 sm:pl-10">
              <span className="absolute left-2 top-5 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-400 to-violet-500 shadow-lg ring-2 ring-white" />
              <div className="rounded-xl border border-navy/10 bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-5">
                <p className="text-[10px] font-bold uppercase tracking-widest text-navy/50">{mod.no}</p>
                <h4 className="font-heading text-[15px] font-bold text-navy sm:text-base">{mod.name}</h4>
                <p className="mt-1 text-xs text-slate-500">{mod.duration}</p>
              </div>
            </div>
          ))}
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
      </div>
    </section>
  );
}

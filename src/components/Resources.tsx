import { Code2, GitBranch, Folder, CheckCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";
import { cn } from "../lib/utils";

const folders = [
  { name: "PLAYWRIGHT_MAIN", desc: "Playwright automation code" },
  { name: "STUDENT_PLAYWRIGHT", desc: "Student Playwright projects" },
  { name: "PLAYWRIGHT_THEORY_NOTES", desc: "Playwright theory notes" },
  { name: "JAVASCRIPT", desc: "JavaScript course code" },
  { name: "DOM", desc: "DOM manipulation material" },
  { name: "GIT_GITHUB", desc: "Git & GitHub material" },
  { name: "AGILE_&_SCRUM", desc: "Agile & Scrum material" },
  { name: "Framework_1", desc: "Framework (POM) implementation" },
  { name: "INTERVIEW_QUESTIONS", desc: "Interview question bank" },
  { name: "INTERVIEW_FEEDBACK", desc: "Interview feedback & learnings" },
  { name: "RESOURCES", desc: "Extra learning resources" },
  { name: "BATCH_5_STUDENTS", desc: "Batch 5 student work" },
  { name: "Support_structure", desc: "Support & guidance material" },
];

export function Resources() {
  return (
    <section id="resources" className="py-24 bg-background">
      <SectionHeader
        eyebrow="Code, Notes & Resources"
        title="Free GitHub Access for Every Batch"
        titleGradientPart="GitHub Access"
        subtitle="Every batch gets an official GitHub repository with all lecture code, theory notes, interview material, and student work. Learn by reading, cloning, and building."
      />

      <Reveal y={26}>
        <div className="mt-12 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl border border-navy/10 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-heading font-bold text-navy">Official Batch 5 Repository</h3>
            <a
              href="https://github.com/SourceCode-code/Source_and_code_batch_5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gradient font-medium text-sm hover:underline"
            >
              github.com/SourceCode-code/Source_and_code_batch_5
            </a>
            <p className="text-slate-500 text-xs mt-1">"This is the official repo to store Batch 5 code."</p>
          </div>
        </div>
        <a
          href="https://github.com/SourceCode-code/Source_and_code_batch_5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-400 via-indigo-500 to-violet-500 text-white font-semibold shadow-lg hover:scale-105 transition-transform"
        >
          Open GitHub Repo <GitBranch className="w-4 h-4" />
        </a>
        <p className="mt-6 text-xs text-slate-500 italic max-w-lg mx-auto">
          [TODO: update repo link for future batches, or use an organization-level landing repo]
        </p>
        </div>
      </Reveal>

      <div className="mt-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {folders.map((f, i) => (
            <div
              key={i}
              className={cn(
                "rounded-xl border border-navy/10 bg-white p-4 text-center hover:border-gradient hover:shadow-sm transition-all",
                i % 4 === 0 ? "bg-navy/5" : "",
              )}
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Folder className="w-4 h-4 text-slate-400" />
                <span className="text-[10px] font-medium text-slate-600 uppercase tracking-tighter">{f.name}</span>
              </div>
              <p className="text-xs text-slate-500 leading-tight">{f.desc}</p>
              <CheckCircle className="w-3 h-3 text-green-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

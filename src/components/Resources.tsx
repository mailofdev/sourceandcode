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
    <section id="resources" className="overflow-x-clip bg-background py-16 sm:py-20 lg:py-24">
      <SectionHeader
        eyebrow="Code, Notes & Resources"
        title="Free GitHub Access for Every Batch"
        titleGradientPart="GitHub Access"
        subtitle="Every batch gets an official GitHub repository with all lecture code, theory notes, interview material, and student work. Learn by reading, cloning, and building."
      />

      <Reveal y={26}>
        <div className="mx-4 mt-10 max-w-3xl rounded-2xl border border-navy/10 bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:mx-6 sm:mt-12 sm:p-8 lg:mx-auto">
        <div className="mb-6 flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600">
            <Code2 className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <h3 className="font-heading font-bold text-navy">Official Batch 5 Repository</h3>
            <a
              href="https://github.com/SourceCode-code/Source_and_code_batch_5"
              target="_blank"
              rel="noopener noreferrer"
              className="break-all text-sm font-medium text-gradient hover:underline"
            >
              github.com/SourceCode-code/Source_and_code_batch_5
            </a>
            <p className="mt-1 text-xs text-slate-500">"This is the official repo to store Batch 5 code."</p>
          </div>
        </div>
        <a
          href="https://github.com/SourceCode-code/Source_and_code_batch_5"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-sky-400 via-indigo-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 sm:w-auto"
        >
          Open GitHub Repo <GitBranch className="h-4 w-4" />
        </a>
        </div>
      </Reveal>

      <div className="mx-auto mt-10 max-w-5xl px-4 sm:mt-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {folders.map((f, i) => (
            <div
              key={i}
              className={cn(
                "min-w-0 rounded-xl border border-navy/10 bg-white p-4 text-left transition-all hover:shadow-sm sm:text-center",
                i % 4 === 0 ? "bg-navy/5" : "",
              )}
            >
              <div className="mb-2 flex items-start justify-start gap-2 sm:items-center sm:justify-center">
                <Folder className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" />
                <span className="break-words text-[11px] font-semibold uppercase leading-snug tracking-tight text-slate-600">{f.name}</span>
              </div>
              <p className="text-xs leading-snug text-slate-500">{f.desc}</p>
              <CheckCircle className="w-3 h-3 text-green-500 mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

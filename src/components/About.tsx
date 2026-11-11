import { Building2, ShieldCheck, GraduationCap, Users } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { Reveal } from "./Reveal";

const aboutCopy = [
  "SourceandcodE is a career-focused training institute for aspiring automation testers and software engineers. Our mission is simple: bridge the gap between learning and employability.",
  "Many aspiring testers face the same hurdles — information overload, too many tools and no clear path, and theory that never becomes practical skill. SourceandcodE is meticulously crafted to solve exactly that. With a structured curriculum, expert mentorship from working industry professionals, hands-on projects, and comprehensive interview preparation, we don't just teach tools — we build confident, job-ready automation engineers.",
];

export function About() {
  return (
    <section id="about" className="py-24 bg-background">
      <SectionHeader
        eyebrow="About SourceandcodE"
        title="Bridge the Gap Between Learning & Employability"
        titleGradientPart="Employability"
        subtitle="A career-focused training institute for aspiring automation testers and software engineers."
      />

      <div className="mt-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <Reveal y={28} className="space-y-6">
          {aboutCopy.map((para, i) => (
            <p key={i} className="text-slate-600 leading-relaxed">
              {para}
            </p>
          ))}
        </Reveal>

        <Reveal delay={0.15} y={30} className="relative">
          <div className="relative rounded-2xl overflow-hidden border border-navy/10 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-teal-500/10 to-purple-500/20" />
            <div className="relative p-8 sm:p-12 bg-white/80 backdrop-blur-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-navy flex items-center justify-center text-white shadow-lg">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-navy text-lg">Siddhant Gadakh</h3>
                  <p className="text-sm text-gradient font-medium">Founder & Mentor</p>
                </div>
              </div>
              <p className="text-slate-600 text-sm">Software Test Engineer & Automation Expert</p>
              <a
                href="https://siddhantgadakh.in"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-gradient hover:underline"
              >
                Visit siddhantgadakh.in <span>→</span>
              </a>
              <div className="mt-6 pt-6 border-t border-navy/10 flex flex-wrap gap-3 text-xs font-medium text-slate-500">
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" /> 200+ students trained
                </span>
                <span className="w-px h-3 bg-navy/20" />
                <span className="flex items-center gap-1">
                  <GraduationCap className="w-3 h-3" /> B.E. Mechanical Engineering
                </span>
                <span className="w-px h-3 bg-navy/20" />
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> Pune, India
                </span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-teal-400 to-purple-600 rounded-2xl blur opacity-20 -z-10" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

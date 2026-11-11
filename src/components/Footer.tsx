import { Mail, MapPin } from "lucide-react";

const quickLinks = ["Home", "About", "Roadmap", "Why Us", "Resources", "FAQ"];
const resourceLinks = [
  { label: "GitHub Repo (Batch 5)", href: "https://github.com/SourceCode-code/Source_and_code_batch_5" },
  { label: "Playwright Notes", href: "https://github.com/SourceCode-code/Source_and_code_batch_5" },
  { label: "Interview Questions", href: "https://github.com/SourceCode-code/Source_and_code_batch_5" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="mb-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="sm:col-span-2 lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 via-teal-400 to-purple-600 flex items-center justify-center text-navy shadow-lg shadow-purple-200/30">
                <span className="text-white font-extrabold tracking-tighter text-sm">S</span>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                Sourceandcod<span className="text-gradient">E</span>
              </span>
            </div>
            <p className="text-sm font-semibold text-white tracking-tight mb-2">Automate Your Future.</p>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Career-focused automation testing training — mentorship, real projects, interview prep.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase().replace(" ", "-")}`}
                    className="text-slate-400 text-sm hover:text-gradient transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((r) => (
                <li key={r.label}>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-400 transition-colors hover:text-gradient"
                  >
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <a href="#contact" className="transition-colors hover:text-white">Send a message</a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Pune, India · Online across India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="max-w-md text-xs leading-relaxed text-slate-500">
            © 2026 SourceandcodE. <span className="font-medium text-gradient">All rights reserved.</span> Crafted with ❤️ for future automation engineers.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-slate-500">
            <a
              href="https://siddhantgadakh.in"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gradient transition-colors"
            >
              Mentor: Siddhant Gadakh
            </a>
            <a href="#" className="hover:text-gradient transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

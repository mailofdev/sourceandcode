import { Mail, Phone, MapPin } from "lucide-react";
import { cn } from "../lib/utils";

const quickLinks = ["Home", "About", "Roadmap", "Why Us", "Resources", "FAQ"];
const resourceLinks = [
  { label: "GitHub Repo (Batch 5)", href: "https://github.com/SourceCode-code/Source_and_code_batch_5" },
  { label: "Playwright Notes", href: "#" },
  { label: "Interview Questions", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="col-span-1 lg:col-span-2">
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

          <div>
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

          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((r) => (
                <li key={r.label}>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "text-slate-400 text-sm hover:text-gradient transition-colors",
                      r.href === "#" ? "text-slate-500 cursor-not-allowed" : "",
                    )}
                  >
                    {r.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <Mail className="w-4 h-4 shrink-0 mt-0.5" />
                <div>[TODO: official email]</div>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <Phone className="w-4 h-4 shrink-0 mt-0.5" />
                <div>[TODO: phone number]</div>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <div>[TODO: city / "Online — pan India"]</div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-slate-500 text-xs">
            <span>© 2026 SourceandcodE.</span>
            <span className="text-gradient font-medium">All rights reserved.</span>
            <span>| Crafted with ❤️ for future automation engineers.</span>
          </div>
          <div className="flex items-center gap-4 text-slate-500 text-xs">
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

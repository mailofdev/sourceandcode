import { useEffect, useState, useCallback } from "react";
import { Menu, X, Github, Linkedin, ExternalLink, Terminal } from "lucide-react";
import { cn } from "../lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Why Us", href: "#why-us" },
  { label: "Resources", href: "#resources" },
  { label: "Rules", href: "#rules" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-90px 0% -60% 0%", threshold: 0.05 },
    );

    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.href.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const onLinkClick = () => setOpen(false);

  return (
    <nav
      className={cn(
        "fixed z-50 top-0 left-0 right-0 transition-all duration-300",
        scrolled ? "glass-navbar scrolled py-2" : "glass-navbar py-3",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo: gradient tile + stacked wordmark */}
        <a href="#home" className="flex items-center gap-3 shrink-0 group" onClick={onLinkClick}>
          <div className="relative w-11 h-11 rounded-2xl bg-[linear-gradient(135deg,#38BDF8_0%,#6366F1_55%,#8B5CF6_100%)] flex items-center justify-center shadow-lg shadow-indigo-500/25 group-hover:scale-105 group-hover:rotate-3 transition-transform duration-300">
            <Terminal className="w-5 h-5 text-white" />
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-navy border-2 border-white" />
          </div>
          <div className="leading-tight hidden sm:block">
            <span className="block font-heading font-extrabold text-lg tracking-tight text-navy">
              Sourceandcod<span className="text-gradient">E</span>
            </span>
            <span className="block text-[10px] font-semibold tracking-[0.14em] uppercase text-slate-400">
              Automate Your Future
            </span>
          </div>
        </a>

        {/* Nav links: pill container with sliding active state */}
        <div className="hidden lg:flex items-center gap-0.5 bg-navy/[0.04] rounded-full p-1 border border-navy/[0.06]">
          {NAV_LINKS.map((link) => {
            const active = activeId === link.label;
            return (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 rounded-full text-[13px] font-semibold transition-all duration-200",
                  active ? "text-white" : "text-slate-600 hover:text-navy",
                )}
                onClick={onLinkClick}
              >
                {active && (
                  <span className="absolute inset-0 rounded-full bg-[linear-gradient(120deg,#38BDF8_0%,#6366F1_100%)] shadow-md shadow-indigo-500/30" />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </div>

        {/* Socials + CTA */}
        <div className="hidden lg:flex items-center gap-2">
          <a
            href="https://github.com/SourceCode-code"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:shadow-md hover:shadow-purple-500/30 transition-all duration-200"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/siddhant-gadakh/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:shadow-md hover:shadow-purple-500/30 transition-all duration-200"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="https://siddhantgadakh.in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Mentor website"
            className="w-9 h-9 rounded-xl flex items-center justify-center text-slate-500 hover:text-white hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:shadow-md hover:shadow-purple-500/30 transition-all duration-200"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
          <span className="w-px h-6 bg-navy/10 mx-1" />
          <a
            href="#enroll"
            className="btn-gradient !rounded-2xl !px-5 !py-2.5 text-sm"
            onClick={onLinkClick}
          >
            Enroll Now
          </a>
        </div>

        <button
          className="lg:hidden p-2.5 rounded-xl bg-navy/5 text-navy"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden mt-3 mx-4 rounded-3xl border border-navy/10 bg-white/95 backdrop-blur-xl p-4 shadow-2xl shadow-navy/10">
          <div className="space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={onLinkClick}
                className={cn(
                  "block py-3 px-4 text-sm font-semibold rounded-2xl transition-colors",
                  activeId === link.label
                    ? "bg-[linear-gradient(120deg,#38BDF8_0%,#8B5CF6_100%)] text-white shadow-md shadow-indigo-500/25"
                    : "text-slate-600 hover:bg-navy/5",
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="#enroll"
            onClick={onLinkClick}
            className="btn-gradient mt-4 w-full !rounded-2xl text-sm"
          >
            Enroll Now
          </a>
        </div>
      )}
    </nav>
  );
}

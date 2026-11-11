import { useEffect, useState } from "react";
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

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/SourceCode-code", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/siddhant-gadakh/", icon: Linkedin },
  { label: "Mentor website", href: "https://siddhantgadakh.in", icon: ExternalLink },
];

function linkId(href: string) {
  return href.replace("#", "");
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const next = window.scrollY > 10;
        setScrolled((prev) => (prev === next ? prev : next));
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-90px 0% -60% 0%", threshold: 0.05 },
    );

    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(linkId(link.href));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1280) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const onLinkClick = () => setOpen(false);
  const isActive = (href: string) => activeId === linkId(href);

  return (
    <nav
      className={cn(
        "glass-navbar fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled && "scrolled",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 pt-[max(0.625rem,env(safe-area-inset-top))] sm:px-6 lg:px-8">
        <a href="#home" className="group flex min-w-0 items-center gap-2.5 sm:gap-3" onClick={onLinkClick}>
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#38BDF8_0%,#6366F1_55%,#8B5CF6_100%)] shadow-lg shadow-indigo-500/25 transition-transform duration-300 group-hover:rotate-3 group-hover:scale-105 sm:h-11 sm:w-11">
            <Terminal className="h-5 w-5 text-white" />
            <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-white bg-navy" />
          </div>
          <div className="min-w-0 leading-tight">
            <span className="block truncate font-heading text-base font-extrabold tracking-tight text-navy sm:text-lg">
              Sourceandcod<span className="text-gradient">E</span>
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:block">
              Automate Your Future
            </span>
          </div>
        </a>

        <div className="hidden items-center gap-0.5 rounded-full border border-navy/[0.06] bg-navy/[0.04] p-1 xl:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <a
                key={link.label}
                href={link.href}
                className={cn(
                  "relative rounded-full px-3 py-2 text-[13px] font-semibold transition-all duration-200",
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

        <div className="hidden items-center gap-2 xl:flex">
          {SOCIALS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className="flex h-9 w-9 items-center justify-center rounded-xl text-slate-500 transition-all duration-200 hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-600 hover:text-white hover:shadow-md hover:shadow-purple-500/30"
            >
              <item.icon className="h-4 w-4" />
            </a>
          ))}
          <span className="mx-1 h-6 w-px bg-navy/10" />
          <a href="#enroll" className="btn-gradient !rounded-2xl !px-5 !py-2.5 text-sm" onClick={onLinkClick}>
            Enroll Now
          </a>
        </div>

        <button
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-navy/5 text-navy xl:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-navy/10 bg-white/95 backdrop-blur-xl xl:hidden">
          <div className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
            <div className="space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={onLinkClick}
                  className={cn(
                    "block min-h-11 rounded-2xl px-4 py-3 text-sm font-semibold transition-colors",
                    isActive(link.href)
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
              className="btn-gradient mt-3 min-h-12 w-full !rounded-2xl text-sm"
            >
              Enroll Now
            </a>
            <div className="mt-3 flex items-center gap-2">
              {SOCIALS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-xl border border-navy/10 text-navy"
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

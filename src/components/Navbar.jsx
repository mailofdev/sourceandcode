"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import config from "@/config/site.config";
import Logo from "@/components/Logo";
import Icon from "@/components/ui/Icon";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = config.nav.map((item) => item.href.replace("#", ""));

    const update = () => {
      const marker = 96;
      let current = ids[0];
      ids.forEach((id) => {
        const node = document.getElementById(id);
        if (!node) return;
        if (node.getBoundingClientRect().top - marker <= 0) current = id;
      });
      setActive(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/80 bg-white/90 backdrop-blur-xl transition-shadow ${
        scrolled ? "shadow-[0_8px_30px_rgba(16,22,46,0.08)]" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex h-[60px] max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <Link href="/#home" className="shrink-0" aria-label={`${config.site.name} home`}>
          <Logo />
        </Link>

        <nav className="hidden items-center gap-x-4 xl:gap-x-5 lg:flex" aria-label="Primary">
          {config.nav.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className={`relative text-[13px] font-medium transition-colors xl:text-sm ${
                  isActive
                    ? "font-semibold text-navy after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-gradient-to-r after:from-[#2196f3] after:via-[#fb8c00] after:to-[#7b2ff7]"
                    : "text-muted hover:text-navy"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a href={config.enroll.href} className="btn-primary hidden px-4 text-sm lg:inline-flex">
            {config.enroll.label}
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/70 bg-white/50 text-navy lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          className="border-t border-white/60 bg-white/80 px-4 py-3 backdrop-blur-xl lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col">
            {config.nav.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? "location" : undefined}
                    className={`block rounded-xl px-3 py-3 text-base font-medium ${
                      isActive ? "bg-white/80 text-navy" : "text-muted"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
          <a
            href={config.enroll.href}
            className="btn-primary mt-2 inline-flex w-full"
            onClick={() => setOpen(false)}
          >
            {config.enroll.label}
          </a>
        </nav>
      ) : null}
    </header>
  );
}

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
    const ids = config.nav.map((item) => item.href.replace("#", ""));
    let frame = 0;

    const update = () => {
      frame = 0;
      const nextScrolled = window.scrollY > 8;
      setScrolled((prev) => (prev === nextScrolled ? prev : nextScrolled));

      const marker = 80;
      let current = ids[0];
      ids.forEach((id) => {
        const node = document.getElementById(id);
        if (!node) return;
        if (node.getBoundingClientRect().top - marker <= 0) current = id;
      });
      setActive((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
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
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`glass glass-bar rounded-none transition-shadow ${
          scrolled ? "shadow-[0_16px_40px_rgba(76,29,149,0.16)]" : ""
        }`}
      >
      <div className="flex h-[60px] items-center justify-between gap-3 px-3 sm:px-4 lg:h-16 lg:px-5">
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
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 bg-white/45 text-navy shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] lg:hidden"
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
          className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/50 px-3 py-3 lg:hidden"
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
                      isActive ? "bg-white/70 text-navy shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]" : "text-muted"
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
      </div>
    </header>
  );
}

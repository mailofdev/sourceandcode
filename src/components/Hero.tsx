import { ArrowRight, Code2, Users, GraduationCap, Layers, Zap, CheckCircle2, Sparkles, Award, GitBranch } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, Counter } from "./Reveal";

const TECHS = [
  "JavaScript", "TypeScript", "Playwright", "Cypress", "Git & GitHub",
  "Jira", "CI/CD", "REST APIs", "BDD", "Testing with AI",
];

const STATS = [
  { value: 18, suffix: "", icon: Layers, label: "Modules" },
  { value: 200, suffix: "+", icon: Users, label: "Students" },
  { value: 5, suffix: "+", icon: GraduationCap, label: "Months" },
];

const CODE_LINES: Array<[string, string]> = [
  ["import { test, expect } from '@playwright/test';", "text-emerald-300"],
  ["", "text-white"],
  ["test('student can enroll', async ({ page }) => {", "text-pink-300"],
  ["  await page.goto('/batch-5');", "text-cyan-200"],
  ["  await page.click('text=Enroll Now');", "text-cyan-200"],
  ["  await expect(page.locator('.success'))", "text-cyan-200"],
  ["    .toBeVisible();", "text-cyan-200"],
  ["});", "text-pink-300"],
];

const BADGES = [
  { label: "Playwright Pro", icon: CheckCircle2, cls: "-top-5 -left-6", tint: "from-cyan-400 to-blue-500" },
  { label: "Cypress Expert", icon: Award, cls: "top-16 -right-7", tint: "from-emerald-400 to-teal-500" },
  { label: "CI/CD Ready", icon: GitBranch, cls: "bottom-24 -left-10", tint: "from-orange-400 to-amber-500" },
  { label: "AI-Assisted", icon: Sparkles, cls: "-bottom-4 right-8", tint: "from-fuchsia-400 to-purple-600" },
];

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Soft violet backdrop — calm, easy on the eyes */}
      <div className="absolute inset-0 bg-[linear-gradient(140deg,#3B0764_0%,#4C1D95_38%,#6D28D9_72%,#5B21B6_100%)]" />

      {/* Glow orbs (softened) */}
      <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-sky-400/12 blur-3xl" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 rounded-full bg-violet-400/18 blur-3xl" />
      <div className="absolute -bottom-44 left-1/4 w-[26rem] h-[26rem] rounded-full bg-rose-300/8 blur-3xl" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse at center, black 25%, transparent 72%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 25%, transparent 72%)",
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* LEFT: copy + CTA */}
          <div className="text-center lg:text-left">
            <Reveal delay={0} y={20}>
              <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md text-white text-[11px] font-bold tracking-[0.18em] uppercase">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald-400" />
                </span>
                Batch 5 · Admissions Open
              </span>
            </Reveal>

            <Reveal delay={0.1} y={32}>
              <h1 className="mt-6 text-[2.6rem] leading-[1.04] sm:text-6xl lg:text-[3.9rem] xl:text-7xl font-extrabold text-white tracking-tight">
                Launch Your Career in{" "}
                <span className="text-gradient">Automation Testing</span>{" "}
                with SourceandcodE
              </h1>
            </Reveal>

            {/* Glass feature card (ref-style) */}
            <Reveal delay={0.22} y={26}>
              <div className="mt-8 glass rounded-3xl p-6 sm:p-7 max-w-xl mx-auto lg:mx-0 text-left shadow-[0_18px_50px_-24px_rgba(0,0,0,0.55)]">
                <p className="flex items-center gap-2 text-white font-bold text-[15px] mb-2.5">
                  <span className="w-7 h-7 rounded-lg bg-white/15 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-amber-300" />
                  </span>
                  Career-Focused Automation Training
                </p>
                <p className="text-white/75 text-[14.5px] leading-relaxed">
                  Unlock your potential in the rapidly expanding field of automation testing.
                  SourceandcodE offers cutting-edge training to transform you into an in-demand professional.
                </p>
                <p className="mt-4 pt-4 border-t border-white/15 text-xs font-semibold tracking-widest uppercase text-white/60">
                  Consistency and hard work can change your life.
                </p>
              </div>
            </Reveal>

            {/* Stat pills with animated counters */}
            <Reveal delay={0.34} y={22}>
              <div className="mt-7 flex flex-wrap justify-center lg:justify-start gap-3">
                {STATS.map((s) => (
                  <span
                    key={s.label}
                    className="pill border border-white/25 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-colors"
                  >
                    <s.icon className="w-4 h-4 text-amber-300" />
                    <span className="font-extrabold">
                      <Counter target={s.value} suffix={s.suffix} />
                    </span>
                    <span className="font-medium text-white/70 text-xs">{s.label}</span>
                  </span>
                ))}
              </div>
            </Reveal>

            {/* CTA buttons (ref-style pill buttons) */}
            <Reveal delay={0.44} y={22}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
                <a
                  href="#enroll"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-white px-8 py-4 text-navy font-extrabold text-[15px] shadow-[0_16px_40px_-14px_rgba(0,0,0,0.55)] hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-14px_rgba(0,0,0,0.6)] active:scale-[0.98] transition-all"
                >
                  <span className="w-7 h-7 rounded-full bg-[linear-gradient(120deg,#38BDF8,#8B5CF6)] flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
                  </span>
                  Enroll Now
                </a>
                <a href="#roadmap" className="btn-glass !px-8 !py-4 !text-[15px]">
                  View Roadmap
                </a>
              </div>
            </Reveal>

            {/* Micro highlights */}
            <Reveal delay={0.54} y={18}>
              <div className="mt-7 flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 text-white/65 text-[11px] font-semibold tracking-wider uppercase">
                <span>▶ Demo lectures</span>
                <span className="hidden sm:block w-px self-center h-3 bg-white/25" />
                <span>◆ Live mentorship</span>
                <span className="hidden sm:block w-px self-center h-3 bg-white/25" />
                <span>★ Real projects</span>
                <span className="hidden sm:block w-px self-center h-3 bg-white/25" />
                <span>✓ Interview prep</span>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: code window + floating badges */}
          <Reveal delay={0.3} y={36} className="relative hidden lg:block">
            <div className="relative mx-auto max-w-[30rem]">
              <div className="absolute -inset-6 bg-gradient-to-tr from-sky-400/20 via-indigo-400/15 to-violet-400/15 blur-3xl rounded-[3rem]" />
              <div className="relative rounded-3xl border border-white/20 bg-[#0D1030]/85 backdrop-blur-xl shadow-[0_30px_70px_-30px_rgba(0,0,0,0.85)] overflow-hidden">
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/10 bg-white/5">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                  <span className="ml-3 flex items-center gap-1.5 text-[11px] font-medium text-white/50">
                    <Code2 className="w-3.5 h-3.5" /> enroll.spec.ts — Playwright
                  </span>
                  <span className="ml-auto text-[10px] font-bold text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                    PASSING
                  </span>
                </div>
                <pre className="p-5 sm:p-6 text-[12.5px] leading-[1.75] font-mono overflow-x-auto m-0">
                  {CODE_LINES.map(([line, color], i) => (
                    <div key={i} className="flex gap-4">
                      <span className="w-5 text-right text-white/25 select-none">{i + 1}</span>
                      <span className={color}>{line || " "}</span>
                    </div>
                  ))}
                </pre>
                <div className="px-5 py-3 border-t border-white/10 bg-white/5 flex items-center justify-between text-[11px] text-white/50">
                  <span>3 passed · 0 failed · 1.8s</span>
                  <span className="text-emerald-400 font-semibold">100% flake-free</span>
                </div>
              </div>

              {/* Floating skill badges (ref-style) */}
              {BADGES.map((b, i) => (
                <motion.div
                  key={b.label}
                  animate={{ y: [0, -9, 0] }}
                  transition={{ duration: 4.5 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                  className={`absolute ${b.cls} flex items-center gap-2 rounded-full bg-white text-navy text-[11px] font-bold px-3.5 py-2 shadow-[0_14px_30px_-10px_rgba(0,0,0,0.5)] border border-white/70`}
                >
                  <span className={`w-5 h-5 rounded-md bg-gradient-to-br ${b.tint} flex items-center justify-center`}>
                    <b.icon className="w-3 h-3 text-white" />
                  </span>
                  {b.label}
                </motion.div>
              ))}
            </div>
          </Reveal>

        </div>

        {/* Tech marquee */}
        <Reveal delay={0.6} y={20}>
          <div className="mt-14 relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee gap-3">
              {[...TECHS, ...TECHS].map((t, i) => (
                <span
                  key={`${t}-${i}`}
                  className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2.5 text-white/75 text-xs font-semibold tracking-wide hover:bg-white/20 hover:text-white transition-colors cursor-default"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
        aria-label="Scroll to about section"
      >
        <span className="text-[10px] font-semibold tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-9 rounded-full border border-white/30 flex items-start justify-center pt-1.5"
        >
          <span className="w-1 h-1.5 rounded-full bg-white/70" />
        </motion.div>
      </a>
    </section>
  );
}

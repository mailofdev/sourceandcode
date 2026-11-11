import { ArrowRight, Users, GraduationCap, Layers, Zap } from "lucide-react";
import { Reveal, Counter } from "./Reveal";
import { MentorVideo } from "./MentorVideo";

const TECHS = [
  "JavaScript", "TypeScript", "Playwright", "Cypress", "Git & GitHub",
  "Jira", "CI/CD", "REST APIs", "BDD", "Testing with AI",
];

const STATS = [
  { value: 18, suffix: "", icon: Layers, label: "Modules" },
  { value: 200, suffix: "+", icon: Users, label: "Students" },
  { value: 5, suffix: "+", icon: GraduationCap, label: "Months" },
];

export function Hero() {
  return (
    <section id="home" className="relative flex items-center overflow-hidden lg:min-h-[100svh]">
      <div className="absolute inset-0 bg-[linear-gradient(140deg,#3B0764_0%,#4C1D95_38%,#6D28D9_72%,#5B21B6_100%)]" />

      <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-sky-400/12 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
      <div className="absolute top-1/4 -right-24 h-56 w-56 rounded-full bg-violet-400/18 blur-3xl sm:h-96 sm:w-96" />
      <div className="absolute -bottom-32 left-1/4 hidden h-[26rem] w-[26rem] rounded-full bg-rose-300/8 blur-3xl sm:block" />

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

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:py-28">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="text-center lg:col-start-1 lg:row-start-1 lg:text-left">
            <Reveal delay={0} y={20}>
              <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-2 text-[10px] font-bold uppercase leading-snug tracking-[0.12em] text-white backdrop-blur-md sm:px-5 sm:text-[11px] sm:tracking-[0.16em]">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Batch 5 · Admissions Open
              </span>
            </Reveal>

            <Reveal delay={0.1} y={32}>
              <h1 className="mt-5 text-balance text-[1.7rem] font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[2.7rem] lg:leading-[1.08] xl:text-6xl">
                Launch Your Career in{" "}
                <span className="text-gradient">Automation Testing</span>{" "}
                with SourceandcodE
              </h1>
            </Reveal>
          </div>

          <Reveal delay={0.2} y={28} className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <MentorVideo />
          </Reveal>

          <div className="text-center lg:col-start-1 lg:row-start-2 lg:text-left">
            <Reveal delay={0.22} y={26}>
              <div className="glass mx-auto max-w-xl rounded-3xl p-5 text-left shadow-[0_18px_50px_-24px_rgba(0,0,0,0.55)] sm:p-7 lg:mx-0">
                <p className="mb-2.5 flex items-center gap-2 text-[15px] font-bold text-white">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/15">
                    <Zap className="h-4 w-4 text-amber-300" />
                  </span>
                  Career-Focused Automation Training
                </p>
                <p className="text-sm leading-relaxed text-white/75 sm:text-[14.5px]">
                  Unlock your potential in the rapidly expanding field of automation testing.
                  SourceandcodE offers cutting-edge training to transform you into an in-demand professional.
                </p>
                <p className="mt-4 border-t border-white/15 pt-4 text-xs font-semibold uppercase tracking-widest text-white/60">
                  Consistency and hard work can change your life.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.34} y={22}>
              <div className="mt-6 flex flex-wrap justify-center gap-2.5 lg:justify-start sm:mt-7 sm:gap-3">
                {STATS.map((s) => (
                  <span
                    key={s.label}
                    className="pill border border-white/25 bg-white/10 text-white backdrop-blur-md transition-colors hover:bg-white/20"
                  >
                    <s.icon className="h-4 w-4 text-amber-300" />
                    <span className="font-extrabold">
                      <Counter target={s.value} suffix={s.suffix} />
                    </span>
                    <span className="text-xs font-medium text-white/70">{s.label}</span>
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.44} y={22}>
              <div className="mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
                <a
                  href="#enroll"
                  className="group inline-flex min-h-12 w-full items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-[15px] font-extrabold text-navy shadow-[0_16px_40px_-14px_rgba(0,0,0,0.55)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_48px_-14px_rgba(0,0,0,0.6)] active:scale-[0.98] sm:w-auto sm:px-8 sm:py-4"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(120deg,#38BDF8,#8B5CF6)]">
                    <ArrowRight className="h-3.5 w-3.5 text-white transition-transform group-hover:translate-x-0.5" />
                  </span>
                  Enroll Now
                </a>
                <a href="#roadmap" className="btn-glass min-h-12 w-full justify-center sm:w-auto !px-8 !py-3.5 !text-[15px] sm:!py-4">
                  View Roadmap
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.54} y={18}>
              <div className="mt-6 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] font-semibold uppercase tracking-wider text-white/65 lg:justify-start">
                <span>Demo lectures</span>
                <span>Live mentorship</span>
                <span>Real projects</span>
                <span>Interview prep</span>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.6} y={20}>
          <div className="relative mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] sm:mt-14">
            <div className="flex w-max animate-marquee gap-3">
              {[...TECHS, ...TECHS].map((t, i) => (
                <span
                  key={`${t}-${i}`}
                  className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold tracking-wide text-white/75 backdrop-blur-md sm:px-5 sm:py-2.5"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-cyan-300 to-fuchsia-400" />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

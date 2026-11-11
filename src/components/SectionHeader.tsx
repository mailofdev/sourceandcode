import { cn } from "../lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  titleGradientPart?: string;
  subtitle: string;
  className?: string;
  variant?: "light" | "dark";
}

export function SectionHeader({
  eyebrow,
  title,
  titleGradientPart,
  subtitle,
  className,
  variant = "light",
}: SectionHeaderProps) {
  const gradientPart = titleGradientPart || title.split(" ").pop() || title;
  const nonGradientPart = title.replace(gradientPart, "").trim();

  const isDark = variant === "dark";

  return (
    <div className={cn("mb-12", className)}>
      <Reveal delay={0} y={24} className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <span
          className={cn(
            "inline-block mb-4 px-4 py-1.5 rounded-full font-semibold text-[11px] tracking-[0.18em] uppercase border",
            isDark
              ? "bg-white/10 border-white/15 text-white/90 backdrop-blur-sm"
              : "bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-slate-600 border-blue-500/20",
          )}
        >
          {eyebrow}
        </span>
        <h2
          className={cn(
            "mt-1 text-[2rem] md:text-5xl font-extrabold tracking-tight leading-[1.1]",
            isDark ? "text-white" : "text-navy",
          )}
        >
          {nonGradientPart ? <span>{nonGradientPart} </span> : null}
          <span className="text-gradient">{gradientPart}</span>
        </h2>
        {subtitle && (
          <p
            className={cn(
              "mt-5 text-base md:text-lg max-w-2xl mx-auto leading-relaxed",
              isDark ? "text-white/70" : "text-slate-500",
            )}
          >
            {subtitle}
          </p>
        )}
        <div className="mt-6 mx-auto h-1 w-20 rounded-full bg-[linear-gradient(90deg,#38BDF8_0%,#6366F1_55%,#8B5CF6_100%)] opacity-85" />
      </Reveal>
    </div>
  );
}

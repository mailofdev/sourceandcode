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
  const splitAt = title.indexOf(gradientPart);
  const before = splitAt >= 0 ? title.slice(0, splitAt) : title;
  const after = splitAt >= 0 ? title.slice(splitAt + gradientPart.length) : "";

  const isDark = variant === "dark";

  return (
    <div className={cn("mb-8 sm:mb-12", className)}>
      <Reveal delay={0} y={24} className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <span
          className={cn(
            "mb-4 inline-block max-w-full whitespace-normal rounded-full border px-3 py-1.5 text-[10px] font-semibold uppercase leading-snug tracking-[0.12em] sm:px-4 sm:text-[11px] sm:tracking-[0.16em]",
            isDark
              ? "bg-white/10 border-white/15 text-white/90 backdrop-blur-sm"
              : "bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-slate-600 border-blue-500/20",
          )}
        >
          {eyebrow}
        </span>
        <h2
          className={cn(
            "mt-1 text-balance text-[1.65rem] font-extrabold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl",
            isDark ? "text-white" : "text-navy",
          )}
        >
          {before}
          <span className="text-gradient">{gradientPart}</span>
          {after}
        </h2>
        {subtitle && (
          <p
            className={cn(
              "mx-auto mt-4 max-w-2xl px-1 text-sm leading-relaxed sm:text-base md:text-lg",
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

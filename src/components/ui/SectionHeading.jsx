export default function SectionHeading({
  eyebrow,
  title,
  lead,
  light = false,
  align = "center",
}) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left"}>
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? "text-white/75" : "text-blue"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-3xl font-bold tracking-tight md:text-4xl ${
          light ? "text-white" : "text-navy"
        } ${eyebrow ? "mt-3" : ""}`}
      >
        {title}
      </h2>
      <div className={`gradient-line mt-4 ${centered ? "mx-auto" : ""}`} />
      {lead ? (
        <p
          className={`mt-4 text-base leading-relaxed md:text-lg ${
            light ? "text-white/80" : "text-muted"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

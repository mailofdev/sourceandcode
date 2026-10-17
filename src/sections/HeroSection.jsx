import config from "@/config/site.config";
import Container from "@/components/ui/Container";
import DarkBackdrop from "@/components/ui/DarkBackdrop";

function BrandTitle({ text }) {
  const token = "SourceandcodE";
  if (!text.includes(token)) return text;
  const [before, after] = text.split(token);
  return (
    <>
      {before}
      <span className="whitespace-nowrap">
        Sourceandcod<span className="gradient-text">E</span>
      </span>
      {after}
    </>
  );
}

export default function HeroSection() {
  const { hero } = config.content;
  const { motto } = config.site;

  return (
    <section id={hero.id} className="relative overflow-hidden text-white">
      <DarkBackdrop />
      <div className="pointer-events-none absolute left-[8%] top-16 hidden text-5xl font-light text-white/10 lg:block" aria-hidden>
        {"</>"}
      </div>
      <div className="pointer-events-none absolute right-[10%] bottom-16 hidden text-4xl font-light text-white/10 lg:block" aria-hidden>
        {"{ }"}
      </div>

      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="glass-dark mx-auto inline-flex rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90">
            {hero.eyebrow}
          </p>
          <h1 className="font-display mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.4rem]">
            <BrandTitle text={hero.title} />
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {hero.description}
          </p>
          <p className="mt-4 text-sm font-medium text-white/70 sm:text-base">{motto}</p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={hero.primaryCta.href} className="btn-primary inline-flex w-full sm:w-auto">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn-ghost inline-flex w-full sm:w-auto">
              {hero.secondaryCta.label}
            </a>
          </div>

          <p className="mt-8 text-sm text-white/75">
            <span aria-hidden className="mr-1.5 text-orange">▶</span>
            {hero.highlights.join("  •  ")}
          </p>

          <ul className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {hero.tools.map((tool) => (
              <li key={tool} className="glass-dark rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide text-white/90">
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

import config from "@/config/site.config";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutSection() {
  const { about } = config.content;
  const { founder } = config.site;
  const initials = founder.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2);

  return (
    <section id={about.id} className="py-16 md:py-24">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[1.4fr_0.8fr] lg:gap-12">
          <div>
            <SectionHeading
              eyebrow={about.eyebrow}
              title={about.title}
              align="left"
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted md:text-lg">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <article className="glass glass-card rounded-3xl p-6 sm:p-7">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2196f3] via-[#fb8c00] to-[#7b2ff7] font-display text-xl font-bold text-white shadow-lg">
              {initials}
            </div>
            <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-blue">
              {founder.role}
            </p>
            <h3 className="font-display mt-2 text-2xl font-bold text-navy">{founder.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{founder.title}</p>
            <a
              href={founder.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex text-sm font-semibold text-navy underline decoration-[#2196f3]/40 underline-offset-4 hover:text-blue"
            >
              {founder.urlLabel}
            </a>
          </article>
        </div>
      </Container>
    </section>
  );
}

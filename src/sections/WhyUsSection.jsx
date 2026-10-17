import config from "@/config/site.config";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";

export default function WhyUsSection() {
  const { whyUs } = config.content;

  return (
    <section id={whyUs.id} className="py-16 md:py-24">
      <Container>
        <SectionHeading eyebrow={whyUs.eyebrow} title={whyUs.title} lead={whyUs.lead} />

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {whyUs.pillars.map((pillar, index) => (
            <article key={pillar.title} className="glass glass-card flex gap-4 rounded-3xl p-5 sm:p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2196f3] via-[#fb8c00] to-[#7b2ff7] font-display text-lg font-bold text-white">
                {index + 1}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Icon name={pillar.icon} className="h-4 w-4 text-blue" />
                  <h3 className="font-display text-lg font-bold text-navy">{pillar.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="glass mt-6 rounded-3xl p-5 sm:p-6">
          <h3 className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-blue">
            Tools you will use
          </h3>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {whyUs.stack.map((tool) => (
              <li
                key={tool}
                className="rounded-full bg-white/70 px-3.5 py-1.5 text-sm font-medium text-navy ring-1 ring-white"
              >
                {tool}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-5 max-w-3xl text-center text-sm leading-relaxed text-muted md:text-base">
            {whyUs.closing}
          </p>
        </div>
      </Container>
    </section>
  );
}

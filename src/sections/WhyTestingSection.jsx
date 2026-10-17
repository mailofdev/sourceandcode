import config from "@/config/site.config";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";

export default function WhyTestingSection() {
  const { whyTesting } = config.content;

  return (
    <section id={whyTesting.id} className="py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow={whyTesting.eyebrow}
          title={whyTesting.title}
          lead={whyTesting.lead}
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {whyTesting.cards.map((card) => (
            <article key={card.title} className="glass glass-card rounded-3xl p-5 sm:p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70 text-blue ring-1 ring-white">
                <Icon name={card.icon} />
              </div>
              <h3 className="font-display mt-4 text-lg font-bold text-navy">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{card.body}</p>
            </article>
          ))}
        </div>

        <aside className="glass mt-6 rounded-3xl p-6 sm:p-8">
          <p className="font-display text-lg font-semibold leading-snug text-navy md:text-xl">
            {whyTesting.callout}
          </p>
          <ul className="mt-4 grid gap-2 sm:grid-cols-3">
            {whyTesting.calloutPoints.map((point) => (
              <li key={point} className="rounded-2xl bg-white/55 px-3 py-3 text-sm leading-relaxed text-muted ring-1 ring-white/80">
                {point}
              </li>
            ))}
          </ul>
        </aside>
      </Container>
    </section>
  );
}

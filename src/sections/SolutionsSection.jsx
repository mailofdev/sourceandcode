import config from "@/config/site.config";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function SolutionsSection() {
  const { solutions } = config.content;

  return (
    <section id={solutions.id} className="py-16 md:py-24">
      <Container>
        <SectionHeading eyebrow={solutions.eyebrow} title={solutions.title} />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {solutions.items.map((item) => (
            <article key={item.challenge} className="glass overflow-hidden rounded-3xl">
              <div className="border-b border-navy/10 p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#c2410c]">
                  The challenge
                </p>
                <h3 className="font-display mt-2 text-lg font-bold text-navy">{item.challenge}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.challengeBody}</p>
              </div>
              <div className="bg-white/40 p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#00796b]">
                  Our solution
                </p>
                <h3 className="font-display mt-2 text-lg font-bold text-navy">{item.solution}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.solutionBody}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

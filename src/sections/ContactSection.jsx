import config from "@/config/site.config";
import Container from "@/components/ui/Container";
import LeadForm from "@/components/LeadForm";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactSection() {
  const { contact } = config.content;
  const { founder, repo } = config.site;

  return (
    <section id={contact.id} className="py-16 md:py-24">
      <Container>
        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <div>
            <SectionHeading
              eyebrow={contact.eyebrow}
              title={contact.title}
              lead={contact.lead}
              align="left"
            />
            <p className="mt-5 text-sm leading-relaxed text-muted">{contact.note}</p>
            <ul className="mt-6 space-y-3">
              <li className="glass rounded-2xl px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">Mentor</p>
                <a
                  href={founder.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block font-semibold text-navy hover:text-blue"
                >
                  {founder.name} · {founder.urlLabel}
                </a>
              </li>
              <li className="glass rounded-2xl px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">Code</p>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block font-semibold text-navy hover:text-blue"
                >
                  {repo.name}
                </a>
              </li>
            </ul>
          </div>

          <div className="glass rounded-3xl p-5 sm:p-7">
            <LeadForm
              formId={contact.form.id}
              submitLabel={contact.form.submitLabel}
              labels={contact.form.labels}
              placeholders={contact.form.placeholders}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

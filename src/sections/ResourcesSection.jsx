import config from "@/config/site.config";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";

export default function ResourcesSection() {
  const { resources } = config.content;
  const { repo } = config.site;

  return (
    <section id={resources.id} className="py-16 md:py-24">
      <Container>
        <SectionHeading eyebrow={resources.eyebrow} title={resources.title} lead={resources.lead} />

        <article className="glass mt-10 flex flex-col items-start justify-between gap-5 rounded-3xl p-6 sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-blue">Repository</p>
            <h3 className="font-display mt-2 text-2xl font-bold text-navy">{repo.name}</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">{repo.description}</p>
          </div>
          <a href={repo.url} target="_blank" rel="noopener noreferrer" className="btn-primary inline-flex shrink-0">
            {resources.cta}
            <Icon name="external" className="h-4 w-4" />
          </a>
        </article>

        <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {resources.folders.map((folder) => (
            <li key={folder.name} className="glass glass-card rounded-2xl p-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/70 text-blue ring-1 ring-white">
                  <Icon name="folder" className="h-4 w-4" />
                </span>
                <span>
                  <span className="block font-mono text-sm font-semibold text-navy">{folder.name}</span>
                  <span className="mt-1 block text-sm text-muted">{folder.contents}</span>
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

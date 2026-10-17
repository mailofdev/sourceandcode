import SectionRenderer from "@/core/renderer/SectionRenderer";
import config from "@/config/site.config";

export default function HomePage() {
  const page = config.pages.find((item) => item.slug === "home");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Automation Testing Training",
    description: config.site.description,
    provider: {
      "@type": "EducationalOrganization",
      name: config.site.name,
      slogan: config.site.tagline,
      founder: {
        "@type": "Person",
        name: config.site.founder.name,
        jobTitle: config.site.founder.title,
        url: config.site.founder.url,
      },
    },
  };

  if (!page) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-16 text-center text-muted">
        No page configured for <code className="text-navy">home</code> in{" "}
        <code className="text-navy">site.config.js</code>.
      </div>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <SectionRenderer sections={page.sections} />
    </>
  );
}

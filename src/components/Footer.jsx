import Image from "next/image";
import config from "@/config/site.config";
import DarkBackdrop from "@/components/ui/DarkBackdrop";

function FooterLink({ item }) {
  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-white/75 transition-colors hover:text-white"
      >
        {item.label}
      </a>
    );
  }

  return (
    <a href={item.href} className="text-sm text-white/75 transition-colors hover:text-white">
      {item.label}
    </a>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const { site, footer } = config;

  return (
    <footer className="relative overflow-hidden text-white">
      <DarkBackdrop />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="glass inline-flex rounded-2xl p-2">
              <Image
                src={site.logo}
                alt={`${site.name} logo`}
                width={220}
                height={180}
                className="h-auto w-[168px] rounded-xl"
              />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
              {site.descriptionLine}
            </p>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white/90">
              Quick links
            </h2>
            <ul className="mt-4 space-y-2.5">
              {footer.quickLinks.map((item) => (
                <li key={item.href}>
                  <FooterLink item={item} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white/90">
              Resources
            </h2>
            <ul className="mt-4 space-y-2.5">
              {footer.resourceLinks.map((item) => (
                <li key={item.label}>
                  <FooterLink item={item} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white/90">
              Contact
            </h2>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#contact" className="text-sm text-white/75 transition-colors hover:text-white">
                  Enquiry form
                </a>
              </li>
              <li>
                <a
                  href={site.founder.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  {site.founder.name}
                </a>
              </li>
              <li>
                <a
                  href={site.repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/75 transition-colors hover:text-white"
                >
                  Batch GitHub repo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p>{footer.note}</p>
        </div>
      </div>
    </footer>
  );
}

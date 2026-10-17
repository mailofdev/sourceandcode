import config from "@/config/site.config";
import Container from "@/components/ui/Container";
import DarkBackdrop from "@/components/ui/DarkBackdrop";
import SectionHeading from "@/components/ui/SectionHeading";

export default function RulesSection() {
  const { rules } = config.content;

  return (
    <section id={rules.id} className="relative overflow-hidden py-16 text-white md:py-24">
      <DarkBackdrop />
      <Container className="relative">
        <SectionHeading
          eyebrow={rules.eyebrow}
          title={rules.title}
          lead={rules.lead}
          light
        />
        <ol className="mt-10 grid gap-4 md:grid-cols-2">
          {rules.items.map((rule, index) => (
            <li key={rule} className="glass-dark flex gap-4 rounded-3xl p-5">
              <span className="font-display flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-sm font-bold text-white">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="pt-1.5 text-sm leading-relaxed text-white/85 sm:text-base">{rule}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

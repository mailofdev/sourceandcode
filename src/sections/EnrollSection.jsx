import config from "@/config/site.config";
import Container from "@/components/ui/Container";
import DarkBackdrop from "@/components/ui/DarkBackdrop";

export default function EnrollSection() {
  const { enroll } = config.content;

  return (
    <section id={enroll.id} className="relative overflow-hidden py-20 text-white md:py-28">
      <DarkBackdrop />
      <Container className="relative">
        <div className="glass-dark mx-auto max-w-3xl rounded-[2rem] px-6 py-12 text-center sm:px-10">
          <h2 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
            {enroll.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            {enroll.lead}
          </p>
          <a href={enroll.primaryCta.href} className="btn-primary mt-8 inline-flex">
            {enroll.primaryCta.label}
          </a>
        </div>
      </Container>
    </section>
  );
}

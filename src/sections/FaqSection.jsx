"use client";

import { useState } from "react";
import config from "@/config/site.config";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";

export default function FaqSection() {
  const { faq } = config.content;
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id={faq.id} className="py-16 md:py-24">
      <Container>
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} />
        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faq.items.map((item, index) => {
            const open = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;
            return (
              <div key={item.q} className="glass rounded-2xl">
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? -1 : index)}
                  >
                    <span className="font-display text-base font-semibold text-navy sm:text-lg">
                      {item.q}
                    </span>
                    <Icon
                      name="chevron"
                      className={`h-5 w-5 shrink-0 text-blue transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                </h3>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!open}
                >
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:text-base">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

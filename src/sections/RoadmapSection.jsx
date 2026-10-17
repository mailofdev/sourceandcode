"use client";

import { useState } from "react";
import config from "@/config/site.config";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";

export default function RoadmapSection() {
  const { roadmap } = config.content;
  const [selected, setSelected] = useState(0);
  const current = roadmap.modules[selected];

  return (
    <section id={roadmap.id} className="overflow-x-clip py-16 md:py-24">
      <Container>
        <SectionHeading eyebrow={roadmap.eyebrow} title={roadmap.title} lead={roadmap.lead} />

        <p className="glass mx-auto mt-8 max-w-xl rounded-2xl px-4 py-3 text-center text-sm text-muted" aria-live="polite">
          <span className="font-semibold text-navy">Module {selected + 1}</span>
          {" · "}
          {current.title}
          {" · "}
          {current.duration}
          {current.optional ? " · Optional" : ""}
        </p>

        <ol className="relative mx-auto mt-10 max-w-4xl">
          <div
            className="absolute bottom-0 left-[15px] top-0 w-px bg-gradient-to-b from-[#2196f3] via-[#fb8c00] to-[#7b2ff7] md:left-1/2"
            aria-hidden
          />
          {roadmap.modules.map((module, index) => {
            const onLeft = index % 2 === 0;
            const isSelected = selected === index;
            return (
              <li
                key={module.title}
                className={`relative mb-4 pl-12 md:w-1/2 md:pl-0 ${
                  onLeft ? "md:pr-10" : "md:ml-auto md:pl-10"
                }`}
              >
                <span
                  className={`absolute left-[15px] top-6 h-3.5 w-3.5 -translate-x-1/2 rounded-full border-2 border-white shadow md:top-7 ${
                    onLeft ? "md:left-auto md:right-0 md:translate-x-1/2" : "md:left-0 md:-translate-x-1/2"
                  } ${isSelected ? "bg-[#fb8c00]" : "bg-[#2196f3]"}`}
                  aria-hidden
                />
                <button
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelected(index)}
                  className={`w-full rounded-2xl p-4 text-left transition ${
                    isSelected
                      ? "glass ring-2 ring-[#2196f3]/50"
                      : "glass hover:bg-white/80"
                  } ${onLeft ? "md:text-right" : ""}`}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-blue">
                    {String(index + 1).padStart(2, "0")}
                    {module.optional ? " · Optional" : ""}
                  </span>
                  <span className="font-display mt-1 block text-base font-bold text-navy">
                    {module.title}
                  </span>
                  <span className="mt-2 inline-flex rounded-full bg-[#2196f3]/10 px-2.5 py-1 text-xs font-semibold text-[#0d47a1]">
                    {module.duration}
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="mt-12">
          <h3 className="font-display text-center text-2xl font-bold text-navy">{roadmap.beyondTitle}</h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {roadmap.ongoing.map((item) => (
              <article key={item.title} className="glass glass-card rounded-3xl p-5 text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-white/70 text-purple ring-1 ring-white">
                  <Icon name={item.icon} />
                </div>
                <h4 className="font-display mt-3 text-lg font-bold text-navy">{item.title}</h4>
                <p className="mt-1 text-sm text-muted">{item.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

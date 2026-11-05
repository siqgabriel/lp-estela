"use client";

import { useState } from "react";
import { Panel } from "@/components/layout/Panel";
import { Reveal } from "@/components/layout/Reveal";
import { faqItems } from "@/lib/content";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Panel mode="palco" className="border-t border-palco-line">
      <Reveal>
        <p className="eyebrow text-violet">FAQ</p>
        <h2 className="mt-3 font-display text-4xl text-ink sm:text-5xl">PERGUNTAS FREQUENTES</h2>
      </Reveal>

      <Reveal delay={0.08}>
        <dl className="mt-10 divide-y divide-palco-line border-t border-palco-line">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.q}>
                <dt>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-5 text-left font-ui text-base font-medium text-ink"
                  >
                    {item.q}
                    <span aria-hidden="true" className="text-xl text-violet">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>
                </dt>
                {isOpen && (
                  <dd className="pb-5 font-sans text-base leading-relaxed text-palco-text-soft">
                    {item.a}
                  </dd>
                )}
              </div>
            );
          })}
        </dl>
      </Reveal>
    </Panel>
  );
}

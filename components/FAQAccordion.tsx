"use client";

import { useState } from "react";
import type { FAQ } from "@/lib/faqs";
import { ChevronDownIcon } from "./icons";

export function FAQAccordion({ items }: { items: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-button-${index}`;
        return (
          <div key={item.question} className="glass overflow-hidden rounded-2xl">
            <h3>
              <button
                type="button"
                id={buttonId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-4.5 text-left sm:px-6"
              >
                <span className="text-sm font-semibold text-ice sm:text-base">{item.question}</span>
                <ChevronDownIcon
                  className={`h-5 w-5 shrink-0 text-brand-300 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={`grid transition-all duration-300 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-4.5 text-sm leading-relaxed text-mist sm:px-6">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

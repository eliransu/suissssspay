"use client";

import { useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const ITEMS: Testimonial[] = [
  {
    quote:
      "We stopped running random ChatGPT experiments and left with a clear plan: what to build, what to drop, and how to measure whether anyone actually uses it.",
    name: "Maya",
    role: "Head of Product",
  },
  {
    quote:
      "Hands-on, not a slide deck. Product and eng walked out with the same language and a few things shipping the same week.",
    name: "Daniel",
    role: "VP Engineering",
  },
  {
    quote:
      "We were stuck in pilot mode. Three months later we had real usage, named owners, and a roadmap leadership trusted.",
    name: "Rina",
    role: "Chief of Staff",
  },
  {
    quote:
      "Direct on product design for AI. Clear on what not to build. Useful on the org side, not only the model side.",
    name: "Alex",
    role: "Founder",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const t = ITEMS[i];

  return (
    <div>
      <div
        aria-live="polite"
        aria-atomic="true"
        className="border-l-2 border-accent pl-5 sm:pl-6"
      >
        <blockquote>
          <p className="text-pretty text-lg sm:text-xl leading-relaxed text-ink">
            &ldquo;{t.quote}&rdquo;
          </p>
          <footer className="mt-4 text-sm text-muted">
            <cite className="not-italic font-medium text-ink">{t.name}</cite>
            <span aria-hidden="true" className="text-faint">
              {" "}
              ·{" "}
            </span>
            <span>{t.role}</span>
          </footer>
        </blockquote>
      </div>

      <div
        className="mt-6 flex flex-wrap gap-1"
        role="tablist"
        aria-label="Testimonials"
      >
        {ITEMS.map((item, idx) => (
          <button
            key={idx}
            type="button"
            role="tab"
            aria-selected={idx === i}
            aria-label={`Testimonial from ${item.name}, ${idx + 1} of ${ITEMS.length}`}
            onClick={() => setI(idx)}
            className="tap-target inline-flex items-center justify-center size-11 rounded-md border-0 bg-transparent cursor-pointer p-0"
          >
            <span
              className={`block size-2.5 rounded-full ${
                idx === i ? "bg-accent" : "bg-line"
              }`}
              aria-hidden="true"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

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
      <blockquote className="border-l-2 border-accent pl-5 sm:pl-6">
        <p className="text-pretty text-lg sm:text-xl leading-relaxed text-ink">
          &ldquo;{t.quote}&rdquo;
        </p>
        <footer className="mt-4 text-sm text-muted">
          <span className="font-medium text-ink">{t.name}</span>
          <span className="text-faint"> · </span>
          {t.role}
        </footer>
      </blockquote>
      <div className="mt-6 flex gap-2">
        {ITEMS.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => setI(idx)}
            aria-label={`Show testimonial ${idx + 1}`}
            aria-current={idx === i}
            className={`size-2.5 rounded-full border-0 cursor-pointer ${
              idx === i ? "bg-accent" : "bg-line hover:bg-faint"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

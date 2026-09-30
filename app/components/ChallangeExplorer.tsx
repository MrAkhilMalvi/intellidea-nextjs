"use client";

import { useState } from "react";
import type { ChallengeGroup } from "@/app/data/industries";

export default function ChallengeExplorer({ groups }: { groups: ChallengeGroup[] }) {
  const [active, setActive] = useState(0);
  const current = groups[active];

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,340px)_1fr] lg:gap-16">
      {/* Question list: horizontal scroll on mobile, vertical on desktop */}
      <div
        role="tablist"
        aria-label="Business questions"
        className="-mx-6 flex gap-2 overflow-x-auto px-6 pb-2 lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 lg:pb-0"
      >
        {groups.map((g, i) => {
          const selected = i === active;
          return (
            <button
              key={g.question}
              role="tab"
              id={`challenge-tab-${i}`}
              aria-selected={selected}
              aria-controls="challenge-panel"
              onClick={() => setActive(i)}
              className={[
                "shrink-0 rounded-full border px-4 py-2 text-left text-sm font-semibold transition-colors",
                "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F9C100]",
                "lg:rounded-none lg:border-0 lg:border-l-2 lg:px-5 lg:py-4 lg:text-base",
                selected
                  ? "border-[#F9C100] bg-[#F9C100] text-[#2C466D] lg:bg-white/5 lg:text-white"
                  : "border-white/20 text-white/70 hover:text-white lg:border-l-white/15 lg:hover:border-l-white/50",
                selected ? "lg:border-l-[#F9C100]" : "",
              ].join(" ")}
            >
              {g.question}
            </button>
          );
        })}
      </div>

      {/* Answer panel */}
      <div
        role="tabpanel"
        id="challenge-panel"
        aria-labelledby={`challenge-tab-${active}`}
        className="min-w-0"
      >
        <h3 className="text-2xl font-bold leading-snug text-white sm:text-3xl">{current.question}</h3>
        <p className="mt-2 text-sm text-white/60">Areas we can help with</p>

        <ul className="mt-6 grid gap-x-10 sm:grid-cols-2">
          {current.items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 border-t border-white/10 py-3.5 text-[15px] text-white/90"
            >
              <svg
                viewBox="0 0 20 20"
                className="mt-0.5 h-4 w-4 shrink-0 text-[#F9C100]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 10.5l4 4 8-9" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
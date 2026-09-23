"use client";

import React from "react";

interface AchieveItem {
  id: string;
  iconPath: string;
  title: string;
}

const ACHIEVE_ITEMS: AchieveItem[] = [
  {
    id: "grow",
    iconPath: "./assets/grow.png", // Replace with your icon path
    title: "Grow & Scale Business Revenue",
  },
  {
    id: "transform",
    iconPath: "./assets/transform.png", // Replace with your icon path
    title: "AI, Tech & Digital Transformation",
  },
  {
    id: "build",
    iconPath: "./assets/build.png", // Replace with your icon path
    title: "Leadership & Workforce Capability",
  },
  {
    id: "expand",
    iconPath: "./assets/expand.png", // Replace with your icon path
    title: "Global Market & India Expansion",
  },
  {
    id: "fund",
    iconPath: "./assets/fund.png", // Replace with your icon path
    title: "Capital, Investors & IPO Readiness",
  },
  {
    id: "protect",
    iconPath: "./assets/protect.png", // Replace with your icon path
    title: "Risk, Cybersecurity & Governance",
  },
];

export const AchieveSection: React.FC = () => {
  return (
    <section
      id="achieve"
      className="flex flex-col lg:flex-row w-full bg-white border-t border-slate-100"
    >
      {/* LEFT SIDE: Content & 6 Icon Items */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 sm:p-10 lg:p-14 order-1 lg:order-1">
        {/* Title */}
        <h2 className="font-display font-bold text-[#2C466D] text-[28px] md:text-[32px] lg:text-[36px] mb-8 md:mb-10 text-center">
          What Do You Want To Achieve?
        </h2>

        {/* 6 Icons Grid matching the reference layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-9 w-full max-w-lg mb-10">
          {ACHIEVE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center group"
            >
              {/* Icon Container with path */}
              <div className="mb-3">
                <img
                  src={item.iconPath}
                  alt={item.title}
                  className="w-14 h-14 object-contain transition-transform duration-200 group-hover:scale-110"
                />
              </div>

              {/* Concise Title matching reference style */}
              <p className="font-sans text-[#2C466D] text-sm md:text-base font-medium max-w-[200px] leading-snug">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg bg-[#f7bf22] px-7 py-3 text-sm md:text-base font-bold text-[#12203A] shadow transition-all duration-200 hover:bg-[#2C466D] hover:text-white active:scale-95 whitespace-nowrap"
          >
            Find The Right Solution
          </a>
        </div>
      </div>

      {/* RIGHT SIDE: Visual Image */}
      <div className="w-full lg:w-1/2 min-h-[350px] lg:min-h-full bg-gray-100 relative order-2 lg:order-2">
        <img
          src="./assets/achieve.png"
          alt="What Do You Want To Achieve"
          className="w-full h-full obejct-cover"
        />
      </div>
    </section>
  );
};
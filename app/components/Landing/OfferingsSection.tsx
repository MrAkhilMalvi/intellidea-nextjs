"use client";
import React from "react";

interface Offering {
  title: string;
  description: string;
  href: string;
}

export const OfferingsSection: React.FC = () => {
  const offerings: Offering[] = [
    {
      title: "IntEllev8",
      description:
        "We deliver strategic guidance to drive efficiency and growth; ensuring businesses, leaders and aspiring entrepreneurs overcome their unique challenges.",
      href: "/intellev8",
    },
    {
      title: "IntellXperia",
      description:
        "As a collaborative partner, we provide expertise with rich experience and a proven track record, ensuring the respective function is led with the highest level of strategic clarity.",
      href: "/intellxperia",
    },
    {
      title: "IntelliWise",
      description:
        "Empower learners with essential training and development programs that enhance knowledge and skills, foster leadership, promote innovation for progress and growth.",
      href: "/intelliwise",
    },
    {
      title: "IntelliCircle",
      description:
        "Build and nurture a vibrant community of leaders and entrepreneurs offering continuous support through collaboration and shared learning for growth.",
      href: "/intellicircle",
    },
  ];

  return (
    <section
      id="offerings"
      className="pt-16 pb-20 lg:pt-24 lg:pb-32 bg-[#2C466D]"
    >
      <div className="mx-auto px-4 lg:px-8 max-w-7xl">
        <h2 className="font-display font-bold text-center text-white mb-12 lg:mb-16 leading-tight text-[28px] md:text-[32px] lg:text-[38px]">
          We provide in-depth support through
          <br className="hidden md:block" /> a bouquet of offerings
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {offerings.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group bg-white rounded-xl p-8 flex flex-col justify-between shadow-lg hover:shadow-2xl border-t-4 border-[#F9C100] transition-all duration-300 ease-in-out hover:-translate-y-2 cursor-pointer text-left h-full min-h-80"
            >
              <div>
                <h3 className="font-display font-bold text-[#2C466D] mb-4 leading-tight text-[32px] md:text-[28px] group-hover:text-[#1d304d] transition-colors">
                  {item.title}
                </h3>
                <p className=" text-gray-700 text-[20px] leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Interactive Call-to-Action Indicator */}
              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center justify-between text-[#2C466D] group-hover:text-[#F9C100] font-semibold text-lg transition-colors">
                <span>Learn More</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1.5 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
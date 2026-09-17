import React from "react";

export const OfferingsSection: React.FC = () => {
  const offerings = [
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
          <br className="hidden md:block" />a bouquet of offerings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {offerings.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group bg-white rounded-xl p-8 flex flex-col shadow-lg hover:shadow-2xl border border-transparent hover:border-[#2C466D]/15 transition-all duration-300 ease-in-out hover:-translate-y-1.5 h-full min-h-80 cursor-pointer text-left"
            >
              <h3 className="font-display font-bold text-[#2C466D] mb-4 leading-tight text-[28px] group-hover:text-[#1d304d] transition-colors">
                {item.title}
              </h3>
              <p className="font-sans text-[#2C466D] opacity-90 text-[17px] leading-relaxed mt-2">
                {item.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
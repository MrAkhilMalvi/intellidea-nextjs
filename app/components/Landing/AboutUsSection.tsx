import React from "react";

export const AboutUsSection: React.FC = () => (
  <section id="aboutus" className="flex flex-col lg:flex-row w-full lg:h-135.75 bg-[#2C466D]">
    <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-12 lg:p-20 text-white order-1">
      <h2 className="font-display font-bold text-[28px] md:text-[32px] lg:text-[42px] mb-6 lg:mb-8">
        Who we are
      </h2>
      <p className="font-sans text-sm md:text-base lg:text-[17px] leading-relaxed opacity-90 text-justify">
        With a deep understanding of the challenges that our clients face, we offer tailored solutions to enable them to navigate challenges, seize opportunities, unlock their potential, grow sustainably, innovate continuously, and achieve lasting success. Our team consists of experts, thought leaders, and experienced business advisors with rich experience in different domains, diverse functions, and geographies. Whether you’re looking to build a sustainable business model, enter new markets, or secure funding, we are here to guide you every step of the way.
      </p>
    </div>
    <div className="w-full lg:w-1/2 h-64 md:h-96 lg:h-full relative order-2">
      <img src="./assets/team1.jpg" alt="Intellidea Team" className="w-full h-full object-cover" />
    </div>
  </section>
);
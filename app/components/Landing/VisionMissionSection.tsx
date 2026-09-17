import React from "react";

export const VisionMissionSection: React.FC = () => (
  <section id="our-mission-vision" className="w-full lg:h-123.25 bg-[#E6F4F1] flex items-center justify-center py-12 lg:py-0">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        <div className="bg-[#2C466D] text-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col justify-start hover:-translate-y-1 transition-transform duration-300 min-h-55 md:min-h-70">
          <h3 className="font-display font-bold text-[22px] md:text-[26px] lg:text-[30px] mb-4">Our Vision</h3>
          <p className="font-sans text-[15px] md:text-[17px] lg:text-[18px] leading-relaxed opacity-95">
            Develop an ecosystem enabling innovative solutions for business growth impact.
          </p>
        </div>
        <div className="bg-[#2C466D] text-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col justify-start hover:-translate-y-1 transition-transform duration-300 min-h-55 md:min-h-70">
          <h3 className="font-display font-bold text-[22px] md:text-[26px] lg:text-[30px] mb-4">Our Mission</h3>
          <p className="font-sans text-[15px] md:text-[17px] lg:text-[18px] leading-relaxed opacity-95">
            Create value by addressing complex challenges for sustainable growth. Enabling businesses with industry experts to equip them with the strategies, skills and support they need to thrive and evolve.
          </p>
        </div>
        <div className="bg-[#2C466D] text-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col justify-start hover:-translate-y-1 transition-transform duration-300 min-h-55 md:min-h-70">
          <h3 className="font-display font-bold text-[22px] md:text-[26px] lg:text-[30px] mb-4">Our Purpose</h3>
          <p className="font-sans text-[15px] md:text-[17px] lg:text-[18px] leading-relaxed opacity-95">
            Optimise potential for progress through capacity building, entrepreneurial development and women empowerment.
          </p>
        </div>
      </div>
    </div>
  </section>
);
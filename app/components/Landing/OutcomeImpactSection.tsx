import React from "react";

export const OutcomeImpactSection: React.FC = () => (
  <section className="flex flex-col-reverse lg:flex-row w-full lg:h-169">
    <div className="w-full lg:w-1/2 h-64 md:h-96 lg:h-full bg-gray-300 relative">
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
        alt="Skyscrapers"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="w-full lg:w-1/2 bg-[#2C466D] flex flex-col justify-center px-8 py-12 lg:p-20 text-white">
      <h2 className="font-display font-bold text-[28px] md:text-[32px] lg:text-[42px] mb-8 lg:mb-12">
        Outcome &amp; Impact
      </h2>
      <ul className="space-y-6 lg:space-y-8">
        {[
          "Enhanced Performance",
          "Enhanced Presence In Domestic And International Markets",
          "Entrepreneurial Excellence",
          "Capacity Building",
          "Contribution To The Economy",
          "Increased Employment Opportunities"
        ].map((item, idx) => (
          <li key={idx} className="flex items-start gap-4">
            <div className="mt-1 bg-white rounded-full p-1 min-w-6 h-6 flex items-center justify-center">
              <i className="fas fa-check text-[#2C466D] text-xs" />
            </div>
            <span className="font-sans text-lg lg:text-xl font-medium">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
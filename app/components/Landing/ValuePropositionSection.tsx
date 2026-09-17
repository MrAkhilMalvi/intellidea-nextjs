import React from "react";

export const ValuePropositionSection: React.FC = () => (
  <section id="our-proposition" className="flex flex-col lg:flex-row w-full lg:h-120 bg-white">
    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 lg:p-12 order-1 lg:order-1">
      <h2 className="font-display font-bold text-[#2C466D] text-[28px] md:text-[32px] lg:text-[36px] mb-10 md:mb-12 text-center">
        Unique Value Proposition
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 w-full max-w-lg">
        <div className="flex flex-col items-center text-center">
          <div className="mb-3">
            <img src="./assets/Tailor - made.png" alt="Strategy Icon" className="w-12 h-12 object-contain" />
          </div>
          <p className="font-sans text-[#2C466D] text-sm md:text-base font-medium max-w-125">
            Tailor - made strategy and guidance
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="mb-3">
            <img src="./assets/Ideation.png" alt="Ideation Icon" className="w-12 h-12 object-contain" />
          </div>
          <p className="font-sans text-[#2C466D] text-sm md:text-base font-medium max-w-50">
            Ideation to facilitation
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="mb-3">
            <img src="./assets/Panel of Experts.png" alt="Experts Icon" className="w-12 h-12 object-contain" />
          </div>
          <p className="font-sans text-[#2C466D] text-sm md:text-base font-medium max-w-50">
            A panel of experts with global best practices
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="mb-3">
            <img src="./assets/Ecosystem.png" alt="Ecosystem Icon" className="w-12 h-12 object-contain" />
          </div>
          <p className="font-sans text-[#2C466D] text-sm md:text-base font-medium max-w-50">
            Ecosystem for continual learning and growth
          </p>
        </div>
      </div>
    </div>
    <div className="w-full lg:w-1/2 h-64 lg:h-full bg-gray-200 relative order-2 lg:order-2">
      <img src="./assets/intellidea1.png" alt="Unique Value Proposition" className="w-full h-full object-cover" />
    </div>
  </section>
);
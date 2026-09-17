import React from "react";

export const CoreValuesSection: React.FC = () => (
  <section id="core-values" className="flex flex-col lg:flex-row w-full lg:h-138.5 bg-white">
    <div className="w-full lg:w-1/2 h-64 md:h-96 lg:h-full relative order-1">
      <img src="./assets/team.jpg" alt="Core Values Team" className="w-full h-full object-cover" />
    </div>
    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-8 py-12 lg:p-16 order-2">
      <h2 className="font-display font-bold text-[#2C466D] text-[28px] md:text-[32px] lg:text-[42px] mb-10 lg:mb-14 text-center">
        Our Core Values
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 w-full max-w-lg">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <img src="./assets/Knowledge.png" alt="Knowledge" className="h-12 w-12 object-contain" />
          </div>
          <p className="font-sans text-[#2C466D] font-medium text-base lg:text-lg whitespace-nowrap">
            Knowledge based-insights
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <img src="./assets/Ethics.png" alt="Ethics" className="h-12 w-12 object-contain" />
          </div>
          <p className="font-sans text-[#2C466D] font-medium text-base lg:text-lg">
            Ethics and Integrity
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <img src="./assets/Excellence.png" alt="Excellence" className="h-12 w-12 object-contain" />
          </div>
          <p className="font-sans text-[#2C466D] font-medium text-base lg:text-lg whitespace-nowrap">
            Commitment to Excellence
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="mb-4">
            <img src="./assets/Leadership.png" alt="Leadership" className="h-12 w-12 object-contain" />
          </div>
          <p className="font-sans text-[#2C466D] font-medium text-base lg:text-lg">
            Leadership to enable<br />and empower
          </p>
        </div>
      </div>
    </div>
  </section>
);
import React from "react";

export const CollaborativeProcessSection: React.FC = () => (
  <section id="collaborative-process" className="w-full bg-white flex flex-col justify-center items-center py-16 px-4 overflow-hidden">
    <div className="container mx-auto max-w-6xl text-center">
      <h2 className="font-display font-bold text-[#2C466D] text-[22px] md:text-[28px] lg:text-[32px] leading-tight tracking-tight max-w-4xl mx-auto mb-16 text-center">
        We believe in a collaborative approach, offering customized solutions based on the unique challenges and goals of each customer we work with
      </h2>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">
        <div className="flex flex-col items-center max-w-60">
          <div className="h-20 w-20 mb-6 flex items-center justify-center">
            <img src="./assets/idea.png" alt="Initial Assessment" className="h-20 w-20 object-contain" />
          </div>
          <p className="font-sans text-[#2C466D] font-medium text-[16px] md:text-lg lg:text-xl text-center">
            Initial Assessment
          </p>
        </div>
        <div className="hidden lg:flex h-20 items-center justify-center">
          <i className="fas fa-arrow-right text-[#2C466D] text-4xl" />
        </div>
        <div className="flex flex-col items-center max-w-60">
          <div className="h-20 w-20 mb-6 flex items-center justify-center">
            <img src="./assets/Customized.png" alt="Customized Strategy" className="h-20 w-20 object-contain" />
          </div>
          <p className="font-sans text-[#2C466D] font-medium text-[16px] md:text-lg lg:text-xl text-center max-w-57.5">
            Customized strategy &amp; Solution Design
          </p>
        </div>
        <div className="hidden lg:flex h-20 items-center justify-center">
          <i className="fas fa-arrow-right text-[#2C466D] text-4xl" />
        </div>
        <div className="flex flex-col items-center max-w-60">
          <div className="h-20 w-20 mb-6 flex items-center justify-center">
            <img src="./assets/Implementation.png" alt="Implementation" className="h-20 w-20 object-contain" />
          </div>
          <p className="font-sans text-[#2C466D] font-medium text-[16px] md:text-lg lg:text-xl text-center">
            Implementation Assistance
          </p>
        </div>
        <div className="hidden lg:flex h-20 items-center justify-center">
          <i className="fas fa-arrow-right text-[#2C466D] text-4xl" />
        </div>
        <div className="flex flex-col items-center max-w-60">
          <div className="h-20 w-20 mb-6 flex items-center justify-center">
            <img src="./assets/Hand-holding.png" alt="Ongoing Support" className="h-20 w-20 object-contain" />
          </div>
          <p className="font-sans text-[#2C466D] font-medium text-[16px] md:text-lg lg:text-xl text-center max-w-57.5">
            Ongoing hand-holding support
          </p>
        </div>
      </div>
    </div>
  </section>
);
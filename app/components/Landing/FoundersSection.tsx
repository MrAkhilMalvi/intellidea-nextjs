import React from "react";

export const FoundersSection: React.FC = () => (
  <section id="leadership"  className="w-full lg:h-209.75 bg-[#F8FAFC] flex flex-col justify-center items-center py-16 lg:py-0">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="font-display font-bold text-[#2C466D] text-[28px] md:text-[32px] lg:text-[42px] mb-12 lg:mb-16 text-center">
        Our Founders
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col">
          <div className="w-full h-64 md:h-80 lg:h-105 bg-gray-200 overflow-hidden">
            <img src="./assets/rajnikant.png" alt="Rajnickant Patel" className="w-full h-full object-cover object-top md:object-center transition-transform duration-500" />
          </div>
          <div className="p-5 md:p-6 flex flex-col grow text-center">
            <h3 className="font-display font-bold text-[#2C466D] text-xl lg:text-2xl mb-1">Rajnickant Patel</h3>
            <p className="font-sans text-black font-medium text-sm mb-4 uppercase tracking-wide">Chairman</p>
            <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">
              Mr. Rajnickant Patel is a distinguished leader in the financial services sector with an illustrious career...
            </p>
            <a href="/team/rajnikant-patel" className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline">Read More</a>
          </div>
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col">
          <div className="w-full h-64 md:h-80 lg:h-105 bg-gray-200 overflow-hidden">
            <img src="./assets/vireshsir.jpeg" alt="Viresh Patel" className="w-full h-full object-cover object-top md:object-center transition-transform duration-500" />
          </div>
          <div className="p-5 md:p-6 flex flex-col grow text-center">
            <h3 className="font-display font-bold text-[#2C466D] text-xl lg:text-2xl mb-1">Viresh Patel</h3>
            <p className="font-sans text-black font-medium text-sm mb-4 uppercase tracking-wide">MD &amp; CEO</p>
            <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">
              A dynamic, versatile &amp; result-oriented growth-preneur with 28+ years of experience...
            </p>
            <a href="/team/viresh-patel" className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline">Read More</a>
          </div>
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col">
          <div className="w-full h-64 md:h-80 lg:h-105 bg-gray-200 overflow-hidden">
            <img src="./assets/jyoti.png" alt="Jyoti Patel" className="w-full h-full object-cover object-top md:object-center transition-transform duration-500" />
          </div>
          <div className="p-5 md:p-6 flex flex-col grow text-center">
            <h3 className="font-display font-bold text-[#2C466D] text-xl lg:text-2xl mb-1">Jyoti Patel</h3>
            <p className="font-sans text-black font-medium text-sm mb-4 uppercase tracking-wide">Director</p>
            <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">
              Ms. Jyoti Patel is a passionate educator with over 25 years of experience in diverse roles...
            </p>
            <a href="/team/jyoti-patel" className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
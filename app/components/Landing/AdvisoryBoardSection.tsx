import React from "react";

export const AdvisoryBoardSection: React.FC = () => (
  <section className="w-full bg-white flex flex-col justify-center items-center py-16 lg:py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="font-display font-bold text-[#2C466D] text-[28px] md:text-[32px] lg:text-[42px] mb-12 lg:mb-16 text-center">
        Our Advisory Board
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col">
          <div className="h-87.5 w-full bg-gray-200 overflow-hidden">
            <img
              src="./assets/4.png"
              alt="Dr. R. B. Barman"
              className="w-full h-full object-cover object-top md:object-center transition-transform duration-500"
            />
          </div>
          <div className="p-6 flex flex-col grow text-center">
            <h3 className="font-display font-bold text-[#2C466D] text-xl lg:text-2xl mb-4">
              Dr. R. B. Barman
            </h3>
            <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">
              Dr. R. B. Barman, former Executive Director of the Reserve Bank of
              India, is a highly esteemed expert with decades of experience in
              banking technology and statistical analysis.
            </p>
            <a
              href="/team/dr-rb-barman"
              className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline"
            >
              Read More
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col">
          <div className="h-87.5 w-full bg-gray-200 overflow-hidden">
            <img
              src="./assets/sanjay_ubale.png"
              alt="Sanjay Ubale"
              className="w-full h-full object-cover object-top transition-transform duration-500"
            />
          </div>
          <div className="p-6 flex flex-col grow text-center">
            <h3 className="font-display font-bold text-[#2C466D] text-xl lg:text-2xl mb-4">
              Sanjay Ubale
            </h3>
            <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">
              Sanjay Ubale, a distinguished IAS officer and seasoned leader with
              over 31 years of experience, bringing profound insights into
              public policy and infrastructure development.
            </p>
            <a
              href="/team/sanjay-ubale"
              className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

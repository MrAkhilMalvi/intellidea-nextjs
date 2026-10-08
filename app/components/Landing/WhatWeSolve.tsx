import React from "react";

export const WhatWeSolve: React.FC = () => {
  const cards = [
    {
      title: "Strategy & Growth",
      description: "Shape your next chapter with clarity — from market entry to business expansion.",
      image: "./assets/strategy-growth.jpg", // Replace with your actual asset paths
      link: "/intellev8",
    },
    {
      title: "Embedded Expertise",
      description: "Access senior expertise across key functions to solve complex business challenges.",
      image: "./assets/embedded-expertise.jpg", 
      link: "/intellxperia",
    },
    {
      title: "Learning & Capability Development",
      description: "Build high-performing teams and future-ready organisations.",
      image: "./assets/learning-capability.jpg", 
      link: "/intelliwise",
    },
    {
      title: "Leadership Community & Ecosystem",
      description: "Connect, collaborate and grow with a trusted community of leaders and entrepreneurs.",
      image: "./assets/leadership-community.jpg", 
      link: "/intellicircle",
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      {/* Top Header Section */}
      <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-start gap-10">
        <div className="md:w-1/2">
          <span className="text-sm font-sans font-bold tracking-widest text-[#2C466D] uppercase mb-4 block">
            What we solve
          </span>
          <h2 className="font-display font-bold text-[#2C466D] text-[28px] md:text-[32px] lg:text-[36px] leading-tight">
            From complexity <br className="hidden md:block" />
            to a clearer path forward.
          </h2>
        </div>
        <div className="md:w-5/12 lg:w-1/3 pt-2 md:pt-10">
          <p className="font-sans text-[#2C466D] text-sm md:text-base font-medium">
            We partner with businesses and leaders at critical inflection points,
            bringing strategic insight, functional expertise and practical execution
            to create sustainable impact.
          </p>
        </div>
      </div>

      {/* Grid Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col h-full bg-white">
            {/* Image Box */}
            <div className="w-full aspect-[4/3] overflow-hidden rounded-xl shadow-sm bg-gray-200 mb-6">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Text Content */}
            <div className="flex flex-col flex-grow">
              <h3 className="font-display font-bold text-[#2C466D] text-xl mb-3">
                {card.title}
              </h3>
              <p className="font-sans text-[#2C466D] text-sm md:text-base font-medium mb-6 flex-grow opacity-90">
                {card.description}
              </p>
              
              {/* Action Link */}
<a
  href={card.link}
  className="font-sans font-bold text-white bg-[#2C466D] hover:bg-[#1A2A42] px-6 py-2.5 rounded-full inline-flex items-center gap-2 group transition-all duration-300 mt-auto w-fit shadow-sm hover:shadow-md"
>
  Explore
  <span className="group-hover:translate-x-1 transition-transform duration-300">
    →
  </span>
</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
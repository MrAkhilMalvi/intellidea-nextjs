import React from "react";

const teamData = [
  { img: "./assets/Richard.png", name: "Richard George", title: "Creative Head", desc: "A seasoned visionary with an illustrious career spanning over 30 years, Richard brings unparalleled expertise in creative...", link: "./team/16.html" },
  { img: "./assets/SA ID.png", name: "Shekhar Agarwal", title: "Compliance & Statutory Auditor", desc: "Shekhar Agarwal is a distinguished Fellow Member of the ICAI...", link: "./team/17.html" },
  { img: "./assets/Amee.png", name: "Amee Sedani", title: "HR Business Lead", desc: "Dedicated and passionate professional with nearly a decade of rich experience in the dynamic field of Human Resources...", link: "./team/18.html" },
];

export const TeamSection: React.FC = () => (
  <section className="w-full bg-white flex flex-col justify-center items-center py-16 lg:py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="font-display font-bold text-[#2C466D] text-[28px] md:text-[32px] lg:text-[42px] mb-12 lg:mb-16 text-center">
        Our Team
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {teamData.map((member, idx) => (
          <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col group">
            <div className="w-full h-auto md:h-80 lg:h-105 overflow-hidden">
              <img src={member.img} alt={member.name} className="w-full h-auto md:h-full object-cover transition-transform duration-500 md:group-hover:scale-105" />
            </div>
            <div className="p-6 flex flex-col grow text-center">
              <h3 className="font-display font-bold text-[#2C466D] text-xl lg:text-2xl mb-1">{member.name}</h3>
              <p className="font-sans text-black font-medium text-sm mb-4 uppercase tracking-wide">{member.title}</p>
              <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">{member.desc}</p>
              <a href={member.link} className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
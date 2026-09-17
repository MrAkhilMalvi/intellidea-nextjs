import React from "react";

const associatesData = [
  { img: "./assets/SB.jpg", name: "Dr. Shashi Bhushan Singh", desc: "Dr. Shashi Bhushan Singh is a distinguished expert with a blend of technical, academic and management skills with over...", link: "./team/6.html" },
  { img: "./assets/raajesh chalke.jpg", name: "Raajesh Chalke", desc: "Raajesh Chalke is a seasoned financial leader with ~30 years of experience driving strategic growth, governance excellence, and IPO readiness...", link: "./team/19.html" },
  { img: "./assets/PD ID.png", name: "Prashant Dhume", desc: "Prashant Dhume is a distinguished technology executive with over 30 years of global experience across enterprise risk...", link: "./team/14.html" },
  { img: "./assets/ab.png", name: "Abraham Paul Vatakencherry", desc: "He is a dynamic global influencer known for building impactful international partnerships that drive sustainable growth....", link: "./team/20.html" },
  { img: "./assets/hiten_shah.png", name: "CA Hiten Shah", desc: "CA Hiten Shah is a seasoned finance professional with 37 years of experience specialising in Family...", link: "./team/7.html" },
  { img: "./assets/Dr. Nisarg.png", name: "Dr. Nisarg Pathak", desc: "Dr. Nisarg Pathak is a seasoned professional specialising in technical product engineering, product portfolio...", link: "./team/10.html" },
  { img: "./assets/Dr.LeenaPimpley.png", name: "Dr. Leena Pimpley", desc: "Dr. Leena Pimpley has over 35 years of experience in education, specializing in Competency-based Learning &...", link: "./team/9.html" },
  { img: "./assets/ketan_shah1.png", name: "Ketan Shah", desc: "With over 24 years of experience, including 18 years focused on designing and executing management systems...", link: "./team/11.html" },
  { img: "./assets/mauli_shah.png", name: "Mauli Shah", desc: "Mauli is a dynamic and results-driven IT & Cybersecurity expert with over a decade of specialized experience.", link: "./team/12.html" },
  { img: "./assets/chaitanya_shah.png", name: "Dr. CA Chaitanya Shah", desc: "Dr. CA Chaitanya Shah is a seasoned financial strategist, author, mentor and speaker with 20+ years of corporate leadership....", link: "./team/8.html" },
  { img: "./assets/Parikshit_patel.png", name: "Parikshit Patel", desc: "Parikshit is a distinguished technologist in the software industry with over 15 years of experience providing innovative...", link: "./team/13.html" },
  { img: "./assets/Dr.mahendra.png", name: "Dr. Mahendra Gupta", desc: "Dr. Mahendra Gupta is an accomplished expert in Human Capital Management, specializing in Human Resource Management...", link: "./team/15.html" },
];

export const AssociatesSection: React.FC = () => (
  <section className="w-full bg-[#F8FAFC] flex flex-col justify-center items-center py-16 lg:py-24">
    <div className="container mx-auto px-4 lg:px-8">
      <h2 className="font-display font-bold text-[#2C466D] text-[28px] md:text-[32px] lg:text-[42px] mb-12 lg:mb-16 text-center">
        Our Associates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {associatesData.map((person, idx) => (
          <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
            <div className="w-full h-80 md:h-80 lg:h-95 overflow-hidden">
              <img src={person.img} alt={person.name} className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105" />
            </div>
            <div className="p-6 flex flex-col grow text-center">
              <h3 className="font-display font-bold text-[#2C466D] text-lg lg:text-xl mb-3">{person.name}</h3>
              <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">{person.desc}</p>
              <a href={person.link} className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
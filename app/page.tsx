"use client";
import React, { useState } from "react";
import Header from "./components/Navbar";
import Footer from "./components/Footer";

export const IntellideaLanding: React.FC = () => {
  // Mobile menu states
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(
    null,
  );

  // Audio state
  const [isMuted, setIsMuted] = useState(true);

  // Modal states
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [brochureType, setBrochureType] = useState<number | null>(null);

  const toggleSubmenu = (menuKey: string) => {
    setOpenMobileSubmenu((prev) => (prev === menuKey ? null : menuKey));
  };

  const handleOpenModal = (type: number) => {
    setBrochureType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setBrochureType(null);
  };

  const toggleAudio = () => {
    const heroAudio = document.getElementById("heroAudio") as HTMLAudioElement;
    if (heroAudio) {
      if (heroAudio.paused) {
        heroAudio.play();
        setIsMuted(false);
      } else {
        heroAudio.pause();
        setIsMuted(true);
      }
    }
  };

  return (
    <div className="font-sans antialiased text-gray-900 bg-white selection:bg-[#F9C100] selection:text-[#2C466D]">
      {/* EY-STYLE NAVBAR */}
      <Header />

      {/* HERO SECTION */}
      <section className="hero-section relative min-h-screen flex items-start justify-start overflow-hidden pt-20">
        <video
          id="heroVideo"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="./assets/intellideahero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/60 z-0" />

<div className="container mx-auto px-4 lg:px-8 pt-34 z-10">
  <div className="max-w-4xl">
    <h1 className="font-display text-[43px] md:text-[56px] leading-tight font-extrabold text-white mb-3 text-left">
      Insight
      <span className="font-sans text-[11px] md:text-[14px] font-light align-middle px-1 opacity-90 tracking-wide uppercase relative -top-1">
        to
      </span>
      Innovate
      <span className="font-sans text-[11px] md:text-[14px] font-light align-middle px-1 opacity-90 tracking-wide uppercase relative -top-1">
        for
      </span>
      Impact
    </h1>

    {/* Properly styled tagline with bottom border line */}
    <div className=" pb-6 mb-8">
      <p className="text-sm sm:text-base md:text-lg font-medium text-white/90 tracking-wider flex flex-wrap items-center gap-2 sm:gap-3">
        <span>Business Transformation</span>
        <span className="text-[#F9C100] font-bold">|</span>
        <span>Technology</span>
        <span className="text-[#F9C100] font-bold">|</span>
        <span>People</span>
        <span className="text-[#F9C100] font-bold">|</span>
        <span>Strategy</span>
        <span className="text-[#F9C100] font-bold">|</span>
        <span>Risk</span>
        <span className="text-[#F9C100] font-bold">|</span>
        <span>Growth</span>
      </p>
    </div>

    <div className="flex items-center gap-4">
      <a
        href="#offerings"
        id="learnMoreBtn"
        className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#2C466D] font-medium text-lg px-8 py-3 rounded-full transition duration-300"
      >
        Learn More
      </a>
      <button
        id="audioToggle"
        onClick={toggleAudio}
        aria-pressed={!isMuted}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        className="inline-flex items-center gap-3 border-2 border-white text-white hover:bg-white hover:text-[#2C466D] font-medium text-lg px-6 py-3 rounded-full transition duration-300"
      >
        <i
          id="audioIcon"
          className={`fa-solid ${isMuted ? "fa-volume-xmark" : "fa-volume-high"} text-lg`}
        />
        <span id="audioLabel" className="hidden md:inline">
          {isMuted ? "Unmute" : "Mute"}
        </span>
        <audio id="heroAudio" src="./Corporate RF.mp3" loop />
      </button>
    </div>
  </div>
</div>

        {/* WhatsApp Float CTA */}
        <a
          href="https://wa.me/919082378708"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 group"
        >
          <div className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-full flex items-center gap-2 shadow-lg cursor-pointer transition transform hover:scale-105">
            <i className="fab fa-whatsapp text-2xl" />
            <span className="font-medium text-sm">Chat on WhatsApp</span>
          </div>
        </a>
      </section>

      {/* OFFERINGS */}
      <section
        id="offerings"
        className="pt-16 pb-20 lg:pt-24 lg:pb-32 bg-[#2C466D]"
      >
        <div className="mx-auto px-4 lg:px-8 max-w-7xl">
          <h3 className="font-display font-bold text-center text-white mb-12 lg:mb-16 leading-tight text-[28px] md:text-[32px] lg:text-[28px]">
            We bring together the insight, expertise, technology and ecosystem 
            <br className="hidden md:block" /> required to turn complex challenges into sustainable business outcomes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
            <div className="bg-white rounded-xl p-8 flex flex-col shadow-lg h-full min-h-80">
              <h3 className="font-display font-bold text-[#2C466D] mb-4 leading-tight text-[28px]">
                IntEllev8
              </h3>
              <p className="font-sans text-[#2C466D] opacity-90 text-[17px] leading-relaxed mt-2">
                We deliver strategic guidance to drive efficiency and growth;
                ensuring businesses, leaders and aspiring entrepreneurs overcome
                their unique challenges.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 flex flex-col shadow-lg h-full min-h-80">
              <h3 className="font-display font-bold text-[#2C466D] mb-4 leading-tight text-[28px]">
                IntellXperia
              </h3>
              <p className="font-sans text-[#2C466D] opacity-90 text-[17px] leading-relaxed mt-2">
                As a collaborative partner, we provide expertise with rich
                experience and a proven track record, ensuring the respective
                function is led with the highest level of strategic clarity.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 flex flex-col shadow-lg h-full min-h-80">
              <h3 className="font-display font-bold text-[#2C466D] mb-4 leading-tight text-[28px]">
                <a
                  href="http://www.intelliwiseacademy.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  IntelliWise
                </a>
              </h3>
              <p className="font-sans text-[#2C466D] opacity-90 text-[17px] leading-relaxed mt-2">
                Empower learners with essential training and development
                programs that enhance knowledge and skills, foster leadership,
                promote innovation for progress and growth.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 flex flex-col shadow-lg h-full min-h-80">
              <h3 className="font-display font-bold text-[#2C466D] mb-4 leading-tight text-[28px]">
                IntelliCircle
              </h3>
              <p className="font-sans text-[#2C466D] opacity-90 text-[17px] leading-relaxed mt-2">
                Build and nurture a vibrant community of leaders and
                entrepreneurs offering continuous support through collaboration
                and shared learning for growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UNIQUE VALUE PROPOSITION */}
      <section className="flex flex-col lg:flex-row w-full lg:h-120 bg-white">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 lg:p-12 order-1 lg:order-1">
          <h2 className="font-display font-bold text-[#2C466D] text-[28px] md:text-[32px] lg:text-[36px] mb-10 md:mb-12 text-center">
            Unique Value Proposition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 w-full max-w-lg">
            <div className="flex flex-col items-center text-center">
              <div className="mb-3">
                <img
                  src="./assets/Tailor - made.png"
                  alt="Strategy Icon"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <p className="font-sans text-[#2C466D] text-sm md:text-base font-medium max-w-125">
                Tailor - made strategy and guidance
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3">
                <img
                  src="./assets/Ideation.png"
                  alt="Ideation Icon"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <p className="font-sans text-[#2C466D] text-sm md:text-base font-medium max-w-50">
                Ideation to facilitation
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3">
                <img
                  src="./assets/Panel of Experts.png"
                  alt="Experts Icon"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <p className="font-sans text-[#2C466D] text-sm md:text-base font-medium max-w-50">
                A panel of experts with global best practices
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-3">
                <img
                  src="./assets/Ecosystem.png"
                  alt="Ecosystem Icon"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <p className="font-sans text-[#2C466D] text-sm md:text-base font-medium max-w-50">
                Ecosystem for continual learning and growth
              </p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-64 lg:h-full bg-gray-200 relative order-2 lg:order-2">
          <img
            src="./assets/intellidea1.png"
            alt="Unique Value Proposition"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* OUTCOME & IMPACT */}
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
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-white rounded-full p-1 max-w-6 h-6 flex items-center justify-center">
                <i className="fas fa-check text-[#2C466D] text-xs" />
              </div>
              <span className="font-sans text-lg lg:text-xl font-medium">
                Enhanced Performance
              </span>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-white rounded-full p-1 max-w-6 h-6 flex items-center justify-center">
                <i className="fas fa-check text-[#2C466D] text-xs" />
              </div>
              <span className="font-sans text-lg lg:text-xl font-medium">
                Enhanced Presence In Domestic And International Markets
              </span>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-white rounded-full p-1 max-w-6 h-6 flex items-center justify-center">
                <i className="fas fa-check text-[#2C466D] text-xs" />
              </div>
              <span className="font-sans text-lg lg:text-xl font-medium">
                Entrepreneurial Excellence
              </span>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-white rounded-full p-1 min-w-6 h-6 flex items-center justify-center">
                <i className="fas fa-check text-[#2C466D] text-xs" />
              </div>
              <span className="font-sans text-lg lg:text-xl font-medium">
                Capacity Building
              </span>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-white rounded-full p-1 min-w-6 h-6 flex items-center justify-center">
                <i className="fas fa-check text-[#2C466D] text-xs" />
              </div>
              <span className="font-sans text-lg lg:text-xl font-medium">
                Contribution To The Economy
              </span>
            </li>
            <li className="flex items-start gap-4">
              <div className="mt-1 bg-white rounded-full p-1 min-w-6 h-6 flex items-center justify-center">
                <i className="fas fa-check text-[#2C466D] text-xs" />
              </div>
              <span className="font-sans text-lg lg:text-xl font-medium">
                Increased Employment Opportunities
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* COLLABORATIVE PROCESS */}
      <section
        id="collaborative-process"
        className="w-full bg-white flex flex-col justify-center items-center py-16 px-4 overflow-hidden"
      >
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="font-display font-bold text-[#2C466D] text-[22px] md:text-[28px] lg:text-[32px] leading-tight max-w-4xl mx-auto mb-16">
            We believe in a collaborative approach, offering customized
            solutions based on the unique challenges and goals of each customer
            we work with
          </h2>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8">
            <div className="flex flex-col items-center max-w-60">
              <div className="h-20 w-20 mb-6 flex items-center justify-center">
                <img
                  src="./assets/idea.png"
                  alt="Initial Assessment"
                  className="h-20 w-20 object-contain"
                />
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
                <img
                  src="./assets/Customized.png"
                  alt="Customized Strategy"
                  className="h-20 w-20 object-contain"
                />
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
                <img
                  src="./assets/Implementation.png"
                  alt="Implementation"
                  className="h-20 w-20 object-contain"
                />
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
                <img
                  src="./assets/Hand-holding.png"
                  alt="Ongoing Support"
                  className="h-20 w-20 object-contain"
                />
              </div>
              <p className="font-sans text-[#2C466D] font-medium text-[16px] md:text-lg lg:text-xl text-center max-w-57.5">
                Ongoing hand-holding support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US */}
      <section
        id="aboutus"
        className="flex flex-col lg:flex-row w-full lg:h-135.75 bg-[#2C466D]"
      >
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 py-12 lg:p-20 text-white order-1">
          <h2 className="font-display font-bold text-[28px] md:text-[32px] lg:text-[42px] mb-6 lg:mb-8">
            Who we are
          </h2>
          <p className="font-sans text-sm md:text-base lg:text-[17px] leading-relaxed opacity-90 text-justify">
            With a deep understanding of the challenges that our clients face,
            we offer tailored solutions to enable them to navigate challenges,
            seize opportunities, unlock their potential, grow sustainably,
            innovate continuously, and achieve lasting success. Our team consist
            of experts, thought leaders, and experienced business advisors with
            rich experience in different domains, diverse functions and
            geographies. Whether you’re looking to build a sustainable business
            model, enter new markets, or looking to secure funding, we are here
            to guide you every step of the way.
          </p>
        </div>
        <div className="w-full lg:w-1/2 h-64 md:h-96 lg:h-full relative order-2">
          <img
            src="./assets/team1.jpg"
            alt="Intellidea Team"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* VISION / MISSION / PURPOSE */}
      <section className="w-full lg:h-123.25 bg-[#E6F4F1] flex items-center justify-center py-12 lg:py-0">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="bg-[#2C466D] text-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col justify-start hover:-translate-y-1 transition-transform duration-300 min-h-55 md:min-h-70">
              <h3 className="font-display font-bold text-[22px] md:text-[26px] lg:text-[30px] mb-4">
                Our Vision
              </h3>
              <p className="font-sans text-[15px] md:text-[17px] lg:text-[18px] leading-relaxed opacity-95">
                Develop an ecosystem enabling innovative solutions for business
                growth impact.
              </p>
            </div>
            <div className="bg-[#2C466D] text-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col justify-start hover:-translate-y-1 transition-transform duration-300 min-h-55 md:min-h-70">
              <h3 className="font-display font-bold text-[22px] md:text-[26px] lg:text-[30px] mb-4">
                Our Mission
              </h3>
              <p className="font-sans text-[15px] md:text-[17px] lg:text-[18px] leading-relaxed opacity-95">
                Create value by addressing complex challenges for sustainable
                growth. Enabling businesses with industry experts to equip them
                with the strategies, skills and support they need to thrive and
                evolve.
              </p>
            </div>
            <div className="bg-[#2C466D] text-white p-6 md:p-8 rounded-lg shadow-lg flex flex-col justify-start hover:-translate-y-1 transition-transform duration-300 min-h-55 md:min-h-70">
              <h3 className="font-display font-bold text-[22px] md:text-[26px] lg:text-[30px] mb-4">
                Our Purpose
              </h3>
              <p className="font-sans text-[15px] md:text-[17px] lg:text-[18px] leading-relaxed opacity-95">
                Optimise potential for progress through capacity building,
                entrepreneurial development and women empowerment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="flex flex-col lg:flex-row w-full lg:h-138.5 bg-white">
        <div className="w-full lg:w-1/2 h-64 md:h-96 lg:h-full relative order-1">
          <img
            src="./assets/team.jpg"
            alt="Core Values Team"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center px-8 py-12 lg:p-16 order-2">
          <h2 className="font-display font-bold text-[#2C466D] text-[28px] md:text-[32px] lg:text-[42px] mb-10 lg:mb-14 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12 w-full max-w-lg">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <img
                  src="./assets/Knowledge.png"
                  alt="Knowledge"
                  className="h-12 w-12 object-contain"
                />
              </div>
              <p className="font-sans text-[#2C466D] font-medium text-base lg:text-lg whitespace-nowrap">
                Knowledge based-insights
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <img
                  src="./assets/Ethics.png"
                  alt="Ethics"
                  className="h-12 w-12 object-contain"
                />
              </div>
              <p className="font-sans text-[#2C466D] font-medium text-base lg:text-lg">
                Ethics and Integrity
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <img
                  src="./assets/Excellence.png"
                  alt="Excellence"
                  className="h-12 w-12 object-contain"
                />
              </div>
              <p className="font-sans text-[#2C466D] font-medium text-base lg:text-lg whitespace-nowrap">
                Commitment to Excellence
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="mb-4">
                <img
                  src="./assets/Leadership.png"
                  alt="Leadership"
                  className="h-12 w-12 object-contain"
                />
              </div>
              <p className="font-sans text-[#2C466D] font-medium text-base lg:text-lg">
                Leadership to enable
                <br />
                and empower
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="w-full lg:h-209.75 bg-[#F8FAFC] flex flex-col justify-center items-center py-16 lg:py-0">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display font-bold text-[#2C466D] text-[28px] md:text-[32px] lg:text-[42px] mb-12 lg:mb-16 text-center">
            Our Founders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <div className="w-full h-64 md:h-80 lg:h-105 bg-gray-200 overflow-hidden">
                <img
                  src="./assets/rajnikant.png"
                  alt="Rajnickant Patel"
                  className="w-full h-full object-cover object-top md:object-center transition-transform duration-500"
                />
              </div>
              <div className="p-5 md:p-6 flex flex-col grow text-center">
                <h3 className="font-display font-bold text-[#2C466D] text-xl lg:text-2xl mb-1">
                  Rajnickant Patel
                </h3>
                <p className="font-sans text-black font-medium text-sm mb-4 uppercase tracking-wide">
                  Chairman
                </p>
                <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">
                  Mr. Rajnickant Patel is a distinguished leader in the
                  financial services sector with an illustrious career spanning
                  decades of excellence and strategic leadership.
                </p>
                <a
                  href="./team/1.html"
                  className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <div className="w-full h-64 md:h-80 lg:h-105 bg-gray-200 overflow-hidden">
                <img
                  src="./assets/vireshsir.jpeg"
                  alt="Viresh Patel"
                  className="w-full h-full object-cover object-top md:object-center transition-transform duration-500"
                />
              </div>
              <div className="p-5 md:p-6 flex flex-col grow text-center">
                <h3 className="font-display font-bold text-[#2C466D] text-xl lg:text-2xl mb-1">
                  Viresh Patel
                </h3>
                <p className="font-sans text-black font-medium text-sm mb-4 uppercase tracking-wide">
                  MD &amp; CEO
                </p>
                <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">
                  A dynamic, versatile &amp; result-oriented growth-preneur with
                  28+ years of experience spanning diverse domains across IT and
                  business strategy.
                </p>
                <a
                  href="./team/2.html"
                  className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 flex flex-col">
              <div className="w-full h-64 md:h-80 lg:h-105 bg-gray-200 overflow-hidden">
                <img
                  src="./assets/jyoti.png"
                  alt="Jyoti Patel"
                  className="w-full h-full object-cover object-top md:object-center transition-transform duration-500"
                />
              </div>
              <div className="p-5 md:p-6 flex flex-col grow text-center">
                <h3 className="font-display font-bold text-[#2C466D] text-xl lg:text-2xl mb-1">
                  Jyoti Patel
                </h3>
                <p className="font-sans text-black font-medium text-sm mb-4 uppercase tracking-wide">
                  Director
                </p>
                <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">
                  Ms. Jyoti Patel is a passionate educator with over 25 years of
                  experience in diverse roles across various educational
                  institutions and initiatives.
                </p>
                <a
                  href="./team/3.html"
                  className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVISORY BOARD */}
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
                  Dr. R. B. Barman, former Executive Director of the Reserve
                  Bank of India, is a highly esteemed expert with decades of
                  experience in banking technology and statistical analysis.
                </p>
                <a
                  href="./team/4.html"
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
                  className="w-full h-full object-cover object-top md:object-center transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col grow text-center">
                <h3 className="font-display font-bold text-[#2C466D] text-xl lg:text-2xl mb-4">
                  Sanjay Ubale
                </h3>
                <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">
                  Sanjay Ubale, a distinguished IAS officer and seasoned leader
                  with over 31 years of experience, bringing profound insights
                  into public policy and infrastructure development.
                </p>
                <a
                  href="./team/5.html"
                  className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ASSOCIATES SECTION */}
      <section className="w-full bg-[#F8FAFC] flex flex-col justify-center items-center py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display font-bold text-[#2C466D] text-[28px] md:text-[32px] lg:text-[42px] mb-12 lg:mb-16 text-center">
            Our Associates
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-full h-80 md:h-80 lg:h-95 overflow-hidden">
                <img
                  src="./assets/SB.jpg"
                  alt="Dr. Shashi Bhushan Singh"
                  className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col grow text-center">
                <h3 className="font-display font-bold text-[#2C466D] text-lg lg:text-xl mb-3">
                  Dr. Shashi Bhushan Singh
                </h3>
                <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">
                  Dr. Shashi Bhushan Singh is a distinguished expert with a
                  blend of technical, academic and management skills with
                  over...
                </p>
                <a
                  href="./team/6.html"
                  className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-full h-80 md:h-80 lg:h-95 overflow-hidden">
                <img
                  src="./assets/raajesh chalke.jpg"
                  alt="Raajesh Chalke"
                  className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col grow text-center">
                <h3 className="font-display font-bold text-[#2C466D] text-lg lg:text-xl mb-3">
                  Raajesh Chalke
                </h3>
                <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">
                  Raajesh Chalke is a seasoned financial leader with ~30 years
                  of experience driving strategic growth, governance excellence,
                  and IPO readiness...
                </p>
                <a
                  href="./team/19.html"
                  className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-full h-80 md:h-80 lg:h-95 overflow-hidden">
                <img
                  src="./assets/PD ID.png"
                  alt="Prashant Dhume"
                  className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col grow text-center">
                <h3 className="font-display font-bold text-[#2C466D] text-lg lg:text-xl mb-3">
                  Prashant Dhume
                </h3>
                <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">
                  Prashant Dhume is a distinguished technology executive with
                  over 30 years of global experience across enterprise risk...
                </p>
                <a
                  href="./team/14.html"
                  className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-full h-80 md:h-80 lg:h-95 overflow-hidden">
                <img
                  src="./assets/ab.png"
                  alt="Abraham Paul Vatakencherry"
                  className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col grow text-center">
                <h3 className="font-display font-bold text-[#2C466D] text-lg lg:text-xl mb-3">
                  Abraham Paul Vatakencherry
                </h3>
                <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">
                  He is a dynamic global influencer known for building impactful
                  international partnerships that drive sustainable growth....
                </p>
                <a
                  href="./team/20.html"
                  className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-full h-80 md:h-80 lg:h-95 overflow-hidden">
                <img
                  src="./assets/hiten_shah.png"
                  alt="CA Hiten Shah"
                  className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col grow text-center">
                <h3 className="font-display font-bold text-[#2C466D] text-lg lg:text-xl mb-3">
                  CA Hiten Shah
                </h3>
                <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">
                  CA Hiten Shah is a seasoned finance professional with 37 years
                  of extensive experience specialising in Family...
                </p>
                <a
                  href="./team/7.html"
                  className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-full h-80 md:h-80 lg:h-95 overflow-hidden">
                <img
                  src="./assets/Dr. Nisarg.png"
                  alt="Dr. Nisarg Pathak"
                  className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col grow text-center">
                <h3 className="font-display font-bold text-[#2C466D] text-lg lg:text-xl mb-3">
                  Dr. Nisarg Pathak
                </h3>
                <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">
                  Dr. Nisarg Pathak is a seasoned professional specialising in
                  technical product engineering, product portfolio...
                </p>
                <a
                  href="./team/10.html"
                  className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-full h-80 md:h-80 lg:h-95 overflow-hidden">
                <img
                  src="./assets/Dr.LeenaPimpley.png"
                  alt="Dr. Leena Pimpley"
                  className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col grow text-center">
                <h3 className="font-display font-bold text-[#2C466D] text-lg lg:text-xl mb-3">
                  Dr. Leena Pimpley
                </h3>
                <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">
                  Dr. Leena Pimpley has over 35 years of experience in
                  education, specializing in Competency-based Learning &amp;...
                </p>
                <a
                  href="./team/9.html"
                  className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-full h-80 md:h-80 lg:h-95 overflow-hidden">
                <img
                  src="./assets/ketan_shah1.png"
                  alt="Ketan Shah"
                  className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col grow text-center">
                <h3 className="font-display font-bold text-[#2C466D] text-lg lg:text-xl mb-3">
                  Ketan Shah
                </h3>
                <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">
                  With over 24 years of experience, including 18 years focused
                  on designing and executing management systems...
                </p>
                <a
                  href="./team/11.html"
                  className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-full h-80 md:h-80 lg:h-95 overflow-hidden">
                <img
                  src="./assets/mauli_shah.png"
                  alt="Mauli Shah"
                  className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col grow text-center">
                <h3 className="font-display font-bold text-[#2C466D] text-lg lg:text-xl mb-3">
                  Mauli Shah
                </h3>
                <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">
                  Mauli is a dynamic and results-driven IT &amp; Cybersecurity
                  expert with over a decade of specialized experience.
                </p>
                <a
                  href="./team/12.html"
                  className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-full h-80 md:h-80 lg:h-95 overflow-hidden">
                <img
                  src="./assets/chaitanya_shah.png"
                  alt="Dr. CA Chaitanya Shah"
                  className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col grow text-center">
                <h3 className="font-display font-bold text-[#2C466D] text-lg lg:text-xl mb-3">
                  Dr. CA Chaitanya Shah
                </h3>
                <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">
                  Dr. CA Chaitanya Shah is a seasoned financial strategist,
                  author, mentor and speaker with 20+ years of corporate
                  leadership...
                </p>
                <a
                  href="./team/8.html"
                  className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-full h-80 md:h-80 lg:h-95 overflow-hidden">
                <img
                  src="./assets/Parikshit_patel.png"
                  alt="Parikshit Patel"
                  className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col grow text-center">
                <h3 className="font-display font-bold text-[#2C466D] text-lg lg:text-xl mb-3">
                  Parikshit Patel
                </h3>
                <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">
                  Parikshit is a distinguished technologist in the software
                  industry with over 15 years of experience providing
                  innovative...
                </p>
                <a
                  href="./team/13.html"
                  className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group">
              <div className="w-full h-80 md:h-80 lg:h-95 overflow-hidden">
                <img
                  src="./assets/Dr.mahendra.png"
                  alt="Dr. Mahendra Gupta"
                  className="w-full h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col grow text-center">
                <h3 className="font-display font-bold text-[#2C466D] text-lg lg:text-xl mb-3">
                  Dr. Mahendra Gupta
                </h3>
                <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">
                  Dr. Mahendra Gupta is an accomplished expert in Human Capital
                  Management, specializing in Human Resource Management...
                </p>
                <a
                  href="./team/15.html"
                  className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="w-full bg-white flex flex-col justify-center items-center py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display font-bold text-[#2C466D] text-[28px] md:text-[32px] lg:text-[42px] mb-12 lg:mb-16 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col group">
              <div className="w-full h-auto md:h-80 lg:h-105 overflow-hidden">
                <img
                  src="./assets/Richard.png"
                  alt="Richard George"
                  className="w-full h-auto md:h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col grow text-center">
                <h3 className="font-display font-bold text-[#2C466D] text-xl lg:text-2xl mb-1">
                  Richard George
                </h3>
                <p className="font-sans text-black font-medium text-sm mb-4 uppercase tracking-wide">
                  Creative Head
                </p>
                <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">
                  A seasoned visionary with an illustrious career spanning over
                  30 years, Richard brings unparalleled expertise in creative...
                </p>
                <a
                  href="./team/16.html"
                  className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col group">
              <div className="w-full h-auto md:h-80 lg:h-105 overflow-hidden">
                <img
                  src="./assets/SA ID.png"
                  alt="Shekhar Agarwal"
                  className="w-full h-auto md:h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col grow text-center">
                <h3 className="font-display font-bold text-[#2C466D] text-xl lg:text-2xl mb-1">
                  Shekhar Agarwal
                </h3>
                <p className="font-sans text-black font-medium text-sm mb-4 uppercase tracking-wide">
                  Compliance &amp; Statutory Auditor
                </p>
                <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">
                  Shekhar Agarwal is a distinguished Fellow Member of the
                  Institute of Chartered Accountants of India (ICAI)...
                </p>
                <a
                  href="./team/17.html"
                  className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 flex flex-col group">
              <div className="w-full h-auto md:h-80 lg:h-105 overflow-hidden">
                <img
                  src="./assets/Amee.png"
                  alt="Amee Sedani"
                  className="w-full h-auto md:h-full object-cover transition-transform duration-500 md:group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex flex-col grow text-center">
                <h3 className="font-display font-bold text-[#2C466D] text-xl lg:text-2xl mb-1">
                  Amee Sedani
                </h3>
                <p className="font-sans text-black font-medium text-sm mb-4 uppercase tracking-wide">
                  HR Business Lead
                </p>
                <p className="font-sans text-[#2C466D] text-sm leading-relaxed opacity-80 mb-4 line-clamp-3">
                  Dedicated and passionate professional with nearly a decade of
                  rich experience in the dynamic field of Human Resources...
                </p>
                <a
                  href="./team/18.html"
                  className="inline-block mt-auto text-[#2C466D] font-bold text-sm hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS & PARTNERS */}
      <section className="w-full bg-[#F8FAFC] flex flex-col justify-center items-center py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-display font-bold text-[#2C466D] text-[28px] md:text-[32px] lg:text-[42px] mb-12 lg:mb-16 text-center">
            Our Clients
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-center items-center h-32 p-4">
              <img
                src="./assets/images.jpeg"
                alt="Client 1 Logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-center items-center h-32 p-4">
              <img
                src="./assets/alphamed.png"
                alt="Client 2 Logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-center items-center h-32 p-4">
              <img
                src="./assets/bk.png"
                alt="Client 3 Logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-center items-center h-32 p-4">
              <img
                src="./assets/Kenilworth Logo.jpeg"
                alt="Client 4 Logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-center items-center h-32 p-4">
              <img
                src="./assets/mmb.png"
                alt="Client 5 Logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-center items-center h-32 p-4">
              <img
                src="./assets/recharge.png"
                alt="Client 6 Logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-center items-center h-32 p-4">
              <img
                src="./assets/divergent.jpg"
                alt="Client 7 Logo"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          <div className="mt-20">
            <h2 className="font-display font-bold text-[#2C466D] text-[28px] md:text-[32px] lg:text-[42px] mb-12 lg:mb-16 text-center">
              Our Partners
            </h2>
            <div className="flex justify-center">
              <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-center items-center h-32 p-4 w-65">
                <img
                  src="./assets/auriga.png"
                  alt="Partner Logo"
                  className="object-contain w-55 h-17.5"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section id="resources" className="py-16 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-[#2C466D] mb-12">Resources</h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 sm:px-6">
          <div className="flex flex-col items-center">
            <div className="w-full aspect-16/10 rounded-xl overflow-hidden shadow-md bg-white">
              <iframe
                src="https://online.anyflip.com/ryhrt/sskr/index.html"
                className="w-full h-full border-0"
                scrolling="no"
                allowFullScreen
                title="Resource Brochure 1"
              />
            </div>
            <button
              onClick={() => handleOpenModal(1)}
              className="mt-4 bg-[#2C466D] text-white px-6 py-2 rounded-xl hover:bg-[#1f3556] transition"
            >
              Email Brochure
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full aspect-16/10 rounded-xl overflow-hidden shadow-md bg-white">
              <iframe
                src="https://online.anyflip.com/ryhrt/xzmo/index.html"
                className="w-full h-full border-0"
                scrolling="no"
                allowFullScreen
                title="Resource Brochure 2"
              />
            </div>
            <button
              onClick={() => handleOpenModal(2)}
              className="mt-4 bg-[#2C466D] text-white px-6 py-2 rounded-xl hover:bg-[#1f3556] transition"
            >
              Email Brochure
            </button>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/yd2yKDqwbU0?si=RZEWX0hq65JYwIXy"
                allowFullScreen
                title="Resource Video 1"
              />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/dncdU1b3ugM?si=uwHtWtEvg-uubBZR"
                allowFullScreen
                title="Resource Video 2"
              />
            </div>
          </div>
        </div>

        {/* Brochure Download Modal */}
        {isModalOpen && (
          <div
            id="formModal"
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-white p-6 rounded-xl w-full max-w-md relative shadow-xl text-left">
              <button
                onClick={handleCloseModal}
                className="absolute top-2 right-4 text-gray-600 hover:text-black text-2xl font-bold"
                aria-label="Close modal"
              >
                &times;
              </button>
              <h3 className="text-2xl font-semibold text-[#2C466D] mb-4">
                Enter Your Details to Download
              </h3>
              <form
                id="brochureForm"
                onSubmit={(e) => {
                  e.preventDefault();
                  // Perform brochure form submission
                  handleCloseModal();
                }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full mb-3 p-2 border rounded text-gray-800 focus:outline-none focus:border-[#2C466D]"
                />
                <input
                  type="text"
                  name="occupation"
                  placeholder="Occupation"
                  required
                  className="w-full mb-3 p-2 border rounded text-gray-800 focus:outline-none focus:border-[#2C466D]"
                />
                <input
                  type="tel"
                  name="contact"
                  placeholder="Contact Number"
                  required
                  className="w-full mb-3 p-2 border rounded text-gray-800 focus:outline-none focus:border-[#2C466D]"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  required
                  className="w-full mb-3 p-2 border rounded text-gray-800 focus:outline-none focus:border-[#2C466D]"
                />
                <input
                  type="hidden"
                  name="brochure"
                  value={brochureType || ""}
                />
                <button
                  type="submit"
                  className="bg-[#2C466D] w-full text-white py-2 rounded-xl hover:bg-[#1f3556] transition font-medium"
                >
                  Submit &amp; Email
                </button>
              </form>
            </div>
          </div>
        )}
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-16 bg-[#2C466D] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-lg text-white font-semibold mb-4">
              Reach out to us or learn more about our services
            </h3>
            <div className="mb-6">
              <p className="font-bold">Corporate Office:</p>
              <p>
                Innov8, Times Square, A Wing, 4th Floor, Marol, Andheri Kurla
                Road,
                <br />
                Andheri East, Mumbai 400059
              </p>
            </div>
            <div className="mb-6">
              <p className="font-bold">Regd. Office:</p>
              <p>EMP 47/1903, Thakur Village, Kandivali East, Mumbai 400101</p>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <i className="fas fa-phone-alt text-[#F9C100] w-5 h-5 flex items-center justify-center" />
              <span className="text-white">+91 9082 378 708</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <i className="fas fa-envelope text-[#F9C100] w-5 h-5 flex items-center justify-center" />
              <span className="text-white">hello@intellidea.co.in</span>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-4">
              Ready to Take Your Business to the Next Level?
            </h3>
            <form
              id="contactForm"
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // Perform contact submission
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  id="firstName"
                  required
                  placeholder="First name"
                  className="w-full p-2 bg-transparent border border-white rounded text-white placeholder-[#F9C100] focus:outline-none focus:border-[#F9C100] transition-colors"
                />
                <input
                  type="text"
                  id="lastName"
                  required
                  placeholder="Last name"
                  className="w-full p-2 bg-transparent border border-white rounded text-white placeholder-[#F9C100] focus:outline-none focus:border-[#F9C100] transition-colors"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="email"
                  id="email"
                  required
                  placeholder="Email"
                  className="w-full p-2 bg-transparent border border-white rounded text-white placeholder-[#F9C100] focus:outline-none focus:border-[#F9C100] transition-colors"
                />
                <input
                  id="whatsapp"
                  type="tel"
                  required
                  placeholder="WhatsApp Number"
                  className="w-full p-2 bg-transparent border border-white rounded text-white placeholder-[#F9C100] focus:outline-none focus:border-[#F9C100] transition-colors"
                />
              </div>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Message"
                className="w-full p-2 bg-transparent border border-white rounded text-white placeholder-[#F9C100] focus:outline-none focus:border-[#F9C100] transition-colors"
                defaultValue=""
              />
              <button
                type="submit"
                className="border border-[#F9C100] text-[#F9C100] px-6 py-2 rounded-full hover:bg-[#F9C100] hover:text-[#2C466D] transition duration-300 font-bold uppercase tracking-wide"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default IntellideaLanding;

"use client";

import React, { useState } from "react";

interface MenuItem {
  name: string;
  href: string;
}

const NAV_ITEMS: MenuItem[] = [
  { name: "Home", href: "index.html" },
  { name: "Solutions & Services", href: "index.html#offerings" },
  { name: "About Us", href: "index.html#aboutus" },
  { name: "Contact", href: "index.html#contact" },
  { name: "Resources", href: "index.html#resources" },
];

export default function CookiePolicyPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col pt-20">
      {/* Reusable Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#2C466D] shadow-md h-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="index.html" className="flex items-center gap-3" aria-label="Home">
              <picture>
                <img
                  src="intellidea.png"
                  alt="Intellidea"
                  className="h-10 md:h-14 w-auto object-contain"
                  width="220"
                  height="56"
                  loading="eager"
                />
              </picture>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10" aria-label="Primary">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-lg font-semibold text-white hover:text-[#F9C100] transition"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://calendly.com/hello-intellidea/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F9C100] hover:bg-[#ffcd36] text-[#2C466D] font-bold text-sm py-2.5 px-6 rounded-sm transition shadow-lg transform hover:scale-105"
              >
                Book an appointment
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle menu"
              onClick={toggleMobileMenu}
            >
              <i
                className={`text-3xl ${
                  isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"
                }`}
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden bg-[#2C466D] border-t border-white/20 absolute w-full left-0 top-20 shadow-xl"
            role="dialog"
            aria-modal="false"
          >
            <div className="flex flex-col p-4 space-y-4">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="text-base font-semibold text-white py-2 border-b border-white/10 hover:text-[#F9C100] transition"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://calendly.com/hello-intellidea/new-meeting"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="bg-[#F9C100] text-[#2C466D] font-bold py-3 text-center rounded mt-2"
              >
                Book an appointment
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Section */}
      <main className="grow">
        <section id="serve" className="bg-white py-12 px-6 md:px-20">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#2C466D]">
              Cookie Policy
            </h1>
          </div>

          <div className="max-w-5xl mx-auto text-gray-800 text-base leading-relaxed space-y-6">
            <p>
              This Cookie Policy applies to all websites, applications, and
              branded pages on third-party platforms (such as Facebook and YouTube)
              that are operated by or on behalf of Intellidea. By using
              Intellidea’s sites, you agree to our use of cookies as outlined in
              this policy. If you do not consent, you can adjust your browser
              settings to disable cookies. However, doing so may affect the
              functionality and user experience of our website.
            </p>

            <h2 className="text-xl font-semibold text-[#2C466D]">
              What Are Cookies?
            </h2>
            <p>
              Cookies are small text files stored on your computer, smartphone, or
              tablet when you visit a website. They typically contain:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>The name of the website they originate from</li>
              <li>Their duration (how long they stay on your device)</li>
              <li>A unique identifier for tracking purposes</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#2C466D]">
              Why Do We Use Cookies?
            </h2>
            <p>At Intellidea, we use cookies to:</p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>Improve website functionality and user experience</li>
              <li>Personalize content based on user preferences</li>
              <li>Analyze traffic and optimize website performance</li>
              <li>Enable social media sharing features</li>
            </ul>
            <p>We do not use cookies to personally identify users.</p>

            <h2 className="text-xl font-semibold text-[#2C466D]">
              Types of Cookies We Use
            </h2>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>
                <strong>Session Cookies</strong> – Active only while you browse
                our website and deleted when you close your browser.
              </li>
              <li>
                <strong>Persistent Cookies</strong> – Stored on your device for a
                set period to remember preferences and enhance future visits.
              </li>
            </ul>
            <p>
              You can manage or disable cookies through your browser settings,
              but this may limit certain website features.
            </p>

            <h2 className="text-xl font-semibold text-[#2C466D]">
              Google Analytics & Performance Tracking
            </h2>
            <p>
              We use Google Analytics to monitor website traffic and improve
              usability. These cookies help us analyze user behavior in an
              anonymous manner. Google’s privacy policy can be found at:{" "}
              <a
                href="https://www.google.com/privacy_policy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#2C466D] underline hover:text-[#16304a]"
              >
                www.google.com/privacy_policy.html
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2C466D] text-gray-200 py-6 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            Copyright – 2025 |{" "}
            <span className="text-white font-medium">
              Intellidea Consultancy Services Pvt. Ltd.
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <a href="privacy.html" className="hover:text-[#F9C100] transition">
              Privacy Policy
            </a>
            <a href="cookie.html" className="hover:text-[#F9C100] transition">
              Cookie Policy
            </a>
            <a href="terms.html" className="hover:text-[#F9C100] transition">
              Terms & Conditions
            </a>
            <a
              href="https://wa.me/919082378708"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-1.5 rounded-full flex items-center gap-2 hover:bg-green-600 transition shadow-sm"
            >
              <i className="fa-brands fa-whatsapp" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
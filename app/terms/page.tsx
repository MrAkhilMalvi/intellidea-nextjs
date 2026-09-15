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

export default function TermsAndConditionsPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col pt-20">
      {/* Header / Navbar */}
      <header
        id="navbar"
        className="fixed top-0 left-0 w-full z-50 bg-[#2C466D] shadow-md transition-all duration-300"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="index.html" className="flex items-center gap-3" aria-label="Home">
              <img
                src="intellidea.png"
                alt="Intellidea Logo"
                className="h-10 md:h-14 w-auto object-contain"
              />
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
                className="bg-[#F9C100] hover:bg-[#ffcd36] text-[#2C466D] font-bold text-sm py-2.5 px-6 rounded-sm shadow-lg transition transform hover:scale-105"
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
            className="lg:hidden bg-[#2C466D] border-t border-white/20 w-full left-0 top-20 absolute shadow-xl"
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

      {/* Main Content Area */}
      <main className="grow">
        <section className="py-12 px-6 md:px-20">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#2C466D]">
              Terms & Conditions
            </h1>
          </div>

          <div className="max-w-5xl mx-auto text-[#2C466D] leading-relaxed space-y-6">
            <div>
              <h2 className="font-semibold text-xl text-[#2C466D] mb-2">
                Acceptance
              </h2>
              <p>
                By using www.intellidea.co.in (“Site”), you agree to these Terms &
                Conditions. If you do not agree, please refrain from using this
                Site.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl text-[#2C466D] mb-2">
                Content & Intellectual Property
              </h2>
              <p>
                All content is owned by Intellidea Consultancy Services Pvt Ltd.
                Unauthorized use is strictly prohibited.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl text-[#2C466D] mb-2">
                Disclaimer & Limitation of Liability
              </h2>
              <p>
                The Site is provided “as is”. The Company is not liable for any
                damages resulting from its use.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl text-[#2C466D] mb-2">
                Third-Party Links
              </h2>
              <p>
                We are not responsible for external websites linked from our Site.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl text-[#2C466D] mb-2">
                User Information & Privacy
              </h2>
              <p>
                Your data usage follows our Privacy Policy. We cannot guarantee
                absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl text-[#2C466D] mb-2">
                Indemnification
              </h2>
              <p>
                You agree to indemnify the Company from claims arising from your
                use of the Site.
              </p>
            </div>

            <div>
              <h2 className="font-semibold text-xl text-[#2C466D] mb-2">
                Modifications
              </h2>
              <p>
                The Company may update the Site or Terms without prior notice.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <p>
                For queries, contact us at{" "}
                <a
                  href="mailto:hello@intellidea.co.in"
                  className="text-[#2C466D] font-semibold underline hover:text-[#16304a]"
                >
                  hello@intellidea.co.in
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#2C466D] text-gray-200 py-6 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <div>
            Copyright – 2026 |{" "}
            <span className="text-white font-medium">
              Intellidea Consultancy Services Pvt. Ltd.
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 items-center mt-4 md:mt-0">
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
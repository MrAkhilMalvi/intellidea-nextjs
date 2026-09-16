"use client";

import React, { useState } from "react";
import Header from "../components/Navbar";
import Footer from "../components/Footer";

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

export default function PrivacyAndCookiePolicy() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col pt-20">
      <Header />

      {/* Main Content Area */}
      <main className="grow">
        <section id="privacy-policy" className="bg-white py-12 px-6 md:px-20">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#2C466D]">
              Privacy Policy
            </h1>
          </div>

          <div className="max-w-5xl mx-auto text-[#2C466D] text-base leading-relaxed space-y-6">
            <p>
              We value the trust you place in us. That’s why we insist upon the
              highest standards for secure transactions and customer information
              privacy. Please read the following statement to learn about our
              information gathering and website-related practices.
            </p>
            <p className="italic text-sm text-gray-600">
              Note: Our privacy policy is subject to change at any time without
              notice. By visiting this Website, you agree to be bound by the
              terms and conditions of this Privacy Policy.
            </p>

            <h2 className="text-xl font-semibold text-[#2C466D]">
              1. Collection of Information
            </h2>
            <p>
              We collect various types of information to provide a safe,
              efficient, and customized experience. This includes:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>IP address, Referring site, Date and time</li>
              <li>Operating system, Screen resolution, Browser type</li>
              <li>Pages visited, Hostname, Connection speed</li>
              <li>Client information like domain and IP</li>
            </ul>
            <p>
              Additionally, we use cookies and similar technologies to enhance
              user experience and collect anonymous usage statistics.
            </p>

            <h2 className="text-xl font-semibold text-[#2C466D]">
              2. Use of Collected Information
            </h2>
            <p>
              We use your data to improve our services, diagnose server issues,
              identify users, and conduct internal analytics. Cookies help with
              session management and personalizing your experience.
            </p>

            <h2 className="text-xl font-semibold text-[#2C466D]">
              3. Sharing of Personal Information
            </h2>
            <p>
              We may share personal information with affiliates or when legally
              required. We do not sell your data. Disclosure may occur in good
              faith for legal obligations or protection of rights.
            </p>

            <h2 className="text-xl font-semibold text-[#2C466D]">
              4. User Rights
            </h2>
            <p>
              You have the right to access, modify, or delete your data. Contact
              us through the designated channels to exercise your rights.
            </p>

            <h2 className="text-xl font-semibold text-[#2C466D]">
              5. Data Retention
            </h2>
            <p>
              We retain data only as long as necessary for service delivery and
              legal compliance, after which it is securely deleted or
              anonymized.
            </p>

            <h2 className="text-xl font-semibold text-[#2C466D]">
              6. Security
            </h2>
            <p>
              We implement robust security protocols including encryption and
              secure servers to protect your data from unauthorized access.
            </p>

            <h2 className="text-xl font-semibold text-[#2C466D]">
              7. Choice/Opt-Out
            </h2>
            <p>
              Users can opt out of receiving non-essential communications.
              Instructions are available in your account settings or by
              contacting support.
            </p>

            <h2 className="text-xl font-semibold text-[#2C466D]">
              8. External Links
            </h2>
            <p>
              Our site may link to third-party websites. We are not responsible
              for their content or privacy practices.
            </p>

            <h2 className="text-xl font-semibold text-[#2C466D]">
              9. Advertisements
            </h2>
            <p>
              We may use third-party advertising partners. These partners may
              collect non-identifiable data for ad targeting.
            </p>

            <h2 className="text-xl font-semibold text-[#2C466D]">
              10. Consent
            </h2>
            <p>
              By using our website and services, you consent to the collection
              and use of information as described in this policy.
            </p>

            <h2 className="text-xl font-semibold text-[#2C466D]">
              11. International Compliance
            </h2>
            <p>
              For users outside India, your data may be transferred to India. We
              comply with global regulations such as GDPR and CCPA/DPDPA.
            </p>

            <h2 className="text-xl font-semibold text-[#2C466D]">
              12. Governing Law
            </h2>
            <p>
              Disputes related to this policy will be governed by the laws of
              India.
            </p>

            {/* Cookie Policy Section */}
            <h2 className="text-2xl md:text-3xl font-bold text-[#2C466D] pt-10 border-t border-gray-200">
              Cookie Policy
            </h2>
            <p>
              This Cookie Policy applies to all websites, apps, and branded
              pages managed by Intellidea. By continuing to use our sites, you
              agree to our use of cookies.
            </p>

            <h3 className="text-xl font-semibold text-[#2C466D]">
              What Are Cookies?
            </h3>
            <p>
              Cookies are small text files stored on your device. They typically
              contain:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Origin website name</li>
              <li>Duration on your device</li>
              <li>A unique identifier</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#2C466D]">
              Why We Use Cookies
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Enhance functionality and user experience</li>
              <li>Personalize content</li>
              <li>Analyze traffic and performance</li>
              <li>Enable social media features</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#2C466D]">
              Types of Cookies
            </h3>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>
                <strong>Session Cookies:</strong> Active only during a browsing
                session.
              </li>
              <li>
                <strong>Persistent Cookies:</strong> Stored for a longer period
                to remember preferences.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-[#2C466D]">
              Analytics Tools
            </h3>
            <p>
              We use Google Analytics for anonymized tracking and performance
              insights. Visit{" "}
              <a
                href="https://www.google.com/privacy_policy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F9C100] underline hover:text-[#e6b800]"
              >
                Google's Privacy Policy
              </a>{" "}
              for more details.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

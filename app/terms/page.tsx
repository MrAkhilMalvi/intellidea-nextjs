"use client";

import { useState } from "react";
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
      <Header />

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

      <Footer />
    </div>
  );
}
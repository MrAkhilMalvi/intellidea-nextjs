import Link from "next/link";
import { NAV_ITEMS } from "../constants/navconst";
import { services } from "../data/services";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C466D] text-gray-300">
      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <h3 className="font-display font-bold text-white text-2xl mb-4">
              Intellidea
            </h3>
            <p className="font-sans text-sm leading-relaxed text-gray-300/90 max-w-sm mb-6">
              Insight to Innovate for Impact — strategy, technology, people and
              managed-services support for businesses navigating growth, risk
              and transformation.
            </p>
            <a
              href="https://wa.me/919082378708"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="inline-flex w-9 h-9 rounded-full border border-white/20 items-center justify-center hover:bg-[#F9C100] hover:text-[#2C466D] hover:border-[#F9C100] transition-colors duration-300"
            >
              <i className="fa-brands fa-whatsapp text-sm" />
            </a>
            {/* Add further social icons here in the same style, e.g. LinkedIn, once you have the URLs. */}
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs font-semibold tracking-wide text-white/50 uppercase mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => {
                const href = item.href ?? item.megaMenu?.exploreHref ?? "/";
                return (
                  <li key={item.name}>
                    <Link
                      href={href}
                      className="font-sans text-sm hover:text-[#F9C100] transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-xs font-semibold tracking-wide text-white/50 uppercase mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-sans text-sm hover:text-[#F9C100] transition-colors duration-200"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-xs font-semibold tracking-wide text-white/50 uppercase mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fas fa-location-dot text-[#F9C100] mt-1 text-sm shrink-0" />
                <span className="font-sans text-sm leading-relaxed">
                  Innov8, Times Square, A Wing, 4th Floor, Marol, Andheri
                  Kurla Road, Andheri East, Mumbai 400059
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone-alt text-[#F9C100] text-sm shrink-0" />
                <a
                  href="tel:+919082378708"
                  className="font-sans text-sm hover:text-[#F9C100] transition-colors duration-200"
                >
                  +91 9082 378 708
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-[#F9C100] text-sm shrink-0" />
                <a
                  href="mailto:hello@intellidea.co.in"
                  className="font-sans text-sm hover:text-[#F9C100] transition-colors duration-200"
                >
                  hello@intellidea.co.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-center md:text-left text-gray-400">
            Copyright – {currentYear} |{" "}
            <span className="text-white font-medium">
              Intellidea Consultancy Services Pvt. Ltd.
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-6 items-center">
            <a href="/privacy" className="hover:text-[#F9C100] transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="/cookie" className="hover:text-[#F9C100] transition-colors duration-200">
              Cookie Policy
            </a>
            <a href="/terms" className="hover:text-[#F9C100] transition-colors duration-200">
              Terms & Conditions
            </a>
            <a
              href="https://wa.me/919082378708"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-1.5 rounded-full flex items-center gap-2 hover:bg-green-600 transition duration-200 shadow-sm"
            >
              <i className="fa-brands fa-whatsapp" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
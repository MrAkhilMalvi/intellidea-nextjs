import Link from "next/link";
import { NAV_ITEMS } from "../constants/navconst";
import { services } from "../data/services";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C466D] text-slate-300 border-t border-slate-700/50">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <Link
                href="/"
                className="inline-block mb-4 focus:outline-none"
                aria-label="Intellidea home"
              >
                <img
                  src="/intellidea.png"
                  alt="Intellidea"
                  className="h-10 md:h-12 w-auto object-contain"
                  width={220}
                  height={56}
                  loading="eager"
                />
              </Link>
              <p className="font-sans text-sm leading-relaxed text-slate-300/90 max-w-sm mb-6">
                Insight to Innovate for Impact — strategy, technology, people, and
                managed-services support for businesses navigating growth, risk,
                and transformation.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/919082378708"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-[#F9C100] hover:text-[#2C466D] hover:border-[#F9C100] transition-all duration-300 shadow-sm"
              >
                <i className="fa-brands fa-whatsapp text-base" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-[#F9C100] hover:text-[#2C466D] hover:border-[#F9C100] transition-all duration-300 shadow-sm"
              >
                <i className="fa-brands fa-linkedin-in text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-sans text-xs font-bold tracking-wider text-[#F9C100] uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => {
                const href = item.href ?? item.megaMenu?.exploreHref ?? "/";
                return (
                  <li key={item.name}>
                    <Link
                      href={href}
                      className="font-sans text-sm text-slate-200 hover:text-[#F9C100] transition-colors duration-200 inline-block py-0.5"
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services (Balanced 2-Column Sub-grid) */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-xs font-bold tracking-wider text-[#F9C100] uppercase mb-4">
              Our Services
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2.5">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="font-sans text-sm text-slate-200 hover:text-[#F9C100] transition-colors duration-200 inline-block py-0.5"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h4 className="font-sans text-xs font-bold tracking-wider text-[#F9C100] uppercase mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
                  <i className="fas fa-location-dot text-[#F9C100] text-xs" />
                </div>
                <span className="font-sans text-sm leading-relaxed text-slate-200">
                  Innov8, Times Square, A Wing, 4th Floor, Marol, Andheri
                  Kurla Road, Andheri East, Mumbai 400059
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded bg-white/10 flex items-center justify-center shrink-0">
                  <i className="fas fa-phone-alt text-[#F9C100] text-xs" />
                </div>
                <a
                  href="tel:+919082378708"
                  className="font-sans text-sm text-slate-200 hover:text-[#F9C100] transition-colors duration-200"
                >
                  +91 9082 378 708
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-7 h-7 rounded bg-white/10 flex items-center justify-center shrink-0">
                  <i className="fas fa-envelope text-[#F9C100] text-xs" />
                </div>
                <a
                  href="mailto:hello@intellidea.co.in"
                  className="font-sans text-sm text-slate-200 hover:text-[#F9C100] transition-colors duration-200"
                >
                  hello@intellidea.co.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10 bg-[#243A5B]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm">
          <div className="text-center md:text-left text-slate-300">
            Copyright © {currentYear}{" "}
            <span className="text-white font-semibold">
              Intellidea Consultancy Services Pvt. Ltd.
            </span>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-5 md:gap-6 text-slate-300">
            <Link
              href="/privacy"
              className="hover:text-[#F9C100] transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <Link
              href="/cookie"
              className="hover:text-[#F9C100] transition-colors duration-200"
            >
              Cookie Policy
            </Link>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <Link
              href="/terms"
              className="hover:text-[#F9C100] transition-colors duration-200"
            >
              Terms & Conditions
            </Link>

            <a
              href="https://wa.me/919082378708"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#20ba5a] text-white px-3.5 py-1.5 rounded-full flex items-center gap-2 font-medium transition duration-200 shadow-sm ml-2"
            >
              <i className="fa-brands fa-whatsapp text-base" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
import React from "react";

export default function Footer() {
  return (
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
  );
}
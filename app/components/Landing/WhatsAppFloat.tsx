import React from "react";

export const WhatsAppFloat: React.FC = () => (
  <a
    href="https://wa.me/919082378708"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 group"
    aria-label="Chat on WhatsApp"
  >
    <div className="bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-full flex items-center gap-2 shadow-xl cursor-pointer transition transform hover:scale-105">
      <i className="fab fa-whatsapp text-2xl" />
      <span className="font-medium text-sm">Chat on WhatsApp</span>
    </div>
  </a>
);
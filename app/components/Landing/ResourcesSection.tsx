"use client";
import React, { useState } from "react";

export const ResourcesSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [brochureType, setBrochureType] = useState<number | null>(null);

  const handleOpenModal = (type: number) => {
    setBrochureType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setBrochureType(null);
  };

  return (
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

      {isModalOpen && (
        <div id="formModal" className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
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
                handleCloseModal();
              }}
            >
              <input type="text" name="name" placeholder="Name" required className="w-full mb-3 p-2 border rounded text-gray-800 focus:outline-none focus:border-[#2C466D]" />
              <input type="text" name="occupation" placeholder="Occupation" required className="w-full mb-3 p-2 border rounded text-gray-800 focus:outline-none focus:border-[#2C466D]" />
              <input type="tel" name="contact" placeholder="Contact Number" required className="w-full mb-3 p-2 border rounded text-gray-800 focus:outline-none focus:border-[#2C466D]" />
              <input type="email" name="email" placeholder="Email ID" required className="w-full mb-3 p-2 border rounded text-gray-800 focus:outline-none focus:border-[#2C466D]" />
              <input type="hidden" name="brochure" value={brochureType || ""} />
              <button type="submit" className="bg-[#2C466D] w-full text-white py-2 rounded-xl hover:bg-[#1f3556] transition font-medium">
                Submit &amp; Email
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
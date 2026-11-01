"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export const ResourcesSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [brochureType, setBrochureType] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleOpenModal = (type: number) => {
    setBrochureType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setBrochureType(null);
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    // Replace these placeholders with your actual EmailJS IDs
    const SERVICE_ID = "service_f24ywxs";
    const TEMPLATE_ID = "template_4pv4szm";
    const PUBLIC_KEY = "OwMbKLlu0_dKWx47l";
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Thank you! The brochure has been emailed to you.");
          setIsSubmitting(false);
          handleCloseModal();
        },
        (error) => {
          console.error("Email send error:", error.text);
          alert("Failed to send the email. Please try again later.");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="resources" className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-[#2C466D] mb-12">Resources</h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4 sm:px-6">
        <div className="flex flex-col items-center">
          <div className="w-full aspect-16/10 rounded-xl overflow-hidden shadow-md bg-white">
            <iframe
              src="https://online.anyflip.com/xfyra/xzdf/index.html"
              className="w-full h-full border-0"
              scrolling="no"
              frameBorder="0"
              allowTransparency={true}
              allowFullScreen={true}
              title="Intellidea E-Brochure"
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
              src="https://online.anyflip.com/xfyra/hcja/index.html"
              className="w-full h-full border-0"
              scrolling="no"
              frameBorder="0"
              allowTransparency={true}
              allowFullScreen={true}
              title="Intelli Wise Academy E-Brochure"
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
              allowFullScreen={true}
              title="Resource Video 1"
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-md">
            <iframe
              className="w-full h-full border-0"
              src="https://www.youtube.com/embed/dncdU1b3ugM?si=uwHtWtEvg-uubBZR"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
              title="Resource Video 2"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full md:col-span-2 px-4">
          <div className="w-full max-w-xl aspect-video rounded-xl overflow-hidden shadow-md">
            <iframe
              className="w-full h-full border-0"
              src="https://www.youtube.com/embed/b-tB5PlQrBQ"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen={true}
              title="Intellidea - Intro Teaser Video"
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
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
            <form ref={formRef} onSubmit={sendEmail}>
              <input
                type="text"
                name="user_name"
                placeholder="Name"
                required
                className="w-full mb-3 p-2 border rounded text-gray-800 focus:outline-none focus:border-[#2C466D]"
              />
              <input
                type="text"
                name="user_occupation"
                placeholder="Occupation"
                required
                className="w-full mb-3 p-2 border rounded text-gray-800 focus:outline-none focus:border-[#2C466D]"
              />
              <input
                type="tel"
                name="user_contact"
                placeholder="Contact Number"
                required
                className="w-full mb-3 p-2 border rounded text-gray-800 focus:outline-none focus:border-[#2C466D]"
              />
              <input
                type="email"
                name="user_email"
                placeholder="Email ID"
                required
                className="w-full mb-3 p-2 border rounded text-gray-800 focus:outline-none focus:border-[#2C466D]"
              />
              <input
                type="hidden"
                name="brochure_name"
                value={brochureType === 1 ? "Intellidea E-Brochure" : "Intelli Wise Academy E-Brochure"}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#2C466D] w-full text-white py-2 rounded-xl hover:bg-[#1f3556] transition font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Submit & Email"}
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
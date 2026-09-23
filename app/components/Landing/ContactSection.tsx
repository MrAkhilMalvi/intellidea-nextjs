"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });
    const SERVICE_ID = "";
    const TEMPLATE_ID = "";
    const PUBLIC_KEY = "";

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY,
      );

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      formRef.current.reset();
    } catch (error) {
      console.error("EmailJS Submission Error:", error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-[#2C466D] text-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        {/* LEFT COLUMN: CONTACT DETAILS */}
        <div>
          <h3 className="text-lg text-white font-semibold mb-4">
            Reach out to us or learn more about our services
          </h3>
          <div className="mb-6">
            <p className="font-bold">Corporate Office:</p>
            <p>
              Innov8, Times Square, A Wing, 4th Floor, Marol, Andheri Kurla
              Road,
              <br />
              Andheri East, Mumbai 400059
            </p>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <i className="fas fa-phone-alt text-[#F9C100] w-5 h-5 flex items-center justify-center" />
            <span className="text-white">+91 9082 378 708</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <i className="fas fa-envelope text-[#F9C100] w-5 h-5 flex items-center justify-center" />
            <span className="text-white">hello@intellidea.co.in</span>
          </div>
        </div>

        {/* RIGHT COLUMN: FORM */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Ready to Take Your Business to the Next Level?
          </h3>
          <form
            ref={formRef}
            id="contactForm"
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            {/* FIRST & LAST NAME */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                placeholder="First name"
                className="w-full p-2.5 bg-transparent border border-white/60 rounded text-white placeholder-[#F9C100] focus:outline-none focus:border-[#F9C100] transition-colors"
              />
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                placeholder="Last name"
                className="w-full p-2.5 bg-transparent border border-white/60 rounded text-white placeholder-[#F9C100] focus:outline-none focus:border-[#F9C100] transition-colors"
              />
            </div>

            {/* EMAIL & WHATSAPP */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
                className="w-full p-2.5 bg-transparent border border-white/60 rounded text-white placeholder-[#F9C100] focus:outline-none focus:border-[#F9C100] transition-colors"
              />
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                required
                placeholder="WhatsApp Number"
                className="w-full p-2.5 bg-transparent border border-white/60 rounded text-white placeholder-[#F9C100] focus:outline-none focus:border-[#F9C100] transition-colors"
              />
            </div>

            {/* DROPDOWN FIELD WITH CLEAR LABEL */}
            <div className="w-full space-y-1.5">
              <label
                htmlFor="serviceNeeded"
                className="block text-sm font-semibold text-[#F9C100]"
              >
                What do you need help with?
              </label>
              <div className="relative">
                <select
                  id="serviceNeeded"
                  name="serviceNeeded"
                  required
                  defaultValue=""
                  className="w-full p-2.5 bg-[#1C2A39] border border-white/60 rounded text-white focus:outline-none focus:border-[#F9C100] transition-colors cursor-pointer appearance-none pr-10 font-medium"
                >
                  <option value="" disabled className="text-white/60 bg-[#1C2A39]">
                    Select an option...
                  </option>
                  <option value="Grow" className="text-white bg-[#1C2A39] py-2">
                    Grow
                  </option>
                  <option value="Transform" className="text-white bg-[#1C2A39] py-2">
                    Transform
                  </option>
                  <option value="AI" className="text-white bg-[#1C2A39] py-2">
                    AI
                  </option>
                  <option value="People" className="text-white bg-[#1C2A39] py-2">
                    People
                  </option>
                  <option value="Fund" className="text-white bg-[#1C2A39] py-2">
                    Fund
                  </option>
                  <option value="Go Global" className="text-white bg-[#1C2A39] py-2">
                    Go Global
                  </option>
                  <option value="Risk" className="text-white bg-[#1C2A39] py-2">
                    Risk
                  </option>
                  <option value="Technology" className="text-white bg-[#1C2A39] py-2">
                    Technology
                  </option>
                  <option
                    value="Join as Expert / Associate"
                    className="text-white bg-[#1C2A39] py-2"
                  >
                    Join as Expert / Associate
                  </option>
                </select>

                {/* Styled Dropdown Arrow Icon */}
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#F9C100]">
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* MESSAGE TEXTAREA */}
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder="Message"
              className="w-full p-2.5 bg-transparent border border-white/60 rounded text-white placeholder-[#F9C100] focus:outline-none focus:border-[#F9C100] transition-colors"
              defaultValue=""
            />

            {/* SUBMIT BUTTON & STATUS */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="border border-[#F9C100] text-[#F9C100] px-6 py-2.5 rounded-full hover:bg-[#F9C100] hover:text-[#2C466D] transition duration-300 font-bold uppercase tracking-wide cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center min-w-32.5"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4 text-[#F9C100]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Submit"
                )}
              </button>

              {status.message && (
                <p
                  className={`text-sm font-medium transition-all duration-300 ease-in-out ${
                    status.type === "success"
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
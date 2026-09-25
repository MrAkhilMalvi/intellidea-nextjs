"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
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

    if (!consentChecked) {
      setStatus({
        type: "error",
        message: "Please accept the consent checkbox before submitting.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });
    const SERVICE_ID = "service_f24ywxs";
    const TEMPLATE_ID = "template_qzgggh6";
    const PUBLIC_KEY = "OwMbKLlu0_dKWx47l";

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent successfully.",
      });
      formRef.current.reset();
      setConsentChecked(false);
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

  const SOCIAL_LINKS = [
    {
      name: "WhatsApp",
      href: "https://wa.me/919082378708", // TODO: replace with your WhatsApp link
      icon: "fa-brands fa-whatsapp",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/intellidea", // TODO: replace with your LinkedIn link
      icon: "fa-brands fa-linkedin-in",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61577572718155", // TODO: replace with your Instagram link
      icon: "fa-brands fa-facebook",
    },
  ];

  return (
    <section id="contact" className="relative bg-[#1F3352] text-white py-20 overflow-hidden">
      {/* Decorative subtle background gradient blur */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#F9C100]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-12 items-start">
        {/* LEFT COLUMN: CONTACT DETAILS */}
        <div className="lg:col-span-5 flex flex-col justify-between h-full">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F9C100]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#F9C100]">
                Get In Touch
              </span>
            </div>

            <h2 className="font-display text-2xl md:text-3xl font-bold leading-snug mb-4">
              Reach out to us or learn more about our services
            </h2>

            <p className="font-sans text-sm md:text-base text-slate-300 mb-8 leading-relaxed">
              Have a question or want to discuss how Intellidea can support your enterprise? Drop us a line and our sector advisors will get back to you.
            </p>

            <div className="space-y-6">
              {/* Corporate Office */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-[#F9C100] mt-1 shadow-sm">
                  <i className="fas fa-location-dot text-base" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-[#F9C100] uppercase tracking-wide mb-1">
                    Corporate Office
                  </h4>
                  <p className="text-sm text-slate-200 leading-relaxed">
                    Innov8, Times Square, A Wing, 4th Floor, Marol, Andheri Kurla Road,
                    <br />
                    Andheri East, Mumbai 400059
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-[#F9C100] shadow-sm">
                  <i className="fas fa-phone-alt text-base" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-slate-400 uppercase tracking-wide">
                    Phone
                  </h4>
                  <a
                    href="tel:+919082378708"
                    className="text-sm md:text-base font-medium text-white hover:text-[#F9C100] transition-colors"
                  >
                    +91 9082 378 708
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center shrink-0 text-[#F9C100] shadow-sm">
                  <i className="fas fa-envelope text-base" />
                </div>
                <div>
                  <h4 className="font-semibold text-xs text-slate-400 uppercase tracking-wide">
                    Email
                  </h4>
                  <a
                    href="mailto:hello@intellidea.co.in"
                    className="text-sm md:text-base font-medium text-white hover:text-[#F9C100] transition-colors"
                  >
                    hello@intellidea.co.in
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-5">
              <h4 className="font-semibold text-xs text-slate-400 uppercase tracking-wide mb-3">
                Connect with us
              </h4>
              <div className="flex items-center gap-3">
                {SOCIAL_LINKS.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    className="w-10 h-10 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center text-[#F9C100] shadow-sm transition-all duration-200 ease-out hover:bg-[#F9C100] hover:text-[#12203A] hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <i className={`${social.icon} text-base`} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: CONTACT FORM */}
        <div className="lg:col-span-7 bg-[#253D62] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Ready to Take Your Business to the Next Level?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-6">
            Fill out the form below and an advisor will be in touch shortly.
          </p>

          <form
            ref={formRef}
            id="contactForm"
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            {/* FIRST & LAST NAME */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  placeholder="John"
                  className="w-full px-3.5 py-2.5 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#F9C100] focus:ring-1 focus:ring-[#F9C100] transition-all text-sm"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  placeholder="Doe"
                  className="w-full px-3.5 py-2.5 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#F9C100] focus:ring-1 focus:ring-[#F9C100] transition-all text-sm"
                />
              </div>
            </div>

            {/* EMAIL & WHATSAPP */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@company.com"
                  className="w-full px-3.5 py-2.5 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#F9C100] focus:ring-1 focus:ring-[#F9C100] transition-all text-sm"
                />
              </div>
              <div>
                <label htmlFor="whatsapp" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  WhatsApp / Phone *
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="w-full px-3.5 py-2.5 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#F9C100] focus:ring-1 focus:ring-[#F9C100] transition-all text-sm"
                />
              </div>
            </div>

            {/* DROPDOWN SELECT */}
            <div>
              <label
                htmlFor="serviceNeeded"
                className="block text-xs font-semibold text-[#F9C100] uppercase tracking-wider mb-1.5"
              >
                What do you need help with? *
              </label>
              <div className="relative">
                <select
                  id="serviceNeeded"
                  name="serviceNeeded"
                  required
                  defaultValue=""
                  className="w-full px-3.5 py-2.5 bg-[#1C2A39] border border-white/20 rounded-lg text-white focus:outline-none focus:border-[#F9C100] focus:ring-1 focus:ring-[#F9C100] transition-all cursor-pointer appearance-none pr-10 text-sm font-medium"
                >
                  <option value="" disabled className="text-slate-400 bg-[#1C2A39]">
                    Select an option...
                  </option>
                  <option value="Grow" className="text-white bg-[#1C2A39] py-2">
                    Grow & Scale Revenue
                  </option>
                  <option value="Transform" className="text-white bg-[#1C2A39] py-2">
                    Digital Transformation
                  </option>
                  <option value="AI" className="text-white bg-[#1C2A39] py-2">
                    AI Solutions
                  </option>
                  <option value="People" className="text-white bg-[#1C2A39] py-2">
                    People & Leadership
                  </option>
                  <option value="Fund" className="text-white bg-[#1C2A39] py-2">
                    Capital & Fundraise
                  </option>
                  <option value="Go Global" className="text-white bg-[#1C2A39] py-2">
                    Go Global / India Entry
                  </option>
                  <option value="Risk" className="text-white bg-[#1C2A39] py-2">
                    Risk & Cybersecurity
                  </option>
                  <option value="Technology" className="text-white bg-[#1C2A39] py-2">
                    Technology Advisory
                  </option>
                  <option
                    value="Join as Expert / Associate"
                    className="text-white bg-[#1C2A39] py-2"
                  >
                    Join as Expert / Associate
                  </option>
                </select>

                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[#F9C100]">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
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
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={3}
                placeholder="Tell us about your project or requirements..."
                className="w-full px-3.5 py-2.5 bg-white/5 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-[#F9C100] focus:ring-1 focus:ring-[#F9C100] transition-all text-sm"
                defaultValue=""
              />
            </div>

            {/* CONSENT CHECKBOX */}
            <label
              htmlFor="consent"
              className="flex items-start gap-3 pt-1 cursor-pointer select-none group"
            >
              <input
                type="checkbox"
                id="consent"
                name="consent"
                required
                checked={consentChecked}
                onChange={(e) => {
                  setConsentChecked(e.target.checked);
                  if (e.target.checked) setStatus({ type: null, message: "" });
                }}
                className="peer sr-only"
              />
              <span
                className="mt-0.5 w-5 h-5 shrink-0 rounded-md border border-white/30 bg-white/5 flex items-center justify-center transition-all duration-200 ease-out peer-checked:bg-[#F9C100] peer-checked:border-[#F9C100] peer-focus-visible:ring-2 peer-focus-visible:ring-[#F9C100] peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-[#253D62] group-hover:border-[#F9C100]/60"
              >
                <svg
                  className={`w-3.5 h-3.5 text-[#12203A] transition-all duration-200 ease-out ${
                    consentChecked ? "scale-100 opacity-100" : "scale-50 opacity-0"
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 5.29a1 1 0 010 1.415l-7.373 7.374a1 1 0 01-1.414 0L3.296 9.46a1 1 0 111.414-1.414l3.839 3.839 6.667-6.667a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-xs sm:text-[13px] text-slate-300 leading-relaxed">
                I agree to be contacted by Intellidea regarding my enquiry and consent to my
                information being processed in line with the{" "}
                <a href="/privacy" className="text-[#F9C100] hover:underline">
                  privacy policy
                </a>
                . *
              </span>
            </label>

            {/* SUBMIT BUTTON & STATUS */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
              <button
                type="submit"
                disabled={isSubmitting || !consentChecked}
                className="w-full sm:w-auto bg-[#F9C100] text-[#12203A] hover:bg-white hover:text-[#2C466D] px-8 py-3 rounded-lg font-bold text-sm tracking-wide uppercase transition-all duration-200 shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center active:scale-95"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-4 w-4 text-[#12203A]"
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
                  "Send Message"
                )}
              </button>

              {status.message && (
                <p
                  className={`text-sm font-medium transition-all duration-300 ${
                    status.type === "success"
                      ? "text-emerald-400"
                      : "text-rose-400"
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
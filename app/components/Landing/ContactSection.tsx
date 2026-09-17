"use client";
import React from "react";

export const ContactSection: React.FC = () => (
    <section id="contact" className="py-16 bg-[#2C466D] text-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
            <div>
                <h3 className="text-lg text-white font-semibold mb-4">
                    Reach out to us or learn more about our services
                </h3>
                <div className="mb-6">
                    <p className="font-bold">Corporate Office:</p>
                    <p>
                        Innov8, Times Square, A Wing, 4th Floor, Marol, Andheri Kurla Road,
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

            <div>
                <h3 className="text-white font-semibold text-lg mb-4">
                    Ready to Take Your Business to the Next Level?
                </h3>
                <form
                    id="contactForm"
                    className="space-y-4"
                    onSubmit={(e) => {
                        e.preventDefault();
                    }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            id="firstName"
                            required
                            placeholder="First name"
                            className="w-full p-2 bg-transparent border border-white rounded text-white placeholder-[#F9C100] focus:outline-none focus:border-[#F9C100] transition-colors"
                        />
                        <input
                            type="text"
                            id="lastName"
                            required
                            placeholder="Last name"
                            className="w-full p-2 bg-transparent border border-white rounded text-white placeholder-[#F9C100] focus:outline-none focus:border-[#F9C100] transition-colors"
                        />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="email"
                            id="email"
                            required
                            placeholder="Email"
                            className="w-full p-2 bg-transparent border border-white rounded text-white placeholder-[#F9C100] focus:outline-none focus:border-[#F9C100] transition-colors"
                        />
                        <input
                            id="whatsapp"
                            type="tel"
                            required
                            placeholder="WhatsApp Number"
                            className="w-full p-2 bg-transparent border border-white rounded text-white placeholder-[#F9C100] focus:outline-none focus:border-[#F9C100] transition-colors"
                        />
                    </div>
                    <textarea
                        id="message"
                        required
                        rows={4}
                        placeholder="Message"
                        className="w-full p-2 bg-transparent border border-white rounded text-white placeholder-[#F9C100] focus:outline-none focus:border-[#F9C100] transition-colors"
                        defaultValue=""
                    />
                    <button
                        type="submit"
                        className="border border-[#F9C100] text-[#F9C100] px-6 py-2 rounded-full hover:bg-[#F9C100] hover:text-[#2C466D] transition duration-300 font-bold uppercase tracking-wide cursor-pointer"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    </section>
);
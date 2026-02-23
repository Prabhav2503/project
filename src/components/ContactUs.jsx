import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactUs = () => {
    return (
        <div className="w-full bg-white" style={{ fontFamily: 'Inter, sans-serif' }}>
            {/* Red Header */}
            <div className="w-full bg-[#cd1d1d] py-16 lg:py-24 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-white text-4xl lg:text-6xl font-bold mb-4">Get in Touch</h1>
                <p className="text-white/90 text-lg lg:text-xl max-w-2xl">
                    Ready to start your electric journey? Fill out the form below or reach out to us directly.
                </p>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-10 lg:-mt-16 pb-20">
                <div className="bg-white rounded-3xl shadow-xl flex flex-col lg:flex-row overflow-hidden border border-gray-100">

                    {/* Left Col — Contact Info */}
                    <div className="lg:w-[40%] bg-gray-50/50 p-8 lg:p-12 flex flex-col gap-10">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h2>

                        <div className="flex flex-col gap-8">
                            {/* Email */}
                            <div className="flex gap-5">
                                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                                    <Mail className="text-[#cd1d1d] size-6" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Email</p>
                                    <a href="mailto:hello@dashmoblity.in" className="text-gray-900 font-semibold text-lg hover:text-[#cd1d1d] transition-colors">
                                        hello@dashmoblity.in
                                    </a>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex gap-5">
                                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                                    <Phone className="text-[#cd1d1d] size-6" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Phone</p>
                                    <a href="tel:9217783765" className="text-gray-900 font-semibold text-lg hover:text-[#cd1d1d] transition-colors">
                                        +91 92177 83765
                                    </a>
                                </div>
                            </div>

                            {/* HQ */}
                            <div className="flex gap-5">
                                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                                    <MapPin className="text-[#cd1d1d] size-6" />
                                </div>
                                <div>
                                    <p className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">HQ</p>
                                    <p className="text-gray-900 font-semibold text-lg leading-snug">
                                        44, 2nd Floor, Innov8 CP2, Connaught Place, Above Madame Tussauds, New Delhi – 110001, Delhi, India
                                    </p>
                                </div>
                            </div>
                        </div>


                    </div>

                    {/* Right Col — Form */}
                    <div className="lg:w-[60%] p-8 lg:p-12 bg-white">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h2>

                        <form className="flex flex-col gap-6">
                            {/* Full Name */}
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-700 font-semibold text-sm">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#cd1d1d] focus:ring-1 focus:ring-[#cd1d1d] outline-none transition-all"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Email Address */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-700 font-semibold text-sm">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#cd1d1d] focus:ring-1 focus:ring-[#cd1d1d] outline-none transition-all"
                                    />
                                </div>
                                {/* Phone Number */}
                                <div className="flex flex-col gap-2">
                                    <label className="text-gray-700 font-semibold text-sm">Phone Number</label>
                                    <input
                                        type="tel"
                                        placeholder="+91 98765 43210"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#cd1d1d] focus:ring-1 focus:ring-[#cd1d1d] outline-none transition-all"
                                    />
                                </div>
                            </div>

                            {/* Interest Dropdown */}
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-700 font-semibold text-sm">I am interested as a...</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#cd1d1d] focus:ring-1 focus:ring-[#cd1d1d] outline-none transition-all appearance-none bg-white">
                                    <option value="">Select an option</option>
                                    <option value="rider">Rider</option>
                                    <option value="business">Business</option>
                                    <option value="partner">Partner</option>
                                </select>
                            </div>

                            {/* Message */}
                            <div className="flex flex-col gap-2">
                                <label className="text-gray-700 font-semibold text-sm">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell us how we can help..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#cd1d1d] focus:ring-1 focus:ring-[#cd1d1d] outline-none transition-all resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#cd1d1d] text-white font-bold py-4 rounded-xl hover:bg-[#b01919] transition-all shadow-lg shadow-red-200 mt-2 text-lg active:scale-[0.98]"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;

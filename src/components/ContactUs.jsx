import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, CheckCircle, Loader2 } from 'lucide-react';

const ContactUs = () => {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const url = "/api/zeptomail/v1.1/email";
        const token = "Zoho-enczapikey PHtE6r0LFO663TQrpkUEsaO8H8D3YY9/rOpheVMV4dpCCqcLF00Ho9EtlzLioxx/UvIUEaHPnIw74r+cuu6AIDm7YD1PXGqyqK3sx/VYSPOZsbq6x00atVgbdkzdVY7udNZo3CfRud3cNA==";

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify({
                    "from": {
                        "address": "noreply@dashmobility.in",
                        "name": "DASH Mobility"
                    },
                    "to": [
                        {
                            "email_address": {
                                "address": form.email,
                                "name": form.name
                            }
                        }
                    ],
                    "bcc": [
                        {
                            "email_address": {
                                "address": "hello@dashmobility.in",
                                "name": "DASH Support"
                            }
                        }
                    ],
                    "subject": "Thank you for contacting DASH Mobility",
                    "htmlbody": `
                        <div style="background-color: #fcfcfc; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 60px 20px; color: #1a1a1a; max-width: 600px; margin: 0 auto;">
                            <!-- White Card -->
                            <div style="background-color: #ffffff; border-radius: 24px; padding: 48px; border: 1px solid #f0f0f0; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
                                
                                <!-- Brand Logo -->
                                <div style="text-align: left; margin-bottom: 40px;">
                                    <img src="https://www.dashmobility.in/assets/logo-C2ZAhR0a.svg" alt="DASH Logo" style="height: 32px; width: auto;">
                                </div>

                                <!-- Content -->
                                <div style="margin-bottom: 48px;">
                                    <h2 style="font-size: 28px; font-weight: 700; margin-bottom: 16px; color: #000000; letter-spacing: -0.5px;">Hello ${form.name},</h2>
                                    <p style="font-size: 17px; line-height: 1.7; color: #555555; margin-bottom: 0;">
                                        We've successfully received your inquiry for <strong>${form.interest}</strong>. Our team is already on it and will reach out to you within one business day.
                                    </p>
                                </div>

                                <!-- Data Table -->
                                <div style="background-color: #fafafa; border-radius: 16px; padding: 32px; border: 1px solid #f0f0f0;">
                                    <h3 style="margin-top: 0; color: #cd1d1d; font-size: 11px; text-transform: uppercase; letter-spacing: 2.5px; font-weight: 800; margin-bottom: 24px;">Submission Details</h3>
                                    
                                    <div style="margin-bottom: 16px; padding-bottom: 16px; border-bottom: 1px solid #eeeeee; display: flex; justify-content: space-between;">
                                        <span style="color: #888888; font-size: 14px;">Contact Number</span>
                                        <span style="color: #1a1a1a; font-weight: 700; font-size: 14px;">${form.phone}</span>
                                    </div>
                                    
                                    <div style="margin-top: 16px;">
                                        <p style="color: #888888; font-size: 13px; margin-bottom: 8px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">Your Message</p>
                                        <p style="color: #1a1a1a; font-weight: 500; font-size: 15px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${form.message}</p>
                                    </div>
                                </div>

                                <!-- CTA -->
                                <div style="margin-top: 48px; text-align: center;">
                                    <p style="font-size: 15px; color: #555555;">In the meantime, feel free to explore our solutions.</p>
                                    <a href="https://dashmobility.in" style="display: inline-block; background-color: #cd1d1d; color: #ffffff; padding: 14px 32px; border-radius: 12px; font-weight: 700; text-decoration: none; margin-top: 12px;">Visit Website</a>
                                </div>
                            </div>

                            <!-- Footer -->
                            <div style="padding: 40px 0; text-align: center;">
                                <p style="font-size: 13px; color: #999999; margin: 0; letter-spacing: 0.5px;">&copy; 2026 Dash Mobility. All rights reserved.</p>
                            </div>
                        </div>
                    `
                })
            });

            if (!response.ok) {
                throw new Error("Failed to send email");
            }

            setSubmitted(true);
        } catch (error) {
            console.error("Email error:", error);
            alert("Something went wrong. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full bg-white transition-all duration-500" style={{ fontFamily: 'Inter, sans-serif' }}>
            {/* Red Header */}
            <div className="w-full bg-[#cd1d1d] py-16 lg:py-24 flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-white text-4xl lg:text-6xl font-bold mb-4">Get in Touch</h1>
                <p className="text-white/90 text-lg lg:text-xl max-w-2xl">
                    Ready to start your electric journey? Fill out the form below or reach out to us directly.
                </p>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl mx-auto px-6 lg:px-12 -mt-10 lg:-mt-16 pb-20">
                <div className="bg-white rounded-3xl shadow-xl flex flex-col lg:flex-row overflow-hidden border border-gray-100 min-h-[600px]">

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
                    <div className="lg:w-[60%] p-8 lg:p-12 bg-white flex flex-col justify-center">
                        {submitted ? (
                            <div className="flex flex-col items-center text-center animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle className="text-green-500 size-10" />
                                </div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h2>
                                <p className="text-gray-500 text-lg max-w-sm mb-8">
                                    Thanks for reaching out! We've received your message and will get back to you within 24 hours.
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="text-[#cd1d1d] font-bold hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h2>

                                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                    {/* Full Name */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-gray-700 font-semibold text-sm">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={form.name}
                                            onChange={handleChange}
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
                                                name="email"
                                                required
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="john@example.com"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#cd1d1d] focus:ring-1 focus:ring-[#cd1d1d] outline-none transition-all"
                                            />
                                        </div>
                                        {/* Phone Number */}
                                        <div className="flex flex-col gap-2">
                                            <label className="text-gray-700 font-semibold text-sm">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={form.phone}
                                                onChange={handleChange}
                                                placeholder="+91 98765 43210"
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#cd1d1d] focus:ring-1 focus:ring-[#cd1d1d] outline-none transition-all"
                                            />
                                        </div>
                                    </div>

                                    {/* Interest Dropdown */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-gray-700 font-semibold text-sm">I am interested as a...</label>
                                        <select
                                            name="interest"
                                            required
                                            value={form.interest}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#cd1d1d] focus:ring-1 focus:ring-[#cd1d1d] outline-none transition-all appearance-none bg-white"
                                        >
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
                                            name="message"
                                            required
                                            rows="4"
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Tell us how we can help..."
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#cd1d1d] focus:ring-1 focus:ring-[#cd1d1d] outline-none transition-all resize-none"
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-[#cd1d1d] text-white font-bold py-4 rounded-xl hover:bg-[#b01919] disabled:bg-red-400 transition-all shadow-lg shadow-red-200 mt-2 text-lg active:scale-[0.98] flex items-center justify-center gap-2"
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="animate-spin size-5" />
                                                Sending...
                                            </>
                                        ) : (
                                            'Send Message'
                                        )}
                                    </button>
                                </form>
                            </>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;

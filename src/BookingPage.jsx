import React, { useState } from 'react';
import { User, Phone, Mail, Calendar, Check, Circle } from 'lucide-react';
import rentalPoster from './assets/rental poster.jpeg';
import { db, auth } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import { signInAnonymously } from 'firebase/auth';

// Use proxy path to avoid CORS issues
const url = "/api/zeptomail/v1.1/email";
const token = "Zoho-enczapikey PHtE6r0LFO663TQrpkUEsaO8H8D3YY9/rOpheVMV4dpCCqcLF00Ho9EtlzLioxx/UvIUEaHPnIw74r+cuu6AIDm7YD1PXGqyqK3sx/VYSPOZsbq6x00atVgbdkzdVY7udNZo3CfRud3cNA==";

const BookingPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    email: '',
    plan: 'monthly', // default to monthly
    date: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlanChange = (plan) => {
    setForm({ ...form, plan });
  };

  const saveBookingToBackend = async (formData) => {
    const bookingData = {
      name: formData.name,
      whatsapp: formData.whatsapp,
      email: formData.email,
      plan: formData.plan,
      pickupDate: formData.date,
      planAmount: formData.plan === 'weekly' ? 1700 : 7000,
      deposit: 1000,
      totalPayable: formData.plan === 'weekly' ? 2700 : 8000,
      bookedAt: new Date().toISOString(),
    };

    try {
      console.log('Signing in anonymously...');
      await signInAnonymously(auth);
      console.log('Signed in. Saving Booking to Firestore:', bookingData);

      const docRef = await addDoc(collection(db, "bookings"), bookingData);
      console.log("Document written with ID: ", docRef.id);
      return true;
    } catch (error) {
      console.error("Error adding document: ", error);
      alert(`Booking Failed: ${error.message}`);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // 1. Save to Backend
    const bookingSaved = await saveBookingToBackend(form);
    if (!bookingSaved) {
      setLoading(false);
      return; // Stop if booking failed
    }

    // 2. ZeptoMail Integration via Fetch (Avoids Node.js dependency issues)
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
          "subject": "Booking Confirmation - DASH Mobility",
          "htmlbody": `
                    <div style="background-color: #f3f4f6; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; padding: 40px 0;">
                        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
                            
                            <!-- Header with Text Logo (Fail-safe) -->
                            <div style="background-color: #ffffff; padding: 40px 0 20px; text-align: center; border-bottom: 1px solid #f3f4f6;">
                                <h1 style="margin: 0; font-size: 32px; font-weight: 800; letter-spacing: -0.02em;">
                                    <span style="color: #DC2626;">DASH</span><span style="color: #111827;">Mobility</span>
                                </h1>
                            </div>

                            <!-- Content -->
                            <div style="padding: 40px 30px;">
                                <h2 style="color: #111827; margin: 0 0 10px 0; font-size: 24px; font-weight: 700; text-align: center;">You're All Set!</h2>
                                <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin-bottom: 40px; text-align: center;">
                                    Hi <strong>${form.name}</strong>, your ride is reserved. We're getting it ready for you.
                                </p>

                                <!-- Booking Details -->
                                <div style="background-color: #f9fafb; border-radius: 12px; padding: 25px; margin-bottom: 40px; border: 1px solid #e5e7eb;">
                                    <h3 style="margin-top: 0; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; margin-bottom: 15px;">BOOKING SUMMARY</h3>
                                    <table style="width: 100%; border-collapse: collapse;">
                                        <tr>
                                            <td style="padding: 12px 0; color: #4b5563; font-size: 15px; border-bottom: 1px solid #e5e7eb;">Plan</td>
                                            <td style="padding: 12px 0; color: #111827; font-weight: 600; text-align: right; border-bottom: 1px solid #e5e7eb;">${form.plan === 'weekly' ? 'Weekly' : 'Monthly'}</td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 12px 0; color: #4b5563; font-size: 15px; border-bottom: 1px solid #e5e7eb;">Pickup Date</td>
                                            <td style="padding: 12px 0; color: #111827; font-weight: 600; text-align: right; border-bottom: 1px solid #e5e7eb;">${form.date}</td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 12px 0; color: #4b5563; font-size: 15px; border-bottom: 1px solid #e5e7eb;">WhatsApp</td>
                                            <td style="padding: 12px 0; color: #111827; font-weight: 600; text-align: right; border-bottom: 1px solid #e5e7eb;">${form.whatsapp}</td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 12px 0; color: #4b5563; font-size: 15px; border-bottom: 1px solid #e5e7eb;">Rental Amount</td>
                                            <td style="padding: 12px 0; color: #111827; font-weight: 600; text-align: right; border-bottom: 1px solid #e5e7eb;">${form.plan === 'weekly' ? '₹1,700' : '₹7,000'}</td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 12px 0; color: #4b5563; font-size: 15px; border-bottom: 1px solid #dc2626;">Refundable Deposit</td>
                                            <td style="padding: 12px 0; color: #111827; font-weight: 600; text-align: right; border-bottom: 1px solid #dc2626;">₹1,000</td>
                                        </tr>
                                        <tr>
                                            <td style="padding: 16px 0 0; color: #111827; font-size: 16px; font-weight: 700;">Total Payable</td>
                                            <td style="padding: 16px 0 0; color: #dc2626; font-weight: 800; font-size: 20px; text-align: right;">${form.plan === 'weekly' ? '₹2,700' : '₹8,000'}</td>
                                        </tr>
                                    </table>
                                </div>

                                <!-- Documents Required (Clean Icons) -->
                                <div style="margin-bottom: 40px;">
                                    <h3 style="color: #111827; font-size: 18px; font-weight: 700; margin-bottom: 20px; text-align: center;">Things to Carry (Originals)</h3>
                                    <table style="width: 100%; border-collapse: separate; border-spacing: 15px 0;">
                                        <tr>
                                            <td style="width: 33.33%; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 25px 15px; text-align: center; vertical-align: top; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
                                                <img src="https://img.icons8.com/ios-filled/50/DC2626/id-card.png" alt="ID" style="width: 32px; height: 32px; margin-bottom: 12px;">
                                                <div style="font-weight: 600; color: #111827; font-size: 14px; margin-bottom: 4px;">Aadhar<br>Card</div>
                                            </td>
                                            <td style="width: 33.33%; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 25px 15px; text-align: center; vertical-align: top; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
                                                <img src="https://img.icons8.com/ios-filled/50/DC2626/bank-card-back-side.png" alt="PAN" style="width: 32px; height: 32px; margin-bottom: 12px;">
                                                <div style="font-weight: 600; color: #111827; font-size: 14px; margin-bottom: 4px;">PAN<br>Card</div>
                                            </td>
                                            <td style="width: 33.33%; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 12px; padding: 25px 15px; text-align: center; vertical-align: top; box-shadow: 0 1px 2px rgba(0,0,0,0.05);">
                                                <img src="https://img.icons8.com/ios-filled/50/DC2626/iphone-x.png" alt="Phone" style="width: 32px; height: 32px; margin-bottom: 12px;">
                                                <div style="font-weight: 600; color: #111827; font-size: 14px; margin-bottom: 4px;">Mobile<br>Number</div>
                                            </td>
                                        </tr>
                                    </table>
                                </div>

                                <!-- Location & CTA -->
                                <div style="text-align: center; background-color: #FEF2F2; padding: 30px; border-radius: 12px; border: 1px dashed #FCA5A5;">
                                    <h3 style="margin-top: 0; color: #991b1b; font-size: 18px; font-weight: 700; margin-bottom: 5px;">Pickup Hub</h3>
                                    <p style="color: #7f1d1d; font-size: 14px; margin-bottom: 20px;">
                                        Open Mon-Sun | <strong>10:00 AM - 6:00 PM</strong>
                                    </p>
                                    <a href="https://maps.google.com/?q=Dash+Mobility" target="_blank" style="display: inline-block; background-color: #dc2626; color: #ffffff; font-weight: 600; text-decoration: none; padding: 14px 28px; border-radius: 8px; font-size: 16px; box-shadow: 0 4px 6px -1px rgba(220, 38, 38, 0.3);">
                                        📍 Get Directions
                                    </a>
                                </div>
                            </div>

                            <!-- New Lighter Footer -->
                            <div style="background-color: #f9fafb; padding: 30px; text-align: center; color: #6b7280; border-top: 1px solid #e5e7eb;">
                                <p style="font-size: 14px; margin: 0 0 10px 0;">Need help? Reply to this email or call (+91) 123-456-7890</p>
                                <p style="font-size: 12px; margin: 0;">&copy; 2025 DASH Mobility. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                `
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("ZeptoMail API Error:", errorData);
        alert(`Email failed to send! Error: ${JSON.stringify(errorData)}`);
        throw new Error(JSON.stringify(errorData));
      }

      console.log("Email sent successfully");
      setSubmitted(true); // Only show success screen if email sends (or we decide otherwise)
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send booking email. Please check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-white font-sans text-gray-900">

      {/* Left Side - Full Height Image */}
      <div className="hidden lg:block lg:w-1/2 relative bg-gray-100">
        <img
          src={rentalPoster}
          alt="DASH Rental"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      {/* Right Side - Form Container */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 py-12 lg:px-20 xl:px-24 overflow-y-auto max-h-screen">

        <div className="w-full max-w-lg mx-auto">

          {/* Header */}
          {!submitted && (
            <div className="mb-10 text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-[Poppins]">
                Book Your Ride
              </h2>
              <p className="mt-3 text-lg text-gray-500">
                Select a plan and start your journey with DASH today.
              </p>
            </div>
          )}

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Plan Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Weekly Plan */}
                <div
                  onClick={() => handlePlanChange('weekly')}
                  className={`relative p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${form.plan === 'weekly'
                    ? 'border-red-600 bg-red-50/50 shadow-md'
                    : 'border-gray-200 hover:border-red-200 hover:bg-gray-50'
                    }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold text-lg text-gray-900">Weekly</span>
                    {form.plan === 'weekly' ? (
                      <Check className="w-5 h-5 text-red-600" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-300" />
                    )}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">₹1,700</div>
                  <div className="text-sm text-gray-500 mt-1">per week</div>
                </div>

                {/* Monthly Plan */}
                <div
                  onClick={() => handlePlanChange('monthly')}
                  className={`relative p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200 ${form.plan === 'monthly'
                    ? 'border-red-600 bg-red-50/50 shadow-md'
                    : 'border-gray-200 hover:border-red-200 hover:bg-gray-50'
                    }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="font-semibold text-lg text-gray-900">Monthly</span>
                    {form.plan === 'monthly' ? (
                      <Check className="w-5 h-5 text-red-600" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-300" />
                    )}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">₹7,000</div>
                  <div className="text-sm text-gray-500 mt-1">per month (30 days)</div>
                </div>
              </div>

              {/* Input Fields */}
              <div className="space-y-5">

                {/* Name */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                  </div>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="block w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all font-medium"
                    placeholder="Full Name"
                  />
                </div>

                {/* WhatsApp */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                  </div>
                  <input
                    type="tel"
                    name="whatsapp"
                    required
                    pattern="[0-9]{10,13}"
                    value={form.whatsapp}
                    onChange={handleChange}
                    className="block w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all font-medium"
                    placeholder="WhatsApp Number"
                  />
                </div>

                {/* Email */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="block w-full pl-12 pr-4 py-3.5 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:bg-white focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all font-medium"
                    placeholder="Email Address"
                  />
                </div>

                {/* Pickup Date */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Calendar className="h-5 w-5 text-gray-400 group-focus-within:text-red-500 transition-colors" />
                  </div>
                  {/* Keep text placeholder effect or label for date */}
                  <label htmlFor="date" className="absolute -top-2 left-3 bg-white px-1 text-xs font-semibold text-gray-500 z-10 transition-all">Pickup Date</label>
                  <input
                    id="date"
                    type="date"
                    name="date"
                    required
                    min={new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0]}
                    value={form.date}
                    onChange={handleChange}
                    className="block w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-100 focus:border-red-500 transition-all font-medium appearance-none"
                  />
                </div>

              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full flex justify-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-lg font-bold text-white transition-all duration-300 ${loading
                  ? 'bg-red-400 cursor-not-allowed'
                  : 'bg-red-600 hover:bg-red-700 hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'
                  }`}
              >
                {loading ? 'Processing...' : 'Confirm Booking'}
              </button>

              <p className="text-center text-sm text-gray-400 mt-4">
                By booking, you agree to our <a href="/terms" target="_blank" className="text-red-500 hover:text-red-600 underline transition-colors">Terms of Service</a>.
              </p>
            </form>
          ) : (
            /* Success State */
            <div className="text-center py-10 animate-fade-in">
              <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6 shadow-sm">
                <Check className="h-10 w-10 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Booking Confirmed</h3>
              <p className="text-gray-600 mb-10 max-w-sm mx-auto">
                Thank you, <strong>{form.name}</strong>. We've sent the booking details to <strong>{form.email}</strong>.
              </p>

              <div className="bg-gray-50 rounded-2xl p-8 text-left space-y-4 mb-10 border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                  <span className="text-gray-500 font-medium">Selected Plan</span>
                  <span className="font-bold text-gray-900 capitalize text-lg">{form.plan} Plan</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-medium">Amount</span>
                  <span className="font-bold text-red-600 text-lg">
                    {form.plan === 'weekly' ? '₹1,700' : '₹7,000'}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-gray-200">
                  <span className="text-gray-500 font-medium">Pickup Date</span>
                  <span className="font-bold text-gray-900">{form.date}</span>
                </div>
              </div>

              <button
                onClick={() => setSubmitted(false)}
                className="text-red-600 hover:text-red-700 font-semibold text-lg hover:underline transition-colors"
              >
                Book Another Ride
              </button>
            </div>
          )}

        </div>

        {/* Simple Footer/Copyright for layout balance */}
        <div className="mt-12 text-center lg:text-left border-t border-gray-100 pt-6">
          <p className="text-xs text-gray-400 font-medium">&copy; 2025 DASH Mobility</p>
        </div>

      </div>
    </div>
  );
};

export default BookingPage;

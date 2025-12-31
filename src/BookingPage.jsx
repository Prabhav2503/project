import React, { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import rentalPoster from './assets/rental poster.jpeg';
import { Check, User, Calendar, MapPin, ChevronRight, Zap, Battery, IndianRupee } from 'lucide-react';

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    date: '',
    time: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(4); // Go to success screen
  };

  const steps = [
    { number: 1, title: 'Plan', icon: Zap },
    { number: 2, title: 'Details', icon: User },
    { number: 3, title: 'Confirm', icon: Check },
  ];

  return (
    <div className="w-full flex flex-col min-h-screen bg-white">
      <Navbar />

      <div className="flex-1 flex flex-col lg:flex-row mt-16">
        {/* Left side - Poster (smaller width) */}
        <div className="lg:w-[40%] h-[250px] lg:h-[calc(100vh-120px)] flex items-center justify-center bg-gradient-to-br from-red-50 to-white p-4">
          <img
            src={rentalPoster}
            alt="Rental Poster"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right side - Modern card form (more space) */}
        <div className="lg:w-[60%] flex flex-col items-center justify-start bg-white px-4 py-6 lg:px-12 lg:py-8 overflow-y-auto">

          {/* Step Progress Indicator */}
          <div className="w-full max-w-lg mb-4">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <React.Fragment key={step.number}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-base font-bold transition-all duration-300
                        ${currentStep >= step.number
                          ? 'bg-[#cd1d1d] text-white shadow-lg'
                          : 'bg-gray-200 text-gray-500'
                        }`}
                    >
                      {currentStep > step.number ? <Check size={20} /> : step.number}
                    </div>
                    <span className={`text-sm mt-2 font-medium ${currentStep >= step.number ? 'text-[#cd1d1d]' : 'text-gray-400'}`}>
                      {step.title}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-1 mx-2 rounded-full transition-all duration-300 ${currentStep > step.number ? 'bg-[#cd1d1d]' : 'bg-gray-200'}`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Form Card */}
          <div className="w-full max-w-lg bg-white rounded-2xl border border-gray-200 shadow-sm p-5 lg:p-6">

            {/* Header */}
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                {currentStep === 1 ? 'Choose Your Plan' : currentStep === 2 ? 'Your Details' : 'Confirm Booking'}
              </h1>
              <p className="text-gray-500">
                {currentStep === 1 ? 'Review your DASH scooter rental benefits' : currentStep === 2 ? 'Fill in your details to proceed' : 'Review and confirm your booking'}
              </p>
            </div>

            {/* Step 1: Plan Overview */}
            {currentStep === 1 && (
              <div className="flex flex-col gap-4">
                {/* Plan Card */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-5 border border-red-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Weekly Plan</h3>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#cd1d1d]">₹1,700<span className="text-sm font-normal text-gray-500">/week</span></p>
                    </div>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                    <p className="text-yellow-800 text-sm font-medium">💰 Refundable Deposit: ₹1,000</p>
                  </div>

                  <p className="text-gray-600 text-sm font-medium mb-3">What's included:</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="text-green-600" />
                      </div>
                      <p className="text-gray-700">Scooter Rental</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="text-green-600" />
                      </div>
                      <p className="text-gray-700">Maintenance<span className="text-gray-400">*</span></p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <Check size={14} className="text-green-600" />
                      </div>
                      <p className="text-gray-700">Unlimited Battery Swapping</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={nextStep}
                  className="bg-[#cd1d1d] hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg text-base shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Continue <ChevronRight size={20} />
                </button>
              </div>
            )}

            {/* Step 2: Details Form */}
            {currentStep === 2 && (
              <form onSubmit={(e) => { e.preventDefault(); nextStep(); }} className="flex flex-col gap-3">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="name">Full Name</label>
                  <input
                    className="bg-gray-50 border border-gray-300 rounded-lg w-full py-2.5 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#cd1d1d] focus:ring-2 focus:ring-red-100 transition-all duration-200"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="whatsapp">WhatsApp Number</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 border-gray-300 rounded-l-lg text-gray-600 font-medium">
                      +91
                    </span>
                    <input
                      className="bg-gray-50 border border-gray-300 rounded-r-lg w-full py-2.5 px-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#cd1d1d] focus:ring-2 focus:ring-red-100 transition-all duration-200"
                      id="whatsapp"
                      name="whatsapp"
                      type="tel"
                      pattern="[0-9]{10}"
                      maxLength="10"
                      placeholder="9876543210"
                      value={form.whatsapp}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>


                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="date">Pickup Date</label>
                    <input
                      className="bg-gray-50 border border-gray-300 rounded-lg w-full py-2.5 px-3 text-gray-900 focus:outline-none focus:border-[#cd1d1d] focus:ring-2 focus:ring-red-100 transition-all duration-200"
                      id="date"
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1" htmlFor="time">Pickup Time</label>
                    <input
                      className="bg-gray-50 border border-gray-300 rounded-lg w-full py-2.5 px-3 text-gray-900 focus:outline-none focus:border-[#cd1d1d] focus:ring-2 focus:ring-red-100 transition-all duration-200"
                      id="time"
                      name="time"
                      type="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="flex gap-3 mt-3">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-lg transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-[#cd1d1d] hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Continue <ChevronRight size={20} />
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: Confirmation */}
            {currentStep === 3 && (
              <div className="flex flex-col gap-6">
                <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                  <h3 className="font-semibold text-gray-900 text-lg mb-4">Booking Summary</h3>

                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-500">Name</span>
                    <span className="font-medium text-gray-900">{form.name || 'Not provided'}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-500">WhatsApp</span>
                    <span className="font-medium text-gray-900">{form.whatsapp || 'Not provided'}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-500">Pickup Date</span>
                    <span className="font-medium text-gray-900">{form.date || 'Not selected'}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-500">Pickup Time</span>
                    <span className="font-medium text-gray-900">{form.time || 'Not selected'}</span>
                  </div>
                </div>

                <div className="bg-red-50 rounded-xl p-4 border border-red-100">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-[#cd1d1d] flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-semibold text-gray-900">Pickup Location</p>
                      <p className="text-gray-600 text-sm">DASH Hub, Delhi</p>
                      <a
                        href="https://g.page/r/CcStfzP0bAPkEBE/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#cd1d1d] hover:underline text-sm font-medium mt-1 inline-block"
                      >
                        View on Google Maps →
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                  <p className="text-yellow-800 text-sm font-medium">
                    Please bring a Aadhar Card and PAN Card for verification at pickup
                  </p>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={prevStep}
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 px-6 rounded-xl transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="flex-1 bg-[#cd1d1d] hover:bg-red-700 text-white font-semibold py-4 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Check size={20} /> Confirm Booking
                  </button>
                </div>
              </div>
            )}

            {/* Step 4: Success Screen */}
            {currentStep === 4 && (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="w-20 h-20 rounded-full bg-[#cd1d1d] flex items-center justify-center mb-6">
                  <Check size={40} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
                <p className="text-gray-600 mb-6">Your scooter rental has been successfully booked.</p>
                <p className="text-sm text-gray-500 mb-4">We'll contact you on WhatsApp with further details.</p>
                <a
                  href="/"
                  className="bg-[#cd1d1d] hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Back to Home
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingPage;
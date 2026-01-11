import React, { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import rentalPoster from './assets/rental poster.jpeg';

const BookingPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    scooter: '',
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
    alert('Booking submitted!');
  };

  return (
    <div className="w-full flex flex-col min-h-screen">
      <Navbar />
      <div className="h-[700px] flex flex-col lg:flex-row mt-16">
        {/* Left side - Full height poster, no margin */}
        <div className="lg:w-1/2 h-full flex items-stretch">
          <img 
            src={rentalPoster} 
            alt="Rental Poster" 
            className="w-full h-full object-contain rounded-none shadow-2xl"
            style={{marginLeft:0, marginRight:0, borderRadius:0}}
          />
        </div>

        {/* Right side - Modern card form */}
        <div className="lg:w-1/2 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4 py-10 lg:px-16 lg:py-20">
          <div className="w-full max-w-lg bg-white/90 rounded-3xl shadow-2xl border border-gray-100 p-10 lg:p-14 flex flex-col gap-8">
            <div className="mb-2">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-1 tracking-tight leading-tight">
                {currentStep === 1 ? 'Booking Plan' : currentStep === 2 ? 'Your Details' : 'Confirmation'}
              </h1>
              <p className="text-gray-500 text-lg">
                {currentStep === 1 ? 'Review your booking plan and continue.' : currentStep === 2 ? 'Fill in your details to proceed.' : 'Confirm your booking details.'}
              </p>
            </div>

            {currentStep === 1 && (
              <div className="rounded-2xl shadow-lg border border-gray-200 px-8 py-8 bg-gradient-to-br from-red-50 to-white flex flex-col items-center gap-4">
                <p className="text-gray-700 text-lg font-medium mb-2 text-center">You're booking a <span className="font-bold text-red-600">DASH</span> electric scooter rental.</p>
                <ul className="text-gray-600 text-base mb-4 list-disc list-inside text-left">
                  <li>Zero emissions, fast charging, reliable service</li>
                  <li>Unlimited battery swapping</li>
                  <li>₹240/day, earn up to ₹35,000/month</li>
                </ul>
                <button
                  onClick={nextStep}
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3.5 px-8 rounded-xl text-base shadow-lg hover:shadow-xl transition-all duration-300 w-full"
                >
                  Continue
                </button>
              </div>
            )}

            {currentStep === 2 && (
              <form onSubmit={(e) => { e.preventDefault(); nextStep(); }} className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="name">Full Name</label>
                  <input
                    className="bg-gray-50 border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200"
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="whatsapp">WhatsApp Number</label>
                  <input
                    className="bg-gray-50 border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200"
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    pattern="[0-9]{10,13}"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.whatsapp}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="scooter">Scooter Model</label>
                  <select
                    className="bg-gray-50 border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-900 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200"
                    id="scooter"
                    name="scooter"
                    value={form.scooter}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select your preferred model</option>
                    <option value="model1">Model 1</option>
                    <option value="model2">Model 2</option>
                    <option value="model3">Model 3</option>
                  </select>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="date">Pickup Date</label>
                    <input
                      className="bg-gray-50 border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-900 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200"
                      id="date"
                      name="date"
                      type="date"
                      value={form.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-semibold text-gray-700 mb-2" htmlFor="time">Pickup Time</label>
                    <input
                      className="bg-gray-50 border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-900 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-200"
                      id="time"
                      name="time"
                      type="time"
                      value={form.time}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="flex gap-4 mt-2">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-3.5 px-8 rounded-xl text-base shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3.5 px-8 rounded-xl text-base shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    Continue
                  </button>
                </div>
              </form>
            )}

            {currentStep === 3 && (
              <div className="rounded-2xl shadow-lg border border-gray-200 px-8 py-8 bg-gradient-to-br from-white to-red-50 flex flex-col gap-4">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmation</h2>
                <div className="text-gray-700 mb-2"><strong>Name:</strong> {form.name}</div>
                <div className="text-gray-700 mb-2"><strong>WhatsApp:</strong> {form.whatsapp}</div>
                <div className="text-gray-700 mb-2"><strong>Scooter:</strong> {form.scooter}</div>
                <div className="text-gray-700 mb-2"><strong>Pickup Date:</strong> {form.date}</div>
                <div className="text-gray-700 mb-4"><strong>Pickup Time:</strong> {form.time}</div>
                <div className="text-red-600 font-semibold mb-2">Please bring a valid ID proof with you for verification.</div>
                <div className="text-gray-700 mb-2"><strong>Hub Location:</strong> DASH Hub, 123 Electric St, Bangalore, India</div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=123+Electric+St+Bangalore+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline mb-2 block"
                >
                  View on Google Maps
                </a>
                <div className="flex gap-4 mt-2">
                  <button
                    onClick={prevStep}
                    className="bg-gray-400 hover:bg-gray-500 text-white font-semibold py-3.5 px-8 rounded-xl text-base shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3.5 px-8 rounded-xl text-base shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default BookingPage;
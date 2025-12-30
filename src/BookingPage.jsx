import React, { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import rentalPoster from './assets/rental poster.jpeg';

const BookingPage = () => {
  const [form, setForm] = useState({
    name: '',
    whatsapp: '',
    scooter: '',
    date: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Booking submitted!');
  };

  return (
    <div className="w-full flex flex-col min-h-screen bg-gradient-to-br from-pink-100 to-white">
      <Navbar />
      <div className="w-full max-w-6xl mx-auto mt-24 px-4 flex flex-col lg:flex-row items-start gap-16 justify-center">
        <div className="lg:w-1/2 flex justify-end pr-10">
          <img src={rentalPoster} alt="Rental Poster" className="rounded-2xl shadow-xl w-[420px] h-auto object-cover" />
        </div>
        <div className="lg:w-1/2 flex justify-start pl-10">
          <div className="w-full max-w-lg">
            <h1 className="text-5xl font-extrabold text-red-500 text-left mb-8 tracking-tight drop-shadow-lg">Book Your Scooter</h1>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl px-10 py-8 flex flex-col gap-6">
              <div>
                <label className="block text-lg font-semibold text-red-500 mb-2" htmlFor="name">Name</label>
                <input
                  className="border-2 border-red-300 rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:border-red-500 text-base"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-red-500 mb-2" htmlFor="whatsapp">WhatsApp Number</label>
                <input
                  className="border-2 border-red-300 rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:border-red-500 text-base"
                  id="whatsapp"
                  name="whatsapp"
                  type="tel"
                  pattern="[0-9]{10,13}"
                  placeholder="Enter your WhatsApp number"
                  value={form.whatsapp}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-semibold text-red-500 mb-2" htmlFor="scooter">Scooter Model</label>
                <select
                  className="border-2 border-red-300 rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:border-red-500 text-base"
                  id="scooter"
                  name="scooter"
                  value={form.scooter}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a model</option>
                  <option value="model1">Model 1</option>
                  <option value="model2">Model 2</option>
                  <option value="model3">Model 3</option>
                </select>
              </div>
              <div>
                <label className="block text-lg font-semibold text-red-500 mb-2" htmlFor="date">Booking Date</label>
                <input
                  className="border-2 border-red-300 rounded-lg w-full py-3 px-4 text-gray-700 focus:outline-none focus:border-red-500 text-base"
                  id="date"
                  name="date"
                  type="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-md transition-all duration-300 mt-4"
                type="submit"
              >
                Book Now
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BookingPage;
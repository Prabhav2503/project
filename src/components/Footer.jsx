import React from 'react';

const Footer = () => {
  return (
    <div className="w-full bg-pink-100 py-10 flex flex-col items-center justify-center">
      <h2 className="text-lg font-semibold text-gray-600">UPSKILL FOR A BETTER FUTURE</h2>
      <h1 className="text-3xl font-bold text-gray-800">Request More Information</h1>
      <p className="text-center text-gray-600 mt-2">
        Lift Media, LLC is a clinical stage healthcare company which is developing a unique.
      </p>
      <button className="bg-red-500 text-white px-6 py-2 mt-4 rounded">Connect Now</button>
      <div className="flex items-center justify-center gap-6 mt-10">
        <img src="linkedin-icon.svg" alt="LinkedIn" className="h-6" />
        <img src="facebook-icon.svg" alt="Facebook" className="h-6" />
        <img src="instagram-icon.svg" alt="Instagram" className="h-6" />
        <img src="youtube-icon.svg" alt="YouTube" className="h-6" />
      </div>
      <div className="mt-10 text-center">
        <img src="logo.svg" alt="DASH Mobility" className="h-8" />
        <div className="flex items-center justify-center gap-6 mt-4">
          <p className="text-gray-600">Support</p>
          <p className="text-gray-600">About Us</p>
          <p className="text-gray-600">FAQs</p>
        </div>
        <p className="text-gray-600 mt-4">© 2025 DASH Mobility</p>
      </div>
    </div>
  );
};

export default Footer;
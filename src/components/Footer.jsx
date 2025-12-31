import React from 'react';
import Logo from '../assets/logo.svg';
import { Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full mt-10">
      {/* Main footer content */}
      <div className="w-full bg-[#f8e8e8] py-8 px-4 lg:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <img src={Logo} alt="DASH Mobility" className="h-10" />

          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <a href="/" className="text-gray-700 hover:text-[#cd1d1d] transition-colors font-medium">Home</a>
            <a href="/booking" className="text-gray-700 hover:text-[#cd1d1d] transition-colors font-medium">Booking</a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-10 h-10 rounded-full border-2 border-gray-700 flex items-center justify-center hover:border-[#cd1d1d] hover:text-[#cd1d1d] transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border-2 border-gray-700 flex items-center justify-center hover:border-[#cd1d1d] hover:text-[#cd1d1d] transition-colors">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border-2 border-gray-700 flex items-center justify-center hover:border-[#cd1d1d] hover:text-[#cd1d1d] transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border-2 border-gray-700 flex items-center justify-center hover:border-[#cd1d1d] hover:text-[#cd1d1d] transition-colors">
              <Youtube size={18} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-6 pt-4 border-t border-gray-300">
          <p className="text-gray-600 text-sm">© 2025 DASH Mobility</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
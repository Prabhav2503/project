import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isDark = location.pathname === '/fleet-os' || location.pathname === '/kyc';

  const navContent = (
    <>
      <div className='flex items-center justify-between w-full lg:w-auto'>
        <img src={Logo} alt="Logo" className={`h-8 lg:h-auto ${isDark ? 'brightness-0 invert' : ''}`} />
        <button
          className='lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle menu'
        >
          <span className={`block w-6 h-0.5 ${isDark ? 'bg-white' : 'bg-black'} mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 ${isDark ? 'bg-white' : 'bg-black'} mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 ${isDark ? 'bg-white' : 'bg-black'} transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      <div
        className={`lg:flex flex-col lg:flex-row items-center justify-center gap-8 font-semibold text-md cursor-pointer ${menuOpen ? 'flex' : 'hidden'} absolute lg:static top-16 left-0 w-full lg:w-auto shadow-lg lg:shadow-none z-40 ${isDark ? 'text-gray-300 bg-black/90 lg:bg-transparent' : 'text-black bg-white lg:bg-transparent'
          }`}
        style={{ fontFamily: "Inter" }}
      >
        <Link to="/" className='navbar-link px-4 py-2 block' onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/about" className='navbar-link px-4 py-2 block' onClick={() => setMenuOpen(false)}>About Us</Link>
        <Link to="/booking" className='navbar-link px-4 py-2 block' onClick={() => setMenuOpen(false)}>Booking</Link>
        <Link to="/fleet-os" className={`navbar-link px-4 py-2 block ${isDark ? 'text-white' : ''}`} onClick={() => setMenuOpen(false)}>Fleet OS</Link>
      </div>
    </>
  );

  if (isDark) {
    return (
      <div className='fixed top-5 left-0 right-0 z-50 px-6'>
        <div className='max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-8 py-2 rounded-full bg-white/[0.05] backdrop-blur-xl border border-white/[0.1] shadow-[0_8px_32px_rgba(0,0,0,0.4)]'>
          {navContent}
        </div>
      </div>
    );
  }

  return (
    <div className='flex flex-col lg:flex-row items-center justify-between px-4 lg:px-10 py-5 fixed top-0 left-0 right-0 w-full bg-white z-50'>
      {navContent}
    </div>
  );
};

export default Navbar;
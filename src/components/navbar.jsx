import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.svg';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='flex flex-col lg:flex-row items-center justify-between px-4 lg:px-10 py-5 fixed top-0 left-0 w-full bg-white z-50'>
      <div className='flex items-center justify-between w-full lg:w-auto'>
        <img src={Logo} alt="Logo" className='h-8 lg:h-auto' />
        <button
          className='lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded focus:outline-none'
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label='Toggle menu'
        >
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>
      <div className={`lg:flex flex-col lg:flex-row items-center justify-center gap-8 text-black font-semibold text-md cursor-pointer ${menuOpen ? 'flex' : 'hidden'} absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none z-40`} style={{ fontFamily: "Inter" }}>
        <Link to="/" className='navbar-link px-4 py-2 block' onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/booking" className='navbar-link px-4 py-2 block' onClick={() => setMenuOpen(false)}>Booking</Link>
      </div>
    </div>
  );
};

export default Navbar;
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/logo.svg';
import { motion, AnimatePresence } from "motion/react";
import { Users, Bike, IndianRupee, Wrench, ChevronDown, Fingerprint, ArrowRight } from "lucide-react";

const solutions = [
  {
    title: "KYC Verification",
    desc: "6-layer identity pipeline",
    href: "/kyc",
    icon: Fingerprint,
    color: "#cd1d1d",
  },
  {
    title: "Driver Management",
    desc: "Complete driver lifecycle",
    href: "/driver-management",
    icon: Users,
    color: "#3b82f6",
  },
  {
    title: "Vehicle Management",
    desc: "Fleet control & battery swap",
    href: "/vehicles",
    icon: Bike,
    color: "#06b6d4",
  },
  {
    title: "Payments",
    desc: "Financial command center",
    href: "/payments",
    icon: IndianRupee,
    color: "#22c55e",
  },
  {
    title: "Maintenance",
    desc: "Service & breakdown ops",
    href: "/maintenance",
    icon: Wrench,
    color: "#f59e0b",
  },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fleetOpen, setFleetOpen] = useState(false);
  const [hoveredSolution, setHoveredSolution] = useState(null);
  const fleetRef = useRef(null);
  const closeTimeout = useRef(null);
  const location = useLocation();
  const isDark = ['/fleet-os', '/kyc', '/vehicles', '/payments', '/maintenance', '/driver-management'].includes(location.pathname);

  useEffect(() => {
    setFleetOpen(false);
    setMenuOpen(false);
  }, [location.pathname]);

  const openFleet = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setFleetOpen(true);
  };
  const closeFleet = () => {
    closeTimeout.current = setTimeout(() => setFleetOpen(false), 200);
  };

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
        <div ref={fleetRef} className="relative group" onMouseEnter={openFleet} onMouseLeave={closeFleet}>
          <Link to="/fleet-os" className={`navbar-link px-4 py-2 flex items-center gap-1 ${isDark ? 'text-white' : ''} ${fleetOpen ? (isDark ? 'bg-white/[0.08]' : 'bg-black/[0.05]') : ''} rounded-lg transition-colors`} onClick={() => setMenuOpen(false)}>
            Fleet OS
            <motion.div animate={{ rotate: fleetOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
              <ChevronDown className="w-4 h-4" />
            </motion.div>
          </Link>

          <AnimatePresence>
            {fleetOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.98 }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="fixed left-1/2 -translate-x-1/2 top-[85px] w-[calc(100vw-2rem)] max-w-[880px] z-[60] hidden lg:block"
                onMouseEnter={openFleet}
                onMouseLeave={closeFleet}
              >
                <div className="relative">
                  {/* Outer glow */}
                  <div className={`absolute -inset-1 bg-gradient-to-b ${isDark ? 'from-white/[0.08]' : 'from-black/[0.04]'} to-transparent rounded-[1.5rem] blur-sm pointer-events-none`} />
                  
                  <div className={`relative backdrop-blur-2xl border rounded-2xl overflow-hidden ${isDark ? 'bg-black/90 border-white/[0.1] shadow-[0_25px_80px_-12px_rgba(0,0,0,0.8)]' : 'bg-white/95 border-black/[0.05] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.1)]'}`}>
                    {/* Animated top border glow */}
                    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#cd1d1d]/50 to-transparent" />
                    
                    {/* Single row of solution cards */}
                    <div className="p-2.5">
                      <div className="grid grid-cols-5 gap-1.5">
                        {solutions.map((sol, i) => {
                          const Icon = sol.icon;
                          const isActive = location.pathname === sol.href;
                          const isHov = hoveredSolution === i;
                          const lit = isHov || isActive;
                          return (
                            <Link
                              key={sol.href}
                              to={sol.href}
                              onMouseEnter={() => setHoveredSolution(i)}
                              onMouseLeave={() => setHoveredSolution(null)}
                              className={`group relative overflow-hidden rounded-xl transition-all duration-500 ${
                                isActive ? (isDark ? "bg-white/[0.05]" : "bg-black/[0.03]") : (isDark ? "hover:bg-white/[0.03]" : "hover:bg-black/[0.02]")
                              }`}
                              style={{ minHeight: 120 }}
                              onClick={() => setFleetOpen(false)}
                            >
                              {/* Background icon — large, ghosted, offset */}
                              <motion.div
                                className="absolute -bottom-3 -right-3 pointer-events-none"
                                animate={{
                                  opacity: lit ? 0.12 : 0.04,
                                  scale: lit ? 1.1 : 1,
                                  rotate: lit ? -8 : 0,
                                }}
                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                              >
                                <Icon
                                  style={{ color: sol.color, width: 64, height: 64 }}
                                />
                              </motion.div>

                              {/* Color wash on hover */}
                              <motion.div
                                className="absolute inset-0 pointer-events-none rounded-xl"
                                animate={{
                                  opacity: lit ? 1 : 0,
                                }}
                                transition={{ duration: 0.4 }}
                                style={{
                                  background: `radial-gradient(circle at 70% 100%, ${sol.color}12 0%, transparent 70%)`,
                                }}
                              />

                              {/* Top accent line */}
                              <motion.div
                                className="absolute top-0 left-0 right-0 h-[2px]"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: lit ? 1 : 0 }}
                                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                style={{
                                  backgroundColor: sol.color,
                                  transformOrigin: "left",
                                  boxShadow: lit ? `0 0 12px ${sol.color}60` : "none",
                                }}
                              />

                              {/* Content */}
                              <div className="relative z-10 p-4 flex flex-col justify-between h-full">
                                <div>
                                  {/* Title */}
                                  <motion.span
                                    className="block text-[13px] mb-1 transition-colors duration-300"
                                    style={{ fontWeight: 700 }}
                                    animate={{ color: lit ? (isDark ? "#ffffff" : "#000000") : (isDark ? "#d1d5db" : "#4b5563") }}
                                  >
                                    {sol.title}
                                  </motion.span>

                                  {/* Desc */}
                                  <span className={`text-[10px] leading-relaxed block ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                                    {sol.desc}
                                  </span>
                                </div>

                                {/* Bottom row: badge or arrow */}
                                <div className="flex items-center justify-between mt-3">
                                  {isActive ? (
                                    <span
                                      className="text-[8px] px-2 py-0.5 rounded-full border"
                                      style={{
                                        borderColor: `${sol.color}40`,
                                        color: sol.color,
                                        backgroundColor: `${sol.color}10`,
                                        fontWeight: 700,
                                        letterSpacing: "0.08em",
                                      }}
                                    >
                                      ACTIVE
                                    </span>
                                  ) : (
                                    <div />
                                  )}
                                  <motion.div
                                    animate={{
                                      opacity: isHov ? 1 : 0,
                                      x: isHov ? 0 : -6,
                                    }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <ArrowRight
                                      className="w-3.5 h-3.5"
                                      style={{ color: sol.color }}
                                    />
                                  </motion.div>
                                </div>
                              </div>

                              {/* Subtle border on hover */}
                              <motion.div
                                className="absolute inset-0 rounded-xl pointer-events-none border"
                                animate={{
                                  borderColor: lit ? `${sol.color}${isDark ? '20' : '40'}` : (isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.04)"),
                                }}
                                transition={{ duration: 0.3 }}
                              />
                            </Link>
                          );
                        })}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
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
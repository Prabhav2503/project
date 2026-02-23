import React from 'react';
import Logo from '../assets/logo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="w-full bg-white border-t border-gray-200" style={{ fontFamily: 'Inter, sans-serif' }}>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-10 lg:px-20 pt-20 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-6">
            <img src={Logo} alt="DASH Mobility" className="h-12 w-auto" />
            <p className="text-gray-500 text-base leading-relaxed">
              Powering smarter urban mobility for enterprises and last-mile delivery riders.
              Join the electric revolution today.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-2">
              {[
                <svg key="fb" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
                <svg key="tw" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
                <svg key="ig" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>,
                <svg key="li" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>,
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#cd1d1d] hover:text-[#cd1d1d] transition-colors"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Company */}
          <div className="flex flex-col gap-6">
            <h3 className="font-semibold text-gray-900 text-base">Company</h3>
            <ul className="flex flex-col gap-4">
              {[
                { label: 'About Us', href: '/about' },
                { label: 'Careers', href: '#' },
                { label: 'Blog', href: '#' },
                { label: 'Contact', href: '/contact' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-gray-500 hover:text-gray-900 text-base transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Solutions */}
          <div className="flex flex-col gap-6">
            <h3 className="font-semibold text-gray-900 text-base">Solutions</h3>
            <ul className="flex flex-col gap-4">
              {[
                { label: 'For Riders', href: '/booking' },
                { label: 'For Businesses', href: '#' },
                { label: 'Our Vehicles', href: '#' },
                { label: 'Battery Swapping', href: '#' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-gray-500 hover:text-gray-900 text-base transition-colors">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Get in Touch */}
          <div className="flex flex-col gap-6">
            <h3 className="font-semibold text-gray-900 text-base">Get in Touch</h3>
            <ul className="flex flex-col gap-5 text-base">
              <li className="flex gap-2">
                <span className="text-[#cd1d1d] font-semibold shrink-0">HQ:</span>
                <span className="text-gray-500 leading-snug">44, 2nd Floor, Innov8 CP2, Connaught Place, Delhi, India</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-[#cd1d1d] font-semibold shrink-0">Email:</span>
                <a href="mailto:hello@dashmoblity.in" className="text-gray-500 hover:text-gray-900 transition-colors">
                  hello@dashmoblity.in
                </a>
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-[#cd1d1d] font-semibold shrink-0">Phone:</span>
                <a href="tel:9217783765" className="text-gray-500 hover:text-gray-900 transition-colors">
                  +91 92177 83765
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-10 lg:px-20 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-[13px]">
            © {currentYear} DASH Mobility Pvt Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-gray-700 text-[13px] transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-gray-400 hover:text-gray-700 text-[13px] transition-colors">Terms of Service</a>
          </div>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-400 hover:border-[#cd1d1d] hover:text-[#cd1d1d] transition-colors"
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 15l-6-6-6 6" />
            </svg>
          </button>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import Footer from './components/Footer.jsx';
import BookingPage from './BookingPage.jsx';
import ContactUs from './components/ContactUs.jsx';
import AboutUs from './components/AboutUs.jsx';
import TermsOfService from './components/TermsOfService.jsx';
import NotFound from './NotFound.jsx';

const App = () => {
  const location = useLocation();
  const isBookingPage = location.pathname === '/booking';

  return (
    <div className={!isBookingPage ? 'pt-[60px]' : ''}>
      {!isBookingPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!isBookingPage && <Footer />}
    </div>
  );
};

export default App;
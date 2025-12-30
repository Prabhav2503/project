import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-white">
      <h1 className="text-8xl font-extrabold text-red-500 drop-shadow-lg mb-4 animate-bounce">404</h1>
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Oops! Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
        Looks like you've taken a wrong turn on the electric highway.<br />
        The page you're looking for zoomed away on a scooter!
      </p>
      <Link to="/" className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg text-lg shadow-md transition-all duration-300">
        Go Home
      </Link>
      
    </div>
  );
};

export default NotFound;

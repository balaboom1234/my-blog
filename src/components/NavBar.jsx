import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-white px-8 py-6 flex justify-between items-center shadow-sm">
      {/* Logo */}
      <div className="text-3xl font-bold text-gray-900">
        hh.
      </div>
      
      {/* Navigation Buttons */}
      <div className="flex gap-3">
        <button className="px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-medium">
          Log in
        </button>
        <button className="px-6 py-3 text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors font-medium">
          Sign up
        </button>
      </div>
    </nav>
  );
};

export default NavBar;

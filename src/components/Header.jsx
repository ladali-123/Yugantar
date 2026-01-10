import React, { useState } from 'react';
import logo from '../assets/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section - Left */}
          <div className="flex items-center space-x-3 ">
            {/* Logo Section - Left */}
            {/* Logo Section - Left */}
            <div className="flex items-center h-12 overflow-hidden justify-start">
              <img
                src={logo}
                alt="Yugantar logo"
                className="h-14 w-[520px] object-contain object-left"
              />
            </div>

          </div>

          {/* Desktop Menu - Right */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">About</a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Programs</a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Why Us</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Success Stories</a>
            <a href="#contact"
              className="bg-gradient-to-r from-[#0A2F5A] via-[#0F4C81] to-[#0E6F73]
              text-white px-6 py-2 rounded-lg font-medium
              hover:from-[#0E6F73] hover:to-[#0A2F5A]
              transition-all duration-300">
              Get Help Now
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium py-2">Home</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium py-2">About</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium py-2">Programs</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium py-2">Why Us</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium py-2">Success Stories</a>
              <a href="#contact"
                className="bg-gradient-to-r from-[#0A2F5A] via-[#0F4C81] to-[#0E6F73]
              text-white px-6 py-2 rounded-lg font-medium
              hover:from-[#0E6F73] hover:to-[#0A2F5A]
              transition-all duration-300">
                Get Help Now
              </a>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
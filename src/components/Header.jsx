import React, { useState } from 'react';
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";
import { useLanguage } from '../context/LanguageContext';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

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
                className="h-14 w-130 object-contain object-left"
              />
            </div>

          </div>

          {/* Desktop Menu - Right */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              {t('home')}
            </Link>

            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              {t('about')}
            </Link>

            <Link
              to="/services"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              {t('services')}
            </Link>

            <Link
              to="/testimonials"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              {t('testimonials')}
            </Link>

            <Link
              to="/blog"
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-blue-600 font-medium py-2"
            >
              {t('blog')}
            </Link>

            <a href="#contact"
              className="bg-linear-to-r from-[#0A2F5A] via-[#0F4C81] to-[#0E6F73] text-white px-5 py-2 rounded-lg font-medium hover:from-[#0E6F73] hover:to-[#0A2F5A] transition-all duration-300">
              {t('getHelp')}
            </a>

            {/* Language Toggle */}
            <div className="ml-2">
              <button
                onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
                className="px-3 py-1 rounded-full border border-gray-200 text-sm bg-white hover:bg-gray-50"
                aria-label="Toggle language"
                title={lang === 'en' ? 'Switch to Hindi' : 'हिंदी से English में बदलें'}
              >
                {lang === 'en' ? 'HI' : 'EN'}
              </button>
            </div>

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
              <a href="#home" className="text-gray-700 hover:text-blue-600 font-medium py-2">{t('home')}</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium py-2">{t('about')}</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium py-2">{t('services')}</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium py-2">{t('features')}</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 font-medium py-2">{t('testimonials')}</a>
              <a href="#contact"
                className="bg-linear-to-r from-[#0A2F5A] via-[#0F4C81] to-[#0E6F73] text-white px-6 py-2 rounded-lg font-medium hover:from-[#0E6F73] hover:to-[#0A2F5A] transition-all duration-300">
                {t('getHelp')}
              </a>

              <div className="flex items-center gap-2 pt-2">
                <button onClick={() => setLang('en')} className={`w-1/2 py-2 rounded-lg border ${lang === 'en' ? 'bg-[#0E6F73] text-white' : 'bg-white text-gray-700'}`}>EN</button>
                <button onClick={() => setLang('hi')} className={`w-1/2 py-2 rounded-lg border ${lang === 'hi' ? 'bg-[#0E6F73] text-white' : 'bg-white text-gray-700'}`}>HI</button>
              </div>

            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
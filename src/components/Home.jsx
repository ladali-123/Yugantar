import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import addict from "../assets/addict.png";
import Gallery from './Gallery';
import Features from './Features';
import Services from './Services';
import About from './About';
import Testimonials from './Testimonials';
import Contact from './Contact';
import CallToAction from './CallToAction';
import Experts from './Experts';
import { useLanguage } from '../context/LanguageContext';

const HeroBanner = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Please fill in all fields');
      return;
    }
    alert('Thank you for your enquiry! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const location = useLocation();

  useEffect(() => {
    // If there's a hash (mobile anchors), scroll to it
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const elHash = document.getElementById(id);
      if (elHash) {
        setTimeout(() => elHash.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      }
      return;
    }

    const map = {
      '/': 'home',
      '/about': 'about',
      '/gallery': 'gallery',
      '/features': 'features',
      '/services': 'services',
      '/experts': 'experts',
      '/testimonials': 'testimonials',
      '/call-to-action': 'call-to-action',
      '/contact': 'contact'
    };

    const id = map[location.pathname];
    if (id) {
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      }
    }
  }, [location]);

  return (
    <>
      <section id="home" className="relative bg-linear-to-br
       from-[#F3F8FC] via-[#F6FBFC] to-[#F1FAF9] over">

        <div className="container mx-auto px-4 py-10 lg:py-16">

          {/* TOP TWO SECTIONS */}
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">

            {/* Left Content */}
            <div className="lg:w-1/2 mb-10 lg:mb-0 space-y-5 pl-0 md:pl-8 w-full">
              {/* Premium Badge */}
              <div className="flex justify-center md:justify-start">

                <div className="inline-flex items-center gap-2  bg-[#0E6F73]/10 border
                 border-[#0E6F73]/20 text-[#0E6F73] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full
  ">

                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor"
                    viewBox="0 0 20 20">

                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 
                    1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs sm:text-sm font-semibold">
                    {t('successRate')}
                  </span>

                </div>
              </div>
              {/* Main Heading with Gradient */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold  mt-3
               text-gray-900 leading-tight mb-6 text-center md:text-left">

                <span className="block">{t('heroLine1')}</span>
                <span className="bg-linear-to-r from-[#0E6F73] to-[#0a5458]
               bg-clip-text text-transparent block text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mt-2">
                  {t('heroLine2')}
                </span>
              </h1>


              {/* Tagline with emphasis */}
              <p
                className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700 
                leading-snug mb-6 opacity-90 text-center md:text-left px-4 sm:px-0">
                <span className="block">{t('taglinePart1')}</span>
                <span className="text-[#0E6F73] block">
                  {t('taglinePart2')}
                </span>
              </p>


              {/* Description with better spacing */}
              <p
                className="text-base text-gray-600 leading-relaxed mb-8 max-w-2xl
                 text-center md:text-left px-4 sm:px-0"
              >
               <span className="font-medium text-gray-800">{t('servicesHeading')} </span>
                {t('heroDescription')}
              </p>



              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center sm:items-start justify-center md:justify-start px-4 sm:px-0">
                <a href="#home" className="inline-flex items-center gap-2 bg-[#0E6F73]
                 text-white px-6 
                py-3 rounded-full font-semibold text-base hover:bg-[#0a5458]
                 transition-all duration-300
                 shadow-lg hover:shadow-xl w-full sm:w-auto justify-center">
                  {t('startRecovery')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>

                <div className="flex items-center gap-3 text-gray-500">
                  <div className="flex -space-x-3">

                    <img
                      src="https://media.istockphoto.com/id/1205299877/photo/portrait-of-confident-woman-in-sari.webp?a=1&b=1&s=612x612&w=0&k=20&c=7o4WM_wyTTospa79c0tfFMXZDaB0KiCuXa82E0Lnk_U="

                      alt="Recovered person"
                      className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
                    />

                    <img
                      src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFufGVufDB8fDB8fHww"

                      alt="Happy recovery"
                      className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
                    />

                    <img
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW58ZW58MHx8MHx8fDA%3D"

                      alt="Successful recovery"
                      className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
                    />

                  </div>

                  <span className="text-sm font-medium text-center">
                    {t('livesTransformed')}
                  </span>
                </div>

              </div>

            </div>
            {/* Right Form */}
            <div className="lg:w-5/12 w-full px-4 sm:px-0">
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 text-center lg:text-left">
                {t('directEnquiry')}
              </h2>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contactFormName')}
                    className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contactFormEmail')}
                    className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm"
                  />
                </div>

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t('contactFormPhone')}
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-sm"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('messagePlaceholder')}
                  rows="5"
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg resize-none text-sm"
                />

                <button
                  onClick={handleSubmit}
                  className="w-full sm:w-auto inline-flex items-center justify-center bg-white 
               text-[#0E6F73] border-2 border-[#0E6F73]
               px-8 py-3 rounded-full font-semibold
               hover:bg-[#0E6F73] hover:text-white
               transition-all duration-300 text-sm"
                >
                  {t('submitButton')}
                </button>

              </div>
            </div>
          </div>

          {/* IMAGE BELOW BOTH SECTIONS */}
          <div className="mt-16 max-w-5xl mx-auto">
            <img
              src={addict}
              alt="Rehabilitation Center"
              className="w-full h-87.5 sm:h-125 lg:h-137.5 object-cover rounded-3xl"
            />
          </div>

        </div>

        {/* ABHASA SECTION WITH PINK BACKGROUND */}

      </section>

      {/* Other sections */}
      <About />
      <Gallery />
      <Features />
      <Services />
      <Testimonials />
      <CallToAction />
      <Experts />
      <Contact />
    </>
  );
};

export default HeroBanner;
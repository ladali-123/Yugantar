import React, { useState } from 'react';
import addict from "../assets/addict.png";
import pink from "../assets/pink.jpg";

const HeroBanner = () => {
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

  return (
    <section id="home" className="relative bg-gradient-to-br from-[#F3F8FC] via-[#F6FBFC] to-[#F1FAF9] over">

      <div className="container mx-auto px-4 py-10 lg:py-16">

        {/* TOP TWO SECTIONS */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">

          {/* Left Content */}
          <div className="lg:w-1/2 mb-10 lg:mb-0 space-y-5">
            {/* Premium Badge */}
            <div className="flex justify-center md:justify-start">

              <div className="inline-flex items-center gap-2  bg-[#0E6F73]/10 border border-[#0E6F73]/20 text-[#0E6F73] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full
">

                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">

                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
                <span className="text-xs sm:text-sm font-semibold">
                  95% Success Rate • Verified Treatment
                </span>

              </div>
            </div>
            {/* Main Heading with Gradient */}
            <h1 className="
         text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6
  text-center md:text-left
">
              
              <span className="block sm:inline">Break Free from</span>{" "}
  <span className="bg-gradient-to-r from-[#0E6F73] to-[#0a5458] bg-clip-text text-transparent">
    Alcohol Addiction
  </span>
            </h1>


            {/* Tagline with emphasis */}
          <p
  className="
    text-lg sm:text-base lg:text-xl font-semibold text-gray-700 leading-snug mb-8 opacity-90
    text-center md:text-left
    px-4 md:px-0
  "
>
  <span className="block sm:inline">Professional, Compassionate & Effective</span>{" "}
  <span className="text-[#0E6F73] block sm:inline">
    Alcohol De-addiction Treatment
  </span>
</p>


            {/* Description with better spacing */}
            <p
  className="
    text-base sm:text-base text-gray-600 leading-relaxed mb-8 max-w-xl
    text-center text-justify
    md:text-left md:text-start
    px-4 md:px-0
  "
>
  Yugantar provides <span className="font-medium text-gray-800">evidence-based treatment programs </span>
  with expert medical guidance. Start your journey toward a healthier, alcohol-free life today with
  compassionate care that transforms lives.
</p>



            {/* CTA Button */}
            <div className="flex flex-wrap gap-4 items-center">
              <a href="#home" className="inline-flex items-center gap-2 bg-[#0E6F73] text-white px-7 
              py-3 rounded-full font-semibold text-base hover:bg-[#0a5458] transition-all duration-300
               shadow-lg hover:shadow-xl">
                Start Your Recovery
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

                <span className="text-sm font-medium">
                  1000+ Lives Transformed
                </span>
              </div>

            </div>

          </div>
          {/* Right Form */}
          <div className="lg:w-5/12 w-full">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6">
              Send Your Direct Enquiry
            </h2>

            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-lg"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="flex-1 px-4 py-3 bg-white border border-gray-200 rounded-lg"
                />
              </div>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg"
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg resize-none"
              />

              <button
                onClick={handleSubmit}
                className="inline-flex items-center bg-white 
             text-[#0E6F73] border-2 border-[#0E6F73]
             px-8 py-3 rounded-full font-semibold
             hover:bg-[#0E6F73] hover:text-white
             transition-all duration-300"
              >
                Submit
              </button>

            </div>
          </div>
        </div>

        {/* IMAGE BELOW BOTH SECTIONS */}
        <div className="mt-16 max-w-5xl mx-auto">
          <img
            src={addict}
            alt="Rehabilitation Center"
            className="w-full h-[350px] sm:h-[500px] lg:h-[550px] object-cover rounded-3xl"
          />
        </div>

      </div>

      {/* ABHASA SECTION WITH PINK BACKGROUND */}
      <div className="relative py-6  overflow-hidden">
        {/* Background Image */}
        <img
          src={pink}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Optional Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto ">

            {/* Main Heading */}
            <h2 className="text-3xl lg:text-3xl xl:text-4xl font-bold text-white mb-6 leading-tight text-center">
              Yugantar - Your Transformation begins here
            </h2>

            {/* First Paragraph */}
            <p className="text-base lg:text-base text-gray-100 mb-6 leading-relaxed text-justify font-semibold">
              Take full charge of your life and confidently step into a healthier, happier future. We are always here to
              support you with practical guidance, effective tools, and a compassionate community that truly understands
              your journey. Our programs help individuals overcome alcohol addiction through structured treatment, emotional
              support, evidence-based recovery strategies. With professional medical guidance
              and a focus on safe,responsible care, we
              empower you to achieve lasting recovery, regain control of your life, and move toward a stable future.


            </p>

            {/* Second Paragraph */}
            <p className="text-base lg:text-base text-gray-100 mb-6 leading-relaxed font-semibold">
              With proven methods, expert advice, and inspiring real-life success stories, we make recovery not
              just achievable, but truly empowering. Every step you take with us brings you closer to the life
              you deserve, full of energy, confidence, freedom, and inner happiness. Our supportive community
              and personalized guidance ensure you never walk this journey alone. Start today, embrace the process,
              and let us build a brighter,
              stronger, and better tomorrow together one step at a time with trust, care, and unwavering support.
            </p>

            {/* Third Paragraph */}
            <p className="text-base lg:text-lg text-white/95 leading-relaxed">


            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
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

      <div className="container mx-auto px-4 py-16 lg:py-24">

        {/* TOP TWO SECTIONS */}
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">

          {/* Left Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Break Free from <span className="text-[#0E6F73]">Alcohol Addiction</span>
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Professional, Compassionate & Effective Alcohol De-addiction Treatment
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              Yugantar provides evidence-based treatment programs with 95% success rate.
              Start your journey to a healthier, alcohol-free life today.
            </p>
            <div className="flex items-center gap-2 
                bg-[#F1FAF9] text-green-800
                px-4 py-2 rounded-full">
              <svg className="w-4 h-4 text-[#0E6F73]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold">Verified</span>
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
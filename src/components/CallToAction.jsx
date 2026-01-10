import React from 'react';
import { Phone, Calendar, Shield, Award, Clock, Users } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-slate-100 via-blue-50 to-slate-100

    relative overflow-hidden">

      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.6) 1px, transparent 0)',
            backgroundSize: '42px 42px',
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-8xl mx-auto">

          {/* Main CTA Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">

              {/* Left Content */}
              <div className="lg:w-2/3 p-8 lg:p-12">
                <div className="inline-block px-4 py-1 bg-[#F1FAF9] text-[#0E6F73] 
                rounded-full text-sm font-medium mb-4">
                  Take the First Step Today
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  Begin Your Path to Recovery
                </h2>

                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our experienced team of addiction specialists is available around the clock
                  to provide confidential support and guidance tailored to your unique situation.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                  {[
                    ['Free Consultation', 'No commitment required'],
                    ['100% Confidential', 'Privacy guaranteed'],
                    ['24/7 Availability', 'Help when you need it'],
                  ].map(([title, desc], i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-5 h-5 bg-[#0E6F73] rounded-full 
                      flex items-center justify-center mt-1">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{title}</div>
                        <div className="text-sm text-gray-500">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right CTA Buttons */}
              <div className="lg:w-1/3 bg-gradient-to-b from-[#F7FAFD] to-[#F1FAF9] 
              p-8 lg:p-12 flex flex-col justify-center border-l border-[#E3F1F1]">

                <div className="space-y-4">
                  <a
                    href="tel:+911234567890"
                    className="group block bg-gradient-to-r 
                    from-[#0F4C81] to-[#0E6F73] text-white text-center 
                    py-4 px-6 rounded-xl font-semibold 
                    hover:opacity-90 transition-all duration-300 shadow-md"
                  >
                    <div className="flex items-center justify-center mb-1">
                      <Phone className="w-5 h-5 mr-2" />
                      <span>Call Now</span>
                    </div>
                    <div className="text-xl font-bold">+91 12345 67890</div>
                    <div className="text-sm opacity-90 mt-1">Available 24/7</div>
                  </a>

                  <a
                    href="#contact"
                    className="group block bg-white text-[#0E6F73] 
                    border-2 border-[#0E6F73] text-center 
                    py-4 px-6 rounded-xl font-semibold 
                    hover:bg-[#0E6F73] hover:text-white 
                    transition-all duration-300"
                  >
                    <div className="flex items-center justify-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>Schedule Consultation</span>
                    </div>
                  </a>

                  <div className="pt-4 border-t border-[#E3F1F1]">
                    <p className="text-xs text-gray-500 text-center leading-relaxed">
                      No obligation required<br />
                      All information kept strictly confidential<br />
                      Insurance verification assistance available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          {/* Trust Indicators */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[Users, Shield, Award, Clock].map((Icon, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 
      border border-[#E3F1F1] shadow-sm 
      hover:shadow-md transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <Icon className="w-8 h-8 text-[#0E6F73] mb-3" />
                  <div className="text-slate-700 font-semibold text-sm">
                    {[
                      'Expert Medical Team',
                      'Complete Privacy',
                      'Evidence-Based Care',
                      'Round-the-Clock Support',
                    ][i]}
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default CallToAction;

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, FileText, CheckCircle, Info, Check } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    program: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '', program: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "24/7 Helpline",
      details: "+91 12345 67890",
      description: "Call anytime for immediate assistance",
      color: "bg-teal-50 border border-teal-100",
      iconBg: "bg-teal-600",
      link: "tel:+911234567890"
    },
    {
      icon: Mail,
      title: "Email",
      details: "help@yugantar.com",
      description: "Response within 2 hours",
      color: "bg-teal-50 border border-teal-100",
      iconBg: "bg-teal-600",
      link: "mailto:help@yugantar.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Pataleshwar Complex , SDO road , Hajipur - 800",
      color: "bg-teal-50 border border-teal-100",
      iconBg: "bg-teal-600"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: "Mon - Sun, 9:00 AM - 8:00 PM",
      description: "Emergency: 24/7",
      color: "bg-teal-50 border border-teal-100",
      iconBg: "bg-teal-600"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-[#F7FAFD]">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Get <span className="text-[#0E6F73]">Help Today</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Take the First Step Towards Recovery – Confidential & Professional Help Available 24/7
          </p>
        </div>

        {/* Main Columns */}
        <div className="flex flex-col lg:flex-row gap-12 items-stretch">

          {/* Left Column - Form */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-sm">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#E0F2F1] rounded-2xl mb-4">
                  <FileText className="w-8 h-8 text-[#0E6F73]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Free Confidential Consultation</h3>
                <p className="text-gray-600">Fill the form below and our expert will contact you shortly</p>
              </div>

              {isSubmitted ? (
                <div className="bg-[#E0F2F1] border-2 border-[#0E6F73] rounded-xl p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0E6F73] rounded-full mb-4">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#0E6F73] mb-2">Thank You!</h4>
                  <p className="text-gray-700 mb-4">Your consultation request has been submitted successfully.</p>
                  <p className="text-gray-600">Our team will contact you shortly.</p>
                </div>
              ) : (
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0E6F73] focus:border-[#0E6F73] outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2
                         focus:ring-[#0E6F73] focus:border-[#0E6F73] outline-none transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0E6F73] focus:border-[#0E6F73] outline-none transition-all"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Program Interested In *</label>
                    <select name="program" value={formData.program} onChange={handleChange} required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2
                       focus:ring-[#0E6F73] focus:border-[#0E6F73] outline-none transition-all bg-white"
                    >
                      <option value="">Select a program</option>
                      <option value="detox">Detoxification Program</option>
                      <option value="residential">Residential Rehabilitation</option>
                      <option value="outpatient">Outpatient Program</option>
                      <option value="aftercare">Aftercare Support</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Message (Optional)</label>
                    <textarea name="message" value={formData.message} onChange={handleChange} rows="4"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2
                       focus:ring-[#0E6F73] focus:border-[#0E6F73] outline-none transition-all resize-none"
                      placeholder="Tell us about your situation..."
                    />
                  </div>

                  <div>
                    <button onClick={handleSubmit}
                      className="w-full bg-gradient-to-r from-[#0F4C81] to-[#0E6F73] text-white py-4 
                      rounded-lg font-bold text-lg hover:from-[#0E6F73] hover:to-[#0F4C81] transition-all
                       shadow-sm hover:shadow-md"
                    >
                      Get Free Consultation
                    </button>
                    <p className="text-center text-gray-500 text-sm mt-3">
                      🔒 We respect your privacy. All information is confidential.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column - Info */}
          <div className="flex-1 space-y-6">
            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;
                return (
                  <div key={index} className={`${method.color} rounded-xl p-6 border border-transparent
                   shadow-sm hover:shadow-md transition-all`}>
                    <div className="flex items-start space-x-4">
                      <div className={`${method.iconBg} p-3 rounded-xl text-white`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 mb-1">{method.title}</h4>
                        {method.link ? (
                          <a href={method.link} className="text-[#0E6F73] font-bold block mb-1 break-all hover:underline">{method.details}</a>
                        ) : (
                          <p className="text-gray-800 font-bold mb-1">{method.details}</p>
                        )}
                        <p className="text-gray-600 text-sm">{method.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Why Contact Us */}
            <div className="bg-[#E0F2F1] rounded-xl p-6 border border-[#B2DFDB] shadow-sm">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <div className="bg-[#0E6F73] text-white p-2 rounded-lg mr-3">
                  <Info className="w-5 h-5" />
                </div>
                Why Contact Yugantar?
              </h4>
              <ul className="space-y-3">
                {[
                  "Free initial consultation and assessment",
                  "No obligation, completely confidential",
                  "Insurance and payment plan assistance",
                  "Immediate admission available",
                  "Family support and counseling"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-[#0E6F73]/10 rounded-full p-1 mr-2 mt-0.5 flex-shrink-0">
                      <Check className="w-4 h-4 text-[#0E6F73]" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

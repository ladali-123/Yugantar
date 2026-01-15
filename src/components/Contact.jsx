import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, FileText, CheckCircle, Info, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

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

  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Phone,
      title: t('helplineLabel'),
      details: "+91 12345 67890",
      description: t('helplineDesc'),
      color: "bg-teal-50 border border-teal-100",
      iconBg: "bg-teal-600",
      link: "tel:+911234567890"
    },
    {
      icon: Mail,
      title: t('emailLabel'),
      details: "help@yugantar.com",
      description: t('emailDesc'),
      color: "bg-teal-50 border border-teal-100",
      iconBg: "bg-teal-600",
      link: "mailto:help@yugantar.com"
    },
    {
      icon: MapPin,
      title: t('locationLabel'),
      details: t('locationDetails'),
      color: "bg-teal-50 border border-teal-100",
      iconBg: "bg-teal-600"
    },
    {
      icon: Clock,
      title: t('hoursLabel'),
      details: t('hoursDetails'),
      description: t('hoursDesc'),
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
            {t('contactHeading')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('firstStepDesc')}
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
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{t('consultationHeading')}</h3>
                <p className="text-gray-600">{t('consultationDesc')}</p>
              </div>

              {isSubmitted ? (
                <div className="bg-[#E0F2F1] border-2 border-[#0E6F73] rounded-xl p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#0E6F73] rounded-full mb-4">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#0E6F73] mb-2">{t('thankyouHeading')}</h4>
                  <p className="text-gray-700 mb-4">{t('thankYouMessage')}</p>
                </div>
              ) : (
                <form className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">{t('contactFormName')}</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0E6F73] focus:border-[#0E6F73] outline-none transition-all"
                      placeholder={t('contactFormName')}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">{t('contactFormPhone')}</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2
                         focus:ring-[#0E6F73] focus:border-[#0E6F73] outline-none transition-all"
                        placeholder={t('contactFormPhone')}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">{t('contactFormEmail')}</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0E6F73] focus:border-[#0E6F73] outline-none transition-all"
                        placeholder={t('contactFormEmail')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">{t('contactFormProgram')}</label>
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
                      className="w-full bg-linear-to-r from-[#0F4C81] to-[#0E6F73] text-white py-4 rounded-lg font-bold text-lg hover:from-[#0E6F73] hover:to-[#0F4C81] transition-all shadow-sm hover:shadow-md"
                    >
                      {t('submitButton')}
                    </button>
                    <p className="text-center text-gray-500 text-sm mt-3">
                      🔒 {t('confidential')}
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
                {t('whyContactYugantar')}
              </h4>
              <ul className="space-y-3">
                {[
                  t('consultation1'),
                  t('consultation2'),
                  t('consultation3'),
                  t('consultation4'),
                  t('consultation5')
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

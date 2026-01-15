import React from "react";

import { useLanguage } from '../context/LanguageContext';

const Features = () => {
  const { t } = useLanguage();
  const features = [
    {
      title: t('feature1'),
      description: t('feature1Desc'),
    },
    {
      title: t('feature2'),
      description: t('feature2Desc'),
    },
    {
      title: t('feature3'),
      description: t('feature3Desc'),
    },
    {
      title: t('feature4'),
      description: t('feature4Desc'),
    },
    {
      title: t('feature5'),
      description: t('feature5Desc'),
    },
    {
      title: t('feature6'),
      description: t('feature6Desc'),
    },
  ];

  return (
   <section id="features" className="py-20 bg-linear-to-b from-[#F7FAFD] to-[#F1FAF9]">
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        {t('featuresHeading')}
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto">
        {t('featuresSub') || 'Compassionate, professional and nature-driven rehabilitation care'}
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((item, index) => (
        <div
          key={index}
          className="bg-white border border-[#E3F1F1] rounded-2xl p-8
          shadow-sm hover:shadow-xl hover:-translate-y-1
          transition-all duration-300"
        >
          {/* Accent Line */}
          <div className="w-12 h-1 
            bg-linear-to-r from-[#0F4C81] to-[#0E6F73]
            rounded-full mb-4">
          </div>

          <h3 className="text-xl font-semibold text-[#0F4C81] mb-3">
            {item.title}
          </h3>

          <p className="text-gray-600 leading-relaxed">
            {item.description}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>

  );
};

export default Features;

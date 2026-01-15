import { ArrowUpRight } from "lucide-react";
import { useLanguage } from '../context/LanguageContext';

const Services = () => {
  const { t } = useLanguage();
  const services = [
    t('service1'),
    t('service2'),
    t('service3'),
    t('service4'),
    t('service5'),
    t('service6'),
    t('service7'),
    t('service8'),
  ];
  return (
    <section id="services" className="py-16 bg-[#FBF6EC]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          {t('servicesHeading')}
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex items-center justify-between
              border-b border-gray-300 pb-4"
            >
              <span className="text-base md:text-lg font-medium text-gray-800">
                {service}
              </span>

              <ArrowUpRight
                className="w-4 h-4 text-teal-700
                transition-transform duration-200
                group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-12 text-center">
          <button
            className="inline-flex items-center gap-2
            bg-teal-700 text-white px-6 py-2.5
            rounded-full text-sm font-medium
            hover:bg-teal-800 transition"
          >
            {t('viewMore')}
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
export default Services;
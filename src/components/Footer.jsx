import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    [t('footerQuickLinks')]: [
      { name: t('footerHome'), href: "#home" },
      { name: t('footerAboutUs'), href: "#about" },
      { name: t('footerPrograms'), href: "#services" },
      { name: t('footerWhyChoose'), href: "#features" },
      { name: t('footerSuccess'), href: "#testimonials" },
      { name: t('footerContactUs'), href: "#contact" }
    ],
    [t('footerOurPrograms')]: [
      { name: t('footerDetox'), href: "#services" },
      { name: t('footerResidential'), href: "#services" },
      { name: t('footerOutpatient'), href: "#services" },
      { name: t('footerAftercare'), href: "#services" },
      { name: t('footerFamilyCounseling'), href: "#services" },
      { name: t('footerRelapsePrevention'), href: "#services" }
    ],
    [t('footerResources')]: [
      { name: t('footerBlog'), href: "#" },
      { name: t('footerFAQs'), href: "#" },
      { name: t('footerTreatment'), href: "#services" },
      { name: t('footerSuccessRates'), href: "#testimonials" },
      { name: t('footerInsurance'), href: "#" },
      { name: t('footerCareers'), href: "#" }
    ]
  };

  return (
    <footer className="bg-gray-900 text-gray-100 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Brand + About */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-[#0E6F73] mb-4">YUGANTAR</h2>
            <p className="text-gray-400 text-sm mb-6">
              {t('footerBrandAbout')}
            </p>

            <div className="flex flex-col space-y-2">
              <p className="text-gray-400 text-sm">
                <span className="font-semibold text-gray-200">{t('footerHeadOffice')}</span> Pataleshwar Complex , SDO road , Hajipur - 800

              </p>
              <p className="text-gray-400 text-sm">
                <span className="font-semibold text-gray-200">{t('footerHelpline')}</span> 
                <a href="tel:+911234567890" className="text-[#0E6F73] ml-1 hover:underline">+91 12345 67890</a>
              </p>
              <p className="text-gray-400 text-sm">
                <span className="font-semibold text-gray-200">{t('footerEmail')}</span> 
                <a href="mailto:help@yugantar.com" className="text-[#0E6F73] ml-1 hover:underline">help@yugantar.com</a>
              </p>
            </div>

            {/* Emergency Button */}
            <a 
              href="tel:+9118001234567" 
              className="mt-6 inline-block bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
            >
              {t('footerEmergency')} +91 1800 123 4567
            </a>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], idx) => (
            <div key={idx}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-gray-400 hover:text-[#0E6F73] transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p className="mb-4 md:mb-0">&copy; {currentYear} {t('footerCopyright')}</p>
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <a href="#" className="hover:text-[#0E6F73] transition-colors">{t('footerPrivacy')}</a>
            <a href="#" className="hover:text-[#0E6F73] transition-colors">{t('footerTerms')}</a>
            <a href="#" className="hover:text-[#0E6F73] transition-colors">{t('footerDisclaimer')}</a>
            <a href="#" className="hover:text-[#0E6F73] transition-colors">{t('footerSitemap')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

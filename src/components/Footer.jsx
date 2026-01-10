import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Quick Links": [
      { name: "Home", href: "#home" },
      { name: "About Us", href: "#about" },
      { name: "Our Programs", href: "#services" },
      { name: "Why Choose Us", href: "#features" },
      { name: "Success Stories", href: "#testimonials" },
      { name: "Contact Us", href: "#contact" }
    ],
    "Our Programs": [
      { name: "Detoxification", href: "#services" },
      { name: "Residential Rehab", href: "#services" },
      { name: "Outpatient Program", href: "#services" },
      { name: "Aftercare Support", href: "#services" },
      { name: "Family Counseling", href: "#services" },
      { name: "Relapse Prevention", href: "#services" }
    ],
    "Resources": [
      { name: "Blog & Articles", href: "#" },
      { name: "FAQs", href: "#" },
      { name: "Treatment Process", href: "#services" },
      { name: "Success Rates", href: "#testimonials" },
      { name: "Insurance Info", href: "#" },
      { name: "Career Opportunities", href: "#" }
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
              Helping individuals overcome alcohol addiction through evidence-based programs, 
              compassionate care, and professional support since 2008.
            </p>

            <div className="flex flex-col space-y-2">
              <p className="text-gray-400 text-sm">
                <span className="font-semibold text-gray-200">Head Office:</span> Mumbai, Maharashtra
              </p>
              <p className="text-gray-400 text-sm">
                <span className="font-semibold text-gray-200">Helpline:</span> 
                <a href="tel:+911234567890" className="text-[#0E6F73] ml-1 hover:underline">+91 12345 67890</a>
              </p>
              <p className="text-gray-400 text-sm">
                <span className="font-semibold text-gray-200">Email:</span> 
                <a href="mailto:help@yugantar.com" className="text-[#0E6F73] ml-1 hover:underline">help@yugantar.com</a>
              </p>
            </div>

            {/* Emergency Button */}
            <a 
              href="tel:+9118001234567" 
              className="mt-6 inline-block bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors text-center"
            >
              Emergency: +91 1800 123 4567
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
          <p className="mb-4 md:mb-0">&copy; {currentYear} Yugantar Alcohol De-addiction Center. All rights reserved.</p>
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            <a href="#" className="hover:text-[#0E6F73] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#0E6F73] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#0E6F73] transition-colors">Disclaimer</a>
            <a href="#" className="hover:text-[#0E6F73] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

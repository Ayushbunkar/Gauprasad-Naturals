import { Phone, Mail, MapPin, Instagram, Facebook, Flame } from 'lucide-react';
import gauprasadLogo from '../assets/gauprasad.jpeg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsApp = () => {
    window.open('https://wa.me/917987889449', '_blank');
  };

  const handleInstagram = () => {
    window.open('https://www.instagram.com/gauprasadnaturals', '_blank');
  };

  const handleFacebook = () => {
    window.open('https://www.facebook.com/people/Gauprasad-Naturals/pfbid02WknEhzYsr2NzyhPdkZbdUfdVBxgJa49Cxmt4KfKnC2adZeZ9ouwYFrC1fVonPUhWl/', '_blank');
  };

  return (
    <footer className="bg-gradient-to-b from-[#FFF7EF] to-[#FDEADA] pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <img src={gauprasadLogo} alt="GauPrasad Naturals" className="w-12 h-12 object-contain" />
              <div className="flex flex-col leading-tight">
                <span className="font-[var(--font-heading)] text-2xl font-bold text-[#5C4033]">
                  GauPrasad
                </span>
                <span className="text-xs text-[#8B5A3C] tracking-wider">NATURALS</span>
              </div>
            </div>
            <p className="text-[#A3542D] leading-relaxed mb-6">
              Bringing purity, tradition, and sustainability to every prayer. 
              Handcrafted with devotion in rural India.
            </p>
            <p className="text-[#E07A1F] font-semibold">Made in India 🇮🇳</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-[var(--font-heading)] text-xl font-bold text-[#3A2F2F] mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['home', 'why-us', 'how-made', 'uses', 'reviews', 'buy-now'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-[#A3542D] hover:text-[#E07A1F] transition-colors duration-300 capitalize"
                  >
                    {section.replace('-', ' ')}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-[var(--font-heading)] text-xl font-bold text-[#3A2F2F] mb-6">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#E07A1F] flex-shrink-0 mt-1" />
                <div>
                  <a href="tel:+917987889449" className="text-[#A3542D] hover:text-[#E07A1F] transition-colors">
                    +91 79878 89449
                  </a>
                  <p className="text-sm text-[#A3542D]">Mon-Sat, 9 AM - 7 PM</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#E07A1F] flex-shrink-0 mt-1" />
                <a href="mailto:gauprasadnaturals@gmail.com" className="text-[#A3542D] hover:text-[#E07A1F] transition-colors">
                  gauprasadnaturals@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#E07A1F] flex-shrink-0 mt-1" />
                <span className="text-[#A3542D]">
                  
                  Village Seoni, India
                </span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <button
                onClick={handleWhatsApp}
                className="bg-[#25D366] p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={handleInstagram}
                className="bg-gradient-to-br from-[#E07A1F] to-[#7A1D1D] p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-white" />
              </button>
              <button
                onClick={handleFacebook}
                className="bg-[#1877F2] p-3 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Policies & Info */}
        <div className="border-t border-[#A3542D]/20 pt-8 mb-8">
          <div className="bg-white rounded-2xl p-6 mb-8">
            <h4 className="font-semibold text-[#3A2F2F] mb-3">Important Notes:</h4>
            <ul className="text-sm text-[#A3542D] space-y-2">
           
              <li>• Easy returns within 7 days if unopened</li>
              <li>• Store in a cool, dry place away from moisture</li>
              <li>• Each cup burns for approximately 30-40 minutes</li>
              <li>• Bulk orders available for temples and events</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-8 border-t border-[#A3542D]/20">
          <p className="text-[#A3542D] mb-2">
            © {currentYear} GauPrasad. All rights reserved.
          </p>
          <p className="text-sm text-[#A3542D]">
            Crafted with 🙏 devotion for spiritual India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

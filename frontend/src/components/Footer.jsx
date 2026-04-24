import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Manthan', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Elite Leadership Qualities', path: '/elqs' },
    { name: 'Testimonials', path: '/testimonials' }
  ];

  const programs = [
    { name: 'Manthan Junior', path: '/programs#junior' },
    { name: 'Manthan Pro', path: '/programs#pro' },
    { name: 'Manthan Elite', path: '/programs#elite' }
  ];

  const institutions = [
    { name: 'For Schools', path: '/institutions#schools' },
    { name: 'For Corporates', path: '/institutions#corporates' },
    { name: 'Partnership Opportunities', path: '/institutions' }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#0A1F44] to-[#060F24] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_visual-attract/artifacts/njoh62qk_MANTHAN%20Logo%20circle.png" 
                alt="Manthan Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leaders are not born. They are conditioned. Transform mindset in days, not years through our structured brain conditioning programs.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/elite.leadership.guide" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Instagram size={18} />
              </a>
              <a href="https://wa.me/917009202340" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/5 hover:bg-[#25D366] rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Phone size={18} />
              </a>
              <a href="mailto:contactmanthanofficial@gmail.com" className="w-10 h-10 bg-white/5 hover:bg-[#6B8E23] rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Mail size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 hover:bg-[#6B8E23] rounded-lg flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-[#6B8E23] text-sm transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-[#6B8E23] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Programs</h4>
            <ul className="space-y-3">
              {programs.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-[#6B8E23] text-sm transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-[#6B8E23] group-hover:w-4 transition-all duration-300 mr-0 group-hover:mr-2"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
              <li className="pt-4 mt-4 border-t border-white/10">
                <Link to="/day-at-manthan" className="text-gray-400 hover:text-[#6B8E23] text-sm transition-colors duration-300">
                  A Day at Manthan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <Phone size={18} className="text-[#6B8E23] mt-0.5 flex-shrink-0" />
                <div>
                  <a href="https://wa.me/917009202340" className="hover:text-white transition-colors">
                    +91 70092 02340
                  </a>
                  <p className="text-xs text-gray-500 mt-1">WhatsApp Available</p>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <Mail size={18} className="text-[#6B8E23] mt-0.5 flex-shrink-0" />
                <a href="mailto:contactmanthanofficial@gmail.com" className="hover:text-white transition-colors">
                  contactmanthanofficial@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-[#6B8E23] mt-0.5 flex-shrink-0" />
                <span>Elite Leadership Guide<br />Headquarters,Chandigarh, India</span>
              </li>
            </ul>
            <Link to="/contact">
              <button className="mt-6 w-full bg-[#6B8E23] hover:bg-[#556B2F] text-white font-semibold py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                Apply Now
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 Manthan - Elite Leadership Guide. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-500 hover:text-[#6B8E23] transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 hover:text-[#6B8E23] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone, FaChevronUp } from 'react-icons/fa';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
   <footer className="relative mt-auto text-gray-300 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-filter backdrop-blur-lg bg-opacity-80">
  <div className="container px-4 py-16 mx-auto sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
      {/* Logo and Social Media */}
      <div className="space-y-6">
        <img src="img/pooja 2.png" alt="Organic by Pooja" className="h-16 transition-transform duration-300 hover:scale-105" />
        <p className="text-sm text-gray-300">Your trusted partner for organic skincare solutions.</p>
        <div className="flex space-x-4">
          {[
            { Icon: FaFacebookF, href: "https://facebook.com" },
            { Icon: FaTwitter, href: "https://twitter.com" },
            { Icon: FaLinkedinIn, href: "https://linkedin.com" },
            { Icon: FaInstagram, href: "https://instagram.com" },
          ].map(({ Icon, href }, index) => (
            <a 
              key={index} 
              href={href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2 text-gray-400 transition-all duration-300 bg-gray-800 bg-opacity-50 rounded-full hover:text-white hover:bg-opacity-70 hover:scale-110"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-2 lg:col-span-3">
        {/* Products */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Products</h3>
          <ul className="space-y-2">
            {['Face Wash', 'Face Cleansers', 'Moisturizers', 'Serum'].map((item, index) => (
              <li key={index}>
                <a href={`/products/${item.toLowerCase().replace(' ', '-')}`} className="text-sm transition-colors duration-300 hover:text-white hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Services</h3>
          <ul className="space-y-2">
            {['Laser Hair Removal', 'Acne', 'Anti-Ageing', 'Facials'].map((item, index) => (
              <li key={index}>
                <a href={`/services/${item.toLowerCase().replace(' ', '-')}`} className="text-sm transition-colors duration-300 hover:text-white hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Company</h3>
          <ul className="space-y-2">
            <li>
              <NavLink 
                to="/About" 
                className={({ isActive }) => 
                  `text-sm transition-colors duration-300 ${isActive ? 'text-white font-semibold' : 'hover:text-white hover:underline'}`
                }
              >
                About Us
              </NavLink>
            </li>
            {['Contact Us', 'Terms & Conditions', 'Privacy Policy'].map((item, index) => (
              <li key={index}>
                <a href={`/company/${item.toLowerCase().replace(' & ', '-').replace(' ', '-')}`} className="text-sm transition-colors duration-300 hover:text-white hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Contact Information */}
    <div className="flex flex-wrap justify-between gap-4 pt-12 mt-12 border-t border-gray-700 border-opacity-50">
  <div className="flex items-center space-x-2">
    <FaMapMarkerAlt className="text-gray-400" />
    <span className="text-sm">123 Skincare Street, Beauty City, 12345</span>
  </div>
  <div className="flex items-center space-x-2">
    <FaPhone className="text-gray-400" />
    <a 
      href="tel:+ +918171924503" 
      className="text-sm transition-colors duration-300 hover:text-white"
    >
       +91 8171924503
    </a>
  </div>
  <div className="flex items-center space-x-2">
    <FaEnvelope className="text-gray-400" />
    <a 
      href="mailto:organicbypooja@gmail.com" 
      className="text-sm transition-colors duration-300 hover:text-white"
    >
      organicbypooja@gmail.com
    </a>
  </div>
</div>

    {/* Copyright */}
    <div className="pt-8 mt-12 text-center border-t border-gray-700 border-opacity-50">
      <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Organic by Pooja Skin Clinic. All rights reserved.</p>
      <div className="flex justify-center mt-4 space-x-4">
        <a href="/privacy-policy" className="text-sm text-gray-400 transition-colors duration-300 hover:text-white">Privacy Policy</a>
        <a href="/terms-of-service" className="text-sm text-gray-400 transition-colors duration-300 hover:text-white">Terms of Service</a>
      </div>
    </div>
  </div>
</footer>
      {/* Sticky WhatsApp Button */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center w-full px-4 py-2">
      <a
  href="https://wa.me/918171924503/?text=Hello%0D%0AGot%20this%20number%20from%20Organic%20By%20pooja.%0D%0A"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center w-full px-4 py-2 space-x-2 text-white transition-all duration-300 bg-green-500 shadow-lg hover:bg-green-600"
>
  <FaWhatsapp className="w-5 h-5 md:w-6 md:h-6" />
  <span className="text-sm font-medium md:text-base">Chat with Us on WhatsApp</span>
</a>
</div>
      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed z-50 p-2 text-white transition-colors duration-300 bg-gray-800 rounded-full shadow-lg bottom-16 right-4 hover:bg-gray-700"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </>
  );
};

export default Footer;
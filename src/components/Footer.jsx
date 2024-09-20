import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

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
      <footer className="relative text-gray-300 bg-gradient-to-b from-gray-900 to-black">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
            {/* Products */}
            <div className="mb-8">
              <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">Products</h3>
              <ul className="space-y-2">
                <li><a href="/products/face-wash" className="text-sm transition-colors duration-300 hover:text-white hover:underline">Face Wash</a></li>
                <li><a href="/products/face-cleansers" className="text-sm transition-colors duration-300 hover:text-white hover:underline">Face Cleansers</a></li>
                <li><a href="/products/moisturizers-creams" className="text-sm transition-colors duration-300 hover:text-white hover:underline">Moisturizers</a></li>
                <li><a href="/products/serum" className="text-sm transition-colors duration-300 hover:text-white hover:underline">Serum</a></li>
              </ul>
            </div>

            {/* Services */}
            <div className="mb-8">
              <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">Services</h3>
              <ul className="space-y-2">
                <li><a href="/services/laser-hair-removal" className="text-sm transition-colors duration-300 hover:text-white hover:underline">Laser Hair Removal</a></li>
                <li><a href="/services/acne" className="text-sm transition-colors duration-300 hover:text-white hover:underline">Acne</a></li>
                <li><a href="/services/anti-ageing" className="text-sm transition-colors duration-300 hover:text-white hover:underline">Anti-Ageing</a></li>
                <li><a href="/services/facials" className="text-sm transition-colors duration-300 hover:text-white hover:underline">Facials</a></li>
              </ul>
            </div>

            {/* Skin Type */}
            <div className="mb-8">
              <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">Skin Type</h3>
              <ul className="space-y-2">
                <li><a href="/skin-type/oily" className="text-sm transition-colors duration-300 hover:text-white hover:underline">Oily</a></li>
                <li><a href="/skin-type/sensitive" className="text-sm transition-colors duration-300 hover:text-white hover:underline">Sensitive</a></li>
                <li><a href="/skin-type/dry" className="text-sm transition-colors duration-300 hover:text-white hover:underline">Dry</a></li>
                <li><a href="/skin-type/combination" className="text-sm transition-colors duration-300 hover:text-white hover:underline">Combination</a></li>
              </ul>
            </div>

            {/* Skin Concern */}
            <div className="mb-8">
              <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">Skin Concern</h3>
              <ul className="space-y-2">
                <li><a href="/skin-concern/acne-prone" className="text-sm transition-colors duration-300 hover:text-white hover:underline">Acne Prone</a></li>
                <li><a href="/skin-concern/anti-ageing" className="text-sm transition-colors duration-300 hover:text-white hover:underline">Anti Ageing</a></li>
                <li><a href="/skin-concern/pigmentation" className="text-sm transition-colors duration-300 hover:text-white hover:underline">Pigmentation</a></li>
                <li><a href="/skin-concern/dullness" className="text-sm transition-colors duration-300 hover:text-white hover:underline">Dullness</a></li>
              </ul>
            </div>

            {/* Hair Concern */}
            <div className="mb-8">
              <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">Hair Concern</h3>
              <ul className="space-y-2">
                <li><a href="/hair-concern/hair-fall" className="text-sm transition-colors duration-300 hover:text-white hover:underline">Hair Fall</a></li>
                <li><a href="/hair-concern/dandruff" className="text-sm transition-colors duration-300 hover:text-white hover:underline">Dandruff</a></li>
              </ul>
            </div>

            {/* Company */}
            <div className="mb-8">
              <h3 className="mb-4 text-sm font-semibold tracking-wider text-white uppercase">Company</h3>
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
                <li><a href="/company/contact-us" className="text-sm transition-colors duration-300 hover:text-white hover:underline">Contact Us</a></li>
                <li><a href="/company/terms-conditions" className="text-sm transition-colors duration-300 hover:text-white hover:underline">Terms & Conditions</a></li>
                <li><a href="/company/privacy-policy" className="text-sm transition-colors duration-300 hover:text-white hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between pt-8 mt-8 border-t border-gray-800 md:flex-row">
            <div className="flex mb-4 space-x-6 md:mb-0">
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
                  className="text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-400">&copy; 2023 Organic by Pooja Skin Clinic. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky WhatsApp Button */}
      <a
  href="https://wa.me/918171924503/?text=Hello%0D%0AGot%20this%20number%20from%20Organic%20By%20pooja.%0D%0A"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed bottom-0 left-0 z-50 flex items-center justify-center w-full px-4 py-2 space-x-2 text-white transition-colors duration-300 bg-green-500 shadow-lg hover:bg-green-600"
>
  <FaWhatsapp className="w-6 h-6" />
  <span className="font-medium">Message Us on WhatsApp</span>
</a>


      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed z-50 p-2 text-white transition-colors duration-300 bg-gray-800 rounded-full shadow-lg bottom-4 right-4 hover:bg-gray-700"
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
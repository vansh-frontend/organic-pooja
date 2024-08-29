import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IconHome, IconBook, IconApps, IconMail, IconChevronDown, IconMenu, IconX } from '@tabler/icons-react';

const Navbar = ({ position }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Desktop Services Dropdown state
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // Mobile Services Dropdown state

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const toggleServices = () => {
    setIsServicesOpen(prev => !prev);
  };

  const desktopNavItems = position === 'left' ? (
    <>
      <ul className="hidden space-x-8 lg:flex">
        <li>
          <NavLink
            to="/products"
            className="relative p-3 text-lg font-medium text-black transition-all duration-500 group hover:opacity-75"
          >
            Products
            <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transform origin-left transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
          </NavLink>
        </li>
        <li
          onMouseEnter={() => setIsServicesOpen(true)}
          onMouseLeave={() => setIsServicesOpen(false)}
          className="relative"
        >
          <NavLink
            to="/services"
            className="relative p-3 text-lg font-medium text-black transition-all duration-500 group hover:opacity-75"
          >
            Services
            <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transform origin-left transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
          </NavLink>
          {/* Desktop Services Dropdown */}
          {isServicesOpen && (
            <div className="absolute left-0 grid grid-cols-2 gap-4 p-4 mt-2 bg-white shadow-lg w-80 top-full">
              <div>
                <ul className="space-y-2">
                  <li className="font-semibold">Skin</li>
                  <li><NavLink to="/laser-hair-treatment" className="block text-gray-700 hover:text-black">Laser Hair Treatment</NavLink></li>
                  <li><NavLink to="/thermage-treatment" className="block text-gray-700 hover:text-black">Thermage Treatment</NavLink></li>
                  <li><NavLink to="/chemical-peel-treatment" className="block text-gray-700 hover:text-black">Chemical Peel Treatment</NavLink></li>
                  <li><NavLink to="/q-switch-laser-treatment" className="block text-gray-700 hover:text-black">Q-Switch Laser Treatment</NavLink></li>
                  <li><NavLink to="/skin-brightening-lightening" className="block text-gray-700 hover:text-black">Skin Brightening and Lightening Treatment</NavLink></li>
                  <li><NavLink to="/ageing-skin" className="block text-gray-700 hover:text-black">Ageing Skin</NavLink></li>
                  <li><NavLink to="/acne-scars" className="block text-gray-700 hover:text-black">Acne Scars</NavLink></li>
                  <li><NavLink to="/dull-skin" className="block text-gray-700 hover:text-black">Dull Skin</NavLink></li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2">
                  <li className="font-semibold">Hair</li>
                  <li><NavLink to="/hair-loss-concern" className="block text-gray-700 hover:text-black">Hair Loss Concern</NavLink></li>
                  <li><NavLink to="/prp-gf-treatment" className="block text-gray-700 hover:text-black">PRP GF Treatment</NavLink></li>
                  <li><NavLink to="/hair-loss-men" className="block text-gray-700 hover:text-black">Hair Loss In Men</NavLink></li>
                  <li><NavLink to="/hair-loss-women" className="block text-gray-700 hover:text-black">Hair Loss and Thinning for Women</NavLink></li>
                </ul>
              </div>
            </div>
          )}
        </li>
      </ul>
    </>
  ) : (
    <>
      <ul className="hidden space-x-8 lg:flex">
        <li>
          <NavLink
            to="/contact"
            className="relative p-3 text-lg font-medium text-black transition-all duration-500 group hover:opacity-75"
          >
            Contact
            <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transform origin-left transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/book"
            className="relative p-3 text-lg font-medium text-white transition-all duration-500 bg-black hover:opacity-75"
          >
            Book Appointment
            <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transform origin-left transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
          </NavLink>
        </li>
      </ul>
    </>
  );

  const mobileNavItems = (
    <ul className="p-8 mt-10 space-y-8">
        <li>
        <NavLink
          to="/book"
          className="flex items-center p-3 text-lg font-medium text-white transition-all duration-500 bg-black hover:opacity-75"
          onClick={toggleMenu}
        >
          <IconBook size={20} />
          <span className="ml-2">Book Appointment</span>
        </NavLink>
      </li>
      
      <li
        className="relative"
        onClick={() => setIsMobileServicesOpen(prev => !prev)}
      >
        <button className="flex items-center p-3 text-lg font-medium text-black transition-all duration-500 hover:opacity-75">
          <IconApps size={20} />
          <span className="ml-2">Services</span>
          {isMobileServicesOpen ? <IconX size={20} className="ml-2" /> : <IconChevronDown size={20} className="ml-2" />}
        </button>
        {isMobileServicesOpen && (
          <div className="absolute left-0 w-full p-4 mt-2 space-y-4 overflow-y-auto bg-white shadow-lg max-h-80">
            <div>
              <h3 className="font-semibold">Skin</h3>
              <ul className="space-y-2">
                <li><NavLink to="/laser-hair-treatment" className="block text-gray-700 hover:text-black">Laser Hair Treatment</NavLink></li>
                <li><NavLink to="/thermage-treatment" className="block text-gray-700 hover:text-black">Thermage Treatment</NavLink></li>
                <li><NavLink to="/chemical-peel-treatment" className="block text-gray-700 hover:text-black">Chemical Peel Treatment</NavLink></li>
                <li><NavLink to="/q-switch-laser-treatment" className="block text-gray-700 hover:text-black">Q-Switch Laser Treatment</NavLink></li>
                <li><NavLink to="/skin-brightening-lightening" className="block text-gray-700 hover:text-black">Skin Brightening and Lightening Treatment</NavLink></li>
                <li><NavLink to="/ageing-skin" className="block text-gray-700 hover:text-black">Ageing Skin</NavLink></li>
                <li><NavLink to="/acne-scars" className="block text-gray-700 hover:text-black">Acne Scars</NavLink></li>
                <li><NavLink to="/dull-skin" className="block text-gray-700 hover:text-black">Dull Skin</NavLink></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Hair</h3>
              <ul className="space-y-2">
                <li><NavLink to="/hair-loss-concern" className="block text-gray-700 hover:text-black">Hair Loss Concern</NavLink></li>
                <li><NavLink to="/prp-gf-treatment" className="block text-gray-700 hover:text-black">PRP GF Treatment</NavLink></li>
                <li><NavLink to="/hair-loss-men" className="block text-gray-700 hover:text-black">Hair Loss In Men</NavLink></li>
                <li><NavLink to="/hair-loss-women" className="block text-gray-700 hover:text-black">Hair Loss and Thinning for Women</NavLink></li>
              </ul>
            </div>
          </div>
        )}
      </li>
    
      <li>
        <NavLink
          to="/contact"
          className="flex items-center p-3 text-lg font-medium text-black transition-all duration-500 hover:opacity-75"
          onClick={toggleMenu}
        >
          <IconMail size={20} />
          <span className="ml-2">Contact</span>
        </NavLink>
      </li>
      <li>
        
        <NavLink
          to="/"
          className="flex items-center p-3 text-lg font-medium text-black transition-all duration-500 hover:opacity-75"
          onClick={toggleMenu}
        >
          <IconHome size={20} />
          <span className="ml-2">Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/products"
          className="flex items-center p-3 text-lg font-medium text-black transition-all duration-500 hover:opacity-75"
          onClick={toggleMenu}
        >
          <IconApps size={20} />
          <span className="ml-2">Products</span>
        </NavLink>
      </li>
    
    </ul>
  );

  return (
    <nav className="relative">
      <div className="flex items-center justify-between p-4 bg-white shadow-lg">
        <div className="flex items-center space-x-4">
          {/* Desktop Navigation */}
          {desktopNavItems}
        </div>
        {/* Hamburger Icon for Mobile Navigation */}
        <button onClick={toggleMenu} className="block lg:hidden">
          {isOpen ? <IconX size={24} /> : <IconMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <button onClick={toggleMenu} className="absolute p-4 text-gray-700 right-4 top-4">
            <IconX size={24} />
          </button>
          {mobileNavItems}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

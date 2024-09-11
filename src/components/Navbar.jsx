import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IconHome, IconBook, IconApps, IconMail, IconChevronDown, IconMenu4, IconX, IconShoppingCart } from '@tabler/icons-react';

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
            to="/"
            className="relative p-3 text-lg font-medium text-black transition-all duration-500 group hover:opacity-75"
          >
            Home
            <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transform origin-left transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
          </NavLink>
        </li>
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
            <div className="absolute left-0 p-4 mt-2 bg-white border border-gray-200 shadow-lg w-96">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Skin</h3>
                  <ul className="space-y-2">
                  <li><NavLink to="/laser-hair-treatment" className="block text-sm text-gray-700 hover:text-black">Laser Hair Treatment</NavLink></li>

<li><NavLink to="/laser-hair-treatment" className="block text-sm text-gray-700 hover:text-black">Thermage Treatment</NavLink></li>

<li><NavLink to="/laser-hair-treatment" className="block text-sm text-gray-700 hover:text-black">HIFU Treatment</NavLink></li>

<li><NavLink to="/laser-hair-treatment" className="block text-sm text-gray-700 hover:text-black">Dermal Fillers Treatment</NavLink></li>

<li><NavLink to="/laser-hair-treatment" className="block text-sm text-gray-700 hover:text-black">Chemical Peel Treatment</NavLink></li>

<li><NavLink to="/laser-hair-treatment" className="block text-sm text-gray-700 hover:text-black">Q-Switch Laser Treatment</NavLink></li>

<li><NavLink to="/laser-hair-treatment" className="block text-sm text-gray-700 hover:text-black">Skin Brightening and Lightening Treatment</NavLink></li>

<li><NavLink to="/laser-hair-treatment" className="block text-sm text-gray-700 hover:text-black">Ageing Skin</NavLink></li>


<li><NavLink to="/laser-hair-treatment" className="block text-sm text-gray-700 hover:text-black">Acne Scars</NavLink></li>

<li><NavLink to="/laser-hair-treatment" className="block text-sm text-gray-700 hover:text-black">Dull Skin</NavLink></li>


<li><NavLink to="/laser-hair-treatment" className="block text-sm text-gray-700 hover:text-black">IV Drips For Skin</NavLink></li>




                    {/* ... other items */}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Hair</h3>
                  <ul className="space-y-2">  <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">PRP GF Treatment</NavLink></li>
                    <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">Hair Thread Treatment</NavLink></li>
                    <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">Biocell Therapy</NavLink></li>
                    <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">Hair Loss In women</NavLink></li>
                    <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">IV Drips For Hair</NavLink></li>
                    <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">Hair Loss Concern</NavLink></li>
                    <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">Hair Loss Concern</NavLink></li>
                    {/* ... other items */}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Make Up</h3>
                  <ul className="space-y-2">
                  <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">Hair Loss Concern</NavLink></li>
                    <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">PRP GF Treatment</NavLink></li>
                    <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">Hair Thread Treatment</NavLink></li>
                    <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">Biocell Therapy</NavLink></li>
                    <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">Hair Loss In women</NavLink></li>
                    <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">IV Drips For Hair</NavLink></li>
                    <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">Hair Loss Concern</NavLink></li>
                  

                    {/* ... other items */}
                  </ul>
                </div>
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
              <li><NavLink to="/laser-hair-treatment" className="block text-sm text-gray-700 hover:text-black">Thermage Treatment</NavLink></li>

<li><NavLink to="/laser-hair-treatment" className="block text-sm text-gray-700 hover:text-black">HIFU Treatment</NavLink></li>

<li><NavLink to="/laser-hair-treatment" className="block text-sm text-gray-700 hover:text-black">Dermal Fillers Treatment</NavLink></li>

<li><NavLink to="/laser-hair-treatment" className="block text-sm text-gray-700 hover:text-black">Chemical Peel Treatment</NavLink></li>

<li><NavLink to="/laser-hair-treatment" className="block text-sm text-gray-700 hover:text-black">Q-Switch Laser Treatment</NavLink></li>

<li><NavLink to="/laser-hair-treatment" className="block text-sm text-gray-700 hover:text-black">Skin Brightening and Lightening Treatment</NavLink></li>

<li><NavLink to="/laser-hair-treatment" className="block text-sm text-gray-700 hover:text-black">Ageing Skin</NavLink></li>


<li><NavLink to="/laser-hair-treatment" className="block text-sm text-gray-700 hover:text-black">Acne Scars</NavLink></li>

<li><NavLink to="/laser-hair-treatment" className="block text-sm text-gray-700 hover:text-black">Dull Skin</NavLink></li>


<li><NavLink to="/laser-hair-treatment" className="block text-sm text-gray-700 hover:text-black">IV Drips For Skin</NavLink></li>


                {/* ... other items */}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Hair</h3>
              <ul className="space-y-2">
              <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">Hair Loss Concern</NavLink></li>
                    <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">PRP GF Treatment</NavLink></li>
                    <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">Hair Thread Treatment</NavLink></li>
                    <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">Biocell Therapy</NavLink></li>
                    <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">Hair Loss In women</NavLink></li>
                    <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">IV Drips For Hair</NavLink></li>
                    <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">Hair Loss Concern</NavLink></li>
                  
                    

                {/* ... other items */}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Make Up</h3>
              <ul className="space-y-2">
              <li><NavLink to="/make-up" className="block text-sm text-gray-700 hover:text-black">Make Up</NavLink></li>
                    <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">Hair Loss Concern</NavLink></li>
                    <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">PRP GF Treatment</NavLink></li>
                    <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">Hair Thread Treatment</NavLink></li>
                    <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">Biocell Therapy</NavLink></li>
                    <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">Hair Loss In women</NavLink></li>
                    <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">IV Drips For Hair</NavLink></li>
                    <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">Hair Loss Concern</NavLink></li>
                  
              </ul>
            </div>
          </div>
        )}
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
      <div className="flex items-center justify-between p-4 bg-white">
        <div className="flex items-center space-x-4">
          {/* Desktop Navigation */}
          {desktopNavItems}
        </div>
        {/* Add to Cart Button */}
        <NavLink
          to="/cart"
          className="flex items-center p-3 text-lg font-medium text-black transition-all duration-500 hover:opacity-75"
        >
          <IconShoppingCart size={24} />
          <span className="hidden ml-2 lg:inline">Cart</span>
        </NavLink>
        {/* Hamburger Icon for Mobile Navigation */}
        <button
          className="p-2 lg:hidden"
          onClick={toggleMenu}
        >
          {isOpen ? <IconX size={24} /> : <IconMenu4 size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          {mobileNavItems}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

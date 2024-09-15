import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IconHome, IconBook, IconApps, IconMail, IconChevronDown, IconMenu4, IconX, IconShoppingCart,IconUserCircle} from '@tabler/icons-react';
const Navbar = ({ position }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Desktop Services Dropdown state
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // Mobile Services Dropdown state
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Login Modal state

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
  };

  const toggleServices = () => {
    setIsServicesOpen(prev => !prev);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const desktopNavItems = position === 'left' ? (
    <>
      <ul className="hidden space-x-8 lg:flex">
        <li>
          <NavLink
            to="/"
            className="relative p-3 text-lg font-medium text-black transition-all duration-500 group hover:opacity-75 "
          >
            Home
            <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transform origin-left transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className="relative p-3 text-lg font-medium text-black transition-all duration-500 group hover:opacity-75 "
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
            className="relative p-3 text-lg font-medium text-black transition-all duration-500 group hover:opacity-75 "
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
     <ul className="items-center hidden space-x-8 lg:flex">
     <li>
    <NavLink
       onClick={openLoginModal}
      className="relative flex items-center p-3 text-lg font-medium text-black transition-all duration-500 group hover:opacity-75 "
    >
      <IconUserCircle size={28} />
      <span className="ml-2">Login</span>
      <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transform origin-left transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/Cart"
      className="relative flex items-center p-3 text-lg font-medium text-black transition-all duration-500 group hover:opacity-75 "
    >
      <IconShoppingCart size={28} />
      <span className="ml-2">Cart</span>
      <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-black transform origin-left transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/book"
      className="relative flex items-center p-3 text-lg font-medium text-white transition-all duration-500 bg-black hover:opacity-75 group "
    >
      Book Appointment
      <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-white transform origin-left transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
    </NavLink>
  </li>
</ul>

    </>
  );
  const mobileNavItems = (
    <ul className="relative p-8 mt-10 space-y-8">
      <li className="absolute top-4 right-4">
        <button
          className="flex items-center p-2 text-black transition-all duration-500 hover:opacity-75"
          onClick={toggleMenu}
        >
          <IconX size={24} />
        </button>
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
                <li><NavLink to="/thermage-treatment" className="block text-sm text-gray-700 hover:text-black">Thermage Treatment</NavLink></li>
                <li><NavLink to="/hifu-treatment" className="block text-sm text-gray-700 hover:text-black">HIFU Treatment</NavLink></li>
                <li><NavLink to="/dermal-fillers-treatment" className="block text-sm text-gray-700 hover:text-black">Dermal Fillers Treatment</NavLink></li>
                <li><NavLink to="/chemical-peel-treatment" className="block text-sm text-gray-700 hover:text-black">Chemical Peel Treatment</NavLink></li>
                <li><NavLink to="/q-switch-laser-treatment" className="block text-sm text-gray-700 hover:text-black">Q-Switch Laser Treatment</NavLink></li>
                <li><NavLink to="/skin-brightening-lightening-treatment" className="block text-sm text-gray-700 hover:text-black">Skin Brightening and Lightening Treatment</NavLink></li>
                <li><NavLink to="/ageing-skin" className="block text-sm text-gray-700 hover:text-black">Ageing Skin</NavLink></li>
                <li><NavLink to="/acne-scars" className="block text-sm text-gray-700 hover:text-black">Acne Scars</NavLink></li>
                <li><NavLink to="/dull-skin" className="block text-sm text-gray-700 hover:text-black">Dull Skin</NavLink></li>
                <li><NavLink to="/iv-drips-for-skin" className="block text-sm text-gray-700 hover:text-black">IV Drips For Skin</NavLink></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Hair</h3>
              <ul className="space-y-2">
                <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">Hair Loss Concern</NavLink></li>
                <li><NavLink to="/prp-gf-treatment" className="block text-sm text-gray-700 hover:text-black">PRP GF Treatment</NavLink></li>
                <li><NavLink to="/hair-thread-treatment" className="block text-sm text-gray-700 hover:text-black">Hair Thread Treatment</NavLink></li>
                <li><NavLink to="/biocell-therapy" className="block text-sm text-gray-700 hover:text-black">Biocell Therapy</NavLink></li>
                <li><NavLink to="/hair-loss-in-women" className="block text-sm text-gray-700 hover:text-black">Hair Loss In Women</NavLink></li>
                <li><NavLink to="/iv-drips-for-hair" className="block text-sm text-gray-700 hover:text-black">IV Drips For Hair</NavLink></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Make Up</h3>
              <ul className="space-y-2">
                <li><NavLink to="/make-up" className="block text-sm text-gray-700 hover:text-black">Make Up</NavLink></li>
                <li><NavLink to="/prp-gf-treatment" className="block text-sm text-gray-700 hover:text-black">PRP GF Treatment</NavLink></li>
                <li><NavLink to="/hair-thread-treatment" className="block text-sm text-gray-700 hover:text-black">Hair Thread Treatment</NavLink></li>
                <li><NavLink to="/biocell-therapy" className="block text-sm text-gray-700 hover:text-black">Biocell Therapy</NavLink></li>
                <li><NavLink to="/hair-loss-in-women" className="block text-sm text-gray-700 hover:text-black">Hair Loss In Women</NavLink></li>
                <li><NavLink to="/iv-drips-for-hair" className="block text-sm text-gray-700 hover:text-black">IV Drips For Hair</NavLink></li>
                <li><NavLink to="/hair-loss-concern" className="block text-sm text-gray-700 hover:text-black">Hair Loss Concern</NavLink></li>
              </ul>
            </div>
          </div>
        )}
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
    </ul>
  );

  return (
    <nav className="relative">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4">
          {/* Desktop Navigation */}
          {desktopNavItems}
        </div>

        <div className="flex items-center space-x-4 lg:hidden">
          {/* Shopping Cart Icon */}
          <NavLink
            onClick={openLoginModal}
            className="flex items-center p-2 text-black transition-all duration-500 hover:opacity-75"
          >
            <IconUserCircle size={28} />
          </NavLink>
          
          <NavLink
            to="/Cart"
            className="flex items-center p-2 text-black"
          >
            <IconShoppingCart size={28} />
          </NavLink>

          {/* Menu Toggle Button */}
          <button
            className="p-2"
            onClick={toggleMenu}
          >
            {isOpen ? <IconX size={24} /> : <IconMenu4 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          {mobileNavItems}
        </div>
      )}
      {isLoginModalOpen && (
           <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
    <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg">

              <button 
                onClick={closeLoginModal}
                className="absolute text-gray-600 top-2 right-2"
              >
                <IconX size={24} />
              </button>
              <h2 className="mb-4 text-2xl font-semibold">Login</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="block w-full p-2 mt-1 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        )}
    </nav>
  );
};

export default Navbar;
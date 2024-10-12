import { NavLink } from 'react-router-dom';
import { IconPhoneCall, IconLeaf } from '@tabler/icons-react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#f9f7f1] shadow-md">
      {/* Call Us Section */}
      <div className="flex items-center justify-center py-2 space-x-2 text-gray-100 bg-black">
        <IconPhoneCall size={20} className="text-gray-100" />
        <p className="text-sm font-light tracking-wide">
          CALL US AT:
          <a href="tel:+918171924503" className="font-bold text-gray-100 hover:underline"> +91 8171924503</a>
        </p>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between p-2 border-b border-gray-300 lg:px-4 lg:py-1">
        {/* Navbar for Desktop (Left Items) */}
        <div className="hidden lg:flex lg:space-x-4">
          <Navbar position="left" className="h-8" />
        </div>

        {/* Centered Logo and Title */}
        <div className="flex justify-center mt-4 md:justify-start md:mt-0 md:ml-8 lg:ml-28">
          <NavLink to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="img/pooja 2.png"
                alt="Logo"
                className="w-16 h-16 transition-all duration-300 rounded-full shadow-md group-hover:scale-105"
              />
              <IconLeaf className="absolute w-6 h-6 text-green-800 -top-2 -right-2 animate-bounce" />
            </div>
            <h1 className="text-2xl font-semibold tracking-widest text-gray-800 uppercase font-cormorant">
              ORGANIC <span className="font-bold text-green-800 font-cormorant">POOJA</span>
            </h1>
          </NavLink>
        </div>  

        {/* Navbar for Desktop (Right Items) */}
        <div className="hidden lg:flex lg:space-x-4">
          <Navbar position="right" className="h-8" />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center lg:hidden">
          <Navbar position="mobile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
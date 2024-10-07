import { NavLink } from 'react-router-dom';
import { IconPhoneCall, IconLeaf } from '@tabler/icons-react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-900 shadow-lg">
      {/* Call Us Section */}
      <div className="flex items-center justify-center py-2 space-x-2 text-white bg-purple-900">
        <IconPhoneCall size={20} className="text-pink-400" />
        <p className="text-sm font-medium">
          Call us at:
          <a href="tel:+918171924503" className="font-semibold text-pink-300 hover:underline"> +91 8171924503</a>
        </p>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between p-2 border-b border-gray-700 lg:px-4 lg:py-1">
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
                className="w-16 h-16 transition-all duration-300 rounded-full shadow-lg group-hover:scale-105"
              />
              <IconLeaf className="absolute w-6 h-6 text-pink-500 -top-2 -right-2 animate-bounce" />
            </div>
            <h1 className="text-2xl font-bold text-white font-['Roboto_Slab']">
              Organic <span className="text-pink-400">Pooja</span>
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
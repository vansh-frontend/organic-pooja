import { NavLink } from 'react-router-dom';
import { IconPhoneCall } from '@tabler/icons-react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 shadow-lg bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200">
      {/* Call Us Section */}
      <div className="flex items-center justify-center py-2 space-x-2 text-white bg-black">
        <IconPhoneCall size={20} className="text-yellow-400" />
        <p className="text-sm font-medium">
          Call us at:
          <a href="tel:+918171924503" className="font-semibold text-yellow-300 hover:underline"> +91 8171924503</a>
        </p>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between p-2 border-b border-gray-300 lg:px-4 lg:py-1">
        {/* Navbar for Desktop (Left Items) */}
        <div className="hidden lg:flex lg:space-x-4">
          <Navbar position="left" className="h-8" /> {/* Adjust height here */}
        </div>

        {/* Centered Logo and Title */}
        <div className="flex items-center justify-center flex-1 space-x-2">
          <NavLink to="/" className="flex items-center space-x-2">
            <img 
              src="img/pooja 2.png"
              alt="Logo"
              className="object-cover w-12 h-12 rounded-full shadow-lg"
            />
            <h1 className="text-lg md:text-xl lg:text-2xl font-bold tracking-widest text-gray-800 uppercase font-['Roboto_Slab']">
              Organic <span className="font-extrabold text-yellow-500">Pooja</span>
            </h1>
          </NavLink>
        </div>

        {/* Navbar for Desktop (Right Items) */}
        <div className="hidden lg:flex lg:space-x-4">
          <Navbar position="right" className="h-8" /> {/* Adjust height here */}
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

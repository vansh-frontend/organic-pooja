import { NavLink } from 'react-router-dom';
import { IconPhoneCall } from '@tabler/icons-react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg">
      {/* Call Us Section */}
      <div className="flex items-center justify-center py-2 space-x-2 text-center text-white bg-black">
        <IconPhoneCall size={20} className="text-[#ffc900]" />
        <p className="text-sm font-bold">
          Call us at:
          <a href="tel:+918171924503" className="font-bold text-white cursor-pointer"> +91 8171924503</a>
        </p>
      </div>

      {/* Main Header */}
      <div className="flex items-center justify-between p-4 lg:px-8">
        {/* Navbar for Desktop (Left Items) */}
        <div className="hidden space-x-4 lg:flex">
          <Navbar position="left" />
        </div>
        
        {/* Centered Logo and Title */}
        <div className="flex items-center justify-center flex-1">
          <NavLink to="/" className="flex items-center space-x-4">
            <img 
              src="img/pooja 2.png"
              alt="Logo"
              className="object-cover w-12 h-12 rounded-full"
            />
            <h1 className="text-2xl font-semibold tracking-wide text-black uppercase">
              organic by pooja
            </h1>
          </NavLink>
        </div>

        {/* Navbar for Desktop (Right Items) */}
        <div className="hidden space-x-4 lg:flex">
          <Navbar position="right" />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <Navbar position="mobile" />
        </div>
      </div>
    </header>
  );
};

export default Header;

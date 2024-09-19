import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IconHome, IconBook, IconApps,IconChevronDown, IconMenu4, IconX, IconShoppingCart,IconUserCircle,IconBrandGoogle, IconArrowRight} from '@tabler/icons-react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebaseConfig';

const Navbar = ({ position }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Desktop Services Dropdown state
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false); // Mobile Services Dropdown state
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Login Modal state
  const [email, setEmail] = useState('');
  const[OTP,setotp] = useState('');
  const [telephone, setTelephone] = useState('');
  const [error, setError] = useState('');

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Google login successful:', user);
      closeLoginModal();
    } catch (error) {
      console.error('Google login error:', error);
      setError('Google login failed. Please try again.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('Login successful:', user);
      closeLoginModal();
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again.');
    }
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
    className="relative flex items-center p-2 text-base font-medium text-black transition-all duration-500 group hover:opacity-75"
  >
    <span className="items-center hidden gap-2 px-4 py-1.5 font-semibold text-black transition-shadow duration-300 bg-white rounded-full shadow-md md:flex hover:shadow-xl hover:bg-indigo-50">
      Login <IconArrowRight size={16} />
    </span>
    <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-black transform origin-left transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
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
    className="relative flex items-center p-2.5 text-lg font-medium text-white transition-all duration-500 bg-black hover:opacity-75 group rounded-md"
  >
    Book Appointment
    <span className="absolute bottom-0 left-1/2 w-0 h-[1.5px] bg-white transform origin-left transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
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
        onClick={openLoginModal}
        className="flex items-center p-2 text-base font-medium text-black transition-all duration-300 rounded-lg hover:bg-gray-700"
      >
        <span className="flex items-center gap-2">
          <IconUserCircle size={26} />
          <p>Login</p>
          <IconArrowRight size={22} />
        </span>
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
    
      <li>
      <NavLink
        to="/book"
        className="flex items-center p-3 text-base font-bold text-white transition-all duration-500 bg-black rounded-lg hover:opacity-75"
        onClick={toggleMenu}
      >
        <IconBook size={20} />
        <span className="ml-2 text-sm font-bold">Book Appointment</span>
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
     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-80">
     <div className="relative w-full max-w-lg p-8 mx-auto bg-white border border-gray-200 shadow-2xl bg-opacity-90 rounded-2xl backdrop-filter backdrop-blur-lg">
       <button
         className="absolute p-2 text-gray-700 transition-transform transform top-4 right-4 hover:text-gray-900 hover:scale-110"
         onClick={closeLoginModal}
       >
         <IconX size={24} />
       </button>
       <h2 className="mb-6 text-3xl font-bold text-center text-gray-900">
         Login
       </h2>
       <form onSubmit={handleLogin} className="space-y-6">
         <div>
           <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-800">
             Phone Number
           </label>
           <input
             type="tel"
             id="phone"
             className="w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 transition-all bg-white border border-gray-300 rounded-lg shadow-md bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
             value={telephone}
             onChange={(e) => {
               if (e.target.value.length <= 10) setTelephone(e.target.value);
             }}
             required
             maxLength="10"
             placeholder="Enter your 10-digit phone number"
             pattern="\d{10}"
             title="Please enter a valid 10-digit phone number"
           />
         </div>
         <div>
           <label htmlFor="otp" className="block mb-2 text-sm font-medium text-gray-800">
             OTP
           </label>
           <input
             type="tel"
             id="otp"
             className="w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 transition-all bg-white border border-gray-300 rounded-lg shadow-md bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
             value={OTP}
             onChange={(e) => {
               if (e.target.value.length <= 6) setotp(e.target.value);
             }}
             required
             maxLength="6"
             placeholder="Enter 6-digit OTP"
             pattern="\d{6}"
             title="Please enter a valid 6-digit OTP"
           />
         </div>
         {error && <p className="text-sm text-red-500">{error}</p>}
         <div className="flex justify-center">
           <button
             type="submit"
             className="w-full px-6 py-3 font-semibold text-white transition-transform duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600 hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300 hover:scale-105"
           >
             Verify
           </button>
         </div>
       </form>
       <div className="mt-6">
         <button
           onClick={handleGoogleLogin}
           className="flex items-center justify-center w-full px-6 py-3 font-semibold text-gray-800 transition-transform duration-300 transform bg-white border border-gray-300 rounded-lg shadow-md bg-opacity-80 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-purple-300 hover:scale-105"
         >
           <IconBrandGoogle size={20} className="mr-2" />
           Login with Google
         </button>
       </div>
     </div>
   </div>
   
      )}

    </nav>
  );
};

export default Navbar;


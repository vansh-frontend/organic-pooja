
import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { IconHome, IconBook, IconApps, IconMenu4, IconX, IconShoppingCart, IconUserCircle, IconBrandGoogle, IconArrowRight, IconServicemark, IconLogout } from '@tabler/icons-react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';
import { motion, AnimatePresence } from 'framer-motion';
import './DataDeletionPage';
import './Help';
import './Orders';

const Navbar = ({ position }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [OTP, setotp] = useState('');
  const [telephone, setTelephone] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const userMenuRef = useRef(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserName(user.displayName || 'User');
      } else {
        setIsLoggedIn(false);
        setUserName('');
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen((prev) => !prev);
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
      setUserName(user.displayName || 'User');
      closeLoginModal();
    } catch (error) {
      console.error('Google login error:', error);
      setError('Google login failed. Please try again.');
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, OTP);
      const user = userCredential.user;
      console.log('Login successful:', user);
      setUserName(user.displayName || 'User');
      closeLoginModal();
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed. Please try again.');
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('Logout successful');
      setUserName('');
      setIsUserMenuOpen(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const UserMenu = ({ isMobile }) => (
    <div ref={userMenuRef} className={isMobile ? "" : "relative"}>
      <button
        onClick={toggleUserMenu}
        className={`flex items-center px-4 py-2 text-sm font-semibold text-white transition-all duration-300 ease-in-out ${
          isMobile ? "w-full justify-start" : "rounded-full hover:bg-pink-200 hover:text-pink-800"
        }`}
      >
        <IconUserCircle size={24} className="mr-2 text-pink-600" />
        <span className="truncate max-w-[100px]">{isLoggedIn ? userName : 'Guest'}</span>
      </button>
      <AnimatePresence>
        {isUserMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 0 : -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: isMobile ? 0 : -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`${
              isMobile ? "mt-2" : "absolute right-0 z-20 w-56 mt-2 bg-white rounded-lg shadow-xl border border-gray-200"
            }`}
          >
            <div className="p-4 border-b border-gray-200">
              <p className="text-sm font-medium text-pink-800">Hello, {isLoggedIn ? userName : 'Guest'}</p>
              <p className="text-xs text-white-600">{isLoggedIn ? 'Manage your account' : 'Sign in to your account'}</p>
            </div>
            <div className="py-2">
              <NavLink 
                to="/orders" 
                className="flex items-center px-4 py-2 text-sm transition-colors duration-150 text-white-700 hover:-100 hover:text-pink-800"
                onClick={() => {
                  setIsUserMenuOpen(false);
                  if (isMobile) setIsOpen(false);
                }}
              >
                Orders
              </NavLink>
              <NavLink 
                to="/wishlist" 
                className="flex items-center px-4 py-2 text-sm transition-colors duration-150 text-white-700 hover:-100 hover:text-pink-800"
                onClick={() => {
                  setIsUserMenuOpen(false);
                  if (isMobile) setIsOpen(false);
                }}
              >
                Wishlist
              </NavLink>
              <NavLink 
                to='/Help' 
                className="flex items-center px-4 py-2 text-sm transition-colors duration-150 text-white-700 hover:-100 hover:text-pink-800"
                onClick={() => {
                  setIsUserMenuOpen(false);
                  if (isMobile) setIsOpen(false);
                }}
              >
                Help Center
              </NavLink>
            </div>
            <div className="pt-2 border-t border-gray-200">
              {isLoggedIn ? (
                <button
                  onClick={() => {
                    handleLogout();
                    setIsUserMenuOpen(false);
                    if (isMobile) setIsOpen(false);
                  }}
                  className="flex items-center w-full px-4 py-2 text-sm text-left text-red-600 transition-colors duration-150 hover:bg-red-100 hover:text-red-800"
                >
                  <IconLogout size={18} className="mr-2" />
                  Logout
                </button>
              ) : (
                <button
                  onClick={() => {
                    openLoginModal();
                    setIsUserMenuOpen(false);
                    if (isMobile) setIsOpen(false);
                  }}
                  className="flex items-center w-full px-4 py-2 text-sm text-left text-pink-600 transition-colors duration-150 hover:-100 hover:text-pink-800"
                >
                  Login
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="absolute bottom-0 left-0 w-full h-0.5 -400 transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100"></div>
    </div>
  );
  
  const desktopNavItems = position === 'left' ? (
    <ul className="items-center hidden space-x-10 lg:flex">
  {['Home', 'Products', 'Services'].map((item) => (
    <li key={item}>
      <NavLink
        to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
        className="relative py-2 group"
      >
        <span className="text-lg font-medium text-white transition-all duration-300 font-poppins group-hover:text-pink-700">
          {item}
        </span>
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-pink-700 transform origin-left transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100"></span>
      </NavLink>
    </li>
  ))}
</ul>
  ) : (
    <ul className="items-center hidden space-x-8 lg:flex">
      <li>
        <UserMenu isMobile={false} />
      </li>
      <li>
  <NavLink
    to="/Cart"
    className="relative flex items-center text-white transition-all duration-300 group hover:text-pink-700"
  >
    <IconShoppingCart size={24} className="transition-transform duration-300 group-hover:scale-110" />
    <span className="ml-2 text-sm font-medium font-poppins">Cart</span>
    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-pink-700 transform origin-left transition-transform duration-300 ease-out scale-x-0 group-hover:scale-x-100"></span>
  </NavLink>
</li>
      <li className="flex-shrink-0">
        <NavLink
          to="/book"
          className="relative overflow-hidden px-4 sm:px-6 py-2 sm:py-3 font-serif text-xs sm:text-sm font-bold text-white bg-purple-800 rounded-md transition-all duration-300 ease-in-out hover:bg-purple-600 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 whitespace-nowrap"
        >
          <span className="relative z-10">Book Appointment</span>
          <span className="absolute inset-0 transition-opacity duration-300 ease-in-out bg-white opacity-0 group-hover:opacity-20"></span>
        </NavLink>
      </li>
    </ul>
  );
  const mobileNavItems = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 overflow-hidden bg-gray-800"
    >
      <div className="relative h-full overflow-y-auto">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="flex items-center justify-between p-6 bg-gray-300 shadow-md"
        >
          <h1 className="font-serif text-2xl font-bold text-pink-900">Organic Pooja</h1>
          <button
            className="p-2 text-pink-600 transition-colors duration-200 hover:text-pink-800"
            onClick={toggleMenu}
          >
            <IconX size={28} />
          </button>
        </motion.div>
  
        <nav className="px-4 mt-6">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="mb-6"
          >
           <motion.div
  initial={{ height: 0, opacity: 0 }}
  animate={{ height: "auto", opacity: 1 }}
  transition={{ duration: 0.3 }}
  className="w-full max-w-sm mx-auto overflow-hidden bg-gray-500 rounded-lg shadow-md"
>
  <motion.div
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.1, duration: 0.3 }}
    className="p-4"
  >
    <UserMenu 
      isMobile={true} 
      className="flex flex-col space-y-2"
    />
  </motion.div>
</motion.div>
           
          </motion.div>
  
          {[
            { to: "/", label: "Home", icon: IconHome },
            { to: "/services", label: "Services", icon: IconServicemark },
            { to: "/products", label: "Products", icon: IconApps },
          ].map(({ to, label, icon: Icon }, index) => (
            <motion.div
              key={to}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
            >
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `flex items-center px-6 py-4 my-2 rounded-lg text-white hover:text-pink-700 transition-all duration-200 ${
                    isActive
                      ? "bg-none"
                      : "hover:bg-none"
                  }`
                }
                onClick={toggleMenu}
              >
                <Icon size={24} className="mr-4" />
                <span className="font-serif text-lg font-medium">{label}</span>
              </NavLink>
            </motion.div>
          ))}
  
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.4 }}
            className="px-2 mt-8"
          >
            <NavLink
              to="/book"
              className="flex items-center justify-center w-full p-4 font-serif text-lg font-semibold text-white transition-all duration-200 transform bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 hover:scale-105"
              onClick={toggleMenu}
            >
              <IconBook size={24} className="mr-3" />
              <span>Book Appointment</span>
            </NavLink>
          </motion.div>
        </nav>
  
        <div className="absolute bottom-0 left-0 w-full h-16 pointer-events-none bg-gradient-to-t from-amber-50 to-transparent"></div>
      </div>
    </motion.div>
  );
  return (
    <nav className="relative">
      <div className="flex items-center justify-between p-4">

        <div className="flex items-center space-x-4">
          {desktopNavItems}
        </div>
  
        <div className="flex items-center space-x-4 lg:hidden">
          <NavLink
            to="/Cart"
            className="flex items-center p-2 text-white"
          >
            <IconShoppingCart size={28} />
          </NavLink>
  
          <button
            className="p-2 text-white"
            onClick={toggleMenu}
          >
            {isOpen ? <IconX size={24} /> : <IconMenu4 size={24} />}
          </button>
        </div>
      </div>
  
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 bg-gray-900"
          >
            {mobileNavItems}
          </motion.div>
        )}
      </AnimatePresence>
  
      <AnimatePresence>
        {isLoginModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-md p-8 bg-gray-800 shadow-2xl rounded-2xl backdrop-filter backdrop-blur-lg animate-fadeIn"
            >
              <button
                className="absolute p-2 transition-transform transform cursor-pointer text-white-400 top-4 right-4 hover:scale-110"
                onClick={closeLoginModal}
              >
                <IconX size={24} />
              </button>
              <div className="relative z-10">
                <h2 className="mb-6 text-4xl font-bold text-black">Welcome Back</h2>
                <form onSubmit={handleLogin} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-medium text-white-300">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 text-black placeholder-gray-500 transition-all duration-300 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 animate-slideInFromLeft"
                      value={telephone}
                      onChange={(e) => {
                        if (e.target.value.length <= 10) setTelephone(e.target.value);
                      }}
                      required
                      maxLength="10"
                         placeholder="Enter your 10-digit phone number"
      pattern="\d{10}"
    />
  </div>
  <div className="space-y-2">
    <label htmlFor="otp" className="block text-sm font-medium text-white-300">
      OTP
    </label>
    <input
      type="tel"
      id="otp"
      className="w-full px-4 py-3 text-black placeholder-gray-500 transition-all duration-300 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 animate-slideInFromRight"
      value={OTP}
      onChange={(e) => {
        if (e.target.value.length <= 6) setOTP(e.target.value);
      }}
      required
      maxLength="6"
      placeholder="Enter 6-digit OTP"
      pattern="\d{6}"
    />
  </div>
  {error && <p className="text-sm text-red-400 animate-pulse">{error}</p>}
  <button
    type="submit"
    className="w-full px-6 py-3 font-semibold text-black transition-all duration-300 bg-purple-600 rounded-lg shadow-lg hover:bg-purple-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50"
  >
    Verify & Login
  </button>
  </form>
  <div className="mt-6">
  <button
    onClick={handleGoogleLogin}
    className="flex items-center justify-center w-full px-6 py-3 font-semibold text-black transition-all duration-300 bg-gray-700 rounded-lg shadow-md hover:bg-gray-600 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-opacity-50 animate-fadeIn"
  >
    <IconBrandGoogle size={20} className="mr-2" />
    Login with Google
  </button>
  </div>
  </div>
  </motion.div>
  </motion.div>
  )}
  </AnimatePresence>
  </nav>
  );
  };
  
  export default Navbar;
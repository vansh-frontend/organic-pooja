import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IconHome, IconBook, IconApps,IconMenu4, IconX, IconShoppingCart,IconUserCircle,IconBrandGoogle, IconArrowRight, IconServicemark} from '@tabler/icons-react';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from './firebaseConfig';

const Navbar = ({ position }) => {
  const [isOpen, setIsOpen] = useState(false);
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
    <ul className="items-center hidden space-x-10 lg:flex">
      {['Home', 'Products', 'Services'].map((item) => (
        <li key={item}>
          <NavLink
            to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
            className="relative py-2 group"
          >
            <span className="text-lg font-medium text-gray-800 transition-all duration-300 group-hover:text-emerald-600">
              {item}
            </span>
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-600 transform origin-left transition-all duration-300 scale-x-0 group-hover:scale-x-100"></span>
          </NavLink>
        </li>
      ))}
    </ul>
  ) : (
    <ul className="items-center hidden space-x-8 lg:flex">
      <li>
        <button
          onClick={openLoginModal}
          className="group relative px-6 py-2.5 text-sm font-semibold text-emerald-600 transition-all duration-300 ease-in-out hover:text-white"
        >
          <span className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out transform translate-x-1 translate-y-1 bg-emerald-600 group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="absolute inset-0 w-full h-full border-2 border-emerald-600"></span>
          <span className="relative flex items-center">
            Login
            <IconArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </button>
      </li>
      <li>
        <NavLink
          to="/Cart"
          className="relative flex items-center text-gray-800 transition-all duration-300 group hover:text-emerald-600"
        >
          <IconShoppingCart size={24} className="transition-transform duration-300 group-hover:scale-110" />
          <span className="ml-2 text-sm font-medium">Cart</span>
          <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600 transform origin-left transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/book"
          className="relative overflow-hidden px-6 py-3 text-sm font-bold text-white bg-emerald-600 rounded-md transition-all duration-300 ease-in-out hover:bg-emerald-700 hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          <span className="relative z-10">Book Appointment</span>
          <span className="absolute inset-0 transition-opacity duration-300 ease-in-out bg-white opacity-0 group-hover:opacity-20"></span>
        </NavLink>
      </li>
    </ul>
  );
  const mobileNavItems = (
    <div className="fixed inset-0 z-50 flex flex-col bg-gradient-to-br from-emerald-50 to-teal-100">
      <div className="flex justify-end p-4">
        <button
          className="p-2 transition-all duration-300 transform text-emerald-600 hover:text-emerald-800 hover:rotate-90"
          onClick={toggleMenu}
        >
          <IconX size={28} />
        </button>
      </div>
      
      <nav className="flex flex-col justify-center flex-grow px-6">
        {[
          { to: "/", label: "Home", icon: IconHome },
          { to: "/services", label: "Services", icon: IconServicemark },
          { to: "/products", label: "Products", icon: IconApps },
        ].map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className="flex items-center py-4 space-x-4 text-xl font-medium text-gray-800 transition-all duration-300 border-b group border-emerald-200 hover:text-emerald-600"
            onClick={toggleMenu}
          >
            <div className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-white rounded-full shadow-md group-hover:bg-emerald-600 group-hover:text-white">
              <Icon size={20} />
            </div>
            <span>{label}</span>
            <div className="flex-grow" />
            <IconArrowRight size={20} className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
          </NavLink>
        ))}
        
        <button
          onClick={() => {
            openLoginModal();
            toggleMenu();
          }}
          className="flex items-center py-4 space-x-4 text-xl font-medium text-gray-800 transition-all duration-300 border-b group border-emerald-200 hover:text-emerald-600"
        >
          <div className="flex items-center justify-center w-10 h-10 transition-all duration-300 bg-white rounded-full shadow-md group-hover:bg-emerald-600 group-hover:text-white">
            <IconUserCircle size={20} />
          </div>
          <span>Login</span>
          <div className="flex-grow" />
          <IconArrowRight size={20} className="opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
        </button>
  
        <div className="mt-6">
          <NavLink
            to="/book"
            className="block w-full py-4 text-lg font-bold text-center text-white transition-all duration-300 transform rounded-lg shadow-lg bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-xl hover:scale-105"
            onClick={toggleMenu}
          >
            <span className="flex items-center justify-center">
              <IconBook size={24} className="mr-2" />
              Book Appointment
            </span>
          </NavLink>
        </div>
      </nav>
    </div>
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
             className="w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 transition-all bg-white border border-gray-300 rounded-lg shadow-md bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
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
             className="w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 transition-all bg-white border border-gray-300 rounded-lg shadow-md bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
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
  className="w-full px-6 py-3 font-semibold text-white transition-transform duration-300 transform bg-teal-600 rounded-lg shadow-lg hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-300 hover:scale-105"
>
  Verify
</button>

         </div>
       </form>
       <div className="mt-6">
       <button
  onClick={handleGoogleLogin}
  className="flex items-center justify-center w-full px-6 py-3 font-semibold text-gray-800 transition-transform duration-300 transform bg-white border border-gray-300 rounded-lg shadow-lg bg-opacity-20 backdrop-blur-md hover:bg-opacity-30 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-teal-300"
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


import { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from './firebaseConfig'; // import your firebase config
import { IconX, IconBrandGoogle } from '@tabler/icons-react'; // Your icons

const LoginModal = ({ isLoginModalOpen, closeLoginModal }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [verificationId, setVerificationId] = useState(null);

  const handleLoginWithEmail = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      closeLoginModal(); // Close modal after successful login
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      closeLoginModal();
    } catch (error) {
      console.error('Google login error:', error);
    }
  };

  const handleSendOtp = async (e) => {
    e.preventDefault();
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(
        'recaptcha-container',
        {
          size: 'invisible', // or you can render it explicitly
        },
        auth
      );

      const appVerifier = window.recaptchaVerifier;
      const confirmationResult = await signInWithPhoneNumber(auth, `+1${phone}`, appVerifier);
      setVerificationId(confirmationResult.verificationId);
      setIsOtpSent(true);
    } catch (error) {
      console.error('OTP send error:', error);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    try {
      const credential = await confirmationResult.confirm(otp);
      closeLoginModal();
    } catch (error) {
      console.error('OTP verification error:', error);
    }
  };

  return (
    isLoginModalOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="relative w-full max-w-md p-8 bg-white rounded-lg shadow-lg bg-opacity-80 backdrop-blur-sm">
          <button
            onClick={closeLoginModal}
            className="absolute text-gray-600 transition duration-300 top-2 right-2 hover:text-gray-800"
          >
            <IconX size={24} />
          </button>

          <h2 className="mb-6 text-2xl font-bold text-gray-800">Login</h2>

          <form className="space-y-6" onSubmit={isOtpSent ? handleVerifyOtp : handleLoginWithEmail}>
            {!isOtpSent && (
              <>
                <div className="mb-4">
                  <label htmlFor="phone" className="block mb-1 text-sm font-medium text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    maxLength="10"
                    className="block w-full p-3 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    required
                    placeholder="Enter 10-digit phone number"
                  />
                  <button onClick={handleSendOtp} className="w-full px-4 py-2 font-semibold text-white transition duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 active:bg-gray-600">
                    Send OTP
                  </button>
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@gmail.com"
                    className="block w-full p-3 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password" className="block mb-1 text-sm font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your Password"
                    className="block w-full p-3 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    required
                  />
                </div>

                <button type="submit" className="w-full px-4 py-2 font-semibold text-white transition duration-300 rounded-lg bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-300 hover:to-cyan-400 active:from-teal-200 active:to-cyan-300">
                  Login
                </button>

                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="flex items-center justify-center w-full px-4 py-2 mb-4 font-semibold text-white transition duration-300 bg-gray-800 rounded-lg hover:bg-gray-700 active:bg-gray-600"
                >
                  <IconBrandGoogle className="w-5 h-5 mr-2" />
                  Login with Google
                </button>
              </>
            )}

            {isOtpSent && (
              <div className="mb-4">
                <label htmlFor="otp" className="block mb-1 text-sm font-medium text-gray-700">Enter OTP</label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="block w-full p-3 transition duration-300 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                  required
                  placeholder="Enter OTP"
                />
                <button type="submit" className="w-full px-4 py-2 font-semibold text-white transition duration-300 rounded-lg bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-300 hover:to-cyan-400 active:from-teal-200 active:to-cyan-300">
                  Verify OTP
                </button>
              </div>
            )}
          </form>
          <div id="recaptcha-container"></div>
        </div>
      </div>
    )
  );
};

export default LoginModal;

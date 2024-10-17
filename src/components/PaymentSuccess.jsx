import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const transactionId = searchParams.get('transactionId');

  useEffect(() => {
    // Clear the cart or perform any other necessary actions
    localStorage.removeItem('cartItems');
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex items-center justify-center min-h-screen text-white bg-black"
    >
      <div className="text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        >
          <FaCheckCircle className="mx-auto mb-4 text-6xl text-green-500" />
        </motion.div>
        <h1 className="mb-4 text-4xl font-light">Payment Successful!</h1>
        <p className="mb-8 text-xl">Thank you for your purchase.</p>
        {transactionId && (
          <p className="mb-8 text-lg">Transaction ID: {transactionId}</p>
        )}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="px-6 py-3 text-lg font-light text-black transition-colors bg-white rounded-full hover:bg-opacity-90"
        >
          Return to Home
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PaymentSuccess;
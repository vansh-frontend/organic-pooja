import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaTimesCircle } from 'react-icons/fa';

const PaymentFailure = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const transactionId = searchParams.get('transactionId');

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
          <FaTimesCircle className="mx-auto mb-4 text-6xl text-red-500" />
        </motion.div>
        <h1 className="mb-4 text-4xl font-light">Payment Failed</h1>
        <p className="mb-8 text-xl">We're sorry, but there was an issue processing your payment.</p>
        {transactionId && (
          <p className="mb-8 text-lg">Transaction ID: {transactionId}</p>
        )}
        <div className="space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/cart')}
            className="px-6 py-3 text-lg font-light text-black transition-colors bg-white rounded-full hover:bg-opacity-90"
          >
            Return to Cart
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="px-6 py-3 text-lg font-light text-white transition-colors bg-transparent border border-white rounded-full hover:bg-white hover:text-black"
          >
            Go to Home
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default PaymentFailure;
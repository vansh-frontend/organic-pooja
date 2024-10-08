import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductModal = ({ product, onClose, onAddToCart }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Add overflow-hidden to body when modal opens
    document.body.classList.add('overflow-hidden');

    // Remove overflow-hidden from body when modal closes
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-80 backdrop-blur-md"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl overflow-hidden bg-gray-900 border border-purple-500 shadow-2xl rounded-xl"
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute z-10 text-purple-500 transition-colors duration-200 top-2 right-2 sm:top-4 sm:right-4 hover:text-purple-300"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg className="w-8 h-8 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          {/* Modal Content */}
          <div className="flex flex-col sm:flex-row">
            {/* Product Image */}
            <motion.div 
              className="relative w-full sm:w-1/2"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: imageLoaded ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                src={product.image}
                alt={product.name}
                className="object-cover w-full h-64 sm:h-full"
                onLoad={() => setImageLoaded(true)}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-10 h-10 border-4 border-purple-500 rounded-full border-t-transparent animate-spin"></div>
                </div>
              )}
            </motion.div>

            {/* Product Details */}
            <motion.div 
              className="flex flex-col w-full p-4 bg-gray-800 sm:p-6 sm:w-1/2 md:p-8"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.h3 
                className="mb-2 text-2xl font-bold text-purple-300 sm:text-3xl"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {product.name}
              </motion.h3>
              <motion.p 
                className="mb-4 text-xl font-semibold text-blue-400 sm:text-2xl"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {product.price}
              </motion.p>

              <motion.div 
                className="p-3 mb-4 bg-gray-700 rounded-lg sm:p-4 sm:mb-6"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h4 className="mb-2 text-base font-semibold text-purple-200 sm:text-lg">Product Description</h4>
                <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
                  {product.description || "Embark on a cosmic journey with this stellar product. Infused with the essence of distant galaxies, it's designed to elevate your daily routine to interstellar heights. Perfect for the modern space enthusiast seeking a touch of the extraordinary."}
                </p>
              </motion.div>

              <motion.div 
                className="mt-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center">
                    <span className="mr-2 text-xs font-medium text-gray-400 sm:text-sm">Availability:</span>
                    <span className="px-2 py-1 text-xs font-semibold text-green-300 bg-green-900 rounded-full">In Stock</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

ProductModal.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductModal;
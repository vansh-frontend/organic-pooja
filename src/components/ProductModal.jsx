import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductModal = ({ product, onClose, onAddToCart }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-30 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white border rounded-lg shadow-2xl border-gray-200"
      >
        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute z-10 text-gray-600 transition-colors duration-200 top-2 right-2 sm:top-4 sm:right-4 hover:text-gray-800"
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
                <div className="w-10 h-10 border-4 border-gray-300 rounded-full border-t-gray-800 animate-spin"></div>
              </div>
            )}
          </motion.div>
  
          {/* Product Details */}
          <motion.div 
            className="flex flex-col w-full p-4 sm:p-6 sm:w-1/2 md:p-8"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.h3 
              className="mb-2 text-2xl font-medium text-gray-800 sm:text-3xl"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              {product.name}
            </motion.h3>
            <motion.p 
              className="mb-4 text-xl font-medium text-gray-600 sm:text-2xl"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {product.price}
            </motion.p>
  
            <motion.div 
              className="p-3 mb-4 bg-gray-100 rounded-lg sm:p-4 sm:mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h4 className="mb-2 text-base font-medium tracking-wide text-gray-800 sm:text-lg">Product Description</h4>
              <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
                {product.description || `Experience the cosmic benefits of ${product.name}. This product is designed to enhance your daily routine with its unique blend of natural ingredients. Perfect for those seeking a touch of luxury in their self-care regimen.`}
              </p>
            </motion.div>
  
            <motion.div 
              className="mt-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <div className="flex items-center">
                  <span className="mr-2 text-xs font-medium text-gray-600 sm:text-sm">Availability:</span>
                  <span className="px-2 py-1 text-xs font-medium tracking-wider text-white bg-gray-800 rounded-full">IN STOCK</span>
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
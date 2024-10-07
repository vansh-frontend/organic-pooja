import PropTypes from 'prop-types';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductModal = ({ product, onClose, onAddToCart }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

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
            className="absolute z-10 text-purple-300 transition-colors duration-200 top-4 right-4 hover:text-purple-100"
            onClick={onClose}
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          {/* Modal Content */}
          <div className="flex flex-col md:flex-row">
            {/* Product Image */}
            <motion.div 
              className="relative w-full md:w-1/2"
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
                className="object-cover w-full h-64 md:h-full"
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
              className="flex flex-col w-full p-6 bg-gray-800 md:w-1/2 md:p-8"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.h3 
                className="mb-2 text-3xl font-bold text-purple-300"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {product.name}
              </motion.h3>
              <motion.p 
                className="mb-4 text-2xl font-semibold text-blue-400"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {product.price}
              </motion.p>

              <motion.div 
                className="p-4 mb-6 bg-gray-700 rounded-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h4 className="mb-2 text-lg font-semibold text-purple-200">Product Description</h4>
                <p className="leading-relaxed text-gray-300">
                  {product.description || "Embark on a cosmic journey with this stellar product. Infused with the essence of distant galaxies, it's designed to elevate your daily routine to interstellar heights. Perfect for the modern space enthusiast seeking a touch of the extraordinary."}
                </p>
              </motion.div>

              <motion.div 
                className="mt-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="mr-2 text-sm font-medium text-gray-400">Availability:</span>
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
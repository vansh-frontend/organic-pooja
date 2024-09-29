import PropTypes from 'prop-types';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductModal = ({ product, onClose }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-4xl overflow-hidden bg-white shadow-2xl rounded-xl"
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute z-10 text-gray-400 transition-colors duration-200 top-4 right-4 hover:text-gray-600"
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
              className="relative w-full bg-gray-100 md:w-1/2"
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
                  <div className="w-10 h-10 border-4 border-blue-500 rounded-full border-t-transparent animate-spin"></div>
                </div>
              )}
            </motion.div>

            {/* Product Details */}
            <motion.div 
              className="flex flex-col w-full p-6 md:w-1/2 md:p-8"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.h3 
                className="mb-2 text-3xl font-bold text-gray-800"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {product.name}
              </motion.h3>
              <motion.p 
                className="mb-4 text-2xl font-semibold text-blue-600"
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                {product.price}
              </motion.p>

              <motion.div 
                className="p-4 mb-6 bg-gray-100 rounded-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <h4 className="mb-2 text-lg font-semibold text-gray-700">Product Description</h4>
                <p className="leading-relaxed text-gray-600">
                  {product.description || "This is a detailed description of the product. You can add more information about the product's features, usage, and benefits here. Keep it concise but informative to enhance the user experience."}
                </p>
              </motion.div>

              <motion.div 
                className="mt-auto"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex items-center">
                  <span className="mr-2 text-sm font-medium text-gray-500">Availability:</span>
                  <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">In Stock</span>
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
};

export default ProductModal;
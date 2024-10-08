import PropTypes from 'prop-types';
import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomAlert = ({ message, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  >
    <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
      <p className="mb-4 text-lg text-purple-300">{message}</p>
      <button
        onClick={onClose}
        className="px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-purple-600 rounded hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        Close
      </button>
    </div>
  </motion.div>
);

const ProductCard = memo(({ product, onAddToCart, onMoreDetails }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product);
    setShowAlert(true);
  };

  return (
    <>
      <motion.div
        className="overflow-hidden transition-all duration-300 bg-gray-900 border border-purple-500 rounded-lg shadow-md hover:shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative">
          <motion.img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-60"
            loading="lazy"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute px-2 py-1 text-xs font-medium text-green-300 bg-green-900 rounded-full top-2 right-2">
            In Stock
          </div>
        </div>
        <div className="p-4">
          <h3 className="mb-2 text-lg font-semibold text-purple-300 line-clamp-2">{product.name}</h3>
          <p className="mb-4 text-xl font-bold text-gray-300">{product.price}</p>
          <div className="flex space-x-2">
            <motion.button
              onClick={() => onMoreDetails(product)}
              className="flex-1 px-4 py-2 text-sm font-medium text-purple-200 transition-colors duration-200 bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              More Details
            </motion.button>
            <motion.button
    onClick={handleAddToCart}
    className="flex-1 px-4 py-2 text-sm font-medium text-white transition-all duration-200 bg-transparent border border-purple-400 border-opacity-50 rounded backdrop-blur-sm hover:bg-white hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    Add to Cart
  </motion.button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showAlert && (
          <CustomAlert
            message={`Your ${product.name} has been added to the cart!`}
            onClose={() => setShowAlert(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
});

ProductCard.displayName = 'ProductCard';

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  onMoreDetails: PropTypes.func.isRequired,
};

export default ProductCard;
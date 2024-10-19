import PropTypes from 'prop-types';
import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomAlert = ({ message, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 backdrop-blur-sm"
  >
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
      <p className="mb-4 text-lg font-medium text-gray-800">{message}</p>
      <button
        onClick={onClose}
        className="px-4 py-2 text-sm font-medium tracking-wider text-white transition-colors duration-200 bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
      >
        CLOSE
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
        className="flex flex-col h-full overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-sm hover:shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative flex-shrink-0">
          <motion.img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-48 sm:h-56"
            loading="lazy"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute px-2 py-1 text-xs font-medium tracking-wider text-white bg-gray-800 rounded-full top-2 right-2">
            IN STOCK
          </div>
        </div>
        <div className="flex flex-col flex-grow p-4">
          <h3 className="mb-2 text-base font-medium tracking-wide text-gray-800 line-clamp-2 sm:text-lg">{product.name}</h3>
          <p className="mt-auto mb-4 text-xl font-semibold text-gray-800">{product.price}</p>
          <div className="flex space-x-2">
            <motion.button
              onClick={() => onMoreDetails(product)}
              className="flex-1 px-3 py-1.5 text-xs font-medium tracking-wider text-gray-800 transition-colors duration-200 bg-transparent border border-gray-300 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 sm:text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              MORE DETAILS
            </motion.button>
            <motion.button
              onClick={handleAddToCart}
              className="flex-1 px-3 py-1.5 text-xs font-medium tracking-wider text-white transition-all duration-200 bg-gray-800 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 sm:text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              ADD TO CART
            </motion.button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showAlert && (
          <CustomAlert
            message={`${product.name} has been added to your cart.`}
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
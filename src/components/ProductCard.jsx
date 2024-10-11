import PropTypes from 'prop-types';
import { memo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CustomAlert = ({ message, onClose }) => (
  <motion.div
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -50 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
  >
    <div className="p-6 bg-black border rounded-lg shadow-lg bg-opacity-80 border-white/20">
      <p className="mb-4 text-lg font-light text-white">{message}</p>
      <button
        onClick={onClose}
        className="px-4 py-2 text-sm font-light tracking-wider text-black transition-colors duration-200 bg-white rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white"
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
        className="flex flex-col h-full overflow-hidden transition-all duration-300 bg-black bg-opacity-50 rounded-lg shadow-md backdrop-filter backdrop-blur-sm hover:shadow-lg"
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
          <div className="absolute px-2 py-1 text-xs font-light tracking-wider text-black bg-white rounded-full top-2 right-2">
            IN STOCK
          </div>
        </div>
        <div className="flex flex-col flex-grow p-4">
          <h3 className="mb-2 text-base font-light tracking-wide text-white line-clamp-2 sm:text-lg">{product.name}</h3>
          <p className="mt-auto mb-4 text-xl font-light text-white">{product.price}</p>
          <div className="flex space-x-2">
            <motion.button
              onClick={() => onMoreDetails(product)}
              className="flex-1 px-3 py-1.5 text-xs font-light tracking-wider text-white transition-colors duration-200 bg-transparent border border-white rounded hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white sm:text-sm"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              MORE DETAILS
            </motion.button>
            <motion.button
              onClick={handleAddToCart}
              className="flex-1 px-3 py-1.5 text-xs font-light tracking-wider text-black transition-all duration-200 bg-white rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white sm:text-sm"
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
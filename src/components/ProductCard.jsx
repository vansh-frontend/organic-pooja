import PropTypes from 'prop-types';
import { memo } from 'react';
import { motion } from 'framer-motion';

const ProductCard = memo(({ product, onAddToCart, onMoreDetails }) => {
  const handleAddToCart = () => {
    alert(`Your ${product.name} has been added to the cart!`);
    onAddToCart(product);
  };

  return (
    <motion.div
      className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg"
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
        <div className="absolute px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded-full top-2 right-2">
          In Stock
        </div>
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold text-gray-800 line-clamp-2">{product.name}</h3>
        <p className="mb-4 text-xl font-bold text-gray-900">{product.price}</p>
        <div className="flex space-x-2">
          <motion.button
            onClick={() => onMoreDetails(product)}
            className="flex-1 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 bg-gray-100 rounded hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            More Details
          </motion.button>
          <motion.button
            onClick={handleAddToCart}
            className="flex-1 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
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
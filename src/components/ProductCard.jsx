import PropTypes from 'prop-types';
import { memo } from 'react';

const ProductCard = memo(({ product, onAddToCart, onMoreDetails }) => {
  const handleAddToCart = () => {
    alert(`Your ${product.name} has been added to the cart!`);
    onAddToCart(product);
  };

  return (
    <div className="overflow-hidden transition-transform transform bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl hover:scale-105">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-56 sm:h-64 md:h-72"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out bg-black opacity-0 bg-opacity-40 hover:opacity-90">
          <div className="p-6 text-center text-white">
            <h3 className="text-xl font-bold">{product.name}</h3>
            <button
              className="px-4 py-2 mt-4 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onClick={() => onMoreDetails(product)} // Call the passed function when clicked
            >
              More Details
            </button>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
          <p className="text-gray-600 text-md">{product.price}</p>
          <div className="flex items-center justify-between mt-4">
            <span className="text-sm font-medium text-green-500">In Stock</span>
            <button
              onClick={handleAddToCart}
              className="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
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
  onMoreDetails: PropTypes.func.isRequired, // New prop for handling the "More Details" click
};

export default ProductCard;

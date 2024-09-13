import PropTypes from 'prop-types';
import { memo } from 'react';

const ProductCard = memo(({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    alert(`Your ${product.name} has been added to the cart!`);
    onAddToCart(product);
  };

  return (
    <div className="overflow-hidden transition-transform duration-300 ease-in-out bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-48 md:h-56 lg:h-64"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out bg-black opacity-0 bg-opacity-40 hover:opacity-100">
          <div className="p-4 text-center text-white">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="font-medium text-md">{product.price}</p>
            <button
              className="px-5 py-2 mt-2 text-sm font-semibold text-white rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:shadow-xl active:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            >
              More Details
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="md:w-3/4">
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.price}</p>
          </div>
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 text-sm font-semibold text-gray-800 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            Add to Cart
          </button>
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
};

export default ProductCard;

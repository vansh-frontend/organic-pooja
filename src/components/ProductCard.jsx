import PropTypes from 'prop-types';
import { memo } from 'react';

const ProductCard = memo(({ product, onAddToCart }) => {
  return (
    <div className="overflow-hidden transition-transform duration-300 ease-in-out transform bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-56 md:h-64"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out bg-black bg-opacity-50 opacity-0 hover:opacity-100">
          <div className="p-4 text-center text-white">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="font-medium text-md">{product.price}</p>
            <button
  onClick={() => onAddToCart(product)}
  className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 transition-transform transform bg-white rounded-lg shadow-md hover:scale-105 active:scale-95 hover:shadow-lg active:shadow-sm"
>
  Add to Cart
</button>

          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.price}</p>
          </div>
          <button
  onClick={() => onAddToCart(product)}
  className="px-4 py-2 text-sm font-semibold text-gray-800 transition-transform transform bg-gray-100 rounded-lg shadow-md hover:-translate-y-2 active:translate-y-1 active:shadow-sm"
>
  Add to Cart
</button>

        </div>
      </div>
    </div>
  );
});

// Add a display name
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

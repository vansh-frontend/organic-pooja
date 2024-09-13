import PropTypes from 'prop-types';
import { useCallback } from 'react';

const Cart = ({ cartItems, updateQuantity, removeFromCart, onBuyNow }) => {
  const handleQuantityChange = useCallback(
    (product, quantity) => {
      if (quantity <= 0) {
        removeFromCart(product);
      } else {
        updateQuantity(product, quantity);
      }
    },
    [updateQuantity, removeFromCart]
  );

  const handleRemoveItem = (product) => {
    removeFromCart(product);
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-6 text-3xl font-bold text-gray-800">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col transition-transform duration-300 ease-in-out bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-48 sm:h-56 md:h-64"
                loading="lazy"
              />
              <div className="flex flex-col flex-grow p-4">
                <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                <p className="mt-1 text-lg text-gray-700">{item.price}</p>
                <div className="flex items-center mt-4 space-x-2">
                  <button
                    onClick={() => handleQuantityChange(item, item.quantity - 1)}
                    className="px-3 py-1 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                  >
                    -
                  </button>
                  <span className="px-4 py-2 text-lg font-medium bg-gray-200 rounded">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(item, item.quantity + 1)}
                    className="px-3 py-1 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600"
                  >
                    +
                  </button>
                </div>
                <div className="flex flex-col mt-4 space-y-2 sm:space-y-0 sm:flex-row sm:justify-between">
                  <p className="text-lg font-semibold text-gray-900">
                    ${(parseFloat(item.price.slice(1)) * item.quantity).toFixed(2)}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:space-x-2">
                    <button
                      onClick={() => handleRemoveItem(item)}
                      className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-lg hover:bg-red-600"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => onBuyNow(item)}
                      className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 sm:mt-0"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
    })
  ).isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  onBuyNow: PropTypes.func.isRequired,
};

export default Cart;

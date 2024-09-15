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
    <div className="container px-4 py-8 mx-auto max-w-7xl">
      <h2 className="mb-8 text-3xl font-bold text-gray-900">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-500">Your cart is empty. Start shopping to fill it up!</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md sm:flex-row"
            >
              <div className="relative w-full h-48 overflow-hidden sm:w-48 sm:h-32">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full h-full rounded-t-lg sm:rounded-l-lg"
                  loading="lazy"
                />
              </div>
              <div className="flex-1 p-4">
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                <p className="mb-2 text-gray-600 text-md">{item.price}</p>
                <div className="flex items-center mb-4 space-x-2">
                  <button
                    onClick={() => handleQuantityChange(item, item.quantity - 1)}
                    className="flex items-center justify-center w-8 h-8 text-xl text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700"
                  >
                    -
                  </button>
                  <span className="flex items-center justify-center w-16 h-8 text-base font-medium bg-gray-100 border border-gray-300 rounded-lg">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(item, item.quantity + 1)}
                    className="flex items-center justify-center w-8 h-8 text-xl text-white transition-colors bg-blue-600 rounded-full hover:bg-blue-700"
                  >
                    +
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-semibold text-gray-900">
                    ${(parseFloat(item.price.slice(1)) * item.quantity).toFixed(2)}
                  </p>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleRemoveItem(item)}
                      className="px-4 py-2 text-sm font-medium text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700"
                    >
                      Remove
                    </button>
                    <button
                      onClick={() => onBuyNow(item)}
                      className="px-4 py-2 text-sm font-medium text-gray-800 transition-colors bg-gray-200 rounded-lg hover:bg-gray-300"
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

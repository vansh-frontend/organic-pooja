import PropTypes from 'prop-types';
import { useCallback } from 'react';

const Cart = ({ cartItems, updateQuantity, removeFromCart }) => {
  // Memoize the quantity change handler to avoid unnecessary re-renders
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

  // Handle item removal from cart
  const handleRemoveItem = (product) => {
    removeFromCart(product);
  };

  return (
    <div className="container px-4 py-8 mx-auto">
      <h2 className="mb-6 text-2xl font-semibold">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-24 h-24 rounded-md"
                  loading="lazy"
                />
                <div className="flex flex-col">
                  <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleQuantityChange(item, item.quantity - 1)}
                      className="px-3 py-1 text-xl font-bold text-white bg-gray-700 rounded-l hover:bg-gray-800"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 text-lg font-medium bg-gray-200 rounded-tl rounded-bl">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item, item.quantity + 1)}
                      className="px-3 py-1 text-xl font-bold text-white bg-gray-700 rounded-r hover:bg-gray-800"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <p className="text-lg font-semibold text-gray-900">
                  ${(parseFloat(item.price.slice(1)) * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => handleRemoveItem(item)}
                  className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700"
                >
                  Remove
                </button>
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
};

export default Cart;

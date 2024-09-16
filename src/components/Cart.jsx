import PropTypes from 'prop-types';
import { useCallback } from 'react';

const Cart = ({ cartItems, updateQuantity, removeFromCart, onBuyNow }) => {
  const handleQuantityChange = useCallback(
    (product, newQuantity) => {
      if (newQuantity <= 0) {
        removeFromCart(product);
      } else {
        updateQuantity(product, newQuantity);
      }
    },
    [updateQuantity, removeFromCart]
  );

  const handleRemoveItem = (product) => {
    removeFromCart(product);
  };

  return (
    <div className="container max-w-full px-4 py-8 mx-auto sm:max-w-7xl">
      {/* Cart Title */}
      <h2 className="mb-8 text-2xl font-bold text-gray-900 md:text-3xl lg:text-4xl">
        Your Shopping Cart
      </h2>
      {cartItems.length === 0 ? (
        <p className="text-lg text-gray-500">
          Your cart is empty. Start shopping to fill it up!
        </p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => {
            const basePrice = parseFloat(item.price.slice(1)); // Remove "$" and parse price as float
            const totalPrice = (basePrice * item.quantity).toFixed(2); // Multiply by quantity and format

            return (
              <div
                key={item.id}
                className="flex flex-col overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md sm:flex-row sm:h-auto lg:h-48"
              >
                {/* Responsive image container */}
                <div className="relative w-full h-48 sm:w-64 md:w-56 lg:w-64 xl:w-80 sm:h-48 lg:h-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full rounded-t-lg sm:rounded-l-lg"
                    loading="lazy"
                  />
                </div>

                {/* Responsive item description */}
                <div className="flex-1 p-4 text-sm sm:text-base md:text-md">
                  <h3 className="text-lg font-semibold text-gray-800 md:text-xl lg:text-2xl">
                    {item.name}
                  </h3>
                  <p className="mb-2 text-gray-600 md:text-lg lg:text-xl">
                    {item.price}
                  </p>
                  <div className="mb-4">
                    <label
                      htmlFor={`quantity-${item.id}`}
                      className="mr-2 text-gray-700"
                    >
                      Quantity:
                    </label>
                    <select
                      id={`quantity-${item.id}`}
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item, parseInt(e.target.value, 10))
                      }
                      className="p-2 border border-gray-300 rounded-lg"
                    >
                      {[...Array(10).keys()].map((n) => (
                        <option key={n + 1} value={n + 1}>
                          {n + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold text-gray-900 lg:text-xl">
                      ${totalPrice}
                    </p>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleRemoveItem(item)}
                        className="px-4 py-2 text-xs font-medium text-white transition-colors bg-red-600 rounded-lg sm:text-sm hover:bg-red-700"
                      >
                        Remove
                      </button>
                      <button
                        onClick={() => onBuyNow(item)}
                        className="px-4 py-2 text-xs font-medium text-gray-800 transition-colors bg-gray-200 rounded-lg sm:text-sm hover:bg-gray-300"
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
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

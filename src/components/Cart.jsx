import PropTypes from 'prop-types';
import { useCallback, useState, useEffect } from 'react';
import { FaTrash, FaShoppingCart, FaMinus, FaPlus, FaArrowRight, FaTruck, FaPercent, FaCreditCard, FaInfoCircle, FaBox, FaMoneyBillWave } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = ({ cartItems, updateQuantity, removeFromCart, onBuyNow }) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    address: '',
  });

  const handleQuantityChange = useCallback(
    (product, newQuantity) => {
      if (newQuantity <= 0) {
        removeFromCart(product);
        toast.info(`${product.name} removed from cart`);
      } else {
        updateQuantity(product, newQuantity);
        toast.success(`${product.name} quantity updated`);
      }
    },
    [updateQuantity, removeFromCart]
  );

  const subtotal = cartItems.reduce(
    (total, item) => total + parseFloat(item.price.slice(1)) * item.quantity,
    0
  );

  const tax = subtotal * 0.1;
  const shippingCost = shippingMethod === 'express' ? 20 : 10;
  const discount = appliedCoupon ? subtotal * appliedCoupon.discountPercentage : 0;
  const total = subtotal + tax + shippingCost - discount;

  const applyCoupon = () => {
    if (couponCode === 'SAVE10') {
      setAppliedCoupon({ code: 'SAVE10', discountPercentage: 0.1 });
      toast.success('Coupon applied successfully!');
    } else if (couponCode === 'SAVE20') {
      setAppliedCoupon({ code: 'SAVE20', discountPercentage: 0.2 });
      toast.success('Coupon applied successfully!');
    } else {
      toast.error('Invalid coupon code');
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    toast.info('Coupon removed');
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    setIsCheckingOut(true);
  };

  const handlePlaceOrder = () => {
    if (!customerInfo.name || !customerInfo.email || !customerInfo.address) {
      toast.error('Please fill in all customer information');
      return;
    }
    // Here you would typically send the order to a backend service
    toast.success('Order placed successfully!');
    onBuyNow(cartItems);
    setIsCheckingOut(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-12 bg-gradient-to-b from-gray-100 to-gray-200"
    >
      <div className="container px-4 mx-auto max-w-7xl">
        <h1 className="mb-8 text-4xl font-bold text-center text-gray-800">Your Shopping Cart</h1>
        
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        
        {cartItems.length === 0 ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-12 text-center bg-white shadow-lg rounded-2xl"
          >
            <FaShoppingCart className="mx-auto mb-6 text-gray-300 text-8xl animate-bounce" />
            <p className="mb-8 text-2xl text-gray-600">Your cart is empty. Start shopping to fill it up!</p>
            <button className="px-8 py-4 text-lg font-semibold text-white transition-colors bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              Continue Shopping
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-2">
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden transition-shadow duration-300 bg-white shadow-md rounded-2xl hover:shadow-lg"
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="sm:w-1/3">
                        <img src={item.image} alt={item.name} className="object-cover w-full h-48 sm:h-full" />
                      </div>
                      <div className="flex-1 p-6">
                        <h3 className="mb-2 text-xl font-semibold text-gray-800">{item.name}</h3>
                        <p className="mb-4 text-2xl font-bold text-indigo-600">{item.price}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center overflow-hidden border rounded-lg">
                            <button
                              onClick={() => handleQuantityChange(item, item.quantity - 1)}
                              className="px-3 py-1 transition-colors bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                            >
                              <FaMinus />
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item, parseInt(e.target.value, 10))}
                              className="w-16 text-center border-l border-r focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                            />
                            <button
                              onClick={() => handleQuantityChange(item, item.quantity + 1)}
                              className="px-3 py-1 transition-colors bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-inset"
                            >
                              <FaPlus />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item)}
                            className="p-2 text-red-600 transition-colors bg-red-100 rounded-full hover:bg-red-200 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="p-6 bg-white shadow-md rounded-2xl"
              >
                <h3 className="flex items-center mb-4 text-xl font-semibold">
                  <FaPercent className="mr-2 text-indigo-600" /> Apply Coupon
                </h3>
                {appliedCoupon ? (
                  <div className="flex items-center justify-between p-3 bg-green-100 rounded-lg">
                    <span className="text-green-700">Coupon {appliedCoupon.code} applied</span>
                    <button
                      onClick={removeCoupon}
                      className="px-3 py-1 text-red-600 transition-colors bg-red-100 rounded-full hover:bg-red-200 hover:text-red-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="flex">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter coupon code"
                      className="flex-grow p-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                      onClick={applyCoupon}
                      className="px-4 py-2 text-white transition-colors bg-indigo-600 rounded-r-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Apply
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="lg:col-span-1"
            >
              <div className="sticky p-6 bg-white shadow-md rounded-2xl top-6">
                <h3 className="mb-6 text-2xl font-semibold">Order Summary</h3>
                <div className="mb-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <select
                      value={shippingMethod}
                      onChange={(e) => setShippingMethod(e.target.value)}
                      className="p-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option value="standard">Standard - $10</option>
                      <option value="express">Express - $20</option>
                    </select>
                  </div>
                  {appliedCoupon && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                </div>
                <div className="pt-4 mb-6 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold">Total</span>
                    <span className="text-2xl font-bold text-indigo-600">${total.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  onClick={handleCheckout}
                  className="flex items-center justify-center w-full px-6 py-3 text-lg font-semibold text-white transition-colors bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <FaCreditCard className="mr-2" /> Proceed to Checkout
                </button>
              </div>
            </motion.div>
          </div>
        )}
        
        <AnimatePresence>
          {isCheckingOut && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="p-8 bg-white rounded-lg w-96"
              >
                <h2 className="mb-4 text-2xl font-bold">Checkout</h2>
                <input
                  type="text"
                  placeholder="Full Name"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                  className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                  className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <textarea
                  placeholder="Shipping Address"
                  value={customerInfo.address}
                  onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                  className="w-full p-2 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
                <div className="flex justify-between">
                  <button
                    onClick={() => setIsCheckingOut(false)}
                    className="px-4 py-2 text-gray-600 transition-colors bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handlePlaceOrder}
                    className="px-4 py-2 text-white transition-colors bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Place Order
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
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
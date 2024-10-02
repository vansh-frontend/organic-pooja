import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
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
      className="min-h-screen py-6 sm:py-12 bg-gradient-to-b from-gray-100 to-gray-200"
    >
      <div className="container px-4 mx-auto max-w-7xl">
        <h1 className="mb-6 text-2xl font-bold text-center text-gray-800 sm:mb-8 sm:text-4xl">Your Shopping Cart</h1>
        
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
        
        {cartItems.length === 0 ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-6 text-center bg-white shadow-lg sm:p-12 rounded-2xl"
          >
            <FaShoppingCart className="mx-auto mb-4 text-6xl text-gray-300 sm:mb-6 sm:text-8xl animate-bounce" />
            <p className="mb-6 text-xl text-gray-600 sm:mb-8 sm:text-2xl">Your cart is empty. Start shopping to fill it up!</p>
            <button className="w-full px-6 py-3 text-base font-semibold text-white transition-colors bg-indigo-600 rounded-full sm:w-auto sm:px-8 sm:py-4 sm:text-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <FaArrowRight className="inline-block mr-2" /> Continue Shopping
            </button>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 gap-6 lg:gap-8 lg:grid-cols-3">
            <div className="space-y-4 sm:space-y-6 lg:col-span-2">
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
                      <div className="w-full sm:w-1/3">
                        <img src={item.image} alt={item.name} className="object-cover w-full h-48 sm:h-full" />
                      </div>
                      <div className="flex-1 p-4 sm:p-6">
                        <h3 className="mb-2 text-lg font-semibold text-gray-800 sm:text-xl">{item.name}</h3>
                        <p className="mb-4 text-xl font-bold text-indigo-600 sm:text-2xl">
                          <FaMoneyBillWave className="inline-block mr-2" />
                          {item.price}
                        </p>
                        <div className="flex flex-col items-center justify-between sm:flex-row">
                          <div className="flex items-center mb-4 overflow-hidden border rounded-lg sm:mb-0">
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
                className="p-4 bg-white shadow-md sm:p-6 rounded-2xl"
              >
                <h3 className="flex items-center mb-4 text-lg font-semibold sm:text-xl">
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
                  <div className="flex flex-col sm:flex-row">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter coupon code"
                      className="flex-grow p-2 mb-2 border border-gray-300 rounded-lg sm:mb-0 sm:mr-2 sm:rounded-l-lg sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                    <button
                      onClick={applyCoupon}
                      className="px-4 py-2 text-white transition-colors bg-indigo-600 rounded-lg sm:rounded-l-none sm:rounded-r-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
              <div className="sticky p-4 bg-white shadow-md sm:p-6 rounded-2xl top-6">
                <h3 className="mb-4 text-xl font-semibold sm:mb-6 sm:text-2xl">Order Summary</h3>
                <div className="mb-4 space-y-3 sm:mb-6 sm:space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600"><FaBox className="inline-block mr-2" /> Subtotal</span>
                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600"><FaMoneyBillWave className="inline-block mr-2" /> Tax</span>
                    <span className="font-semibold">${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600"><FaTruck className="inline-block mr-2" /> Shipping</span>
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
                      <span><FaPercent className="inline-block mr-2" /> Discount</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                </div>
                <div className="pt-4 mb-4 border-t sm:mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold sm:text-xl">Total</span>
                    <span className="text-xl font-bold text-indigo-600 sm:text-2xl">${total.toFixed(2)}</span>
                  </div>
                </div>
                <button
                  onClick={handleCheckout}
                  className="flex items-center justify-center w-full px-4 py-2 text-base font-semibold text-white transition-colors bg-indigo-600 rounded-full sm:px-6 sm:py-3 sm:text-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="w-full max-w-md p-6 bg-white rounded-lg sm:p-8"
              >
                <h2 className="mb-4 text-xl font-bold sm:text-2xl">Checkout</h2>
                <div className="mb-4">
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    <FaInfoCircle className="inline-block mr-2" /> Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="your name"
                    value={customerInfo.name}
                    onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      <FaInfoCircle className="inline-block mr-2" /> Email
                    </label>
                    <input
                      type="email"
                      placeholder="email@example.com"
                      value={customerInfo.email}
                      onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      <FaInfoCircle className="inline-block mr-2" /> Shipping Address
                    </label>
                    <textarea
                      placeholder="#123 address, City, Country"
                      value={customerInfo.address}
                      onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      rows="3"
                    ></textarea>
                  </div>
                  <div className="flex flex-col justify-between sm:flex-row">
                    <button
                      onClick={() => setIsCheckingOut(false)}
                      className="w-full px-4 py-2 mb-2 text-gray-600 transition-colors bg-gray-200 rounded sm:w-auto sm:mb-0 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handlePlaceOrder}
                      className="w-full px-4 py-2 text-white transition-colors bg-indigo-600 rounded sm:w-auto hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
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
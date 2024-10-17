import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash, FaShoppingCart, FaMinus, FaPlus, FaArrowRight, FaPercent, FaCheckCircle } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion, AnimatePresence } from 'framer-motion';

const Cart = ({ cartItems, updateQuantity, removeFromCart, clearCart }) => {
  const navigate = useNavigate();
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    address: '',
    phoneNo: '',
    pincode: '',
  });

  useEffect(() => {
    const savedInfo = localStorage.getItem('customerInfo');
    if (savedInfo) {
      setCustomerInfo(JSON.parse(savedInfo));
    }
  }, []);

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
 
  const isCouponValid = (coupon, currentSubtotal) => {
    switch (coupon.code) {
      case 'SAVE150':
        return currentSubtotal >= 500 && currentSubtotal <= 1999;
      case 'SAVE400':
        return currentSubtotal >= 1999;
      default:
        return false;
    }
  };

  useEffect(() => {
    if (appliedCoupon && !isCouponValid(appliedCoupon, subtotal)) {
      setAppliedCoupon(null);
      toast.info(`Coupon ${appliedCoupon.code} has been removed as it's no longer valid for your current order total.`);
    }
  }, [cartItems, subtotal, appliedCoupon]);

  const applyCoupon = () => {
    const coupon = { code: couponCode, discountAmount: 0 };
    switch (couponCode) {
      case 'SAVE150':
        coupon.discountAmount = 150;
        break;
      case 'SAVE400':
        coupon.discountAmount = 400;
        break;
      default:
        toast.error('Invalid coupon code');
        return;
    }

    if (isCouponValid(coupon, subtotal)) {
      setAppliedCoupon(coupon);
      toast.success(`₹${coupon.discountAmount} discount applied successfully!`);
    } else {
      toast.error('This coupon is not valid for your current order total.');
    }
  };

  const removeCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    toast.info('Coupon removed');
  };

  const discount = appliedCoupon ? appliedCoupon.discountAmount : 0;
  const total = subtotal - discount;

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast.error('Your cosmic cart is empty');
      return;
    }
    setIsCheckingOut(true);
  };

  const cancelOrder = () => {
    setIsCheckingOut(false);
    setOrderPlaced(false);
    setOrderId(null);
    toast.info('Mission aborted');
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newOrderId = Math.floor(100000 + Math.random() * 900000);

    const newOrder = {
      id: newOrderId,
      date: new Date().toISOString(),
      status: 'Launching',
      items: cartItems,
      total: total,
      customerInfo: customerInfo,
    };

    localStorage.setItem('customerInfo', JSON.stringify(customerInfo));
    localStorage.setItem('orders', JSON.stringify([...JSON.parse(localStorage.getItem('orders') || '[]'), newOrder]));

    setOrderPlaced(true);
    setOrderId(newOrderId);
    clearCart();
    toast.success('Order placed successfully!');
  };

  if (orderPlaced) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen py-12 bg-black"
      >
        <div className="container max-w-3xl px-4 mx-auto">
          <div className="p-8 bg-black bg-opacity-50 border border-white rounded-lg backdrop-filter backdrop-blur-sm">
            <FaCheckCircle className="mx-auto mb-6 text-6xl text-green-500" />
            <h2 className="mb-4 text-3xl font-light text-center text-white">Order Confirmed!</h2>
            <p className="mb-6 text-xl text-center text-gray-300">Thank you for your purchase. Your order ID is: {orderId}</p>
            <div className="flex justify-center">
              <button
                onClick={() => navigate('/products')}
                className="px-6 py-3 text-base font-light text-black transition-colors bg-white rounded-full hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-6 bg-black sm:py-12"
    >
      <div className="container px-4 mx-auto max-w-7xl">
        <h1 className="mb-6 text-2xl font-light text-center text-white sm:mb-8 sm:text-4xl">Your Cart</h1>
        
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    
        {cartItems.length === 0 ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-6 text-center bg-black bg-opacity-50 border border-white rounded-lg backdrop-filter backdrop-blur-sm sm:p-12"
          >
            <FaShoppingCart className="mx-auto mb-4 text-6xl text-white sm:mb-6 sm:text-8xl animate-bounce" />
            <p className="mb-6 text-xl text-gray-300 sm:mb-8 sm:text-2xl">Your cart is empty. Start exploring our products!</p>
            <button className="w-full px-6 py-3 text-base font-light text-black transition-colors bg-white rounded-full sm:w-auto sm:px-8 sm:py-4 sm:text-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">
              <FaArrowRight className="inline-block mr-2" />
              <Link to="/products">Continue Shopping</Link>
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
                    className="overflow-hidden transition-shadow duration-300 bg-black bg-opacity-50 border border-white rounded-lg backdrop-filter backdrop-blur-sm"
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="w-full sm:w-1/3">
                        <img src={item.image} alt={item.name} className="object-cover w-full h-48 sm:h-full" />
                      </div>
                      <div className="flex-1 p-4 sm:p-6">
                        <h3 className="mb-2 text-lg font-light text-white sm:text-xl">{item.name}</h3>
                        <p className="mb-4 text-xl font-light text-gray-300 sm:text-2xl">
                          {item.price}
                        </p>
                        <div className="flex flex-col items-center justify-between sm:flex-row">
                          <div className="flex items-center mb-4 overflow-hidden border border-white rounded-lg sm:mb-0">
                            <button
                              onClick={() => handleQuantityChange(item, item.quantity - 1)}
                              className="px-3 py-1 text-black transition-colors bg-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset"
                            >
                              <FaMinus className="text-black" />
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item, parseInt(e.target.value, 10))}
                              className="w-16 text-center text-white bg-black border-l border-r border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset"
                            />
                            <button
                              onClick={() => handleQuantityChange(item, item.quantity + 1)}
                              className="px-3 py-1 text-black transition-colors bg-white hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset"
                            >
                              <FaPlus className="text-black" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item)}
                            className="p-2 text-white transition-colors bg-red-600 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
    
              {/* Apply Coupon Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="p-4 bg-black bg-opacity-50 border border-white rounded-lg backdrop-filter backdrop-blur-sm sm:p-6"
              >
                <h3 className="flex items-center mb-4 text-lg font-light text-white sm:text-xl">
                  <FaPercent className="mr-2 text-white" /> Apply Coupon
                </h3>
                {appliedCoupon ? (
                  <div className="flex items-center justify-between p-3 bg-white rounded-lg bg-opacity-10">
                    <span className="text-gray-300">Coupon {appliedCoupon.code} applied</span>
                    <button
                      onClick={removeCoupon}
                      className="px-3 py-1 text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black"
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-between sm:flex-row">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="w-full px-3 py-2 mb-4 text-center text-white bg-black border border-white rounded-lg sm:w-auto sm:mb-0 sm:text-left focus:outline-none focus:ring-2 focus:ring-white focus:ring-inset"
                      placeholder="Enter coupon code"
                    />
                    <button
                      onClick={applyCoupon}
                      className="px-6 py-3 font-light text-black transition-colors bg-white rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                    >
                      Apply
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
    
            {/* Summary Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="p-6 border border-white rounded-lg bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm sm:p-8 flex flex-col h-[calc(100vh-200px)] sticky top-24"
            >
              <h2 className="mb-4 text-xl font-light text-white sm:text-2xl">Order Summary</h2>
              <div className="flex-grow mb-4 overflow-y-auto">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-lg font-light text-gray-300">
                    <span>Subtotal</span>
                    <span>₹{subtotal.toFixed(2)}</span>
                  </div>
                  {appliedCoupon && (
                    <div className="flex items-center justify-between text-lg font-light text-gray-300">
                      <span>Discount</span>
                      <span>-₹{discount.toFixed(2)}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="pt-4 border-t border-white">
                <div className="flex items-center justify-between mb-6 text-lg font-light text-white">
                  <span>Total</span>
                  <span>₹{total.toFixed(2)}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full px-6 py-3 text-base font-light text-black transition-colors bg-white rounded-full sm:text-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                >
                  Proceed to Checkout
                </button>
              </div>
            </motion.div>
          </div>
        )}
    
        {/* Checkout Form */}
        {isCheckingOut && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 mt-8 bg-black bg-opacity-50 border border-white rounded-lg backdrop-filter backdrop-blur-sm sm:p-8"
          >
            <h2 className="mb-6 text-2xl font-light text-white">Customer Information</h2>
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-gray-300">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                  className="block w-full px-4 py-3 mt-1 text-white bg-black border border-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
                  required
                />
              </div>
    
              <div>
                <label htmlFor="email" className="block text-sm font-light text-gray-300">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                  className="block w-full px-4 py-3 mt-1 text-white bg-black border border-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
                  required
                />
              </div>
    
              <div>
                <label htmlFor="phoneNo" className="block text-sm font-light text-gray-300">Phone Number</label>
                <input
                  type="tel"
                  id="phoneNo"
                  name="phoneNo"
                  value={customerInfo.phoneNo}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, phoneNo: e.target.value })}
                  className="block w-full px-4 py-3 mt-1 text-white bg-black border border-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
                  required
                />
              </div>
    
              <div>
                <label htmlFor="address" className="block text-sm font-light text-gray-300">Address</label>
                <textarea
                  id="address"
                  name="address"
                  value={customerInfo.address}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                  className="block w-full px-4 py-3 mt-1 text-white bg-black border border-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
                  required
                  rows="3"
                ></textarea>
              </div>
    
              <div>
                <label htmlFor="pincode" className="block text-sm font-light text-gray-300">Pincode</label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={customerInfo.pincode}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, pincode: e.target.value })}
                  className="block w-full px-4 py-3 mt-1 text-white bg-black border border-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
                  required
                />
              </div>
    
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={cancelOrder}
                  className="px-6 py-3 text-base font-light text-white transition duration-200 bg-black border border-white rounded-full sm:px-8 sm:py-4 sm:text-lg hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                >
                  Cancel Order
                </button>
                
                <button
                  type="submit"
                  className="px-6 py-3 text-base font-light text-black transition duration-200 bg-white rounded-full sm:px-8 sm:py-4 sm:text-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                >
                  Place Order
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  clearCart: PropTypes.func.isRequired,
};

export default Cart;
import React, { useCallback, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrash, FaShoppingCart, FaMinus, FaPlus, FaArrowRight, FaTruck, FaPercent, FaMoneyBillWave, FaCheckCircle } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';

const Cart = ({ cartItems, updateQuantity, removeFromCart, clearCart }) => {
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [shippingMethod, setShippingMethod] = useState('standard');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

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
  const tax = subtotal * 0.1;
  const shippingCost = shippingMethod === 'express' ? 20 : 10;
  const discount = appliedCoupon ? subtotal * appliedCoupon.discountPercentage : 0;
  const total = subtotal + tax + shippingCost - discount;

  const applyCoupon = () => {
    if (couponCode === 'SAVE10') {
      setAppliedCoupon({ code: 'SAVE10', discountPercentage: 0.1 });
      toast.success('Galactic coupon applied successfully!');
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

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newOrderId = Math.floor(100000 + Math.random() * 900000);
  
    const emailContent = `
  Cosmic Order Confirmation
  
  Thank you for your intergalactic order, ${customerInfo.name}!
  
  Order ID: ${newOrderId}
  
  Cosmic Traveler Information:
  Name: ${customerInfo.name}
  Email: ${customerInfo.email}
  Phone: ${customerInfo.phoneNo}
  Address: ${customerInfo.address}
  Pincode: ${customerInfo.pincode}
  Shipping Method: ${shippingMethod === 'express' ? 'Warp Speed Delivery' : 'Standard Interstellar Shipping'}
  
  Order Details:
  ${cartItems.map(item => `- ${item.name} - Quantity: ${item.quantity} - Price: ${item.price}`).join('\n')}
  
  Subtotal: $${subtotal.toFixed(2)}
  Space Tax: $${tax.toFixed(2)}
  Shipping: $${shippingCost.toFixed(2)}
  ${appliedCoupon ? `Galactic Discount: -$${discount.toFixed(2)}\n` : ''}
  Total: $${total.toFixed(2)}
    `.trim();
  
    formData.append("access_key", "2a83fafa-3cb5-48ba-9e38-48544d68b19c");
    formData.append("subject", `Cosmic Order Confirmation #${newOrderId}`);
    formData.append("from_name", "Galactic Organic Pooja");
    formData.append("message", emailContent);
  
    try {
      const response = await axios.post("https://api.web3forms.com/submit", formData);
  
      if (response.data.success) {
        const newOrder = {
          id: newOrderId,
          date: new Date().toISOString(),
          status: 'Launching',
          shippingMethod,
          total,
          items: cartItems,
          customerInfo
        };

        const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]');
        existingOrders.push(newOrder);
        localStorage.setItem('orders', JSON.stringify(existingOrders));

        setOrderId(newOrderId);
        setOrderPlaced(true);
        localStorage.setItem('customerInfo', JSON.stringify(customerInfo));
        clearCart();
        toast.success("Cosmic order launched successfully!");
        navigate('/orders');
      } else {
        toast.error("Failed to launch the order");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("An cosmic anomaly occurred while placing the order");
    }
  };

  if (orderPlaced) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen py-12 bg-gradient-to-b from-pink-50 to-purple-100"
      >
        <div className="container max-w-3xl px-4 mx-auto">
          <div className="p-8 bg-gray-800 shadow-lg rounded-2xl">
            <FaCheckCircle className="mx-auto mb-6 text-6xl text-green-500" />
            <h2 className="mb-4 text-3xl font-bold text-center text-purple-600">Cosmic Order Confirmed!</h2>
            <p className="mb-6 text-xl text-center text-purple-500">Thank you for your intergalactic purchase. Your order ID is: {orderId}</p>
            <div className="flex justify-center">
              <button
                onClick={() => navigate('/products')}
                className="px-6 py-3 text-base font-semibold text-white transition-colors bg-purple-600 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-pink-50"
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
      className="min-h-screen py-6 bg-[#050810] sm:py-12"
    >
      <div className="container px-4 mx-auto max-w-7xl">
        <h1 className="mb-6 text-2xl font-bold text-center text-purple-600 sm:mb-8 sm:text-4xl">Your Cosmic Cart</h1>
        
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
    
        {cartItems.length === 0 ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="p-6 text-center bg-gray-800 shadow-lg sm:p-12 rounded-2xl"
          >
            <FaShoppingCart className="mx-auto mb-4 text-6xl text-purple-500 sm:mb-6 sm:text-8xl animate-bounce" />
            <p className="mb-6 text-xl text-gray-4 00 sm:mb-8 sm:text-2xl">Your cosmic cart is empty. Start exploring the galaxy of products!</p>
            <button className="w-full px-6 py-3 text-base font-semibold text-white transition-colors bg-purple-600 rounded-full sm:w-auto sm:px-8 sm:py-4 sm:text-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-pink-50">
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
                    className="overflow-hidden transition-shadow duration-300 bg-gray-800 shadow-md rounded-2xl hover:shadow-lg hover:shadow-purple-200"
                  >
                    <div className="flex flex-col sm:flex-row">
                      <div className="w-full sm:w-1/3">
                        <img src={item.image} alt={item.name} className="object-cover w-full h-48 sm:h-full" />
                      </div>
                      <div className="flex-1 p-4 sm:p-6">
                        <h3 className="mb-2 text-lg font-semibold text-purple-600 sm:text-xl">{item.name}</h3>
                        <p className="mb-4 text-xl font-bold text-purple-500 sm:text-2xl">
                          <FaMoneyBillWave className="inline-block mr-2" />
                          {item.price}
                        </p>
                        <div className="flex flex-col items-center justify-between sm:flex-row">
                          <div className="flex items-center mb-4 overflow-hidden border border-purple-300 rounded-lg sm:mb-0">
                            <button
                              onClick={() => handleQuantityChange(item, item.quantity - 1)}
                              className="px-3 py-1 transition-colors bg-purple-100 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                            >
                              <FaMinus className="text-purple-600" />
                            </button>
                            <input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item, parseInt(e.target.value, 10))}
                              className="w-16 text-center text-purple-600 bg-gray-800 border-l border-r border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                            />
                            <button
                              onClick={() => handleQuantityChange(item, item.quantity + 1)}
                              className="px-3 py-1 transition-colors bg-purple-100 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                            >
                              <FaPlus className="text-purple-600" />
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item)}
                            className="p-2 text-red-500 transition-colors bg-red-100 rounded-full hover:bg-red-200 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-pink-50"
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
                className="p-4 bg-gray-800 shadow-md sm:p-6 rounded-2xl"
              >
                <h3 className="flex items-center mb-4 text-lg font-semibold text-purple-600 sm:text-xl">
                  <FaPercent className="mr-2 text-purple-500" /> Apply Galactic Coupon
                </h3>
                {appliedCoupon ? (
                  <div className="flex items-center justify-between p-3 bg-purple-100 rounded-lg">
                    <span className="text-purple-600">Coupon {appliedCoupon.code} applied</span>
                    <button
                      onClick={removeCoupon}
                      className="px-3 py-1 text-red-500 transition-colors bg-red-100 rounded-lg hover:bg-red-200 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-pink-50"
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
                      className="w-full px-3 py-2 mb-4 text-center text-purple-600 border border-purple-300 rounded-lg bg-purple-50 sm:w-auto sm:mb-0 sm:text-left focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset"
                      placeholder="Enter galactic coupon code"
                    />
                    <button
                      onClick={applyCoupon}
                      className="px-6 py-3 font-semibold text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-pink-50"
                    >
                      Apply
                    </button>
                  </div>
                )}
              </motion.div>
            </div>
    
            {/* Summary Section */}
         {/* Summary Section */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, delay: 0.4 }}
  className="p-6 bg-gray-800 shadow-md sm:p-8 rounded-2xl flex flex-col h-[calc(100vh-200px)] sticky top-24"
>
  <h2 className="mb-4 text-xl font-semibold text-purple-600 sm:text-2xl">Cosmic Order Summary</h2>
  <div className="flex-grow mb-4 overflow-y-auto">
    <div className="space-y-2">
      <div className="flex items-center justify-between text-lg font-medium text-purple-500">
        <span>Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex items-center justify-between text-lg font-medium text-purple-500">
        <span>Space Tax (10%)</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <div className="flex items-center justify-between text-lg font-medium text-purple-500">
        <span>Interstellar Shipping</span>
        <span>${shippingCost.toFixed(2)}</span>
      </div>
      {appliedCoupon && (
        <div className="flex items-center justify-between text-lg font-medium text-purple-500">
          <span>Galactic Discount</span>
          <span>-${discount.toFixed(2)}</span>
        </div>
      )}
    </div>
  </div>
  <div className="pt-4 border-t border-purple-200">
    <div className="flex items-center justify-between mb-6 text-lg font-bold text-purple-600">
      <span>Total</span>
      <span>${total.toFixed(2)}</span>
    </div>
    <button
      onClick={handleCheckout}
      className="w-full px-6 py-3 text-base font-semibold text-white transition-colors bg-purple-600 rounded-full sm:text-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-pink-50"
    >
      Proceed to Intergalactic Checkout
    </button>
  </div>x
</motion.div>
          </div>
        )}
    
        {/* Checkout Form */}
        {isCheckingOut && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 mt-8 bg-gray-800 shadow-md sm:p-8 rounded-2xl"
          >
            <h2 className="mb-6 text-2xl font-semibold text-purple-600">Cosmic Traveler Information</h2>
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-purple-500">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, name: e.target.value })}
                  className="block w-full px-4 py-3 mt-1 text-purple-600 border border-purple-300 rounded-lg shadow-sm bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
    
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-purple-500">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, email: e.target.value })}
                  className="block w-full px-4 py-3 mt-1 text-purple-600 border border-purple-300 rounded-lg shadow-sm bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
    
              <div>
                <label htmlFor="phoneNo" className="block text-sm font-medium text-purple-500">Intergalactic Communication Number</label>
                <input
                  type="tel"
                  id="phoneNo"
                  name="phoneNo"
                  value={customerInfo.phoneNo}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, phoneNo: e.target.value })}
                  className="block w-full px-4 py-3 mt-1 text-purple-600 border border-purple-300 rounded-lg shadow-sm bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
    
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-purple-500">Cosmic Address</label>
                <textarea
                  id="address"
                  name="address"
                  value={customerInfo.address}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, address: e.target.value })}
                  className="block w-full px-4 py-3 mt-1 text-purple-600 border border-purple-300 rounded-lg shadow-sm bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  required
                  rows="3"
                ></textarea>
              </div>
    
              <div>
                <label htmlFor="pincode" className="block text-sm font-medium text-purple-500">Galactic Sector Code</label>
                <input
                  type="text"
                  id="pincode"
                  name="pincode"
                  value={customerInfo.pincode}
                  onChange={(e) => setCustomerInfo({ ...customerInfo, pincode: e.target.value })}
                              className="block w-full px-4 py-3 mt-1 text-purple-600 border border-purple-300 rounded-lg shadow-sm bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                  required
                />
              </div>
    
              <div>
                <label htmlFor="shippingMethod" className="block text-sm font-medium text-purple-500">Interstellar Shipping Method</label>
                <select
                  id="shippingMethod"
                  name="shippingMethod"
                  value={shippingMethod}
                  onChange={(e) => setShippingMethod(e.target.value)}
                  className="block w-full px-4 py-3 mt-1 text-purple-600 border border-purple-300 rounded-lg shadow-sm bg-purple-50 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  <option value="standard">Standard Interstellar Shipping ($10)</option>
                  <option value="express">Warp Speed Delivery ($20)</option>
                </select>
              </div>
    
              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={cancelOrder}
                  className="w-full px-6 py-3 text-base font-semibold text-purple-600 transition duration-200 bg-purple-100 rounded-full sm:w-auto sm:px-8 sm:py-4 sm:text-lg hover:bg-purple-200 focus:outline-none"
                >
                  Abort Mission
                </button>
                
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-base font-semibold text-white transition duration-200 bg-purple-600 rounded-full sm:w-auto sm:px-8 sm:py-4 sm:text-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-pink-50"
                >
                  Launch Order
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
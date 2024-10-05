import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBox, FaTruck, FaCalendarAlt, FaMoneyBillWave } from 'react-icons/fa';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(storedOrders);
  }, []);

  if (orders.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="p-8 text-center bg-white rounded-lg shadow-md">
          <FaBox className="mx-auto mb-4 text-6xl text-gray-400" />
          <h2 className="mb-2 text-2xl font-semibold text-gray-800">No Orders Yet</h2>
          <p className="text-gray-600">You haven't placed any orders. Start shopping to see your orders here!</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-8 bg-gray-100"
    >
      <div className="container px-4 mx-auto max-w-7xl">
        <h1 className="mb-8 text-3xl font-bold text-center text-gray-800">Your Orders</h1>
        <div className="space-y-6">
          {orders.map((order) => (
            <motion.div
              key={order.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="p-6 bg-white rounded-lg shadow-md"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Order #{order.id}</h2>
                <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                  {order.status || 'Processing'}
                </span>
              </div>
              <div className="grid gap-4 mb-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2 text-indigo-600" />
                  <span className="text-gray-600">Order Date: {new Date(order.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <FaTruck className="mr-2 text-indigo-600" />
                  <span className="text-gray-600">Shipping: {order.shippingMethod}</span>
                </div>
                <div className="flex items-center">
                  <FaMoneyBillWave className="mr-2 text-indigo-600" />
                  <span className="text-gray-600">Total: ${order.total.toFixed(2)}</span>
                </div>
              </div>
              <div className="mt-4 border-t border-gray-200">
                <h3 className="mt-4 mb-2 text-lg font-semibold text-gray-800">Items</h3>
                <ul className="divide-y divide-gray-200">
                  {order.items.map((item) => (
                    <li key={item.id} className="py-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <img src={item.image} alt={item.name} className="w-16 h-16 mr-4 rounded-md" />
                          <div>
                            <h4 className="text-sm font-medium text-gray-800">{item.name}</h4>
                            <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                          </div>
                        </div>
                        <span className="text-sm font-medium text-gray-800">{item.price}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Orders;
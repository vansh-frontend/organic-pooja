import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBox, FaTruck, FaCalendarAlt, FaMoneyBillWave, FaSearch, FaFilter, FaDownload } from 'react-icons/fa';
import jsPDF from 'jspdf';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem('orders') || '[]');
    setOrders(storedOrders);
    filterAndSortOrders(storedOrders, searchTerm, statusFilter, sortBy, sortOrder);
  }, []);

  const filterAndSortOrders = (orderList, search, status, sort, order) => {
    let filtered = orderList;
    if (search) {
      filtered = filtered.filter(order => 
        order.id.toString().includes(search) || 
        order.items.some(item => item.name.toLowerCase().includes(search.toLowerCase()))
      );
    }
    if (status !== 'all') {
      filtered = filtered.filter(order => order.status === status);
    }
    filtered.sort((a, b) => {
      if (sort === 'date') {
        return order === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
      } else if (sort === 'total') {
        return order === 'asc' ? a.total - b.total : b.total - a.total;
      }
      return 0;
    });
    setFilteredOrders(filtered);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    filterAndSortOrders(orders, e.target.value, statusFilter, sortBy, sortOrder);
  };

  const handleStatusFilter = (status) => {
    setStatusFilter(status);
    filterAndSortOrders(orders, searchTerm, status, sortBy, sortOrder);
  };

  const handleSort = (sort) => {
    const newOrder = sort === sortBy && sortOrder === 'desc' ? 'asc' : 'desc';
    setSortBy(sort);
    setSortOrder(newOrder);
    filterAndSortOrders(orders, searchTerm, statusFilter, sort, newOrder);
  };

  const downloadOrderDetails = (order) => {
    const pdf = new jsPDF();
    
    // Set font size and style
    pdf.setFontSize(18);
    pdf.setFont("helvetica", "bold");
    pdf.text(`Order #${order.id}`, 20, 20);
    
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "normal");
    pdf.text(`Date: ${new Date(order.date).toLocaleDateString()}`, 20, 30);
    pdf.text(`Status: ${order.status}`, 20, 40);
    pdf.text(`Shipping: ${order.shippingMethod}`, 20, 50);
    pdf.text(`Total: $${order.total.toFixed(2)}`, 20, 60);
    
    pdf.setFont("helvetica", "bold");
    pdf.text("Items:", 20, 75);
    pdf.setFont("helvetica", "normal");
    
    let yPosition = 85;
    order.items.forEach((item, index) => {
      pdf.text(`${index + 1}. ${item.name} (Qty: ${item.quantity}) - $${item.price}`, 25, yPosition);
      yPosition += 10;
    });
    
    pdf.save(`order-${order.id}-details.pdf`);
  };

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
        
        {/* Search and Filter Section */}
        <div className="mb-6 space-y-4 md:space-y-0 md:flex md:items-center md:justify-between">
          <div className="relative">
            <input
              type="text"
              placeholder="Search orders..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <FaSearch className="absolute text-gray-400 transform -translate-y-1/2 left-3 top-1/2" />
          </div>
          <div className="flex items-center space-x-4">
            <select
              value={statusFilter}
              onChange={(e) => handleStatusFilter(e.target.value)}
              className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Statuses</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>
            <button
              onClick={() => handleSort('date')}
              className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sort by Date {sortBy === 'date' && (sortOrder === 'asc' ? '↑' : '↓')}
            </button>
            <button
              onClick={() => handleSort('total')}
              className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Sort by Total {sortBy === 'total' && (sortOrder === 'asc' ? '↑' : '↓')}
            </button>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {filteredOrders.map((order) => (
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
                <div className="flex items-center">
                  <button
                    onClick={() => downloadOrderDetails(order)}
                    className="flex items-center px-3 py-1 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full hover:bg-indigo-200"
                  >
                    <FaDownload className="mr-2" />
                    Download PDF
                  </button>
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
                        <span className="text-sm font-medium text-gray-800">${item.price}</span>
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
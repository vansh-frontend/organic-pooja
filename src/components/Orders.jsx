import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBox, FaTruck, FaCalendarAlt, FaMoneyBillWave, FaSearch, FaDownload } from 'react-icons/fa';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

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
    const pageWidth = pdf.internal.pageSize.width;
    const pageHeight = pdf.internal.pageSize.height;

    // Helper function to add a border to the page
    const addBorder = () => {
      pdf.setDrawColor(200);
      pdf.rect(10, 10, pageWidth - 20, pageHeight - 20);
    };

    // Add border
    addBorder();

    // Header
    pdf.setFontSize(24);
    pdf.setTextColor(44, 62, 80);
    pdf.setFont("helvetica", "bold");
    pdf.text("Organic by Pooja", 20, 30);
    
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(52, 73, 94);
    pdf.text("123 Green Street, Eco City, Nature State 12345", 20, 40);
    pdf.text("Phone: (555) 123-4567 | Email: info@organicbypooja.com", 20, 45);

    // Invoice details
    pdf.setFontSize(16);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(41, 128, 185);
    pdf.text("INVOICE", pageWidth - 20, 30, { align: "right" });
    
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(52, 73, 94);
    pdf.text(`Invoice #: ${order.id}`, pageWidth - 20, 40, { align: "right" });
    pdf.text(`Date: ${new Date(order.date).toLocaleDateString()}`, pageWidth - 20, 45, { align: "right" });

    // Billing details
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(44, 62, 80);
    pdf.text("Bill To:", 20, 60);
    
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(52, 73, 94);
    pdf.text("Customer Name", 20, 70);
    pdf.text("Customer Address", 20, 75);
    pdf.text("City, State, ZIP", 20, 80);

    // Order details
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(44, 62, 80);
    pdf.text("Order Details:", pageWidth - 90, 60);
    
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(52, 73, 94);
    pdf.text(`Order Date: ${new Date(order.date).toLocaleDateString()}`, pageWidth - 90, 70);
    pdf.text(`Status: ${order.status}`, pageWidth - 90, 75);
    pdf.text(`Shipping Method: ${order.shippingMethod}`, pageWidth - 90, 80);

    // Calculate totals
    const subtotal = order.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shippingCost = order.shippingCost || 0;
    const total = subtotal + shippingCost;

    // Items table
    pdf.autoTable({
      startY: 90,
      head: [['Item', 'Quantity', 'Price', 'Total']],
      body: order.items.map(item => [
        item.name,
        item.quantity,
        `₹${parseFloat(item.price).toFixed(2)}`,
        `₹${(item.quantity * parseFloat(item.price)).toFixed(2)}`
      ]),
      foot: [
        ['', '', 'Subtotal:', `₹${subtotal.toFixed(2)}`],
        ['', '', 'Shipping:', `₹${shippingCost.toFixed(2)}`],
        ['', '', 'Total:', `₹${total.toFixed(2)}`]
      ],
      theme: 'striped',
      headStyles: { fillColor: [41, 128, 185], textColor: 255, fontStyle: 'bold' },
      footStyles: { fillColor: [236, 240, 241], textColor: 44, fontStyle: 'bold' },
      bodyStyles: { textColor: 52 },
      alternateRowStyles: { fillColor: [245, 247, 250] },
    });

    // Thank you message
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "italic");
    pdf.setTextColor(52, 73, 94);
    const thankYouMessage = "Thank you for your order! We appreciate your business and hope you enjoy your organic products.";
    pdf.text(thankYouMessage, 20, pdf.autoTable.previous.finalY + 20, { maxWidth: pageWidth - 40 });

    // Footer
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8);
    pdf.setTextColor(127, 140, 141);
    pdf.text("Organic by Pooja | 123 Green Street, Eco City, Nature State 12345 | (555) 123-4567", pageWidth / 2, pageHeight - 15, { align: "center" });

    pdf.save(`organic-by-pooja-invoice-${order.id}.pdf`);
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
                  <span className="text-gray-600">Total: ₹{order.total.toFixed(2)}</span>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => downloadOrderDetails(order)}
                    className="flex items-center px-3 py-1 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full hover:bg-indigo-200"
                  >
                    <FaDownload className="mr-2" />
                    Download Invoice
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
                        <span className="text-sm font-medium text-gray-800">₹{parseFloat(item.price).toFixed(2)}</span>
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
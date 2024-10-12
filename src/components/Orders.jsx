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
    pdf.setTextColor(0);
    pdf.setFont("helvetica", "bold");
    pdf.text("Organic by Pooja", 20, 30);
    
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(0);
    pdf.text("123 Green Street, Eco City, Nature State 12345", 20, 40);
    pdf.text("Phone: (555) 123-4567 | Email: info@organicbypooja.com", 20, 45);

    // Invoice details
    pdf.setFontSize(16);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(0);
    pdf.text("INVOICE", pageWidth - 20, 30, { align: "right" });
    
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(0);
    pdf.text(`Invoice #: ${order.id}`, pageWidth - 20, 40, { align: "right" });
    pdf.text(`Date: ${new Date(order.date).toLocaleDateString()}`, pageWidth - 20, 45, { align: "right" });

    // Billing details
    pdf.setFontSize(12);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(0);
    pdf.text("Bill To:", 20, 60);
    
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(0);
    pdf.text("Customer Name", 20, 70);
    pdf.text("Customer Address", 20, 75);
    pdf.text("City, State, ZIP", 20, 80);

    // Order details
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(0);
    pdf.text("Order Details:", pageWidth - 90, 60);
    
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(0);
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
      headStyles: { fillColor: [0, 0, 0], textColor: 255, fontStyle: 'bold' },
      footStyles: { fillColor: [240, 240, 240], textColor: 0, fontStyle: 'bold' },
      bodyStyles: { textColor: 0 },
      alternateRowStyles: { fillColor: [245, 245, 245] },
    });

    // Thank you message
    pdf.setFontSize(10);
    pdf.setFont("helvetica", "italic");
    pdf.setTextColor(0);
    const thankYouMessage = "Thank you for your order! We appreciate your business and hope you enjoy your organic products.";
    pdf.text(thankYouMessage, 20, pdf.autoTable.previous.finalY + 20, { maxWidth: pageWidth - 40 });

    // Footer
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8);
    pdf.setTextColor(100);
    pdf.text("Organic by Pooja | 123 Green Street, Eco City, Nature State 12345 | (555) 123-4567", pageWidth / 2, pageHeight - 15, { align: "center" });

    pdf.save(`organic-by-pooja-invoice-${order.id}.pdf`);
  };

  if (orders.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-full max-w-md p-6 mx-4 text-center bg-black bg-opacity-50 border border-white rounded-lg backdrop-filter backdrop-blur-sm">
        <FaBox className="mx-auto mb-4 text-5xl text-white sm:text-6xl" />
        <h2 className="mb-2 text-xl font-light text-white sm:text-2xl">No Orders Yet</h2>
        <p className="text-sm text-gray-300 sm:text-base">You haven't placed any orders. Start shopping to see your orders here!</p>
      </div>
    </div>
    );
    }
    
    return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen py-6 bg-black sm:py-8"
    >
      <div className="container px-4 mx-auto max-w-7xl">
        <h1 className="mb-6 text-2xl font-light text-center text-white sm:mb-8 sm:text-3xl">Your Orders</h1>
        
        {/* Search and Filter Section */}
        <div className="mb-6 space-y-4 sm:space-y-0 sm:flex sm:flex-wrap sm:items-center sm:justify-between">
          <div className="relative w-full mb-4 sm:w-auto sm:mb-0">
            <input
              type="text"
              placeholder="Search orders..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full px-4 py-2 pl-10 pr-4 text-sm text-white placeholder-gray-300 bg-black border border-white rounded-lg sm:text-base focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            />
            <FaSearch className="absolute text-white transform -translate-y-1/2 left-3 top-1/2" />
          </div>
          <div className="flex flex-wrap items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <select
              value={statusFilter}
              onChange={(e) => handleStatusFilter(e.target.value)}
              className="w-full px-4 py-2 text-sm text-white bg-black border border-white rounded-lg sm:w-auto sm:text-base focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            >
              <option value="all">All Statuses</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
            </select>
            <button
              onClick={() => handleSort('date')}
              className="w-full px-4 py-2 text-sm text-white bg-black border border-white rounded-lg sm:w-auto sm:text-base focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent hover:bg-white hover:text-black"
            >
              Sort by Date {sortBy === 'date' && (sortOrder === 'asc' ? '↑' : '↓')}
            </button>
            <button
              onClick={() => handleSort('total')}
              className="w-full px-4 py-2 text-sm text-white bg-black border border-white rounded-lg sm:w-auto sm:text-base focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent hover:bg-white hover:text-black"
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
              className="p-4 bg-black bg-opacity-50 border border-white rounded-lg backdrop-filter backdrop-blur-sm sm:p-6"
            >
              <div className="flex flex-wrap items-center justify-between mb-4">
                <h2 className="mb-2 text-lg font-light text-white sm:text-xl sm:mb-0">Order #{order.id}</h2>
                <span className="px-3 py-1 text-xs font-light text-black bg-white rounded-full sm:text-sm">
                  {order.status || 'Processing'}
                </span>
              </div>
              <div className="grid grid-cols-1 gap-4 mb-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2 text-white" />
                  <span className="text-sm text-gray-300 sm:text-base">Order Date: {new Date(order.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <FaTruck className="mr-2 text-white" />
                  <span className="text-sm text-gray-300 sm:text-base">Shipping: {order.shippingMethod}</span>
                </div>
                <div className="flex items-center">
                  <FaMoneyBillWave className="mr-2 text-white" />
                  <span className="text-sm text-gray-300 sm:text-base">Total: ₹{order.total.toFixed(2)}</span>
                </div>
                <div className="flex items-center">
                  <button
                    onClick={() => downloadOrderDetails(order)}
                    className="flex items-center px-3 py-1 text-xs font-light text-black bg-white rounded-full sm:text-sm hover:bg-opacity-90"
                  >
                    <FaDownload className="mr-2" />
                    Download Invoice
                  </button>
                </div>
              </div>
              <div className="mt-4 border-t border-white">
                <h3 className="mt-4 mb-2 text-base font-light text-white sm:text-lg">Items</h3>
                <ul className="divide-y divide-white">
                  {order.items.map((item) => (
                    <li key={item.id} className="py-3">
                      <div className="flex flex-wrap items-center justify-between">
                        <div className="flex items-center mb-2 sm:mb-0">
                          <img src={item.image} alt={item.name} className="w-12 h-12 mr-4 rounded-md sm:w-16 sm:h-16" />
                          <div>
                            <h4 className="text-xs font-light text-white sm:text-sm">{item.name}</h4>
                            <p className="text-xs text-gray-300 sm:text-sm">Quantity: {item.quantity}</p>
                          </div>
                        </div>
                        <span className="text-xs font-light text-white sm:text-sm">₹{parseFloat(item.price).toFixed(2)}</span>
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
                      
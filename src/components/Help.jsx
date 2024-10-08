import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HelpCenter = () => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Query submitted:', { category, query });
    setQuery('');
    setCategory('');
  };

  const handleDeleteAccount = () => { 
    navigate('/delete');
  };

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"
  >
    <header className="py-4 bg-gray-800 bg-opacity-50 shadow-md">
      <h1 className="text-4xl font-bold text-center text-pink-400">Help Center</h1>
    </header>
  
    <div className="flex flex-col flex-grow overflow-hidden md:flex-row">
      <nav className="w-full p-6 bg-gray-800 bg-opacity-50 md:w-64 md:overflow-y-auto">
        <h2 className="mb-4 text-2xl font-semibold text-pink-400">Quick Links</h2>
        <ul className="space-y-2">
          <li><a href="#query" className="text-pink-300 hover:text-pink-200">Submit a Query</a></li>
          <li><a href="#faqs" className="text-pink-300 hover:text-pink-200">FAQs</a></li>
          <li><a href="#account" className="text-pink-300 hover:text-pink-200">Account Management</a></li>
        </ul>
      </nav>
  
      <main className="flex-grow p-6 overflow-y-auto bg-gray-900 bg-opacity-50">
        <motion.section 
          id="query"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="p-8 mb-12 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm"
        >
          <h2 className="mb-6 text-2xl font-semibold text-pink-400">Submit a Query</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-300">Category:</label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full p-3 text-gray-300 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                required
              >
                <option value="">Select a category</option>
                <option value="orders">Orders</option>
                <option value="payments">Payments</option>
                <option value="products">Products</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="query" className="block mb-2 text-sm font-medium text-gray-300">Your Query:</label>
              <textarea
                id="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full p-3 text-gray-300 bg-gray-700 bg-opacity-50 border border-gray-600 rounded-md focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                rows="4"
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="w-full px-4 py-3 text-white transition duration-300 bg-pink-600 rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              Submit Query
            </button>
          </form>
        </motion.section>
        
        <motion.section 
          id="faqs"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="p-8 mb-12 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm"
        >
          <h2 className="mb-6 text-2xl font-semibold text-pink-400">FAQs</h2>
          <div className="space-y-4">
            <details className="p-4 bg-gray-700 bg-opacity-50 rounded-lg">
              <summary className="font-medium text-gray-200 cursor-pointer">How do I track my order?</summary>
              <p className="mt-2 text-gray-300">You can track your order by logging into your account and visiting the 'Order History' section.</p>
            </details>
            <details className="p-4 bg-gray-700 bg-opacity-50 rounded-lg">
              <summary className="font-medium text-gray-200 cursor-pointer">What's your return policy?</summary>
              <p className="mt-2 text-gray-300">We offer a 30-day return policy for all unused items in their original packaging.</p>
            </details>
            <details className="p-4 bg-gray-700 bg-opacity-50 rounded-lg">
              <summary className="font-medium text-gray-200 cursor-pointer">Are your products organic?</summary>
              <p className="mt-2 text-gray-300">Yes, all our products are certified organic and sourced from trusted suppliers.</p>
            </details>
          </div>
        </motion.section>
        
        <motion.section 
          id="account"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="p-8 bg-gray-800 bg-opacity-50 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm"
        >
          <h2 className="mb-6 text-2xl font-semibold text-pink-400">Account Management</h2>
          <button
            onClick={handleDeleteAccount}
            className="w-full px-4 py-3 text-white transition duration-300 bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            Delete My Account
          </button>
        </motion.section>
      </main>
    </div>
  </motion.div>
  );
};

export default HelpCenter;
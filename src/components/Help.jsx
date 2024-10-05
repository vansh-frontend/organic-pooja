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
      className="flex flex-col min-h-screen bg-gradient-to-br from-green-50 to-blue-50"
    >
      <header className="py-4 bg-white shadow-md">
        <h1 className="text-4xl font-bold text-center text-green-800">Help Center</h1>
      </header>

      <div className="flex flex-col flex-grow overflow-hidden md:flex-row">
        <nav className="w-full p-6 bg-white md:w-64 md:overflow-y-auto">
          <h2 className="mb-4 text-2xl font-semibold text-green-700">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#query" className="text-green-600 hover:text-green-800">Submit a Query</a></li>
            <li><a href="#faqs" className="text-green-600 hover:text-green-800">FAQs</a></li>
            <li><a href="#account" className="text-green-600 hover:text-green-800">Account Management</a></li>
          </ul>
        </nav>

        <main className="flex-grow p-6 overflow-y-auto">
          <motion.section 
            id="query"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="p-8 mb-12 bg-white rounded-lg shadow-lg"
          >
            <h2 className="mb-6 text-2xl font-semibold text-green-700">Submit a Query</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-700">Category:</label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
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
                <label htmlFor="query" className="block mb-2 text-sm font-medium text-gray-700">Your Query:</label>
                <textarea
                  id="query"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-3 text-white transition duration-300 bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Submit Query
              </button>
            </form>
          </motion.section>
          
          <motion.section 
            id="faqs"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="p-8 mb-12 bg-white rounded-lg shadow-lg"
          >
            <h2 className="mb-6 text-2xl font-semibold text-green-700">FAQs</h2>
            <div className="space-y-4">
              <details className="p-4 rounded-lg bg-gray-50">
                <summary className="font-medium cursor-pointer">How do I track my order?</summary>
                <p className="mt-2 text-gray-600">You can track your order by logging into your account and visiting the 'Order History' section.</p>
              </details>
              <details className="p-4 rounded-lg bg-gray-50">
                <summary className="font-medium cursor-pointer">What's your return policy?</summary>
                <p className="mt-2 text-gray-600">We offer a 30-day return policy for all unused items in their original packaging.</p>
              </details>
              <details className="p-4 rounded-lg bg-gray-50">
                <summary className="font-medium cursor-pointer">Are your products organic?</summary>
                <p className="mt-2 text-gray-600">Yes, all our products are certified organic and sourced from trusted suppliers.</p>
              </details>
            </div>
          </motion.section>
          
          <motion.section 
            id="account"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="p-8 bg-white rounded-lg shadow-lg"
          >
            <h2 className="mb-6 text-2xl font-semibold text-green-700">Account Management</h2>
            <button
              onClick={handleDeleteAccount}
              className="w-full px-4 py-3 text-white transition duration-300 bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
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
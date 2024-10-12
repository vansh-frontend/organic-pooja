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
      className="flex flex-col min-h-screen bg-black"
    >
      <header className="py-4 shadow-md bg-black/50">
        <h1 className="text-4xl font-bold text-center text-white">Help Center</h1>
      </header>
    
      <div className="flex flex-col flex-grow overflow-hidden md:flex-row">
        <nav className="w-full p-6 bg-black/50 md:w-64 md:overflow-y-auto">
          <h2 className="mb-4 text-2xl font-semibold text-white">Quick Links</h2>
          <ul className="space-y-2">
            <li><a href="#query" className="text-white/80 hover:text-white">Submit a Query</a></li>
            <li><a href="#faqs" className="text-white/80 hover:text-white">FAQs</a></li>
            <li><a href="#account" className="text-white/80 hover:text-white">Account Management</a></li>
          </ul>
        </nav>
    
        <main className="flex-grow p-6 overflow-y-auto bg-black/50">
          <motion.section 
            id="query"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="p-8 mb-12 rounded-lg shadow-lg bg-white/10 backdrop-filter backdrop-blur-sm"
          >
            <h2 className="mb-6 text-2xl font-semibold text-white">Submit a Query</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="category" className="block mb-2 text-sm font-medium text-white/80">Category:</label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full p-3 text-white border-2 rounded-lg placeholder-white/60 bg-white/10 border-white/20 focus:outline-none focus:border-white focus:ring focus:ring-white/50 focus:ring-opacity-50"
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
                <label htmlFor="query" className="block mb-2 text-sm font-medium text-white/80">Your Query:</label>
                <textarea
                  id="query"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full p-3 text-white border-2 rounded-lg placeholder-white/60 bg-white/10 border-white/20 focus:outline-none focus:border-white focus:ring focus:ring-white/50 focus:ring-opacity-50"
                  rows="4"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-3 text-black transition duration-300 bg-white rounded-lg hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              >
                Submit Query
              </button>
            </form>
          </motion.section>
          
          <motion.section 
            id="faqs"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="p-8 mb-12 rounded-lg shadow-lg bg-white/10 backdrop-filter backdrop-blur-sm"
          >
            <h2 className="mb-6 text-2xl font-semibold text-white">FAQs</h2>
            <div className="space-y-4">
              <details className="p-4 rounded-lg bg-white/10">
                <summary className="font-medium text-white cursor-pointer">How do I track my order?</summary>
                <p className="mt-2 text-white/80">You can track your order by logging into your account and visiting the 'Order History' section.</p>
              </details>
              <details className="p-4 rounded-lg bg-white/10">
                <summary className="font-medium text-white cursor-pointer">What's your return policy?</summary>
                <p className="mt-2 text-white/80">We offer a 30-day return policy for all unused items in their original packaging.</p>
              </details>
              <details className="p-4 rounded-lg bg-white/10">
                <summary className="font-medium text-white cursor-pointer">Are your products organic?</summary>
                <p className="mt-2 text-white/80">Yes, all our products are certified organic and sourced from trusted suppliers.</p>
              </details>
            </div>
          </motion.section>
          
          <motion.section 
            id="account"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="p-8 rounded-lg shadow-lg bg-white/10 backdrop-filter backdrop-blur-sm"
          >
            <h2 className="mb-6 text-2xl font-semibold text-white">Account Management</h2>
            <button
              onClick={handleDeleteAccount}
              className="w-full px-4 py-3 text-white transition duration-300 bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
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
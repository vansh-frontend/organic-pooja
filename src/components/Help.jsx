import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaQuestion, FaClipboardList, FaUserCog } from 'react-icons/fa';

const HelpCenter = () => {
  const [activeTab, setActiveTab] = useState('query');
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

  const tabContent = {
    query: (
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-700">Category:</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
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
            className="w-full p-2 text-gray-800 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
            rows="4"
            required
          ></textarea>
        </div>
        <button 
          type="submit" 
          className="w-full px-4 py-2 text-white bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Submit Query
        </button>
      </form>
    ),
    faqs: (
      <div className="space-y-4">
        {[
          { question: "How do I track my order?", answer: "You can track your order by logging into your account and visiting the 'Order History' section." },
          { question: "What's your return policy?", answer: "We offer a 30-day return policy for all unused items in their original packaging." },
          { question: "Are your products organic?", answer: "Yes, all our products are certified organic and sourced from trusted suppliers." },
        ].map((faq, index) => (
          <details key={index} className="p-4 bg-white border border-gray-200 rounded-md">
            <summary className="font-medium text-gray-800 cursor-pointer">{faq.question}</summary>
            <p className="mt-2 text-gray-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    ),
    account: (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Account Management</h3>
        <p className="text-gray-600">Manage your account settings and preferences here.</p>
        <button
          onClick={handleDeleteAccount}
          className="w-full px-4 py-2 text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Delete My Account
        </button>
      </div>
    ),
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#F9F6EE]"
    >
      <header className="py-6 bg-white shadow-sm">
        <h1 className="text-3xl font-bold text-center text-gray-800">Help Center</h1>
      </header>
      
      <div className="container px-4 py-8 mx-auto">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { id: 'query', icon: FaQuestion, label: 'Submit a Query' },
            { id: 'faqs', icon: FaClipboardList, label: 'FAQs' },
            { id: 'account', icon: FaUserCog, label: 'Account Management' },
          ].map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center justify-center p-4 space-x-2 text-lg font-medium rounded-md ${
                activeTab === tab.id ? 'bg-gray-800 text-white' : 'bg-white text-gray-800 hover:bg-gray-100'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <tab.icon className="text-2xl" />
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </div>
        
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="p-6 mt-8 bg-white rounded-lg shadow-md"
        >
          {tabContent[activeTab]}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HelpCenter;
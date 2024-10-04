import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-6 text-3xl font-bold">Help Center</h1>
      
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">Submit a Query</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="category" className="block mb-2">Category:</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-2 border rounded"
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
            <label htmlFor="query" className="block mb-2">Your Query:</label>
            <textarea
              id="query"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full p-2 border rounded"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
            Submit Query
          </button>
        </form>
      </div>
      
      <div className="mb-8">
        <h2 className="mb-4 text-2xl font-semibold">FAQs</h2>
        {/* Add your FAQ content here */}
        <p>Coming soon...</p>
      </div>
      
      <div>
        <h2 className="mb-4 text-2xl font-semibold">Account Management</h2>
        <button
          onClick={handleDeleteAccount}
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600"
        >
          Delete My Account
        </button>
      </div>
    </div>
  );
};

export default HelpCenter;
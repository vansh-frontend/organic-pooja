import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import { FaGift, FaPercent, FaSearch } from 'react-icons/fa';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import './Products.css';

const allProducts = [
  { id: 1, name: 'Face Serum with With Jojoba Oil & Rosehip Oil', image: 'img/faceserum.jpg', price: '₹895.00', category: 'Skincare' },
  { id: 2, name: 'Water Spray', image: 'img/Rice Water Coco.jpg', price: '₹350.00', category: 'Haircare' },
  { id: 3, name: 'Body Lotion with Shea Butter', image: 'img/body lotion.jpg', price: '₹750.00', category: 'Skincare' },
  { id: 4, name: 'Combo Pack of Aloe Butter, Skin Toner & Face Serum', image: 'img/combo 1.jpg', price: '₹1990.00', category: 'Combo' },
  { id: 5, name: 'Combo Pack Rosemary Oil, Rice Water & Hair Oil', image: 'img/combo.jpg', price: '₹1250.00', category: 'Combo' },
  { id: 6, name: 'Combo Pack of Sandalwood Water & Body Lotion', image: 'img/combo 3.jpg', price: '₹1300.00', category: 'Combo' },
  { id: 7, name: 'Hair Conditioner', image: 'img/conditioner.jpg', price: '₹525.00', category: 'Haircare' },
  { id: 8, name: 'Face Serum With Rosehip Oil', image: 'img/faceserum.jpg', price: '₹895.00', category: 'Skincare' },
  { id: 9, name: 'Hair Oil With Hibiscus Flower Extract', image: 'img/Hair Oil.jpg', price: '₹650.00', category: 'Haircare' },
  { id: 10, name: 'Kokum and Aloe Butter', image: 'img/Kokum.jpg', price: '₹800.00', category: 'Skincare' },
  { id: 11, name: 'Rice Water With Ginger & Coconut', image: 'img/Rice Water Coco.jpg', price: '₹350.00', category: 'Haircare' },
  { id: 12, name: 'Asli Gel With Rosemary Oil', image: 'img/Rosemary oill.jpg', price: '₹250.00', category: 'Skincare' },
  { id: 13, name: 'Skin Toner With Aloe, Glycerin & Apple Cider Vinegar', image: 'img/skin toner.jpg', price: '₹295.00', category: 'Skincare' },
  { id: 14, name: 'Ubtan With Sandalwood Powder', image: 'img/Ubtan Powder.jpg', price: '₹550.00', category: 'Skincare' },
];

const categories = ['All', 'Skincare', 'Haircare', 'Combo'];

const Products = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const filteredProducts = allProducts
    .filter(product => 
      (selectedCategory === 'All' || product.category === selectedCategory) &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F9F6EE]">
    {/* Background */}
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/img/space-bg.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#F9F6EE]/30 via-[#F9F6EE]/30 to-[#F9F6EE]/70"></div>
    </div>
  
    {/* Sticky Marquee */}
    <div className="sticky top-0 py-2 overflow-hidden bg-gray-100/50 backdrop-blur-sm">
      <div 
        className="flex animate-marquee whitespace-nowrap"
        onMouseEnter={(e) => e.target.style.animationPlayState = 'paused'}
        onMouseLeave={(e) => e.target.style.animationPlayState = 'running'}
      >
        {[...Array(2)].map((_, index) => (
          <div key={index} className="flex items-center px-4 space-x-4">
            <span className="inline-flex items-center text-yellow-600">
              <FaGift className="mr-2 text-lg" />
              <span className="text-sm text-gray-800 sm:text-base">₹150 off on all order worth above ₹500. Use code:"SAVE150"!</span>
            </span>
            <span className="inline-flex items-center text-green-600">
              <FaPercent className="mr-2 text-lg" />
              <span className="text-sm text-gray-800 sm:text-base">₹400 off on all order above ₹1999. Use code:"save400"!</span>
            </span>
            <span className="inline-flex items-center text-blue-600">
              <FaGift className="mr-2 text-lg" />
              <span className="text-sm text-gray-800 sm:text-base">Free Shipping On Orders Above ₹999!</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  
    {/* Content */}
    <div className="container relative px-4 py-16 mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={controls}
        className="mb-12 text-5xl text-center text-gray-800"
      >
        <span className="font-light">Our</span> <span className="font-normal">Cosmic</span> <span className="font-light">Collection</span>
      </motion.h1>
  
      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ delay: 0.1 }}
        className="mb-8"
      >
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 text-gray-800 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400"
          />
          <FaSearch className="absolute text-gray-500 transform -translate-y-1/2 right-4 top-1/2" />
        </div>
      </motion.div>
  
      {/* Category Filter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative px-4 py-2 overflow-hidden text-sm font-medium tracking-wider transition-all duration-300 ease-in-out sm:px-6 sm:py-3"
              onClick={() => setSelectedCategory(category)}
            >
              <span className={`relative z-10 ${
                selectedCategory === category ? 'text-white' : 'text-gray-800'
              }`}>
                {category.toUpperCase()}
              </span>
              <motion.div
                className="absolute inset-0 bg-gray-800"
                initial={false}
                animate={{
                  clipPath: selectedCategory === category
                    ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
                    : 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)'
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          ))}
        </div>
      </motion.div>
  
      {/* Products Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={controls}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {filteredProducts.map((product, index) => (
          <motion.div 
            key={product.id} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ProductCard
              product={product}
              onAddToCart={addToCart}
              onMoreDetails={handleProductDetails}
            />
          </motion.div>
        ))}
      </motion.div>
  
      {/* No Results Message */}
      {filteredProducts.length === 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8 text-xl text-center text-gray-800"
        >
          No products found. Try adjusting your search or category.
        </motion.p>
      )}
  
      {/* Modal Section */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseModal}
          onAddToCart={addToCart}
          className="bg-white/90"
        />
      )}
    </div>
  </div>
  );
};

Products.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Products;
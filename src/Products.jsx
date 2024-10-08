import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from 'framer-motion';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';

const allProducts = [
  { id: 1, name: 'Face Serum', image: 'img/pro1.jpg', price: '₹99.99', category: 'Skincare' },
  { id: 2, name: ' Water Spray', image: 'img/pro2.jpg', price: '₹149.99', category: 'Haircare' },
  { id: 3, name: ' Serum', image: 'img/pro3.jpg', price: '₹149.99', category: 'Skincare' },
  { id: 4, name: ' Shampoo & Conditioner', image: 'img/pro4.jpg', price: '₹149.99', category: 'Haircare' },
  { id: 5, name: ' Flare Face Serum', image: 'img/pro5.jpg', price: '₹149.99', category: 'Skincare' },
  { id: 6, name: ' Body Lotion', image: 'img/sec2.jpg', price: '₹199.99', category: 'Bodycare' },
  { id: 7, name: ' Hand Cream', image: 'img/section.jpg', price: '₹129.99', category: 'Bodycare' },
  { id: 8, name: ' Hair Oil', image: 'img/hair.png', price: '₹99.99', category: 'Haircare' },
  { id: 9, name: ' Vitamin C Serum', image: 'img/shampoo.jpg', price: '₹199.99', category: 'Skincare' },
  { id: 10, name: ' Hair Mask', image: 'img/sec3.jpg', price: '₹179.99', category: 'Haircare' },
  { id: 11, name: 'Shower Scrub', image: 'img/sec4.jpg', price: '₹129.99', category: 'Skincare' },
  { id: 12, name: ' Shampoo', image: 'img/sec5.jpg', price: '₹159.99', category: 'Haircare' },
  { id: 13, name: ' Body Cream', image: 'img/pro2.jpg', price: '₹219.99', category: 'Bodycare' },
  { id: 14, name: ' Face Cream', image: 'img/pro5.jpg', price: '₹249.99', category: 'Skincare' },
  { id: 15, name: ' Star Hair Serum', image: 'img/pro1.jpg', price: '₹139.99', category: 'Haircare' },
  { id: 16, name: ' Cleansing Oil', image: 'img/sc.png', price: '₹109.99', category: 'Skincare' },
  { id: 17, name: ' Face Mask', image: 'img/sec2.jpg', price: '₹159.99', category: 'Skincare' },
  { id: 18, name: ' Foot Cream', image: 'img/sec6.jpg', price: '₹119.99', category: 'Bodycare' },
  { id: 19, name: ' Eye Cream', image: 'img/skin.jpg', price: '₹189.99', category: 'Skincare' },
  { id: 20, name: ' Oil Blend', image: 'img/sc.png', price: '₹139.99', category: 'Bodycare' },
];

const categories = ['All', 'Skincare', 'Haircare', 'Bodycare'];

const Products = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  const handleProductDetails = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };
  
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Space background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/img/space-bg.jpg')] bg-cover bg-center opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-blue-900/30 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="container relative px-4 py-16 mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={controls}
          className="mb-12 text-5xl font-bold text-center text-purple-300"
        >
          Our Cosmic Collection
        </motion.h1>

        {/* Category Filter */}
        <motion.div 
  initial={{ opacity: 0, y: 20 }}
  animate={controls}
  transition={{ delay: 0.2 }}
  className="mb-16"
>
  <div className="flex flex-wrap justify-center gap-6">
    {categories.map((category, index) => (
      <motion.button
        key={category}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 }}
        className={`relative px-6 py-3 text-sm font-medium transition-all duration-300 ease-in-out overflow-hidden`}
        onClick={() => setSelectedCategory(category)}
      >
        <span className={`relative z-10 ${
          selectedCategory === category ? 'text-white' : 'text-purple-300'
        }`}>
          {category}
        </span>
        <motion.div
    className="absolute inset-0 bg-purple-400"
          initial={false}
          animate={{
            clipPath: selectedCategory === category
              ? 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
              : 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)'
          }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="absolute inset-0 bg-gray-800 border border-purple-500"
          initial={false}
          animate={{
            clipPath: selectedCategory === category
              ? 'polygon(50% 0%, 50% 0%, 50% 100%, 50% 100%)'
              : 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
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
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
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
                className="bg-gray-900 border border-purple-500 shadow-lg shadow-purple-500/20"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Modal Section */}
        {selectedProduct && (
          <ProductModal
            product={selectedProduct}
            onClose={handleCloseModal}
            onAddToCart={addToCart}
            className="bg-gray-900 border border-purple-500"
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
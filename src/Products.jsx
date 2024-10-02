import { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal'; // Import the modal

const allProducts = [
  // Product data remains the same
  { id: 1, name: 'Face Serum', image: 'img/pro1.jpg', price: '₹99.99', category: 'Skincare' },
  { id: 2, name: 'Rice Water Spray', image: 'img/pro2.jpg', price: '₹149.99', category: 'Haircare' },
  { id: 3, name: 'Rice Water Serum', image: 'img/pro3.jpg', price: '₹149.99', category: 'Skincare' },
  { id: 4, name: 'Shampoo & Conditioner', image: 'img/pro4.jpg', price: '₹149.99', category: 'Haircare' },
  { id: 5, name: 'Face Serum Gold', image: 'img/pro5.jpg', price: '₹149.99', category: 'Skincare' },
  { id: 6, name: 'Body Lotion', image: 'img/sec2.jpg', price: '₹199.99', category: 'Bodycare' },
  { id: 7, name: 'Hand Cream', image: 'img/section.jpg', price: '₹129.99', category: 'Bodycare' },
  { id: 8, name: 'Hair Oil', image: 'img/hair.png', price: '₹99.99', category: 'Haircare' },
  { id: 9, name: 'Vitamin C Serum', image: 'img/shampoo.jpg', price: '₹199.99', category: 'Skincare' },
  { id: 10, name: 'Nourishing Hair Mask', image: 'img/sec3.jpg', price: '₹179.99', category: 'Haircare' },
  { id: 11, name: 'Exfoliating Scrub', image: 'img/sec4.jpg', price: '₹129.99', category: 'Skincare' },
  { id: 12, name: 'Deep Cleansing Shampoo', image: 'img/sec5.jpg', price: '₹159.99', category: 'Haircare' },
  { id: 13, name: 'Hydrating Body Cream', image: 'img/pro2.jpg', price: '₹219.99', category: 'Bodycare' },
  { id: 14, name: 'Anti-Aging Face Cream', image: 'img/pro5.jpg', price: '₹249.99', category: 'Skincare' },
  { id: 15, name: 'Organic Hair Serum', image: 'img/pro1.jpg', price: '₹139.99', category: 'Haircare' },
  { id: 16, name: 'Cleansing Oil', image: 'img/sc.png', price: '₹109.99', category: 'Skincare' },
  { id: 17, name: 'Rejuvenating Face Mask', image: 'img/sec2.jpg', price: '₹159.99', category: 'Skincare' },
  { id: 18, name: 'Foot Cream', image: 'img/sec6.jpg', price: '₹119.99', category: 'Bodycare' },
  { id: 19, name: 'Revitalizing Eye Cream', image: 'img/skin.jpg', price: '₹189.99', category: 'Skincare' },
  { id: 20, name: 'Essential Oil Blend', image: 'img/sc.png', price: '₹139.99', category: 'Bodycare' },
  // (Other products...)
];

const categories = ['All', 'Skincare', 'Haircare', 'Bodycare'];

const Products = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null); // New state to manage the selected product for the modal

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  const handleProductDetails = (product) => {
    setSelectedProduct(product); // Set the clicked product for the modal
  };

  const handleCloseModal = () => {
    setSelectedProduct(null); // Close the modal
  };
  
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-blue-50 to-white">
    {/* Ocean wave background */}
    <div className="absolute inset-0 overflow-hidden">
      <svg className="absolute w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          d="M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,165.3C672,139,768,117,864,133.3C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill="rgba(224, 242, 254, 0.7)"
          initial={{ d: "M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,165.3C672,139,768,117,864,133.3C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
          animate={{ d: "M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,138.7C960,128,1056,160,1152,186.7C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          style={{ transform: `translateY(${scrollY * 0.2}px)` }}
        />
        <motion.path 
          d="M0,64L48,85.3C96,107,192,149,288,160C384,171,480,149,576,149.3C672,149,768,171,864,176C960,181,1056,171,1152,176C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          fill="rgba(186, 230, 253, 0.5)"
          initial={{ d: "M0,64L48,85.3C96,107,192,149,288,160C384,171,480,149,576,149.3C672,149,768,171,864,176C960,181,1056,171,1152,176C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
          animate={{ d: "M0,96L48,112C96,128,192,160,288,176C384,192,480,192,576,176C672,160,768,128,864,128C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
      </svg>
    </div>

    {/* Content */}
    <div className="container relative px-4 py-16 mx-auto">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-5xl font-bold text-center text-blue-800"
      >
        Our Products
      </motion.h1>

      {/* Category Filter */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16"
      >
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 text-sm font-medium rounded-full transition-all duration-300 ease-in-out ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-blue-700 hover:bg-blue-100 border border-blue-200'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Products Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
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

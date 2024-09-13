import { useState } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './components/ProductCard'; // Assuming you fixed the file import

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
  { id: 18, name: 'Foot Cream', image: 'img/sec6.jpg', price: '119.99', category: 'Bodycare' },
  { id: 19, name: 'Revitalizing Eye Cream', image: 'img/skin.jpg', price: '189.99', category: 'Skincare' },
  { id: 20, name: 'Essential Oil Blend', image: 'img/sc.png', price: '139.99', category: 'Bodycare' },
];

const categories = ['All', 'Skincare', 'Haircare', 'Bodycare'];

const Products = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="container px-4 py-8 mx-auto">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center mb-6 space-x-2 sm:space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ease-in-out ${selectedCategory === category ? 'bg-black text-white' : 'bg-gray-200 text-gray-700 hover:bg-black hover:text-white'}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

Products.propTypes = {
  addToCart: PropTypes.func.isRequired,
};

export default Products;

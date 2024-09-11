import { useState, memo } from 'react';
import PropTypes from 'prop-types';

// Sample product data
const allProducts = [
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

// Memoized ProductCard component with display name and PropTypes
const ProductCard = memo(function ProductCard({ product }) {
  return (
    <div className="overflow-hidden transition-transform duration-300 ease-in-out transform bg-white rounded-lg shadow-md hover:shadow-lg hover:scale-105">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-56 md:h-64"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 ease-in-out bg-black bg-opacity-50 opacity-0 hover:opacity-100">
          <div className="p-4 text-center text-white">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="font-medium text-md">{product.price}</p>
            <button className="px-4 py-2 mt-2 text-sm font-semibold text-black transition-colors duration-300 ease-in-out bg-white rounded-lg hover:bg-gray-200">
              View Details
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.price}</p>
          </div>
           <button className="px-4 py-2 ml-2 text-xs sm:text-sm font-semibold text-black bg-[#f0ead6]/30 backdrop-blur-md rounded-lg border border-gray-300/50 shadow-md transition-all duration-300 ease-in-out hover:bg-[#f0ead6]/50 hover:shadow-lg hover:-translate-y-1 active:shadow-sm active:translate-y-0 active:bg-[#f0ead6]/70">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
});

// Define PropTypes for ProductCard
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products based on the selected category
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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
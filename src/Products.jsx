import { useState, memo } from 'react';
import PropTypes from 'prop-types';

// Sample product data
const allProducts = [
  { id: 1, name: 'Face Serum', image: 'img/pro1.jpg', price: '₹99.99', category: 'Skincare' },
  { id: 2, name: 'Rice Water Spray', image: 'img/pro2.jpg', price: '₹149.99', category: 'Haircare' },
  { id: 3, name: 'Rice Water Serum', image: 'img/pro3.jpg', price: '₹149.99', category: 'Skincare' },
  { id: 4, name: 'Shampoo & Conditioner', image: 'img/pro4.jpg', price: '₹149.99', category: 'Haircare' },
  { id: 5, name: 'Face Serum Gold', image: 'img/pro5.jpg', price: '₹149.99', category: 'Skincare' },
  { id: 6, name: 'Body Lotion', image: 'img/pro6.jpg', price: '₹199.99', category: 'Bodycare' },
  { id: 7, name: 'Hand Cream', image: 'img/pro7.jpg', price: '₹129.99', category: 'Bodycare' },
  { id: 8, name: 'Hair Oil', image: 'img/pro8.jpg', price: '₹99.99', category: 'Haircare' },
];

const categories = ['All', 'Skincare', 'Haircare', 'Bodycare'];

// Memoized ProductCard component with display name and PropTypes
const ProductCard = memo(function ProductCard({ product }) {
  return (
    <div className="overflow-hidden transition-transform transform bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="object-cover w-full h-56 md:h-64"
          loading="lazy"
        />
        <div className="absolute inset-0 flex items-center justify-center transition-opacity bg-black bg-opacity-50 opacity-0 hover:opacity-100">
          <div className="text-center">
            <h3 className="text-sm font-semibold text-white sm:text-lg">{product.name}</h3>
            <p className="text-xs font-medium text-white sm:text-md">{product.price}</p>
            <button className="px-3 py-1 mt-2 font-semibold text-black bg-white rounded sm:px-4 sm:py-2 hover:bg-gray-200">
              View Details
            </button>
          </div>
        </div>
      </div>
      <div className="p-3 sm:p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 sm:text-lg">{product.name}</h3>
            <p className="text-xs text-gray-600 sm:text-sm">{product.price}</p>
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
    <div className="container px-4 mx-auto">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center mb-6 space-x-2 sm:space-x-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-3 py-2 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold ${selectedCategory === category ? 'bg-black text-white' : 'bg-gray-200 text-gray-700'} transition-colors hover:bg-black hover:text-white`}
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

import './Products.css';
import { useState } from 'react';

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

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div>
      {/* Category Filter */}
      <div className="category-container">
        {categories.map((category) => (
          <button
            key={category}
            className={`category-button ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Section */}
      <div className="products-container">
        {filteredProducts.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image-container">
              <img src={product.image} alt={product.name} className="product-image" />
            </div>
            <div className="product-info">
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </div>
            <div className="overlay">
              <div className="overlay-content">
                <h3 className="overlay-title">{product.name}</h3>
                <p className="overlay-price">{product.price}</p>
                <button className="overlay-button">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

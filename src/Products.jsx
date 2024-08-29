// Products.js

import './Products.css'; // Import the CSS file for styling 

const products = [
  {
    id: 1,
    name: 'Face Serum',
    image: 'img/pro1.jpg',
    price: '₹99.99',
  },
  {
    id: 2,
    name: 'Rice Water Spray',
    image: 'img/pro2.jpg',
    price: '₹149.99',
  },

  {
    id: 3,
    name: 'Rice Water Serum',
    image: 'img/pro3.jpg',
    price: '₹149.99',
  },

  {
    id: 4,
    name: 'Shampoo & Conditioner',
    image: 'img/pro4.jpg',
    price: '₹149.99',
  },


  {
    id: 5,
    name: 'Face Serum Gold',
    image: 'img/pro5.jpg',
    price: '₹149.99',
  },
  
  {
    id: 6,
    name: 'Face Serum',
    image: 'img/pro1.jpg',
    price: '₹149.99',
  },
  
  {
    id: 7,
    name: 'Rice Water Spray',
    image: 'img/pro2.jpg',
    price: '₹149.99',
  },
  
  {
    id: 8,
    name: 'Rice Water Serum',
    image: 'img/pro3.jpg',
    price: '₹149.99',
  },
  
  
];

const Products = () => {
  return (
    <div className="products-container">
      {products.map(product => (
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
  );
};

export default Products;

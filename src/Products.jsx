// Products.js

import './Products.css'; // Import the CSS file for styling 

const products = [
  {
    id: 1,
    name: 'Product 1',
    image: 'img/pro1.jpg',
    price: '₹99.99',
  },
  {
    id: 2,
    name: 'Product 2',
    image: 'img/pro2.jpg',
    price: '₹149.99',
  },

  {
    id: 3,
    name: 'Product 3',
    image: 'img/pro3.jpg',
    price: '₹149.99',
  },

  {
    id: 4,
    name: 'Product 4',
    image: 'img/pro4.jpg',
    price: '₹149.99',
  },


  {
    id: 5,
    name: 'Product 5',
    image: 'img/pro5.jpg',
    price: '₹149.99',
  },
  
  {
    id: 6,
    name: 'Product 6',
    image: 'img/pro1.jpg',
    price: '₹149.99',
  },
  
  {
    id: 7,
    name: 'Product 7',
    image: 'img/pro2.jpg',
    price: '₹149.99',
  },
  
  {
    id: 8,
    name: 'Product 8',
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

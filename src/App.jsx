import React, { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { useEffect } from 'react';
import Home from './Home';
import Book from './Book';
import Services from './Services';
import Products from './Products';
import Cart from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './About';
import Help from './components/Help';
import DataDeletionPage from './components/DataDeletionPage';
import Orders from './components/Orders';
import Return from './Return';
import Policy from './components/Policy';
import Terms from './components/Terms';
import PaymentResult from './components/PaymentResult';

const theme = {
  colors: {
    heading: 'rgb(24, 24, 29)',
    text: 'rgb(24, 24, 29)',
    white: '#fff',
    black: '#212529',
    bg: 'rgb(249, 249, 255)',
    footer_bg: '#0a1435',
    btn: 'rgb(98, 84, 243)',
    border: 'rgba(98, 84, 243, 0.5)',
    hr: '#ffff',
    gradient: 'linear-gradient(0deg, rgb(132, 144, 255) 0%, rgb(98, 189, 252) 100%)',
    shadow: 'rgba(0, 0, 0, 0.2) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
    shadowSupport: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
  },
  media: { mobile: '768px', tab: '998px' },
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

const AppContent = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = useCallback((product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevCartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  }, []);

  const updateQuantity = useCallback((product, quantity) => {
    setCartItems(prevCartItems =>
      prevCartItems
        .map(item =>
          item.id === product.id
            ? { ...item, quantity: Math.max(0, quantity) }
            : item
        )
        .filter(item => item.quantity > 0)
    );
  }, []);

  const removeFromCart = useCallback((product) => {
    setCartItems(prevCartItems =>
      prevCartItems.filter(item => item.id !== product.id)
    );
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book" element={<Book />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/Policy" element={<Policy />} />
        <Route path="/return" element={<Return />} />
        <Route path='/Help' element={<Help />} />
        <Route path='/delete' element={<DataDeletionPage />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/cart" element={
          <Cart
            cartItems={cartItems}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
            onBuyNow={(product) => console.log(`Buy now ${product.name}`)}
          />
        } />
                 <Route path="/payment-result" element={<PaymentResult />} />
        <Route path="/about" element={<About />} />
      </Routes> 
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
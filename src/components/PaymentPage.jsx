import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

const PaymentPage = ({ cartItems, clearCart }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const initiatePayment = async () => {
      const customerInfo = JSON.parse(localStorage.getItem('customerInfo'));
      const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price.slice(1)) * item.quantity, 0);

      try {
        const response = await axios.post('https://organicbypooja.in/pay', {
          amount: total,
          userId: customerInfo.email,
        });
        
        if (response.data && response.data.data && response.data.data.instrumentResponse) {
          window.location.href = response.data.data.instrumentResponse.redirectInfo.url;
        } else {
          console.error('Invalid response from server:', response.data);
          navigate('/payment/failure');
        }
      } catch (error) {
        console.error('Error initiating payment:', error);
        console.log(error);
        navigate('/payment/failure');
      }
    };

    initiatePayment();
  }, [cartItems, navigate, clearCart]);

  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-black">
      <h1 className="text-3xl font-light">Initiating Payment...</h1>
    </div>
  );
};

PaymentPage.propTypes = {
  cartItems: PropTypes.array.isRequired,
  clearCart: PropTypes.func.isRequired,
};

export default PaymentPage;
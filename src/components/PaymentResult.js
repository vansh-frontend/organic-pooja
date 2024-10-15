// src/components/PaymentResult.jsx

import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentResult = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const status = searchParams.get('status');
    setPaymentStatus(status);
  }, [location]);

  return (
    <div>
      <h2>Payment Result</h2>
      {paymentStatus === 'success' && <p>Your payment was successful!</p>}
      {paymentStatus === 'failure' && <p>Your payment failed. Please try again.</p>}
      {!paymentStatus && <p>Processing payment result...</p>}
    </div>
  );
};

export default PaymentResult;
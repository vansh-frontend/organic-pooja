import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PhonePeRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const transactionId = params.get('transactionId');
    const status = params.get('status');

    // Handle the payment response here
    if (status === 'SUCCESS') {
      console.log('Payment successful', transactionId);
    } else {
      console.log('Payment failed', transactionId);
    }

    // Redirect to a thank you or error page
    navigate(status === 'SUCCESS' ? '/thank-you' : '/payment-error');
  }, [location, navigate]);

  return <div>Processing payment response...</div>;
};

export default PhonePeRedirect;
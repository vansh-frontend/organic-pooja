import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const PhonePeRedirect = () => {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const transactionId = params.get('transactionId');
    const status = params.get('status');

    // Handle the payment response here
    if (status === 'SUCCESS') {
      // Payment successful
      console.log('Payment successful', transactionId);
      // You might want to update your backend or local state here
    } else {
      // Payment failed
      console.log('Payment failed', transactionId);
    }

    // Redirect to a thank you or error page
    history.push(status === 'SUCCESS' ? '/thank-you' : '/payment-error');
  }, [location, history]);

  return <div>Processing payment response...</div>;
};

export default PhonePeRedirect;
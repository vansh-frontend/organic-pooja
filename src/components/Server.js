const express = require('express');
const cors = require('cors');
const axios = require('axios');
const crypto = require('crypto');
const path = require('path');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev')); // Logging

// Environment variables
const PHONEPAY_MERCHANT_ID = process.env.PHONEPAY_MERCHANT_ID;
const PHONEPAY_SALT_KEY = process.env.PHONEPAY_SALT_KEY;
const PHONEPAY_SALT_INDEX = process.env.PHONEPAY_SALT_INDEX;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3000';
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:5000';
const PORT = process.env.PORT || 5000;

// Serve static files from the React app in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
}

// PhonePe payment initiation
app.post('/api/initiate-phonepay', async (req, res) => {
  try {
    const { amount, orderId, customerInfo } = req.body;

    const payload = {
      merchantId: PHONEPAY_MERCHANT_ID,
      merchantTransactionId: orderId.toString(),
      merchantUserId: customerInfo.email,
      amount: Math.round(amount * 100), // Convert to paise
      redirectUrl: `${FRONTEND_URL}/payment-status`,
      redirectMode: 'REDIRECT',
      callbackUrl: `${BACKEND_URL}/api/phonepay-callback`,
      mobileNumber: customerInfo.phoneNo,
      paymentInstrument: {
        type: 'PAY_PAGE'
      }
    };

    const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64');
    const checksum = crypto
      .createHash('sha256')
      .update(`${base64Payload}/pg/v1/pay${PHONEPAY_SALT_KEY}`)
      .digest('hex');

    const xVerifyHeader = `${checksum}###${PHONEPAY_SALT_INDEX}`;

    const phonePeResponse = await axios.post(
      'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay',
      {
        request: base64Payload
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-VERIFY': xVerifyHeader
        }
      }
    );

    if (phonePeResponse.data.success) {
      res.json({
        success: true,
        paymentUrl: phonePeResponse.data.data.instrumentResponse.redirectInfo.url
      });
    } else {
      res.json({ success: false, message: 'Failed to initiate payment' });
    }
  } catch (error) {
    console.error('Error initiating PhonePe payment:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// PhonePe callback
app.post('/api/phonepay-callback', (req, res) => {
  // TODO: Implement callback handling
  console.log('PhonePe callback received:', req.body);
  res.sendStatus(200);
});

// Catch-all route to return the React app in production
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
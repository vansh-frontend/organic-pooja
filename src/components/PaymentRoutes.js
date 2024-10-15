// server/paymentRoutes.js

const express = require('express');
const axios = require('axios');
const crypto = require('crypto');

const router = express.Router();

const MERCHANT_ID = "PGTESTPAYUAT";
const SALT_KEY = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";
const SALT_INDEX = "1";
const API_ENDPOINT = "https://api-preprod.phonepe.com/apis/hermes/pg/v1/pay";

const generateBase64Payload = (payload) => {
  return Buffer.from(JSON.stringify(payload)).toString('base64');
};

const generateXVerifyHeader = (base64Payload) => {
  const string = `${base64Payload}/pg/v1/pay${SALT_KEY}`;
  const sha256 = crypto.createHash('sha256').update(string).digest('hex');
  return `${sha256}###${SALT_INDEX}`;
};

router.post('/initiate-phonepe-payment', async (req, res) => {
  try {
    const { amount, mobileNumber } = req.body;

    const payload = {
      merchantId: MERCHANT_ID,
      merchantTransactionId: `MT${Date.now()}`,
      merchantUserId: `MUID${Date.now()}`,
      amount: Math.round(amount * 100), // Convert to paise
      redirectUrl: `${req.protocol}://${req.get('host')}/payment-result`,
      redirectMode: "POST",
      callbackUrl: `${req.protocol}://${req.get('host')}/api/payment/callback`,
      mobileNumber: mobileNumber,
      paymentInstrument: {
        type: "PAY_PAGE"
      }
    };

    const base64Payload = generateBase64Payload(payload);
    const xVerify = generateXVerifyHeader(base64Payload);

    const response = await axios.post(API_ENDPOINT, 
      { request: base64Payload },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-VERIFY': xVerify,
        }
      }
    );

    if (response.data.success) {
      res.json({
        success: true,
        paymentUrl: response.data.data.instrumentResponse.redirectInfo.url
      });
    } else {
      res.status(400).json({
        success: false,
        message: response.data.message || 'Failed to initiate payment'
      });
    }
  } catch (error) {
    console.error('Payment initiation error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred during payment initiation'
    });
  }
});

router.post('/payment/callback', (req, res) => {
  // Handle callback from PhonePe
  console.log('Callback payload:', req.body);
  // Update your database with the payment status
  // Send response back to PhonePe
  res.json({ status: 'OK' });
});

module.exports = router;
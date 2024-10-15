const express = require('express');
const router = express.Router();
const axios = require('axios');
const crypto = require('crypto');

// Load environment variables
const PHONEPE_API_URL = process.env.PHONEPE_API_URL;
const MERCHANT_ID = process.env.PHONEPE_MERCHANT_ID;
const SALT_KEY = process.env.PHONEPE_SALT_KEY;
const SALT_INDEX = process.env.PHONEPE_SALT_INDEX;

router.post('/initiate-phonepe-payment', async (req, res) => {
  try {
    const { amount, mobileNumber, name, email, orderId } = req.body;

    const payload = {
      merchantId: MERCHANT_ID,
      merchantTransactionId: orderId,
      amount,
      redirectUrl: `${req.protocol}://${req.get('host')}/payment/redirect`,
      redirectMode: "POST",
      callbackUrl: `${req.protocol}://${req.get('host')}/payment/callback`,
      mobileNumber,
      paymentInstrument: {
        type: "PAY_PAGE"
      }
    };

    const base64Payload = Buffer.from(JSON.stringify(payload)).toString('base64');
    const checksum = crypto
      .createHash('sha256')
      .update(`${base64Payload}/pg/v1/pay${SALT_KEY}`)
      .digest('hex') + '###' + SALT_INDEX;

    const response = await axios.post(`${PHONEPE_API_URL}/pg/v1/pay`, {
      request: base64Payload
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-VERIFY': checksum
      }
    });

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
    console.error('PhonePe API error:', error);
    res.status(500).json({
      success: false,
      message: 'An error occurred while initiating the payment'
    });
  }
});

module.exports = router;
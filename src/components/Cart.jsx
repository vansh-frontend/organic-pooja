const express = require('express');
const router = express.Router();
const axios = require('axios');
const crypto = require('crypto');

// Load and validate environment variables
const PHONEPE_API_URL = 'http://api.phonepe.com/apis/hermes/pg/v1/pay';
const MERCHANT_ID = "M22RNZIM5DDWC";
const SALT_KEY = "51e16e0b-5fda-4b4f-888b-73dc505c4c92";
const SALT_INDEX = "1";

router.post('/initiate-phonepe-payment', async (req, res) => {
  const { amount, mobileNumber, name, email } = req.body;

  // Input validation
  if (!amount || !mobileNumber) {
    return res.status(400).json({
      success: false,
      message: 'Missing required fields: amount or mobileNumber'
    });
  }

  try {
    const transactionId = `TX${Date.now()}`; // Generate a unique transaction ID

    const payload = {
      merchantId: MERCHANT_ID,
      merchantTransactionId: transactionId,
      amount: parseInt(amount) * 100, // Convert to paise
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
      .update(`${base64Payload}${SALT_KEY}`)
      .digest('hex');

    console.log('Initiating PhonePe payment:', { transactionId, amount });

    const response = await axios.post(PHONEPE_API_URL, {
      request: base64Payload
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-VERIFY': checksum
      }
    });

    console.log('PhonePe API response:', response.data);

    if (response.data.success) {
      res.json({
        success: true,
        paymentUrl: response.data.data.instrumentResponse.redirectInfo.url
      });
    } else {
      console.error('PhonePe payment initiation failed:', response.data);
      res.status(400).json({
        success: false,
        message: response.data.message || 'Failed to initiate payment'
      });
    }
  } catch (error) {
    console.error('PhonePe API error:', error.response ? error.response.data : error.message);
    res.status(500).json({
      success: false,
      message: 'An error occurred while initiating the payment'
    });
  }
});

module.exports = router;
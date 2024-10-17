const express = require('express');
const axios = require('axios');
const cors = require('cors');
const crypto = require('crypto');

const app = express();
app.use(cors());
app.use(express.json());

const merchantId = 'PGTESTPAYUAT';
const saltKey = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399';
const saltIndex = '1';
const apiEndpoint = '/pg/v1/pay';
const phonepeApiUrl = 'https://api-preprod.phonepe.com/apis/pg-sandbox';

function generateXVerify(payload, apiEndpoint) {
  const string = Buffer.from(JSON.stringify(payload)).toString('base64') + apiEndpoint + saltKey;
  const sha256 = crypto.createHash('sha256').update(string).digest('hex');
  return sha256 + '###' + saltIndex;
}

app.post('/initiate-payment', async (req, res) => {
  try {
    const { amount, userId } = req.body;
    
    const payload = {
      merchantId: merchantId,
      merchantTransactionId: `MT${Date.now()}`,
      merchantUserId: userId,
      amount: amount * 100, // Convert to paise
      redirectUrl: `http://localhost:5000/payment-redirect`,
      redirectMode: 'REDIRECT',
      callbackUrl: `http://localhost:5000/payment-callback`,
      mobileNumber: '9999999999', // You might want to get this from the user
      paymentInstrument: {
        type: 'PAY_PAGE'
      }
    };

    const base64EncodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64');
    const xVerify = generateXVerify(payload, apiEndpoint);

    const options = {
      method: 'post',
      url: `${phonepeApiUrl}${apiEndpoint}`,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-VERIFY': xVerify
      },
      data: {
        request: base64EncodedPayload
      }
    };

    const response = await axios(options);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while initiating the payment' });
  }
});

app.get('/payment-redirect', (req, res) => {
  // Handle redirect from PhonePe
  res.send('Payment completed. You can close this window.');
});

app.post('/payment-callback', (req, res) => {
  // Handle callback from PhonePe
  console.log('Payment callback received:', req.body);
  res.sendStatus(200);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
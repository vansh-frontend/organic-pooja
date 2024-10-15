// server.js or app.js (in your project root)

const express = require('express');
const paymentRoutes = require('./server/paymentRoutes');

const app = express();

app.use(express.json());
app.use('/api', paymentRoutes);

// ... other middleware and routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
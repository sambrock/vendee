const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const { dynamicPricing } = require('./dynamic-pricing');
const config = require('./config');

const app = express();

app.use(express.json());
app.use(cors());

// Use routes
app.use('/api/traffic', require('./routes/api/traffic'));
app.use('/api/products', require('./routes/api/products'));

// Test routes
app.use('/test', require('./routes/test/test'));

// Connect to MongoDB
mongoose.connect(process.env.LOCAL_DB_CONFIG_TEST, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error', err));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

// Server
const port = process.env.PORT;
app.listen(port, () => console.log(`Server listening on ${port}`));

// Start dynamic pricing
setInterval(() => {
  dynamicPricing();
}, config.dynamic_pricing_interval);
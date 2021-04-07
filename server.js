const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

// Middleware
const auth = require('./middleware/auth');

// Use routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/traffic', auth, require('./routes/api/traffic'));
app.use('/api/products', auth, require('./routes/api/products'));
app.use('/api/discounts', require('./routes/api/discounts'));

// Connect to MongoDB
mongoose.connect(process.env.DB_CONFIG, { useNewUrlParser: true, useUnifiedTopology: true })
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

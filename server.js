const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

// Use routes
app.use('/api/traffic', require('./routes/api/traffic'));
app.use('/api/products', require('./routes/api/products'));

// Test routes
app.use('/test', require('./routes/test/test'));

const dbConfig = () => {
  if(process.env.NODE_ENV === 'prod') return process.env.DB_CONFIG;
  if(process.env.NODE_ENV === 'dev') return process.env.LOCAL_DB_CONFIG;
  if(process.env.NODE_ENV === 'test') return process.env.LOCAL_DB_CONFIG_TEST;
  console.error('NODE_ENV not set.');
}

// Connect to MongoDB
mongoose.connect(dbConfig(), { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error', err));

// Server
const port = process.env.PORT;
app.listen(port, () => console.log(`Server listening on ${port}`));
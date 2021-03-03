const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// Use routes
app.use('/api/occupancy', require('./routes/api/occupancy'));

// Connect to MongoDB
mongoose.connect(process.env.LOCAL_DB_CONFIG, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error', err));

// Server
const port = process.env.PORT;
app.listen(port, () => console.log(`Server listening on ${port}`));
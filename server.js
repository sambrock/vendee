const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

// Use routes
app.use('/api/occupancy', require('./routes/api/occupancy'));

// DB Config
const db = process.env.LOCAL_DB_CONFIG;

// Connect to MongoDB
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error', err));

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server listening on ${port}`));
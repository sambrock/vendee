const mongoose = require('mongoose');

const interactionSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const productSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  interactions: [interactionSchema],
});

module.exports = mongoose.model('product', productSchema);

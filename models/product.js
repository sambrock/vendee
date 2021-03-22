const mongoose = require('mongoose');

const interactionSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const dynamicPricingSchema = new mongoose.Schema({
  retailer: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  element: {
    type: String,
    required: true
  },
  price: {
    type: Number
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
  dynamicPricing: [dynamicPricingSchema],
});

module.exports = mongoose.model('product', productSchema);

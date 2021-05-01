const mongoose = require('mongoose');
const { DateTime } = require('luxon');

const interactionSchema = new mongoose.Schema({
  created_at: {
    type: Number,
    required: true
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
  shelfId: {
    type: Number,
  },
  stock: {
    type: Number
  },
  interactions: [interactionSchema],
  dynamicPricing: [dynamicPricingSchema],
});

module.exports = mongoose.model('product', productSchema);

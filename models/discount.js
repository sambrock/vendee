const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  }
})

const discountSchema = new mongoose.Schema({
  discountId: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  name: {
    type: String,
    require: true
  },
  value: {
    type: Number,
    require: true,
  },
  starts: {
    type: Number,
    default: Date.now()
  },
  expires: {
    type: Number,
    require: true,
  },
  created_at: {
    type: Number, 
    default: Date.now()
  },
  products: [productSchema]
});

module.exports = mongoose.model('discount', discountSchema);
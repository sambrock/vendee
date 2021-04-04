const mongoose = require('mongoose');

mongoose.pluralize(null);

const trafficSchema = new mongoose.Schema({
  cam_id: {
    type: Number,
    required: true
  },
  count: {
    type: Number,
    required: true
  },
  created_at: {
    type: Number,
    required: true,
    default: Date.now()
  },
});

module.exports = mongoose.model('traffic', trafficSchema);
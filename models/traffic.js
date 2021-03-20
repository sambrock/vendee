const mongoose = require('mongoose');

mongoose.pluralize(null);

const trafficSchema = new mongoose.Schema({
  camId: {
    type: Number,
    required: true
  },
  count: {
    type: Number,
    require: true
  },
  time: {
    type: Date,
    default: Date.now
  },
  day: {
    type: String,
  },
  hour: {
    type: Number,
  },
});

module.exports = mongoose.model('traffic', trafficSchema);
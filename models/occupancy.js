const mongoose = require('mongoose');

const occupancySchema = new mongoose.Schema({
  camId: {
    type: String,
    required: true
  },
  count: {
    type: Number,
    require: true
  },
  time: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('occupancy', occupancySchema);
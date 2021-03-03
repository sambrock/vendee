const axios = require('axios');
const { EventEmitter } = require('events');

const eventEmitter = new EventEmitter();

const processPredictions = (predictions, camId) => {
  if (!predictions) {
    console.log(predictions);
    return;
  };

  // Occupancy
  const arr = predictions.filter(p => p.class === 'person');

  axios({ method: 'post', url: 'http://localhost:3001/api/occupancy/', data: { camId, count: arr.length } });

  console.log(arr.length);
}

module.exports = { processPredictions };
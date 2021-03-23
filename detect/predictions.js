const axios = require('axios');
const { DateTime } = require('luxon');

const processProducts = (predictions) => {
  console.log('Products:', predictions);
  if (predictions.length === 0) return;

  // Save interaction
  predictions.forEach(async p => {
    await axios({ method: 'post', url: `http://localhost:3001/api/products/${p.classId}/interaction` });
  })
}

const processTraffic = async (predictions, camId) => {
  const today = DateTime.local();
  const count = predictions.reduce((a, v) => (v.class === 'person' ? a + 1 : a), 0);

  const data = {
    camId,
    time: today.toISO(),
    day: today.toISODate(),
    hour: today.toObject().hour
  }

  // Send 0 if no persons detected
  if (predictions.length === 0) {
    await axios({ method: 'post', url: `http://localhost:3001/api/traffic/${camId}`, data: {...data, count: 0} });
  }

  // Save traffic count
  predictions.forEach(async p => {
    await axios({ method: 'post', url: `http://localhost:3001/api/traffic/${camId}`, data: {...data, count} });
  })

  console.log('Traffic:', count, predictions);
}

module.exports = { processProducts, processTraffic };

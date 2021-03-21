const axios = require('axios');

const processProducts = (predictions) => {
  if (predictions.length === 0) return;

  // Save interaction
  predictions.forEach(async p => {
    await axios({ method: 'post', url: `http://localhost:3001/api/products/${p.id}` });
  })

  console.log(predictions);
}

const processTraffic = (predictions, camId) => {
  if (predictions.length === 0) return;

  // console.log(predictions);
}

module.exports = { processProducts, processTraffic };

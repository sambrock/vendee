require('dotenv').config({ path: '../.env' });
const axios = require('axios');
const { DateTime } = require('luxon');

const baseURL = process.env.NODE_ENV === 'production' ? process.env.PROD_URL : process.env.LOCAL_URL;

const processProducts = (predictions) => {
  // console.log('Products:', predictions);
  if (predictions.length === 0) return;

  // Save interaction
  predictions.forEach(async p => {
    await axios({ method: 'post', url: `${baseURL}/api/products/${p.classId}/interaction`, headers: { 'x-auth-token': process.env.TOKEN } });
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
    await axios({ method: 'post', url: `${baseURL}/api/traffic/${camId}`, data: { ...data, count: 0 }, headers: { 'x-auth-token': process.env.TOKEN } });
  }

  // Save traffic count
  predictions.forEach(async p => {
    await axios({ method: 'post', url: `${baseURL}/api/traffic/${camId}`, data: { ...data, count }, headers: { 'x-auth-token': process.env.TOKEN } });
  })

  console.log('Traffic:', count, predictions);
}

module.exports = { processProducts, processTraffic };

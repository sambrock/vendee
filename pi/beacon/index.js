const eddystoneBeacon = require('eddystone-beacon');
const axios = require('axios');
require('dotenv').config();

const beacon = () => {
  axios({ method: 'get', url: `${process.env.URL}/api/discounts`, headers: { 'x-auth-token': process.env.TOKEN } }).then((res) => {
    const discounts = res.data;
    const active = discounts.filter(d => d.expires > Date.now() && d.starts < Date.now());

    const discount = active[Math.floor(Math.random() * active.length)] // Random

    const discountUrl = `https://tinyurl.com/dpfjkxbw`;

    eddystoneBeacon.advertiseUrl(discountUrl, { name: `${discount.name}: ${discount.code}` });
  });
}

beacon();

setInterval(() => {
  beacon();
}, 60000);
require('dotenv').config({ path: '../.env' });
const axios = require('axios');

const { checkPrice } = require('./parser');

const dynamicPricing = async () => {
  const url = process.env.NODE_ENV === 'production' ? process.env.PROD_URL : process.env.LOCAL_URL;
  const products = await axios({ method: 'get', url: `${url}/api/products`, headers: { 'x-auth-token': process.env.TOKEN } });

  console.log('Starting dynamic pricing...');

  for (const product of products.data) {
    for await (const dynamicPricing of product.dynamicPricing) {
      const priceString = await checkPrice(dynamicPricing.url, dynamicPricing.element);
      console.log(product.name, dynamicPricing.retailer, priceString);

      if (priceString) axios({
        method: 'put',
        url: `${url}/api/products/${product.productId}/dynamic-pricing`,
        data: { retailer: dynamicPricing.retailer, price: parseFloat(priceString.substring(1)) },
        headers: { 'x-auth-token': process.env.TOKEN }
      })
      continue;
    }
  }

  console.log('Finished.');
};

dynamicPricing();

setInterval(async () => {
  dynamicPricing();
}, 3600000) // 1 hour


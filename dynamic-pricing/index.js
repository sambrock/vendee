require('dotenv').config({ path: '../.env' });
const axios = require('axios');

const { checkPrice } = require('./parser');

const dynamicPricing = async () => {
  const products = await axios({ method: 'get', url: `${process.env.PROD_URL}/api/products`, headers: { 'x-auth-token': process.env.TOKEN } });

  console.log('Starting dynamic pricing...');

  for (const product of products.data) {
    for await (const dynamicPricing of product.dynamicPricing) {
      const priceString = await checkPrice(dynamicPricing.url, dynamicPricing.element);
      console.log(product.name, dynamicPricing.retailer, priceString);

      if (priceString) axios({
        method: 'put',
        url: `${process.env.PROD_URL}/api/products/${product.productId}/dynamic-pricing`,
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


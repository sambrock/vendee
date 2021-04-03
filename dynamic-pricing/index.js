const axios = require('axios');

const { checkPrice } = require('./parser');

const dynamicPricing = async () => {
  const products = await axios('http://localhost:3001/api/products');

  console.log('Starting dynamic pricing...');

  for (const product of products.data) {
    for await (const dynamicPricing of product.dynamicPricing) {
      const priceString = await checkPrice(dynamicPricing.url, dynamicPricing.element);
      console.log(product.name, dynamicPricing.retailer, priceString);

      if (priceString) axios({ method: 'put', url: `http://localhost:3001/api/products/${product.productId}/dynamic-pricing`, data: { retailer: dynamicPricing.retailer, price: parseFloat(priceString.substring(1)) } })
      continue;
    }
  }

  console.log('Finished.');
};

module.exports = { dynamicPricing }
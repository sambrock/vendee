const axios = require('axios');
require('dotenv').config();

// Product: Coco Pops

setInterval(() => {
  axios({ method: 'get', url: `${process.env.URL}/api/products/2`, headers: { 'x-auth-token': process.env.TOKEN } }).then((res) => {
    const product = res.data;

    // Import the module
    const LCD = require('raspberrypi-liquid-crystal');

    // Instantiate the LCD object on bus 1 address 3f with 16 chars width and 2 lines
    const lcd = new LCD(1, 0x27, 16, 2);
    // Init the lcd (must be done before calling any other methods)
    lcd.beginSync();
    // Clear any previously displayed content
    lcd.clearSync();
    // Display text multiline
    lcd.printLineSync(0, product.name);
    lcd.printLineSync(1, `${product.price.toFixed(2)} -${product.change}% ${product.dynamicPricing[0].retailer}`);
  });
}, 15000);
const express = require('express');
const parseNum = require('parse-num')
const { DateTime } = require('luxon');

const Product = require('../../models/product');

const router = express.Router();

// @route   GET api/products
// @desc    List all products
// @access  Local network
router.get('/', async (req, res) => {
  const products = await Product.find({});

  const test = products.map((product) => {
    const dynamicPricing = product.dynamicPricing.filter((p) => p.price !== undefined).sort((a, b) => b.price + a.price);
    if (dynamicPricing.length === 0) return { ...product.toObject(), change: -1 };

    const t1 = dynamicPricing[0].price;
    const t2 = product.price;

    const change = (t1 - t2) / ((t1 + t2) / 2) * 100;

    return { ...product.toObject(), change: Math.round(change), direction: Math.sign(change) }
  })

  res.send(test);
});

// @route   PUT api/products/:id 
// @desc    Update product price
// @access  Local network
router.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { price } = req.body;

  const product = await Product.findOne({ productId: id });

  product.price = parseNum(price);

  await product.save();

  res.sendStatus(200);
});

// @route   GET api/products/trending
// @desc    Get the most interacted with products for the last hour
// @access  Local network
router.get('/trending', async (req, res) => {
  const products = await Product.find({})

  const date = DateTime.local().minus({ hours: 1 }).toMillis();

  const trending = products
    .map(p => {
      return { id: p.productId, name: p.name, interactions: p.interactions.filter(interaction => interaction.createdAt > date).length };
    })
    .filter(t => t.interactions !== 0)
    .sort((a, b) => b.interactions - a.interactions)
    .splice(0, 5); // Limit to 5

  res.send(trending);
});

// @route   GET api/products/underperforming
// @desc    Get the least interacted with products for the last hour
// @access  Local network
router.get('/underperforming', async (req, res) => {
  const products = await Product.find({})

  const date = DateTime.local().minus({ hours: 24 }).toMillis();

  const underperforming = products
    .map(p => {
      return { id: p.productId, name: p.name, interactions: p.interactions.filter(interaction => interaction.createdAt > date).length };
    })
    .sort((a, b) => a.interactions - b.interactions)
    .splice(0, 5); // Limit to 5

  res.send(underperforming);
});

// @route   POST api/products/:id/interaction
// @desc    Add an interaction for a product
// @access  Local network
router.post('/:id/interaction', async (req, res) => {
  const { id } = req.params;

  const product = await Product.findOne({ productId: id });

  const previousInteraction = product.interactions[product.interactions.length - 1];

  if (previousInteraction) {
    if (DateTime.fromJSDate(previousInteraction.createdAt).toMillis() > DateTime.local().minus({ seconds: 20 }).toMillis()) return res.sendStatus(208); // If interaction created in the last 20 seconds, skip
  }

  product.interactions.push({ interaction: true });
  await product.save();

  res.send(product);
});

// @route   PUT api/products/:id/dynamic-pricing
// @desc    Update the retailer price listed in dynamic pricing
// @access  Local network
router.put('/:id/dynamic-pricing', async (req, res) => {
  const { id } = req.params;
  const { retailer, price } = req.body;

  const product = await Product.findOne({ productId: id });

  product.dynamicPricing.find(dp => dp.retailer === retailer).price = price;

  await product.save();

  res.send(200);
});

module.exports = router;
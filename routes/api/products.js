const express = require('express');
const parseNum = require('parse-num')
const { DateTime } = require('luxon');

const Product = require('../../models/product');
const { getInteractionsNum, getDynamicPricing } = require('../../services/product-service');

const router = express.Router();


// @route   GET api/products
// @desc    List all products
// @access  Private
router.get('/', async (req, res) => {
  const data = await Product.find();

  const products = data.map(p => {
    const interactions = getInteractionsNum(p.interactions);
    const dynamicPricing = getDynamicPricing(p.dynamicPricing, p.price);

    return { ...p.toObject(), id: p.productId, ...dynamicPricing, ...interactions };
  })

  res.send(products);
});

// @route   GET api/products
// @desc    List all products
// @access  Private
router.get('/:id', async (req, res) => {
  const data = await Product.find({ productId: req.params.id });

  const product = data.map(p => {
    const interactions = getInteractionsNum(p.interactions);
    const dynamicPricing = getDynamicPricing(p.dynamicPricing, p.price);

    return { ...p.toObject(), id: p.productId, ...dynamicPricing, ...interactions };
  })

  res.send(product[0]);
});

// @route   PUT api/products/:id 
// @desc    Update product price
// @access  Private
router.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { price } = req.body;

  const product = await Product.findOne({ productId: id });

  product.price = parseNum(price);

  await product.save();

  res.sendStatus(200);
});

// @route   POST api/products/:id/interaction
// @desc    Add an interaction for a product
// @access  Private
router.post('/:id/interaction', async (req, res) => {
  const d = DateTime.local().setZone(process.env.TIMEZONE);

  const { id } = req.params;

  const product = await Product.findOne({ productId: id });

  const previousInteraction = product.interactions[product.interactions.length - 1];

  if (previousInteraction) {
    if (DateTime.fromJSDate(previousInteraction.created_at).toMillis() > d.minus({ seconds: 20 }).toMillis()) return res.sendStatus(208); // If interaction created in the last 20 seconds, skip
  }

  product.interactions.push({ interaction: true });
  await product.save();

  res.send(product);
});

// @route   PUT api/products/:id/dynamic-pricing
// @desc    Update the retailer price listed in dynamic pricing
// @access  Private
router.put('/:id/dynamic-pricing', async (req, res) => {
  const { id } = req.params;
  const { retailer, price } = req.body;

  const product = await Product.findOne({ productId: id });

  product.dynamicPricing.find(dp => dp.retailer === retailer).price = price;

  await product.save();

  res.send(200);
});

module.exports = router;
const express = require('express');
const parseNum = require('parse-num')

const Product = require('../../models/product');

const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

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

// @route   
// @desc    
// @access  Local network
router.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { price } = req.body;

  const product = await Product.findOne({ productId: id });

  product.price = parseNum(price);

  await product.save();

  res.sendStatus(200);
});

// @route   
// @desc    
// @access  Local network
router.get('/trending', async (req, res) => {
  const timestamp = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const hexSeconds = Math.floor(timestamp / 1000).toString(16);

  const constructedObjectId = ObjectID(hexSeconds + "0000000000000000");

  const products = await Product.find({ "interactions._id": { "$gt": constructedObjectId } })

  res.send(products);
});

// @route   
// @desc    
// @access  Local network
router.get('/underperforming', async (req, res) => {
  const timestamp = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const hexSeconds = Math.floor(timestamp / 1000).toString(16);

  const constructedObjectId = ObjectID(hexSeconds + "0000000000000000");

  const products = await Product.find({ "_id": { "$gt": constructedObjectId } })
  products.sort((a, b) => a.interactions.length - b.interactions.length); // NEED TO FIX BY ADDING AT LEAST 1 INTERACTION PER PRODUCT

  res.send(products);
});

// @route   
// @desc    
// @access  Local network
router.get('/trending-right-now', async (req, res) => {
  const timestamp = new Date(Date.now() - 1 * 60 * 60 * 1000);
  const hexSeconds = Math.floor(timestamp / 1000).toString(16);

  const constructedObjectId = ObjectID(hexSeconds + "0000000000000000");

  const products = await Product.find({ "interactions._id": { "$gt": constructedObjectId } })

  const sorted = products.sort((a, b) => b.interactions.length - a.interactions.length);

  const sum = sorted
    .map(p => p.interactions.length)
    .reduce((a, b) => a + b, 0);

  if(!sorted[0]) return res.sendStatus(401);

  const t1 = sorted[0].interactions.length;
  const t2 = sum / sorted.length;

  const change = (t1 - t2) / ((t1 + t2) / 2) * 100;

  res.send({ details: sorted[0], change: Math.round(change), direction: Math.sign(change) });
  
});

// @route   POST api/:id/interaction
// @desc    
// @access  Local network
router.post('/:id/interaction', async (req, res) => {
  const { id } = req.params;

  const product = await Product.findOne({ productId: id });

  product.interactions.push({ interaction: true });
  await product.save();

  res.send(product);
});

// @route   
// @desc    
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
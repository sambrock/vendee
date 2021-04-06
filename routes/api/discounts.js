const express = require('express');

const Discount = require('../../models/discount');
const auth = require('../../middleware/auth');

const router = express.Router();

// @route   GET api/discounts
// @desc    List all discounts
// @access  Private
router.get('/', auth, async (req, res) => {
  const discounts = await Discount.find({});

  res.send(discounts.map(d => {return {...d.toObject(), id: d.discountId}}));
});

// @route   GET api/discounts/:id
// @desc    Get discount by id
// @access  Public
router.get('/:id', async (req, res) => {
  const discounts = await Discount.find({discountId: req.params.id});
  if(!discounts.length === 0) return res.sendStatus(400)

  res.send(discounts[0]);
});

// @route   GET api/discounts/code/:id
// @desc    Get discount by code
// @access  Public
router.get('/code/:id', async (req, res) => {
  const discounts = await Discount.find({code: req.params.id});
  if(!discounts.length === 0) return res.sendStatus(400)

  res.send(discounts[0]);
});

module.exports = router;

const express = require('express');

const Discount = require('../../models/discount');
const auth = require('../../middleware/auth');

const router = express.Router();

router.get('/', auth, async (req, res) => {
  const discounts = await Discount.find({});

  res.send(discounts.map(d => {return {...d.toObject(), id: d.discountId}}));
});

router.get('/:id', async (req, res) => {
  const discounts = await Discount.find({discountId: req.params.id});
  if(!discounts.length === 0) return res.sendStatus(400)

  res.send(discounts[0]);
});

router.get('/code/:id', async (req, res) => {
  const discounts = await Discount.find({code: req.params.id});
  if(!discounts.length === 0) return res.sendStatus(400)

  res.send(discounts[0]);
});

module.exports = router;

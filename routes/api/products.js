const express = require('express');

const Product = require('../../models/product');

const router = express.Router();

// @route   POST :id/interaction
// @desc    
// @access  Local network
router.post('/:id/interaction', async (req, res) => {
  const { id } = req.params;

  const product = await Product.findOne({productId: id});

  product.interactions.push({interaction: true});
  await product.save();

  res.send(product);
})

module.exports = router;
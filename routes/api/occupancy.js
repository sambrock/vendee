const express = require('express');

const Occupancy = require('../../models/occupancy');

const router = express.Router();

router.get('/', async (req, res) => res.json(occupancy));

// @route   POST api/occupancy
// @desc    Add camera occupancy
// @access  Local network
router.post('/', async (req, res) => {
  // if (!req.body.camId || !req.body.count) return res.status(400).send({ id: 'ERROR', msg: 'Invalid data.' });
  
  const { camId, count } = req.body;

  const data = await Occupancy.findOne({ camId }).sort({ _id: -1 });
  if(data) { if(data.count === count) return res.sendStatus(208); }
  
  const occupancy = new Occupancy({ camId, count });
  occupancy.save();

  res.sendStatus(200);
});

module.exports = router;
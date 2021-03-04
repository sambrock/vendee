const express = require('express');

const Occupancy = require('../../models/occupancy');

const router = express.Router();

const cameras = ['cam_1', 'cam_2', 'cam_3', 'cam_4']

// @route   POST api/occupancy
// @desc    Get live occupancy for all cameras
// @access  Local network
router.get('/', async (req, res) => {
  let occupancy = [];

  const getData = async () => {
    return Promise.all(cameras.map(async c => {
      const data = await Occupancy.findOne({ camId: c }).sort({ _id: -1 });
      if (!data) return;

      occupancy.push(data);
    }))
  }

  getData().then(() => {
    res.send(occupancy.reduce((a, b) => ({ count: a.count + b.count })));
  })
});

// @route   POST api/occupancy
// @desc    Add camera occupancy
// @access  Local network
router.post('/', async (req, res) => {
  // if (!req.body.camId || !req.body.count) return res.status(400).send({ id: 'ERROR', msg: 'Invalid data.' });

  const { camId, count } = req.body;

  const data = await Occupancy.findOne({ camId }).sort({ _id: -1 });
  if (data) { if (data.count === count) return res.sendStatus(208); }

  const occupancy = new Occupancy({ camId, count });
  occupancy.save();

  res.sendStatus(200);
});

module.exports = router;
const express = require('express');
const { DateTime } = require('luxon');
const _ = require('lodash');

const Traffic = require('../../models/traffic');
const { getCountPerHour, getTotalCountPerDay, getAverageTime } = require('../../services/traffic-service');

const router = express.Router();

const cameras = ['cam_1', 'cam_2', 'cam_3', 'cam_4'];
const cams = 10;

// @route   POST api/traffic
// @desc    Add camera traffic
// @access  Local network
router.post('/', async (req, res) => {
  const { camId, count, time, day, hour } = req.body;

  const data = await Traffic.findOne({ camId }).sort({ _id: -1 });
  if (data) { if (data.count === count) return res.sendStatus(208); }

  const traffic = new Traffic({ camId, count, time, day, hour });
  traffic.save();

  res.sendStatus(200);
});

// @route   GET api/traffic/occupancy
// @desc    Get live occupancy for all cameras
// @access  Local network
router.get('/occupancy', async (req, res) => {
  let occupancy = [];

  const getData = async () => {
    return Promise.all(cameras.map(async c => {
      const data = await Traffic.findOne({ camId: c }).sort({ _id: -1 });
      if (!data) return;

      occupancy.push(data);
    }))
  }

  getData().then(() => {
    res.send(occupancy.reduce((a, b) => ({ count: a.count + b.count })));
  })
});

// @route   GET api/traffic/week
// @desc    Get traffic for this and last week
// @access  Local network
router.get('/week', async (req, res) => {
  const traffic = await Traffic.find();

  const days = [];
  for (i = 0; i < 14; i++) {
    days.push(DateTime.now().minus({ days: i }).toISODate());
  };

  const trafficDays = []; // Array for 14 days (2 weeks) of data

  traffic.forEach(t => {
    const date = DateTime.fromMillis(Date.parse(t.time)).toISODate();
    const index = days.indexOf(date);
    if (index === -1) return;
    trafficDays.push([]);
    trafficDays[index].push(t);
  });

  const daysTotals = [];

  for (i = 0; i < 14; i++) {
    if (trafficDays[i].length !== 0) {
      daysTotals[i] = getTotalCountPerDay(trafficDays[i]);
    };
  };

  res.send(daysTotals.reverse());
});

// @route   GET api/traffic/hour
// @desc    Get traffic at each hour
// @access  Local network 
router.get('/hour', async (req, res) => {
  const traffic = await Traffic.find({ day: DateTime.local().toISODate() });

  const hours = getCountPerHour(traffic.sort((a, b) => a.hour - b.hour));

  const hoursLabels = hours.map((h, i) => {
    return { count: h, hour: 8 + i }
  });

  res.send(hoursLabels);
});

// @route   GET api/traffic/today
// @desc    Get total traffic for today and percentage change
// @access  Local network
router.get('/today', async (req, res) => {
  const today = await Traffic.find({ day: DateTime.local().toISODate() });
  const yesterday = await Traffic.find({ day: DateTime.local().minus({ days: 1 }).toISODate() });

  const t1 = getTotalCountPerDay(today);
  const t2 = getTotalCountPerDay(yesterday);

  let change = (t1 - t2) / ((t1 + t2) / 2) * 100;

  res.send({ count: t1, change: Math.round(change), direction: Math.sign(change) });
});

// @route   
// @desc    
// @access  Local network
router.get('/heat-map', async (req, res) => {
  const day = DateTime.local().toISODate();

  const heatMap = [];

  for (i = 0; i < cams; i++) {
    const traffic = await Traffic.find({ camId: i + 1, day });
    if(traffic.length === 0) return;

    const times = getAverageTime(traffic);
    
    heatMap.push({camId: i + 1, times});
  }

  res.send(heatMap);
});



module.exports = router;
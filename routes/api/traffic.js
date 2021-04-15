const express = require('express');
const { DateTime } = require('luxon');

const Traffic = require('../../models/traffic');
const { getTrafficByHour, getDwellTime, getTrafficDayChange, getTrafficByWeek, getOccupancy } = require('../../services/traffic-service');

const router = express.Router();

const cams = 10;

// @route   POST api/traffic
// @desc    Add camera traffic
// @access  Private
router.post('/:id', async (req, res) => {
  const { id } = req.params;
  const { count } = req.body;

  const data = await Traffic.findOne({ cam_id: id }).sort({ _id: -1 });
  if (data) { if (data.count === count) return res.sendStatus(208); } // Skip if same as previous count

  const traffic = new Traffic({ cam_id: id, count });
  traffic.save();

  res.sendStatus(200);
});

// @route   GET api/traffic/occupancy
// @desc    Get live occupancy for all cameras
// @access  Private
router.get('/occupancy', async (req, res) => {
  const d = DateTime.local().setZone(process.env.TIMEZONE);
  const today = d.minus({ hours: d.toObject().hour });

  const traffic = await Traffic.find({ created_at: { $gt: today.toMillis(), $lt: Date.now() } }).sort({ created_at: -1 });

  const occupancy = getOccupancy(traffic, cams);

  res.send(occupancy);
});

// @route   GET api/traffic/week
// @desc    Get traffic for this and last week
// @access  Private
router.get('/week', async (req, res) => {
  const d = DateTime.local().setZone(process.env.TIMEZONE);

  const twoweeksago = d.minus({ days: 14, hours: d.toObject().hour }).toMillis();

  const traffic = await Traffic.find({ created_at: { $gt: twoweeksago, $lt: Date.now(), } }).sort({ created_at: -1 });

  const trafficByweek = getTrafficByWeek(traffic);

  res.send(trafficByweek);
});

// @route   GET api/traffic/hour
// @desc    Get traffic at each hour
// @access  Private 
router.get('/hour', async (req, res) => {
  const d = DateTime.local().setZone(process.env.TIMEZONE);
  const today = d.minus({ hours: d.toObject().hour });

  const traffic = await Traffic.find({ created_at: { $gt: today.toMillis(), $lt: Date.now() } }).sort({ created_at: -1 })

  const trafficByHour = getTrafficByHour(traffic);

  res.send(trafficByHour.filter(function () { return true }));
});

// @route   GET api/traffic/today
// @desc    Get total traffic for today and percentage change
// @access  Private
router.get('/today', async (req, res) => {
  const d = DateTime.local().setZone(process.env.TIMEZONE);
  const today = d.minus({ hours: d.toObject().hour });

  const trafficToday = await Traffic.find({ created_at: { $gt: today.toMillis(), $lt: d.toMillis() } }).sort({ created_at: -1 });
  const tafficYesterday = await Traffic.find({ created_at: { $gt: today.minus({ day: 1 }).toMillis(), $lt: today.toMillis() } }).sort({ created_at: -1 });

  const trafficDayChange = getTrafficDayChange(trafficToday, tafficYesterday);

  res.send(trafficDayChange);
});

// @route   GET api/traffic/heat-map
// @desc    Get average standing time from each camera
// @access  Private
router.get('/dwell-time', async (req, res) => {
  const d = DateTime.local().setZone(process.env.TIMEZONE);
  const today = d.minus({ hours: d.toObject().hour });

  const { date } = req.query;

  const gt = date ? DateTime.fromISO(date).toMillis() : today.toMillis();
  const lt = date ? DateTime.fromISO(date).plus({ day: 1 }).toMillis() : Date.now();

  const traffic = await Traffic.find({ created_at: { $gt: gt, $lt: lt } });
  if (traffic.length === 0) return res.sendStatus(400);

  const cameraTraffic = [];

  for (i = 0; i < cams; i++) {
    const arr = traffic.filter((t) => t.cam_id === i + 1);
    cameraTraffic.push(arr);
  }

  const dwellTimes = cameraTraffic.map(ct => {
    return { camId: ct[0].cam_id, times: getDwellTime(ct) };
  })

  res.send(dwellTimes);
});


module.exports = router;

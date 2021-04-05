const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/', (req, res) => {
  const { password } = req.body;

  if(password !== process.env.PASSWORD) return res.sendStatus(400);

  const token = jwt.sign({ auth: true, }, process.env.JWT_SECRET, { expiresIn: '1h' });

  res.send(token);
})

module.exports = router;
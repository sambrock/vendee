const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.header('x-auth-token');

  if (!token) return res.status(401).send('Access denied. Not authorised.')

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    res.status(401).send({id: 'INVALID_TOKEN', msg: 'Invalid token.'});
  }
}
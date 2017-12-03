var express = require('express');
var router = express.Router();

/* GET current exchange rate by currency code */
router.get('/', function(req, res, next) {
  res.json({ price: '$103.76' });
});

module.exports = router;

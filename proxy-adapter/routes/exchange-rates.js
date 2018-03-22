const express = require('express');
const router = express.Router();
const http = require('http');

/* GET current exchange rate by currency code */
router.get('/', function(req, res, next) {
  return http.get('https://www.bitstamp.net/api/v2/ticker/ltcusd/');
});

module.exports = router;

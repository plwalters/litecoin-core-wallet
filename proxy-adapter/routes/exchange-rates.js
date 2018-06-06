const express = require('express');
const router = express.Router();
const axios = require('axios');

/* GET current exchange rate by currency code */
router.get('/', function(req, res, next) {
  axios.get('https://www.bitstamp.net/api/v2/ticker/ltcusd/').then((result) => {
    return res.json(result.data);
  }).catch(error => {
    return res.error(error);
  });
});

module.exports = router;

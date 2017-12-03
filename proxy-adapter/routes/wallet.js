var express = require('express');
var router = express.Router();

/* GET wallet information */
router.get('/', function(req, res, next) {
  res.json({ id: 1 });
});

/* GET get private keys from wallet */
router.post('/private-keys', function(req, res, next) {
  res.json({ id: 1 });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET all addresses for this wallet */
router.get('/', function(req, res, next) {
  res.json([{ address: 1354353245 }, { address: 1123123123 }]);
});

/* GET  */
router.post('/new-receive', function(req, res, next) {
  res.json({ address: 9871293871 });
});

module.exports = router;

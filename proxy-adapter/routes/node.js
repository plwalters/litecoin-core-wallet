var express = require('express');
var router = express.Router();

/* GET node information */
router.get('/', function(req, res, next) {
  res.json({ id: 1 });
});

/* GET peers of this node's information */
router.get('/peers', function(req, res, next) {
  res.json([{ id: 1 }, { id: 1 }]);
});

module.exports = router;

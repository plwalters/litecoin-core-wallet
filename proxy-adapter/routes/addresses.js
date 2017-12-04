const express = require('express');
const router = express.Router();
const { JsonRpcRequest, jsonRpcClient } = require('../services/json-rpc');

/* GET all addresses for this wallet */
router.get('/', (req, res, next) => {
  res.json([{ address: 1354353245 }, { address: 1123123123 }]);
});

/* GET  */
router.post('/new-receive', (req, res, next) => {
  res.json({ address: 9871293871 });
});

module.exports = router;

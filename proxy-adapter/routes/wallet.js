const express = require('express');
const router = express.Router();
const { JsonRpcRequest, jsonRpcClient } = require('../services/json-rpc');

/* GET wallet information */
router.get('/getwalletinfo', (req, res, next) => {
  let request = {
    method: 'getwalletinfo',
    params: [],
    id: 'getwalletinfo'
  };

  jsonRpcClient.post(request).then(result => {
    return res.json(result);
  });
});

/* GET get private keys from wallet */
router.get('/private-keys', (req, res, next) => {
  res.json({ id: 1 });
});

module.exports = router;

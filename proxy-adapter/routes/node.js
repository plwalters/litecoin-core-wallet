const express = require('express');
const router = express.Router();
const { JsonRpcRequest, jsonRpcClient } = require('../services/json-rpc');

/* GET node information */
router.get('/getnetworkinfo', (req, res, next) => {
  let request = {
    method: 'getnetworkinfo',
    params: [],
    id: 'getnetworkinfo'
  };

  jsonRpcClient.post(request).then(result => {
    return res.json(result);
  });
});

/* GET peers of this node's information */
router.get('/peers', (req, res, next) => {
  res.json([{ id: 1 }, { id: 1 }]);
});

module.exports = router;

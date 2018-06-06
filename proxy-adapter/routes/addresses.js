const express = require('express');
const router = express.Router();
const { JsonRpcRequest, jsonRpcClient } = require('../services/json-rpc');
const bodyParser = require('body-parser');

router.get('/', (req, res, next) => {
  return res.json('hey');
});

router.get('/listreceivedbyaddress', (req, res, next) => {
  let request = {
    method: 'listreceivedbyaddress',
    params: [
      0, true
    ],
    id: 'listreceivedbyaddress'
  };

  jsonRpcClient.post(request).then(result => {
    return res.json(result);
  }).catch(error => {
    console.log(error)
  });
});

/* GET  */
router.get('/getnewaddress', (req, res, next) => {
  let request = {
    method: 'getnewaddress',
    params: [],
    id: 'getnewaddress'
  };

  jsonRpcClient.post(request).then(result => {
    return res.json(result);
  });
});

/* POST */
router.post('/sendtoaddress', (req, res, next) => {
  let targetAddress = req.body.address;
  let amount = req.body.amount;

  let request = {
    method: 'sendtoaddress',
    params: [targetAddress, amount],
    id: 'sendtoaddress'
  };

  jsonRpcClient.post(request).then(result => {
    return res.json(result);
  });
});

module.exports = router;

const rp = require('request-promise');

class JsonRpc {
  post(requestBody) {
    let username = `${process.env.rpc_username}`;
    let password = `${process.env.rpc_password}`;
    let url = `http://${username}:${password}@localhost:19332/`;

    let options = {
      method: 'POST',
      uri: url,
      body: JSON.stringify(requestBody)
    };

    return rp(options).then(result => {
      return JSON.parse(result);
    });
  }
}

class JsonRpcRequest {
  constructor(data) {
    this.method = data.method;
    this.params = data.params || [];
    this.id = data.id;
  }
}

module.exports = {
  jsonRpcClient: new JsonRpc(),
  JsonRpcRequest: JsonRpcRequest
};

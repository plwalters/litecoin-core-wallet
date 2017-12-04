import {HttpWrapper} from './http-wrapper';
import {NetworkInfo} from 'models/network-info';

export class NodeService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getNetworkInfo() {
    return this.http.get('/node/getnetworkinfo').then(result => {
      return new NetworkInfo(result.result);
    });
  }
}

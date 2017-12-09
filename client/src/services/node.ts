import {HttpWrapper} from './http-wrapper';
import {NetworkInfo} from 'models/network-info';
import {PeerInfo} from 'models/peer-info';

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
  getPeerInfo() {
    return this.http.get('/node/getpeerinfo').then(result => {
      return result.result.map(peer => {
        return new PeerInfo(peer);
      });
    });
  }
}

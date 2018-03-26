import {NodeService} from 'services/node';
import {NetworkInfo} from 'models/network-info';

export class ClientInformation {
  networkInfo;

  static inject = [NodeService];
  constructor(nodeService) {
    this.nodeService = nodeService;
  }

  attached() {
    return this.nodeService.getNetworkInfo().then(result => {
      this.networkInfo = result;
    });
  }
}

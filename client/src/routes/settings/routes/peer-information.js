import {NodeService} from 'services/node';
import {PeerInfo} from 'models/peer-info';

export class PeerInformation {
  peerInfos = [];

  static inject = [NodeService];
  constructor(nodeService) {
    this.nodeService = nodeService;
  }

  attached() {
    return this.nodeService.getPeerInfo().then(result => {
      this.peerInfos = result;
    });
  }
}

import {HttpWrapper} from 'services/http-wrapper';
import {BlockInfo} from 'models/block-info';

export class BlockService {
  private http: HttpWrapper;

  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getBlockInfo(block) {
    return this.http.get(`/block/${block}`).then(result => {
      return new BlockInfo(result);
    });
  }
}

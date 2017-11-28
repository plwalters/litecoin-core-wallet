import {BlockService} from 'services/block';

export class Block {
  searchText = '';
  blockInfo;
  private blockService: BlockService;

  static inject = [BlockService];
  constructor(blockService) {
    this.blockService = blockService;
  }

  search() {
    return this.blockService.getBlockInfo(this.searchText).then(result => {
      this.blockInfo = result;
    });
  }
}

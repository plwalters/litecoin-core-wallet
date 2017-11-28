export class BlockInfo {
  hash;
  height;
  version;
  prevBlock;
  merkleRoot;
  time;
  bits;
  nonce;
  txs = [];

  constructor(data) {
    Object.assign(this, data);
  }
}

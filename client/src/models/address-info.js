export class AddressInfo {
  version;
  height;
  value;
  script;
  address;
  coinbase;
  hash;
  index;

  account;
  confirmations;
  label;
  txids;
  amount;

  constructor(data) {
    Object.assign(this, data);
  }
}

export class AddressInfo {
  version;
  height;
  value;
  script;
  address;
  coinbase;
  hash;
  index;

  constructor(data) {
    Object.assign(this, data);
  }
}

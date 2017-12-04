export class NetworkInfo {
  version;
  subversion;
  protocolversion;
  localservices;
  localrelay;
  timeoffset;
  networkactive;
  connections;
  relayfee;
  incrementalfee;
  localaddresses;
  warnings;

  constructor(data: NetworkInfo | {}) {
    Object.assign(this, data);
  }
}

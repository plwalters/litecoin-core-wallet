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

  constructor(data) {
    Object.assign(this, data);
  }
}

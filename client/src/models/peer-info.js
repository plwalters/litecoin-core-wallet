export class PeerInfo {
  addnode;
  addr;
  addrbind;
  addrlocal;
  banscore;
  bytesrecv;
  bytesrecv_per_msg;
  bytessent;
  bytessent_per_msg;
  conntime;
  id;
  inbound;
  inflight;
  lastrecv;
  lastsend;
  minping;
  pingtime;
  relaytxes;
  services;
  startingheight;
  subver;
  synced_blocks;
  synced_headers;
  timeoffset;
  version;
  whitelisted;

  constructor(data: PeerInfo | {}) {
    Object.assign(this, data);
  }
}

export class Wallet {
  walletversion;
  balance;
  unconfirmed_balance;
  txcount;
  keypoololdest;
  keypoolsize;
  unlocked_until;

  constructor(data: Wallet | {}) {
    Object.assign(this, data);
  }
}

import {WalletService} from 'services/wallet';
import {Session} from 'services/session';
import {Wallet} from 'models/wallet';

export class MyWallet {
  wallet;

  static inject = [WalletService, Session];
  constructor(walletService, session) {
    this.walletService = walletService;
    this.session = session;
  }
  attached() {
    return this.walletService.getWalletInfo().then(result => {
      this.wallet = result;
    });
  }
}

import {HttpWrapper} from './http-wrapper';
import {Wallet} from 'models/wallet';

export class WalletService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getWalletInfo() {
    return this.http.get('/wallet/getwalletinfo').then(result => {
      console.log(result)
      return new Wallet(result.result);
    });
  }
}

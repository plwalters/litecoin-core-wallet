import {WalletService} from 'services/wallet';
import {ExchangeRateService} from 'services/exchange-rate';
import {Wallet} from 'models/wallet';

export class MyWallet {
  wallet: Wallet;

  static inject = [WalletService];
  constructor(walletService) {
    this.walletService = walletService;
  }
  attached() {
    this.exchangeRateService.getCurrentExchangeRate().then(result => {
      console.log('-'.repeat(100))
      console.log(result)
      this.session.currentExchangeRate = result;
    });

    return this.walletService.getWalletInfo().then(result => {
      this.wallet = result;
    });
  }
}

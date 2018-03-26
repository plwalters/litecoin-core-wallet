import {WalletService} from 'services/wallet';
import {ExchangeRateService} from 'services/exchange-rates';
import {Wallet} from 'models/wallet';

export class MyWallet {
  wallet;

  static inject = [WalletService, ExchangeRateService];
  constructor(walletService, exchangeRateService) {
    this.walletService = walletService;
    this.exchangeRateService = exchangeRateService;
  }
  attached() {
    this.exchangeRateService.getCurrentExchangeRate().then(result => {
      this.session.currentExchangeRate = result;
    });

    return this.walletService.getWalletInfo().then(result => {
      this.wallet = result;
    });
  }
}

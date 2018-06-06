import {Session} from 'services/session';
import {ExchangeRateService} from 'services/exchange-rates';

export class App {
  session;
  router;

  static inject = [Session, ExchangeRateService];
  constructor(session, exchangeRateService) {
    this.session = session;
    this.exchangeRateService = exchangeRateService;
  }

  configureRouter(config, router) {
    config.title = 'Litecoin Core';
    config.map([
      { route: ['', 'settings'], name: 'settings', moduleId: 'routes/settings/index', nav: true, title: 'Settings' },
      { route: 'balances', name: 'balances', moduleId: 'routes/balances/index', nav: true, title: 'Balances' },
      { route: 'pay', name: 'pay', moduleId: 'routes/pay/index', nav: true, title: 'Pay' },
      { route: 'receive', name: 'receive', moduleId: 'routes/receive/index', nav: true, title: 'Receive' },
      { route: 'channels', name: 'channels', moduleId: 'routes/channels/index', nav: true, title: 'Channels' },
      { route: 'transactions', name: 'transactions', moduleId: 'routes/transactions/index', nav: true, title: 'Transactions' }
    ]);

    this.router = router;

    return this.exchangeRateService.getCurrentExchangeRate().then(result => {
      this.session.currentExchangeRate = result;
    });
  }
}

import {Session} from 'services/session';
import {Router} from 'aurelia-router';

export class App {
  private session: Session;
  public router: Router;

  static inject = [Session];
  constructor(session) {
    this.session = session;
  }

  configureRouter(config, router) {
    config.title = 'Litecoin Core';
    config.map([
      { route: ['', 'settings'], name: 'settings', moduleId: 'routes/settings/index', nav: false, title: 'Settings' },
      { route: 'balances', name: 'balances', moduleId: 'routes/balances/index', nav: true, title: 'Balances' },
      { route: 'pay', name: 'pay', moduleId: 'routes/pay/index', nav: true, title: 'Pay' },
      { route: 'receive', name: 'receive', moduleId: 'routes/receive/index', nav: true, title: 'Receive' },
      { route: 'channels', name: 'channels', moduleId: 'routes/channels/index', nav: true, title: 'Channels' },
      { route: 'transactions', name: 'transactions', moduleId: 'routes/transactions/index', nav: true, title: 'Transactions' }
    ]);

    this.router = router;
  }
}

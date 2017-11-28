import {Router} from 'aurelia-router';

export class Index {
  private router: Router;

  configureRouter(config, router) {
    config.map([
      { route: ['', 'list'], name: 'list', moduleId: './routes/list', nav: true, title: 'List' },
      { route: 'address', name: 'address', moduleId: './routes/address', nav: true, title: 'Address' },
      { route: 'block', name: 'block', moduleId: './routes/block', nav: true, title: 'Block' },
      { route: 'transaction', name: 'transaction', moduleId: './routes/transaction', nav: true, title: 'Transaction' }
    ]);

    this.router = router;
  }
}

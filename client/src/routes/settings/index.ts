import {Router} from 'aurelia-router';

export class Index {
  private router: Router;

  configureRouter(config, router) {
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: './routes/home', nav: true, title: 'Home' },
      { route: 'about', name: 'about', moduleId: './routes/about', nav: true, title: 'About' }
    ]);

    this.router = router;
  }
}

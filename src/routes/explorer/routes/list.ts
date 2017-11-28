import {Router} from 'aurelia-router';

export class List {
  private router: Router;
  static inject = [Router];
  constructor(router) {
    this.router = router;
  }
}

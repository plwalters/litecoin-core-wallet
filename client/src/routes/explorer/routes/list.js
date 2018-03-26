import {Router} from 'aurelia-router';

export class List {
  router;
  static inject = [Router];
  constructor(router) {
    this.router = router;
  }
}

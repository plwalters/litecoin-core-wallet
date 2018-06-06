import {Session} from 'services/session';

export class RateValueConverter {
  static inject = [Session];
  constructor(session) {
    this.session = session;
  }

  toView(value) {
    let rate = this.session.currentExchangeRate.last;
    return value * rate;
  }
}

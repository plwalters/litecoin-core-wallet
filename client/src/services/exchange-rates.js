import {HttpWrapper} from './http-wrapper';
import {ExchangeRate} from 'models/exchange-rate';

export class ExchangeRateService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getCurrentExchangeRate() {
    return this.http.get('/exchange-rates/').then(result => {
      console.log(result)
      return new ExchangeRate(result.result);
    });
  }
}

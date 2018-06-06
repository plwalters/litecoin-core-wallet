export class ExchangeRate {
  last;
  timestamp;

  constructor(data) {
    Object.assign(this, data);
  }
}

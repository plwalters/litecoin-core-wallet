import {HttpWrapper} from 'services/http-wrapper';
import {TransactionInfo} from 'models/transaction-info';

export class TransactionService {
  private http: HttpWrapper;

  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getTransactionInfo(transaction) {
    return this.http.get(`/coin/transaction/${transaction}`).then(result => {
      return result.map(item => {
        return new TransactionInfo(item);
      });
    });
  }
}

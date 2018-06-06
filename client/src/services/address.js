import {HttpWrapper} from 'services/http-wrapper';
import {AddressInfo} from 'models/address-info';

export class AddressService {
  http;

  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getAddressInfo(address) {
    return this.http.get(`/addresses/${address}`).then(result => {
      return result.map(item => {
        return new AddressInfo(item);
      });
    });
  }
  getReceivedByAddresses() {
   return this.http.get(`/addresses/getreceivedbyaddress`).then(result => {
      return result.map(item => {
        return new AddressInfo(item);
      });
    });
  }
  getNewAddress() {
    return this.http.get(`/addresses/getnewaddress`).then(result => {
      return new AddressInfo({ address: result.result });
    });
  }
  sendToAddress(address, amount) {
    let body = {
      address: address,
      amount: amount
    }
    return this.http.post(`/addresses/sendtoaddress`, body).then(result => {
      console.log('='.repeat(100))
      console.log(result)
      return result;
    });
  }
}

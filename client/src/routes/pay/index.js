import {AddressService} from 'services/address';

export class Index {
  payment = { address: '', amount: 0.0 };

  static inject = [AddressService];
  constructor(addressService) {
    this.addressService = addressService;
  }

  submitPayment() {
    console.log(this.payment)
    let address = this.payment.address;
    let amount = this.payment.amount;

    return this.addressService.sendToAddress(address, amount).then(result => {
      console.log('='.repeat(100))
      console.log(result)
    });
  }
}

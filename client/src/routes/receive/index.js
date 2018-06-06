import {AddressService} from 'services/address';

export class Index {
  static inject = [AddressService];
  constructor(addressService) {
    this.addressService = addressService;
  }
  activate() {
    return this.addressService.getNewAddress().then(newAddress => {
      this.newAddress = newAddress;
    });
  }
}

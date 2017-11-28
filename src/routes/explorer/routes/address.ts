import {AddressService} from 'services/address';

export class Address {
  public searchText = '';
  public addressInfos;
  private addressService: AddressService;

  static inject = [AddressService];
  constructor(addressService) {
    this.addressService = addressService;
  }

  search() {
    return this.addressService.getAddressInfo(this.searchText).then(result => {
      this.addressInfos = result;
    });
  }
}

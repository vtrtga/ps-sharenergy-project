import Customer from '../Domains/Customer';
import ICustomer from '../Interfaces/ICustomer';
import CustomerODM from '../Models/CustomerODM';

export default class CustomerService {
  private customerODM: CustomerODM;

  constructor() {
    this.customerODM = new CustomerODM();
  }

  private createCustomerDomain(customer: ICustomer | null): Customer | null {
    if (customer) {
      return new Customer(customer);
    }
    return null;
  }

  public create(obj: ICustomer) {
    const customer = this.customerODM.create(obj);

    return this.createCustomerDomain(customer);
  }
}
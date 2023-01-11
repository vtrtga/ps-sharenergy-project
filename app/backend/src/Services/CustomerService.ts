import { UpdateQuery } from 'mongoose';
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

  public async getAll() {
    const customers = await this.customerODM.getAll();

    const customersArr = customers.map((customer: ICustomer) => 
      this.createCustomerDomain(customer));

    return customersArr;
  }

  public async remove(id: string) {
    const deleteC = await this.customerODM.deleteById(id);

    return deleteC;
  }

  public async create(obj: ICustomer) {
    const customer = await this.customerODM.create(obj);
    return this.createCustomerDomain(customer);
  }

  public async update(id: string, data: ICustomer): Promise<Customer | null> {
  
    const updatedCustomer = await this.customerODM.updateById(id, data);
    if (updatedCustomer) return this.createCustomerDomain(updatedCustomer);
 
    return null;
  }
}
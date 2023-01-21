import { Schema } from 'mongoose';
import ICustomer from '../Interfaces/ICustomer';
import AbstractODM from './AbstractODM';

export default class CustomerODM extends AbstractODM<ICustomer> {
  constructor() {
    const schema = new Schema<ICustomer>({
      birthDate: { type: String, required: true },
      name: { type: String, required: true },
      gender: { type: String, required: false },
      phone: { type: String, required: true },
      email: { type: String, required: true },
      cpf: { type: String, required: true },
      address: { type: String, required: true },
    }, { collection: 'customer' });
    super('customer', schema);
  }
}
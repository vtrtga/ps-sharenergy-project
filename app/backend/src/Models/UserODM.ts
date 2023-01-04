import { Schema } from 'mongoose';
import IUser from '../Interfaces/IUser';
import AbstractODM from './AbstractODM';

export default class UserODM extends AbstractODM<IUser> {
  constructor() {
    const schema = new Schema<IUser>({
      model: { type: String, required: true },
      birthDate: { type: String, required: true },
      gender: { type: String, required: false },
      name: { type: String, required: true },
      username: { type: String, required: true },
      password: { type: String, required: true },
    }, { collection: 'user' });

    super('user', schema);
  }
}
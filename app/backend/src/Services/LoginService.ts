import IUser from '../Interfaces/IUser';
import UserODM from '../Models/UserODM';
import User from '../Domains/User';
import IUserLogin from '../Interfaces/IUserLogin';

export default class LoginService {
  private userODM: UserODM;
  
  constructor() {
    this.userODM = new UserODM();
  }

  private createUserDomain(user: IUser | null): User | null {
    if (user) {
      return new User(user);
    }
    return null;
  }

  public async login(user: IUserLogin) {
    const users = await this.userODM.getOne(user);

    return this.createUserDomain(users);
  }
}
import IUser from './IUser';

export default interface ILoginService {
  login(): Promise<IUser>;
}
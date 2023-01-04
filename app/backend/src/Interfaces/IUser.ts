export default interface IUser {
  model: string;
  id?: string | undefined;
  birthDate: string;
  name: string;
  gender?: string;
  username: string;
  password: string;
}
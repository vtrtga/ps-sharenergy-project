export default interface IUser {
  id?: string | undefined;
  birthDate: string;
  name: string;
  gender?: string;
  username: string;
  password: string;
}
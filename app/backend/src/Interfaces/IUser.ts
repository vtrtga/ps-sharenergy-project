export default interface IUser {
  id: string;
  birthDate: string;
  name: string;
  gender?: string;
  username: string;
  password: string;
  imageURL: string;
}
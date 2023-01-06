export default interface ICustomer {
  id?: string | undefined;
  birthDate: string;
  name: string;
  gender?: string;
  phone: string;
  email: string;
  cpf: string;
  address: string;
}
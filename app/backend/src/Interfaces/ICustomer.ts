export default interface ICustomer {
  model: string;
  id?: string | undefined;
  birthDate: string;
  name: string;
  gender?: string;
  phone: string;
  email: string;
  cpf: string;
  address: string;
}
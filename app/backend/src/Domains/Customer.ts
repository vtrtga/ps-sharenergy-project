import ICustomer from "../Interfaces/ICustomer";
import Person from "./Person";

export default class Customer extends Person {
  email: string;
  cpf: string;
  phone: string;
  address: string;
  constructor(costumer: ICustomer) {
    super(costumer);

    this.email = costumer.email;
    this.cpf = costumer.cpf;
    this.phone = costumer.phone;
    this.address = costumer.address;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public getEmail() {
    return this.email;
  }

  public setCpf(cpf: string): void {
    this.cpf = cpf;
  }

  public getCpf() {
    return this.cpf;
  }

  public setPhone(phone: string): void {
    this.phone = phone;
  }

  public getPhone() {
    return this.phone;
  }

  public setAddress(address: string): void {
    this.address = address;
  }

  public getAddress() {
    return this.address;
  }
}
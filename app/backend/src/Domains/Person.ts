import IPerson from '../Interfaces/IPerson';

export default class Person {
  protected model: string;
  protected id?: string | undefined;
  protected birthDate: string;
  protected name: string;
  protected gender?: string;

  constructor(person: IPerson) {
    this.id = person.id;
    this.birthDate = person.birthDate;
    this.name = person.name;
    this.gender = person.gender;
  }

  public setId(id: string): void {
    this.id = id;
  }

  public setBirthDate(birthDate: string): void {
    this.birthDate = birthDate;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getId() {
    return this.id;
  }

  public getBirthDate() {
    return this.birthDate;
  }

  public getName() {
    return this.name;
  }
}
import IUser from "../Interfaces/IUser";
import Person from "./Person";

export default class User extends Person {
  public username: string;
  public password: string;

  constructor(user: IUser) {
    super(user);

    this.username = user.username;
    this.password = user.password;
  }

  public setUsername(username: string): void {
    this.username = username;
  }

  public getUsername() {
    return this.username;
  }

  public setPassword(password: string) {
    this.password = password;
  }

  public getPassword() {
    return this.password;
  }
}
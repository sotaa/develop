import { IUser } from "../user";

export interface IRegister extends IUser {}

export interface ILogin {
  username: string;
  password: string;
}

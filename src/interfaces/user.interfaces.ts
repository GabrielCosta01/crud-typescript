export interface IUserObject {
  name: string;
  email: string;
  password: string;
}

export interface IUserOutput {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface IUserLogin{
  email: string;
  password: string;
}
export type IUserBodyUpdate = {
  name?:string;
  email?:string;
  password?:string;
}
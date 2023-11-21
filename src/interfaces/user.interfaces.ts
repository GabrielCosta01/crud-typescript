import { Request } from "express";

export interface AuthRequest extends Request{
  user: {
    id:string;
  }
}

export interface IUserRequest {
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
export interface IUserLoginRequest{
  email:string;
  password:string;
}
export type IUserBodyUpdate = {
  name?:string;
  email?:string;
  password?:string;
}


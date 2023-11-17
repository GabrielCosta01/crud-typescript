import {Request, Response} from "express";
import { createUserService, getAllUsersService, loginUserService } from "../service/user.service";
import { IUserLogin, IUserObject } from "../interfaces/user.interfaces";

export const createUserController = async (req:Request, res:Response) => {
  const userObject:IUserObject = req.body;
  const response = await createUserService(userObject);

  return res.status(201).json(response);
};

export const loginUserController = async(req:Request, res:Response) => {
  const objectUser:IUserLogin = req.body;
  const token = await loginUserService(objectUser);

  return res.status(200).json(token);
}

export const getAllUsersController = async (req:Request, res:Response) => {
  const listUsers = await getAllUsersService();
  
  return res.status(200).json(listUsers);
}
import {Request, Response} from "express";
import { createUserService, getAllUsersService, loginUserService, updateUserService } from "../service/user.service";
import { IUserLogin, IUserRequest } from "../interfaces/user.interfaces";

export const createUserController = async (req:Request, res:Response) => {
  const userObject:IUserRequest = req.body;
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

export const updateUserController = async (req:Request | any, res:Response) => {
  const updateBody = req.body;
  console.log(updateBody, "BODY UPDATE");
  
  const idUser = req.user.id;
  const userUpdated = await updateUserService(updateBody, idUser);
  return res.status(200).json(userUpdated);
}
import {NextFunction, Request, Response} from "express";
import { createUserService, getAllUsersService, getUserService, loginUserService, updateUserService } from "../service/user.service";
import { AuthRequest, IUserLogin, IUserRequest } from "../interfaces/user.interfaces";
import { AppError } from "../error";

export const createUserController = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const userObject:IUserRequest = req.body;
    const response = await createUserService(userObject);
    return res.status(201).json(response);
  } catch (err) {
    next(err)
  }
};

export const loginUserController = async(req:Request, res:Response) => {
  const objectUser:IUserLogin = req.body;
  const token = await loginUserService(objectUser);
  return res.status(200).json(token);
};

export const getAllUsersController = async (req:Request, res:Response) => {
  const listUsers = await getAllUsersService();
  return res.status(200).json(listUsers);
};

export const getUserController = async (req:AuthRequest, res:Response) => {
  const userId:string = req.user.id;
  const getUser = await getUserService(userId);
  return res.status(200).json(getUser);
};

export const updateUserController = async (req:AuthRequest, res:Response, next:NextFunction) => {
  const updateBody = req.body;
  const idUser = req.user.id;

  if(updateBody !== undefined || updateBody !== null)return res.status(400).json({message:"Not have body!"});

  const userUpdated = await updateUserService(updateBody, idUser);
  return res.status(200).json(userUpdated);
};
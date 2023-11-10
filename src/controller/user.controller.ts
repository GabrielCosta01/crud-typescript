import {Request, Response} from "express";
import { createUserService } from "../service/user.service";
import { IUserObject } from "../interfaces/user.interfaces";

export const createUserController = async (req:Request, res:Response) => {
  const userObject:IUserObject = req.body;

  const response = await createUserService(userObject);
  
  return res.status(201).json(response);
};
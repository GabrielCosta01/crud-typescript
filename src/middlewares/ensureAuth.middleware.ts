import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import * as jwt from "jsonwebtoken";
import { AuthRequest } from "../interfaces/user.interfaces";

export const ensureAuthMiddleware = (req:AuthRequest, res:Response, next:NextFunction) => {
  if(req.headers.authorization === undefined || process.env.SECRET_KEY === undefined)throw new AppError("Missing header authorization",401);
  const authToken:string = req.headers.authorization;
  if(!authToken)throw new AppError("Missing header authorization",401);

  const token:string = authToken.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if(error)throw new AppError(error.message, 401);

    if(decoded === undefined){
      res.status(401).json({error:"Invalid token"});
      return
    }
    
    req.user = {
      id: String(decoded.sub),
    };
  });
  return next();
};
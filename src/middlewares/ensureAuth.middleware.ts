import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import * as jwt from "jsonwebtoken";

export const ensureAuthMiddleware = (req:Request, res:Response, next:NextFunction) => {
  const authToken:string = req.headers.authorization;
  if(!authToken)throw new AppError("Missing header authorization",401);

  const token:string = authToken.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if(error)throw new AppError(error.message, 401);

    req.body = {
      id: String(decoded.sub)
    };
  });
  return next();
};
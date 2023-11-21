import { NextFunction, Request, Response } from "express";
import { AppError } from "../error";
import * as jwt from "jsonwebtoken";
import "dotenv/config";

interface DecodedToken {
  user: {
    isAdmin: boolean;
  };
  iat: number;
  exp: number;
  sub: string;
}

export const ensureAuthAdminMiddleware = (req:Request, res:Response, next:NextFunction) => {
  if(req.headers.authorization === undefined || process.env.SECRET_KEY === undefined)throw new AppError("Missing header authorization",401);
  
  const authToken:string = req.headers.authorization;
  
  if(!authToken)throw new AppError("Missing header authorization", 401);

  const token:string = authToken.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded:DecodedToken) => {
    if(err)throw new AppError(err.message,401);
    
    const isAdmin = decoded.user.isAdmin;

    if(!isAdmin)throw new AppError("User not have authorization for this route", 401);
    
    req.body = {
      isAdmin: isAdmin
    }
    
  });
  return next();
}
import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";

export const verifyBodyMiddleware = (schema:AnySchema) => async (req:Request, res:Response, next:NextFunction) => {
  const validateBody = await schema.validate(req.body, {abortEarly:false, stripUnknown:true})
  .catch((err) => {
    return res.status(400).json({'message':err.errors})
  });

  req.body = validateBody;

  return next();
};
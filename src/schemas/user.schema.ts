import * as yup from "yup";
import { Schema } from "yup";
import { IUserBodyUpdate, IUserLoginRequest, IUserRequest } from "../interfaces/user.interfaces";

export const userDataRequestSchema:Schema<IUserRequest> = yup.object().shape({
  name: yup.string().required("name required field"),
  email: yup.string().email().required("email required field"),
  password: yup.string().required("password required field")
});

export const userUpdateRequestSchema:Schema<IUserBodyUpdate> = yup.object().shape({
  name: yup.string(),
  email: yup.string().email("use valid email"),
  password: yup.string()
});

export const userLoginRequestSchema: Schema<IUserLoginRequest> = yup.object().shape({
  email: yup.string().email().required("email required field"),
  password: yup.string().required()
});

export const userDataOutputUpdateSchema: Schema<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required()
});
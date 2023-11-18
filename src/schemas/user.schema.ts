import * as yup from "yup";
import { Schema } from "yup";

export const userDataRequestSchema:Schema<any> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required()
});
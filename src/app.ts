import express from "express";
import cors from "cors";
import {userRouter} from "./router/user.router";
import  {handleErrorMiddleware}  from "./error";

export const app = express();
app.use(express.json());
app.use("*", cors())

app.use("/users", userRouter);

app.use(handleErrorMiddleware);
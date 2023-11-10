import express from "express";
import cors from "cors";
import userRouter from "./router/user.router";
import { handleError } from "./error";

export const app = express();
app.use(express.json());
app.use("*", cors())

app.use("", userRouter) // Rote users

app.use(handleError);
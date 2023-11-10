import { Router } from "express";
import { createUserController } from "../controller/user.controller";

const userRouter = Router();

userRouter.post("/user", createUserController);

export default userRouter;
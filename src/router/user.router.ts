import { Router } from "express";
import { createUserController, loginUserController } from "../controller/user.controller";

const userRouter = Router();

userRouter.post("/user", createUserController);
userRouter.post("/login", loginUserController)

export default userRouter;
import { Router } from "express";
import { createUserController, getAllUsersController, loginUserController, updateUserController } from "../controller/user.controller";
import { ensureAuthAdminMiddleware } from "../middlewares/ensureAdmin.middlewares";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

export const userRouter = Router();

userRouter.post("", createUserController);
userRouter.post("/login", loginUserController);
userRouter.get("", ensureAuthMiddleware, ensureAuthAdminMiddleware, getAllUsersController);
userRouter.patch("", ensureAuthMiddleware,updateUserController);
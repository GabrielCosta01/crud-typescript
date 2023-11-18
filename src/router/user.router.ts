import { Router } from "express";
import { createUserController, getAllUsersController, loginUserController, updateUserController } from "../controller/user.controller";
import { ensureAuthAdminMiddleware } from "../middlewares/ensureAdmin.middlewares";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { verifyBodyMiddleware } from "../middlewares/verifyBodyRequest.middleware";
import { userDataRequestSchema } from "../schemas/user.schema";

export const userRouter = Router();

userRouter.post("", verifyBodyMiddleware(userDataRequestSchema), createUserController);
userRouter.post("/login", loginUserController);
userRouter.get("", ensureAuthMiddleware, ensureAuthAdminMiddleware, getAllUsersController);
userRouter.patch("", ensureAuthMiddleware, updateUserController);
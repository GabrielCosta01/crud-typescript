import { Router } from "express";
import { createUserController, getAllUsersController, loginUserController } from "../controller/user.controller";
import { ensureAuthAdminMiddleware } from "../middlewares/ensureAdmin.middlewares";
import { handleError } from "../error";

const userRouter = Router();

userRouter.post("", createUserController);
userRouter.post("/login", loginUserController)
userRouter.get("", ensureAuthAdminMiddleware, getAllUsersController) // APENAS ADMINISTRADOR TEM ACESSO

export default userRouter;
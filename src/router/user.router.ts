import { Router } from "express";
import { createUserController, getAllUsersController, loginUserController } from "../controller/user.controller";
import { ensureAuthAdmin } from "../middlewares/admin.middlewares";
import { handleError } from "../error";

const userRouter = Router();

userRouter.post("", createUserController);
userRouter.post("/login", loginUserController)
userRouter.get("", ensureAuthAdmin, getAllUsersController) // APENAS ADMINISTRADOR TEM ACESSO

export default userRouter;
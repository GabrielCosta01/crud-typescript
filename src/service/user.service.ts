import "dotenv/config";
import jwt from "jsonwebtoken"
import { compare } from "bcrypt";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { IUserLogin, IUserObject, IUserOutput } from "../interfaces/user.interfaces";

export const createUserService = async (userObject:IUserObject):Promise<Object> => {
  const usersRepo = AppDataSource.getRepository('users');
  const userFind = await usersRepo.exist({where:{ email:userObject.email}});

  if(userFind)throw new AppError("User is alredy exist",400);
  
  const newUser = usersRepo.create(userObject);

  await usersRepo.save(newUser);
  
  return newUser;
};

export const loginUserService = async (userObject:IUserLogin):Promise<Object> => {
  const usersRepo = AppDataSource.getRepository('users');
  const findUser = await usersRepo.findOneBy({email:userObject.email});

  if(!findUser) throw new AppError("User not exists", 403);

  const passwordMatch = await compare(userObject.password, findUser.password);

  if(!passwordMatch) throw new AppError("User not exists", 403);

  if (!process.env.SECRET_KEY) {
    throw new Error("Chave secreta não definida");
  }
  
  const token = jwt.sign(
    {user: {isAdmin:findUser.isAdmin || false}},
    process.env.SECRET_KEY,
    {
      expiresIn: '24h',
      subject: findUser.id,
    }
  );

  return { token: token}
}

export const getAllUsersService = async () => {
  const userRepo = AppDataSource.getRepository("users");
  const listUsers = await userRepo.find();

  return listUsers
}
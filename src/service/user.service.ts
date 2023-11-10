import { AppDataSource } from "../data-source";
import { AppError } from "../error";
import { IUserObject } from "../interfaces/user.interfaces";

export const createUserService = async (userObject:IUserObject):Promise<any> => { // :Promise:<IUserOutput>
  const usersRepo = AppDataSource.getRepository('users');
  const userFind = await usersRepo.findOneBy({email: userObject.email});

  if(userFind)throw new AppError("User is alredy exist",400);
  
  const newUser = usersRepo.create(userObject);

  await usersRepo.save(newUser);
  
  return newUser;
};
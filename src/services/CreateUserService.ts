import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

export class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {
    if (!email) {
      throw new Error("Email incorrect!");
    }
    const userRepository = getCustomRepository(UserRepositories);

    const userAlreadyExists = await userRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new Error("User already exists!");
    }

    const hashPassword = await hash(password, 8);
    const user = userRepository.create({
      name,
      email,
      admin,
      password: hashPassword,
    });

    await userRepository.save(user);
    return user;
  }
}

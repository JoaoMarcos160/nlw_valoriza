import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepositories";

interface IAuthenticateUserRequest {
  email: string;
  password: string;
}

export class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateUserRequest) {
    const usersRepositories = getCustomRepository(UserRepositories);

    const user = await usersRepositories.findOne({ email });
    if (!user) {
      throw new Error("Email or Password incorrect!");
    }

    const passwordValid = await compare(password, user.password);
    if (!passwordValid) {
      throw new Error("Email or Password incorrect!");
    }

    const token = sign(
      {
        email: user.email,
      },
      "joaoMarcosFeliz70",
      {
        subject: user.id,
        expiresIn: "1d",
      }
    );

    return token;
  }
}

import { Response, Request } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const { name, email, admin } = request.body;

    const createUserService = new CreateUserService();
    const user = await createUserService.execute({ name, email, admin });
    setTimeout(() => {
      return response.json(user);
    }, 2000);
  }
}

export { CreateUserController };

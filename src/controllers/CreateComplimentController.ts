import { Request, Response } from "express";
import { CreateComplimentsService } from "../services/CreateComplimentService";

export class CreateComplimentsController {
  async handle(request: Request, response: Response) {
    const { tag_id, user_receiver, message } = request.body;
    const user_sender = request.user_id;

    const createComplimentsService = new CreateComplimentsService();

    const compliment = await createComplimentsService.execute({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });
    return response.json(compliment);
  }
}

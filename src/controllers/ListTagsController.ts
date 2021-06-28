import { Request, Response } from "express";
import { ListTagsService } from "../services/ListTagsService";

export class ListTagsController {
  async handle(request: Request, response: Response) {
    const listUserSendComplimentsService = new ListTagsService();

    const tags = await listUserSendComplimentsService.execute();

    return response.json(tags);
  }
}

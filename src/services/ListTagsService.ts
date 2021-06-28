import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { TagsRepositories } from "../repositories/TagsRepositories";

export class ListTagsService {
  async execute() {
    const tagsRepositories = getCustomRepository(TagsRepositories);

    const tags = await tagsRepositories.find();
    return tags;
  }
}

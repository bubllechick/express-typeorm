import { AppDataSource } from "../data-source";
import { Videos } from "../entities/Videos";


export const videoRepository = AppDataSource.getRepository(Videos)
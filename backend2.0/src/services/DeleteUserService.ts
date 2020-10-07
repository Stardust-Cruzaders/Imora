import { DeleteResult, getRepository } from 'typeorm';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  id: string;
}

export default class DeleteUserService {
  public async execute({ id }: Request): Promise<DeleteResult> {
    const usersRepository = getRepository(User);

    const checkIfExists = await usersRepository.findOne(id);
    if (checkIfExists === undefined) {
      throw new AppError("User doesn't exist", 404);
    }

    const deleteResult = await usersRepository.delete({ id });
    return deleteResult;
  }
}

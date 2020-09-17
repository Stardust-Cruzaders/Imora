import { getRepository } from 'typeorm';
import User from '../models/User';
import AppError from '../errors/AppError';

interface Request {
  email: string;
}
export default class FindUserService {
  public async execute({ email }: Request): Promise<boolean> {
    const usersRepository = getRepository(User);

    if (email.includes('@')) {
      const emailParts = email.split('@');

      if (!emailParts[1].includes('.com')) {
        throw new AppError('invalid email format');
      }
    } else {
      throw new AppError('invalid email format');
    }
    const checkIfUserExists = await usersRepository.findOne({
      where: { email },
    });
    if (checkIfUserExists) {
      return true;
    }
    return false;
  }
}
